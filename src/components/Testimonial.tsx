export default function Testimonial() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#0b2341] px-8 py-10 text-white md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#59e3d2]">
              Depoimento
            </p>
  
            <blockquote className="mt-6 text-xl leading-9 md:text-3xl md:leading-[1.5]">
              “Profissional com excelente atenção aos detalhes, boa visão de
              interface e capacidade de transformar ideias em páginas bem
              estruturadas, modernas e funcionais.”
            </blockquote>
  
            <div className="mt-8">
              <p className="text-base font-semibold">Nome do Cliente ou Líder</p>
              <p className="mt-1 text-sm text-white/70">
                Cargo • Empresa ou Projeto
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }