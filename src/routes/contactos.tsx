import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { categorias } from "@/lib/catalogo";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Strampuru" },
      {
        name: "description",
        content:
          "Fala com a Strampuru: Instagram, telefone e email para pedidos de personalização de t-shirts, polos, sweats e jaquetas.",
      },
      { property: "og:title", content: "Contactos — Strampuru" },
      {
        property: "og:description",
        content:
          "Instagram, telefone e email para pedidos de personalização de vestuário Strampuru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  const contactos = [
    {
      etiqueta: "Instagram",
      valor: "@strampuru_",
      href: "https://www.instagram.com/strampuru_",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke-width="1.5" />
          <circle cx="12" cy="12" r="4" stroke-width="1.5" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      etiqueta: "Telefone",
      valor: "(+351) 928 253 232",
      href: "tel:+351928253232",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 5.5C3 4.12 4.12 3 5.5 3h1.6c.6 0 1.13.4 1.3.98l.9 3.05c.14.5-.03 1.04-.43 1.36l-1.2.96a14 14 0 006.6 6.6l.96-1.2c.32-.4.86-.57 1.36-.43l3.05.9c.58.17.98.7.98 1.3v1.6c0 1.38-1.12 2.5-2.5 2.5C10.6 21.5 3 13.9 3 5.5z"
          />
        </svg>
      ),
    },
    {
      etiqueta: "Email",
      valor: "Strampuru@gmail.com",
      href: "mailto:Strampuru@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke-width="1.5" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3.5 6.5l8.5 6 8.5-6"
          />
        </svg>
      ),
    },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,var(--color-secondary),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.72_0.13_38/0.10),transparent_45%),radial-gradient(circle_at_80%_70%,oklch(0.62_0.14_240/0.08),transparent_45%)]" />
        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center animate-fade-up">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 md:w-16 bg-accent/60" />
            <span className="text-[10px] tracking-[0.34em] text-accent font-semibold uppercase">
              Estamos por perto
            </span>
            <span className="h-px w-10 md:w-16 bg-accent/60" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            <span className="italic">Contactos</span>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed text-sm">
            Para encomendas, personalização ou esclarecimento de dúvidas sobre
            qualquer modelo do catálogo, fala connosco pelo canal que preferires.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {contactos.map((c) => (
            <a
              key={c.etiqueta}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-start gap-5 p-8 md:p-10 bg-card border border-border hover:border-accent/50 transition-colors duration-500"
            >
              <span className="text-accent">{c.icon}</span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {c.etiqueta}
                </p>
                <p className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300 break-all">
                  {c.valor}
                </p>
              </div>
              <span className="mt-auto h-px w-8 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="mt-20 md:mt-28 border-t border-border pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Explora o <span className="italic">catálogo</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
                Antes de contactares, descobre o modelo, as cores e os tamanhos
                que queres personalizar.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em]">
              {categorias.map((c) => (
                <a
                  key={c.id}
                  href={`/categoria/${c.id}`}
                  className="hover:text-accent transition-colors"
                >
                  {c.nome}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
