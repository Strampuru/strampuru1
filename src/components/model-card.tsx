import { Link } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import type { Modelo } from "@/lib/catalogo";

export function ModelCard({ modelo }: { modelo: Modelo }) {
  const [ativa, setAtiva] = useState<number | null>(null);
  const pecas = modelo.pecas;
  const mostraPecas =
    Boolean(pecas && pecas.length > 1) &&
    !["manila", "singapura", "colombo"].includes(modelo.id);
  const coresBase =
    mostraPecas && (pecas![0]?.cores.length ?? 0) > modelo.cores.length
      ? pecas![0]!.cores
      : modelo.cores;
  const visiveis = coresBase.slice(0, 6);
  const extra = coresBase.length - visiveis.length;
  const corAtiva = ativa === null ? undefined : coresBase[ativa];
  // Com capa editorial, as peças só aparecem ao escolher uma cor; sem capa, sempre visíveis.
  const pecasVisiveis = mostraPecas && (ativa !== null || !modelo.lifestyle) ? pecas! : null;
  const imagensPecas = pecasVisiveis
    ? pecasVisiveis.map((p) => {
        const idx = Math.min(ativa ?? 0, Math.max(p.cores.length - 1, 0));
        return { src: p.cores[idx]?.imagem ?? p.imagem, nome: p.nome };
      })
    : null;


  const src = corAtiva?.imagem ?? modelo.lifestyle ?? modelo.imagem;
  const emUso = !corAtiva && Boolean(modelo.lifestyle) && !mostraPecas;

  const navegar = (e: MouseEvent, dir: 1 | -1) => {
    e.preventDefault();
    e.stopPropagation();
    const total = coresBase.length + 1; // +1 = imagem principal
    const atual = ativa === null ? 0 : ativa + 1;
    const proximo = (atual + dir + total) % total;
    setAtiva(proximo === 0 ? null : proximo - 1);
  };

  return (
    <Link
      to="/modelo/$id"
      params={{ id: modelo.id }}
      className="group block animate-fade-up"
    >
      <div className="relative overflow-hidden rounded-sm bg-card ring-1 ring-black/5 aspect-[3/4] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-500 group-hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-background" />
        {imagensPecas ? (
          <div
            className={`relative w-full h-full grid gap-1 p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              imagensPecas.length > 4
                ? "grid-cols-3"
                : imagensPecas.length > 2
                  ? "grid-cols-2"
                  : "grid-cols-2 items-center"
            }`}
          >
            {imagensPecas.map((peca, i) => (
              <div key={i} className="relative min-h-0 flex flex-col items-center justify-center">
                <img
                  src={peca.src}
                  alt={`${modelo.nome}${corAtiva ? ` — ${corAtiva.nome}` : ""} — ${peca.nome}`}
                  loading="lazy"
                  width={400}
                  height={533}
                  className="max-h-full w-full object-contain"
                />
                <span className="mt-0.5 max-w-full truncate text-[7px] uppercase tracking-[0.12em] text-muted-foreground">
                  {peca.nome}
                </span>
              </div>
            ))}
          </div>

        ) : (
          <img
            src={src}
            alt={`${modelo.nome}${corAtiva ? ` — ${corAtiva.nome}` : ""}`}
            loading="lazy"
            width={800}
            height={1067}
            className={`relative w-full h-full transition-transform ${
              emUso ? "object-cover" : "object-contain p-4"
            } duration-700 ease-out group-hover:scale-[1.07]`}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
          {modelo.subcategoria}
        </span>
        <span className="absolute right-3 bottom-3 rounded-full bg-foreground/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-background opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Ver modelo
        </span>
        {coresBase.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Cor anterior"
              onClick={(e) => navegar(e, -1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 size-8 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center text-foreground shadow-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Cor seguinte"
              onClick={(e) => navegar(e, 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 size-8 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center text-foreground shadow-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>
      <div className="mt-3 sm:mt-4 flex items-baseline justify-between gap-2">
        <span className="font-display text-base sm:text-lg italic leading-none">
          {modelo.nome}
        </span>
        <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
          {coresBase.length} cores
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2.5 sm:gap-2">
        {visiveis.map((c, i) => (
          <span
            key={c.nome}
            onMouseEnter={() => setAtiva(i)}
            onFocus={() => setAtiva(i)}
            onTouchStart={(e) => {
              e.preventDefault();
              setAtiva(i);
            }}
            className={`size-5 sm:size-4 rounded-full ring-1 transition-transform duration-200 ${
              ativa === i
                ? "ring-foreground/60 scale-125"
                : "ring-black/10 hover:scale-110"
            }`}
            style={{
              background:
                c.hexes.length > 1
                  ? `linear-gradient(180deg, ${c.hexes.join(", ")})`
                  : c.hex,
            }}
            title={c.nome}
          />
        ))}
        {extra > 0 && (
          <span className="text-[10px] text-muted-foreground">+{extra}</span>
        )}
      </div>
      <span className="mt-2 block h-3 text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground truncate">
        {corAtiva?.nome ??
          (emUso ? (
            <>
              <span className="sm:hidden">Toque nas cores</span>
              <span className="hidden sm:inline">Passe o rato nas cores</span>
            </>
          ) : (
            ""
          ))}
      </span>
    </Link>
  );
}
