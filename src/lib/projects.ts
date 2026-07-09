export type Project = {
  slug: string;
  href?: string;
  title: string;
  description: string;
  year?: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "autentiskliv",
    href: "https://autentiskliv.com",
    title: "Autentisk Liv",
    description:
      "Kurs plattform for Anne Myrvoll. Oversikt, adminpanel, integrasjon av paypal.",
    year: "2026",
    role: "Fullstack",
    stack: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Kursplattform med oversikt over kurs og kursdeltakere",
      "Fullverdig adminpanel",
      "Integrasjon av PayPal for betaling",
    ],
    featured: true,
  },
  {
    slug: "dressurdommer",
    href: "https://dressurdommer.no",
    title: "Dressurdommer.no",
    description:
      "Plattform for norske dressurdommere med innsending av skjema, bisittinger osv.",
    year: "2026",
    role: "Fullstack",
    stack: ["React", "Next.js", "TypeScript"],
    highlights: [
      "Digitalisering av dommermøterapporter",
      "Automatisk generering av PDF-rapporter",
      "Sømløs innsending og lagring av data",
    ],
    featured: true,
  },
  {
    slug: "c-vangen-rebrand",
    href: "https://c-vangen.com",
    title: "c-vangen.com – Rebrand",
    description:
      "Oppdaterting av egen portefølje med nytt design og forbedret brukeropplevelse.",
    year: "2026",
    role: "Design + utvikling",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    featured: true,
  },
  {
    slug: "halmtofte",
    href: "https://halmtofte.dk",
    title: "Halmtofte/Hedebakken",
    description:
      "Nytt nettsted med fokus på design, brukervennlighet og responsivt design.",
    year: "2025",
    role: "Design + utvikling",
    stack: ["CMS", "Custom CSS", "Grafisk profil"],
    featured: true,
  },
  {
    slug: "evangeliesenteret",
    href: "https://feiv.no",
    title: "Evangeliesenteret - avdeling Vestfold",
    description:
      "Ny profil og utseende for Evangeliesenteret Vestfold. Opplæring av brukere i CMS systemet.",
    year: "2025",
    role: "Design + utvikling",
    stack: ["CMS", "Opplæring"],
    featured: true,
  },
  {
    slug: "byggtekniskforvaltning",
    href: "https://www.btforvalt.no",
    title: "Byggteknisk forvaltning",
    description: "Enkel landingsside med fokus på brukervennlighet og responsivt design.",
    year: "2025",
    role: "Design + utvikling",
    stack: ["HTML", "CSS", "JavaScript", "Logodesign"],
    featured: true,
  },
];
