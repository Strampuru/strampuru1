// Catálogo STRAM PURU — dados dos produtos (gerado a partir do catálogo original).

export type FamiliaId = "tshirts" | "polos" | "sweats" | "jaquetas";
export type CategoriaId = FamiliaId | "homem" | "mulher" | "crianca" | "conjuntos" | "brindes";

export type Cor = {
  nome: string;
  hex: string;
  /** Hexes adicionais para cores combinadas (bicolor / tricolor). */
  hexes: string[];
  imagem: string;
};

export type Modelo = {
  id: string;
  nome: string;
  referenciaNome: string;
  categoria: CategoriaId;
  subcategoria: string;
  /** Género alvo. Omitido = unissexo. */
  genero?: "homem" | "mulher" | "crianca" | "unissexo";
  descricao: string;
  composicao: string;
  referencia: string;
  imagem: string;
  /** Foto de uma pessoa a usar o modelo (opcional). */
  lifestyle?: string;
  cores: Cor[];
  /** Primeira linha = cabeçalho de tamanhos; restantes = medidas em cm. */
  tamanhos: string[][];
  /** [quantidade, preço] */
  precos: [string, string][];
  caracteristicas: string[];
};

export type Categoria = {
  id: CategoriaId;
  nome: string;
  titulo: string;
  descricao: string;
  imagem: string;
  subcategorias: string[];
};

export const familias: Categoria[] = [
  {
    "id": "tshirts",
    "nome": "T-shirts",
    "titulo": "T-shirts",
    "descricao": "Malhas de algodão e técnicas, em corte clássico ou desportivo.",
    "imagem": "/__l5e/assets-v1/20ef2e18-6467-4bc7-a363-ba32dac9532f/racing-branco.webp",
    "subcategorias": [
      "Clássicas",
      "Desportivas"
    ]
  },
  {
    "id": "sweats",
    "nome": "Sweats",
    "titulo": "Sweats e Hoodies",
    "descricao": "Camisolas de moletão de gramagem alta, com e sem capuz.",
    "imagem": "/__l5e/assets-v1/66db4335-a27f-4f27-bb32-a94d941e6b79/arizona-branco.webp",
    "subcategorias": [
      "Com Capuz",
      "Sem Capuz"
    ]
  },
  {
    "id": "jaquetas",
    "nome": "Jaquetas",
    "titulo": "Jaquetas",
    "descricao": "Peças de exterior forradas, resistentes ao vento e à chuva.",
    "imagem": "/__l5e/assets-v1/0c0569d8-29f2-43d4-ae16-09e7749880cb/manitoba-branco.webp",
    "subcategorias": [
      "Com Capuz"
    ]
  }
];

// As famílias originais continuam acessíveis pelas ligações existentes.
export const categorias: Categoria[] = [
  { id: "homem", nome: "Homem", titulo: "Homem", descricao: "Vestuário de adulto para personalizar.", imagem: "", subcategorias: ["T-shirts", "Polos", "Sweats", "Jaquetas"] },
  { id: "mulher", nome: "Mulher", titulo: "Mulher", descricao: "Vestuário de adulto para personalizar.", imagem: "", subcategorias: ["T-shirts", "Polos", "Sweats", "Jaquetas"] },
  { id: "crianca", nome: "Criança", titulo: "Criança", descricao: "Modelos disponíveis em tamanhos de criança.", imagem: "", subcategorias: ["T-shirts", "Polos", "Sweats", "Babetes", "Bodies"] },
  { id: "conjuntos", nome: "Conjuntos", titulo: "Conjuntos", descricao: "Coleções com várias peças.", imagem: "", subcategorias: [] },
  { id: "brindes", nome: "Brindes", titulo: "Brindes", descricao: "Brindes para personalizar.", imagem: "", subcategorias: ["Coletes desportivos", "Sacos", "Caixas de plástico", "Malas", "Canecas", "Bases", "Jengas"] },
];

export function getSubcategoriaModelo(modelo: Modelo, categoria: CategoriaId): string {
  return ["homem", "mulher", "crianca"].includes(categoria)
    ? familias.find((f) => f.id === modelo.categoria)?.nome ?? modelo.subcategoria
    : modelo.subcategoria;
}

export function getFamiliaPorSubcategoria(nome: string | undefined): Categoria | undefined {
  return nome ? familias.find((f) => f.nome === nome) : undefined;
}


