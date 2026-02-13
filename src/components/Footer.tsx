import Container from "./Container";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* soft panel */}
      <div className="border-t border-black/5 bg-gradient-to-b from-white to-[rgba(244,247,252,0.9)]">
        <Container>
          <div className="py-14">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Left */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[rgba(74,120,215,0.14)] ring-1 ring-black/5">
                    <span className="text-sm font-semibold text-[rgb(var(--accent2))]">
                      CV
                    </span>
                  </span>
                  <p className="font-medium tracking-tight">{site.name}</p>
                </div>
                <p className="max-w-sm text-sm text-[rgb(var(--muted))]">
                  Fullstack-utvikler med designbakgrunn. Jeg bygger løsninger som er
                  raske, ryddige og visuelt gjennomtenkte.
                </p>
              </div>

              {/* Middle */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-[rgb(var(--ink))]">
                  Navigasjon
                </p>
                <div className="flex flex-col gap-2 text-sm text-[rgb(var(--muted))]">
                  <Link className="hover:text-[rgb(var(--ink))]" href="/projects">
                    Prosjekter
                  </Link>
                  <Link className="hover:text-[rgb(var(--ink))]" href="/about">
                    Om
                  </Link>
                  <Link className="hover:text-[rgb(var(--ink))]" href="/contact">
                    Kontakt
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm">
                  <p className="text-sm font-medium tracking-tight">
                    La oss bygge noe sammen
                  </p>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                    Send en kort beskrivelse av behov, tidslinje og evt. budsjett.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      className="inline-flex items-center rounded-full bg-[rgb(var(--accent))] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                    <Link
                      className="inline-flex items-center rounded-full border border-[rgb(var(--line))] bg-[rgba(74,120,215,0.08)] px-4 py-2 text-sm font-medium text-[rgb(var(--accent2))] hover:bg-[rgba(74,120,215,0.12)]"
                      href="/contact"
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--muted))]">
                  <a
                    className="hover:text-[rgb(var(--ink))]"
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="hover:text-[rgb(var(--ink))]"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {site.name}</p>
             
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
