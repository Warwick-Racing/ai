import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import formulaStudentRacer from "/content/gallery/warwick-formula-student-racer.jpg";

type SponsorshipTier = {
  id: string;
  name: string;
  headline: string;
  amount: string;
  headerClassName: string;
  cardClassName: string;
  bodyClassName: string;
  benefits: string[];
};

const tiers: SponsorshipTier[] = [
  {
    id: "gold",
    name: "Gold Tier",
    headline: "Become Part Of Our Team",
    amount: "£3001+",
    headerClassName: "bg-[#D4AF37] text-black",
    cardClassName: "border-[#D4AF37]",
    bodyClassName: "bg-[#2e250d]/55",
    benefits: [
      "Includes all Silver Tier benefits",
      "WRAI website presence",
      "Private events (hackathon, networking, presentations)",
      "Logo on sensor plate",
      "Tour of WMG",
    ],
  },
  {
    id: "silver",
    name: "Silver Tier",
    headline: "Support Our Progress",
    amount: "£1000-3000",
    headerClassName: "bg-[#C0C0C0] text-black",
    cardClassName: "border-[#C0C0C0]",
    bodyClassName: "bg-[#1f242a]/55",
    benefits: [
      "Student access",
      "Logo on apparel",
      "Company profile awareness",
    ],
  },
];

export default function Sponsorship() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden px-4 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${formulaStudentRacer})` }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

        <div className="relative mx-auto max-w-7xl">
          <h1 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
            Join Us Through 1 Of Our 2 Programs
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tiers.map((tier) => (
              <article
                key={tier.id}
                className={`overflow-hidden border-2 bg-black/70 ${tier.cardClassName}`}
              >
                <header className={`px-6 py-6 text-center ${tier.headerClassName}`}>
                  <p className="text-xl font-semibold uppercase tracking-wide md:text-2xl">
                    {tier.name}
                  </p>
                  <p className="mt-1 text-4xl font-bold uppercase tracking-tight md:text-5xl">
                    {tier.headline}
                  </p>
                  <p className="mt-2 text-4xl font-bold md:text-5xl">{tier.amount}</p>
                </header>

                <div className={tier.bodyClassName}>
                  <ul className="space-y-5 px-6 py-8 md:px-8 md:py-10">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-xl text-gray-100 md:text-3xl">
                        <Check className="mt-1 h-6 w-6 shrink-0 text-green-400 md:h-8 md:w-8" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl border border-zinc-700 bg-zinc-900/70 p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Partner With Warwick Racing AI</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Work directly with a high-performing student team building real autonomous racing systems.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-green-500 px-8 py-4 text-base font-semibold tracking-wide text-black transition-colors hover:bg-green-600"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
