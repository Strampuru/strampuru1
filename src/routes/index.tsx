import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { DestaqueRotativo } from "@/components/destaque-rotativo";
import { modelos } from "@/lib/catalogo";
import logo from "@/assets/strampuru-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRAM PURU — Catálogo de Vestuário" },
      {
        name: "description",
        content:
          "Catálogo STRAM PURU: t-shirts, polos, sweats e jaquetas para personalizar, com todas as cores, tamanhos e escalões de preço.",
      },
      { property: "og:title", content: "STRAM PURU — Catálogo de Vestuário" },
      {
        property: "og:description",
        content:
          "T-shirts, polos, sweats e jaquetas com todas as cores disponíveis, tabela de tamanhos e preços por quantidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const totalCores = modelos.reduce((n, m) => n + m.cores.length, 0);

  return (
    <SiteLayout>
      {/* Hero — logótipo */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-secondary),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center animate-fade-up">
          <img
            src={logo.url}
            alt="Logótipo Stram Puru"
            width={720}
            height={696}
            className="w-72 md:w-[34rem] h-auto"
          />
          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-[0.95]">
            Catálogo <span className="italic">Strampuru</span>
          </h1>
          <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed text-sm">
            {modelos.length} modelos de vestuário para personalizar, num total de{" "}
            {totalCores} cores. Escolhe uma família de produto para ver as
            fichas técnicas, tamanhos e preços por quantidade.
          </p>
        </div>
      </section>


      {/* Destaques — imagens de modelos aleatórios em rotação */}
      <section className="bg-card py-24 md:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-[10px] tracking-[0.3em] text-accent font-semibold uppercase">
                  Seleção Aleatória
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl italic leading-none">
                Em Destaque
              </h2>
            </div>
            <Link
              to="/categoria/$categoria"
              params={{ categoria: categorias[0]?.id ?? "tshirts" }}
              className="group flex items-center gap-6 mt-8 md:mt-0"
            >
              <span className="text-[11px] tracking-widest text-muted-foreground uppercase group-hover:text-foreground transition-colors">
                Ver Catálogo Completo
              </span>
              <span className="relative w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                <svg
                  className="w-4 h-4 text-foreground group-hover:text-background transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <DestaqueRotativo />
        </div>
      </section>



      {/* Sobre nós */}
      <section
        id="sobre-nos"
        className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start"
      >
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          Sobre <span className="italic">nós</span>
        </h2>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-prose">
          <p>
            A STRAMPURU reúne um catálogo de vestuário pensado para
            personalização: t-shirts, polos, sweats e jaquetas em malhas de
            algodão e técnicas, com uma paleta de cores ampla e tabelas de
            tamanhos de criança a 3XL.
          </p>
          <p>
            Este catálogo serve para consulta: cada modelo mostra as cores
            disponíveis, a composição do material, as medidas por tamanho e os
            escalões de preço por quantidade.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
