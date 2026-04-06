import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Script from "next/script";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Vinicius Oliveira",
        jobTitle: "Desenvolvedor Full Stack",
        email: "desenvolveloja@gmail.com",
        sameAs: [
          "https://www.linkedin.com/in/viniciusgustavoti/",
          "https://github.com/ViniciusHub",
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "WordPress",
          "E-commerce",
        ],
      },
      {
        "@type": "WebSite",
        name: "Vinicius Oliveira | Curriculo Online",
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
