import catMulher from "@/assets/cat-mulher.jpg";
import catHomem from "@/assets/cat-homem.jpg";
import catCrianca from "@/assets/cat-crianca.jpg";
import mSobretudo from "@/assets/m-sobretudo.jpg";
import mCamisaSeda from "@/assets/m-camisa-seda.jpg";
import mVestidoLinho from "@/assets/m-vestido-linho.jpg";
import hBlazer from "@/assets/h-blazer.jpg";
import hGolaAlta from "@/assets/h-gola-alta.jpg";
import hCalcas from "@/assets/h-calcas.jpg";
import cLinho from "@/assets/c-linho.jpg";
import cMalha from "@/assets/c-malha.jpg";
import cCasaco from "@/assets/c-casaco.jpg";
import catBrindes from "@/assets/cat-brindes.jpg";
import bTote from "@/assets/b-tote.jpg";
import bEcharpe from "@/assets/b-echarpe.jpg";
import bCaderno from "@/assets/b-caderno.jpg";

export type CategoriaId = "mulher" | "homem" | "crianca" | "brindes";

export type Cor = {
  nome: string;
  hex: string;
};

export type Modelo = {
  id: string;
  nome: string;
  categoria: CategoriaId;
  subcategoria: string;
  descricao: string;
  composicao: string;
  referencia: string;
  imagem: string;
  cores: Cor[];
};

export type Categoria = {
  id: CategoriaId;
  nome: string;
  titulo: string;
  descricao: string;
  imagem: string;
  subcategorias: string[];
};

export const categorias: Categoria[] = [
  {
    id: "mulher",
    nome: "Mulher",
    titulo: "Coleção Feminina",
    descricao: "Silhuetas fluidas e texturas naturais para o quotidiano moderno.",
    imagem: catMulher,
    subcategorias: ["Casacos", "Camisas", "Vestidos"],
  },
  {
    id: "homem",
    nome: "Homem",
    titulo: "Coleção Masculina",
    descricao: "Estrutura e conforto em peças de corte intemporal.",
    imagem: catHomem,
    subcategorias: ["Alfaiataria", "Malhas", "Calças"],
  },
  {
    id: "crianca",
    nome: "Criança",
    titulo: "Linha Infantil",
    descricao: "Liberdade de movimento com materiais orgânicos.",
    imagem: catCrianca,
    subcategorias: ["Conjuntos", "Malhas", "Casacos"],
  },
  {
    id: "brindes",
    nome: "Brindes",
    titulo: "Objetos de Afeto",
    descricao: "Acessórios e mimos curados em materiais naturais para oferecer e guardar.",
    imagem: catBrindes,
    subcategorias: ["Acessórios", "Casa", "Papelaria"],
  },
];

