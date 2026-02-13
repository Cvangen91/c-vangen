import Container from "@/components/Container";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="mb-10 space-y-3">
        <h1 className="text-3xl tracking-tight">Prosjekter</h1>
        <p className="max-w-2xl text-black/70">
          Utvalgte ting jeg har designet og bygget. Fokus på tydelig UI, god ytelse og solid implementasjon.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-black/10"
          >
            <p className="text-sm text-black/50">{p.year} · {p.role}</p>
            <h2 className="mt-2 text-lg font-medium tracking-tight">{p.title}</h2>
            <p className="mt-2 text-sm text-black/70">{p.description}</p>
            {!!p.stack?.length && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-black/10 bg-[rgb(245,247,250)] px-3 py-1 text-xs text-black/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </Container>
  );
}
