import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ModelCard } from "@/components/model-card";
import { categorias, modelos } from "@/lib/catalogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alma — Catálogo Editorial de Moda" },
      {
        name: "description",
        content:
          "Catálogo editorial de moda: coleções de homem, mulher e criança, com as respetivas cores disponíveis em cada modelo.",
      },
      { property: "og:title", content: "Alma — Catálogo Editorial de Moda" },
      {
        property: "og:description",
        content:
          "Coleções de homem, mulher e criança, com as respetivas cores disponíveis em cada modelo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const destaques = [
    modelos.find((m) => m.id === "sobretudo-la")!,
    modelos.find((m) => m.id === "blazer-alfaiataria")!,
    modelos.find((m) => m.id === "conjunto-linho")!,
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-16 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-display text-balance leading-[0.9] mb-6">
            Coleção <br />
            <span className="italic pl-12">Equinócio</span>
          </h1>
          <p className="max-w-md text-muted-foreground leading-relaxed text-sm">
            Uma exploração de texturas naturais e silhuetas intemporais. Desenhado
            para durar, fabricado com intenção.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categorias
            .filter((c) => c.id !== "brindes")
            .map((cat, i) => (
            <Link
              key={cat.id}
              to="/categoria/$categoria"
              params={{ categoria: cat.id }}
              className={`group block animate-fade-up [animation-delay:${i * 100}ms] ${
                i === 1 ? "md:mt-24" : ""
              }`}
            >
              <div className="w-full aspect-[2/3] bg-secondary overflow-hidden ring-1 ring-black/5">
                <img
                  src={cat.imagem}
                  alt={cat.titulo}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={800}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-display text-2xl italic">{cat.titulo}</h3>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Ver Mais
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="bg-card py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-4xl">Em Destaque</h2>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Seleção Editorial
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {destaques.map((m) => (
              <ModelCard key={m.id} modelo={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Brindes */}
      {(() => {
        const cat = categorias.find((c) => c.id === "brindes");
        if (!cat) return null;
        const brindes = modelos.filter((m) => m.categoria === "brindes").slice(0, 3);
        return (
          <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <Link
                to="/categoria/$categoria"
                params={{ categoria: "brindes" }}
                className="group block"
              >
                <div className="w-full aspect-[4/3] bg-secondary overflow-hidden ring-1 ring-black/5">
                  <img
                    src={cat.imagem}
                    alt={cat.titulo}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="md:pl-8">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Novidade
                </span>
                <h2 className="font-display text-4xl md:text-5xl mt-3 mb-4">
                  {cat.titulo}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-sm mb-6">
                  {cat.descricao}
                </p>
                <Link
                  to="/categoria/$categoria"
                  params={{ categoria: "brindes" }}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                >
                  Ver Brindes
                </Link>
              </div>
            </div>
            {brindes.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
                {brindes.map((m) => (
                  <ModelCard key={m.id} modelo={m} />
                ))}
              </div>
            )}
          </section>
        );
      })()}
    </SiteLayout>
  );
}
