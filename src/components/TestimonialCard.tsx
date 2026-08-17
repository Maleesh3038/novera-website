import { PlayCircle, Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card flex h-full flex-col gap-4 p-6">
      {testimonial.isVideo ? (
        <div className="flex h-32 items-center justify-center rounded-xl bg-navy/90 text-white">
          <PlayCircle className="h-10 w-10 text-cyan" />
        </div>
      ) : (
        <Quote className="h-8 w-8 text-cyan" />
      )}
      <p className="flex-1 text-sm text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>
      <div>
        <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
        <p className="text-xs text-text-soft">
          {testimonial.country} · {testimonial.era.charAt(0).toUpperCase() + testimonial.era.slice(1)} Era
        </p>
      </div>
    </div>
  );
}
