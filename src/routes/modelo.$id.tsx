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
        { title: `${nome} — STRAM PURU` },
        {
          name: "description",
          content: `${nome}: cores disponíveis, composição, tabela de tamanhos e preços por quantidade.`,
        },
        { property: "og:title", content: `${nome} — STRAM PURU` },
        {
          property: "og:description",
          content: `${nome}: cores disponíveis, tamanhos e preços por quantidade.`,
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
  const cor =
    modelo.cores[ativa] ??
    modelo.cores[0] ?? {
      nome: "",
      hex: "",
      hexes: [] as string[],
      imagem: modelo.imagem,
    };

  const [cabecalho, ...linhas] = modelo.tamanhos;

  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Imagem */}
        <div className="md:sticky md:top-32">
          <div className="w-full aspect-[4/5] bg-secondary ring-1 ring-black/5 overflow-hidden">
            <img
              src={cor.imagem}
              alt={`${modelo.nome} — ${cor.nome}`}
              width={800}
              height={1000}
              className="w-full h-full object-contain p-6"
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
            <h1 className="text-4xl md:text-5xl font-display leading-tight">
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
                Cores Disponíveis ({modelo.cores.length})
              </span>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {cor.nome}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {modelo.cores.map((c, i) => (
                <button
                  key={c.nome}
                  onClick={() => setAtiva(i)}
                  aria-label={c.nome}
                  aria-pressed={i === ativa}
                  className={`size-9 rounded-full transition-all ring-offset-2 ring-offset-background outline-none ${
                    i === ativa
                      ? "ring-2 ring-foreground"
                      : "ring-1 ring-black/10 hover:ring-foreground/30"
                  }`}
                  style={{
                    background:
                      c.hexes.length > 1
                        ? `linear-gradient(180deg, ${c.hexes.join(", ")})`
                        : c.hex,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Ficha */}
          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <div className="flex justify-between items-start gap-6">
              <span className="text-sm">Composição</span>
              <span className="text-sm text-muted-foreground text-right">
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
              <span className="text-sm">Família</span>
              <span className="text-sm text-muted-foreground">
                {categoria.titulo}
              </span>
            </div>
          </div>

          {/* Preços */}
          {modelo.precos.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-[11px] uppercase tracking-widest font-semibold">
                Preços por quantidade
              </h2>
              <div className="divide-y divide-border border-y border-border">
                {modelo.precos.map(([qtd, preco]) => (
                  <div key={qtd} className="flex justify-between py-3">
                    <span className="text-sm text-muted-foreground">{qtd}</span>
                    <span className="text-sm font-medium">{preco}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/categoria/$categoria"
            params={{ categoria: categoria.id }}
            className="inline-flex items-center text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            ← Voltar a {categoria.titulo}
          </Link>
        </div>
      </section>

      {/* Tamanhos */}
      {cabecalho && (
        <section className="bg-card border-t border-border py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-6">
            <h2 className="font-display text-3xl">Tamanhos</h2>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Medidas em centímetros
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {cabecalho.map((h) => (
                      <th
                        key={h}
                        className="border border-border px-4 py-2 text-left text-[11px] uppercase tracking-widest font-semibold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {linhas.map((linha) => (
                    <tr key={linha[0]}>
                      {linha.map((celula, i) => (
                        <td
                          key={i}
                          className={`border border-border px-4 py-2 whitespace-nowrap ${
                            i === 0 ? "font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {celula}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
