import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { categorias, modelos } from "@/lib/catalogo";

/** Número de modelos em destaque em simultâneo. */
const SLOTS = 4;
/** Intervalo entre trocas de imagem (ms). */
const INTERVALO = 3200;

function indiceAleatorio(excluir: number[]): number {
  let i = Math.floor(Math.random() * modelos.length);
  while (excluir.includes(i)) {
    i = Math.floor(Math.random() * modelos.length);
  }
  return i;
}

function tituloCategoria(id: string): string {
  return categorias.find((c) => c.id === id)?.titulo ?? id;
}

/**
 * Grelha de destaque em que cada posição vai passando imagens de modelos
 * aleatórios, com transição suave. Cada imagem liga à página do modelo.
 */
export function DestaqueRotativo() {
  // Começa fixo (SSR/hidratação) e aleatoriza no cliente.
  const [indices, setIndices] = useState<number[]>(() =>
    Array.from({ length: SLOTS }, (_, i) => i % modelos.length),
  );

  useEffect(() => {
    setIndices(Array.from({ length: SLOTS }, (_, i) => indiceAleatorio([i])));
    const timer = setInterval(() => {
      setIndices((atual) => {
        // Troca um slot aleatório de cada vez, garantindo modelo diferente.
        const slot = Math.floor(Math.random() * SLOTS);
        const proximo = [...atual];
        proximo[slot] = indiceAleatorio(atual);
        return proximo;
      });
    }, INTERVALO);
    return () => clearInterval(timer);
  }, []);

  // Offsets verticais para ritmo editorial (slots 1 e 3 descem).
  const offsets = ["", "lg:mt-14", "", "lg:mt-14"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12 items-start">
      {indices.map((idx, slot) => {
        const m = modelos[idx];
        if (!m) return null;
        const imagem = m.lifestyle ?? m.imagem;
        return (
          <Link
            key={slot}
            to="/modelo/$id"
            params={{ id: m.id }}
            className={`group block ${offsets[slot] ?? ""}`}
          >
            <div className="relative w-full aspect-[3/4] bg-secondary overflow-hidden ring-1 ring-black/5">
              <img
                key={`${m.id}-${idx}`}
                src={imagem}
                alt={`Modelo ${m.nome}`}
                loading="lazy"
                width={800}
                height={1067}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 animate-fade-in"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-700" />
            </div>
            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                {tituloCategoria(m.categoria)}
              </p>
              <h3 className="font-display text-xl md:text-2xl italic text-foreground leading-tight">
                {m.nome}
              </h3>
              <div className="mt-3 h-px w-6 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
