export default function CurvedSection({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "white";
}) {
  const bg = tone === "light" ? "bg-[rgb(var(--bg))]" : "bg-white";
  const fill = tone === "light" ? "rgb(var(--bg))" : "white";

  return (
    <section className="relative">
      {/* top curve */}
      <svg
        className="absolute left-0 top-0 w-full -translate-y-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,72 480,72 720,40 C960,8 1200,8 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>

      <div className={`${bg} py-10 sm:py-14 lg:py-16`}>{children}</div>

      {/* bottom curve */}
      <svg
        className="absolute left-0 bottom-0 w-full translate-y-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,8 480,8 720,40 C960,72 1200,72 1440,32 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </section>
  );
}
