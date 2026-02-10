import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import formulaStudentRacer from "/content/gallery/2025/warwick-formula-student-racer.jpg";

type SponsorshipTier = {
  id: string;
  name: string;
  headline: string;
  amount: string;
  surfaceClassName: string;
  headerClassName: string;
  bodyClassName: string;
  shadowClassName: string;
  shineClassName: string;
  benefits: string[];
};

const tiers: SponsorshipTier[] = [
  {
    id: "gold",
    name: "Gold Tier:",
    headline: "Become Part Of Our Team",
    amount: "£3001+",
    surfaceClassName:
      "bg-[radial-gradient(circle_at_20%_-10%,rgba(255,232,164,0.22),transparent_48%),linear-gradient(180deg,rgba(26,21,8,0.92)_0%,rgba(18,14,8,0.95)_100%)]",
    headerClassName:
      "bg-[linear-gradient(135deg,#8b6b16_0%,#D4AF37_22%,#f7e8b3_44%,#D4AF37_67%,#8b6b16_100%)] text-black",
    bodyClassName:
      "bg-[linear-gradient(180deg,rgba(44,35,12,0.78)_0%,rgba(20,15,8,0.88)_100%)]",
    shadowClassName:
      "shadow-[0_14px_36px_rgba(212,175,55,0.24)] md:hover:shadow-[0_26px_56px_rgba(212,175,55,0.38)]",
    shineClassName:
      "bg-[linear-gradient(115deg,rgba(255,255,255,0)_20%,rgba(255,248,220,0.34)_35%,rgba(255,255,255,0.07)_52%,rgba(255,255,255,0)_70%)]",
    benefits: [
      "Includes all Silver Tier benefits",
      "Presence on Warwick Racing AI website",
      "Logo on our sensor plate/test car",
      "Logo on our team wear",
      "Invitation to private events",
      "Workshop tour",
    ],
  },
  {
    id: "silver",
    name: "Silver Tier:",
    headline: "Support Our Progress",
    amount: "£1000-3000",
    surfaceClassName:
      "bg-[radial-gradient(circle_at_22%_-12%,rgba(237,239,242,0.18),transparent_45%),linear-gradient(180deg,rgba(12,16,22,0.92)_0%,rgba(10,13,18,0.95)_100%)]",
    headerClassName:
      "bg-[linear-gradient(135deg,#888f97_0%,#C0C0C0_24%,#f1f4f7_46%,#C0C0C0_70%,#888f97_100%)] text-black",
    bodyClassName:
      "bg-[linear-gradient(180deg,rgba(27,33,42,0.76)_0%,rgba(13,17,24,0.88)_100%)]",
    shadowClassName:
      "shadow-[0_14px_36px_rgba(168,179,194,0.24)] md:hover:shadow-[0_26px_56px_rgba(168,179,194,0.36)]",
    shineClassName:
      "bg-[linear-gradient(115deg,rgba(255,255,255,0)_22%,rgba(255,255,255,0.4)_36%,rgba(255,255,255,0.08)_53%,rgba(255,255,255,0)_72%)]",
    benefits: [
      "Direct access to 30+ motivated students with industry standard experience from a top Russell Group University",
      "Company awareness to Warwick students",
      "Internship and placement opportunities",
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
                className={`relative flex flex-col overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-300 ease-out md:hover:-translate-y-2 ${tier.surfaceClassName} ${tier.shadowClassName}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 z-0 ${tier.shineClassName}`}
                />

                <header className={`relative z-10 px-6 py-6 text-center ${tier.headerClassName}`}>
                  <p className="text-xl font-semibold uppercase tracking-wide md:text-2xl">
                    {tier.name}
                  </p>
                  <p className="mt-1 text-4xl font-bold uppercase tracking-tight md:text-5xl">
                    {tier.headline}
                  </p>
                  <p className="mt-2 text-4xl font-bold md:text-5xl">{tier.amount}</p>
                </header>

                <div className={`relative z-10 flex-1 ${tier.bodyClassName}`}>
                  <ul className="space-y-5 px-6 py-8 md:px-8 md:py-10">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-xl text-white md:text-3xl">
                        <Check className="mt-1 h-6 w-6 shrink-0 text-green-400 md:h-8 md:w-8" />
                        <span className="text-white">{benefit}</span>
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
