export type VisaType = {
  name: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  overview: string;
  advantages: string[];
  requirements: string[];
  workRights: string;
  intakes: string;
  visaTypes: VisaType[];
  costBand: string;
  timeline: string;
  journeySteps: string[];
  successStory: { name: string; quote: string };
  isCoreEra: boolean;
  isBonus: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "100+ years of academic reputation and a clear post-study pathway.",
    overview:
      "The United Kingdom remains one of the world's most trusted study destinations, with over a century of academic reputation, an enormous range of courses, and strong industry placement opportunities. Novera guides students through every step, from course selection to Graduate Route planning.",
    advantages: [
      "100+ years of world-renowned academic reputation",
      "Extremely wide range of courses and specialisations",
      "Strong industry placement and internship culture",
      "Part-time work allowed without a separate work permit",
      "Graduate Route visa for up to 2-3 years of post-study work",
    ],
    requirements: [
      "GCE O/L, A/L or equivalent qualification",
      "IELTS (or approved equivalent) with a minimum overall band of 6.0",
      "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
      "Proof of financial capacity to cover tuition and living costs",
    ],
    workRights:
      "Students can work up to 20 hours per week during term-time and full-time during scheduled vacations. The Graduate Route visa allows graduates to stay and work in the UK for 2 years (3 years for PhD holders) after completing their studies.",
    intakes:
      "Main intake in September, with additional intake windows in January, February, March, April, May and October depending on the institution.",
    visaTypes: [
      { name: "Student Visa", description: "For full-time study at a licensed UK institution, sponsored via a CAS." },
      { name: "Child Student Visa", description: "For younger students aged 4-17 attending an independent UK school." },
      { name: "Short-Term Study Visa", description: "For English language courses and short academic programmes up to 11 months." },
      { name: "Graduate Route Visa", description: "Post-study work visa allowing graduates to remain and work in the UK." },
    ],
    costBand: "Tuition: LKR 3.5M - 8M/year · Living: LKR 1.5M - 2.5M/year",
    timeline: "Offer to visa decision typically takes 8-12 weeks once documents are finalised.",
    journeySteps: [
      "Free consultation & course shortlisting",
      "University application & offer letter",
      "CAS issuance and financial documentation",
      "Student visa lodgment",
      "Pre-departure briefing & air ticket booking",
      "Arrival and accommodation support",
    ],
    successStory: {
      name: "Ishara P.",
      quote:
        "Novera helped me secure my offer from a top London university and walked me through the Graduate Route from day one. I now work full-time in the UK.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "World-class universities and the third-largest destination for international students.",
    overview:
      "Australia hosts more than 1,200 institutions offering 22,000+ courses and is the third-largest destination for international students globally. Its Genuine Student framework rewards well-prepared applications, which is exactly where Novera's expertise helps.",
    advantages: [
      "1,200+ institutions and 22,000+ courses to choose from",
      "3rd largest destination for international students worldwide",
      "Globally ranked universities across every major discipline",
      "Safe, multicultural cities with strong graduate employment outcomes",
      "Temporary Graduate visa pathway after study completion",
    ],
    requirements: [
      "Meets the Genuine Student (GS) requirement",
      "Proof of financial capacity for tuition and living costs",
      "IELTS, PTE or TOEFL as required by the institution",
      "Health examination and character (police clearance) checks",
    ],
    workRights:
      "Students may work up to 24 hours per week during term and unlimited hours during scheduled breaks. The Temporary Graduate Visa (subclass 485) allows eligible graduates to live and work in Australia after their course.",
    intakes: "Main intakes in February/March, June/July, and October/November.",
    visaTypes: [
      { name: "Student Visa (subclass 500)", description: "For full-time enrolment in a CRICOS-registered course." },
      { name: "Temporary Graduate Visa (subclass 485)", description: "Post-study work visa for eligible graduates." },
      { name: "Visitor Visa (subclass 600)", description: "For tourism, business or family visits." },
    ],
    costBand: "Tuition: LKR 4M - 9M/year · Living: LKR 1.8M - 2.8M/year",
    timeline: "Offer to visa decision typically takes 4-10 weeks depending on the visa office workload.",
    journeySteps: [
      "Free consultation & Genuine Student assessment",
      "Institution & course matching",
      "Offer letter and Confirmation of Enrolment (CoE)",
      "Visa application lodgment",
      "Health checks and biometrics",
      "Pre-departure briefing and arrival support",
    ],
    successStory: {
      name: "Dinuka W.",
      quote:
        "The Genuine Student statement felt intimidating, but Novera's team helped me tell my story clearly. My visa was approved without a single request for more information.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    tagline: "Friendly, affordable, and home to universities ranked in the global top 3%.",
    overview:
      "New Zealand offers a welcoming environment, affordable living costs relative to other English-speaking destinations, and all eight of its universities rank in the top 3% globally by QS. Tuition is typically paid only after visa approval, reducing upfront risk for families.",
    advantages: [
      "Friendly, safe and welcoming for international students",
      "Comparatively affordable tuition and living costs",
      "All universities rank in the top 3% worldwide (QS rankings)",
      "Post-study work visa of up to 1-3 years",
      "Pay tuition fees only after visa approval",
    ],
    requirements: [
      "GCE O/L and A/L (or equivalent) results",
      "IELTS is compulsory for most institutions",
      "Letter of offer from an approved New Zealand institution",
      "Evidence of sufficient funds for living costs",
    ],
    workRights:
      "Eligible students can work up to 20 hours per week during study and up to 40 hours per week during scheduled holidays. Many programmes lead to a 1-3 year post-study Job Search visa.",
    intakes: "Rolling intakes approximately every two months across most institutions.",
    visaTypes: [
      { name: "Fee Paying Student Visa", description: "For full-time study at an approved New Zealand institution." },
      { name: "Post-Study Work Visa", description: "Allows graduates to work in New Zealand after completing their studies." },
      { name: "Visitor Visa", description: "For tourism, family visits and short courses." },
    ],
    costBand: "Tuition: LKR 3.2M - 7M/year · Living: LKR 1.4M - 2.2M/year",
    timeline: "Offer to visa decision typically takes 6-10 weeks.",
    journeySteps: [
      "Free consultation & institution shortlisting",
      "Application submission & conditional offer",
      "Offer confirmation (fees paid after visa approval)",
      "Visa application lodgment",
      "Decision & pre-departure briefing",
      "Arrival and accommodation support",
    ],
    successStory: {
      name: "Sanduni R.",
      quote:
        "Knowing I only had to pay tuition after my visa was approved took so much pressure off my family. Novera made the whole process transparent.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "dubai",
    name: "Dubai / UAE",
    flag: "🇦🇪",
    region: "Middle East",
    tagline: "A modern, rapidly developing education and business hub.",
    overview:
      "The United Arab Emirates — Dubai, Abu Dhabi and Sharjah — has become a fast-growing hub for international education and business, offering globally recognised campuses, multinational internship access, and a lifestyle close to home for Sri Lankan families.",
    advantages: [
      "Modern, rapidly developing education and business hub",
      "Branch campuses of respected international universities",
      "Internship access with major multinational companies",
      "Closer to Sri Lanka with shorter, more affordable travel",
      "Tax-free income environment for working graduates",
    ],
    requirements: [
      "GCE O/L and A/L or equivalent qualification",
      "IELTS/TOEFL not mandatory for most programmes",
      "Financial proof not mandatory for most institutions",
      "Passport-size photos and valid passport",
    ],
    workRights:
      "Part-time work is permitted subject to visa and sponsor conditions, with many students securing internships at multinational companies based in Dubai's free zones.",
    intakes: "Main intake in September, with additional intakes in January/February, April/May and June/July.",
    visaTypes: [
      { name: "Student Visa", description: "Sponsored by the educational institution for full-time enrolment." },
      { name: "Visit Visa", description: "For tourism, family visits, business meetings and short courses." },
    ],
    costBand: "Tuition: LKR 2.8M - 6M/year · Living: LKR 1.2M - 2M/year",
    timeline: "Offer to visa decision typically takes 3-6 weeks.",
    journeySteps: [
      "Free consultation & institution shortlisting",
      "Application & offer letter",
      "Document preparation",
      "Student visa lodgment",
      "Decision & pre-departure briefing",
      "Arrival, accommodation & orientation support",
    ],
    successStory: {
      name: "Ravindu S.",
      quote:
        "I wanted a shorter flight home and Dubai gave me that plus a great business degree. Novera handled every document without a single delay.",
    },
    isCoreEra: false,
    isBonus: true,
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    region: "Asia",
    tagline: "Asia's leading education hub with a streamlined Student's Pass process.",
    overview:
      "Singapore is widely regarded as Asia's leading education hub, combining globally respected institutions with a safe, ultra-connected city-state environment. Student Pass applications are processed through the SOLAR system, which Novera manages end-to-end for clients.",
    advantages: [
      "Leading education hub in Asia",
      "Globally recognised institutions and qualifications",
      "Extremely safe, clean and well-connected city-state",
      "Strong regional gateway to Employment Pass opportunities",
    ],
    requirements: [
      "Offer of admission from an approved institution",
      "Valid passport and proof of financial means",
      "Medical examination as required",
      "Student's Pass (STP) application via the SOLAR system",
    ],
    workRights:
      "Part-time work of up to 16 hours per week is allowed during term for eligible students. There is no dedicated post-study visa, but many graduates transition to an Employment Pass or S Pass with a local job offer.",
    intakes: "Most programmes commence in August/September, with some intakes in January.",
    visaTypes: [
      { name: "Student's Pass (STP)", description: "Issued via the SOLAR system for full-time enrolled students." },
      { name: "Visit Pass", description: "For short courses, tourism or family visits." },
    ],
    costBand: "Tuition: LKR 3.5M - 7.5M/year · Living: LKR 1.6M - 2.4M/year",
    timeline: "Offer to Student's Pass approval typically takes 4-8 weeks via SOLAR.",
    journeySteps: [
      "Free consultation & course matching",
      "Application & offer letter",
      "SOLAR e-application submission",
      "In-principle approval (IPA) issued",
      "Medical check-up on arrival",
      "Student's Pass collection & orientation",
    ],
    successStory: {
      name: "Nethmi K.",
      quote:
        "The SOLAR process looked confusing until Novera broke it into simple steps. I had my IPA letter within weeks.",
    },
    isCoreEra: false,
    isBonus: true,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    tagline: "Affordable, student-friendly and a consistently high visa approval rate.",
    overview:
      "Malaysia offers some of the most affordable quality education in Asia, with a straightforward Student Pass process managed through EMGS and a consistently high visa approval rate for well-prepared applicants.",
    advantages: [
      "Highly affordable tuition and living costs",
      "Student-friendly, multicultural environment",
      "Consistently high visa approval rate",
      "Graduate Pass scheme extended through 2026 for eligible graduates",
    ],
    requirements: [
      "Offer letter from an EMGS-registered institution",
      "Student Pass application via EMGS (VAL/eVAL)",
      "Medical screening within 7 days of arrival",
      "Minimum CGPA of 2.0 and 80% attendance required to renew Pass",
    ],
    workRights:
      "Part-time work of up to 20 hours per week is permitted during semester breaks with prior approval. The Graduate Pass scheme, extended through 2026, gives eligible graduates extra time to seek employment in Malaysia.",
    intakes: "Common intakes in February, July and September.",
    visaTypes: [
      { name: "Student Pass", description: "Issued via EMGS (Education Malaysia Global Services) for approved institutions." },
      { name: "Graduate Pass", description: "Post-study pass for eligible graduates, extended through 2026." },
    ],
    costBand: "Tuition: LKR 1.8M - 4.5M/year · Living: LKR 0.9M - 1.5M/year",
    timeline: "Offer to Student Pass approval typically takes 4-6 weeks via EMGS.",
    journeySteps: [
      "Free consultation & institution shortlisting",
      "Application & offer letter",
      "EMGS VAL/eVAL submission",
      "Student Pass approval",
      "Medical screening on arrival (within 7 days)",
      "Orientation & accommodation support",
    ],
    successStory: {
      name: "Tharindu J.",
      quote:
        "Malaysia gave me a quality degree at a fraction of the cost, and Novera's EMGS guidance meant zero surprises at the airport.",
    },
    isCoreEra: false,
    isBonus: true,
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    tagline: "A thriving tech and pharma economy with a generous post-study stay-back visa.",
    overview:
      "Ireland has become a magnet for international students thanks to its booming technology and pharmaceutical sectors, warm welcome, and one of Europe's most generous post-study stay-back visa periods.",
    advantages: [
      "Home to European HQs of major tech and pharma multinationals",
      "English-speaking, welcoming culture close to the UK",
      "Third Level Graduate Programme allows up to 2 years stay-back",
      "Compact country with excellent quality of life",
    ],
    requirements: [
      "GCE A/L or equivalent qualification for the intended level of study",
      "IELTS overall band of 6.0+ (varies by institution)",
      "Letter of offer from a recognised Irish institution",
      "Proof of funds covering tuition and living costs",
    ],
    workRights:
      "Students may work up to 20 hours per week during term and 40 hours during holiday periods. The Third Level Graduate Programme allows up to 24 months of post-study stay-back for eligible graduates.",
    intakes: "Main intake in September, with a smaller intake in January/February.",
    visaTypes: [
      { name: "Study Visa (D Type)", description: "For full-time programmes longer than 3 months." },
      { name: "Third Level Graduate Scheme", description: "Post-study stay-back permission for eligible graduates." },
    ],
    costBand: "Tuition: LKR 3.8M - 8M/year · Living: LKR 1.6M - 2.4M/year",
    timeline: "Offer to visa decision typically takes 6-8 weeks.",
    journeySteps: [
      "Free consultation & course shortlisting",
      "Application & offer letter",
      "Tuition deposit & financial documentation",
      "Visa lodgment",
      "Decision & pre-departure briefing",
      "Arrival & accommodation support",
    ],
    successStory: {
      name: "Chamodi F.",
      quote:
        "Ireland's tech scene was exactly what I wanted, and Novera's stay-back visa guidance gave me a clear plan beyond graduation.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    tagline: "Low or no tuition fees at many public universities and Europe's strongest economy.",
    overview:
      "Germany combines globally respected engineering and research programmes with low or no tuition fees at most public universities, making it one of the most cost-effective quality destinations in Europe.",
    advantages: [
      "Little to no tuition fees at many public universities",
      "World-class engineering, science and research programmes",
      "Europe's largest economy with strong graduate job prospects",
      "18-month post-study job-search residence permit",
    ],
    requirements: [
      "Recognised secondary or foundation qualification",
      "English proficiency for English-taught programmes, or German for German-taught",
      "Blocked account (Sperrkonto) showing proof of funds",
      "University entrance qualification recognition (via uni-assist where required)",
    ],
    workRights:
      "International students can work up to 140 full days or 280 half days per year. Graduates may apply for an 18-month residence permit to search for qualified employment.",
    intakes: "Main intakes in September/October (winter semester) and March/April (summer semester).",
    visaTypes: [
      { name: "National Student Visa (Type D)", description: "For full-time enrolment at a German university." },
      { name: "Job-Seeker Residence Permit", description: "18-month post-study permit to search for qualified work." },
    ],
    costBand: "Tuition: LKR 0 - 3M/year · Living: LKR 1.7M - 2.3M/year",
    timeline: "Offer to visa decision typically takes 8-12 weeks.",
    journeySteps: [
      "Free consultation & programme matching",
      "Application via uni-assist / direct portal",
      "Blocked account setup & offer confirmation",
      "Visa lodgment at the German mission",
      "Decision & pre-departure briefing",
      "Arrival & residence registration support",
    ],
    successStory: {
      name: "Hasitha M.",
      quote:
        "Almost no tuition fees felt too good to be true, but Novera confirmed everything and helped me set up my blocked account correctly.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    tagline: "English-taught programmes, a central European location, and a 1-year orientation visa.",
    overview:
      "The Netherlands offers one of Europe's widest ranges of English-taught degree programmes, a central location for exploring the continent, and a full year to find qualified work after graduation via the Orientation Year visa.",
    advantages: [
      "2,100+ English-taught programmes across all levels",
      "Highly ranked, research-focused universities",
      "Central European location with easy regional travel",
      "1-year Orientation Year (Zoekjaar) visa for graduates",
    ],
    requirements: [
      "Recognised secondary qualification for the intended study level",
      "IELTS/TOEFL as required for English-taught programmes",
      "Proof of financial means for a Dutch residence permit",
      "Valid offer/enrolment confirmation from a recognised institution",
    ],
    workRights:
      "Students from outside the EU/EEA can work up to 16 hours per week during term or full-time during summer months (with an employer work permit). The Orientation Year visa grants 12 months to seek qualified employment after graduation.",
    intakes: "Main intake in September, with a smaller February intake at select institutions.",
    visaTypes: [
      { name: "Entry Visa & Residence Permit (VVR)", description: "Combined visa and permit for full-time study." },
      { name: "Orientation Year Visa", description: "1-year post-study permit to search for qualified work." },
    ],
    costBand: "Tuition: LKR 2.8M - 6.5M/year · Living: LKR 1.7M - 2.4M/year",
    timeline: "Offer to visa decision typically takes 6-10 weeks.",
    journeySteps: [
      "Free consultation & programme matching",
      "Application & conditional offer",
      "Institution-lodged residence permit application",
      "Visa/MVV collection",
      "Decision & pre-departure briefing",
      "Arrival & municipality registration support",
    ],
    successStory: {
      name: "Oshadi V.",
      quote:
        "My Dutch university handled a lot of the permit process, but Novera made sure I didn't miss a single supporting document.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    region: "Europe",
    tagline: "An English-speaking EU island nation with a growing international student community.",
    overview:
      "Malta is a compact, English-speaking EU member state with a warm Mediterranean climate, a growing international education sector, and comparatively affordable living costs for Europe.",
    advantages: [
      "English is an official language, easing study and daily life",
      "EU member state with Schengen-adjacent travel benefits",
      "Affordable living costs relative to Western Europe",
      "Growing hub for iGaming, aviation and finance internships",
    ],
    requirements: [
      "GCE A/L or equivalent for the intended level of study",
      "English proficiency evidence (IELTS or equivalent, often waived for O/L English pass)",
      "Proof of funds and accommodation for the study period",
      "Valid offer letter from a licensed Maltese institution",
    ],
    workRights:
      "Students may work part-time subject to study visa conditions and employer sponsorship, with growing demand in Malta's iGaming, finance and tourism sectors.",
    intakes: "Main intakes in September/October, with a mid-year intake in February/March.",
    visaTypes: [
      { name: "Study Visa / Residence Permit", description: "For full-time enrolment at a licensed Maltese institution." },
      { name: "Short-Stay Visa", description: "For courses and language programmes under 90 days." },
    ],
    costBand: "Tuition: LKR 2.2M - 5M/year · Living: LKR 1.3M - 2M/year",
    timeline: "Offer to visa decision typically takes 6-9 weeks.",
    journeySteps: [
      "Free consultation & institution shortlisting",
      "Application & offer letter",
      "Document preparation & accommodation booking",
      "Visa/residence permit lodgment",
      "Decision & pre-departure briefing",
      "Arrival & orientation support",
    ],
    successStory: {
      name: "Yohan D.",
      quote:
        "Malta wasn't on my radar until Novera suggested it — smaller classes, an EU qualification, and a lower budget than I expected.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    tagline: "Innovation-driven education with sustainability and design at its core.",
    overview:
      "Sweden is known for its innovation-led universities, progressive teaching style, and strong focus on sustainability, design and technology — paired with a high standard of living across Scandinavia.",
    advantages: [
      "Innovation and research-driven university culture",
      "Progressive, discussion-based teaching methods",
      "Strong programmes in sustainability, design, engineering and tech",
      "High standard of living and safety",
    ],
    requirements: [
      "Recognised secondary qualification for the intended study level",
      "IELTS/TOEFL for English-taught programmes",
      "Proof of funds for a Swedish residence permit",
      "Confirmed admission via the national application portal",
    ],
    workRights:
      "Sweden places no formal limit on the number of hours non-EU students may work alongside study, provided studies remain the primary purpose. Graduates can apply for a residence permit extension to seek work or start a business.",
    intakes: "Main intake in August/September, with a smaller January intake at select universities.",
    visaTypes: [
      { name: "Residence Permit for Studies", description: "For full-time study at a recognised Swedish university." },
      { name: "Post-Study Extension Permit", description: "Extension to seek qualified work or start a business." },
    ],
    costBand: "Tuition: LKR 3M - 6.5M/year · Living: LKR 1.6M - 2.3M/year",
    timeline: "Offer to visa decision typically takes 8-12 weeks.",
    journeySteps: [
      "Free consultation & programme matching",
      "Application via the national admissions portal",
      "Tuition deposit & offer confirmation",
      "Residence permit application",
      "Decision & pre-departure briefing",
      "Arrival & registration support",
    ],
    successStory: {
      name: "Menaka L.",
      quote:
        "The Swedish teaching style pushed me to think differently, and Novera's document checklist meant my permit had zero back-and-forth.",
    },
    isCoreEra: true,
    isBonus: false,
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "World-class business, engineering and culinary programmes in the heart of Europe.",
    overview:
      "France pairs globally respected grandes écoles and business schools with rich culture and a central European location, and offers a generous post-study residence permit for graduates seeking employment.",
    advantages: [
      "Globally ranked business schools and engineering grandes écoles",
      "Rich cultural, culinary and artistic heritage",
      "Central location for exploring the rest of Europe",
      "APS post-study residence permit of up to 24 months",
    ],
    requirements: [
      "Recognised secondary qualification for the intended study level",
      "French or English proficiency depending on programme language",
      "Campus France procedure completion for most applicants",
      "Proof of financial means for a French student visa",
    ],
    workRights:
      "Students may work up to 964 hours per year (around 20 hours/week). The Autorisation Provisoire de Séjour (APS) allows graduates up to 24 months to find qualified employment or start a business.",
    intakes: "Main intake in September, with select programmes offering a January intake.",
    visaTypes: [
      { name: "Long-Stay Student Visa (VLS-TS)", description: "For full-time study at a recognised French institution." },
      { name: "APS Post-Study Permit", description: "Post-study permit to seek qualified work or start a business." },
    ],
    costBand: "Tuition: LKR 2.5M - 7M/year · Living: LKR 1.6M - 2.4M/year",
    timeline: "Offer to visa decision typically takes 6-10 weeks, including the Campus France procedure.",
    journeySteps: [
      "Free consultation & programme matching",
      "Campus France procedure & application",
      "Offer letter & tuition deposit",
      "Visa lodgment (VLS-TS)",
      "Decision & pre-departure briefing",
      "Arrival & OFII registration support",
    ],
    successStory: {
      name: "Bhanuka T.",
      quote:
        "Campus France felt like a maze of steps, but Novera walked me through every one of them and my visa was approved on the first try.",
    },
    isCoreEra: true,
    isBonus: false,
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);

export const coreEraDestinations = destinations.filter((d) => d.isCoreEra);
export const bonusDestinations = destinations.filter((d) => d.isBonus);
