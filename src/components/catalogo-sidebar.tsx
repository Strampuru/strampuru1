import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { categorias, getFamiliaPorSubcategoria } from "@/lib/catalogo";


/**
 * Aba retrátil lateral com todas as categorias e respetivas subcategorias.
 * Os itens são gerados a partir de `categorias` em src/lib/catalogo.ts —
 * basta acrescentar uma categoria (ou uma entrada em `subcategorias`) para
 * aparecer aqui automaticamente.
 */
export function CatalogoSidebar({
  aberta,
  onFechar,
}: {
  aberta: boolean;
  onFechar: () => void;
}) {
  const [expandida, setExpandida] = useState<string | null>(
    categorias[0]?.id ?? null,
  );

  useEffect(() => {
    if (!aberta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberta, onFechar]);

  return (
    <>
      {/* Fundo */}
      <div
        onClick={onFechar}
        aria-hidden={!aberta}
        className={`fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${
          aberta ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!aberta}
        className={`fixed left-0 top-0 z-[61] h-full w-[86vw] max-w-sm bg-background border-r border-border shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          aberta ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-border shrink-0">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Catálogo
          </span>
          <button
            onClick={onFechar}
            aria-label="Fechar menu de categorias"
            className="min-h-11 min-w-11 -mr-3 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          {categorias.map((c) => {
            const aberto = expandida === c.id;
            return (
              <div key={c.id} className="border-b border-border/60 last:border-0">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    to="/categoria/$categoria"
                    params={{ categoria: c.id }}
                    onClick={onFechar}
                    className="flex-1 min-w-0 py-4 font-display text-2xl hover:text-accent transition-colors"
                    activeProps={{ className: "text-accent" }}
                  >
                    {c.nome}
                  </Link>
                  {c.subcategorias.length > 0 && (
                    <button
                      onClick={() => setExpandida(aberto ? null : c.id)}
                      aria-label={`${aberto ? "Fechar" : "Abrir"} subcategorias de ${c.nome}`}
                      aria-expanded={aberto}
                      className="shrink-0 min-h-11 min-w-11 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 transition-transform duration-300 ${aberto ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                      >
                        <path strokeWidth="1.5" strokeLinecap="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                <div
                  className={`grid transition-all duration-300 ${
                    aberto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden pl-1 pb-4 space-y-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.subcategorias.map((sub) => {
                      const familia = getFamiliaPorSubcategoria(sub);
                      return (
                        <li key={sub}>
                          <Link
                            to="/categoria/$categoria"
                            params={{ categoria: c.id }}
                            search={{ sub }}
                            onClick={onFechar}
                            className="block py-2 hover:text-accent transition-colors"
                          >
                            {sub}
                          </Link>
                          {familia && familia.subcategorias.length > 0 && (
                            <ul className="pl-4 mt-1 space-y-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                              {familia.subcategorias.map((tipo) => (
                                <li key={tipo}>
                                  <Link
                                    to="/categoria/$categoria"
                                    params={{ categoria: c.id }}
                                    search={{ sub, tipo }}
                                    onClick={onFechar}
                                    className="block py-1.5 hover:text-accent transition-colors"
                                  >
                                    {tipo}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

              </div>
            );
          })}
        </nav>

        <div className="px-6 py-6 border-t border-border shrink-0 space-y-3 text-[11px] uppercase tracking-[0.2em]">
          <Link
            to="/contactos"
            onClick={onFechar}
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            Contactos
          </Link>
          <a
            href="https://wa.me/351928253232"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
