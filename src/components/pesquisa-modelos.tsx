import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { modelos } from "@/lib/catalogo";

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function PesquisaModelos() {
  const [aberta, setAberta] = useState(false);
  const [termo, setTermo] = useState("");
  const caixaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resultados = useMemo(() => {
    const q = normalizar(termo.trim());
    if (q.length < 2) return [];
    return modelos
      .filter(
        (m) =>
          normalizar(m.nome).includes(q) ||
          normalizar(m.referenciaNome).includes(q) ||
          normalizar(m.subcategoria).includes(q),
      )
      .slice(0, 8);
  }, [termo]);

  useEffect(() => {
    if (aberta) inputRef.current?.focus();
  }, [aberta]);

  useEffect(() => {
    function aoClicarFora(e: MouseEvent) {
      if (caixaRef.current && !caixaRef.current.contains(e.target as Node)) {
        setAberta(false);
        setTermo("");
      }
    }
    function aoEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAberta(false);
        setTermo("");
      }
    }
    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoEscape);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoEscape);
    };
  }, []);

  return (
    <div ref={caixaRef} className="relative flex items-center">
      {aberta ? (
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="search"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="Procurar modelo..."
            aria-label="Procurar modelo"
            className="w-40 sm:w-56 md:w-64 h-10 bg-transparent border-b border-border focus:border-accent outline-none text-sm tracking-wide placeholder:text-muted-foreground/60 placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em] transition-colors"
          />
          <button
            onClick={() => {
              setAberta(false);
              setTermo("");
            }}
            aria-label="Fechar pesquisa"
            className="flex items-center justify-center h-10 w-10 text-muted-foreground hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setAberta(true)}
          aria-label="Abrir pesquisa de modelos"
          className="flex items-center gap-2 min-h-11 text-muted-foreground hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" d="M16.5 16.5L21 21" />
          </svg>
          <span className="hidden lg:inline text-[11px] uppercase tracking-[0.25em]">
            Pesquisar
          </span>
        </button>
      )}

      {aberta && termo.trim().length >= 2 && (
        <div className="absolute right-0 top-full mt-3 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] overflow-y-auto bg-background border border-border shadow-lg z-50">
          {resultados.length === 0 ? (
            <p className="px-5 py-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Nenhum modelo encontrado
            </p>
          ) : (
            <ul>
              {resultados.map((m) => (
                <li key={m.id}>
                  <Link
                    to="/modelo/$id"
                    params={{ id: m.id }}
                    onClick={() => {
                      setAberta(false);
                      setTermo("");
                    }}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-secondary transition-colors border-b border-border/50 last:border-b-0"
                  >
                    <img
                      src={m.imagem}
                      alt={m.nome}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-12 w-12 object-cover bg-secondary shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{m.nome}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                        {m.subcategoria}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
