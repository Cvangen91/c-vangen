import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <div className="space-y-6">
        <h1 className="text-3xl tracking-tight">Kontakt</h1>
        <p className="max-w-2xl text-black/70">
          Beskriv gjerne prosjektet kort: mål, scope, tidslinje og evt. budsjett.
        </p>

        <div className="rounded-2xl border border-black/5 bg-white p-6">
          <p className="text-sm text-black/60">E-post</p>
          <a className="mt-1 inline-block text-[rgb(74,120,215)] hover:opacity-80" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </Container>
  );
}
