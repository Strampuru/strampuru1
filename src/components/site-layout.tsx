import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { categorias } from "@/lib/catalogo";
import logo from "@/assets/strampuru-logo.png.asset.json";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 font-sans flex flex-col">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 whitespace-nowrap">
            <img
              src={logo.url}
              alt="Logótipo Stram Puru"
              width={56}
              height={56}
              className="h-10 w-auto md:h-14"
            />
            <span className="sr-only">Strampuru</span>
          </Link>
          <a
            href="https://wa.me/351928253232"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
          >
            WhatsApp
          </a>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
            {categorias.map((c) => (
              <Link
                key={c.id}
                to="/categoria/$categoria"
                params={{ categoria: c.id }}
                className="hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {c.nome}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
            <Link
              to="/contactos"
              className="text-muted-foreground hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              Contactos
            </Link>
            <span className="text-muted-foreground">Catálogo</span>
          </div>
        </div>
        {/* Navegação móvel */}
        <div className="md:hidden border-t border-border overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-5 px-4 py-3 text-[10px] uppercase tracking-[0.2em]">
            {categorias.map((c) => (
              <Link
                key={c.id}
                to="/categoria/$categoria"
                params={{ categoria: c.id }}
                className="whitespace-nowrap py-1 hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {c.nome}
              </Link>
            ))}
            <Link
              to="/contactos"
              className="whitespace-nowrap py-1 text-muted-foreground hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              Contactos
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-14 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
          <div className="space-y-5 md:space-y-6">
            <img
              src={logo.url}
              alt="Logótipo Stram Puru"
              width={200}
              height={200}
              loading="lazy"
              className="h-16 md:h-24 w-auto"
            />
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest max-w-xs leading-loose">
              Catálogo de vestuário para personalização: t-shirts, polos, sweats
              e jaquetas.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/strampuru_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Strampuru"
                className="flex items-center justify-center h-10 w-10 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke-width="1.5" />
                  <circle cx="12" cy="12" r="4" stroke-width="1.5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/351928253232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Strampuru"
                className="flex items-center justify-center h-10 w-10 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.5 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.2.4.7 1.1 1.3 1.6.8.7 1.4.9 1.6 1 .2.1.4 0 .5-.1l.5-.6c.2-.2.3-.2.5-.1l1.7.8c.2.1.3.3.3.4 0 .6-.3 1.2-.7 1.4-.5.3-1.4.6-2.6.2-1.5-.5-2.9-1.4-4-2.8-.6-.8-1.2-1.8-1.3-2.6-.1-.8 0-1.4.2-1.8z"
                  />
                </svg>
              </a>
              <a
                href="mailto:Strampuru@gmail.com"
                aria-label="Email da Strampuru"
                className="flex items-center justify-center h-10 w-10 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke-width="1.5" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3.5 6.5l8.5 6 8.5-6"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-20 w-full md:w-auto">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">
                Produtos
              </h4>
              <ul className="text-[11px] uppercase tracking-[0.15em] space-y-2 text-muted-foreground">
                {categorias.map((c) => (
                  <li key={c.id}>
                    <Link
                      to="/categoria/$categoria"
                      params={{ categoria: c.id }}
                      className="hover:text-foreground transition-colors"
                    >
                      {c.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">
                Informação
              </h4>
              <ul className="text-[11px] uppercase tracking-[0.15em] space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    hash="sobre-nos"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactos"
                    className="hover:text-foreground transition-colors"
                  >
                    Contactos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-20 text-[10px] uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Strampuru. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