export const modelos: Modelo[] = [
  {
    "id": "racing",
    "nome": "T-shirt LISBOA",
    "referenciaNome": "LISBOA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "homem",
    "descricao": "T-shirt LISBOA disponível em 35 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#LIS-LIS",
    "imagem": "/__l5e/assets-v1/20ef2e18-6467-4bc7-a363-ba32dac9532f/racing-branco.webp",
    "lifestyle": "/lifestyle/racing.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
        "#eaedf1"
      ],
        "imagem": "/__l5e/assets-v1/20ef2e18-6467-4bc7-a363-ba32dac9532f/racing-branco.webp"
      },
      {
        "nome": "Bege 1",
        "hex": "#f0ebd8",
        "hexes": [
        "#f0ebd8"
      ],
        "imagem": "/__l5e/assets-v1/71e8bd2d-76e6-40cf-b511-2a37b7155046/racing-beje1.webp"
      },
      {
        "nome": "Bege 2",
        "hex": "#afac9d",
        "hexes": [
        "#afac9d"
      ],
        "imagem": "/__l5e/assets-v1/056a8b40-22cf-47a2-b8b2-6e75791700df/racing-beje2.webp"
      },
      {
        "nome": "Castanho 1",
        "hex": "#a18b67",
        "hexes": [
        "#a18b67"
      ],
        "imagem": "/__l5e/assets-v1/27bda301-3915-4f48-bc6e-11618848dca7/racing-castanho1.webp"
      },
      {
        "nome": "Castanho 2",
        "hex": "#6e594b",
        "hexes": [
        "#6e594b"
      ],
        "imagem": "/__l5e/assets-v1/fbd72b07-1c28-40c7-bc3b-f09dca4d8f5d/racing-castanho2.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#96bb54",
        "hexes": [
        "#96bb54"
      ],
        "imagem": "/__l5e/assets-v1/83b5cd67-70c2-47b1-bdc8-e102575dd54f/racing-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5ca144",
        "hexes": [
        "#5ca144"
      ],
        "imagem": "/__l5e/assets-v1/7718ca9b-d79a-4978-8864-e4bddba8a4d1/racing-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#197351",
        "hexes": [
        "#197351"
      ],
        "imagem": "/__l5e/assets-v1/29736327-b078-459f-bde7-0dca0bcb6264/racing-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#024a3b",
        "hexes": [
        "#024a3b"
      ],
        "imagem": "/__l5e/assets-v1/7a65d595-2b13-4ebe-b476-90f512afa73f/racing-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#4e675d",
        "hexes": [
        "#4e675d"
      ],
        "imagem": "/__l5e/assets-v1/8462a1d0-f442-4f61-bc5b-3edf8b929152/racing-verde5.webp"
      },
      {
        "nome": "Verde 6",
        "hex": "#53573f",
        "hexes": [
        "#53573f"
      ],
        "imagem": "/__l5e/assets-v1/1a539b59-798a-44ed-8835-6d4c1f274f1b/racing-verde6.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#f9e24d",
        "hexes": [
        "#f9e24d"
      ],
        "imagem": "/__l5e/assets-v1/be54829b-5af0-4dbe-87a1-f8d58a566716/racing-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#e9bd19",
        "hexes": [
        "#e9bd19"
      ],
        "imagem": "/__l5e/assets-v1/5aa2b115-fac8-42e8-b13b-c04c37200713/racing-amarelo2.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#df9f1d",
        "hexes": [
        "#df9f1d"
      ],
        "imagem": "/__l5e/assets-v1/e7e4dce1-58ad-4b70-b3aa-fb443282302d/racing-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c9541d",
        "hexes": [
        "#c9541d"
      ],
        "imagem": "/__l5e/assets-v1/1ae4a0ca-678c-4b89-b8ec-846f8f518614/racing-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#90162a",
        "hexes": [
        "#90162a"
      ],
        "imagem": "/__l5e/assets-v1/d1fd205e-7007-4906-9343-329e2cc2c699/racing-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#6d1034",
        "hexes": [
        "#6d1034"
      ],
        "imagem": "/__l5e/assets-v1/7c70e814-1130-4b3e-a90d-6edd9f94cb1a/racing-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#e9c8d8",
        "hexes": [
        "#e9c8d8"
      ],
        "imagem": "/__l5e/assets-v1/a110e02d-63cf-4c26-82bf-35f2e4c8e1a6/racing-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c74283",
        "hexes": [
        "#c74283"
      ],
        "imagem": "/__l5e/assets-v1/ac8cb663-28ba-4265-8220-42dd81ac8234/racing-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#7d7fb2",
        "hexes": [
        "#7d7fb2"
      ],
        "imagem": "/__l5e/assets-v1/e8cb57b9-c1ab-40c9-b18d-74f3983a7ad8/racing-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#53387a",
        "hexes": [
        "#53387a"
      ],
        "imagem": "/__l5e/assets-v1/770a765f-9f01-4dde-b4e8-a477fdf270e7/racing-roxo2.webp"
      },
      {
        "nome": "Roxo 3",
        "hex": "#351a53",
        "hexes": [
        "#351a53"
      ],
        "imagem": "/__l5e/assets-v1/30c38497-368a-4d45-a9ec-f293440f294d/racing-roxo3.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#9ab7dc",
        "hexes": [
        "#9ab7dc"
      ],
        "imagem": "/__l5e/assets-v1/64bb4944-3656-4968-878b-c3d9aa94a7b7/racing-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#0490cb",
        "hexes": [
        "#0490cb"
      ],
        "imagem": "/__l5e/assets-v1/2f654ff9-85f0-4ef4-9873-442bf04f1e37/racing-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#215d98",
        "hexes": [
        "#215d98"
      ],
        "imagem": "/__l5e/assets-v1/f75d7a93-9770-47d9-abf4-268c691ca063/racing-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#5475a8",
        "hexes": [
        "#5475a8"
      ],
        "imagem": "/__l5e/assets-v1/6a088b68-cf11-4d82-920b-3eb5bc9f20ad/racing-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#263962",
        "hexes": [
        "#263962"
      ],
        "imagem": "/__l5e/assets-v1/7ec0cf6a-2031-44f6-a00c-a01c849409a8/racing-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#144267",
        "hexes": [
        "#144267"
      ],
        "imagem": "/__l5e/assets-v1/58aef014-f456-4cb8-85fb-ed235fe04a24/racing-azul6.webp"
      },
      {
        "nome": "Azul 7",
        "hex": "#0a3755",
        "hexes": [
        "#0a3755"
      ],
        "imagem": "/__l5e/assets-v1/2f8bf91c-9e8f-4781-9284-947d8faf6f4d/racing-azul7.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#777c90",
        "hexes": [
        "#777c90"
      ],
        "imagem": "/__l5e/assets-v1/480b58e1-29d4-40af-912f-cdd0d783ac96/racing-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#e6e5eb",
        "hexes": [
        "#e6e5eb"
      ],
        "imagem": "/__l5e/assets-v1/b5d848a0-d2c5-4582-8ac0-c974ce3d7a38/racing-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#b5b3bf",
        "hexes": [
        "#b5b3bf"
      ],
        "imagem": "/__l5e/assets-v1/950f0976-489a-4500-8054-625a51ab6e62/racing-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#646c79",
        "hexes": [
        "#646c79"
      ],
        "imagem": "/__l5e/assets-v1/6b13b4b1-5ecd-45d2-8786-51e353416df0/racing-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#58575d",
        "hexes": [
        "#58575d"
      ],
        "imagem": "/__l5e/assets-v1/e89190f6-ee31-4fe4-b839-9965640c7953/racing-cinzento5.webp"
      },
      {
        "nome": "Preto",
        "hex": "#332e2a",
        "hexes": [
        "#332e2a"
      ],
        "imagem": "/__l5e/assets-v1/e67c8533-10c0-4bed-bd3a-5bce4db9f23f/racing-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "2",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "40",
        "45",
        "49",
        "53",
        "57",
        "61",
        "65",
        "67",
        "68",
        "72",
        "76",
        "80"
      ],
      [
        "Largura",
        "30",
        "32",
        "35",
        "38",
        "41",
        "44",
        "46",
        "48",
        "52",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "11,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Densidade: 160 g/m²"
    ]
  },
  {
    "id": "wave",
    "nome": "T-shirt MADRID",
    "referenciaNome": "MADRID",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "homem",
    "descricao": "T-shirt MADRID disponível em 6 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 190 g/m²",
    "referencia": "#MAD-MAD",
    "imagem": "/__l5e/assets-v1/09000929-4e2d-4c84-8d0c-adce6f713b35/wave-branco.webp",
    "lifestyle": "/lifestyle/wave.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf2",
        "hexes": [
        "#eaedf2"
      ],
        "imagem": "/__l5e/assets-v1/09000929-4e2d-4c84-8d0c-adce6f713b35/wave-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#a08b66",
        "hexes": [
        "#a08b66"
      ],
        "imagem": "/__l5e/assets-v1/c99f122a-66b4-4698-84ef-674e139937fb/wave-beje.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8d1626",
        "hexes": [
        "#8d1626"
      ],
        "imagem": "/__l5e/assets-v1/5291ae38-94ef-43aa-826c-dc2bcc34119f/wave-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#205e99",
        "hexes": [
        "#205e99"
      ],
        "imagem": "/__l5e/assets-v1/0918f264-a12d-475c-b903-8c323f5530e3/wave-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#0a3755",
        "hexes": [
        "#0a3755"
      ],
        "imagem": "/__l5e/assets-v1/4825e95f-5026-4b86-83bc-da4c4d5386c2/wave-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#332e2a",
        "hexes": [
        "#332e2a"
      ],
        "imagem": "/__l5e/assets-v1/f43ad84e-5603-4993-bd98-a6752ed56f04/wave-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "64",
        "68",
        "72",
        "76",
        "80",
        "84"
      ],
      [
        "Largura",
        "48",
        "52",
        "56",
        "59",
        "62",
        "65"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "12,00€"
      ],
      [
        "100–499 unidades",
        "10,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Densidade: 190 g/m²"
    ]
  },
  {
    "id": "nappa",
    "nome": "T-shirt ROMA",
    "referenciaNome": "ROMA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "descricao": "T-shirt ROMA disponível em 2 cores. 95% Algodão",
    "composicao": "95% Algodão, 5% Elastano, Densidade: 190 g/m²",
    "referencia": "#ROM-ROM",
    "imagem": "/__l5e/assets-v1/f504c71a-263d-4545-a48b-f4e9a2045f55/nappa-branco.webp",
    "lifestyle": "/lifestyle/nappa.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#e9eaee",
        "hexes": [
        "#e9eaee"
      ],
        "imagem": "/__l5e/assets-v1/f504c71a-263d-4545-a48b-f4e9a2045f55/nappa-branco.webp"
      },
      {
        "nome": "Preto",
        "hex": "#322d29",
        "hexes": [
        "#322d29"
      ],
        "imagem": "/__l5e/assets-v1/6fbbeaf2-e6e2-4990-ad40-3858f34bab1b/nappa-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "58",
        "61",
        "64",
        "67",
        "70",
        "73"
      ],
      [
        "Largura",
        "44",
        "46",
        "49",
        "51",
        "54",
        "56"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "12,00€"
      ],
      [
        "100–499 unidades",
        "10,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "95% Algodão",
      "5% Elastano",
      "Densidade: 190 g/m²"
    ]
  },
  {
    "id": "tirana",
    "nome": "T-shirt TIRANA",
    "referenciaNome": "TIRANA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "homem",
    "descricao": "T-shirt TIRANA — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#TIR-TIR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "67", "68", "72", "76", "80", "84"],
      ["Largura", "48", "52", "56", "59", "62", "65"]
    ],
    "precos": [
      ["0–99 unidades", "11,00€"],
      ["100–499 unidades", "9,50€"],
      ["+499 unidades", "8,75€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "viena",
    "nome": "T-shirt VIENA",
    "referenciaNome": "VIENA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "homem",
    "descricao": "T-shirt VIENA — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#VIE-VIE",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "67", "68", "72", "76", "80", "84"],
      ["Largura", "48", "52", "56", "59", "62", "65"]
    ],
    "precos": [
      ["0–99 unidades", "11,00€"],
      ["100–499 unidades", "9,50€"],
      ["+499 unidades", "8,75€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "paris",
    "nome": "T-shirt PARIS",
    "referenciaNome": "PARIS",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "mulher",
    "descricao": "T-shirt PARIS — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#PAR-PAR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "67", "68", "72", "76", "80", "84"],
      ["Largura", "48", "52", "56", "59", "62", "65"]
    ],
    "precos": [
      ["0–99 unidades", "11,00€"],
      ["100–499 unidades", "9,50€"],
      ["+499 unidades", "8,75€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "berlim",
    "nome": "T-shirt BERLIM",
    "referenciaNome": "BERLIM",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "mulher",
    "descricao": "T-shirt BERLIM — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#BER-BER",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "67", "68", "72", "76", "80", "84"],
      ["Largura", "48", "52", "56", "59", "62", "65"]
    ],
    "precos": [
      ["0–99 unidades", "11,00€"],
      ["100–499 unidades", "9,50€"],
      ["+499 unidades", "8,75€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "resistance",
    "nome": "T-shirt ZAGREB",
    "referenciaNome": "ZAGREB",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt ZAGREB disponível em 26 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-ZAG",
    "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [
        "#efeff3"
      ],
        "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [
        "#aba89a"
      ],
        "imagem": "/__l5e/assets-v1/c76e66ae-eac5-4a03-ad80-3ad767b153dc/resistance-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [
        "#543d34"
      ],
        "imagem": "/__l5e/assets-v1/b366a160-30dd-48f2-8721-a953356406f2/resistance-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [
        "#92b553"
      ],
        "imagem": "/__l5e/assets-v1/911351a2-97a0-4a63-a4ea-de77ffe6d32a/resistance-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [
        "#1a704e"
      ],
        "imagem": "/__l5e/assets-v1/3f63664e-f619-4f45-973d-5bb905ec0227/resistance-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [
        "#025443"
      ],
        "imagem": "/__l5e/assets-v1/070e1099-cd81-48da-a087-d944ac146d32/resistance-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [
        "#51553f"
      ],
        "imagem": "/__l5e/assets-v1/dd979047-fad3-4045-8730-9f70d1b1f099/resistance-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [
        "#9fba37"
      ],
        "imagem": "/__l5e/assets-v1/cbdc1ca0-b981-436d-9ac2-b6c53d1fea71/resistance-verde5.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [
        "#dcd71e"
      ],
        "imagem": "/__l5e/assets-v1/62c9d753-64b8-484b-809e-52fb0d0a93b7/resistance-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [
        "#f1db4c"
      ],
        "imagem": "/__l5e/assets-v1/e07f99a3-a5d7-4a05-9427-55150fc0877e/resistance-amarelo2.webp"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [
        "#f1b803"
      ],
        "imagem": "/__l5e/assets-v1/c9ed2f80-dd77-4028-baf7-06a5a5a49207/resistance-amarelo3.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [
        "#c4521d"
      ],
        "imagem": "/__l5e/assets-v1/a72bbdf4-d11c-45ba-9b70-62e809aab8cf/resistance-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c35923",
        "hexes": [
        "#c35923"
      ],
        "imagem": "/__l5e/assets-v1/6cc8b03b-6764-4a69-9b04-e7c6ae8c7449/resistance-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [
        "#8b1727"
      ],
        "imagem": "/__l5e/assets-v1/983a6613-81cf-495a-b0bb-797368c2f71c/resistance-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [
        "#eec3d4"
      ],
        "imagem": "/__l5e/assets-v1/bf1114b9-d7e6-4f78-97b4-2fbee0c1f5d6/resistance-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [
        "#c0437f"
      ],
        "imagem": "/__l5e/assets-v1/624c3978-e8e3-4147-86d5-7e6c365c88d0/resistance-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [
        "#c46097"
      ],
        "imagem": "/__l5e/assets-v1/cc4cb164-72f4-4195-b8a8-4f2c686a9319/resistance-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [
        "#503677"
      ],
        "imagem": "/__l5e/assets-v1/4b61784e-cf5a-4419-9834-6bbb9b008a85/resistance-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [
        "#272863"
      ],
        "imagem": "/__l5e/assets-v1/4c2abc52-2185-42d1-9f61-6e2cd2325e78/resistance-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [
        "#7ca4d1"
      ],
        "imagem": "/__l5e/assets-v1/e82bcc73-2ac7-4193-a577-574e1750da17/resistance-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [
        "#047db7"
      ],
        "imagem": "/__l5e/assets-v1/33d78303-da7e-400a-a8c6-3c5615995e78/resistance-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [
        "#205c95"
      ],
        "imagem": "/__l5e/assets-v1/e7c369e0-92f8-4394-8c5c-593250c97fe7/resistance-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [
        "#11324f"
      ],
        "imagem": "/__l5e/assets-v1/9fdc8544-55e2-4aed-99f5-3c7bca63f435/resistance-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [
        "#616976"
      ],
        "imagem": "/__l5e/assets-v1/f45d06ac-9d86-47fd-842a-fe17de3ee713/resistance-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#525159",
        "hexes": [
        "#525159"
      ],
        "imagem": "/__l5e/assets-v1/4f3180f6-f7df-4ca3-8698-7c578b38299c/resistance-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [
        "#342f2b"
      ],
        "imagem": "/__l5e/assets-v1/f3843ddd-f4d7-4050-addd-96c630da6fe8/resistance-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "50",
        "55",
        "60",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "37",
        "41",
        "45",
        "48",
        "51",
        "54",
        "57",
        "60",
        "63"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "rockspeed",
    "nome": "T-shirt COPENHAGA",
    "referenciaNome": "COPENHAGA",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt COPENHAGA disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#COP-COP",
    "imagem": "/__l5e/assets-v1/5b3ae55f-c0c5-4b00-8e47-26fa9bf62195/rockspeed-cinzento.webp",
    "lifestyle": "/lifestyle/rockspeed.jpg",
    "cores": [
      {
        "nome": "Cinzento",
        "hex": "#eaeaea",
        "hexes": [
        "#eaeaea",
        "#82868c"
      ],
        "imagem": "/__l5e/assets-v1/5b3ae55f-c0c5-4b00-8e47-26fa9bf62195/rockspeed-cinzento.webp"
      },
      {
        "nome": "Verde",
        "hex": "#97bc53",
        "hexes": [
        "#97bc53",
        "#639843"
      ],
        "imagem": "/__l5e/assets-v1/35f275cb-8956-45ec-a967-e8ea374a09ac/rockspeed-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#e2de1e",
        "hexes": [
        "#e2de1e",
        "#ab8c1e"
      ],
        "imagem": "/__l5e/assets-v1/ae4bcb4f-54f2-40a2-be88-ce57a7d4c76c/rockspeed-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#db9ab9",
        "hexes": [
        "#db9ab9",
        "#a76684"
      ],
        "imagem": "/__l5e/assets-v1/129bbc87-2827-4c01-87b6-4772a42144fc/rockspeed-rosa.webp"
      },
      {
        "nome": "Azul",
        "hex": "#0291cc",
        "hexes": [
        "#0291cc",
        "#196998"
      ],
        "imagem": "/__l5e/assets-v1/b5730bb0-eec7-49b8-8324-4b038b095899/rockspeed-azul.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "69",
        "72",
        "75",
        "78",
        "82"
      ],
      [
        "Largura",
        "49",
        "52",
        "55",
        "58",
        "61"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "brickplus",
    "nome": "T-shirt BRATISLAVA",
    "referenciaNome": "BRATISLAVA",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt BRATISLAVA disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#BRA-BRA",
    "imagem": "/__l5e/assets-v1/7bddb081-68f1-4cf7-9dbb-cef43d014a43/brickplus-verde.webp",
    "lifestyle": "/lifestyle/brickplus.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f0f2f2",
        "hexes": [
        "#f0f2f2",
        "#aebd8a"
      ],
        "imagem": "/__l5e/assets-v1/7bddb081-68f1-4cf7-9dbb-cef43d014a43/brickplus-verde.webp"
      },
      {
        "nome": "Amarelo",
        "hex": "#f0f1f2",
        "hexes": [
        "#f0f1f2",
        "#d9d66a"
      ],
        "imagem": "/__l5e/assets-v1/40c0f730-feae-4176-ba5f-a4f0408d888f/brickplus-amarelo.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#f0f1f2",
        "hexes": [
        "#f0f1f2",
        "#b49378"
      ],
        "imagem": "/__l5e/assets-v1/8cc4af4f-51bf-42d4-aac2-3e5d949d1d61/brickplus-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#f0f1f2",
        "hexes": [
        "#f0f1f2",
        "#b694a2"
      ],
        "imagem": "/__l5e/assets-v1/944fc5e8-1a49-4afd-8caa-714e7ad1426d/brickplus-rosa.webp"
      },
      {
        "nome": "Preto",
        "hex": "#f0f2f2",
        "hexes": [
        "#f0f2f2",
        "#868583"
      ],
        "imagem": "/__l5e/assets-v1/d0d3da1d-feb8-4217-8dbe-fb057071cd26/brickplus-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "50",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "leopard",
    "nome": "T-shirt HELSÍNQUIA",
    "referenciaNome": "HELSÍNQUIA",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt HELSÍNQUIA disponível em 4 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#HEL-HEL",
    "imagem": "/__l5e/assets-v1/458eef55-1728-447a-8030-707750084547/leopard-verde.webp",
    "lifestyle": "/lifestyle/leopard.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f1f1f1",
        "hexes": [
        "#f1f1f1",
        "#97ab70"
      ],
        "imagem": "/__l5e/assets-v1/458eef55-1728-447a-8030-707750084547/leopard-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#f1f1f1",
        "hexes": [
        "#f1f1f1",
        "#84454b"
      ],
        "imagem": "/__l5e/assets-v1/975d969d-f9ce-44a1-a709-c8e70f2ef897/leopard-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#f1f1f1",
        "hexes": [
        "#f1f1f1",
        "#516e8b"
      ],
        "imagem": "/__l5e/assets-v1/9c3d7397-8762-4cae-a08e-6150fc9b1bb8/leopard-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#f1f1f1",
        "hexes": [
        "#f1f1f1",
        "#514e4b"
      ],
        "imagem": "/__l5e/assets-v1/ad168f58-1d3d-48d1-9ba2-ade7ea56d8f7/leopard-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "48",
        "54",
        "62",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "35",
        "40",
        "46",
        "49",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "maurice",
    "nome": "T-shirt MOSCOVO",
    "referenciaNome": "MOSCOVO",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt MOSCOVO disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#DUB-DUB",
    "imagem": "/__l5e/assets-v1/a946776f-b459-40d2-946b-b756be7e7608/maurice-verde.webp",
    "lifestyle": "/lifestyle/maurice.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#a2c15c",
        "hexes": [
        "#a2c15c",
        "#8db650",
        "#33382c"
      ],
        "imagem": "/__l5e/assets-v1/a946776f-b459-40d2-946b-b756be7e7608/maurice-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#c85b2a",
        "hexes": [
        "#c85b2a",
        "#c54f20",
        "#382e28"
      ],
        "imagem": "/__l5e/assets-v1/0414a116-d100-49a7-8b2b-a99b73035fda/maurice-laranja.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8d2429",
        "hexes": [
        "#8d2429",
        "#332d29",
        "#c5b5b4"
      ],
        "imagem": "/__l5e/assets-v1/81f7729a-5316-48b4-9017-e7aaaed0a89a/maurice-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#275d98",
        "hexes": [
        "#275d98",
        "#406b9f",
        "#312e2c"
      ],
        "imagem": "/__l5e/assets-v1/710e89f3-082a-448d-96fb-d99bc1556b96/maurice-azul.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#545359",
        "hexes": [
        "#545359",
        "#5c5d62",
        "#302d29"
      ],
        "imagem": "/__l5e/assets-v1/cfc12358-35d8-4e3e-bed4-bde686407172/maurice-cinzento.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "48",
        "54",
        "62",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "35",
        "41",
        "46",
        "50",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "dacita",
    "nome": "T-shirt BUDAPESTE",
    "referenciaNome": "BUDAPESTE",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt BUDAPESTE disponível em 3 cores. 23% Poliéster",
    "composicao": "23% Poliéster, 77% Poliamida, Densidade: 180 g/m²",
    "referencia": "#BUD-BUD",
    "imagem": "/__l5e/assets-v1/8456277d-91a9-46b8-81c1-d06cba3ff602/dacita-azul.webp",
    "lifestyle": "/lifestyle/dacita.jpg",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#043a5f",
        "hexes": [
        "#043a5f",
        "#051d36"
      ],
        "imagem": "/__l5e/assets-v1/8456277d-91a9-46b8-81c1-d06cba3ff602/dacita-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#464b52",
        "hexes": [
        "#464b52",
        "#626a76"
      ],
        "imagem": "/__l5e/assets-v1/4386bd99-c41f-4985-b38f-6ea4d35dd4d0/dacita-preto.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#2c2820",
        "hexes": [
        "#2c2820",
        "#383839"
      ],
        "imagem": "/__l5e/assets-v1/9c5d5366-1319-4a07-b6af-64b7bdecfbe3/dacita-cinzento.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "50",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "14,00€"
      ],
      [
        "100–499 unidades",
        "13,50€"
      ],
      [
        "+499 unidades",
        "12,25€"
      ]
    ],
    "caracteristicas": [
      "23% Poliéster",
      "77% Poliamida",
      "Densidade: 180 g/m²"
    ]
  },
  {
    "id": "moscow",
    "nome": "T-shirt MELODIAS",
    "referenciaNome": "MELODIAS",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "homem",
    "descricao": "T-shirt MELODIAS — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster",
    "referencia": "#MEL-MEL",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL"],
      ["Comprimento", "66", "69", "72", "75", "78"],
      ["Largura", "50", "53", "56", "59", "62"]
    ],
    "precos": [
      ["0–99 unidades", "14,00€"],
      ["100–499 unidades", "13,50€"],
      ["+499 unidades", "12,25€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "patrol",
    "nome": "Polo BOGOTÁ",
    "referenciaNome": "BOGOTÁ",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "unissexo",
    "descricao": "Polo BOGOTÁ disponível em 25 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 220 g/m²",
    "referencia": "#BOG-BOG",
    "imagem": "/__l5e/assets-v1/9935d49d-15ea-4911-bc6b-412fe3104ea9/patrol-branco.webp",
    "lifestyle": "/lifestyle/patrol.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff1",
        "hexes": [
        "#efeff1"
      ],
        "imagem": "/__l5e/assets-v1/9935d49d-15ea-4911-bc6b-412fe3104ea9/patrol-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#aba899",
        "hexes": [
        "#aba899"
      ],
        "imagem": "/__l5e/assets-v1/8946251c-1c0f-4d7c-8f64-85ed1aecc846/patrol-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#6a5749",
        "hexes": [
        "#6a5749"
      ],
        "imagem": "/__l5e/assets-v1/2e6c6584-fad5-418d-9ad9-9a1184c578da/patrol-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#b3bb48",
        "hexes": [
        "#b3bb48"
      ],
        "imagem": "/__l5e/assets-v1/c564f4d5-d1fa-4bcc-9c9e-01f9342019ea/patrol-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#3b9189",
        "hexes": [
        "#3b9189"
      ],
        "imagem": "/__l5e/assets-v1/4e9d70bc-15de-4e84-a65e-3ffa2d2d1097/patrol-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#176d4c",
        "hexes": [
        "#176d4c"
      ],
        "imagem": "/__l5e/assets-v1/7f229d3f-064b-4a2f-b12e-e83abc7f5d6b/patrol-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#015243",
        "hexes": [
        "#015243"
      ],
        "imagem": "/__l5e/assets-v1/ed2e005e-a6db-4344-9ebc-2a7be2605650/patrol-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#f1da4c",
        "hexes": [
        "#f1da4c"
      ],
        "imagem": "/__l5e/assets-v1/11cfb278-7850-4f55-99e0-99e22198bbfe/patrol-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#e5b917",
        "hexes": [
        "#e5b917"
      ],
        "imagem": "/__l5e/assets-v1/00ed4147-a922-4a3d-a92d-c84d1c2ec4d2/patrol-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#c4531c",
        "hexes": [
        "#c4531c"
      ],
        "imagem": "/__l5e/assets-v1/4f7e23b4-558f-4936-9a87-5bab3cad9374/patrol-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#8a1525",
        "hexes": [
        "#8a1525"
      ],
        "imagem": "/__l5e/assets-v1/954dd333-aaba-459b-8586-7a3acd774234/patrol-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#680c30",
        "hexes": [
        "#680c30"
      ],
        "imagem": "/__l5e/assets-v1/fc95c5c7-e3e5-4c95-b05e-0aaa24554b7b/patrol-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#c34480",
        "hexes": [
        "#c34480"
      ],
        "imagem": "/__l5e/assets-v1/6f89d212-fa6a-4e50-a077-32d938b62b66/patrol-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#331850",
        "hexes": [
        "#331850"
      ],
        "imagem": "/__l5e/assets-v1/6c762029-eef2-40ca-a786-25b4e9ce7cd9/patrol-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#94b1d5",
        "hexes": [
        "#94b1d5"
      ],
        "imagem": "/__l5e/assets-v1/d2b1383b-866d-49f8-b063-806d864335bd/patrol-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1e5a93",
        "hexes": [
        "#1e5a93"
      ],
        "imagem": "/__l5e/assets-v1/e1ffb658-911b-48ee-a715-dc4ce8532e04/patrol-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#5374a4",
        "hexes": [
        "#5374a4"
      ],
        "imagem": "/__l5e/assets-v1/c4bb9921-dfc4-4d40-8a78-dd365cc81a43/patrol-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#184c5d",
        "hexes": [
        "#184c5d"
      ],
        "imagem": "/__l5e/assets-v1/540f98a2-be87-407e-b5e1-f21dab7eda60/patrol-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#26375f",
        "hexes": [
        "#26375f"
      ],
        "imagem": "/__l5e/assets-v1/ac2ba0b6-8a92-43b9-aeaf-5cc0037329af/patrol-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#073553",
        "hexes": [
        "#073553"
      ],
        "imagem": "/__l5e/assets-v1/2d5916c9-e44c-403f-83f1-d739af1dd6b2/patrol-azul6.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#e4e5eb",
        "hexes": [
        "#e4e5eb"
      ],
        "imagem": "/__l5e/assets-v1/2a94bb8d-0814-4ebd-adab-fb2538e5cc93/patrol-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#aeacb9",
        "hexes": [
        "#aeacb9"
      ],
        "imagem": "/__l5e/assets-v1/1a19a936-51f0-4f6c-98ca-f834a4985d04/patrol-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#646a78",
        "hexes": [
        "#646a78"
      ],
        "imagem": "/__l5e/assets-v1/87a65c46-e649-430c-8007-2f91f6faabca/patrol-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#55545a",
        "hexes": [
        "#55545a"
      ],
        "imagem": "/__l5e/assets-v1/e5c4140a-e2bd-48fd-9a18-adfb2d0c271d/patrol-cinzento4.webp"
      },
      {
        "nome": "Preto",
        "hex": "#312c28",
        "hexes": [
        "#312c28"
      ],
        "imagem": "/__l5e/assets-v1/4248e1c1-f9e0-4984-aef2-b2df5a2e0a3f/patrol-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "2",
        "3",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "41",
        "46",
        "51",
        "55",
        "60",
        "65",
        "69",
        "73",
        "77",
        "81",
        "84"
      ],
      [
        "Largura",
        "33",
        "36",
        "39",
        "42",
        "45",
        "48",
        "52",
        "56",
        "59",
        "62",
        "66"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "15,00€"
      ],
      [
        "50–249 unidades",
        "14,00€"
      ],
      [
        "+249 unidades",
        "12,50€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Densidade: 220 g/m²"
    ]
  },
  {
    "id": "kentucky",
    "nome": "Polo BRASILIA",
    "referenciaNome": "BRASILIA",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "unissexo",
    "descricao": "Polo BRASILIA disponível em 9 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#BRA-BRA",
    "imagem": "/__l5e/assets-v1/4b207e39-c231-4545-b5d1-45ff824a1af7/kentuky-branco.webp",
    "lifestyle": "/lifestyle/kentucky.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ebecf0",
        "hexes": [
        "#ebecf0"
      ],
        "imagem": "/__l5e/assets-v1/4b207e39-c231-4545-b5d1-45ff824a1af7/kentuky-branco.webp"
      },
      {
        "nome": "Verde",
        "hex": "#8eb250",
        "hexes": [
        "#8eb250"
      ],
        "imagem": "/__l5e/assets-v1/319b157e-f479-40a9-8579-f165ecf2a182/kentuky-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#c04e1b",
        "hexes": [
        "#c04e1b"
      ],
        "imagem": "/__l5e/assets-v1/8d06cb9b-75d8-4dea-9a29-280655578f5b/kentuky-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#871723",
        "hexes": [
        "#871723"
      ],
        "imagem": "/__l5e/assets-v1/76ae6bc7-c2e8-480e-a8de-e1ca58918a61/kentuky-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#670b30",
        "hexes": [
        "#670b30"
      ],
        "imagem": "/__l5e/assets-v1/f9c493cb-efce-4811-90aa-1f5e2cf0ae2b/kentuky-vermelho2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#0287be",
        "hexes": [
        "#0287be"
      ],
        "imagem": "/__l5e/assets-v1/8b4884ae-550f-4121-b85a-07de6c670ad4/kentuky-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1e5890",
        "hexes": [
        "#1e5890"
      ],
        "imagem": "/__l5e/assets-v1/ae7dd1f0-b7ec-42ba-9b94-0430dcd692fb/kentuky-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#083350",
        "hexes": [
        "#083350"
      ],
        "imagem": "/__l5e/assets-v1/e387917a-abe5-406d-9c16-0faf1e0ab3b6/kentuky-azul3.webp"
      },
      {
        "nome": "Preto",
        "hex": "#302b27",
        "hexes": [
        "#302b27"
      ],
        "imagem": "/__l5e/assets-v1/18087d8f-1d5f-4615-bbc6-11ed1299b9aa/kentuky-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "69",
        "72",
        "75",
        "78",
        "81",
        "84"
      ],
      [
        "Largura",
        "51",
        "54",
        "57",
        "60",
        "63",
        "66"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "12,00€"
      ],
      [
        "50–249 unidades",
        "11,00€"
      ],
      [
        "+249 unidades",
        "9,50€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 170 g/m²"
    ]
  },
  {
    "id": "sagano",
    "nome": "Polo BUENOS AIRES",
    "referenciaNome": "BUENOS AIRES",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "homem",
    "descricao": "Polo BUENOS AIRES disponível em 4 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#BUE-BUE",
    "imagem": "/__l5e/assets-v1/0c57f1e1-019d-4025-9292-e0b669ee0631/sagano-verde.webp",
    "lifestyle": "/lifestyle/sagano.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ebebed",
        "hexes": [
        "#ebebed",
        "#9cadad"
      ],
        "imagem": "/__l5e/assets-v1/0c57f1e1-019d-4025-9292-e0b669ee0631/sagano-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#f0f0f1",
        "hexes": [
        "#f0f0f1",
        "#b3a3a6"
      ],
        "imagem": "/__l5e/assets-v1/a65e6cf2-15b8-4ffd-813f-e958c0a2709e/sagano-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#f0f0f1",
        "hexes": [
        "#f0f0f1",
        "#b0b5bb"
      ],
        "imagem": "/__l5e/assets-v1/197f7571-f5a4-4401-ad61-99049fe27677/sagano-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ebebed",
        "hexes": [
        "#ebebed",
        "#a7a5a4"
      ],
        "imagem": "/__l5e/assets-v1/8820b73e-cebe-470a-b5d8-db5b3ee72b49/sagano-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "51",
        "54",
        "57",
        "60",
        "63"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "12,00€"
      ],
      [
        "50–249 unidades",
        "11,00€"
      ],
      [
        "+249 unidades",
        "9,50€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 170 g/m²"
    ]
  },
  {
    "id": "strategy",
    "nome": "Polo SANTIAGO",
    "referenciaNome": "SANTIAGO",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "homem",
    "descricao": "Polo SANTIAGO disponível em 6 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#STR-SNT",
    "imagem": "/__l5e/assets-v1/26e95779-b082-4b12-abb9-f6143d564c4d/strategy-vermelhov1.webp",
    "lifestyle": "/lifestyle/strategy.jpg",
    "cores": [
      {
        "nome": "Vermelhov 1",
        "hex": "#ebebeb",
        "hexes": [
        "#ebebeb",
        "#883841"
      ],
        "imagem": "/__l5e/assets-v1/26e95779-b082-4b12-abb9-f6143d564c4d/strategy-vermelhov1.webp"
      },
      {
        "nome": "Azulv 1",
        "hex": "#ebebeb",
        "hexes": [
        "#ebebeb",
        "#4d6f91"
      ],
        "imagem": "/__l5e/assets-v1/dd5806be-db18-489b-8eec-ebee872df08b/strategy-azulv1.webp"
      },
      {
        "nome": "Pretov 1",
        "hex": "#ebebeb",
        "hexes": [
        "#ebebeb",
        "#494542"
      ],
        "imagem": "/__l5e/assets-v1/49595174-96cb-404d-968f-b9280d7becc9/strategy-pretov1.webp"
      },
      {
        "nome": "Vermelhov 2",
        "hex": "#8d192b",
        "hexes": [
        "#8d192b",
        "#eaebeb"
      ],
        "imagem": "/__l5e/assets-v1/6a013d02-5b84-49ee-b01b-868723193abf/strategy-vermelhov2.webp"
      },
      {
        "nome": "Azulv 2",
        "hex": "#1f6098",
        "hexes": [
        "#1f6098",
        "#e7e6e6"
      ],
        "imagem": "/__l5e/assets-v1/ec1cac99-86e8-409c-b235-4d38d89f2f7b/strategy-azulv2.webp"
      },
      {
        "nome": "Pretov 2",
        "hex": "#35302c",
        "hexes": [
        "#35302c",
        "#e5e4e4"
      ],
        "imagem": "/__l5e/assets-v1/652debb7-72c9-4d10-82fa-927630070d46/strategy-pretov2.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "51",
        "54",
        "57",
        "60",
        "63"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "12,00€"
      ],
      [
        "50–249 unidades",
        "11,00€"
      ],
      [
        "+249 unidades",
        "9,50€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 170 g/m²"
    ]
  },
  {
    "id": "caracas",
    "nome": "Polo CARACAS",
    "referenciaNome": "CARACAS",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "homem",
    "descricao": "Polo CARACAS — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster",
    "referencia": "#CAR-CAR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "69", "71", "74", "77", "80", "83"],
      ["Largura", "50", "53", "56", "59", "62", "65"]
    ],
    "precos": [
      ["0–49 unidades", "12,00€"],
      ["50–249 unidades", "11,00€"],
      ["+249 unidades", "9,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "sucre",
    "nome": "Polo SUCRE",
    "referenciaNome": "SUCRE",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "mulher",
    "descricao": "Polo SUCRE — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster",
    "referencia": "#SUC-SUC",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "XS", "S", "M", "L", "XL", "XXL"],
      ["Comprimento", "62", "64", "66", "68", "70", "72"],
      ["Largura", "44", "47", "50", "53", "56", "59"]
    ],
    "precos": [
      ["0–49 unidades", "12,00€"],
      ["50–249 unidades", "11,00€"],
      ["+249 unidades", "9,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "patrol-crianca",
    "nome": "Polo BOGOTÁ",
    "referenciaNome": "BOGOTÁ",
    "categoria": "polos",
    "subcategoria": "Polos",
    "genero": "crianca",
    "descricao": "Polo BOGOTÁ disponível em 25 cores. 100% Algodão (tamanhos de criança)",
    "composicao": "100% Algodão, Densidade: 220 g/m²",
    "referencia": "#BOG-BOG-C",
    "imagem": "/__l5e/assets-v1/9935d49d-15ea-4911-bc6b-412fe3104ea9/patrol-branco.webp",
    "lifestyle": "/lifestyle/patrol.jpg",
    "cores": [
      {
                "nome": "Branco",
                "hex": "#efeff1",
                "hexes": ["#efeff1"],
                "imagem": "/__l5e/assets-v1/9935d49d-15ea-4911-bc6b-412fe3104ea9/patrol-branco.webp"
              },
      {
                "nome": "Bege",
                "hex": "#aba899",
                "hexes": ["#aba899"],
                "imagem": "/__l5e/assets-v1/8946251c-1c0f-4d7c-8f64-85ed1aecc846/patrol-beje.webp"
              },
      {
                "nome": "Castanho",
                "hex": "#6a5749",
                "hexes": ["#6a5749"],
                "imagem": "/__l5e/assets-v1/2e6c6584-fad5-418d-9ad9-9a1184c578da/patrol-castanho.webp"
              },
      {
                "nome": "Verde 1",
                "hex": "#b3bb48",
                "hexes": ["#b3bb48"],
                "imagem": "/__l5e/assets-v1/c564f4d5-d1fa-4bcc-9c9e-01f9342019ea/patrol-verde1.webp"
              },
      {
                "nome": "Verde 2",
                "hex": "#3b9189",
                "hexes": ["#3b9189"],
                "imagem": "/__l5e/assets-v1/4e9d70bc-15de-4e84-a65e-3ffa2d2d1097/patrol-verde2.webp"
              },
      {
                "nome": "Verde 3",
                "hex": "#176d4c",
                "hexes": ["#176d4c"],
                "imagem": "/__l5e/assets-v1/7f229d3f-064b-4a2f-b12e-e83abc7f5d6b/patrol-verde3.webp"
              },
      {
                "nome": "Verde 4",
                "hex": "#015243",
                "hexes": ["#015243"],
                "imagem": "/__l5e/assets-v1/ed2e005e-a6db-4344-9ebc-2a7be2605650/patrol-verde4.webp"
              },
      {
                "nome": "Amarelo 1",
                "hex": "#f1da4c",
                "hexes": ["#f1da4c"],
                "imagem": "/__l5e/assets-v1/11cfb278-7850-4f55-99e0-99e22198bbfe/patrol-amarelo1.webp"
              },
      {
                "nome": "Amarelo 2",
                "hex": "#e5b917",
                "hexes": ["#e5b917"],
                "imagem": "/__l5e/assets-v1/00ed4147-a922-4a3d-a92d-c84d1c2ec4d2/patrol-amarelo2.webp"
              },
      {
                "nome": "Laranja",
                "hex": "#c4531c",
                "hexes": ["#c4531c"],
                "imagem": "/__l5e/assets-v1/4f7e23b4-558f-4936-9a87-5bab3cad9374/patrol-laranja.webp"
              },
      {
                "nome": "Vermelho 1",
                "hex": "#8a1525",
                "hexes": ["#8a1525"],
                "imagem": "/__l5e/assets-v1/954dd333-aaba-459b-8586-7a3acd774234/patrol-vermelho1.webp"
              },
      {
                "nome": "Vermelho 2",
                "hex": "#680c30",
                "hexes": ["#680c30"],
                "imagem": "/__l5e/assets-v1/fc95c5c7-e3e5-4c95-b05e-0aaa24554b7b/patrol-vermelho2.webp"
              },
      {
                "nome": "Rosa",
                "hex": "#c34480",
                "hexes": ["#c34480"],
                "imagem": "/__l5e/assets-v1/6f89d212-fa6a-4e50-a077-32d938b62b66/patrol-rosa.webp"
              },
      {
                "nome": "Roxo",
                "hex": "#331850",
                "hexes": ["#331850"],
                "imagem": "/__l5e/assets-v1/6c762029-eef2-40ca-a786-25b4e9ce7cd9/patrol-roxo.webp"
              },
      {
                "nome": "Azul 1",
                "hex": "#94b1d5",
                "hexes": ["#94b1d5"],
                "imagem": "/__l5e/assets-v1/d2b1383b-866d-49f8-b063-806d864335bd/patrol-azul1.webp"
              },
      {
                "nome": "Azul 2",
                "hex": "#1e5a93",
                "hexes": ["#1e5a93"],
                "imagem": "/__l5e/assets-v1/e1ffb658-911b-48ee-a715-dc4ce8532e04/patrol-azul2.webp"
              },
      {
                "nome": "Azul 3",
                "hex": "#5374a4",
                "hexes": ["#5374a4"],
                "imagem": "/__l5e/assets-v1/c4bb9921-dfc4-4d40-8a78-dd365cc81a43/patrol-azul3.webp"
              },
      {
                "nome": "Azul 4",
                "hex": "#184c5d",
                "hexes": ["#184c5d"],
                "imagem": "/__l5e/assets-v1/540f98a2-be87-407e-b5e1-f21dab7eda60/patrol-azul4.webp"
              },
      {
                "nome": "Azul 5",
                "hex": "#26375f",
                "hexes": ["#26375f"],
                "imagem": "/__l5e/assets-v1/ac2ba0b6-8a92-43b9-aeaf-5cc0037329af/patrol-azul5.webp"
              },
      {
                "nome": "Azul 6",
                "hex": "#073553",
                "hexes": ["#073553"],
                "imagem": "/__l5e/assets-v1/2d5916c9-e44c-403f-83f1-d739af1dd6b2/patrol-azul6.webp"
              },
      {
                "nome": "Cinzento 1",
                "hex": "#e4e5eb",
                "hexes": ["#e4e5eb"],
                "imagem": "/__l5e/assets-v1/2a94bb8d-0814-4ebd-adab-fb2538e5cc93/patrol-cinzento1.webp"
              },
      {
                "nome": "Cinzento 2",
                "hex": "#aeacb9",
                "hexes": ["#aeacb9"],
                "imagem": "/__l5e/assets-v1/1a19a936-51f0-4f6c-98ca-f834a4985d04/patrol-cinzento2.webp"
              },
      {
                "nome": "Cinzento 3",
                "hex": "#646a78",
                "hexes": ["#646a78"],
                "imagem": "/__l5e/assets-v1/87a65c46-e649-430c-8007-2f91f6faabca/patrol-cinzento3.webp"
              },
      {
                "nome": "Cinzento 4",
                "hex": "#55545a",
                "hexes": ["#55545a"],
                "imagem": "/__l5e/assets-v1/e5c4140a-e2bd-48fd-9a18-adfb2d0c271d/patrol-cinzento4.webp"
              },
      {
                "nome": "Preto",
                "hex": "#312c28",
                "hexes": ["#312c28"],
                "imagem": "/__l5e/assets-v1/4248e1c1-f9e0-4984-aef2-b2df5a2e0a3f/patrol-preto.webp"
              }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14"
      ],
      [
        "Comprimento",
        "50",
        "54",
        "58",
        "62",
        "66",
        "70"
      ],
      [
        "Largura",
        "36",
        "38",
        "40",
        "42",
        "45",
        "48"
      ]
    ],
    "precos": [
      ["0–99 unidades", "10,00€"],
      ["100–499 unidades", "9,00€"],
      ["+499 unidades", "8,00€"]
    ],
    "caracteristicas": ["100% Algodão", "Densidade: 220 g/m²"]
  },
  {
    "id": "arizona",
    "nome": "Hoodie LIMA",
    "referenciaNome": "LIMA",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "unissexo",
    "descricao": "Hoodie LIMA disponível em 20 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#LIM-LIM",
    "imagem": "/__l5e/assets-v1/66db4335-a27f-4f27-bb32-a94d941e6b79/arizona-branco.webp",
    "lifestyle": "/lifestyle/arizona.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ecedf1",
        "hexes": [
        "#ecedf1"
      ],
        "imagem": "/__l5e/assets-v1/66db4335-a27f-4f27-bb32-a94d941e6b79/arizona-branco.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#9a8665",
        "hexes": [
        "#9a8665"
      ],
        "imagem": "/__l5e/assets-v1/ccf01965-574e-4538-9b9b-ab0080b2ca46/arizona-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#91b654",
        "hexes": [
        "#91b654"
      ],
        "imagem": "/__l5e/assets-v1/3038bec8-080f-4d88-b3f2-ecf6edf09e18/arizona-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1e6e4d",
        "hexes": [
        "#1e6e4d"
      ],
        "imagem": "/__l5e/assets-v1/f235c56e-e982-4b73-84c0-6f95101d2f18/arizona-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#0f5341",
        "hexes": [
        "#0f5341"
      ],
        "imagem": "/__l5e/assets-v1/0720b1d6-9f12-4d11-9c7d-a143b87c71f0/arizona-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#4c513b",
        "hexes": [
        "#4c513b"
      ],
        "imagem": "/__l5e/assets-v1/0500442f-429f-4657-90f0-ccee306fa2d4/arizona-verde4.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#be5020",
        "hexes": [
        "#be5020"
      ],
        "imagem": "/__l5e/assets-v1/ba064205-6801-4f71-824b-3fb9d4b59a93/arizona-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#881926",
        "hexes": [
        "#881926"
      ],
        "imagem": "/__l5e/assets-v1/59b24b69-05aa-464e-ad05-b007a7480487/arizona-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#651132",
        "hexes": [
        "#651132"
      ],
        "imagem": "/__l5e/assets-v1/9fb93e12-7213-4ca5-a492-9f44c8228b6e/arizona-vermelho2.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#dcbdcc",
        "hexes": [
        "#dcbdcc"
      ],
        "imagem": "/__l5e/assets-v1/25ab44f7-fdd4-4a65-8da4-2d176ffaa49d/arizona-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#bb447e",
        "hexes": [
        "#bb447e"
      ],
        "imagem": "/__l5e/assets-v1/147e2d48-e345-4ccf-80e5-f696f4171954/arizona-rosa2.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#4d376e",
        "hexes": [
        "#4d376e"
      ],
        "imagem": "/__l5e/assets-v1/2e2045d7-7213-4bf3-8072-0354d76f8382/arizona-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#242658",
        "hexes": [
        "#242658"
      ],
        "imagem": "/__l5e/assets-v1/37039eb2-ccf7-4c07-8a77-96c05451ddc7/arizona-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#94b1d3",
        "hexes": [
        "#94b1d3"
      ],
        "imagem": "/__l5e/assets-v1/1a724bfb-0859-4667-ac38-1afc90e297b4/arizona-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#048bbd",
        "hexes": [
        "#048bbd"
      ],
        "imagem": "/__l5e/assets-v1/d8adf478-46f7-4ab7-a8b7-b45d7e698cc5/arizona-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#245687",
        "hexes": [
        "#245687"
      ],
        "imagem": "/__l5e/assets-v1/c8e9bf21-afd2-4d9e-996c-7fe2c18b8b67/arizona-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324b",
        "hexes": [
        "#11324b"
      ],
        "imagem": "/__l5e/assets-v1/b86fd0d1-d593-43ac-9d5c-640e64bca89e/arizona-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#9f9ea9",
        "hexes": [
        "#9f9ea9"
      ],
        "imagem": "/__l5e/assets-v1/0ec9c474-f5be-467e-85b0-4c79c354e8cf/arizona-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#4d4e53",
        "hexes": [
        "#4d4e53"
      ],
        "imagem": "/__l5e/assets-v1/3a587b79-6a06-4d31-8b1c-0615b85350d0/arizona-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#2d2a25",
        "hexes": [
        "#2d2a25"
      ],
        "imagem": "/__l5e/assets-v1/55b85c44-b21f-49c1-b4ca-95240de78169/arizona-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "52",
        "55",
        "58",
        "61",
        "64",
        "67"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "20,00€"
      ],
      [
        "50–249 unidades",
        "18,50€"
      ],
      [
        "+249 unidades",
        "17,50€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 280 g/m²"
    ]
  },
  {
    "id": "lima-crianca",
    "nome": "Hoodie LIMA (Criança)",
    "referenciaNome": "LIMA",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "crianca",
    "descricao": "Hoodie LIMA disponível em 20 cores. 100% Poliéster (tamanhos de criança)",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#LIM-LIM-C",
    "imagem": "/__l5e/assets-v1/66db4335-a27f-4f27-bb32-a94d941e6b79/arizona-branco.webp",
    "lifestyle": "/lifestyle/arizona.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ecedf1",
        "hexes": [
        "#ecedf1"
      ],
        "imagem": "/__l5e/assets-v1/66db4335-a27f-4f27-bb32-a94d941e6b79/arizona-branco.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#9a8665",
        "hexes": [
        "#9a8665"
      ],
        "imagem": "/__l5e/assets-v1/ccf01965-574e-4538-9b9b-ab0080b2ca46/arizona-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#91b654",
        "hexes": [
        "#91b654"
      ],
        "imagem": "/__l5e/assets-v1/3038bec8-080f-4d88-b3f2-ecf6edf09e18/arizona-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1e6e4d",
        "hexes": [
        "#1e6e4d"
      ],
        "imagem": "/__l5e/assets-v1/f235c56e-e982-4b73-84c0-6f95101d2f18/arizona-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#0f5341",
        "hexes": [
        "#0f5341"
      ],
        "imagem": "/__l5e/assets-v1/0720b1d6-9f12-4d11-9c7d-a143b87c71f0/arizona-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#4c513b",
        "hexes": [
        "#4c513b"
      ],
        "imagem": "/__l5e/assets-v1/0500442f-429f-4657-90f0-ccee306fa2d4/arizona-verde4.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#be5020",
        "hexes": [
        "#be5020"
      ],
        "imagem": "/__l5e/assets-v1/ba064205-6801-4f71-824b-3fb9d4b59a93/arizona-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#881926",
        "hexes": [
        "#881926"
      ],
        "imagem": "/__l5e/assets-v1/59b24b69-05aa-464e-ad05-b007a7480487/arizona-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#651132",
        "hexes": [
        "#651132"
      ],
        "imagem": "/__l5e/assets-v1/9fb93e12-7213-4ca5-a492-9f44c8228b6e/arizona-vermelho2.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#dcbdcc",
        "hexes": [
        "#dcbdcc"
      ],
        "imagem": "/__l5e/assets-v1/25ab44f7-fdd4-4a65-8da4-2d176ffaa49d/arizona-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#bb447e",
        "hexes": [
        "#bb447e"
      ],
        "imagem": "/__l5e/assets-v1/147e2d48-e345-4ccf-80e5-f696f4171954/arizona-rosa2.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#4d376e",
        "hexes": [
        "#4d376e"
      ],
        "imagem": "/__l5e/assets-v1/2e2045d7-7213-4bf3-8072-0354d76f8382/arizona-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#242658",
        "hexes": [
        "#242658"
      ],
        "imagem": "/__l5e/assets-v1/37039eb2-ccf7-4c07-8a77-96c05451ddc7/arizona-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#94b1d3",
        "hexes": [
        "#94b1d3"
      ],
        "imagem": "/__l5e/assets-v1/1a724bfb-0859-4667-ac38-1afc90e297b4/arizona-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#048bbd",
        "hexes": [
        "#048bbd"
      ],
        "imagem": "/__l5e/assets-v1/d8adf478-46f7-4ab7-a8b7-b45d7e698cc5/arizona-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#245687",
        "hexes": [
        "#245687"
      ],
        "imagem": "/__l5e/assets-v1/c8e9bf21-afd2-4d9e-996c-7fe2c18b8b67/arizona-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324b",
        "hexes": [
        "#11324b"
      ],
        "imagem": "/__l5e/assets-v1/b86fd0d1-d593-43ac-9d5c-640e64bca89e/arizona-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#9f9ea9",
        "hexes": [
        "#9f9ea9"
      ],
        "imagem": "/__l5e/assets-v1/0ec9c474-f5be-467e-85b0-4c79c354e8cf/arizona-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#4d4e53",
        "hexes": [
        "#4d4e53"
      ],
        "imagem": "/__l5e/assets-v1/3a587b79-6a06-4d31-8b1c-0615b85350d0/arizona-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#2d2a25",
        "hexes": [
        "#2d2a25"
      ],
        "imagem": "/__l5e/assets-v1/55b85c44-b21f-49c1-b4ca-95240de78169/arizona-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "3",
        "4/5",
        "6/8",
        "10/12"
      ],
      [
        "Comprimento",
        "46",
        "51",
        "53",
        "61"
      ],
      [
        "Largura",
        "35",
        "39",
        "43",
        "47"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "12,00€"
      ],
      [
        "100–499 unidades",
        "11,00€"
      ],
      [
        "+499 unidades",
        "10,00€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 280 g/m²"
    ]
  },
  {
    "id": "cairo",
    "nome": "Hoodie CAIRO",
    "referenciaNome": "CAIRO",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "unissexo",
    "descricao": "Hoodie CAIRO — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#CAI-CAI",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "66", "69", "72", "75", "78", "81"],
      ["Largura", "52", "55", "58", "61", "64", "67"]
    ],
    "precos": [
      ["0–49 unidades", "20,00€"],
      ["50–249 unidades", "18,50€"],
      ["+249 unidades", "17,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "cairo-crianca",
    "nome": "Hoodie CAIRO (Criança)",
    "referenciaNome": "CAIRO",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "crianca",
    "descricao": "Hoodie CAIRO — modelo em preparação, fotografias a adicionar brevemente. (tamanhos de criança)",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#CAI-CAI-C",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "3", "4/5", "6/8", "10/12"],
      ["Comprimento", "46", "51", "53", "61"],
      ["Largura", "35", "39", "43", "47"]
    ],
    "precos": [
      ["0–99 unidades", "12,00€"],
      ["100–499 unidades", "11,00€"],
      ["+499 unidades", "10,00€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "rabat",
    "nome": "Hoodie RABAT",
    "referenciaNome": "RABAT",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "unissexo",
    "descricao": "Hoodie RABAT — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#RAB-RAB",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "66", "69", "72", "75", "78", "81"],
      ["Largura", "52", "55", "58", "61", "64", "67"]
    ],
    "precos": [
      ["0–49 unidades", "20,00€"],
      ["50–249 unidades", "18,50€"],
      ["+249 unidades", "17,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "luanda",
    "nome": "Hoodie LUANDA",
    "referenciaNome": "LUANDA",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "genero": "unissexo",
    "descricao": "Hoodie LUANDA — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#LUA-LUA",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "66", "69", "72", "75", "78", "81"],
      ["Largura", "52", "55", "58", "61", "64", "67"]
    ],
    "precos": [
      ["0–49 unidades", "20,00€"],
      ["50–249 unidades", "18,50€"],
      ["+249 unidades", "17,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "bissau",
    "nome": "Sweatshirt BISSAU",
    "referenciaNome": "BISSAU",
    "categoria": "sweats",
    "subcategoria": "Sem Capuz",
    "genero": "unissexo",
    "descricao": "Sweatshirt BISSAU — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#BIS-BIS",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "66", "69", "72", "75", "78", "81"],
      ["Largura", "52", "55", "58", "61", "64", "67"]
    ],
    "precos": [
      ["0–49 unidades", "20,00€"],
      ["50–249 unidades", "18,50€"],
      ["+249 unidades", "17,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "dacar",
    "nome": "Sweatshirt DACAR",
    "referenciaNome": "DACAR",
    "categoria": "sweats",
    "subcategoria": "Sem Capuz",
    "genero": "unissexo",
    "descricao": "Sweatshirt DACAR — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#DAC-DAC",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "S", "M", "L", "XL", "XXL", "3XL"],
      ["Comprimento", "66", "69", "72", "75", "78", "81"],
      ["Largura", "52", "55", "58", "61", "64", "67"]
    ],
    "precos": [
      ["0–49 unidades", "20,00€"],
      ["50–249 unidades", "18,50€"],
      ["+249 unidades", "17,50€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "dublin",
    "nome": "Sweatshirt MELODIAS",
    "referenciaNome": "MELODIAS",
    "categoria": "sweats",
    "subcategoria": "Sem Capuz",
    "descricao": "Sweatshirt MELODIAS disponível em 25 cores. 65% Poliéster",
    "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
    "referencia": "#MEL-MEL",
    "imagem": "/__l5e/assets-v1/65e2a488-b6b9-4d1d-b6d9-ec7527c57739/dublin-branco.webp",
    "lifestyle": "/lifestyle/dublin.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaeaee",
        "hexes": [
        "#eaeaee"
      ],
        "imagem": "/__l5e/assets-v1/65e2a488-b6b9-4d1d-b6d9-ec7527c57739/dublin-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#adaa9b",
        "hexes": [
        "#adaa9b"
      ],
        "imagem": "/__l5e/assets-v1/f0b410d1-268b-43a0-b400-9dc54c7fa597/dublin-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#9e8a67",
        "hexes": [
        "#9e8a67"
      ],
        "imagem": "/__l5e/assets-v1/ab90d930-6bde-4187-9ff0-63b21cc8f8e0/dublin-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#95b854",
        "hexes": [
        "#95b854"
      ],
        "imagem": "/__l5e/assets-v1/347175d5-1c9a-4f01-b96c-09fb7f31962e/dublin-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a714f",
        "hexes": [
        "#1a714f"
      ],
        "imagem": "/__l5e/assets-v1/ea10f7b5-29b3-4bb9-b3e1-acba07a2a5df/dublin-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#01483a",
        "hexes": [
        "#01483a"
      ],
        "imagem": "/__l5e/assets-v1/0aa70b25-2e12-48c8-bf0e-d89ff56f92d1/dublin-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#535740",
        "hexes": [
        "#535740"
      ],
        "imagem": "/__l5e/assets-v1/9c7f52e3-f914-41c3-91d1-8c9ad050d9d1/dublin-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#f6e03d",
        "hexes": [
        "#f6e03d"
      ],
        "imagem": "/__l5e/assets-v1/897b6d94-d71f-4e0c-8946-9a9d01456dea/dublin-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#e6bb17",
        "hexes": [
        "#e6bb17"
      ],
        "imagem": "/__l5e/assets-v1/41e552e8-6568-46a5-9ba9-e7b5b306dc9e/dublin-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#c6551d",
        "hexes": [
        "#c6551d"
      ],
        "imagem": "/__l5e/assets-v1/8394fb96-f47e-4c22-b149-b4fd22969721/dublin-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#8c1626",
        "hexes": [
        "#8c1626"
      ],
        "imagem": "/__l5e/assets-v1/02c7480a-a19e-4a7e-a559-12593316501d/dublin-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#680c30",
        "hexes": [
        "#680c30"
      ],
        "imagem": "/__l5e/assets-v1/fb352df9-77a1-4e7b-a725-cf8c3a890c71/dublin-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#c44581",
        "hexes": [
        "#c44581"
      ],
        "imagem": "/__l5e/assets-v1/b8d5a22a-dc9f-4aec-87a1-9dbd7c1bca5e/dublin-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#272963",
        "hexes": [
        "#272963"
      ],
        "imagem": "/__l5e/assets-v1/0206cecf-8851-4523-a187-a5adb8090615/dublin-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#96b3d7",
        "hexes": [
        "#96b3d7"
      ],
        "imagem": "/__l5e/assets-v1/c4ff0616-b132-4059-8ce9-c7c97501ac77/dublin-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#058bc4",
        "hexes": [
        "#058bc4"
      ],
        "imagem": "/__l5e/assets-v1/567c2add-16bb-458a-9a34-0f9bb4549a31/dublin-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#1f5b95",
        "hexes": [
        "#1f5b95"
      ],
        "imagem": "/__l5e/assets-v1/9767da89-2be2-46c1-a1d5-18a2f3d1bbf5/dublin-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#083654",
        "hexes": [
        "#083654"
      ],
        "imagem": "/__l5e/assets-v1/85552041-954f-45a0-a678-a7df2ce3e395/dublin-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#dfdee4",
        "hexes": [
        "#dfdee4"
      ],
        "imagem": "/__l5e/assets-v1/3cc0f320-c9ac-4125-ae9a-9d3210dd9e36/dublin-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#768099",
        "hexes": [
        "#768099"
      ],
        "imagem": "/__l5e/assets-v1/7eb139b7-bc02-48aa-a2fb-ac95be988ae2/dublin-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#b1afbb",
        "hexes": [
        "#b1afbb"
      ],
        "imagem": "/__l5e/assets-v1/39fc040b-b792-4d3c-b46f-fd2de892cac7/dublin-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#636b78",
        "hexes": [
        "#636b78"
      ],
        "imagem": "/__l5e/assets-v1/88f54b31-1383-4f40-b294-b0e2e637dfbf/dublin-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#55545b",
        "hexes": [
        "#55545b"
      ],
        "imagem": "/__l5e/assets-v1/ea680fae-9e84-4060-b239-9cb65a9bcf21/dublin-cinzento5.webp"
      },
      {
        "nome": "Cinzento 6",
        "hex": "#4c4c4d",
        "hexes": [
        "#4c4c4d"
      ],
        "imagem": "/__l5e/assets-v1/675a2a61-de44-4edf-8775-e0c8d71b7eac/dublin-cinzento6.webp"
      },
      {
        "nome": "Preto",
        "hex": "#322e2a",
        "hexes": [
        "#322e2a"
      ],
        "imagem": "/__l5e/assets-v1/1150ca26-4289-40ce-9d29-c1d8bb60ba4e/dublin-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL"
      ],
      [
        "Comprimento",
        "53",
        "58",
        "63",
        "67",
        "70",
        "73",
        "76",
        "79",
        "82",
        "85"
      ],
      [
        "Largura",
        "39",
        "43",
        "47",
        "52",
        "55",
        "58",
        "61",
        "64",
        "67",
        "70"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "20,00€"
      ],
      [
        "50–249 unidades",
        "18,50€"
      ],
      [
        "+249 unidades",
        "17,00€"
      ]
    ],
    "caracteristicas": [
      "65% Poliéster",
      "35% Algodão",
      "Densidade: 300 g/m²"
    ]
  },
  {
    "id": "manitoba",
    "nome": "Jaqueta NAIROBI",
    "referenciaNome": "NAIROBI",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta NAIROBI disponível em 8 cores. Interior: 100% Poliéster (225 g/m²)",
    "composicao": "Interior: 100% Poliéster (225 g/m²), Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
    "referencia": "#NAI-NAI",
    "imagem": "/__l5e/assets-v1/0c0569d8-29f2-43d4-ae16-09e7749880cb/manitoba-branco.webp",
    "lifestyle": "/lifestyle/manitoba.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eff0f4",
        "hexes": [
        "#eff0f4"
      ],
        "imagem": "/__l5e/assets-v1/0c0569d8-29f2-43d4-ae16-09e7749880cb/manitoba-branco.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#0f5e4c",
        "hexes": [
        "#0f5e4c"
      ],
        "imagem": "/__l5e/assets-v1/a1b0366d-c50b-4b4a-91cb-465c0420a8c4/manitoba-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#545c45",
        "hexes": [
        "#545c45"
      ],
        "imagem": "/__l5e/assets-v1/fb3a8e02-0cd4-4816-bae9-4424afb34850/manitoba-verde2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8d1e2c",
        "hexes": [
        "#8d1e2c"
      ],
        "imagem": "/__l5e/assets-v1/763614ff-77d8-4d8e-b5a2-2b514e219563/manitoba-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#215f96",
        "hexes": [
        "#215f96"
      ],
        "imagem": "/__l5e/assets-v1/ae3c4147-66dd-4749-b323-ef41b174aca1/manitoba-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#133f5f",
        "hexes": [
        "#133f5f"
      ],
        "imagem": "/__l5e/assets-v1/1679880f-cd8e-4f97-83bd-484ce1f9c44a/manitoba-azul2.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#575a62",
        "hexes": [
        "#575a62"
      ],
        "imagem": "/__l5e/assets-v1/0c448b39-500e-49f8-9581-897b3d9b675c/manitoba-cinzento.webp"
      },
      {
        "nome": "Preto",
        "hex": "#3c3935",
        "hexes": [
        "#3c3935"
      ],
        "imagem": "/__l5e/assets-v1/4369b85a-353b-49a3-92ca-dd999ede6aba/manitoba-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "75",
        "78",
        "81",
        "84",
        "87",
        "90"
      ],
      [
        "Largura",
        "58",
        "61",
        "64",
        "67",
        "70",
        "73"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "27,50€"
      ],
      [
        "50–249 unidades",
        "26,00€"
      ],
      [
        "+249 unidades",
        "24,50€"
      ]
    ],
    "caracteristicas": [
      "Interior: 100% Poliéster (225 g/m²)",
      "Exterior: 70% Poliéster, 30% PVC (200 g/m²)"
    ]
  },
  {
    "id": "ontario",
    "nome": "Jaqueta TÓQUIO",
    "referenciaNome": "TÓQUIO",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta TÓQUIO disponível em 4 cores. Interior: 100% Poliéster (200 g/m²)",
    "composicao": "Interior: 100% Poliéster (200 g/m²), Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
    "referencia": "#TOK-TOK",
    "imagem": "/__l5e/assets-v1/3157dcfc-e765-45e3-82d8-0c759bcdb4f5/ontario-vermelho.webp",
    "lifestyle": "/lifestyle/ontario.jpg",
    "cores": [
      {
        "nome": "Vermelho",
        "hex": "#851624",
        "hexes": [
        "#851624"
      ],
        "imagem": "/__l5e/assets-v1/3157dcfc-e765-45e3-82d8-0c759bcdb4f5/ontario-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#1c588f",
        "hexes": [
        "#1c588f"
      ],
        "imagem": "/__l5e/assets-v1/723e5cb1-9fb8-4349-82ae-e5b67bc32607/ontario-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#053351",
        "hexes": [
        "#053351"
      ],
        "imagem": "/__l5e/assets-v1/849cd4e8-6868-4a1e-ac76-e865438008ba/ontario-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#322d29",
        "hexes": [
        "#322d29"
      ],
        "imagem": "/__l5e/assets-v1/0e853d4a-e06f-42cb-b276-88bc0b32c98c/ontario-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "69",
        "72",
        "75",
        "77",
        "80",
        "83"
      ],
      [
        "Largura",
        "57",
        "60",
        "63",
        "66",
        "69",
        "72"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "25,00€"
      ],
      [
        "50–249 unidades",
        "24,00€"
      ],
      [
        "+249 unidades",
        "23,00€"
      ]
    ],
    "caracteristicas": [
      "Interior: 100% Poliéster (200 g/m²)",
      "Exterior: 70% Poliéster, 30% PVC (200 g/m²)"
    ]
  },
  {
    "id": "balak",
    "nome": "Jaqueta BALAK",
    "referenciaNome": "BALAK",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta BALAK disponível em 2 cores. Interior: 100% Poliéster (220 g/m²)",
    "composicao": "Interior: 100% Poliéster (220 g/m²), Exterior: 100% Poliéster (160 g/m²)",
    "referencia": "#BAL-BAL",
    "imagem": "/__l5e/assets-v1/dccb9ff8-49c8-485d-a2d7-9a2a6020b2be/balak-azul.webp",
    "lifestyle": "/lifestyle/balak.jpg",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#243547",
        "hexes": [
        "#243547"
      ],
        "imagem": "/__l5e/assets-v1/dccb9ff8-49c8-485d-a2d7-9a2a6020b2be/balak-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#2c2922",
        "hexes": [
        "#2c2922"
      ],
        "imagem": "/__l5e/assets-v1/73f79132-f781-403a-9302-cbfa5389184d/balak-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "67",
        "70",
        "73",
        "76",
        "79",
        "82"
      ],
      [
        "Largura",
        "56",
        "59",
        "62",
        "65",
        "68",
        "71"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "23,50€"
      ],
      [
        "50–249 unidades",
        "22,00€"
      ],
      [
        "+249 unidades",
        "20,50€"
      ]
    ],
    "caracteristicas": [
      "Interior: 100% Poliéster (220 g/m²)",
      "Exterior: 100% Poliéster (160 g/m²)"
    ]
  },
  {
    "id": "resistance-mulher",
    "nome": "T-shirt ZAGREB (Mulher)",
    "referenciaNome": "ZAGREB",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "mulher",
    "descricao": "T-shirt ZAGREB disponível em 26 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-MUL",
    "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [
        "#efeff3"
      ],
        "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [
        "#aba89a"
      ],
        "imagem": "/__l5e/assets-v1/c76e66ae-eac5-4a03-ad80-3ad767b153dc/resistance-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [
        "#543d34"
      ],
        "imagem": "/__l5e/assets-v1/b366a160-30dd-48f2-8721-a953356406f2/resistance-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [
        "#92b553"
      ],
        "imagem": "/__l5e/assets-v1/911351a2-97a0-4a63-a4ea-de77ffe6d32a/resistance-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [
        "#1a704e"
      ],
        "imagem": "/__l5e/assets-v1/3f63664e-f619-4f45-973d-5bb905ec0227/resistance-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [
        "#025443"
      ],
        "imagem": "/__l5e/assets-v1/070e1099-cd81-48da-a087-d944ac146d32/resistance-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [
        "#51553f"
      ],
        "imagem": "/__l5e/assets-v1/dd979047-fad3-4045-8730-9f70d1b1f099/resistance-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [
        "#9fba37"
      ],
        "imagem": "/__l5e/assets-v1/cbdc1ca0-b981-436d-9ac2-b6c53d1fea71/resistance-verde5.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [
        "#dcd71e"
      ],
        "imagem": "/__l5e/assets-v1/62c9d753-64b8-484b-809e-52fb0d0a93b7/resistance-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [
        "#f1db4c"
      ],
        "imagem": "/__l5e/assets-v1/e07f99a3-a5d7-4a05-9427-55150fc0877e/resistance-amarelo2.webp"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [
        "#f1b803"
      ],
        "imagem": "/__l5e/assets-v1/c9ed2f80-dd77-4028-baf7-06a5a5a49207/resistance-amarelo3.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [
        "#c4521d"
      ],
        "imagem": "/__l5e/assets-v1/a72bbdf4-d11c-45ba-9b70-62e809aab8cf/resistance-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c35923",
        "hexes": [
        "#c35923"
      ],
        "imagem": "/__l5e/assets-v1/6cc8b03b-6764-4a69-9b04-e7c6ae8c7449/resistance-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [
        "#8b1727"
      ],
        "imagem": "/__l5e/assets-v1/983a6613-81cf-495a-b0bb-797368c2f71c/resistance-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [
        "#eec3d4"
      ],
        "imagem": "/__l5e/assets-v1/bf1114b9-d7e6-4f78-97b4-2fbee0c1f5d6/resistance-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [
        "#c0437f"
      ],
        "imagem": "/__l5e/assets-v1/624c3978-e8e3-4147-86d5-7e6c365c88d0/resistance-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [
        "#c46097"
      ],
        "imagem": "/__l5e/assets-v1/cc4cb164-72f4-4195-b8a8-4f2c686a9319/resistance-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [
        "#503677"
      ],
        "imagem": "/__l5e/assets-v1/4b61784e-cf5a-4419-9834-6bbb9b008a85/resistance-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [
        "#272863"
      ],
        "imagem": "/__l5e/assets-v1/4c2abc52-2185-42d1-9f61-6e2cd2325e78/resistance-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [
        "#7ca4d1"
      ],
        "imagem": "/__l5e/assets-v1/e82bcc73-2ac7-4193-a577-574e1750da17/resistance-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [
        "#047db7"
      ],
        "imagem": "/__l5e/assets-v1/33d78303-da7e-400a-a8c6-3c5615995e78/resistance-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [
        "#205c95"
      ],
        "imagem": "/__l5e/assets-v1/e7c369e0-92f8-4394-8c5c-593250c97fe7/resistance-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [
        "#11324f"
      ],
        "imagem": "/__l5e/assets-v1/9fdc8544-55e2-4aed-99f5-3c7bca63f435/resistance-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [
        "#616976"
      ],
        "imagem": "/__l5e/assets-v1/f45d06ac-9d86-47fd-842a-fe17de3ee713/resistance-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#525159",
        "hexes": [
        "#525159"
      ],
        "imagem": "/__l5e/assets-v1/4f3180f6-f7df-4ca3-8698-7c578b38299c/resistance-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [
        "#342f2b"
      ],
        "imagem": "/__l5e/assets-v1/f3843ddd-f4d7-4050-addd-96c630da6fe8/resistance-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "50",
        "55",
        "60",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "37",
        "41",
        "45",
        "48",
        "51",
        "54",
        "57",
        "60",
        "63"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "atenas",
    "nome": "T-shirt ATENAS",
    "referenciaNome": "ATENAS",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "mulher",
    "descricao": "T-shirt ATENAS — modelo em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Poliéster",
    "referencia": "#ATE-ATE",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": ["#eaedf1"],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      ["Tamanho", "XS", "S", "M", "L", "XL", "XXL"],
      ["Comprimento", "58", "61", "64", "67", "70", "73"],
      ["Largura", "44", "46", "49", "51", "54", "57"]
    ],
    "precos": [
      ["0–99 unidades", "10,50€"],
      ["100–499 unidades", "9,00€"],
      ["+499 unidades", "8,25€"]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "racing-crianca",
    "nome": "T-shirt LISBOA",
    "referenciaNome": "LISBOA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt LISBOA disponível em 35 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#LIS-LIS",
    "imagem": "/__l5e/assets-v1/20ef2e18-6467-4bc7-a363-ba32dac9532f/racing-branco.webp",
    "lifestyle": "/lifestyle/racing.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
        "#eaedf1"
      ],
        "imagem": "/__l5e/assets-v1/20ef2e18-6467-4bc7-a363-ba32dac9532f/racing-branco.webp"
      },
      {
        "nome": "Bege 1",
        "hex": "#f0ebd8",
        "hexes": [
        "#f0ebd8"
      ],
        "imagem": "/__l5e/assets-v1/71e8bd2d-76e6-40cf-b511-2a37b7155046/racing-beje1.webp"
      },
      {
        "nome": "Bege 2",
        "hex": "#afac9d",
        "hexes": [
        "#afac9d"
      ],
        "imagem": "/__l5e/assets-v1/056a8b40-22cf-47a2-b8b2-6e75791700df/racing-beje2.webp"
      },
      {
        "nome": "Castanho 1",
        "hex": "#a18b67",
        "hexes": [
        "#a18b67"
      ],
        "imagem": "/__l5e/assets-v1/27bda301-3915-4f48-bc6e-11618848dca7/racing-castanho1.webp"
      },
      {
        "nome": "Castanho 2",
        "hex": "#6e594b",
        "hexes": [
        "#6e594b"
      ],
        "imagem": "/__l5e/assets-v1/fbd72b07-1c28-40c7-bc3b-f09dca4d8f5d/racing-castanho2.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#96bb54",
        "hexes": [
        "#96bb54"
      ],
        "imagem": "/__l5e/assets-v1/83b5cd67-70c2-47b1-bdc8-e102575dd54f/racing-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5ca144",
        "hexes": [
        "#5ca144"
      ],
        "imagem": "/__l5e/assets-v1/7718ca9b-d79a-4978-8864-e4bddba8a4d1/racing-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#197351",
        "hexes": [
        "#197351"
      ],
        "imagem": "/__l5e/assets-v1/29736327-b078-459f-bde7-0dca0bcb6264/racing-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#024a3b",
        "hexes": [
        "#024a3b"
      ],
        "imagem": "/__l5e/assets-v1/7a65d595-2b13-4ebe-b476-90f512afa73f/racing-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#4e675d",
        "hexes": [
        "#4e675d"
      ],
        "imagem": "/__l5e/assets-v1/8462a1d0-f442-4f61-bc5b-3edf8b929152/racing-verde5.webp"
      },
      {
        "nome": "Verde 6",
        "hex": "#53573f",
        "hexes": [
        "#53573f"
      ],
        "imagem": "/__l5e/assets-v1/1a539b59-798a-44ed-8835-6d4c1f274f1b/racing-verde6.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#f9e24d",
        "hexes": [
        "#f9e24d"
      ],
        "imagem": "/__l5e/assets-v1/be54829b-5af0-4dbe-87a1-f8d58a566716/racing-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#e9bd19",
        "hexes": [
        "#e9bd19"
      ],
        "imagem": "/__l5e/assets-v1/5aa2b115-fac8-42e8-b13b-c04c37200713/racing-amarelo2.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#df9f1d",
        "hexes": [
        "#df9f1d"
      ],
        "imagem": "/__l5e/assets-v1/e7e4dce1-58ad-4b70-b3aa-fb443282302d/racing-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c9541d",
        "hexes": [
        "#c9541d"
      ],
        "imagem": "/__l5e/assets-v1/1ae4a0ca-678c-4b89-b8ec-846f8f518614/racing-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#90162a",
        "hexes": [
        "#90162a"
      ],
        "imagem": "/__l5e/assets-v1/d1fd205e-7007-4906-9343-329e2cc2c699/racing-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#6d1034",
        "hexes": [
        "#6d1034"
      ],
        "imagem": "/__l5e/assets-v1/7c70e814-1130-4b3e-a90d-6edd9f94cb1a/racing-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#e9c8d8",
        "hexes": [
        "#e9c8d8"
      ],
        "imagem": "/__l5e/assets-v1/a110e02d-63cf-4c26-82bf-35f2e4c8e1a6/racing-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c74283",
        "hexes": [
        "#c74283"
      ],
        "imagem": "/__l5e/assets-v1/ac8cb663-28ba-4265-8220-42dd81ac8234/racing-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#7d7fb2",
        "hexes": [
        "#7d7fb2"
      ],
        "imagem": "/__l5e/assets-v1/e8cb57b9-c1ab-40c9-b18d-74f3983a7ad8/racing-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#53387a",
        "hexes": [
        "#53387a"
      ],
        "imagem": "/__l5e/assets-v1/770a765f-9f01-4dde-b4e8-a477fdf270e7/racing-roxo2.webp"
      },
      {
        "nome": "Roxo 3",
        "hex": "#351a53",
        "hexes": [
        "#351a53"
      ],
        "imagem": "/__l5e/assets-v1/30c38497-368a-4d45-a9ec-f293440f294d/racing-roxo3.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#9ab7dc",
        "hexes": [
        "#9ab7dc"
      ],
        "imagem": "/__l5e/assets-v1/64bb4944-3656-4968-878b-c3d9aa94a7b7/racing-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#0490cb",
        "hexes": [
        "#0490cb"
      ],
        "imagem": "/__l5e/assets-v1/2f654ff9-85f0-4ef4-9873-442bf04f1e37/racing-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#215d98",
        "hexes": [
        "#215d98"
      ],
        "imagem": "/__l5e/assets-v1/f75d7a93-9770-47d9-abf4-268c691ca063/racing-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#5475a8",
        "hexes": [
        "#5475a8"
      ],
        "imagem": "/__l5e/assets-v1/6a088b68-cf11-4d82-920b-3eb5bc9f20ad/racing-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#263962",
        "hexes": [
        "#263962"
      ],
        "imagem": "/__l5e/assets-v1/7ec0cf6a-2031-44f6-a00c-a01c849409a8/racing-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#144267",
        "hexes": [
        "#144267"
      ],
        "imagem": "/__l5e/assets-v1/58aef014-f456-4cb8-85fb-ed235fe04a24/racing-azul6.webp"
      },
      {
        "nome": "Azul 7",
        "hex": "#0a3755",
        "hexes": [
        "#0a3755"
      ],
        "imagem": "/__l5e/assets-v1/2f8bf91c-9e8f-4781-9284-947d8faf6f4d/racing-azul7.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#777c90",
        "hexes": [
        "#777c90"
      ],
        "imagem": "/__l5e/assets-v1/480b58e1-29d4-40af-912f-cdd0d783ac96/racing-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#e6e5eb",
        "hexes": [
        "#e6e5eb"
      ],
        "imagem": "/__l5e/assets-v1/b5d848a0-d2c5-4582-8ac0-c974ce3d7a38/racing-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#b5b3bf",
        "hexes": [
        "#b5b3bf"
      ],
        "imagem": "/__l5e/assets-v1/950f0976-489a-4500-8054-625a51ab6e62/racing-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#646c79",
        "hexes": [
        "#646c79"
      ],
        "imagem": "/__l5e/assets-v1/6b13b4b1-5ecd-45d2-8786-51e353416df0/racing-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#58575d",
        "hexes": [
        "#58575d"
      ],
        "imagem": "/__l5e/assets-v1/e89190f6-ee31-4fe4-b839-9965640c7953/racing-cinzento5.webp"
      },
      {
        "nome": "Preto",
        "hex": "#332e2a",
        "hexes": [
        "#332e2a"
      ],
        "imagem": "/__l5e/assets-v1/e67c8533-10c0-4bed-bd3a-5bce4db9f23f/racing-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "2",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "40",
        "45",
        "49",
        "53",
        "57",
        "61",
        "65",
        "67",
        "68",
        "72",
        "76",
        "80"
      ],
      [
        "Largura",
        "30",
        "32",
        "35",
        "38",
        "41",
        "44",
        "46",
        "48",
        "52",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "11,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Densidade: 160 g/m²"
    ]
  },
  {
    "id": "viena-crianca",
    "nome": "T-shirt VIENA",
    "referenciaNome": "VIENA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt VIENA — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#VIE",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "bruxelas",
    "nome": "T-shirt BRUXELAS",
    "referenciaNome": "BRUXELAS",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt BRUXELAS — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#BRU",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "baku",
    "nome": "T-shirt BAKU",
    "referenciaNome": "BAKU",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt BAKU — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#BAK",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "oslo",
    "nome": "T-shirt OSLO",
    "referenciaNome": "OSLO",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt OSLO — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#OSL",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "saravejo",
    "nome": "T-shirt SARAVEJO",
    "referenciaNome": "SARAVEJO",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "genero": "crianca",
    "descricao": "T-shirt SARAVEJO — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#SAR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "sofia",
    "nome": "Body SÓFIA",
    "referenciaNome": "SÓFIA",
    "categoria": "crianca",
    "subcategoria": "Bodies",
    "genero": "crianca",
    "descricao": "Body SÓFIA — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#SOF-SOF",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "riga",
    "nome": "Body RIGA",
    "referenciaNome": "RIGA",
    "categoria": "crianca",
    "subcategoria": "Bodies",
    "genero": "crianca",
    "descricao": "Body RIGA — modelo de criança em preparação, fotografias a adicionar brevemente.",
    "composicao": "100% Algodão",
    "referencia": "#RIG-RIG",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      { "nome": "Branco", "hex": "#eaedf1", "hexes": ["#eaedf1"], "imagem": "/placeholder-modelo.svg" }
    ],
    "tamanhos": [
      ["Tamanho", "2", "4", "6", "8", "10", "12"],
      ["Comprimento", "38", "42", "46", "50", "54", "58"],
      ["Largura", "27", "30", "33", "36", "39", "42"]
    ],
    "precos": [
      ["0–99 unidades", "6,50€"],
      ["100–499 unidades", "5,90€"],
      ["+499 unidades", "5,25€"]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  }
