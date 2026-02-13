import Container from "@/components/Container";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <Container>
      <div className="space-y-3">
        <p className="text-sm text-black/50">{project.year} · {project.role}</p>
        <h1 className="text-3xl tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-black/70">{project.description}</p>

        {!!project.stack?.length && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 grid gap-10">
        <section className="prose prose-neutral max-w-none">
          <h2>Problem</h2>
          <p>(Skriv 3–6 linjer her.)</p>

          <h2>Løsning</h2>
          <p>(Hva bygde du, og hvorfor.)</p>

          <h2>Resultat</h2>
          <p>(Målbare effekter / bedre flyt / bedre UX.)</p>
        </section>

        {!!project.highlights?.length && (
          <section className="rounded-2xl border border-black/5 bg-white p-6">
            <h2 className="text-lg font-medium tracking-tight">Highlights</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
              {project.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </section>
        )}

        <div className="flex gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[rgb(74,120,215)] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Kontakt om prosjekt
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium hover:border-black/20"
          >
            Tilbake
          </Link>
        </div>
      </div>
    </Container>
  );
}
