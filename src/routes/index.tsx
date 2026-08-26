import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ModelCard } from "@/components/model-card";
import { categorias, modelos } from "@/lib/catalogo";
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
  const destaques = ["arizona", "racing", "manitoba", "patrol"]
    .map((id) => modelos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

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
            width={520}
            height={500}
            className="w-56 md:w-[26rem] h-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
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

      <section className="max-w-7xl mx-auto px-6 py-20">


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categorias.map((cat, i) => (
            <Link
              key={cat.id}
              to="/categoria/$categoria"
              params={{ categoria: cat.id }}
              className={`group block animate-fade-up ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="w-full aspect-[3/4] bg-secondary overflow-hidden ring-1 ring-black/5">
                <img
                  src={cat.imagem}
                  alt={cat.titulo}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={800}
                  height={1067}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-display text-xl md:text-2xl italic">
                  {cat.titulo}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Ver
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="bg-card py-24 md:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-4xl">Em Destaque</h2>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Mais procurados
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {destaques.map((m) => (
              <ModelCard key={m.id} modelo={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Todos os modelos por categoria */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {categorias.map((cat) => {
          const lista = modelos.filter((m) => m.categoria === cat.id);
          if (lista.length === 0) return null;
          return (
            <div key={cat.id}>
              <div className="flex justify-between items-end mb-10 border-b border-border pb-4">
                <h2 className="font-display text-3xl md:text-4xl italic">
                  {cat.titulo}
                </h2>
                <Link
                  to="/categoria/$categoria"
                  params={{ categoria: cat.id }}
                  className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                >
                  Ver categoria ({lista.length})
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {lista.map((m) => (
                  <ModelCard key={m.id} modelo={m} />
                ))}
              </div>
            </div>
          );
        })}
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
