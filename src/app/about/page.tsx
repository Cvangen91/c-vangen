import Image from "next/image";
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="grid items-start gap-8 pt-6 sm:pt-10 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
            Cecilie Dyrnes Vangen – IT-utvikler & designer
          </h1>

          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Jeg er en engasjert fullstack-utvikler med et øye for design og en genuin
            lidenskap for å bygge løsninger som både fungerer og ser bra ut. Med en
            Bachelor i IT og Ledelse i bunn jobber jeg med alt fra frontend i React,
            Next.js, TypeScript og CSS til backend med PHP, API-integrasjoner og SQL.
          </p>

          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Faglig har jeg vært innom et bredt spekter – objektorientert programmering,
            applikasjonsutvikling for web, databaser, IoT, informasjonssikkerhet,
            dataanalyse og ledelse av IT-prosjekter, for å nevne noe. Det gir meg en solid
            helhetlig forståelse av både teknologi og systemer.
          </p>

          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Prosjektene mine spenner fra plattformer og fagsystemer – som
            dressurdommer.no, en digital plattform for norske dressurdommere med
            automatisk PDF-generering – til nettsteder og visuell profilering for
            bedrifter og organisasjoner. Grafisk design fra Noroff og interesse for foto
            og video gir meg et ekstra lag av forståelse for brukeropplevelse og visuell
            kvalitet.
          </p>

          <p className="max-w-2xl text-[rgb(var(--muted))]">
            Jeg er lettlært, strukturert og trives like godt med å jobbe selvstendig som i
            team. Alltid nysgjerrig, alltid i utvikling.
          </p>
        </div>

        <div className="md:col-span-1">
          <figure className="w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100/60 shadow-sm ring-1 ring-black/5">
              <Image
                src="/pictures/profilpicture.JPG"
                alt="Profilbilde av Cecilie Dyrnes Vangen"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </figure>
        </div>
      </div>
    </Container>
  );
}
