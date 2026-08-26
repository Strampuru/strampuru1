import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { modelos } from "@/lib/catalogo";

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
      {indices.map((idx, slot) => {
        const m = modelos[idx];
        return (
          <Link
            key={slot}
            to="/modelo/$id"
            params={{ id: m.id }}
            className="group block"
          >
            <div className="relative w-full aspect-[3/4] bg-secondary overflow-hidden rounded-sm ring-1 ring-black/5">
              {/* Pilha de imagens para crossfade */}
              {indices.map((i2, s2) =>
                s2 === slot ? (
                  <img
                    key={i2}
                    src={modelos[i2].lifestyle ?? modelos[i2].imagem}
                    alt={`Modelo ${modelos[i2].nome}`}
                    loading="lazy"
                    width={800}
                    height={1067}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                  />
                ) : null,
              )}
              <span className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur-sm px-3 py-2 truncate">
                {m.nome}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
