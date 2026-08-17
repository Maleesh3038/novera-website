export type ChecklistItem = string;

export const checklistCountries = [
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Ireland",
  "Germany",
  "Netherlands",
  "Malta",
  "Sweden",
  "France",
  "Dubai / UAE",
  "Singapore",
  "Malaysia",
] as const;

export const checklistVisaTypes = [
  "Student Visa",
  "Child Student Visa",
  "Short-Term Study Visa",
  "Visit Visa",
] as const;

const baseStudyItems: ChecklistItem[] = [
  "Valid passport (min. 6 months validity)",
  "Passport-sized photographs",
  "Completed visa application form",
  "Offer letter / Confirmation of Acceptance for Studies",
  "Academic transcripts and certificates (O/L, A/L or equivalent)",
  "English language proficiency test results (IELTS/PTE/TOEFL)",
  "Proof of financial capacity (bank statements / sponsor letter)",
  "Statement of Purpose (SOP)",
  "Medical examination report (if required)",
  "Police clearance certificate (if required)",
];

const baseVisitItems: ChecklistItem[] = [
  "Valid passport (min. 6 months validity)",
  "Passport-sized photographs",
  "Completed visa application form",
  "Invitation letter (if applicable)",
  "Proof of financial capacity (bank statements)",
  "Travel itinerary and accommodation booking",
  "Employment / income verification letter",
  "Purpose-specific supporting documents",
];

const countrySpecific: Record<string, ChecklistItem[]> = {
  "United Kingdom": ["CAS (Confirmation of Acceptance for Studies) number", "TB test certificate (if applicable)"],
  Australia: ["Genuine Student (GS) statement", "Overseas Student Health Cover (OSHC)"],
  "New Zealand": ["Offer of Place letter", "Evidence of tuition payment after visa approval"],
  Ireland: ["Tuition deposit receipt", "Private medical insurance"],
  Germany: ["Blocked account (Sperrkonto) confirmation", "University entrance qualification recognition"],
  Netherlands: ["Proof of accommodation registration", "Residence permit (VVR) confirmation"],
  Malta: ["Accommodation confirmation letter", "Proof of travel/health insurance"],
  Sweden: ["Tuition fee payment confirmation", "Admission confirmation via national portal"],
  France: ["Campus France procedure completion certificate", "VLS-TS long-stay visa form"],
  "Dubai / UAE": ["Institution sponsorship letter", "Emirates ID application form (post-arrival)"],
  Singapore: ["SOLAR e-application reference", "In-Principle Approval (IPA) letter"],
  Malaysia: ["EMGS VAL/eVAL reference number", "Medical screening booking (within 7 days of arrival)"],
};

export function generateChecklist(country: string, visaType: string): ChecklistItem[] {
  const base = visaType === "Visit Visa" ? baseVisitItems : baseStudyItems;
  const extra = countrySpecific[country] ?? [];
  return [...base, ...extra];
}
