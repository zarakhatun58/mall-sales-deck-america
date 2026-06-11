import heroImg from "../assets/hero-mall.jpg";
import retailImg from "../assets/retail.jpg";
import luxuryImg from "../assets/luxury.jpg";
import diningImg from "../assets/dining.jpg";
import entertainmentImg from "../assets/entertainment.jpg";
import eventsImg from "../assets/events.jpg";

export const mall = {
  name: "Mall of America",
  tagline: "More than a mall. A city under one roof.",
  location: "Bloomington, Minnesota · USA",
  established: 1992,
  images: {
    hero: heroImg,
    retail: retailImg,
    luxury: luxuryImg,
    dining: diningImg,
    entertainment: entertainmentImg,
    events: eventsImg,
  },
};

export const heroStats = [
  { value: "5.6M", label: "Square Feet" },
  { value: "40M+", label: "Annual Visitors" },
  { value: "520+", label: "Retail Tenants" },
  { value: "60+", label: "Restaurants" },
];

export const whyStats = [
  { value: "40M", label: "Visitors Annually", note: "More than Disney World, the Grand Canyon, and Graceland combined." },
  { value: "$2B", label: "Economic Impact", note: "Generated for Minnesota each year." },
  {value: "30%", label: "Out-of-State", note: "Of visitors travel from beyond the region." },
  { value: "8 min", label: "From MSP Airport", note: "Direct light-rail connection to one of America's busiest hubs." },
];

export const retailTenants = [
  "Nordstrom", "Macy's", "Apple", "Nike", "Sephora", "Zara",
  "LEGO Store", "Microsoft", "Lululemon", "Anthropologie", "H&M", "Uniqlo",
];

export const luxuryTenants = [
  "Burberry", "Coach", "Michael Kors", "Tiffany & Co.", "Tumi", "Montblanc",
];

export const diningHighlights = [
  { name: "Crave", type: "American · Sushi", note: "Flagship signature dining" },
  { name: "Tony Roma's", type: "Steakhouse", note: "Award-winning ribs" },
  { name: "Twin City Grill", type: "American Bistro", note: "Local favorite" },
  { name: "Hard Rock Cafe", type: "Music · American", note: "Iconic global brand" },
  { name: "Cantina #1", type: "Modern Mexican", note: "Tequila & tapas" },
  { name: "Shake Shack", type: "Better Burger", note: "Cult favorite" },
];

export const attractions = [
  {
    name: "Nickelodeon Universe",
    type: "Indoor Theme Park",
    detail: "27 rides · 7-acre indoor park · the largest in North America.",
  },
  {
    name: "SEA LIFE Minnesota Aquarium",
    type: "Aquarium",
    detail: "1.3M gallons · walk-through ocean tunnel · 10,000+ sea creatures.",
  },
  {
    name: "FlyOver America",
    type: "Flight Simulator",
    detail: "Suspended-seat 4D theater that flies guests across the continent.",
  },
  {
    name: "Crayola Experience",
    type: "Family Attraction",
    detail: "60,000 sq ft of hands-on creative play across 26 attractions.",
  },
];

export const events = [
  {
    title: "Concerts & Celebrity Appearances",
    blurb: "Rotunda stage hosts 400+ events annually — from chart-topping artists to album signings.",
    capacity: "Up to 7,000 attendees",
  },
  {
    title: "Brand Activations & Pop-Ups",
    blurb: "Turnkey activation footprints across the property — from atrium takeovers to immersive media walls.",
    capacity: "200 – 50,000 sq ft",
  },
  {
    title: "Corporate & Private Events",
    blurb: "After-hours buyouts, holiday parties, product launches with full retail integration.",
    capacity: "Up to 30,000 guests",
  },
  {
    title: "Conventions & Expositions",
    blurb: "Adjacent to the Hyatt Regency Bloomington & MSP — full-service hospitality at the door.",
    capacity: "Multi-venue, multi-day",
  },
];

export const partnerLogos = [
  "Nike", "Apple", "LEGO", "Microsoft", "Coca-Cola", "Disney",
  "Marvel", "Sephora", "Samsung", "Nintendo", "Toyota", "Delta",
];

// -------- Sponsorship tiers --------
export const sponsorshipTiers = [
  {
    name: "Activation",
    price: "From $250K",
    duration: "30 – 90 days",
    color: "from-slate-400 to-slate-200",
    blurb: "Turnkey pop-ups and atrium takeovers with full production support.",
    includes: [
      "1 atrium footprint (up to 5,000 sq ft)",
      "Digital network: 200 screens / 2 weeks",
      "Social + on-property amplification",
      "Dedicated activation producer",
    ],
    reach: "2.5M impressions",
  },
  {
    name: "Anchor",
    price: "From $1.5M",
    duration: "12 months",
    color: "from-amber-400 to-yellow-200",
    blurb: "Category exclusivity, branded zones, and year-round storytelling.",
    includes: [
      "Category exclusivity (1 of 12 verticals)",
      "Branded zone build-out (up to 15K sq ft)",
      "1,800-screen network rotation",
      "4 tentpole event integrations / year",
      "Co-branded loyalty + data sharing",
    ],
    reach: "28M impressions",
    featured: true,
  },
  {
    name: "Naming Rights",
    price: "$5M+ / yr",
    duration: "3 – 10 years",
    color: "from-amber-200 via-yellow-100 to-amber-300",
    blurb: "Property, wing, or attraction naming with full architectural integration.",
    includes: [
      "Wing or attraction nomenclature",
      "Exterior LED + wayfinding integration",
      "Permanent architectural signage",
      "First-right on all sponsorable inventory",
      "C-suite governance partnership",
    ],
    reach: "40M+ impressions / yr",
  },
];

