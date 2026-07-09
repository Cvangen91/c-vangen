import Container from "@/components/Container";
import CurvedSection from "@/components/CurvedSection";
import LogoSlideshow from "@/components/LogoSlideshow";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] px-3 py-2 shadow-sm sm:px-5 sm:py-4">
      <div className="text-sm font-medium tracking-tight sm:text-2xl">{value}</div>
      <div className="mt-0.5 text-[10px] text-[rgb(var(--muted))] sm:mt-1 sm:text-xs">
        {label}
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  featured,
}: {
  title: string;
  desc: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-[rgb(var(--line))] p-6 shadow-sm transition",
        featured
          ? "bg-[rgba(74,120,215,0.10)]"
          : "bg-[rgb(var(--surface))] hover:-translate-y-0.5",
      ].join(" ")}
    >
      <h3 className="font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-[rgb(var(--muted))]">{desc}</p>
      <Link
        href="/contact"
        className="mt-5 inline-flex text-sm font-medium text-[rgb(var(--accent2))] hover:opacity-80"
      >
        Be om tilbud →
      </Link>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  year,
  role,
  href,
  stack,
}: {
  title: string;
  description: string;
  year?: string;
  role?: string;
  href: string;
  stack?: string[];
}) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="rounded-3xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-black/10"
    >
      <p className="text-xs tracking-[0.2em] text-[rgb(var(--muted))] uppercase">
        {year} · {role}
      </p>
      <h3 className="mt-3 text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-[rgb(var(--muted))]">{description}</p>
      {!!stack?.length && (
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[rgb(var(--line))] bg-[rgb(248,250,252)] px-3 py-1 text-xs text-[rgb(var(--muted))]"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredLogos = [
    {
      src: "/logos/c-vangen-logo.png",
      alt: "C-Vangen logo",
      caption: "C-Vangen merkevare",
    },
    {
      src: "/logos/dd-logo-kvadrat.png",
      alt: "DD logo kvadrat",
      caption: "Utvalgt logoarbeid",
    },
    {
      src: "/logos/StallBrungotLogo.png",
      alt: "Stall Brungot logo",
      caption: "Logo for Stall Brungot",
    },
  ];

  return (
    <div className="space-y-12 pt-6 sm:space-y-16 sm:pt-10 lg:space-y-20">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(220px,0.75fr)] lg:gap-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-[family-name:var(--font-serif)] text-3xl leading-tight tracking-tight sm:text-4xl">
              Utvikling og grafisk design for tydelige, gjennomtenkte digitale løsninger.
            </h1>

            <p className="max-w-xl text-lg text-[rgb(var(--muted))]">
              Jeg lager raske, gjennomtenkte webopplevelser - fra idé og UI til ferdig
              løsning, deploy og videreutvikling. Fokus ligger på tydelig design, god
              struktur og løsninger som er enkle å bruke.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["React/Next", "Logodesign", "SQL/DB", "CRM Oppsett", "Utvikling"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgb(var(--line))] bg-white px-3 py-1 text-xs text-[rgb(var(--muted))]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="order-first mx-auto w-full max-w-[200px] sm:max-w-[260px] lg:order-last lg:max-w-[320px] lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/pictures/c-vangen-logo.svg"
                alt="C-Vangen logo"
                fill
                sizes="(max-width: 1024px) 260px, 320px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <CurvedSection tone="white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[rgba(74,120,215,0.14)] via-white to-[rgba(50,90,180,0.08)] shadow-sm ring-1 ring-black/5 sm:max-w-[360px]">
              <Image
                src="/pictures/profilpicture.JPG"
                alt="Profilbilde av Cecilie Dyrnes Vangen"
                width={900}
                height={900}
                className="h-full w-full object-cover object-[62%_center]"
                priority
              />
            </div>

            <div className="order-first space-y-4 lg:order-last">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
                Hvem er jeg?
              </h2>
              <p className="text-[rgb(var(--muted))]">
                Jeg er en engasjert fullstack-utvikler med et øye for design og en genuin
                lidenskap for å bygge løsninger som både fungerer og ser bra ut. Med
                Bachelor i IT og Ledelse i bunn jobber jeg med frontend i React, Next.js
                og TypeScript, og backend med API-er, SQL og integrasjoner.
              </p>
              <p className="text-[rgb(var(--muted))]">
                Jeg liker tydelige systemer, ryddig struktur og visuell kvalitet. I
                tillegg til utvikling har jeg bakgrunn fra grafisk design, som gjør at jeg
                også tenker helhet, uttrykk og merkevare når jeg bygger digitale
                løsninger.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-4 sm:gap-3">
                <Stat value="React / Next" label="Frontend" />
                <Stat value="UI / UX" label="Designfokus" />
                <Stat value="API / SQL" label="Backend" />
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-medium text-[rgb(var(--accent2))] hover:opacity-80"
                >
                  Les mer om meg →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </CurvedSection>

      <CurvedSection tone="light">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
                Utvalgte prosjekter
              </h2>
              <p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
                Et utvalg av ting jeg har designet og bygget. Fokus på tydelig UI, god
                ytelse og solid implementasjon.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-medium text-[rgb(var(--accent2))] hover:opacity-80 sm:inline-flex"
            >
              Se alle prosjekter →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => {
              const href = project.href ?? `/projects/${project.slug}`;
              return (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  year={project.year}
                  role={project.role}
                  href={href}
                  stack={project.stack}
                />
              );
            })}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-medium text-[rgb(var(--accent2))]"
            >
              Se alle prosjekter →
            </Link>
          </div>
        </Container>
      </CurvedSection>

      <CurvedSection tone="light">
        <Container>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
              Tjenester og priser
            </h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              En enkel oversikt over hva jeg typisk kan hjelpe med.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ServiceCard
              title="Logo"
              desc="Fra 1 500 kr. Enkle logoer og visuelle uttrykk for små og store behov."
            />
            <ServiceCard
              title="Basic hjemmeside"
              desc="Fra 3 000 kr. Enkle nettsider med tydelig struktur og responsivt design."
            />
            <ServiceCard
              title="Større prosjekter"
              desc="Ta kontakt. Skreddersydde løsninger, mer omfattende nettsider og webapper."
              featured
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[rgb(var(--accent2))] hover:opacity-80"
            >
              Se full oversikt over tjenester og priser →
            </Link>
          </div>
        </Container>
      </CurvedSection>

      <CurvedSection tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
                Logoer og merkevare
              </h2>
              <p className="text-[rgb(var(--muted))]">
                Jeg har designet mange logoer som ikke nødvendigvis er del av et større
                prosjekt. Derfor har jeg laget en egen visning for logoarbeid, og her går
                et par utvalgte logoer på et enkelt slideshow for å vise uttrykket og
                stilen jeg jobber med.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/logos"
                  className="rounded-full bg-[rgb(var(--accent))] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Se flere logoer
                </Link>
              </div>
            </div>

            <LogoSlideshow images={featuredLogos} />
          </div>
        </Container>
      </CurvedSection>

      <Container>
        <div className="rounded-[2rem] border border-[rgb(var(--line))] bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
                Klar for å starte noe nytt?
              </h2>
              <p className="mt-3 max-w-2xl text-[rgb(var(--muted))]">
                Enten du trenger en logo, en enkel hjemmeside eller et større digitalt
                prosjekt, kan jeg hjelpe deg fra idé til ferdig løsning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/logos"
                className="rounded-full bg-[rgb(var(--accent))] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
