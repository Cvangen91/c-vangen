import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <div className="pt-6 sm:pt-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
            Kontakt
          </h1>
          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Ta kontakt for å diskutere ditt prosjekt, be om et tilbud eller bare si hei.
            Jeg er alltid åpen for nye muligheter og samarbeid.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            className="space-y-4 rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--surface))] p-6 shadow-sm"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[rgb(var(--ink))]">
                Navn
                <input
                  name="name"
                  type="text"
                  className="w-full rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm text-[rgb(var(--ink))] transition outline-none placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--accent2))]"
                  placeholder="Ditt navn"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-[rgb(var(--ink))]">
                E-post
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm text-[rgb(var(--ink))] transition outline-none placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--accent2))]"
                  placeholder="din@epost.no"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm font-medium text-[rgb(var(--ink))]">
              Emne
              <input
                name="subject"
                type="text"
                className="w-full rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm text-[rgb(var(--ink))] transition outline-none placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--accent2))]"
                placeholder="Kort om prosjektet"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-[rgb(var(--ink))]">
              Melding
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-2xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm text-[rgb(var(--ink))] transition outline-none placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--accent2))]"
                placeholder="Skriv kort om mål, innhold og ønsket tidslinje."
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Send melding
            </button>
          </form>

          <aside className="space-y-4 rounded-3xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm text-[rgb(var(--muted))]">E-post</p>
              <a
                className="mt-1 inline-flex text-[rgb(var(--accent2))] hover:opacity-80"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted))]">Telefon</p>
              <a
                className="mt-1 inline-flex text-[rgb(var(--accent2))] hover:opacity-80"
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
              >
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
