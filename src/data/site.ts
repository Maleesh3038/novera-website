export const siteInfo = {
  name: "Novera International",
  tagline: "Transforming Lives. Creating New Eras.",
  address: "Niyandagala, Pannipitiya, Colombo, Sri Lanka",
  whatsapp: "+94 77 615 7015",
  whatsappLink: "https://wa.me/message/7SLRL63LLSGZA1",
  email: "info.noverainternational@yahoo.com",
  facebook: "https://www.facebook.com/share/1EotTPXJFV/",
  instagram: "https://www.instagram.com/novera.international",
  linkedin: "https://linkedin.com/company/novera-in",
  tiktok: "https://www.tiktok.com/@novera.internatio",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:30 PM" },
    { days: "Saturday", time: "8:30 AM – 3:00 PM" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=Pannipitiya,Colombo,Sri+Lanka&output=embed",
};

export const trustStats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Programs", value: "10,000+" },
  { label: "Partner Universities", value: "100+" },
  { label: "Study Destinations Worldwide", value: "7" },
];

export const whyChooseUs = [
  {
    title: "Free Study Visa Consultation",
    description: "Every journey starts with an honest, no-obligation consultation to understand your goals.",
  },
  {
    title: "Visa Eligibility Assessment",
    description: "A detailed review of your qualifications and profile against real visa requirements.",
  },
  {
    title: "Application Preparation & Documentation",
    description: "Meticulous, compliance-first preparation of every form and supporting document.",
  },
  {
    title: "Visa Application Lodgment",
    description: "Accurate, on-time lodgment handled by professionals who know the process inside out.",
  },
  {
    title: "Interview Preparation & Guidance",
    description: "Mock interviews and coaching so you walk in confident and prepared.",
  },
  {
    title: "Air Ticket & Accommodation Support",
    description: "End-to-end support through to your flight booking and first place to stay.",
  },
];

export const services = [
  {
    title: "Study Visa – Free Consultation",
    description:
      "End-to-end support for Student Visas, Child Student Visas and Short-Term Study Visas, starting with a completely free initial consultation.",
  },
  {
    title: "Visit Visa",
    description:
      "Support for tourism, family visits, business meetings, conferences, training and medical visits — including Standard Visitor, Marriage Visitor, Permitted Paid Engagement, and Transit visas.",
  },
  {
    title: "Air Ticket Assistance",
    description: "We help secure and book the right flights around your visa and course start dates.",
  },
  {
    title: "Accommodation Assistance",
    description: "Guidance and referrals for safe, suitable accommodation options at your destination.",
  },
];

export const processSteps = [
  {
    title: "Selection of an Institution",
    description: "We help you shortlist institutions and courses that match your goals, budget and profile.",
  },
  {
    title: "Exclusive Personalized Counselling",
    description: "One-on-one guidance tailored to your specific circumstances and destination of choice.",
  },
  {
    title: "Assistance with Application Forms",
    description: "Careful, accurate completion of every application form required by your chosen institution.",
  },
  {
    title: "Liaising with Institutions for Offer Letters",
    description: "We follow up directly with institutions to secure your offer letter as quickly as possible.",
  },
  {
    title: "Personalized Lodgment of Visa Applications",
    description: "Your visa application is prepared and lodged with full attention to compliance and accuracy.",
  },
  {
    title: "Interview Training & Post-Study Guidance",
    description: "Interview coaching, plus guidance on part-time employment and post-study work opportunities.",
  },
];

export const journeyStages = [
  "Discover & Assess",
  "Matched",
  "Documents",
  "Submitted",
  "Decision",
  "Arrival",
] as const;

export type JourneyStage = (typeof journeyStages)[number];
