export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#64748b] md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Vinicius Oliveira. Todos os direitos reservados.</p>

        <nav aria-label="Navegacao do rodape" className="flex gap-5">
          <a href="#sobre" className="transition hover:text-[#0f172a]">
            Sobre
          </a>
          <a href="#projetos" className="transition hover:text-[#0f172a]">
            Projetos
          </a>
        </nav>
      </div>
    </footer>
  );
}
