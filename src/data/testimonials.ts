export type Testimonial = {
  id: string;
  name: string;
  era: "discover" | "learn" | "belong";
  country: string;
  quote: string;
  isVideo?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ishara Perera",
    era: "learn",
    country: "United Kingdom",
    quote:
      "Novera helped me secure my offer from a top London university and walked me through the Graduate Route from day one. I now work full-time in the UK.",
  },
  {
    id: "t2",
    name: "Dinuka Wijesinghe",
    era: "learn",
    country: "Australia",
    quote:
      "The Genuine Student statement felt intimidating, but Novera's team helped me tell my story clearly. My visa was approved without a single request for more information.",
  },
  {
    id: "t3",
    name: "Sanduni Rathnayake",
    era: "learn",
    country: "New Zealand",
    quote:
      "Knowing I only had to pay tuition after my visa was approved took so much pressure off my family. Novera made the whole process transparent.",
    isVideo: true,
  },
  {
    id: "t4",
    name: "Ravindu Silva",
    era: "learn",
    country: "Dubai / UAE",
    quote:
      "I wanted a shorter flight home and Dubai gave me that plus a great business degree. Novera handled every document without a single delay.",
  },
  {
    id: "t5",
    name: "Nethmi Karunaratne",
    era: "learn",
    country: "Singapore",
    quote:
      "The SOLAR process looked confusing until Novera broke it into simple steps. I had my IPA letter within weeks.",
  },
  {
    id: "t6",
    name: "Tharindu Jayasuriya",
    era: "learn",
    country: "Malaysia",
    quote:
      "Malaysia gave me a quality degree at a fraction of the cost, and Novera's EMGS guidance meant zero surprises at the airport.",
    isVideo: true,
  },
  {
    id: "t7",
    name: "Priyanka Fernando",
    era: "discover",
    country: "Australia",
    quote:
      "Novera's team reviewed my rejected skilled visa application, identified the gap, and resubmitted a stronger case that was approved.",
  },
  {
    id: "t8",
    name: "Malith Gunasekara",
    era: "belong",
    country: "United Kingdom",
    quote:
      "Bringing my family over on a sponsorship visa felt overwhelming, but Novera's step-by-step guidance made it manageable and stress-free.",
  },
  {
    id: "t9",
    name: "Chamodi Fonseka",
    era: "learn",
    country: "Ireland",
    quote:
      "Ireland's tech scene was exactly what I wanted, and Novera's stay-back visa guidance gave me a clear plan beyond graduation.",
  },
  {
    id: "t10",
    name: "Oshadi Vidanapathirana",
    era: "belong",
    country: "Netherlands",
    quote:
      "Novera guided my permanent residency application in the Netherlands with real precision — every form, every appendix, done right the first time.",
  },
];
