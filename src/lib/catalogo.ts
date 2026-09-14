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

/** Peça individual de um conjunto (ex.: T-shirt, calças). */
export type Peca = {
  nome: string;
  composicao: string;
  imagem: string;
  cores: Cor[];
  tamanhos: string[][];
  precos: [string, string][];
  referencia?: string;
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
  /** Peças que compõem o conjunto (opcional). */
  pecas?: Peca[];

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
    "id": "polos",
    "nome": "Polos",
    "titulo": "Polos",
    "descricao": "Polos em algodão e técnicos, com gola e botões.",
    "imagem": "/__l5e/assets-v1/4b207e39-c231-4545-b5d1-45ff824a1af7/kentuky-branco.webp",
    "subcategorias": [
      "Polos"
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
  { id: "brindes", nome: "Outros", titulo: "Outros", descricao: "Outros artigos para personalizar.", imagem: "", subcategorias: ["Coletes desportivos", "Sacos", "Cozinha", "Canecas", "Bases", "Jogos"] },
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
    "imagem": "/__l5e/assets-v1/aa79323b-1815-4aae-a0d8-9d9d23713003/lisboa-1.png",
    "lifestyle": "/lifestyle/racing.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/__l5e/assets-v1/aa79323b-1815-4aae-a0d8-9d9d23713003/lisboa-1.png"
      },
      {
        "nome": "Bege 1",
        "hex": "#f0ebd8",
        "hexes": [
          "#f0ebd8"
        ],
        "imagem": "/__l5e/assets-v1/b6527f24-7336-4797-9047-66d29e2d2c08/lisboa-2.png"
      },
      {
        "nome": "Bege 2",
        "hex": "#afac9d",
        "hexes": [
          "#afac9d"
        ],
        "imagem": "/__l5e/assets-v1/50808463-8b17-4363-8b44-de2e9cad131c/lisboa-3.png"
      },
      {
        "nome": "Castanho 1",
        "hex": "#a18b67",
        "hexes": [
          "#a18b67"
        ],
        "imagem": "/__l5e/assets-v1/c701edf5-edae-43a8-9a06-2629a3a838a8/lisboa-4.png"
      },
      {
        "nome": "Castanho 2",
        "hex": "#6e594b",
        "hexes": [
          "#6e594b"
        ],
        "imagem": "/__l5e/assets-v1/d4af67e1-7e09-4e3a-a631-7c7635ac92e6/lisboa-5.png"
      },
      {
        "nome": "Verde 1",
        "hex": "#96bb54",
        "hexes": [
          "#96bb54"
        ],
        "imagem": "/__l5e/assets-v1/361be716-a638-48d7-93ed-c999ab61dcc1/lisboa-6.png"
      },
      {
        "nome": "Verde 2",
        "hex": "#5ca144",
        "hexes": [
          "#5ca144"
        ],
        "imagem": "/__l5e/assets-v1/0c0a1072-5ec6-459a-85da-2a719718ec0f/lisboa-7.png"
      },
      {
        "nome": "Verde 3",
        "hex": "#197351",
        "hexes": [
          "#197351"
        ],
        "imagem": "/__l5e/assets-v1/1874d879-14e2-464a-9809-6e81711913d9/lisboa-8.png"
      },
      {
        "nome": "Verde 4",
        "hex": "#024a3b",
        "hexes": [
          "#024a3b"
        ],
        "imagem": "/__l5e/assets-v1/574ad066-9485-49fa-b8b9-604ce5a3fdf3/lisboa-9.png"
      },
      {
        "nome": "Verde 5",
        "hex": "#4e675d",
        "hexes": [
          "#4e675d"
        ],
        "imagem": "/__l5e/assets-v1/7f3275f9-360c-4ed7-8df8-cd8b18be99c5/lisboa-10.png"
      },
      {
        "nome": "Verde 6",
        "hex": "#53573f",
        "hexes": [
          "#53573f"
        ],
        "imagem": "/__l5e/assets-v1/30663fed-ec27-4c60-983a-659ed767a894/lisboa-11.png"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#f9e24d",
        "hexes": [
          "#f9e24d"
        ],
        "imagem": "/__l5e/assets-v1/db228014-6027-4a09-a6e3-ccf76ea66c2f/lisboa-12.png"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#e9bd19",
        "hexes": [
          "#e9bd19"
        ],
        "imagem": "/__l5e/assets-v1/a5527a93-833d-4e45-9307-45f8cc5e6402/lisboa-13.png"
      },
      {
        "nome": "Laranja 1",
        "hex": "#df9f1d",
        "hexes": [
          "#df9f1d"
        ],
        "imagem": "/__l5e/assets-v1/7482996b-aa50-4ffc-811f-5af5fda41bc7/lisboa-14.png"
      },
      {
        "nome": "Laranja 2",
        "hex": "#c9541d",
        "hexes": [
          "#c9541d"
        ],
        "imagem": "/__l5e/assets-v1/edca8795-ddcc-402f-ad77-4f469c142757/lisboa-15.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#90162a",
        "hexes": [
          "#90162a"
        ],
        "imagem": "/__l5e/assets-v1/d90ad0b9-e9c2-45b8-95bd-53ed97c241fe/lisboa-16.png"
      },
      {
        "nome": "Rosa 1",
        "hex": "#6d1034",
        "hexes": [
          "#6d1034"
        ],
        "imagem": "/__l5e/assets-v1/38798ae1-0c57-482f-86c4-ce8d7d46f385/lisboa-17.png"
      },
      {
        "nome": "Rosa 2",
        "hex": "#e9c8d8",
        "hexes": [
          "#e9c8d8"
        ],
        "imagem": "/__l5e/assets-v1/70e58bc2-3bb6-4bf6-864d-9cf4dbfffe6d/lisboa-18.png"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c74283",
        "hexes": [
          "#c74283"
        ],
        "imagem": "/__l5e/assets-v1/2870b867-f2ed-4a08-8aca-d81c10115baa/lisboa-19.png"
      },
      {
        "nome": "Roxo 1",
        "hex": "#7d7fb2",
        "hexes": [
          "#7d7fb2"
        ],
        "imagem": "/__l5e/assets-v1/26c2b8cf-27a9-4ee0-b378-681b8dc1db49/lisboa-20.png"
      },
      {
        "nome": "Roxo 2",
        "hex": "#53387a",
        "hexes": [
          "#53387a"
        ],
        "imagem": "/__l5e/assets-v1/3244b508-0677-4505-a125-ba907d3c3140/lisboa-21.png"
      },
      {
        "nome": "Roxo 3",
        "hex": "#351a53",
        "hexes": [
          "#351a53"
        ],
        "imagem": "/__l5e/assets-v1/4b9f9674-0cee-4cea-9737-ec7fcf0f112e/lisboa-22.png"
      },
      {
        "nome": "Azul 1",
        "hex": "#9ab7dc",
        "hexes": [
          "#9ab7dc"
        ],
        "imagem": "/__l5e/assets-v1/8eb022a2-b4ad-4a98-98c4-82b943ba8e1c/lisboa-23.png"
      },
      {
        "nome": "Azul 2",
        "hex": "#0490cb",
        "hexes": [
          "#0490cb"
        ],
        "imagem": "/__l5e/assets-v1/e2649ed3-7927-4dae-930a-a400ae328e9a/lisboa-24.png"
      },
      {
        "nome": "Azul 3",
        "hex": "#215d98",
        "hexes": [
          "#215d98"
        ],
        "imagem": "/__l5e/assets-v1/cc7d2835-a295-4cb8-b057-95fa55448529/lisboa-25.png"
      },
      {
        "nome": "Azul 4",
        "hex": "#5475a8",
        "hexes": [
          "#5475a8"
        ],
        "imagem": "/__l5e/assets-v1/63142417-db71-4082-8a57-8c7e9c396734/lisboa-26.png"
      },
      {
        "nome": "Azul 5",
        "hex": "#263962",
        "hexes": [
          "#263962"
        ],
        "imagem": "/__l5e/assets-v1/71320613-4697-4377-ac51-08c49d5203ed/lisboa-27.png"
      },
      {
        "nome": "Azul 6",
        "hex": "#144267",
        "hexes": [
          "#144267"
        ],
        "imagem": "/__l5e/assets-v1/5a72e232-6e7f-4595-943c-e756aaf87a06/lisboa-28.png"
      },
      {
        "nome": "Azul 7",
        "hex": "#0a3755",
        "hexes": [
          "#0a3755"
        ],
        "imagem": "/__l5e/assets-v1/031bf332-0564-4b99-987a-905f0e5cd3a0/lisboa-29.png"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#777c90",
        "hexes": [
          "#777c90"
        ],
        "imagem": "/__l5e/assets-v1/ac29ad62-99cd-4c4b-af69-25b6da4e62f6/lisboa-30.png"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#e6e5eb",
        "hexes": [
          "#e6e5eb"
        ],
        "imagem": "/__l5e/assets-v1/86177454-d104-471e-a551-0971e3a11155/lisboa-31.png"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#b5b3bf",
        "hexes": [
          "#b5b3bf"
        ],
        "imagem": "/__l5e/assets-v1/b1d9317e-e588-4430-9611-7f1d193a892d/lisboa-32.png"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#646c79",
        "hexes": [
          "#646c79"
        ],
        "imagem": "/__l5e/assets-v1/d8744c6b-92a3-485c-9cdb-5af67b6c593a/lisboa-33.png"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#58575d",
        "hexes": [
          "#58575d"
        ],
        "imagem": "/__l5e/assets-v1/bf246fec-8d02-4e27-b592-484d6ddb7d48/lisboa-34.png"
      },
      {
        "nome": "Preto",
        "hex": "#332e2a",
        "hexes": [
          "#332e2a"
        ],
        "imagem": "/__l5e/assets-v1/650a88a8-e9e2-4421-b6ec-81673829dc11/lisboa-35.png"
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
        "Mais de 499 unidades",
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
        "Mais de 499 unidades",
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
        "Mais de 499 unidades",
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
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#TIR-TIR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "70",
        "72",
        "74",
        "76",
        "78"
      ],
      [
        "Largura",
        "49",
        "52",
        "55",
        "58",
        "62"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#VIE-VIE",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "64",
        "68",
        "72",
        "76",
        "80",
        "84"
      ],
      [
        "Largura",
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
        "0–99 unidades",
        "12,50€"
      ],
      [
        "100–499 unidades",
        "11,50€"
      ],
      [
        "Mais de 499 unidades",
        "9,75€"
      ]
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
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#PAR-PAR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "53",
        "56",
        "59",
        "62",
        "65",
        "68"
      ],
      [
        "Largura peito",
        "39",
        "42",
        "45",
        "48",
        "51",
        "54"
      ],
      [
        "Largura cintura",
        "35",
        "38",
        "41",
        "44",
        "46",
        "48"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "composicao": "95% Algodão, 5% Elastano, Densidade: 190 g/m²",
    "referencia": "#BER-BER",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "53",
        "56",
        "59",
        "62",
        "65",
        "68"
      ],
      [
        "Largura peito",
        "38",
        "41",
        "44",
        "47",
        "50",
        "53"
      ],
      [
        "Largura cintura",
        "34",
        "37",
        "40",
        "43",
        "45",
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
        "10,50€"
      ],
      [
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "descricao": "T-shirt ZAGREB disponível em 24 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-ZAG",
    "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/8472cb04-371b-414d-8617-c97ff1654620/zagreb-19.png"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/71f9b5a2-4635-4ed0-babf-cc8c9ead13aa/zagreb-20.png"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/34ba5e0c-add4-4bd0-89f9-e10aeec0d8cc/zagreb-21.png"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3efa9028-5646-4035-bf92-70ca1baa3227/zagreb-22.png"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/5bc0fbf1-cfe2-43d4-901a-767f377329cd/zagreb-14.png"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/397a1b12-e9e9-4e58-9d4c-2f383b2b73c3/zagreb-13.png"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/d6cd94ab-13c5-4cc6-967d-cf1b7d203be7/zagreb-12.png"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/cd9cc272-c81d-44f9-9146-20148abbf308/zagreb-11.png"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c43c474c-ec1f-4fb7-a58b-426083b2b241/zagreb-10.png"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2cee2b29-66cb-45d2-b96b-def28bbd8f33/zagreb-5.png"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1129ca87-b5d7-4b91-8fb9-83b30f8d28e8/zagreb-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c47425e8-67c9-4914-96d2-a1a4c31d3e9b/zagreb-3.png"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2dd631aa-f87a-42c5-8f00-02c627a3fbd0/zagreb-2.png"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1c8dd78c-9f37-4588-8d06-64914d17cb44/zagreb-1.png"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/9ce57c33-2c45-44b7-b0d6-44ad8205ff2b/zagreb-23.png"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abcc5a44-7d9a-4600-946b-d17034d3af66/zagreb-18.png"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abfe831b-d352-4c75-962d-bf22b6d9b55d/zagreb-17.png"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/f709a41a-0f6d-436c-ba5a-29d1e763f4cd/zagreb-16.png"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3f41ad4c-d2a5-4f30-9ccd-f7e3df93e823/zagreb-15.png"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/4bdc7d42-4c42-4eea-9ec7-c1fa1791f71e/zagreb-9.png"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/fb3859c2-419d-4571-b487-829fa69d08fa/zagreb-7.png"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a3202a03-1f22-4e9b-9d46-e02c3f55b872/zagreb-8.png"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3dee18a7-2335-4999-9f2a-f5ab1bb2c0a6/zagreb-6.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/bea9f71a-db83-4911-9cb0-acc0485c6ea5/copenhaga-5.png",
    "lifestyle": "/lifestyle/rockspeed.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#e8e8e8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/bea9f71a-db83-4911-9cb0-acc0485c6ea5/copenhaga-5.png"
      },
      {
        "nome": "Verde",
        "hex": "#88b848",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/fb22774d-238a-4de7-b33f-4ea289fecd09/copenhaga-4.png"
      },
      {
        "nome": "Amarelo",
        "hex": "#e8d808",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/238d19c8-a32b-43e8-94ba-9b7ec63e425b/copenhaga-3.png"
      },
      {
        "nome": "Rosa",
        "hex": "#e898b8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1db8da2f-0a91-4b2a-b8aa-2ac414bbd9bb/copenhaga-2.png"
      },
      {
        "nome": "Azul",
        "hex": "#0888c8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/0ed3499e-c8fb-4b24-8c5d-8a4e365249de/copenhaga-1.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/cc8a9651-b300-4343-a886-b9f773ef66b6/bratislava-2.png",
    "lifestyle": "/lifestyle/brickplus.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f0f2f2",
        "hexes": [
          "#f0f2f2",
          "#78a838"
        ],
        "imagem": "/__l5e/assets-v1/cc8a9651-b300-4343-a886-b9f773ef66b6/bratislava-2.png"
      },
      {
        "nome": "Amarelo",
        "hex": "#f0f2f2",
        "hexes": [
          "#f0f2f2",
          "#c8c808"
        ],
        "imagem": "/__l5e/assets-v1/57593b04-e03d-4d74-afc8-fc63bba45c74/bratislava-3.png"
      },
      {
        "nome": "Laranja",
        "hex": "#f0f2f2",
        "hexes": [
          "#f0f2f2",
          "#c84808"
        ],
        "imagem": "/__l5e/assets-v1/8939c34a-b050-449b-b04e-726247a222a9/bratislava-1.png"
      },
      {
        "nome": "Rosa",
        "hex": "#f0f2f2",
        "hexes": [
          "#f0f2f2",
          "#d84878"
        ],
        "imagem": "/__l5e/assets-v1/0d3bf5e7-17e5-46fe-852d-4457560d1175/bratislava-4.png"
      },
      {
        "nome": "Preto",
        "hex": "#f0f2f2",
        "hexes": [
          "#f0f2f2",
          "#3a332e"
        ],
        "imagem": "/__l5e/assets-v1/8133fdac-9707-492f-a443-cc49247a9027/bratislava-5.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/c2d5f353-c871-4d26-9fca-3fbd34c0f428/helsinquia-4.png",
    "lifestyle": "/lifestyle/leopard.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#689838"
        ],
        "imagem": "/__l5e/assets-v1/c2d5f353-c871-4d26-9fca-3fbd34c0f428/helsinquia-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#980818"
        ],
        "imagem": "/__l5e/assets-v1/43962334-3136-4a1e-a791-688dca56f235/helsinquia-3.png"
      },
      {
        "nome": "Azul",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#085898"
        ],
        "imagem": "/__l5e/assets-v1/9a046c16-f335-47b8-9893-a03e47f790ed/helsinquia-2.png"
      },
      {
        "nome": "Preto",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#181818"
        ],
        "imagem": "/__l5e/assets-v1/047cb56f-ba31-4763-9e37-e37b9ab5600d/helsinquia-1.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/3d4760fa-28ca-4c8e-8c66-9dbf04567f1e/moscovo-5.png",
    "lifestyle": "/lifestyle/maurice.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#98b858",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3d4760fa-28ca-4c8e-8c66-9dbf04567f1e/moscovo-5.png"
      },
      {
        "nome": "Laranja",
        "hex": "#c85828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/7c7b8ca2-46fc-4f97-a7e0-c5f924317f77/moscovo-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#881828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/74a94a6b-cb3e-4c4c-9de4-6a7e9b67c823/moscovo-3.png"
      },
      {
        "nome": "Azul",
        "hex": "#285898",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/96c0495a-7611-4215-8895-f6821b7556cd/moscovo-2.png"
      },
      {
        "nome": "Cinzento",
        "hex": "#585858",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e0550993-1bad-4316-8ed6-0d02c8572a32/moscovo-1.png"
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
        "Mais de 499 unidades",
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
    "composicao": "77% Poliamida, 23% Poliéster, Densidade: 180 g/m²",
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
        "Mais de 499 unidades",
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
    "composicao": "90% Poliamida, 10% Elastano, Densidade: 230 g/m²",
    "referencia": "#MEL-MEL",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "3XL",
        "4XL"
      ],
      [
        "Comprimento",
        "56",
        "59",
        "62",
        "65",
        "68",
        "70",
        "72"
      ],
      [
        "Largura",
        "35",
        "38",
        "40",
        "43",
        "45",
        "47",
        "49"
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
        "Mais de 499 unidades",
        "12,25€"
      ]
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
        "Mais de 249 unidades",
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
        "Mais de 249 unidades",
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
        "Mais de 249 unidades",
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
        "Mais de 249 unidades",
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
    "composicao": "100% Algodão, Densidade: 220 g/m²",
    "referencia": "#CAR-CAR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "3",
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
        "46",
        "51",
        "55",
        "60",
        "65",
        "69",
        "73",
        "77",
        "81",
        "84",
        "87"
      ],
      [
        "Largura",
        "36",
        "39",
        "42",
        "45",
        "48",
        "52",
        "56",
        "59",
        "62",
        "65",
        "68"
      ]
    ],
    "precos": [
      [
        "0–49 unidades",
        "15,50€"
      ],
      [
        "50–249 unidades",
        "14,50€"
      ],
      [
        "Mais de 249 unidades",
        "12,75€"
      ]
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
    "composicao": "100% Algodão, Densidade: 220 g/m²",
    "referencia": "#SUC-SUC",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "59",
        "62",
        "65",
        "68",
        "71"
      ],
      [
        "Largura peito",
        "46",
        "48",
        "50",
        "52",
        "55",
        "58"
      ],
      [
        "Largura cintura",
        "40",
        "42",
        "44",
        "46",
        "49",
        "52"
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
        "Mais de 249 unidades",
        "12,50€"
      ]
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
        "Mais de 249 unidades",
        "12,50€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Densidade: 220 g/m²"
    ]
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
        "46",
        "51",
        "53",
        "61",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "35",
        "39",
        "43",
        "47",
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
        "Mais de 249 unidades",
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
        "46",
        "51",
        "53",
        "61",
        "66",
        "69",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "35",
        "39",
        "43",
        "47",
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
        "Mais de 249 unidades",
        "17,50€"
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
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "46",
        "53",
        "58",
        "62",
        "65",
        "68",
        "71",
        "73",
        "75"
      ],
      [
        "Largura",
        "40",
        "44",
        "48",
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
        "21,00€"
      ],
      [
        "50–249 unidades",
        "19,50€"
      ],
      [
        "Mais de 249 unidades",
        "18,00€"
      ]
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
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "4/5",
        "6/8",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "46",
        "53",
        "58",
        "62",
        "65",
        "68",
        "71",
        "73",
        "75"
      ],
      [
        "Largura",
        "40",
        "44",
        "48",
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
        "21,00€"
      ],
      [
        "50–249 unidades",
        "19,50€"
      ],
      [
        "Mais de 249 unidades",
        "18,00€"
      ]
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
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "75",
        "78",
        "81"
      ],
      [
        "Largura",
        "53",
        "56",
        "59",
        "62",
        "65",
        "68"
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
        "Mais de 249 unidades",
        "17,00€"
      ]
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
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "XXL",
        "3XL"
      ],
      [
        "Comprimento",
        "59",
        "63",
        "66",
        "69",
        "72",
        "75",
        "77"
      ],
      [
        "Largura",
        "48",
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
        "21,00€"
      ],
      [
        "50–249 unidades",
        "19,50€"
      ],
      [
        "Mais de 249 unidades",
        "18,00€"
      ]
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
    "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
    "referencia": "#BIS-BIS",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "Mais de 249 unidades",
        "17,00€"
      ]
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
    "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
    "referencia": "#DAC-DAC",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "53",
        "56",
        "59",
        "62",
        "65",
        "68"
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
        "Mais de 249 unidades",
        "17,00€"
      ]
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
        "Mais de 249 unidades",
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
    "composicao": "Interior: 100% Poliéster (225 g/m²) · Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
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
        "Mais de 249 unidades",
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
    "composicao": "Interior: 100% Poliéster (200 g/m²) · Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
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
        "Mais de 249 unidades",
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
    "nome": "Jaqueta MAPUTO",
    "referenciaNome": "MAPUTO",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta MAPUTO disponível em 2 cores. Interior: 100% Poliéster (220 g/m²)",
    "composicao": "Interior: 100% Poliéster (220 g/m²) · Exterior: 100% Poliéster (160 g/m²)",
    "referencia": "#MAP-MAP",
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
        "Mais de 249 unidades",
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
    "descricao": "T-shirt ZAGREB disponível em 24 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-MUL",
    "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/8472cb04-371b-414d-8617-c97ff1654620/zagreb-19.png"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/71f9b5a2-4635-4ed0-babf-cc8c9ead13aa/zagreb-20.png"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/34ba5e0c-add4-4bd0-89f9-e10aeec0d8cc/zagreb-21.png"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3efa9028-5646-4035-bf92-70ca1baa3227/zagreb-22.png"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/5bc0fbf1-cfe2-43d4-901a-767f377329cd/zagreb-14.png"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/397a1b12-e9e9-4e58-9d4c-2f383b2b73c3/zagreb-13.png"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/d6cd94ab-13c5-4cc6-967d-cf1b7d203be7/zagreb-12.png"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/cd9cc272-c81d-44f9-9146-20148abbf308/zagreb-11.png"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c43c474c-ec1f-4fb7-a58b-426083b2b241/zagreb-10.png"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2cee2b29-66cb-45d2-b96b-def28bbd8f33/zagreb-5.png"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1129ca87-b5d7-4b91-8fb9-83b30f8d28e8/zagreb-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c47425e8-67c9-4914-96d2-a1a4c31d3e9b/zagreb-3.png"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2dd631aa-f87a-42c5-8f00-02c627a3fbd0/zagreb-2.png"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1c8dd78c-9f37-4588-8d06-64914d17cb44/zagreb-1.png"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/9ce57c33-2c45-44b7-b0d6-44ad8205ff2b/zagreb-23.png"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abcc5a44-7d9a-4600-946b-d17034d3af66/zagreb-18.png"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abfe831b-d352-4c75-962d-bf22b6d9b55d/zagreb-17.png"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/f709a41a-0f6d-436c-ba5a-29d1e763f4cd/zagreb-16.png"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3f41ad4c-d2a5-4f30-9ccd-f7e3df93e823/zagreb-15.png"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/4bdc7d42-4c42-4eea-9ec7-c1fa1791f71e/zagreb-9.png"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/fb3859c2-419d-4571-b487-829fa69d08fa/zagreb-7.png"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a3202a03-1f22-4e9b-9d46-e02c3f55b872/zagreb-8.png"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3dee18a7-2335-4999-9f2a-f5ab1bb2c0a6/zagreb-6.png"
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
        "Mais de 499 unidades",
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
    "descricao": "T-shirt ATENAS — modelo disponível em 4 cores.",
    "composicao": "100% Poliéster, Densidade: 180 g/m²",
    "referencia": "#ATE-ATE",
    "imagem": "/__l5e/assets-v1/698bee58-9fd3-45e3-a306-242bf2ff1965/atenas-1.png",
    "cores": [
      {
        "nome": "Cinzento",
        "hex": "#484848",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/698bee58-9fd3-45e3-a306-242bf2ff1965/atenas-1.png"
      },
      {
        "nome": "Verde Escuro",
        "hex": "#383818",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c6914c5a-613c-474a-bcf5-2a8d5b8f6bcb/atenas-2.png"
      },
      {
        "nome": "Rosa",
        "hex": "#d86898",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1576718a-4321-41a3-baf0-1ef9dffb7757/atenas-3.png"
      },
      {
        "nome": "Lilás",
        "hex": "#b8a8c8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/52d6096a-5ced-4f25-a746-5ba0ad5fd95d/atenas-4.png"
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
        "51",
        "53",
        "55",
        "58",
        "60",
        "63"
      ],
      [
        "Largura",
        "37",
        "40",
        "42",
        "45",
        "47",
        "50"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
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
        "Mais de 499 unidades",
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
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#VIE",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "64",
        "68",
        "72",
        "76",
        "80",
        "84"
      ],
      [
        "Largura",
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
        "0–99 unidades",
        "12,50€"
      ],
      [
        "100–499 unidades",
        "11,50€"
      ],
      [
        "Mais de 499 unidades",
        "9,75€"
      ]
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
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#BRU",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "2",
        "3",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14"
      ],
      [
        "Comprimento",
        "38",
        "42",
        "45",
        "49",
        "52",
        "56",
        "59",
        "63"
      ],
      [
        "Largura",
        "30",
        "32",
        "33",
        "36",
        "38",
        "41",
        "43",
        "46"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,50€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "descricao": "T-shirt BAKU — modelo de criança disponível em 7 cores.",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#BAK",
    "imagem": "/__l5e/assets-v1/780b9800-b5d8-4043-80e3-5b396b73ae98/baku-1.png",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#f8f8f8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/780b9800-b5d8-4043-80e3-5b396b73ae98/baku-1.png"
      },
      {
        "nome": "Verde",
        "hex": "#086848",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/26af46cd-5b13-46e8-b5de-f7ad8cadd047/baku-2.png"
      },
      {
        "nome": "Laranja",
        "hex": "#c86808",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/df2dbb3a-95f6-47a7-a812-65667acb9f2a/baku-3.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#781828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1899f16f-a383-4b0d-846d-b37c25cebf14/baku-4.png"
      },
      {
        "nome": "Azul",
        "hex": "#085888",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3ff0a47e-6c0b-499a-82ac-5774b1fdea87/baku-5.png"
      },
      {
        "nome": "Azul Escuro",
        "hex": "#082848",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/df971fde-0631-4173-b167-459a9e07412a/baku-6.png"
      },
      {
        "nome": "Preto",
        "hex": "#282818",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/782a1ffc-8dad-46e6-a021-e3a373110fd9/baku-7.png"
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
        "44",
        "47",
        "50",
        "54",
        "57",
        "60"
      ],
      [
        "Largura",
        "32",
        "35",
        "37",
        "40",
        "42",
        "45"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,50€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "descricao": "T-shirt OSLO — modelo de criança disponível em 5 cores.",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#OSL",
    "imagem": "/__l5e/assets-v1/a9c7c0f2-9519-4eea-bd2c-55f4ec29833c/oslo-1.png",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#f8f8f8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a9c7c0f2-9519-4eea-bd2c-55f4ec29833c/oslo-1.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#881828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/d0d854bb-05d7-4a05-995c-0edddf586180/oslo-2.png"
      },
      {
        "nome": "Azul",
        "hex": "#085898",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a97db265-fee0-4ba0-9a82-dca68b01cf66/oslo-3.png"
      },
      {
        "nome": "Preto",
        "hex": "#282828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/9ea2a8d0-a57c-43a6-a4c5-6c15f25311bd/oslo-4.png"
      },
      {
        "nome": "Azul Escuro",
        "hex": "#083858",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e16c8223-3727-44a3-ac97-42c53392de92/oslo-5.png"
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
        "45",
        "49",
        "52",
        "56",
        "59",
        "63"
      ],
      [
        "Largura",
        "33",
        "36",
        "38",
        "41",
        "43",
        "46"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "11,00€"
      ],
      [
        "100–499 unidades",
        "10,50€"
      ],
      [
        "Mais de 499 unidades",
        "9,75€"
      ]
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
    "descricao": "T-shirt SARAVEJO — modelo de criança disponível em 5 cores.",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#SAR",
    "imagem": "/__l5e/assets-v1/4b4f6f8b-ebed-4685-8e69-31ed71e22fae/saravejo-1.png",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#f8f8f8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/4b4f6f8b-ebed-4685-8e69-31ed71e22fae/saravejo-1.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#881828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/b6e77635-d64f-4b76-8ff1-9f4f567786b1/saravejo-2.png"
      },
      {
        "nome": "Rosa Claro",
        "hex": "#e8c8d8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/ab1015a5-cc71-4d76-83d0-c2c27ca3cf07/saravejo-3.png"
      },
      {
        "nome": "Preto",
        "hex": "#282818",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/6cd5e17e-1607-4dc5-8427-b88eb3fe6d36/saravejo-4.png"
      },
      {
        "nome": "Rosa",
        "hex": "#b85888",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/f740cbd4-e705-4d3f-95d8-082a7bf38433/saravejo-5.png"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "2",
        "3",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14"
      ],
      [
        "Comprimento",
        "37",
        "40",
        "44",
        "47",
        "51",
        "54",
        "58",
        "61"
      ],
      [
        "Largura",
        "28",
        "30",
        "31",
        "34",
        "36",
        "39",
        "41",
        "44"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "10,50€"
      ],
      [
        "100–499 unidades",
        "9,50€"
      ],
      [
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "descricao": "Body SÓFIA — modelo de criança disponível em 3 cores.",
    "composicao": "100% Algodão, Densidade: 210 g/m²",
    "referencia": "#SOF-SOF",
    "imagem": "/__l5e/assets-v1/b5778fc0-9542-4b92-bd47-8c98af392777/sofia-3.png",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#e8e8e8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/b5778fc0-9542-4b92-bd47-8c98af392777/sofia-3.png"
      },
      {
        "nome": "Azul Claro",
        "hex": "#88a8c8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a0cdadf6-441f-461e-a002-f5fb4d01611e/sofia-1.png"
      },
      {
        "nome": "Rosa Claro",
        "hex": "#e8c8d8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/85389146-2607-488b-94e2-50d33a55c2ef/sofia-2.png"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "0/6M",
        "6/12M",
        "12/18M",
        "18/24M"
      ],
      [
        "Comprimento",
        "35",
        "40",
        "45",
        "50"
      ],
      [
        "Largura",
        "21",
        "23",
        "25",
        "27"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
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
    "descricao": "Body RIGA — modelo de criança disponível em 1 cor.",
    "composicao": "100% Algodão, Densidade: 210 g/m²",
    "referencia": "#RIG-RIG",
    "imagem": "/__l5e/assets-v1/76fa6a47-125a-427e-9589-c05a946c762b/riga-1.png",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#e8e8e8",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/76fa6a47-125a-427e-9589-c05a946c762b/riga-1.png"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "0/6M",
        "6/12M",
        "12/18M",
        "18/24M"
      ],
      [
        "Comprimento",
        "35",
        "40",
        "45",
        "50"
      ],
      [
        "Largura",
        "21",
        "23",
        "25",
        "27"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Algodão",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "resistance-crianca",
    "nome": "T-shirt ZAGREB",
    "referenciaNome": "ZAGREB",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "genero": "crianca",
    "descricao": "T-shirt ZAGREB disponível em 24 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ZAG-ZAG",
    "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png",
    "lifestyle": "/lifestyle/resistance.jpg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#efeff3",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e7b6f801-7e45-41f5-8496-e5cfe4cc7d5e/zagreb-24.png"
      },
      {
        "nome": "Bege",
        "hex": "#aba89a",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/8472cb04-371b-414d-8617-c97ff1654620/zagreb-19.png"
      },
      {
        "nome": "Castanho",
        "hex": "#543d34",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/71f9b5a2-4635-4ed0-babf-cc8c9ead13aa/zagreb-20.png"
      },
      {
        "nome": "Verde 1",
        "hex": "#92b553",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/34ba5e0c-add4-4bd0-89f9-e10aeec0d8cc/zagreb-21.png"
      },
      {
        "nome": "Verde 2",
        "hex": "#1a704e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3efa9028-5646-4035-bf92-70ca1baa3227/zagreb-22.png"
      },
      {
        "nome": "Verde 3",
        "hex": "#025443",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/5bc0fbf1-cfe2-43d4-901a-767f377329cd/zagreb-14.png"
      },
      {
        "nome": "Verde 4",
        "hex": "#51553f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/397a1b12-e9e9-4e58-9d4c-2f383b2b73c3/zagreb-13.png"
      },
      {
        "nome": "Verde 5",
        "hex": "#9fba37",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/d6cd94ab-13c5-4cc6-967d-cf1b7d203be7/zagreb-12.png"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#dcd71e",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/cd9cc272-c81d-44f9-9146-20148abbf308/zagreb-11.png"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#f1db4c",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c43c474c-ec1f-4fb7-a58b-426083b2b241/zagreb-10.png"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#f1b803",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2cee2b29-66cb-45d2-b96b-def28bbd8f33/zagreb-5.png"
      },
      {
        "nome": "Laranja 1",
        "hex": "#c4521d",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1129ca87-b5d7-4b91-8fb9-83b30f8d28e8/zagreb-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#8b1727",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/c47425e8-67c9-4914-96d2-a1a4c31d3e9b/zagreb-3.png"
      },
      {
        "nome": "Rosa 1",
        "hex": "#eec3d4",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/2dd631aa-f87a-42c5-8f00-02c627a3fbd0/zagreb-2.png"
      },
      {
        "nome": "Rosa 2",
        "hex": "#c0437f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/1c8dd78c-9f37-4588-8d06-64914d17cb44/zagreb-1.png"
      },
      {
        "nome": "Rosa 3",
        "hex": "#c46097",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/9ce57c33-2c45-44b7-b0d6-44ad8205ff2b/zagreb-23.png"
      },
      {
        "nome": "Roxo 1",
        "hex": "#503677",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abcc5a44-7d9a-4600-946b-d17034d3af66/zagreb-18.png"
      },
      {
        "nome": "Roxo 2",
        "hex": "#272863",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/abfe831b-d352-4c75-962d-bf22b6d9b55d/zagreb-17.png"
      },
      {
        "nome": "Azul 1",
        "hex": "#7ca4d1",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/f709a41a-0f6d-436c-ba5a-29d1e763f4cd/zagreb-16.png"
      },
      {
        "nome": "Azul 2",
        "hex": "#047db7",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3f41ad4c-d2a5-4f30-9ccd-f7e3df93e823/zagreb-15.png"
      },
      {
        "nome": "Azul 3",
        "hex": "#205c95",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/4bdc7d42-4c42-4eea-9ec7-c1fa1791f71e/zagreb-9.png"
      },
      {
        "nome": "Azul 4",
        "hex": "#11324f",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/fb3859c2-419d-4571-b487-829fa69d08fa/zagreb-7.png"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#616976",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/a3202a03-1f22-4e9b-9d46-e02c3f55b872/zagreb-8.png"
      },
      {
        "nome": "Preto",
        "hex": "#342f2b",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3dee18a7-2335-4999-9f2a-f5ab1bb2c0a6/zagreb-6.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/c2d5f353-c871-4d26-9fca-3fbd34c0f428/helsinquia-4.png",
    "lifestyle": "/lifestyle/leopard.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#689838"
        ],
        "imagem": "/__l5e/assets-v1/c2d5f353-c871-4d26-9fca-3fbd34c0f428/helsinquia-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#980818"
        ],
        "imagem": "/__l5e/assets-v1/43962334-3136-4a1e-a791-688dca56f235/helsinquia-3.png"
      },
      {
        "nome": "Azul",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#085898"
        ],
        "imagem": "/__l5e/assets-v1/9a046c16-f335-47b8-9893-a03e47f790ed/helsinquia-2.png"
      },
      {
        "nome": "Preto",
        "hex": "#f1f1f1",
        "hexes": [
          "#f1f1f1",
          "#181818"
        ],
        "imagem": "/__l5e/assets-v1/047cb56f-ba31-4763-9e37-e37b9ab5600d/helsinquia-1.png"
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
        "Mais de 499 unidades",
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
    "imagem": "/__l5e/assets-v1/3d4760fa-28ca-4c8e-8c66-9dbf04567f1e/moscovo-5.png",
    "lifestyle": "/lifestyle/maurice.jpg",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#98b858",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/3d4760fa-28ca-4c8e-8c66-9dbf04567f1e/moscovo-5.png"
      },
      {
        "nome": "Laranja",
        "hex": "#c85828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/7c7b8ca2-46fc-4f97-a7e0-c5f924317f77/moscovo-4.png"
      },
      {
        "nome": "Vermelho",
        "hex": "#881828",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/74a94a6b-cb3e-4c4c-9de4-6a7e9b67c823/moscovo-3.png"
      },
      {
        "nome": "Azul",
        "hex": "#285898",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/96c0495a-7611-4215-8895-f6821b7556cd/moscovo-2.png"
      },
      {
        "nome": "Cinzento",
        "hex": "#585858",
        "hexes": [],
        "imagem": "/__l5e/assets-v1/e0550993-1bad-4316-8ed6-0d02c8572a32/moscovo-1.png"
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
        "Mais de 499 unidades",
        "8,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Densidade: 145 g/m²"
    ]
  },
  {
    "id": "pequim",
    "nome": "Conjunto PEQUIM",
    "referenciaNome": "PEQUIM",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto PEQUIM em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "T-shirt: 100% Algodão (160 g/m²) · Calças: 65% Poliéster, 35% Algodão (220 g/m²)",
    "referencia": "#PEQ-PEQ",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "100% Algodão, Densidade: 160 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "64",
            "68",
            "72",
            "76",
            "80"
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
            "30,00€"
          ],
          [
            "100–499 unidades",
            "28,50€"
          ],
          [
            "Mais de 499 unidades",
            "27,00€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "65% Poliéster, 35% Algodão, Densidade: 220 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "103",
            "105",
            "107",
            "109",
            "111",
            "113"
          ],
          [
            "Equivalência",
            "37-38-39",
            "40-41-42",
            "43-44-45",
            "46-47-48",
            "49-50-51",
            "52-53-54"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "30,00€"
          ],
          [
            "100–499 unidades",
            "28,50€"
          ],
          [
            "Mais de 499 unidades",
            "27,00€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "81",
        "84"
      ],
      [
        "Largura",
        "49",
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
        "0–99 unidades",
        "30,00€"
      ],
      [
        "100–499 unidades",
        "28,50€"
      ],
      [
        "Mais de 499 unidades",
        "27,00€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "jacarta",
    "nome": "Conjunto JACARTA",
    "referenciaNome": "JACARTA",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto JACARTA em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 250 g/m²",
    "referencia": "#JAC-JAC",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "100% Poliéster, Densidade: 250 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
          }
        ],
        "tamanhos": [
          [
            "Tamanho",
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
            "46",
            "51",
            "56",
            "61",
            "65",
            "68",
            "71",
            "74",
            "77",
            "80"
          ],
          [
            "Largura",
            "36",
            "40",
            "44",
            "46",
            "53",
            "56",
            "59",
            "62",
            "65",
            "68"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "30,00€"
          ],
          [
            "100–499 unidades",
            "27,50€"
          ],
          [
            "Mais de 499 unidades",
            "25,75€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "100% Poliéster, Densidade: 250 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
          }
        ],
        "tamanhos": [
          [
            "Tamanho",
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
            "58",
            "69",
            "81",
            "92",
            "103",
            "106",
            "109",
            "112",
            "115",
            "118"
          ],
          [
            "Equivalência",
            "25-26-27",
            "28-29-30",
            "31-32-33",
            "34-35-36",
            "37-38-39",
            "40-41-42",
            "43-44-45",
            "46-47-48",
            "49-50-51",
            "52-53-54"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "30,00€"
          ],
          [
            "100–499 unidades",
            "27,50€"
          ],
          [
            "Mais de 499 unidades",
            "25,75€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "81",
        "84"
      ],
      [
        "Largura",
        "49",
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
        "0–99 unidades",
        "30,00€"
      ],
      [
        "100–499 unidades",
        "27,50€"
      ],
      [
        "Mais de 499 unidades",
        "25,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "manila",
    "nome": "Conjunto MANILA",
    "referenciaNome": "MANILA",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto MANILA em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 150 g/m²",
    "referencia": "#MAN-MAN",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "81",
            "84"
          ],
          [
            "Largura",
            "49",
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
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "XXL",
            "3XL"
          ],
          [
            "Comprimento",
            "96",
            "99",
            "102",
            "105",
            "108",
            "111",
            "114"
          ],
          [
            "Cintura",
            "34",
            "37",
            "40",
            "43",
            "46",
            "49",
            "52"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "Comprimento t-shirt",
        "48",
        "53",
        "57",
        "66",
        "67",
        "70",
        "73",
        "76"
      ],
      [
        "Largura t-shirt",
        "34",
        "40",
        "46",
        "50",
        "53",
        "56",
        "59",
        "63"
      ],
      [
        "Comprimento calças",
        "29",
        "33",
        "36",
        "44",
        "46",
        "47",
        "48",
        "49"
      ],
      [
        "Equivalência",
        "28-29-30",
        "31-32-33",
        "34-35-36",
        "37-38-39",
        "40-41-42",
        "43-44-45",
        "46-47-48",
        "49-50-51"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "17,00€"
      ],
      [
        "100–499 unidades",
        "16,00€"
      ],
      [
        "Mais de 499 unidades",
        "14,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "singapura",
    "nome": "Conjunto SINGAPURA",
    "referenciaNome": "SINGAPURA",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto SINGAPURA em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 150 g/m²",
    "referencia": "#SIN-SIN",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "81",
            "84"
          ],
          [
            "Largura",
            "49",
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
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "XXL",
            "3XL"
          ],
          [
            "Comprimento",
            "96",
            "99",
            "102",
            "105",
            "108",
            "111",
            "114"
          ],
          [
            "Cintura",
            "34",
            "37",
            "40",
            "43",
            "46",
            "49",
            "52"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "14",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento t-shirt",
        "46",
        "49",
        "52",
        "55",
        "59",
        "62",
        "65",
        "68",
        "72",
        "75",
        "78",
        "81"
      ],
      [
        "Largura t-shirt",
        "38",
        "40",
        "42",
        "44",
        "46",
        "48",
        "50",
        "53",
        "56",
        "59",
        "62",
        "65"
      ],
      [
        "Comprimento calças",
        "36",
        "37",
        "39",
        "40",
        "42",
        "43",
        "44",
        "46",
        "48",
        "49",
        "50",
        "51"
      ],
      [
        "Equivalência",
        "25-26",
        "27-28",
        "29-30",
        "31-32",
        "33-34",
        "35-36",
        "37-38-39",
        "40-41-42",
        "43-44-45",
        "46-47-48",
        "49-50-51",
        "52-53-54"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "17,00€"
      ],
      [
        "100–499 unidades",
        "16,00€"
      ],
      [
        "Mais de 499 unidades",
        "14,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "colombo",
    "nome": "Conjunto COLOMBO",
    "referenciaNome": "COLOMBO",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto COLOMBO em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "100% Poliéster, Densidade: 150 g/m²",
    "referencia": "#COL-COL",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "81",
            "84"
          ],
          [
            "Largura",
            "49",
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
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "Composição a confirmar",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "XXL",
            "3XL"
          ],
          [
            "Comprimento",
            "96",
            "99",
            "102",
            "105",
            "108",
            "111",
            "114"
          ],
          [
            "Cintura",
            "34",
            "37",
            "40",
            "43",
            "46",
            "49",
            "52"
          ]
        ],
        "precos": [
          [
            "0–99 unidades",
            "15,00€"
          ],
          [
            "100–499 unidades",
            "14,00€"
          ],
          [
            "+499 unidades",
            "13,00€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "14",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL"
      ],
      [
        "Comprimento t-shirt",
        "47",
        "50",
        "53",
        "56",
        "60",
        "63",
        "68",
        "71",
        "74",
        "77",
        "80",
        "83"
      ],
      [
        "Largura t-shirt",
        "38",
        "40",
        "42",
        "44",
        "46",
        "48",
        "50",
        "53",
        "56",
        "59",
        "62",
        "65"
      ],
      [
        "Comprimento calças",
        "37",
        "39",
        "40",
        "42",
        "43",
        "45",
        "47",
        "49",
        "50",
        "51",
        "52",
        "53"
      ],
      [
        "Equivalência",
        "25-26",
        "27-28",
        "29-30",
        "31-32",
        "33-34",
        "35-36",
        "37-38-39",
        "40-41-42",
        "43-44-45",
        "46-47-48",
        "49-50-51",
        "52-53-54"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "17,00€"
      ],
      [
        "100–499 unidades",
        "16,00€"
      ],
      [
        "Mais de 499 unidades",
        "14,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "abu-dhabi",
    "nome": "Conjunto ABU DHABI",
    "referenciaNome": "ABU DHABI",
    "categoria": "conjuntos",
    "subcategoria": "Conjuntos",
    "genero": "unissexo",
    "descricao": "Conjunto ABU DHABI em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição por peça (ver cada modelo)",
    "referencia": "#ABU-ABU",
    "imagem": "/placeholder-modelo.svg",
    "pecas": [
      {
        "nome": "T-shirt",
        "composicao": "100% Algodão, Densidade: 160 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "66"
          ]
        ],
        "precos": [
          [
            "0–50 unidades",
            "12,00€"
          ],
          [
            "50–100 unidades",
            "11,00€"
          ],
          [
            "Mais de 100 unidades",
            "10,00€"
          ]
        ]
      },
      {
        "nome": "Polo manga curta",
        "composicao": "50% Poliéster, 50% Algodão, Densidade: 220 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "0–50 unidades",
            "17,50€"
          ],
          [
            "50–100 unidades",
            "16,50€"
          ],
          [
            "Mais de 100 unidades",
            "15,00€"
          ]
        ]
      },
      {
        "nome": "Polo manga comprida",
        "composicao": "50% Poliéster, 50% Algodão, Densidade: 220 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "70",
            "73",
            "76",
            "79",
            "82",
            "85"
          ],
          [
            "Largura",
            "50",
            "53",
            "56",
            "59",
            "62",
            "65"
          ]
        ],
        "precos": [
          [
            "0–50 unidades",
            "20,00€"
          ],
          [
            "50–100 unidades",
            "18,50€"
          ],
          [
            "Mais de 100 unidades",
            "17,00€"
          ]
        ]
      },
      {
        "nome": "Sweatshirt",
        "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "68",
            "71",
            "74",
            "77",
            "80",
            "83"
          ],
          [
            "Largura",
            "52",
            "55",
            "58",
            "61",
            "64",
            "67"
          ],
          [
            "Manga",
            "63",
            "64",
            "65",
            "66",
            "67",
            "68"
          ]
        ],
        "precos": [
          [
            "0–50 unidades",
            "25,00€"
          ],
          [
            "50–100 unidades",
            "23,00€"
          ],
          [
            "Mais de 100 unidades",
            "21,00€"
          ]
        ]
      },
      {
        "nome": "Sweat com zip",
        "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "63",
            "67",
            "70",
            "73",
            "76",
            "79"
          ],
          [
            "Largura",
            "53",
            "56",
            "59",
            "62",
            "65",
            "68"
          ]
        ],
        "precos": [
          [
            "0–50 unidades",
            "25,00€"
          ],
          [
            "50–100 unidades",
            "23,00€"
          ],
          [
            "Mais de 100 unidades",
            "21,00€"
          ]
        ]
      },
      {
        "nome": "Calças",
        "composicao": "65% Poliéster, Densidade: 250 g/m²",
        "imagem": "/placeholder-modelo.svg",
        "cores": [
          {
            "nome": "Branco",
            "hex": "#eaedf1",
            "hexes": [
              "#eaedf1"
            ],
            "imagem": "/placeholder-modelo.svg"
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
            "104",
            "106",
            "108",
            "110",
            "112",
            "114"
          ],
          [
            "Equivalência",
            "37-38-39",
            "40-41-42",
            "43-44-45",
            "46-47-48",
            "49-50-51",
            "52-53-54"
          ]
        ],
        "precos": [
          [
            "0–50 unidades",
            "27,50€"
          ],
          [
            "50–100 unidades",
            "25,00€"
          ],
          [
            "Mais de 100 unidades",
            "22,50€"
          ]
        ]
      }
    ],
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
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
        "81",
        "84"
      ],
      [
        "Largura",
        "49",
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
        "0–50 unidades",
        "12,00€ – 27,50€"
      ],
      [
        "50–100 unidades",
        "11,00€ – 25,00€"
      ],
      [
        "Mais de 100 unidades",
        "10,00€ – 22,50€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "camberra",
    "nome": "Babete CAMBERRA",
    "referenciaNome": "CAMBERRA",
    "categoria": "crianca",
    "subcategoria": "Babetes",
    "genero": "crianca",
    "descricao": "Babete CAMBERRA em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Interior: 100% Poliéster (170 g/m²) · Exterior: 65% Poliéster, 35% Algodão (115 g/m²)",
    "referencia": "#CAM-CAM",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Única"
      ],
      [
        "Comprimento",
        "22"
      ],
      [
        "Largura",
        "19"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "7,00€"
      ],
      [
        "100–499 unidades",
        "6,50€"
      ],
      [
        "Mais de 499 unidades",
        "5,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "fiji",
    "nome": "Babete FIJI",
    "referenciaNome": "FIJI",
    "categoria": "crianca",
    "subcategoria": "Babetes",
    "genero": "crianca",
    "descricao": "Babete FIJI em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "70% Algodão, 20% Poliéster, 10% Poliuretano, Densidade: 230 g/m²",
    "referencia": "#FIJ-FIJ",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Única"
      ],
      [
        "Comprimento",
        "30"
      ],
      [
        "Largura",
        "22"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "7,00€"
      ],
      [
        "100–499 unidades",
        "6,50€"
      ],
      [
        "Mais de 499 unidades",
        "5,75€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "palau",
    "nome": "Babete PALAU",
    "referenciaNome": "PALAU",
    "categoria": "crianca",
    "subcategoria": "Babetes",
    "genero": "crianca",
    "descricao": "Babete PALAU em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#PAL-PAL",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "0–6M",
        "6–12M",
        "12–18M",
        "18–24M"
      ],
      [
        "Comprimento",
        "34",
        "37",
        "40",
        "43"
      ],
      [
        "Largura",
        "28",
        "30",
        "32",
        "34"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "9,00€"
      ],
      [
        "100–499 unidades",
        "8,00€"
      ],
      [
        "+499 unidades",
        "7,00€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "samoa",
    "nome": "Babete SAMOA",
    "referenciaNome": "SAMOA",
    "categoria": "crianca",
    "subcategoria": "Babetes",
    "genero": "crianca",
    "descricao": "Babete SAMOA em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#SAM-SAM",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "0–6M",
        "6–12M",
        "12–18M",
        "18–24M"
      ],
      [
        "Comprimento",
        "34",
        "37",
        "40",
        "43"
      ],
      [
        "Largura",
        "28",
        "30",
        "32",
        "34"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "9,00€"
      ],
      [
        "100–499 unidades",
        "8,00€"
      ],
      [
        "+499 unidades",
        "7,00€"
      ]
    ],
    "caracteristicas": [
      "100% Poliéster",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "tonga",
    "nome": "TONGA",
    "referenciaNome": "TONGA",
    "categoria": "brindes",
    "subcategoria": "Cozinha",
    "genero": "unissexo",
    "descricao": "Artigo TONGA da coleção Cozinha em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#TON-TON",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "bangkok",
    "nome": "BANGKOK",
    "referenciaNome": "BANGKOK",
    "categoria": "brindes",
    "subcategoria": "Cozinha",
    "genero": "unissexo",
    "descricao": "Artigo BANGKOK da coleção Cozinha em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#BAN-BAN",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "otava",
    "nome": "OTAVA",
    "referenciaNome": "OTAVA",
    "categoria": "brindes",
    "subcategoria": "Cozinha",
    "genero": "unissexo",
    "descricao": "Artigo OTAVA da coleção Cozinha em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#OTA-OTA",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "doa",
    "nome": "DOA",
    "referenciaNome": "DOA",
    "categoria": "brindes",
    "subcategoria": "Cozinha",
    "genero": "unissexo",
    "descricao": "Artigo DOA da coleção Cozinha em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#DOA-DOA",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "jamena",
    "nome": "JAMENA",
    "referenciaNome": "JAMENA",
    "categoria": "brindes",
    "subcategoria": "Coletes desportivos",
    "genero": "unissexo",
    "descricao": "Artigo JAMENA da coleção Coletes desportivos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#JAM-JAM",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "moroni",
    "nome": "MORONI",
    "referenciaNome": "MORONI",
    "categoria": "brindes",
    "subcategoria": "Coletes desportivos",
    "genero": "unissexo",
    "descricao": "Artigo MORONI da coleção Coletes desportivos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#MOR-MOR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "seul",
    "nome": "SEUL",
    "referenciaNome": "SEUL",
    "categoria": "brindes",
    "subcategoria": "Sacos",
    "genero": "unissexo",
    "descricao": "Artigo SEUL da coleção Sacos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#SEU-SEU",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "havana",
    "nome": "HAVANA",
    "referenciaNome": "HAVANA",
    "categoria": "brindes",
    "subcategoria": "Sacos",
    "genero": "unissexo",
    "descricao": "Artigo HAVANA da coleção Sacos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#HAV-HAV",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "quito",
    "nome": "QUITO",
    "referenciaNome": "QUITO",
    "categoria": "brindes",
    "subcategoria": "Sacos",
    "genero": "unissexo",
    "descricao": "Artigo QUITO da coleção Sacos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#QUI-QUI",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "washington",
    "nome": "WASHINGTON",
    "referenciaNome": "WASHINGTON",
    "categoria": "brindes",
    "subcategoria": "Sacos",
    "genero": "unissexo",
    "descricao": "Artigo WASHINGTON da coleção Sacos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#WAS-WAS",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "suva",
    "nome": "SUVA",
    "referenciaNome": "SUVA",
    "categoria": "brindes",
    "subcategoria": "Sacos",
    "genero": "unissexo",
    "descricao": "Artigo SUVA da coleção Sacos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#SUV-SUV",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "motu-nui",
    "nome": "MOTU NUI",
    "referenciaNome": "MOTU NUI",
    "categoria": "brindes",
    "subcategoria": "Canecas",
    "genero": "unissexo",
    "descricao": "Artigo MOTU NUI da coleção Canecas em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#MOT-MOT",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "vaduz",
    "nome": "VADUZ",
    "referenciaNome": "VADUZ",
    "categoria": "brindes",
    "subcategoria": "Canecas",
    "genero": "unissexo",
    "descricao": "Artigo VADUZ da coleção Canecas em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#VAD-VAD",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "abuja",
    "nome": "ABUJA",
    "referenciaNome": "ABUJA",
    "categoria": "brindes",
    "subcategoria": "Bases",
    "genero": "unissexo",
    "descricao": "Artigo ABUJA da coleção Bases em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#ABU-ABU",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  },
  {
    "id": "torre-de-madeira",
    "nome": "TORRE DE MADEIRA",
    "referenciaNome": "TORRE DE MADEIRA",
    "categoria": "brindes",
    "subcategoria": "Jogos",
    "genero": "unissexo",
    "descricao": "Artigo TORRE DE MADEIRA da coleção Jogos em preparação, fotografias e detalhes a adicionar brevemente.",
    "composicao": "Composição a confirmar",
    "referencia": "#TOR-TOR",
    "imagem": "/placeholder-modelo.svg",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#eaedf1",
        "hexes": [
          "#eaedf1"
        ],
        "imagem": "/placeholder-modelo.svg"
      }
    ],
    "tamanhos": [
      [
        "Tamanho",
        "Único"
      ],
      [
        "Comprimento",
        "–"
      ],
      [
        "Largura",
        "–"
      ]
    ],
    "precos": [
      [
        "0–99 unidades",
        "5,00€"
      ],
      [
        "100–499 unidades",
        "4,50€"
      ],
      [
        "+499 unidades",
        "4,00€"
      ]
    ],
    "caracteristicas": [
      "Material e dimensões a confirmar",
      "Detalhes e cores a confirmar"
    ]
  }
];

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
