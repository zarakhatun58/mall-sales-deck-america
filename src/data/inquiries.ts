import { z } from "zod";
export const sponsorshipSchema = z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(100),
    company: z.string().trim().min(2, "Company is required").max(120),
    email: z.string().trim().email("Enter a valid work email").max(160),
    tier: z.string().min(1, "Select a tier"),
    budget: z.string().min(1, "Select a budget band"),
    category: z.string().min(1, "Select a category"),
    goal: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(1000),
});
export const eventsSchema = z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(100),
    company: z.string().trim().min(2, "Company / Brand is required").max(120),
    email: z.string().trim().email("Enter a valid email").max(160),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    venue: z.string().min(1, "Select a venue"),
    type: z.string().min(1, "Select an event type"),
    date: z.string().min(1, "Choose a preferred date").refine((v) => {
        const d = new Date(v);
        return !isNaN(d.getTime()) && d.getTime() > Date.now() - 86400000;
    }, "Date must be today or later"),
    attendees: z.coerce.number({
        error: "Enter a number",
    })
        .int("Whole number only")
        .min(1, "At least 1 attendee")
        .max(100000, "Exceeds property capacity"),
    notes: z.string().trim().max(1500).optional().or(z.literal("")),
});
export type SponsorshipPayload = z.infer<typeof sponsorshipSchema>;
export type EventsPayload = z.infer<typeof eventsSchema>;
export type InquiryRecord = {
    id: string;
    kind: "sponsorship" | "events";
    submittedAt: string;
    payload: Record<string, unknown>;
};
const STORAGE_KEY = "moa.inquiries.v1";
function persist(record: InquiryRecord) {
    if (typeof window === "undefined") return;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const list: InquiryRecord[] = raw ? JSON.parse(raw) : [];
        list.unshift(record);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
    } catch {
        // ignore quota errors
    }
}
/**
 * Simulates a network submission. Resolves with a reference id on success.
 * Triggers an error state when the email is "fail@example.com" so reviewers
 * can verify the error UI on demand.
 */
export async function submitInquiry(
    kind: InquiryRecord["kind"],
    payload: Record<string, unknown>,
): Promise<{ id: string }> {
    await new Promise((r) => setTimeout(r, 900));
    if (typeof payload.email === "string" && payload.email.toLowerCase() === "fail@example.com") {
        throw new Error("Our intake service is temporarily unavailable. Please try again.");
    }
    const id = `MOA-${Date.now().toString(36).toUpperCase()}`;
    persist({ id, kind, submittedAt: new Date().toISOString(), payload });
    return { id };
}
