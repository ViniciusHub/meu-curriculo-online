"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Página desenvolvida com foco em apresentação profissional, hierarquia visual clara, responsividade, integração com contato e base pronta para evolução.",
    image: `${basePath}/images/projects/projeto-1.png`,
    url: "https://nutra40.commercesuite.com.br/",
    alt: "Preview do projeto 1",
    bgClass: "bg-[#cfe8df]",
  },
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Estrutura para loja virtual com foco em navegação, apresentação de produtos, organização de conteúdo e integração com o fluxo de compra.",
    image: `${basePath}/images/projects/projeto-2.png`,
    url: "https://www.versatilacessorios.com.br/",
    alt: "Preview do projeto 2",
    bgClass: "bg-[#6da8b7]",
  },
  {
    title: "E-commerce Profissional",
    category: "Full Stack",
    description:
      "Estrutura para loja virtual com foco em navegação, apresentação de produtos, organização de conteúdo e integração com o fluxo de compra.",
    image: `${basePath}/images/projects/projeto-3.png`,
    url: "https://www.oticasonline.com.br/",
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
      <section id="projetos" className="bg-[var(--color-surface)] py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text)] md:text-4xl">
                Projetos em Destaque
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-soft)] md:text-base">
                Alguns trabalhos e tipos de projeto que representam minha
                atuação full stack, unindo interface, regras de negócio,
                integrações e experiência do usuário.
              </p>
            </div>

            <a
              href="#contato"
              className="text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-70"
            >
              Falar sobre um projeto
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.image}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-card)] shadow-sm"
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

                  <div className="absolute inset-0 bg-[var(--color-text)]/0 transition duration-300 group-hover:bg-[var(--color-text)]/40" />

                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-xs font-semibold text-[var(--color-text)] shadow-sm transition duration-300 group-hover:scale-105">
                    <ExpandIcon />
                    Ver maior
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-[var(--color-text)] md:text-lg">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-soft)] md:text-[11px] md:tracking-[0.18em]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-[var(--color-text-soft)]">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit self-start rounded-md bg-[var(--color-surface-soft)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:opacity-90"
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
          aria-label={`Visualização ampliada de ${selectedProject.title}`}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#0f172a] shadow-sm transition hover:bg-white"
              aria-label="Fechar visualização"
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
