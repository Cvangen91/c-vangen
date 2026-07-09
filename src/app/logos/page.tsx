import Link from "next/link";
import LogoGallery from "@/components/LogoGallery";
import Container from "@/components/Container";

export const metadata = {
  title: "Logoer | Portefølje",
  description: "Utvalgte logoer og merkevareelementer.",
};

export default function LogosPage() {
  return (
    <Container>
      <main className="pt-6 sm:pt-10">
        <h1 className="mb-6 font-[family-name:var(--font-serif)] text-3xl tracking-tight">
          Logoer
        </h1>
        <p className="mb-8 max-w-2xl text-[rgb(var(--muted))]">
          Her kan du se et utvalg av logoer jeg har designet for ulike kunder.
        </p>

        <LogoGallery />

        <div className="mt-10">
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-[rgb(var(--accent))] px-4 py-2 text-white transition hover:opacity-90"
          >
            Kontakt for bestilling
          </Link>
        </div>
      </main>
    </Container>
  );
}
