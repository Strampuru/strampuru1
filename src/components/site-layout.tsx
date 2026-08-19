import { Link, Outlet } from "@tanstack/react-router";

const navLinks = [
  { to: "/categoria/$categoria", params: { categoria: "mulher" }, label: "Mulher" },
  { to: "/categoria/$categoria", params: { categoria: "homem" }, label: "Homem" },
  { to: "/categoria/$categoria", params: { categoria: "crianca" }, label: "Criança" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 font-sans flex flex-col">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display italic tracking-tighter"
          >
            Alma
          </Link>
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                params={l.params}
                className="hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Lisboa, PT
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="text-2xl font-display italic tracking-tighter">
              Alma
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest max-w-xs leading-loose">
              Estúdio de design e catálogo editorial focado na simplicidade e na
              qualidade material.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">
                Coleções
              </h4>
              <ul className="text-[11px] uppercase tracking-[0.15em] space-y-2 text-muted-foreground">
                <li>
                  <Link to="/categoria/$categoria" params={{ categoria: "mulher" }} className="hover:text-foreground transition-colors">
                    Mulher
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/$categoria" params={{ categoria: "homem" }} className="hover:text-foreground transition-colors">
                    Homem
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/$categoria" params={{ categoria: "crianca" }} className="hover:text-foreground transition-colors">
                    Criança
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">
                Contacto
              </h4>
              <ul className="text-[11px] uppercase tracking-[0.15em] space-y-2 text-muted-foreground">
                <li>Instagram</li>
                <li>Newsletter</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 text-[10px] uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Alma Editorial. Feito com intenção.
        </div>
      </footer>
    </div>
  );
}
