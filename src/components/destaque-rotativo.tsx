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

export function DestaqueRotativo() {
  const lista = representantes();
  // Offsets verticais para ritmo editorial (slots 1 e 3 descem).
  const offsets = ["", "lg:mt-14", "", "lg:mt-14"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12 items-start">
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
