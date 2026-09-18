import SiteLayout from "./components/ui/site-layout";
import DestaqueRotativo from "./components/ui/destaque-rotativo";
import CatalogoSidebar from "./components/ui/catalogo-sidebar";
import ModelCard from "./components/ui/model-card";
import PesquisaModelos from "./components/ui/pesquisa-modelos";

export default function App() {
  return (
    <SiteLayout>
      <DestaqueRotativo />
      <PesquisaModelos />
      <CatalogoSidebar />

      {/* Aqui podes listar os teus modelos */}
      <div style={{ padding: "1rem" }}>
        <ModelCard />
      </div>
    </SiteLayout>
  );
}
