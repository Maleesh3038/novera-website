import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Novera International's privacy policy covering how we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-soft">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
          <p>
            Novera International (&ldquo;Novera&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
            privacy and is committed to protecting the personal information you share with us as part
            of your study abroad and visa consultancy journey.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Information we collect</h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, contact details,
              academic records, passport details, and financial documentation, in order to assess your
              eligibility and prepare your application for study, visit or immigration purposes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">How we use your information</h2>
            <p className="mt-2">
              Your information is used solely to provide consultancy services: assessing eligibility,
              preparing documentation, liaising with institutions and immigration authorities, and
              communicating with you about your case.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Data sharing</h2>
            <p className="mt-2">
              We share your information only with relevant institutions, immigration authorities, and
              service providers (such as accommodation or air ticket partners) strictly as required to
              process your application, and never sell your personal data to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Your rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal data at any time
              by contacting us at {siteInfo.email}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Contact</h2>
            <p className="mt-2">
              For privacy-related questions, please contact us at {siteInfo.email} or visit our office
              at {siteInfo.address}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
