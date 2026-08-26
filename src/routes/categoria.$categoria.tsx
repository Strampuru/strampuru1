import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { ModelCard } from "@/components/model-card";
import { getCategoria, getModelosPorCategoria } from "@/lib/catalogo";

export const Route = createFileRoute("/categoria/$categoria")({
  loader: ({ params }) => {
    const categoria = getCategoria(params.categoria);
    if (!categoria) throw notFound();
    return { categoria, modelos: getModelosPorCategoria(categoria.id) };
  },
  head: ({ loaderData }) => {
    const nome = loaderData?.categoria.titulo ?? "Catálogo";
    return {
      meta: [
        { title: `${nome} — STRAM PURU` },
        {
          name: "description",
          content: `${nome} do catálogo STRAM PURU, com as cores disponíveis, tamanhos e preços por quantidade de cada modelo.`,
        },
        { property: "og:title", content: `${nome} — STRAM PURU` },
        {
          property: "og:description",
          content: `${nome}: modelos com as respetivas cores disponíveis.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },

  component: CategoriaPage,
});

function CategoriaPage() {
  const { categoria, modelos } = Route.useLoaderData();
  const [filtro, setFiltro] = useState<string>("Todos");

  const opcoes = ["Todos", ...categoria.subcategorias];
  const visiveis =
    filtro === "Todos"
      ? modelos
      : modelos.filter((m) => m.subcategoria === filtro);

  return (
    <SiteLayout>
      <section className="bg-card py-10 md:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex gap-4 mb-6 md:mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground">{categoria.nome}</span>
          </nav>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between sm:gap-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl">
              {categoria.nome}
            </h1>
            <span className="shrink-0 text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              {modelos.length} Modelos
            </span>
          </div>

          <p className="mt-5 md:mt-6 max-w-md text-muted-foreground leading-relaxed text-[13px] sm:text-sm">
            {categoria.descricao}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Subcategoria filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {opcoes.map((op) => (
            <button
              key={op}
              onClick={() => setFiltro(op)}
              className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-widest transition-colors ${
                filtro === op
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {op}
            </button>
          ))}
        </div>

        {visiveis.length === 0 ? (
          <p className="text-muted-foreground text-sm uppercase tracking-widest py-24 text-center">
            Nenhum modelo nesta subcategoria.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {visiveis.map((m) => (
              <ModelCard key={m.id} modelo={m} />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
