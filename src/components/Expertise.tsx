export default function Expertise() {
  return (
    <section id="skills" className="bg-[#f3f3f5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            Core Expertise
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#64748b] md:text-base">
            Experiencia em desenvolvimento full stack, interfaces modernas,
            organizacao de sistemas, integracoes e construcoes com foco em
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
              Desenvolvimento de aplicacoes completas com foco em interface,
              logica de negocio, integracoes e experiencia do usuario.
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
              Organizacao de projetos com componentes, padroes reutilizaveis e
              estrutura preparada para crescer com manutencao simples.
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
              Estruturacao de paginas intuitivas, limpas e funcionais, pensando
              em navegacao, conversao e clareza na comunicacao.
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
              Ajustes de estrutura, codigo e fluxo para entregar paginas e
              sistemas mais rapidos, leves e eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
