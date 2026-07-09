import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Tjenester og priser",
  description: "Oversikt over tjenester og veiledende priser.",
};

export default function ServicesPage() {
  return (
    <Container>
      <main className="pt-6 sm:pt-10">
        <h1 className="mb-6 font-[family-name:var(--font-serif)] text-3xl tracking-tight">
          Tjenester og priser
        </h1>

        <p className="mb-8 max-w-2xl text-[rgb(var(--muted))]">
          Her er noen standardpakker jeg tilbyr. Ta kontakt for skreddersydd pris.
        </p>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-medium tracking-tight">Logo</h3>
            <div className="mb-4 text-2xl font-semibold tracking-tight text-[rgb(var(--ink))]">
              Fra 1 500 kr
            </div>
            <ul className="mb-6 text-left text-sm text-[rgb(var(--muted))]">
              <li>- Enkel logo eller wordmark</li>
              <li>- Levering i vektor og nett format</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-medium tracking-tight">Basic hjemmeside</h3>
            <div className="mb-4 text-2xl font-semibold tracking-tight text-[rgb(var(--ink))]">
              Fra 3 000 kr
            </div>
            <ul className="mb-6 text-left text-sm text-[rgb(var(--muted))]">
              <li>- Enkel nettside med opptil 5 sider</li>
              <li>- Inkluderer mobiltilpasset design</li>
              <li>- Basis SEO og opplæring</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-medium tracking-tight">Større prosjekter</h3>
            <div className="mb-4 text-2xl font-semibold tracking-tight text-[rgb(var(--ink))]">
              Ta kontakt
            </div>
            <p className="mb-6 text-sm text-[rgb(var(--muted))]">
              For større merkevare- eller nettprosjekter lager jeg skreddersydde tilbud
              basert på omfang.
            </p>
          </article>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-medium tracking-tight">
            Jeg er alltid tilgjengelig for små og store prosjekter. Ved små
            endringer/oppgaver avtaler vi timespris eller fast pris.
          </h2>
        </section>
      </main>
    </Container>
  );
}
