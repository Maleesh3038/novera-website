export type Era = {
  slug: "discover" | "learn" | "belong";
  name: string;
  icon: "camera" | "book" | "heart";
  headline: string;
  description: string;
  offerings: string[];
};

export const eras: Era[] = [
  {
    slug: "discover",
    name: "Discover Era",
    icon: "camera",
    headline: "Work, Skilled Migration & Business Pathways",
    description:
      "The Discover Era is about new professional horizons — skilled migration, employer-sponsored work visas, and business or investor immigration routes for those ready to build a career or company abroad.",
    offerings: [
      "Skilled Worker & Employer-Sponsored Visas",
      "Business & Investor Immigration",
      "Visa Appeals & Rejection Reviews",
    ],
  },
  {
    slug: "learn",
    name: "Learn Era",
    icon: "book",
    headline: "Study Abroad, Universities & Post-Study Work",
    description:
      "The Learn Era is Novera's core strength: student visa consultancy, university and course matching, and post-study work pathway planning across our study destinations.",
    offerings: [
      "Study Visa Consultancy (Student, Child Student & Short-Term)",
      "University & Course Matching",
      "Post-Study Work Pathways",
    ],
  },
  {
    slug: "belong",
    name: "Belong Era",
    icon: "heart",
    headline: "Family, Settlement & Citizenship",
    description:
      "The Belong Era brings families together and helps long-term residents put down permanent roots — sponsorship, permanent residency, and citizenship or settlement services.",
    offerings: [
      "Family Sponsorship & Reunification",
      "Permanent Residency",
      "Citizenship & Settlement Services",
    ],
  },
];

export const getEra = (slug: string) => eras.find((e) => e.slug === slug);
