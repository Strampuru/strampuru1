import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { getModelo, getCategoria } from "@/lib/catalogo";

export const Route = createFileRoute("/modelo/$id")({
  loader: ({ params }) => {
    const modelo = getModelo(params.id);
    if (!modelo) throw notFound();
    const categoria = getCategoria(modelo.categoria)!;
    return { modelo, categoria };
  },
  head: ({ loaderData }) => {
    const nome = loaderData?.modelo.nome ?? "Modelo";
    return {
      meta: [
        { title: `${nome} — Alma Catálogo` },
        {
          name: "description",
          content: `${nome}: detalhe do modelo com cores disponíveis e composição.`,
        },
        { property: "og:title", content: `${nome} — Alma Catálogo` },
        {
          property: "og:description",
          content: `${nome}: cores disponíveis e composição.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ModeloPage,
});

function ModeloPage() {
  const { modelo, categoria } = Route.useLoaderData();
  const [ativa, setAtiva] = useState(0);
  const cor = modelo.cores[ativa] ?? modelo.cores[0] ?? { nome: "", hex: "" };

  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-start">
        {/* Imagem */}
        <div className="md:sticky md:top-32">
          <div className="w-full aspect-[4/5] bg-secondary ring-1 ring-black/5 overflow-hidden">
            <img
              src={modelo.imagem}
              alt={modelo.nome}
              width={800}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12">
          <div className="space-y-6">
            <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-4">
              <Link
                to="/categoria/$categoria"
                params={{ categoria: categoria.id }}
                className="hover:text-foreground transition-colors"
              >
                {categoria.nome}
              </Link>
              <span>/</span>
              <span>{modelo.subcategoria}</span>
            </nav>
            <h1 className="text-5xl font-display leading-tight">
              {modelo.nome}
            </h1>
            <p className="text-muted-foreground text-pretty leading-relaxed max-w-sm">
              {modelo.descricao}
            </p>
          </div>

          {/* Cores */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] uppercase tracking-widest font-semibold">
                Cores Disponíveis
              </span>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {cor.nome}
              </span>
            </div>
            <div className="flex gap-3">
              {modelo.cores.map((c, i) => (
                <button
                  key={c.hex}
                  onClick={() => setAtiva(i)}
                  aria-label={c.nome}
                  aria-pressed={i === ativa}
                  className={`size-10 rounded-full transition-all ring-offset-2 ring-offset-background outline-none ${
                    i === ativa
                      ? "ring-2 ring-foreground"
                      : "ring-1 ring-black/10 hover:ring-foreground/30"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Ficha */}
          <div className="pt-12 border-t border-border flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-sm">Composição</span>
              <span className="text-sm text-muted-foreground">
                {modelo.composicao}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Referência</span>
              <span className="text-sm text-muted-foreground">
                {modelo.referencia}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Coleção</span>
              <span className="text-sm text-muted-foreground">
                {categoria.titulo}
              </span>
            </div>
          </div>

          <Link
            to="/categoria/$categoria"
            params={{ categoria: categoria.id }}
            className="inline-flex items-center text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            ← Voltar à coleção
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
