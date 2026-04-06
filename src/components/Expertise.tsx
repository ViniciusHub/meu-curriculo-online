export default function Expertise() {
  return (
    <section id="skills" className="bg-[#f3f3f5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            Core Expertise
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#64748b] md:text-base">
            Experiência em desenvolvimento full stack, interfaces modernas,
            organização de sistemas, integrações e construções com foco em
            usabilidade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f0ff] text-lg">
              DEV
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a]">
              Full Stack
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#64748b]">
              Desenvolvimento de aplicações completas com foco em interface,
              lógica de negócio, integrações e experiência do usuário.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eafbf7] text-lg">
              MOD
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a]">
              Arquitetura
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#64748b]">
              Organização de projetos com componentes, padrões reutilizáveis e
              estrutura preparada para crescer com manutenção simples.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff3e8] text-lg">
              UX
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a]">
              UI / UX
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#64748b]">
              Estruturação de páginas intuitivas, limpas e funcionais, pensando
              em navegação, conversão e clareza na comunicação.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef2ff] text-lg">
              OPT
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a]">
              Performance
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#64748b]">
              Ajustes de estrutura, código e fluxo para entregar páginas e
              sistemas mais rápidos, leves e eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
