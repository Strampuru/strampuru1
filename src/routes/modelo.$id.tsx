import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { getModelo, getCategoria } from "@/lib/catalogo";
import type { Categoria, Cor, Modelo, Peca } from "@/lib/catalogo";

export const Route = createFileRoute("/modelo/$id")({
  loader: ({ params }) => {
    const modelo = getModelo(params.id);
    if (!modelo) throw notFound();
    const categoria = getCategoria(modelo.categoria) ?? null;
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

type Vista = {
  titulo: string;
  composicao: string;
  referencia: string;
  imagem: string;
  cores: Cor[];
  tamanhos: string[][];
  precos: [string, string][];
  lifestyle?: string | undefined;
};

function ModeloPage() {
  const { modelo, categoria } = Route.useLoaderData();
  const pecas = modelo.pecas ?? [];
  const [peca, setPeca] = useState(0);

  const vista: Vista =
    pecas.length > 0
      ? {
          titulo: pecas[peca]?.nome ?? "",
          composicao: pecas[peca]?.composicao ?? modelo.composicao,
          referencia: pecas[peca]?.referencia ?? modelo.referencia,
          imagem: pecas[peca]?.imagem ?? modelo.imagem,
          cores: pecas[peca]?.cores ?? [],
          tamanhos: pecas[peca]?.tamanhos ?? [],
          precos: pecas[peca]?.precos ?? [],
        }
      : {
          titulo: "",
          composicao: modelo.composicao,
          referencia: modelo.referencia,
          imagem: modelo.imagem,
          cores: modelo.cores,
          tamanhos: modelo.tamanhos,
          precos: modelo.precos,
          lifestyle: modelo.lifestyle,
        };

  return (
    <SiteLayout>
      {pecas.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 md:pt-10">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Este conjunto tem {pecas.length} peças — escolha uma peça
          </p>
          <div className="flex flex-wrap gap-2">
            {pecas.map((p, i) => (
              <button
                key={p.nome}
                onClick={() => setPeca(i)}
                aria-pressed={i === peca}
                className={`px-4 py-2 text-[11px] uppercase tracking-widest rounded-full ring-1 transition-colors ${
                  i === peca
                    ? "bg-foreground text-background ring-foreground"
                    : "ring-black/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.nome}
              </button>
            ))}
          </div>
        </div>
      )}

      <DetalheModelo
        key={peca}
        modelo={modelo}
        categoria={categoria}
        vista={vista}
      />
    </SiteLayout>
  );
}

function DetalheModelo({
  modelo,
  categoria,
  vista,
}: {
  modelo: Modelo;
  categoria: Categoria | null;
  vista: Vista;
}) {
  // Diapositivos: foto lifestyle primeiro, depois uma imagem por cor
  const slides = [
    ...(vista.lifestyle
      ? [
          {
            src: vista.lifestyle,
            alt: `Pessoa a usar a ${modelo.nome}`,
            legenda: "Em uso",
            corIndex: -1,
          },
        ]
      : []),
    ...vista.cores.map((c, i) => ({
      src: c.imagem,
      alt: `${modelo.nome} — ${c.nome}`,
      legenda: `${modelo.referenciaNome}${vista.titulo ? ` ${vista.titulo}` : ""} — ${c.nome}`,
      corIndex: i,
    })),
  ];

  const [slide, setSlide] = useState(0);
  const toqueX = useRef<number | null>(null);
  const atual =
    slides[slide] ??
    slides[0] ?? {
      src: vista.imagem,
      alt: modelo.nome,
      legenda: modelo.referenciaNome,
      corIndex: -1,
    };
  const ativa = atual.corIndex;
  const cor =
    (ativa >= 0 ? vista.cores[ativa] : undefined) ??
    vista.cores[0] ?? {
      nome: "",
      hex: "",
      hexes: [] as string[],
      imagem: vista.imagem,
    };

  const setAtivaSlide = (i: number) => {
    const idx = slides.findIndex((s) => s.corIndex === i);
    if (idx >= 0) setSlide(idx);
  };
  const irParaCor = (i: number) => setAtivaSlide(i);
  const anterior = () =>
    setSlide((s) => (s - 1 + slides.length) % slides.length);
  const seguinte = () => setSlide((s) => (s + 1) % slides.length);

  const [cabecalho, ...linhas] = vista.tamanhos;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Galeria */}
        <div className="md:sticky md:top-32 space-y-2">
          <div
            className="relative w-full aspect-[4/5] bg-secondary ring-1 ring-black/5 overflow-hidden group touch-pan-y"
            onTouchStart={(e) => {
              toqueX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const inicio = toqueX.current;
              const fim = e.changedTouches[0]?.clientX ?? null;
              toqueX.current = null;
              if (inicio === null || fim === null) return;
              const dx = fim - inicio;
              if (Math.abs(dx) < 40) return;
              dx < 0 ? seguinte() : anterior();
            }}
          >
            <img
              key={atual.src}
              src={atual.src}
              alt={atual.alt}
              width={1024}
              height={1280}
              className={`w-full h-full ${
                atual.corIndex === -1
                  ? "object-cover"
                  : "object-contain p-4 sm:p-6"
              }`}
            />
            {slides.length > 1 && (
              <>
                <button
                  onClick={anterior}
                  aria-label="Imagem anterior"
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-11 sm:size-10 rounded-full bg-background/80 backdrop-blur ring-1 ring-black/10 flex items-center justify-center text-lg hover:bg-background transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  ←
                </button>
                <button
                  onClick={seguinte}
                  aria-label="Imagem seguinte"
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 size-11 sm:size-10 rounded-full bg-background/80 backdrop-blur ring-1 ring-black/10 flex items-center justify-center text-lg hover:bg-background transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  →
                </button>
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 ring-1 ring-black/10">
                  {slide + 1} / {slides.length}
                </span>
              </>
            )}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {atual.legenda}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-10 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-3 sm:gap-4">
              {categoria && (
                <>
                  <Link
                    to="/categoria/$categoria"
                    params={{ categoria: categoria.id }}
                    className="hover:text-foreground transition-colors"
                  >
                    {categoria.nome}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span>{modelo.subcategoria}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
              {modelo.nome}
              {vista.titulo && (
                <span className="block text-xl sm:text-2xl md:text-3xl italic text-muted-foreground">
                  {vista.titulo}
                </span>
              )}
            </h1>
            <p className="text-[13px] sm:text-base text-muted-foreground text-pretty leading-relaxed max-w-sm">
              {modelo.descricao}
            </p>
          </div>

          {/* Cores */}
          {vista.cores.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-widest font-semibold">
                  Cores Disponíveis ({vista.cores.length})
                </span>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {cor.nome}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {vista.cores.map((c, i) => (
                  <button
                    key={c.nome}
                    onClick={() => irParaCor(i)}
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
          )}

          {/* Ficha */}
          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <div className="flex justify-between items-start gap-6">
              <span className="text-sm">Composição</span>
              <span className="text-sm text-muted-foreground text-right">
                {vista.composicao}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Referência</span>
              <span className="text-sm text-muted-foreground">
                {vista.referencia}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Família</span>
              <span className="text-sm text-muted-foreground">
                {categoria?.titulo ?? modelo.subcategoria}
              </span>
            </div>
          </div>

          {/* Preços */}
          {vista.precos.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-[11px] uppercase tracking-widest font-semibold">
                Preços por quantidade
                {vista.titulo ? ` — ${vista.titulo}` : ""}
              </h2>
              <div className="divide-y divide-border border-y border-border">
                {vista.precos.map(([qtd, preco]) => (
                  <div key={qtd} className="flex justify-between py-3">
                    <span className="text-sm text-muted-foreground">{qtd}</span>
                    <span className="text-sm font-medium">{preco}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {categoria ? (
            <Link
              to="/categoria/$categoria"
              params={{ categoria: categoria.id }}
              className="inline-flex items-center text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              ← Voltar a {categoria.titulo}
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              ← Voltar ao catálogo
            </Link>
          )}
        </div>
      </section>

      {/* Tamanhos */}
      {cabecalho && (
        <section className="bg-card border-t border-border py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 md:space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl">
              Tamanhos{vista.titulo ? ` — ${vista.titulo}` : ""}
            </h2>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Medidas em centímetros — desliza para ver toda a tabela
            </p>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <table className="min-w-full text-[13px] sm:text-sm border-collapse">
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
    </>
  );
}
