import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";
import ContactForm from "./ContactForm";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Novera International — WhatsApp, email, office address and a free consultation form.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Contact</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Let&apos;s start your Era</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            Reach out on WhatsApp for the fastest response, or fill in the form below to book a free
            consultation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Talk to a consultant" />
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">Office</p>
                  <p className="text-sm text-text-soft">{siteInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">WhatsApp</p>
                  <p className="text-sm text-text-soft">{siteInfo.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <p className="text-sm text-text-soft">{siteInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">Working Hours</p>
                  {siteInfo.hours.map((h) => (
                    <p key={h.days} className="text-sm text-text-soft">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href={siteInfo.whatsappLink} variant="amber" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </LinkButton>
              <LinkButton href={`mailto:${siteInfo.email}`} variant="ghost">
                <Mail className="h-4 w-4" /> Email Us
              </LinkButton>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Novera International Office Location"
                src={siteInfo.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Free Consultation" title="Book your free consultation" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
