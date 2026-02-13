import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="space-y-6">
        <h1 className="text-3xl tracking-tight">Om meg</h1>
        <p className="max-w-2xl text-black/70">
          (Kort bio: designbakgrunn → fullstack. Hva du liker å bygge. Hvordan du jobber.)
        </p>
      </div>
    </Container>
  );
}
