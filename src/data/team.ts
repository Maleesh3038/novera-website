export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
};

export const team: TeamMember[] = [
  {
    id: "m1",
    name: "N. Abeywardena",
    role: "Founder & Principal Immigration Consultant",
    specialties: ["United Kingdom", "Australia"],
    bio: "With years of hands-on experience in international education and immigration law, N. Abeywardena founded Novera to bring professional, compliance-first visa guidance to Sri Lankan students and families.",
  },
  {
    id: "m2",
    name: "S. Ranasinghe",
    role: "Senior Study Visa Consultant",
    specialties: ["New Zealand", "Ireland", "Netherlands"],
    bio: "S. Ranasinghe specialises in matching students with universities across New Zealand and Europe, with a strong track record on post-study work pathway planning.",
  },
  {
    id: "m3",
    name: "K. Jayawardena",
    role: "Visit & Skilled Migration Consultant",
    specialties: ["Dubai / UAE", "Singapore", "Malaysia"],
    bio: "K. Jayawardena manages visit visa and skilled migration cases across the Middle East and Asia, guiding clients through document preparation and interview readiness.",
  },
  {
    id: "m4",
    name: "T. Herath",
    role: "Family Sponsorship & Settlement Specialist",
    specialties: ["United Kingdom", "Australia", "Germany"],
    bio: "T. Herath focuses on the Belong Era — family sponsorship, permanent residency and citizenship applications — bringing a client-first, transparent approach to every case.",
  },
];
