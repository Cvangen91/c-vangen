import Container from "@/components/Container";
import CurvedSection from "@/components/CurvedSection";
import Link from "next/link";
import { site } from "@/lib/site";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] px-5 py-4 shadow-sm">
      <div className="text-2xl font-medium tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-[rgb(var(--muted))]">{label}</div>
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

function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-[rgb(var(--muted))]">{label}</span>
        <span className="text-[rgb(var(--muted))]">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-black/5">
        <div
          className="h-2 rounded-full bg-[rgb(var(--accent))]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm text-[rgb(var(--muted))]">
              {site.location}
            </p>

            <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl font-[family-name:var(--font-serif)]">
              {site.tagline}
            </h1>

            <p className="max-w-xl text-lg text-[rgb(var(--muted))]">
              {site.intro}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="rounded-full bg-[rgb(var(--accent))] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Se prosjekter
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[rgb(var(--line))] bg-white px-5 py-2 text-sm font-medium hover:border-black/20"
              >
                Kontakt / få tilbud
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["UI/UX", "React/Next", "API/DB", "Performance/SEO", "Designsystem"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgb(var(--line))] bg-white px-3 py-1 text-xs text-[rgb(var(--muted))]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* “image blob” placeholder */}
          <div className="relative">
            <div className="mx-auto aspect-square w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-[rgba(74,120,215,0.20)] via-white to-[rgba(50,90,180,0.15)] shadow-sm ring-1 ring-black/5" />
            <div className="pointer-events-none absolute -right-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
              <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.25)]" />
              <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.45)]" />
              <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.70)]" />
            </div>
          </div>
        </div>
      </Container>

      {/* WELCOME / ABOUT (curved section) */}
      <CurvedSection tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-[rgba(74,120,215,0.18)] via-white to-[rgba(50,90,180,0.10)] shadow-sm ring-1 ring-black/5" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl tracking-tight font-[family-name:var(--font-serif)]">
                Design-sensitiv utvikling
              </h2>
              <p className="text-[rgb(var(--muted))]">
                Jeg kombinerer grafisk/design bakgrunn med fullstack-kompetanse.
                Resultatet er løsninger som både ser bra ut og fungerer skikkelig — med
                struktur, ytelse og god DX.
              </p>

              <div className="grid gap-3 sm:grid-cols-3 pt-4">
                <Stat value="End-to-end" label="Design → deploy" />
                <Stat value="Raskt" label="Iterativ leveranse" />
                <Stat value="Solid" label="Kode + kvalitet" />
              </div>
            </div>
          </div>
        </Container>
      </CurvedSection>

      {/* SERVICES */}
      <CurvedSection tone="light">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-[family-name:var(--font-serif)]">
              Hva jeg kan hjelpe med
            </h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              Typiske leveranser for bedrifter og team som vil ha noe som føles premium.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Nettsider & landingssider"
              desc="Minimal editorial, rask last, god SEO og konvertering."
            />
            <ServiceCard
              title="Webapper & admin"
              desc="Dashboards, workflows, rolle/tilgang og integrasjoner."
              featured
            />
            <ServiceCard
              title="Designsystem & UI"
              desc="Komponentbibliotek, typografi, tokens og konsistens."
            />
            <ServiceCard
              title="Videreutvikling"
              desc="Rydding, ytelse, QA, og små/store forbedringer."
            />
          </div>
        </Container>
      </CurvedSection>

      {/* EXPERTISE */}
      <CurvedSection tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl tracking-tight font-[family-name:var(--font-serif)]">
                Proving the craft
              </h2>
              <p className="text-[rgb(var(--muted))]">
                Jeg liker tydelige systemer: typografi, spacing og komponenter i front,
                og robuste API-er/dataflyt bak.
              </p>

              <div className="mt-6 space-y-5">
                <Progress label="Frontend (React/Next)" value={90} />
                <Progress label="UI/Designsystem" value={85} />
                <Progress label="Backend/API" value={75} />
                <Progress label="Performance/SEO" value={80} />
              </div>

              <div className="pt-6">
                <Link
                  href="/projects"
                  className="rounded-full bg-[rgb(var(--accent))] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Se case-studier
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto aspect-square w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-[rgba(74,120,215,0.18)] via-white to-[rgba(50,90,180,0.10)] shadow-sm ring-1 ring-black/5" />
              <div className="pointer-events-none absolute -right-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.25)]" />
                <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.45)]" />
                <span className="h-3 w-3 rounded-full bg-[rgba(74,120,215,0.70)]" />
              </div>
            </div>
          </div>
        </Container>
      </CurvedSection>
    </div>
  );
}
