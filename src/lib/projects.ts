export type Project = {
  slug: string;
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
    slug: "dressurdommer",
    title: "Dressurdommer.no",
    description: "Plattform for norske dressurdommere med innsending av skjema, bisittinger osv.",
    year: "2026",
    role: "Fullstack",
    stack: ["Next.js", "TypeScript"],
    highlights: [
      "Digitalisering av dommermøterapporter",
        "Automatisk generering av PDF-rapporter",
        "Sømløs innsending og lagring av data",
    ],
    featured: true,
  },
  {
    slug: "c-vangen-rebrand",
    title: "c-vangen.com – Rebrand",
    description: "Minimal editorial portfolio med subtil animasjon og sterk typografi.",
    year: "2026",
    role: "Design + utvikling",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
