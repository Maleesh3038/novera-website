export type Testimonial = {
  id: string;
  name: string;
  era: "student" | "visit";
  country: string;
  quote: string;
  isVideo?: boolean;
};

/* Attha client stories labunaam, meeke ethulata ekathu karanna.
   Danata his — boru reviews site eke thiyenne na. */
export const testimonials: Testimonial[] = [];
