export type Era = {
  slug: "student" | "visit";
  name: string;
  icon: "cap" | "globe";
  headline: string;
  description: string;
  offerings: string[];
};

export const eras: Era[] = [
  {
    slug: "student",
    name: "Student Era",
    icon: "cap",
    headline: "Study Abroad, Universities & Student Visas",
    description:
      "The Student Era is Novera's core strength: student visa consultancy, university and course matching, and post-study work pathway planning across our study destinations.",
    offerings: [
      "Study Visa Consultancy (Student, Child Student & Short-Term)",
      "University & Course Matching",
      "Post-Study Work Pathways",
    ],
  },
  {
    slug: "visit",
    name: "Visit Era",
    icon: "globe",
    headline: "Travel, Tourist & Short-Stay Visas",
    description:
      "The Visit Era covers everything for travellers heading abroad — tourist and visitor visa applications, travel documentation, and short-term stay planning.",
    offerings: [
      "Tourist & Visitor Visa Applications",
      "Travel Documentation Support",
      "Short-Term Stay & Extension Advice",
    ],
  },
];

export const getEra = (slug: string) => eras.find((e) => e.slug === slug);
