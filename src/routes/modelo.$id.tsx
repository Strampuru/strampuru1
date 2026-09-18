import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { useSwipe } from "@/hooks/use-swipe";
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

function VoltarPaginaAnterior() {
  const navigate = useNavigate();

  const voltar = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    void navigate({ to: "/" });
  };

  return (
    <button
      type="button"
      onClick={voltar}
      className="inline-flex items-center text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
    >
      ← Voltar
    </button>
  );
}

function ModeloPage() {
  const { modelo, categoria } = Route.useLoaderData();
  const pecas = modelo.pecas ?? [];

  const mostraComoConjunto =
    (modelo.id === "pequim" || modelo.id === "jacarta") && pecas.length > 0;

  if (modelo.id === "abu-dhabi" && pecas.length > 0) {
    return (
      <SiteLayout>
        <ConfiguradorAbuDhabi modelo={modelo} categoria={categoria} pecas={pecas} />
      </SiteLayout>
    );
  }

  if (mostraComoConjunto) {
    return (
      <SiteLayout>
        <DetalheConjunto modelo={modelo} categoria={categoria} pecas={pecas} />
      </SiteLayout>
    );
  }

  const vista: Vista = {
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
      <DetalheModelo modelo={modelo} categoria={categoria} vista={vista} />
    </SiteLayout>
  );
}

/* ---------- Vista de conjunto: todas as peças visíveis, preço do conjunto ---------- */

