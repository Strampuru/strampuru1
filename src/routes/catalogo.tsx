import { createFileRoute, Link } from "@tanstack/react-router";
import { ModelCard } from "@/components/model-card";
import { SiteLayout } from "@/components/site-layout";
import { modelos } from "@/lib/catalogo";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo Completo — Strampuru" },
      {
        name: "description",
        content:
          "Todos os modelos disponíveis no catálogo Strampuru, incluindo homem, mulher, criança, conjuntos e brindes.",
      },
      { property: "og:title", content: "Catálogo Completo — Strampuru" },
      {
        property: "og:description",
        content: "Consulta todos os modelos disponíveis no catálogo Strampuru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoCompleto,
});

function CatalogoCompleto() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card py-10 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-6 flex gap-4 text-[10px] uppercase tracking-widest text-muted-foreground md:mb-8">
            <Link to="/" className="transition-colors hover:text-foreground">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground">Catálogo completo</span>
          </nav>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between sm:gap-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl">
              Todos os <span className="italic">modelos</span>
            </h1>
            <span className="shrink-0 whitespace-nowrap text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
              {modelos.length} Modelos
            </span>
          </div>
          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted-foreground sm:text-sm md:mt-6">
            Todos os modelos disponíveis, independentemente da categoria a que pertencem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:grid-cols-4">
          {modelos.map((modelo) => (
            <ModelCard key={modelo.id} modelo={modelo} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
