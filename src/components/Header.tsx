import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  return (
    <header className="w-full border-b border-[var(--color-border-soft)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:px-6 md:py-5">
        <a href="#sobre" className="min-w-0 overflow-hidden flex items-center">
          <Image
            src={`${basePath}/logo/logo-v5.png`}
            alt="Logo de Vinicius Oliveira"
            width={226}
            height={100}
            className="block"
            style={{ width: "auto", height: "44px" }}
            priority
          />
        </a>

        <nav
          aria-label="Navegacao principal"
          className="hidden justify-center gap-8 text-sm text-[var(--color-text-muted)] md:flex"
        >
          <a
            href="#sobre"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Sobre
          </a>
          <a
            href="#experiencia"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Experiência
          </a>
          <a
            href="#skills"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Skills
          </a>
          <a
            href="#projetos"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Projetos
          </a>
        </nav>

        <a
          href="#contato"
          className="justify-self-end whitespace-nowrap rounded-md bg-[var(--color-button-bg)] px-3 py-2 text-sm font-medium text-[var(--color-button-text)] transition hover:opacity-90 md:px-4"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
