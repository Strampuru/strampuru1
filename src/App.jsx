import SiteLayout from "./components/ui/site-layout";
import DestaqueRotativo from "./components/ui/destaque-rotativo";
import CatalogoSidebar from "./components/ui/catalogo-sidebar";
import ModelCard from "./components/ui/model-card";
import PesquisaModelos from "./components/ui/pesquisa-modelos";

export default function App() {
  return (
    <SiteLayout>
      {/* Secção de destaque rotativo */}
      <DestaqueRotativo />

      {/* Barra de pesquisa */}
      <PesquisaModelos />

      {/* Sidebar do catálogo */}
      <CatalogoSidebar />

      {/* Exemplo de um modelo (podes repetir ou gerar dinamicamente) */}
      <div style={{ padding: "1rem" }}>
        <ModelCard />
      </div>
    </SiteLayout>
  );
}
