import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { DestaqueRotativo } from "@/components/destaque-rotativo";
import { categorias, modelos } from "@/lib/catalogo";
import logo from "@/assets/strampuru-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strampuru — Catálogo de Vestuário" },
      {
        name: "description",
        content:
          "Catálogo STRAM PURU: t-shirts, polos, sweats e jaquetas para personalizar, com todas as cores, tamanhos e escalões de preço.",
      },
      { property: "og:title", content: "Strampuru — Catálogo de Vestuário" },
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
      {/* Hero — logótipo enquadrado */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,var(--color-secondary),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,oklch(0.72_0.13_38/0.10),transparent_45%),radial-gradient(circle_at_82%_68%,oklch(0.62_0.14_240/0.08),transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24 flex flex-col items-center text-center animate-fade-up">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <span className="h-px w-6 sm:w-10 md:w-16 bg-accent/60" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] sm:tracking-[0.34em] text-accent font-semibold uppercase">
              Vestuário para personalizar
            </span>
            <span className="h-px w-6 sm:w-10 md:w-16 bg-accent/60" />
          </div>

          <div className="relative">
            <div className="absolute -inset-5 sm:-inset-6 md:-inset-9 rounded-full border border-border/70 pointer-events-none" />
            <img
              src={logo.url}
              alt="Logótipo Strampuru"
              width={720}
              height={696}
              className="relative w-[13rem] sm:w-60 md:w-[26rem] h-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
            />
          </div>

          <h1 className="mt-10 md:mt-14 font-display text-[2rem] leading-[1] sm:text-4xl md:text-6xl md:leading-[0.95]">
            Catálogo <span className="italic">Strampuru</span>
          </h1>
          <p className="mt-5 md:mt-6 max-w-md text-muted-foreground leading-relaxed text-[13px] sm:text-sm text-balance">
            {modelos.length} modelos de vestuário para personalizar, num total de{" "}
            {totalCores} cores. Escolhe uma família de produto para ver as
            fichas técnicas, tamanhos e preços por quantidade.
          </p>

          <div className="mt-10 md:mt-14 flex items-center gap-8 md:gap-12 text-center">
            <div>
              <div className="font-display text-3xl md:text-4xl text-accent">{modelos.length}</div>
              <div className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Modelos</div>
            </div>
            <span className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl md:text-4xl text-accent">{totalCores}</div>
              <div className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Cores</div>
            </div>
          </div>
        </div>
      </section>


      {/* Destaques — imagens de modelos aleatórios em rotação */}
      <section className="bg-card py-16 md:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 border-b border-border pb-6 md:pb-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-[10px] tracking-[0.3em] text-accent font-semibold uppercase">
                  PEÇAS PARA TODA A FAMÍLIA
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl italic leading-none">
                Em Destaque
              </h2>
            </div>
            <Link
              to="/categoria/$categoria"
              params={{ categoria: categorias[0]?.id ?? "tshirts" }}
              className="group flex items-center gap-4 md:gap-6 mt-6 md:mt-0"
            >
              <span className="text-[11px] tracking-widest text-muted-foreground uppercase group-hover:text-foreground transition-colors">
                Ver Catálogo Completo
              </span>
              <span className="relative shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-foreground transition-all duration-500">
                <svg
                  className="w-4 h-4 text-accent-foreground group-hover:text-background transition-colors duration-500"
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
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32 grid md:grid-cols-2 gap-8 md:gap-20 items-start"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
          Sobre <span className="italic">nós</span>
        </h2>
        <div className="space-y-5 md:space-y-6 text-[13px] sm:text-sm text-muted-foreground leading-relaxed max-w-prose">
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
