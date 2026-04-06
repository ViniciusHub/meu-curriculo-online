"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Pagina desenvolvida com foco em apresentacao profissional, hierarquia visual clara, responsividade, integracao com contato e base pronta para evolucao.",
    image: "/images/projects/projeto-1.png",
    alt: "Preview do projeto 1",
    bgClass: "bg-[#cfe8df]",
  },
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Estrutura para loja virtual com foco em navegacao, apresentacao de produtos, organizacao de conteudo e integracao com o fluxo de compra.",
    image: "/images/projects/projeto-2.png",
    alt: "Preview do projeto 2",
    bgClass: "bg-[#6da8b7]",
  },
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Estrutura para loja virtual com foco em navegacao, apresentacao de produtos, organizacao de conteudo e integracao com o fluxo de compra.",
    image: "/images/projects/projeto-3.png",
    alt: "Preview do projeto 3",
    bgClass: "bg-[#e8dfd3]",
  },
];

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projetos" className="bg-[#f3f3f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
                Projetos em Destaque
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b] md:text-base">
                Alguns trabalhos e tipos de projeto que representam minha
                atuacao full stack, unindo interface, regras de negocio,
                integracoes e experiencia do usuario.
              </p>
            </div>

            <a
              href="#contato"
              className="text-sm font-semibold text-[#0b2341] transition hover:opacity-70"
            >
              Falar sobre um projeto
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.image}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden ${project.bgClass}`}
                  aria-label={`Abrir imagem maior de ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-[#0f172a]/0 transition duration-300 group-hover:bg-[#0f172a]/40" />

                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-xs font-semibold text-[#0f172a] shadow-sm transition duration-300 group-hover:scale-105">
                    <ExpandIcon />
                    Ver maior
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[#0f172a]">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748b]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-[#64748b]">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href="#contato"
                      className="inline-flex w-fit self-start rounded-md bg-[#f3f4f6] px-4 py-2 text-sm font-medium text-[#0f172a] transition hover:bg-[#e5e7eb]"
                    >
                      Ver projeto
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/80 px-4 py-8"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizacao ampliada de ${selectedProject.title}`}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#0f172a] shadow-sm transition hover:bg-white"
              aria-label="Fechar visualizacao"
            >
              Fechar
            </button>

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="relative h-[75vh] w-full bg-[#e5e7eb] md:h-[82vh]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 90vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
