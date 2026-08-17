import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore all study, work and settlement destinations Novera International covers — 9 Eras destinations plus Dubai, Singapore and Malaysia.",
};

export default function DestinationsPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">All Destinations</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Where would you like to go?</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            Twelve destinations, one trusted guide. Explore visa types, costs, timelines and work
            rights for every country we support.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Study, Work & Settle" title="Browse all destinations" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