export const modelos: Modelo[] = [
  {
    id: "sobretudo-la",
    nome: "Sobretudo em Lã de Alfaiataria",
    categoria: "mulher",
    subcategoria: "Casacos",
    descricao:
      "Peça de corte clássico com ombros estruturados e lapela larga. Confeccionado em mistura de lã virgem de origem sustentável. Interior totalmente forrado em viscose acetinada.",
    composicao: "80% Lã, 20% Poliamida",
    referencia: "#AL-M-001",
    imagem: mSobretudo,
    cores: [
      { nome: "Camel", hex: "#b08d57" },
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Creme", hex: "#e8e0d2" },
    ],
  },
  {
    id: "camisa-seda",
    nome: "Camisa em Seda",
    categoria: "mulher",
    subcategoria: "Camisas",
    descricao:
      "Camisa fluida em seda pura com corte relaxado e abotoamento discreto. Toque suave e brilho subtil, ideal de dia para a noite.",
    composicao: "100% Seda",
    referencia: "#AL-M-002",
    imagem: mCamisaSeda,
    cores: [
      { nome: "Off-White", hex: "#f1ece2" },
      { nome: "Areia", hex: "#cdbfa0" },
    ],
  },
  {
    id: "vestido-linho",
    nome: "Vestido Midi em Linho",
    categoria: "mulher",
    subcategoria: "Vestidos",
    descricao:
      "Vestido de corte midi com cintura marcada e pregas suaves. Linho lavado de caimento fluido, perfeito para meia estação.",
    composicao: "100% Linho",
    referencia: "#AL-M-003",
    imagem: mVestidoLinho,
    cores: [
      { nome: "Preto", hex: "#1a1a1a" },
      { nome: "Terracota", hex: "#a67c52" },
    ],
  },
  {
    id: "blazer-alfaiataria",
    nome: "Blazer de Alfaiataria",
    categoria: "homem",
    subcategoria: "Alfaiataria",
    descricao:
      "Blazer de abotoamento simples concebido para uma silhueta relaxada mas estruturada. Lã italiana regenerada com forro em cetim suave.",
    composicao: "100% Lã Virgem",
    referencia: "#AL-H-001",
    imagem: hBlazer,
    cores: [
      { nome: "Carvão", hex: "#3a3a3a" },
      { nome: "Azul Noite", hex: "#2a3450" },
    ],
  },
  {
    id: "gola-alta",
    nome: "Camisola Gola Alta",
    categoria: "homem",
    subcategoria: "Malhas",
    descricao:
      "Camisola de gola alta em malha fina de algodão merino. Toque quente e leve, com construção sem costuras laterais.",
    composicao: "100% Lã Merino",
    referencia: "#AL-H-002",
    imagem: hGolaAlta,
    cores: [
      { nome: "Marfim", hex: "#ece6d8" },
      { nome: "Cinza", hex: "#8a8a85" },
    ],
  },
  {
    id: "calcas-la",
    nome: "Calças de Lã",
    categoria: "homem",
    subcategoria: "Calças",
    descricao:
      "Calças de cintura alta com pinças e perna reta. Lã fria com caimento impecável, peça base da alfaiataria moderna.",
    composicao: "98% Lã, 2% Elastano",
    referencia: "#AL-H-003",
    imagem: hCalcas,
    cores: [
      { nome: "Cinza", hex: "#6b6b68" },
      { nome: "Preto", hex: "#1a1a1a" },
    ],
  },
  {
    id: "conjunto-linho",
    nome: "Conjunto em Linho",
    categoria: "crianca",
    subcategoria: "Conjuntos",
    descricao:
      "Conjunto de camisa e calção em linho lavado. Macio e respirável, pensado para os dias quentes de verão.",
    composicao: "100% Linho Orgânico",
    referencia: "#AL-C-001",
    imagem: cLinho,
    cores: [
      { nome: "Creme", hex: "#e8e0d2" },
      { nome: "Areia", hex: "#cdbfa0" },
    ],
  },
  {
    id: "camisola-malha",
    nome: "Camisola de Malha",
    categoria: "crianca",
    subcategoria: "Malhas",
    descricao:
      "Camisola em malha de algodão pêssego, elástica e confortável. Acabamento em ribana contrastante.",
    composicao: "95% Algodão, 5% Elastano",
    referencia: "#AL-C-002",
    imagem: cMalha,
    cores: [
      { nome: "Marfim", hex: "#ece6d8" },
      { nome: "Rosa Suave", hex: "#d8b8b0" },
    ],
  },
  {
    id: "casaco-algodao",
    nome: "Casaco de Algodão",
    categoria: "crianca",
    subcategoria: "Casacos",
    descricao:
      "Casaco acolchoado leve em algodão orgânico com capuz. Quente sem volume, fácil de vestir.",
    composicao: "100% Algodão Orgânico",
    referencia: "#AL-C-003",
    imagem: cCasaco,
    cores: [
      { nome: "Bege", hex: "#c9b894" },
      { nome: "Verde Musgo", hex: "#7c8568" },
    ],
  },
];

export function getCategoria(id: string): Categoria | undefined {
  return categorias.find((c) => c.id === id);
}

export function getModelosPorCategoria(categoria: CategoriaId): Modelo[] {
  return modelos.filter((m) => m.categoria === categoria);
}

export function getModelo(id: string): Modelo | undefined {
  return modelos.find((m) => m.id === id);
}
