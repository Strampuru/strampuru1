import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { categorias } from "@/lib/catalogo";
import logo from "@/assets/strampuru-logo.png.asset.json";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 font-sans flex flex-col">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 whitespace-nowrap">
            <img
              src={logo.url}
              alt="Logótipo Stram Puru"
              width={44}
              height={44}
              className="h-9 w-auto md:h-11"
            />
            <span className="sr-only">Strampuru</span>
          </Link>
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
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
            Catálogo
          </div>
        </div>
        {/* Navegação móvel */}
        <div className="md:hidden border-t border-border overflow-x-auto">
          <div className="flex gap-6 px-6 py-3 text-[10px] uppercase tracking-[0.2em]">
            {categorias.map((c) => (
              <Link
                key={c.id}
                to="/categoria/$categoria"
                params={{ categoria: c.id }}
                className="whitespace-nowrap hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {c.nome}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <img
              src={logo.url}
              alt="Logótipo Stram Puru"
              width={140}
              height={140}
              loading="lazy"
              className="h-16 w-auto"
            />
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest max-w-xs leading-loose">
              Catálogo de vestuário para personalização: t-shirts, polos, sweats
              e jaquetas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-20">
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
                <li>Contactos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 text-[10px] uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Stram Puru. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
