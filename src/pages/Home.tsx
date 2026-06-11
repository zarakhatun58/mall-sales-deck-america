
import { Hero } from '../sections/Hero';
import { WhyUs } from '../sections/WhyUs';
import { Retail } from '../sections/Retail';
import { Dining } from '../sections/Dining';
import { Entertainment } from '../sections/Entertainment';
import { Events } from '../sections/Events';
import { Navbar } from '../components/Navbar';
import { Luxury } from '../sections/Luxury';
import { CTA } from '../sections/CTA';
import { Sponsorship } from '../sections/Sponsorship';


const Home = () => {
    return (
        <main className="bg-background text-foreground">
            <Navbar />
            <Hero />
            <WhyUs />
            <Retail />
            <Luxury />
            <Dining />
            <Entertainment />
            <Events />
            <Sponsorship />
            <CTA />
            <div className="border-t border-border bg-ink/60 px-6 py-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                Visuals generated with AI · Concept renders for pitch purposes
            </div>
        </main>
    );
};

export default Home;