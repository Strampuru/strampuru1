import { Link } from "@tanstack/react-router";
import type { Modelo } from "@/lib/catalogo";

export function ModelCard({ modelo }: { modelo: Modelo }) {
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
          height={1200}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-[13px] font-medium">{modelo.nome}</span>
        <span className="text-[11px] text-muted-foreground uppercase tracking-tighter">
          {modelo.subcategoria}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        {modelo.cores.map((c) => (
          <span
            key={c.hex}
            className="size-4 rounded-full ring-1 ring-black/10"
            style={{ backgroundColor: c.hex }}
            title={c.nome}
          />
        ))}
      </div>
    </Link>
  );
}
