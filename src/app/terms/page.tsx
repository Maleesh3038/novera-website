import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Novera International's study abroad and visa consultancy services.",
};

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-soft">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
          <p>
            These Terms of Service govern your use of Novera International&apos;s website, Client
            Portal, and consultancy services. By engaging our services, you agree to the terms below.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Nature of our services</h2>
            <p className="mt-2">
              Novera International provides study abroad and visa consultancy services, including free
              initial consultation, eligibility assessment, application preparation, and lodgment
              support. We are consultancy professionals, not the deciding immigration authority — final
              visa decisions rest solely with the relevant government or institution.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">No guarantee of outcome</h2>
            <p className="mt-2">
              While we apply our full expertise to every case, we cannot guarantee the approval of any
              visa, study place, or immigration application. Tools such as the Nova AI Outcome
              Estimator provide indicative guidance only and are not a guarantee of any result.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Client responsibilities</h2>
            <p className="mt-2">
              Clients are responsible for providing accurate, complete and truthful information and
              documentation. Novera is not liable for outcomes resulting from inaccurate or incomplete
              information provided by the client.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Fees</h2>
            <p className="mt-2">
              Initial consultation is free of charge. Any applicable service fees will be communicated
              transparently before work begins on your case.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Client Portal</h2>
            <p className="mt-2">
              The Client Portal is provided to help you track your case and communicate with your
              consultant. Access is currently demonstrated with a simplified sign-in flow; production
              use requires secure authentication to be implemented.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to {siteInfo.email}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