,
{
    "id": "resistance-crianca",
    "nome": "T-shirt ZAGREB",
    "referenciaNome": "ZAGREB",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "crianca",
    "descricao": "T-shirt ZAGREB disponível em 26 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-ZAG",
    "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [
          "#efeff3"
        ],
        "imagem": "/__l5e/assets-v1/216d75f1-82a2-47c5-b9df-730e60066a78/resistance-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [
          "#aba89a"
        ],
        "imagem": "/__l5e/assets-v1/c76e66ae-eac5-4a03-ad80-3ad767b153dc/resistance-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [
          "#543d34"
        ],
        "imagem": "/__l5e/assets-v1/b366a160-30dd-48f2-8721-a953356406f2/resistance-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [
          "#92b553"
        ],
        "imagem": "/__l5e/assets-v1/911351a2-97a0-4a63-a4ea-de77ffe6d32a/resistance-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [
          "#1a704e"
        ],
        "imagem": "/__l5e/assets-v1/3f63664e-f619-4f45-973d-5bb905ec0227/resistance-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [
          "#025443"
        ],
        "imagem": "/__l5e/assets-v1/070e1099-cd81-48da-a087-d944ac146d32/resistance-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [
          "#51553f"
        ],
        "imagem": "/__l5e/assets-v1/dd979047-fad3-4045-8730-9f70d1b1f099/resistance-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [
          "#9fba37"
        ],
        "imagem": "/__l5e/assets-v1/cbdc1ca0-b981-436d-9ac2-b6c53d1fea71/resistance-verde5.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [
          "#dcd71e"
        ],
        "imagem": "/__l5e/assets-v1/62c9d753-64b8-484b-809e-52fb0d0a93b7/resistance-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [
          "#f1db4c"
        ],
        "imagem": "/__l5e/assets-v1/e07f99a3-a5d7-4a05-9427-55150fc0877e/resistance-amarelo2.webp"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [
          "#f1b803"
        ],
        "imagem": "/__l5e/assets-v1/c9ed2f80-dd77-4028-baf7-06a5a5a49207/resistance-amarelo3.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [
          "#c4521d"
        ],
        "imagem": "/__l5e/assets-v1/a72bbdf4-d11c-45ba-9b70-62e809aab8cf/resistance-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c35923",
        "hexes": [
          "#c35923"
        ],
        "imagem": "/__l5e/assets-v1/6cc8b03b-6764-4a69-9b04-e7c6ae8c7449/resistance-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [
          "#8b1727"
        ],
        "imagem": "/__l5e/assets-v1/983a6613-81cf-495a-b0bb-797368c2f71c/resistance-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [
          "#eec3d4"
        ],
        "imagem": "/__l5e/assets-v1/bf1114b9-d7e6-4f78-97b4-2fbee0c1f5d6/resistance-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [
          "#c0437f"
        ],
        "imagem": "/__l5e/assets-v1/624c3978-e8e3-4147-86d5-7e6c365c88d0/resistance-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [
          "#c46097"
        ],
        "imagem": "/__l5e/assets-v1/cc4cb164-72f4-4195-b8a8-4f2c686a9319/resistance-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [
          "#503677"
        ],
        "imagem": "/__l5e/assets-v1/4b61784e-cf5a-4419-9834-6bbb9b008a85/resistance-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [
          "#272863"
        ],
        "imagem": "/__l5e/assets-v1/4c2abc52-2185-42d1-9f61-6e2cd2325e78/resistance-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [
          "#7ca4d1"
        ],
        "imagem": "/__l5e/assets-v1/e82bcc73-2ac7-4193-a577-574e1750da17/resistance-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [
          "#047db7"
        ],
        "imagem": "/__l5e/assets-v1/33d78303-da7e-400a-a8c6-3c5615995e78/resistance-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [
          "#205c95"
        ],
        "imagem": "/__l5e/assets-v1/e7c369e0-92f8-4394-8c5c-593250c97fe7/resistance-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [
          "#11324f"
        ],
        "imagem": "/__l5e/assets-v1/9fdc8544-55e2-4aed-99f5-3c7bca63f435/resistance-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [
          "#616976"
        ],
        "imagem": "/__l5e/assets-v1/f45d06ac-9d86-47fd-842a-fe17de3ee713/resistance-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#525159",
        "hexes": [
          "#525159"
        ],
        "imagem": "/__l5e/assets-v1/4f3180f6-f7df-4ca3-8698-7c578b38299c/resistance-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [
          "#342f2b"
        ],
        "imagem": "/__l5e/assets-v1/f3843ddd-f4d7-4050-addd-96c630da6fe8/resistance-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "50",
        "55",
        "60",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "37",
        "41",
        "45",
        "48",
        "51",
        "54",
        "57",
        "60",
        "63"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "leopard-crianca",
    "nome": "T-shirt HELSÍNQUIA",
    "referenciaNome": "HELSÍNQUIA",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "crianca",
    "descricao": "T-shirt HELSÍNQUIA disponível em 4 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#HEL-HEL",
    "imagem": "/__l5e/assets-v1/458eef55-1728-447a-8030-707750084547/leopard-verde.webp",
    "lifestyle": "/lifestyle/leopard.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#97ab70"
        ],
        "imagem": "/__l5e/assets-v1/458eef55-1728-447a-8030-707750084547/leopard-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#84454b"
        ],
        "imagem": "/__l5e/assets-v1/975d969d-f9ce-44a1-a709-c8e70f2ef897/leopard-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#516e8b"
        ],
        "imagem": "/__l5e/assets-v1/9c3d7397-8762-4cae-a08e-6150fc9b1bb8/leopard-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#514e4b"
        ],
        "imagem": "/__l5e/assets-v1/ad168f58-1d3d-48d1-9ba2-ade7ea56d8f7/leopard-preto.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "48",
        "54",
        "62",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "35",
        "40",
        "46",
        "49",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "maurice-crianca",
    "nome": "T-shirt MOSCOVO",
    "referenciaNome": "MOSCOVO",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "crianca",
    "descricao": "T-shirt MOSCOVO disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#DUB-DUB",
    "imagem": "/__l5e/assets-v1/a946776f-b459-40d2-946b-b756be7e7608/maurice-verde.webp",
    "lifestyle": "/lifestyle/maurice.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#a2c15c",
        "hexes": [
          "#a2c15c",
          "#8db650",
          "#33382c"
        ],
        "imagem": "/__l5e/assets-v1/a946776f-b459-40d2-946b-b756be7e7608/maurice-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#c85b2a",
        "hexes": [
          "#c85b2a",
          "#c54f20",
          "#382e28"
        ],
        "imagem": "/__l5e/assets-v1/0414a116-d100-49a7-8b2b-a99b73035fda/maurice-laranja.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#8d2429",
        "hexes": [
          "#8d2429",
          "#332d29",
          "#c5b5b4"
        ],
        "imagem": "/__l5e/assets-v1/81f7729a-5316-48b4-9017-e7aaaed0a89a/maurice-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#275d98",
        "hexes": [
          "#275d98",
          "#406b9f",
          "#312e2c"
        ],
        "imagem": "/__l5e/assets-v1/710e89f3-082a-448d-96fb-d99bc1556b96/maurice-azul.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#545359",
        "hexes": [
          "#545359",
          "#5c5d62",
          "#302d29"
        ],
        "imagem": "/__l5e/assets-v1/cfc12358-35d8-4e3e-bed4-bde686407172/maurice-cinzento.webp"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "10/12",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      [
        "Comprimento",
        "48",
        "54",
        "62",
        "66",
        "69",
        "72",
        "75",
        "78"
      ],
      [
        "Largura",
        "35",
        "41",
        "46",
        "50",
        "53",
        "56",
        "59",
        "62"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,00€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "+499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  }];

export function getCategoria(id: string): Categoria | undefined {
  return [...categorias, ...familias].find((c) => c.id === id);
}

export function getModelosPorCategoria(categoria: CategoriaId): Modelo[] {
  return modelos.filter((m) => {
    if (categoria === "homem" || categoria === "mulher") {
      const adulto = m.tamanhos[0]?.some((t) => ["XS", "S", "M", "L", "XL", "XXL", "3XL"].includes(t));
      if (!adulto) return false;
      const genero = m.genero ?? "unissexo";
      return genero === "unissexo" || genero === categoria;
    }
    if (categoria === "crianca") {
      return m.genero === "crianca";
    }
    return m.categoria === categoria;
  });
}

export function getModelo(id: string): Modelo | undefined {
  return modelos.find((m) => m.id === id);
}