function PecaCard({
  peca,
  modelo,
  corControlada,
}: {
  peca: Peca;
  modelo: Modelo;
  corControlada?: number | undefined;
}) {
  const [corLocal, setCor] = useState(0);
  const cor = corControlada ?? corLocal;
  const atual = peca.cores[cor] ?? peca.cores[0];
  const imagem = atual?.imagem ?? peca.imagem;
  const [cabecalho, ...linhas] = peca.tamanhos;

  const swipe = useSwipe({
    onSwipeLeft: () => setCor((c) => (c + 1) % peca.cores.length),
    onSwipeRight: () => setCor((c) => (c - 1 + peca.cores.length) % peca.cores.length),
  });

  return (
    <article className="space-y-3">
      <div
        className="relative aspect-[4/5] bg-secondary ring-1 ring-black/5 overflow-hidden touch-pan-y"
        {...(peca.cores.length > 1 ? swipe : {})}
      >
        <img
          key={imagem}
          src={imagem}
          alt={`${modelo.nome} — ${peca.nome}${atual ? ` — ${atual.nome}` : ""}`}
          width={1024}
          height={1280}
          className="w-full h-full object-contain p-4 sm:p-6"
        />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 ring-1 ring-black/10">
          {peca.nome}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg sm:text-xl">{peca.nome}</h3>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {peca.referencia ?? modelo.referencia}
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground">{peca.composicao}</p>

        {corControlada === undefined && peca.cores.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {peca.cores.map((c, i) => (
              <button
                key={c.nome}
                onClick={() => setCor(i)}
                aria-label={`${peca.nome} — ${c.nome}`}
                aria-pressed={i === cor}
                className={`size-6 rounded-full transition-all ring-offset-2 ring-offset-background outline-none ${
                  i === cor
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
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
              {atual?.nome}
            </span>
          </div>
        )}

        {cabecalho && (
          <details className="group pt-2">
            <summary className="cursor-pointer list-none flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border-t border-border pt-3">
              Tamanhos — {peca.nome}
              <span className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <table className="min-w-full text-[12px] sm:text-[13px] border-collapse">
                <thead>
                  <tr>
                    {cabecalho.map((h) => (
                      <th
                        key={h}
                        className="border border-border px-3 py-1.5 text-left text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap"
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
                          className={`border border-border px-3 py-1.5 whitespace-nowrap ${
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
          </details>
        )}
      </div>
    </article>
  );
}

function DetalheConjunto({
  modelo,
  categoria,
  pecas,
}: {
  modelo: Modelo;
  categoria: Categoria | null;
  pecas: Peca[];
}) {
  const coresConjunto = pecas[0]?.cores ?? [];
  const partilhamCores =
    coresConjunto.length > 0 &&
    pecas.every((p) => p.cores.length === coresConjunto.length);
  const [cor, setCor] = useState(0);
  const corAtual = coresConjunto[cor] ?? coresConjunto[0];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10 md:space-y-14">
        <div className="space-y-4 md:space-y-6 max-w-2xl">
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
          </h1>
          <p className="text-[13px] sm:text-base text-muted-foreground text-pretty leading-relaxed">
            {modelo.descricao}
          </p>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Conjunto de {pecas.length} peças —{" "}
            {pecas.map((p) => p.nome).join(" + ")}
          </p>
        </div>

        {/* Seletor de cor comum ao conjunto */}
        {partilhamCores && (
          <div className="space-y-3">
            <h2 className="text-[11px] uppercase tracking-widest font-semibold">
              Cor do conjunto
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {coresConjunto.map((c, i) => (
                <button
                  key={c.nome}
                  onClick={() => setCor(i)}
                  aria-label={c.nome}
                  aria-pressed={i === cor}
                  className={`size-7 rounded-full transition-all ring-offset-2 ring-offset-background outline-none ${
                    i === cor
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
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
                {corAtual?.nome}
              </span>
            </div>
          </div>
        )}

        {/* Peças lado a lado */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-start">
          {pecas.map((p) => (
            <PecaCard
              key={p.nome}
              peca={p}
              modelo={modelo}
              corControlada={partilhamCores ? cor : undefined}
            />
          ))}
        </div>

        {/* Preço do conjunto completo */}
        {modelo.precos.length > 0 && (
          <div className="space-y-4 max-w-xl">
            <h2 className="text-[11px] uppercase tracking-widest font-semibold">
              Preço do conjunto completo
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

        <VoltarPaginaAnterior />
      </section>
    </>
  );
}

function valorNumerico(preco: string) {
  return Number(preco.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
}

function precoParaQuantidade(peca: Peca, quantidade: number) {
  const indice = quantidade > 100 ? 2 : quantidade > 50 ? 1 : 0;
  const faixa = peca.precos[indice] ?? peca.precos[0];
  return faixa ? valorNumerico(faixa[1]) : 0;
}

function ConfiguradorAbuDhabi({ modelo, categoria, pecas }: {
  modelo: Modelo;
  categoria: Categoria | null;
  pecas: Peca[];
}) {
  const [ativa, setAtiva] = useState(0);
  const [cor, setCor] = useState(0);
  const [quantidades, setQuantidades] = useState(() => pecas.map(() => 0));
  const peca = pecas[ativa] ?? pecas[0];
  if (!peca) return null;

  const corAtual = peca.cores[cor] ?? peca.cores[0];
  const imagem = corAtual?.imagem ?? peca.imagem;
  const [cabecalho, ...linhas] = peca.tamanhos;
  const totalUnidades = quantidades.reduce((total, quantidade) => total + quantidade, 0);
  const total = pecas.reduce((soma, item, indice) => {
    const quantidade = quantidades[indice] ?? 0;
    return soma + quantidade * precoParaQuantidade(item, quantidade);
  }, 0);
  const moeda = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" });

  const escolherPeca = (indice: number) => {
    setAtiva(indice);
    setCor(0);
  };

  const alterarQuantidade = (indice: number, valor: string) => {
    const quantidade = Math.max(0, Math.floor(Number(valor) || 0));
    setQuantidades((anteriores) =>
      anteriores.map((atual, i) => (i === indice ? quantidade : atual)),
    );
  };

  const faixaAtiva = totalUnidades > 100 ? 2 : totalUnidades > 50 ? 1 : 0;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Configuração */}
        <div className="lg:col-span-8 space-y-10">
          <header className="space-y-3">
            <nav className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold italic flex gap-3">
              {categoria && <Link to="/categoria/$categoria" params={{ categoria: categoria.id }}>{categoria.nome}</Link>}
              <span>/</span><span>{modelo.subcategoria}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic leading-tight">{modelo.nome}</h1>
          </header>

          {/* Separadores de peças */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 border-b border-border" role="tablist" aria-label="Peças Abu Dhabi">
            {pecas.map((item, indice) => (
              <button key={item.nome} type="button" role="tab" aria-selected={indice === ativa}
                onClick={() => escolherPeca(indice)}
                className={`pb-4 -mb-px text-[11px] tracking-widest uppercase transition-colors ${indice === ativa ? "font-bold border-b-2 border-accent text-foreground" : "font-medium text-muted-foreground hover:text-foreground"}`}>
                {item.nome}
              </button>
            ))}
          </nav>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Fotografia */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-secondary border border-border overflow-hidden">
                <img key={`${peca.nome}-${imagem}`} src={imagem}
                  alt={`${modelo.nome} — ${peca.nome}${corAtual ? ` — ${corAtual.nome}` : ""}`}
                  width={1024} height={1280} className="w-full h-full object-contain p-5" />
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <h2 className="font-display text-2xl italic">{peca.nome}</h2>
                <p className="text-[9px] tracking-[0.2em] uppercase text-accent font-medium">{corAtual?.nome}</p>
              </div>
              <p className="text-xs text-muted-foreground">{peca.composicao}</p>
            </div>

            {/* Controlos */}
            <div className="space-y-10">
              {peca.cores.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Cor</span>
                    <span className="text-[9px] text-muted-foreground italic">{peca.cores.length} cores disponíveis</span>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {peca.cores.map((item, indice) => (
                      <button key={item.nome} type="button" aria-label={`${peca.nome} — ${item.nome}`}
                        aria-pressed={indice === cor} onClick={() => setCor(indice)} title={item.nome}
                        className={`size-10 rounded-full border border-background ring-offset-2 ring-offset-background outline-none transition-all ${indice === cor ? "ring-2 ring-accent" : "hover:ring-1 ring-border"}`}
                        style={{ background: item.hexes.length > 1 ? `conic-gradient(${item.hexes[0]} 50%, ${item.hexes[1]} 50%)` : item.hex }} />
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {cabecalho && (
            <div className="space-y-5">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent block">Tamanhos — {peca.nome}</span>
              <div className="border border-border bg-card overflow-x-auto">
                <table className="w-full min-w-max text-center text-[11px] border-collapse">
                  <thead className="bg-secondary border-b border-border">
                    <tr>{cabecalho.map((item) => <th key={item} className="py-3 px-4 font-bold text-muted-foreground border-r border-border last:border-r-0 whitespace-nowrap">{item}</th>)}</tr>
                  </thead>
                  <tbody>
                    {linhas.map((linha) => (
                      <tr key={linha[0]} className="border-t border-border first:border-t-0">
                        {linha.map((item, indice) => (
                          <td key={indice} className={`py-3 px-4 border-r border-border last:border-r-0 whitespace-nowrap ${indice === 0 ? "font-medium text-left" : "text-muted-foreground"}`}>{item}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground italic">Medidas em centímetros.</p>
            </div>
          )}
        </div>


        {/* Resumo */}
        <aside className="lg:col-span-4 bg-card border border-border p-8 md:p-10 space-y-8 lg:sticky lg:top-12 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
          <div className="space-y-1">
            <h2 className="font-display text-3xl md:text-4xl italic">Resumo</h2>
            <p className="text-xs text-muted-foreground">Indique a quantidade de cada peça.</p>
          </div>

          <div className="divide-y divide-border">
            {pecas.map((item, indice) => {
              const quantidade = quantidades[indice] ?? 0;
              const precoUnitario = precoParaQuantidade(item, quantidade);
              return (
                <div key={item.nome} className={`flex justify-between items-center gap-4 py-4 ${quantidade === 0 ? "opacity-40" : ""}`}>
                  <button type="button" onClick={() => escolherPeca(indice)} className="text-left min-w-0 space-y-1">
                    <span className="block text-xs font-bold uppercase tracking-tight truncate">{item.nome}</span>
                    <span className="block text-[10px] font-medium uppercase tracking-widest text-accent">
                      {quantidade > 0 ? `${moeda.format(precoUnitario)} / un.` : "Pendente"}
                    </span>
                  </button>
                  <input type="number" min="0" step="1" inputMode="numeric" aria-label={`Quantidade de ${item.nome}`}
                    value={quantidade} onChange={(evento) => alterarQuantidade(indice, evento.target.value)}
                    className="w-16 h-10 border border-border bg-background px-2 text-right text-xs font-bold outline-none focus:border-accent" />
                </div>
              );
            })}
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-end">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-muted-foreground">Estimativa</span>
              <span className="font-display text-4xl font-light text-accent">{moeda.format(total)}</span>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-full w-1/3 bg-accent ${i === faixaAtiva ? "" : i < faixaAtiva ? "opacity-40" : "opacity-20"}`} />
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-accent font-bold uppercase tracking-widest">
                {["0–50 un.", "50–100 un.", "+100 un."].map((rotulo, i) => (
                  <span key={rotulo} className={i === faixaAtiva ? "" : "opacity-40"}>{rotulo}</span>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground text-center">Total de unidades: {totalUnidades}</p>
          </div>

          {modelo.precos.length > 0 && (
            <details className="group border-t border-border pt-5">
              <summary className="cursor-pointer list-none flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold">Tabela de preços<span className="transition-transform group-open:rotate-180">⌄</span></summary>
              <div className="divide-y divide-border mt-4">{modelo.precos.map(([quantidade, preco]) => <div key={quantidade} className="flex justify-between py-2 text-xs"><span className="text-muted-foreground">{quantidade}</span><span>{preco} / unidade</span></div>)}</div>
            </details>
          )}
        </aside>
      </div>
      <div className="mt-12"><VoltarPaginaAnterior /></div>
    </section>
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
  const swipe = useSwipe({
    onSwipeLeft: seguinte,
    onSwipeRight: anterior,
  });

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Galeria */}
        <div className="md:sticky md:top-32 space-y-2">
          <div
            className="relative w-full aspect-[4/5] bg-secondary ring-1 ring-black/5 overflow-hidden group touch-pan-y"
            {...(slides.length > 1 ? swipe : {})}
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

          <VoltarPaginaAnterior />
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
