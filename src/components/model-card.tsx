import { Link } from "@tanstack/react-router";
import type { Modelo } from "@/lib/catalogo";

export function ModelCard({ modelo }: { modelo: Modelo }) {
  const visiveis = modelo.cores.slice(0, 6);
  const extra = modelo.cores.length - visiveis.length;

  return (
    <Link
      to="/modelo/$id"
      params={{ id: modelo.id }}
      className="group block animate-fade-up"
    >
      <div className="relative overflow-hidden bg-secondary ring-1 ring-black/5 aspect-[3/4]">
        <img
          src={modelo.imagem}
          alt={modelo.nome}
          loading="lazy"
          width={800}
          height={1067}
          className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-[13px] font-medium">{modelo.nome}</span>
        <span className="text-[11px] text-muted-foreground uppercase tracking-tighter">
          {modelo.subcategoria} · {modelo.cores.length} cores
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        {visiveis.map((c) => (
          <span
            key={c.nome}
            className="size-4 rounded-full ring-1 ring-black/10"
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
    </Link>
  );
}
