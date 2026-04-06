import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  return (
    <header className="w-full border-b border-black/5 bg-[#f3f3f5]">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-5 md:grid-cols-[1fr_auto_1fr]">
        <a href="#sobre" className="flex items-center">
          <Image
            src={`${basePath}/logo/logo-v5.png`}
            alt="Logo de Vinicius Oliveira"
            width={226}
            height={100}
            className="block"
            style={{ width: "auto", height: "56px" }}
            priority
          />
        </a>

        <nav
          aria-label="Navegacao principal"
          className="hidden justify-center gap-8 text-sm text-[#475569] md:flex"
        >
          <a
            href="#sobre"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
          >
            Sobre
          </a>
          <a
            href="#experiencia"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
          >
            Experiencia
          </a>
          <a
            href="#skills"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
          >
            Skills
          </a>
          <a
            href="#projetos"
            className="inline-block origin-center border-b border-transparent text-[14px] font-semibold transition-all duration-200 hover:scale-[1.43] hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
          >
            Projetos
          </a>
        </nav>

        <a
          href="#contato"
          className="justify-self-end rounded-md bg-[#0b2341] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
