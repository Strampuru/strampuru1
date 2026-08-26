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
      <section className="bg-card py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex gap-4 mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground">{categoria.nome}</span>
          </nav>
          <div className="flex justify-between items-end gap-6">
            <h1 className="font-display text-4xl md:text-6xl">
              {categoria.nome}
            </h1>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              {modelos.length} Modelos
            </span>
          </div>

          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed text-sm">
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
