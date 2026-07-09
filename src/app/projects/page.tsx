import Container from "@/components/Container";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="pt-6 sm:pt-10">
        <div className="mb-10 space-y-3">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
            Prosjekter
          </h1>
          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Utvalgte ting jeg har designet og bygget. Fokus på tydelig UI, god ytelse og
            solid implementasjon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => {
            const href = p.href ?? `/projects/${p.slug}`;
            const isExternal = typeof p.href === "string" && /^https?:\/\//.test(p.href);

            return (
              <a
                key={p.slug}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-black/10"
              >
                <p className="text-sm text-[rgb(var(--muted))]">
                  {p.year} · {p.role}
                </p>
                <h2 className="mt-2 text-lg font-medium tracking-tight">{p.title}</h2>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">{p.description}</p>
                {!!p.stack?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[rgb(var(--line))] bg-white px-3 py-1 text-xs text-[rgb(var(--muted))]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
