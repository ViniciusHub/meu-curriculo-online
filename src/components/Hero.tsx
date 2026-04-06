import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section id="sobre" className="bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-6 md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-soft)]">
            Full Stack Developer
          </p>

          <h1 className="max-w-3xl text-[1.9rem] font-bold leading-[1.15] text-[var(--color-text)] md:text-5xl">
            Desenvolvedor full stack com foco em{" "}
            <span className="text-primary-container text-[var(--color-primary-strong)]">
              soluções completas, performance e boa experiência
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] md:text-lg">
            Desenvolvedor full stack com experiência em interfaces modernas,
            integrações, e-commerce e desenvolvimento de aplicações do front ao
            back-end, com foco em performance, clareza visual e boa experiência
            do usuário.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projetos"
              className="inline-flex w-full items-center justify-center rounded-md bg-[var(--color-button-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:opacity-90 sm:w-auto"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--color-button-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:opacity-90 sm:w-auto"
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 md:justify-self-end">
          <div className="relative mx-auto w-full max-w-md md:max-w-lg">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-xl border-[6px] border-[var(--color-accent)]" />
            <div className="relative overflow-hidden rounded-2xl bg-[#d9d9d9] shadow-sm">
              <Image
                src={`${basePath}/foto-perfil.png`}
                alt="Foto de Vinicius Oliveira"
                width={500}
                height={560}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
