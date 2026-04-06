"use client";

import { FormEvent, useMemo, useState } from "react";

const whatsappNumber = "5541997719549";
const maxNameLength = 80;
const maxEmailLength = 120;
const maxMessageLength = 1000;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const normalizedName = useMemo(() => normalizeText(name), [name]);
  const normalizedEmail = useMemo(() => email.trim(), [email]);
  const normalizedMessage = useMemo(() => message.trim(), [message]);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
  const isFormValid =
    normalizedName.length >= 2 &&
    isValidEmail &&
    normalizedMessage.length >= 10 &&
    website === "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const whatsappMessage = [
      "Ola, vim pelo seu portfolio.",
      "",
      `Nome: ${normalizedName}`,
      `Email: ${normalizedEmail}`,
      "",
      `Mensagem: ${normalizedMessage}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contato" className="bg-[#f3f3f5] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            Contato
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0f172a] md:text-4xl">
            Vamos conversar?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#64748b] md:text-base">
            Estou disponivel para oportunidades como desenvolvedor full stack,
            criacao de aplicacoes web, melhorias em interfaces, integracoes e
            projetos com foco em performance e experiencia do usuario.
          </p>

          <div className="mt-8 space-y-3 text-sm text-[#0f172a]">
            <p className="gap-1 md:flex">
              <span className="font-semibold">Email:</span>
              desenvolveloja@gmail.com
            </p>
            <p className="gap-1 md:flex">
              <span className="font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/viniciusgustavoti/" className="">
                https://www.linkedin.com/in/viniciusgustavoti/
              </a>
            </p>
            <p className="gap-1 md:flex">
              <span className="font-semibold">GitHub:</span>
              <a href="https://www.linkedin.com/in/viniciusgustavoti/" className="">
                https://github.com/ViniciusHub
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium text-[#0f172a]"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={maxNameLength}
                minLength={2}
                required
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[#0b2341]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#0f172a]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                maxLength={maxEmailLength}
                required
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[#0b2341]"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-medium text-[#0f172a]"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={5}
                placeholder="Vamos conversar!"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={maxMessageLength}
                minLength={10}
                required
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[#0b2341]"
              />
              <p className="mt-2 text-xs text-[#64748b]">
                Minimo de 10 caracteres.
              </p>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="cursor-pointer rounded-xl bg-[#0b2341] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Enviar mensagem no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
