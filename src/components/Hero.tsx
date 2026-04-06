import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section id="sobre" className="bg-[#f3f3f5]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            Full Stack Developer
          </p>

          <h1 className="max-w-3xl text-3xl font-bold leading-[1.15] text-[#0f172a] md:text-5xl">
            Desenvolvedor full stack com foco em{" "}
            <span className="text-primary-container text-[#0f3d69]">
              solucoes completas, performance e boa experiencia
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] md:text-lg">
            Desenvolvedor full stack com experiencia em interfaces modernas,
            integracoes, e-commerce e desenvolvimento de aplicacoes do front ao
            back-end, com foco em performance, clareza visual e boa experiencia
            do usuario.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="rounded-md bg-[#59e3d2] px-6 py-3 text-sm font-semibold text-[#1A1C1F] transition hover:opacity-90"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="rounded-md border border-transparent bg-[#e8e8ec] px-6 py-3 text-sm font-semibold text-[#1A1C1F] transition hover:bg-[#e2e2e6]"
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 md:justify-self-end">
          <div className="relative mx-auto w-full max-w-md md:max-w-lg">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-xl border-[6px] border-[#59e3d2]" />
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
