import { modelos } from "./src/lib/catalogo";
const patrol = modelos.find(m => m.id === "patrol");
if (!patrol) throw new Error("patrol not found");
const child = {
  ...patrol,
  id: "patrol-crianca",
  nome: "Polo PATROL",
  referenciaNome: "PATROL",
  categoria: "polos" as const,
  subcategoria: "Polos",
  genero: "crianca" as const,
  descricao: "Polo PATROL disponível em 25 cores. 100% Algodão (tamanhos de criança)",
  referencia: "#PAT-PAT-C",
  tamanhos: [
    ["Tamanho", "4", "6", "8", "10", "12", "14"],
    ["Comprimento", "50", "54", "58", "62", "66", "70"],
    ["Largura", "36", "38", "40", "42", "45", "48"]
  ],
  precos: [
    ["0–99 unidades", "10,00€"],
    ["100–499 unidades", "9,00€"],
    ["+499 unidades", "8,00€"]
  ]
};
console.log(JSON.stringify(child, null, 2));
