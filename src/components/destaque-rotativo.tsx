import { Link } from "@tanstack/react-router";
import { categorias, modelos, type Modelo } from "@/lib/catalogo";

/**
 * Destaque fixo: um modelo por categoria, sem rotação.
 * Escolhe o primeiro modelo de cada categoria como representante.
 */
function representantes(): Modelo[] {
  return categorias
    .map((cat) => modelos.find((m) => m.categoria === cat.id))
    .filter((m): m is Modelo => Boolean(m));
}

function tituloCategoria(id: string): string {
  return categorias.find((c) => c.id === id)?.titulo ?? id;
}

// Cor de acento editorial por família (paleta extraída do logótipo).
const corCategoria: Record<string, string> = {
  tshirts: "oklch(0.62 0.18 28)",   // vermelho
  polos: "oklch(0.68 0.16 52)",     // laranja
  sweats: "oklch(0.6 0.15 245)",    // azul royal
  jaquetas: "oklch(0.62 0.12 200)", // azul-ciano
};

function corDe(id: string): string {
  return corCategoria[id] ?? "var(--color-accent)";
}

export function DestaqueRotativo() {
  const lista = representantes();
  // Offsets verticais para ritmo editorial (slots 1 e 3 descem).
  const offsets = ["", "lg:mt-14", "", "lg:mt-14"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-10 md:gap-y-12 items-start">
      {lista.map((m, slot) => {
        const imagem = m.lifestyle ?? m.imagem;
        return (
          <Link
            key={m.id}
            to="/modelo/$id"
            params={{ id: m.id }}
            className={`group block ${offsets[slot] ?? ""}`}
          >
            <div className="relative w-full aspect-[3/4] bg-secondary overflow-hidden ring-1 ring-black/5">
              <img
                src={imagem}
                alt={`Modelo ${m.nome}`}
                loading="lazy"
                width={800}
                height={1067}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 animate-fade-in"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-700" />
            </div>
            <div className="mt-4 sm:mt-5">
              <p
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-1 font-semibold"
                style={{ color: corDe(m.categoria) }}
              >
                {tituloCategoria(m.categoria)}
              </p>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl italic text-foreground leading-tight">
                {m.nome}
              </h3>
              <div
                className="mt-3 h-px w-6 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: corDe(m.categoria) }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