// -------- Audience reach / demographics for heatmap --------
export const audienceRegions = [
  { code: "MN", name: "Minnesota Metro", visitors: 14.2, share: 35, drive: "<60 min", income: "$92K avg HHI" },
  { code: "WI", name: "Wisconsin", visitors: 5.6, share: 14, drive: "2 – 4 hr", income: "$78K avg HHI" },
  { code: "IA", name: "Iowa", visitors: 3.2, share: 8, drive: "3 – 5 hr", income: "$74K avg HHI" },
  { code: "ND/SD", name: "Dakotas", visitors: 2.8, share: 7, drive: "4 – 6 hr", income: "$71K avg HHI" },
  { code: "IL", name: "Illinois / Chicago", visitors: 2.4, share: 6, drive: "Fly · 1.5 hr", income: "$88K avg HHI" },
  { code: "CAN", name: "Canada (ON/MB)", visitors: 4.0, share: 10, drive: "Fly · 2 hr", income: "$82K avg HHI" },
  { code: "INTL", name: "International", visitors: 3.6, share: 9, drive: "MSP hub", income: "Tourist VIP" },
  { code: "USA", name: "Rest of USA", visitors: 4.2, share: 11, drive: "MSP direct", income: "Mixed" },
];

// 10x6 heatmap intensity grid (0 - 100). Represents foot traffic density.
export const heatmapGrid: number[][] = [
  [12, 18, 24, 32, 40, 45, 38, 28, 20, 14],
  [22, 36, 52, 68, 78, 82, 70, 52, 36, 22],
  [34, 58, 82, 95, 98, 96, 88, 70, 48, 30],
  [40, 64, 88, 98, 100, 98, 92, 76, 54, 34],
  [28, 48, 72, 86, 92, 90, 80, 62, 42, 26],
  [16, 26, 40, 56, 64, 60, 52, 38, 24, 14],
];

export const heatmapZones = [
  { x: 1, y: 1, label: "North Atrium", traffic: "Peak: 18K/hr" },
  { x: 4, y: 3, label: "Rotunda · Center Stage", traffic: "Peak: 24K/hr" },
  { x: 6, y: 2, label: "Nickelodeon Universe", traffic: "Peak: 16K/hr" },
  { x: 8, y: 4, label: "Luxury Wing", traffic: "Peak: 6K/hr" },
];

// -------- Retail categories --------
export const retailCategories = [
  { name: "Fashion & Apparel", count: 185, anchors: ["Zara", "H&M", "Uniqlo", "Lululemon"] },
  { name: "Beauty & Wellness", count: 42, anchors: ["Sephora", "MAC", "Lush", "Kiehl's"] },
  { name: "Tech & Electronics", count: 28, anchors: ["Apple", "Microsoft", "Samsung"] },
  { name: "Home & Lifestyle", count: 54, anchors: ["Pottery Barn", "Anthropologie", "West Elm"] },
  { name: "Kids & Family", count: 36, anchors: ["LEGO Store", "Build-A-Bear", "Disney"] },
  { name: "Sport & Outdoor", count: 31, anchors: ["Nike", "adidas", "Vans", "Columbia"] },
];

export const luxuryCategories = [
  { name: "Heritage Fashion", anchors: ["Burberry", "Coach", "Michael Kors"] },
  { name: "Fine Jewelry & Watches", anchors: ["Tiffany & Co.", "Montblanc", "Pandora"] },
  { name: "Travel & Leather", anchors: ["Tumi", "Coach", "Vera Bradley"] },
  { name: "Beauty Concierge", anchors: ["La Mer", "Jo Malone", "Chanel Beauté"] },
];

// -------- Events extras --------
export const venueCapacities = [
  { venue: "The Rotunda", capacity: 7000, sqft: 38000, type: "Concert / Stage" },
  { venue: "Huntington Bank Stage", capacity: 1200, sqft: 8500, type: "Activation" },
  { venue: "Nickelodeon Universe (buyout)", capacity: 12000, sqft: 305000, type: "Park" },
  { venue: "North Atrium", capacity: 4500, sqft: 22000, type: "Pop-Up" },
  { venue: "Full Property Buyout", capacity: 30000, sqft: 5600000, type: "Whole-Mall" },
];

export const pastEvents = [
  { title: "Taylor Swift Album Signing", year: 2014, attendees: "13K+", tag: "Music" },
  { title: "NFL Draft Town", year: 2018, attendees: "200K", tag: "Sport" },
  { title: "Marvel Universe LIVE", year: 2023, attendees: "85K", tag: "Brand" },
  { title: "LEGO Masters Live", year: 2022, attendees: "42K", tag: "Family" },
  { title: "Samsung Galaxy Launch", year: 2024, attendees: "60K", tag: "Tech" },
  { title: "Black Friday Doorbusters", year: 2024, attendees: "120K", tag: "Retail" },
];

export const galleryVideos = [
  { title: "Inside the Atrium", thumb: retailImg },
  { title: "Luxury Wing Tour", thumb: luxuryImg },
  { title: "Dining Reel", thumb: diningImg },
  { title: "Nickelodeon Universe", thumb: entertainmentImg },
];
