// Catálogo STRAM PURU — dados dos produtos (gerado a partir do catálogo original).

export type CategoriaId = "tshirts" | "polos" | "sweats" | "jaquetas";

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
  descricao: string;
  composicao: string;
  referencia: string;
  imagem: string;
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

export const categorias: Categoria[] = [
  {
    "id": "tshirts",
    "nome": "T-shirts",
    "titulo": "T-shirts",
    "descricao": "Malhas de algodão e técnicas, em corte clássico ou desportivo.",
    "imagem": "/__l5e/assets-v1/b0c047d1-8e65-4346-a859-9d77f382574e/racing-branco.webp",
    "subcategorias": [
      "Clássicas",
      "Desportivas"
    ]
  },
  {
    "id": "polos",
    "nome": "Polos",
    "titulo": "Polos",
    "descricao": "Piqué clássico e malhas técnicas com gola, para uniforme ou uso diário.",
    "imagem": "/__l5e/assets-v1/51393a4d-1b80-4106-9558-b8fcd24022e6/patrol-branco.webp",
    "subcategorias": [
      "Clássicos",
      "Desportivos"
    ]
  },
  {
    "id": "sweats",
    "nome": "Sweats",
    "titulo": "Sweats e Hoodies",
    "descricao": "Camisolas de moletão de gramagem alta, com e sem capuz.",
    "imagem": "/__l5e/assets-v1/23e2ea62-0527-4c53-afb3-87c4d715c5b8/arizona-branco.webp",
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
    "imagem": "/__l5e/assets-v1/d6f63608-6ad3-44ef-8076-b8950d406fa0/manitoba-branco.webp",
    "subcategorias": [
      "Com Capuz"
    ]
  }
];

export const modelos: Modelo[] = [
  {
    "id": "racing",
    "nome": "T-shirt RACING",
    "referenciaNome": "RACING",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "descricao": "T-shirt RACING disponível em 35 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 160 g/m²",
    "referencia": "#RAC-RAC",
    "imagem": "/__l5e/assets-v1/b0c047d1-8e65-4346-a859-9d77f382574e/racing-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/b0c047d1-8e65-4346-a859-9d77f382574e/racing-branco.webp"
      },
      {
        "nome": "Bege 1",
        "hex": "#e6d8b8",
        "hexes": [
          "#e6d8b8"
        ],
        "imagem": "/__l5e/assets-v1/f4beb206-41d0-4d4f-9b83-8610ea69d380/racing-beje1.webp"
      },
      {
        "nome": "Bege 2",
        "hex": "#d2b48c",
        "hexes": [
          "#d2b48c"
        ],
        "imagem": "/__l5e/assets-v1/17dffa46-8b60-4b06-930e-14fe8120f96d/racing-beje2.webp"
      },
      {
        "nome": "Castanho 1",
        "hex": "#8b5a2b",
        "hexes": [
          "#8b5a2b"
        ],
        "imagem": "/__l5e/assets-v1/467c8352-3c20-4494-bb47-68b323741aff/racing-castanho1.webp"
      },
      {
        "nome": "Castanho 2",
        "hex": "#5c3a21",
        "hexes": [
          "#5c3a21"
        ],
        "imagem": "/__l5e/assets-v1/5fb0ba9a-330f-45ae-993a-8d843c202989/racing-castanho2.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#7fbf3f",
        "hexes": [
          "#7fbf3f"
        ],
        "imagem": "/__l5e/assets-v1/7719c953-20b9-4cdb-a517-71a639a72ad3/racing-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5fae2e",
        "hexes": [
          "#5fae2e"
        ],
        "imagem": "/__l5e/assets-v1/0791e0ee-d6fb-4355-810b-22af4f097137/racing-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#3e8e1e",
        "hexes": [
          "#3e8e1e"
        ],
        "imagem": "/__l5e/assets-v1/773d02f2-a75e-4673-b317-64ffa5a2d130/racing-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#2f6f17",
        "hexes": [
          "#2f6f17"
        ],
        "imagem": "/__l5e/assets-v1/bad5f333-da77-41ee-89db-364f304ea836/racing-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#1f4f10",
        "hexes": [
          "#1f4f10"
        ],
        "imagem": "/__l5e/assets-v1/023b60a1-a922-46dc-a602-f2199e34f0f1/racing-verde5.webp"
      },
      {
        "nome": "Verde 6",
        "hex": "#0f2f08",
        "hexes": [
          "#0f2f08"
        ],
        "imagem": "/__l5e/assets-v1/49db1bf5-2aae-4ffa-a56e-06381a0e0e62/racing-verde6.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fff176",
        "hexes": [
          "#fff176"
        ],
        "imagem": "/__l5e/assets-v1/2e27107a-172e-46d9-acad-153eb5a1b558/racing-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/ab27717a-13fa-4e0b-be49-172a6ea74e0d/racing-amarelo2.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#ff9800",
        "hexes": [
          "#ff9800"
        ],
        "imagem": "/__l5e/assets-v1/817e53ec-f40c-47a0-a153-436d7beef75f/racing-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/1408ea78-c00e-40ce-b36f-73a2549d73ea/racing-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#d32f2f",
        "hexes": [
          "#d32f2f"
        ],
        "imagem": "/__l5e/assets-v1/e2f537db-1416-496b-ba15-7d854b7900dd/racing-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/97bb2d72-fd6c-4ef4-8000-4f7fd53077af/racing-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/927f7d38-cc79-4b1c-a1c1-035a1c64e94d/racing-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/b646d33c-5fdb-4027-abd1-c4ebfbc665ed/racing-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#ab47bc",
        "hexes": [
          "#ab47bc"
        ],
        "imagem": "/__l5e/assets-v1/73346773-e83f-4476-9998-a72ea4ea4f57/racing-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#8e24aa",
        "hexes": [
          "#8e24aa"
        ],
        "imagem": "/__l5e/assets-v1/09b9fd24-6dca-4a5d-ab77-103d29ed07ce/racing-roxo2.webp"
      },
      {
        "nome": "Roxo 3",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/0f672150-9eb0-41fa-97fe-7e0ffbdd0e48/racing-roxo3.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/400f5c99-e751-477d-923b-84af46e761cb/racing-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#42a5f5",
        "hexes": [
          "#42a5f5"
        ],
        "imagem": "/__l5e/assets-v1/75892e25-5f20-40f8-b367-bbe28657430b/racing-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#2196f3",
        "hexes": [
          "#2196f3"
        ],
        "imagem": "/__l5e/assets-v1/c3248fc4-881e-41eb-8486-ead5fc399259/racing-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#1e88e5",
        "hexes": [
          "#1e88e5"
        ],
        "imagem": "/__l5e/assets-v1/d58254a2-aaca-4ec0-a2ee-066650834fe5/racing-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/61ebce9a-4ae6-4125-8260-4e405ff0ad06/racing-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#1565c0",
        "hexes": [
          "#1565c0"
        ],
        "imagem": "/__l5e/assets-v1/c78abca3-cce7-4554-b565-b7ce00784af5/racing-azul6.webp"
      },
      {
        "nome": "Azul 7",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/66b65a9f-4457-450a-bfb8-4ccfc27ff01a/racing-azul7.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/60a090d9-ced6-41a7-9318-b9e17f7ca0e8/racing-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#9e9e9e",
        "hexes": [
          "#9e9e9e"
        ],
        "imagem": "/__l5e/assets-v1/5aeb7374-e8ca-4d52-b3c6-623c478b8860/racing-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/5218638d-7cad-43cb-bcd5-3b5ea4accef1/racing-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/86359dca-abab-453c-9ddb-7416c64f3fbf/racing-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/8bccac40-2ea5-43f1-bd26-c62a4bcb0871/racing-cinzento5.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/155d457a-d3a8-4568-a820-488857335c47/racing-preto.webp"
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
    "nome": "T-shirt WAVE",
    "referenciaNome": "WAVE",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "descricao": "T-shirt WAVE disponível em 6 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 190 g/m²",
    "referencia": "#WAV-WAV",
    "imagem": "/__l5e/assets-v1/b9c6e71b-4ee0-4b22-84a3-46bbcb09df50/wave-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/b9c6e71b-4ee0-4b22-84a3-46bbcb09df50/wave-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d2b48c",
        "hexes": [
          "#d2b48c"
        ],
        "imagem": "/__l5e/assets-v1/4a5e678c-a199-4afb-84d9-91727f00bb6b/wave-beje.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/705c0fa7-66c3-498d-bc09-48dfb68ad5ea/wave-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/8dfb5ca0-81ed-4528-af4e-23530a67c0c7/wave-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/dc9ec94a-aca2-4abc-9122-31a1d2ef284b/wave-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/7c4c9dd6-1595-4b2e-a1ca-5a8f32295a14/wave-preto.webp"
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
    "nome": "T-shirt NAPPA",
    "referenciaNome": "NAPPA",
    "categoria": "tshirts",
    "subcategoria": "Clássicas",
    "descricao": "T-shirt NAPPA disponível em 2 cores. 95% Algodão",
    "composicao": "95% Algodão, 5% Elastano, Densidade: 190 g/m²",
    "referencia": "#NAP-NAP",
    "imagem": "/__l5e/assets-v1/b67c9ae0-bde4-4cf3-a08b-db58f0256aa3/nappa-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/b67c9ae0-bde4-4cf3-a08b-db58f0256aa3/nappa-branco.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/01476ff4-5de3-4059-a147-1f08b97ffa8d/nappa-preto.webp"
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
    "id": "resistance",
    "nome": "T-shirt RESISTANCE",
    "referenciaNome": "RESISTANCE",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt RESISTANCE disponível em 26 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#RES-RES",
    "imagem": "/__l5e/assets-v1/8525b6fc-0ce6-4397-8cb2-95484c601da0/resistance-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/8525b6fc-0ce6-4397-8cb2-95484c601da0/resistance-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#e6d8b8",
        "hexes": [
          "#e6d8b8"
        ],
        "imagem": "/__l5e/assets-v1/923a663a-81a2-444f-a077-0bf89040bd8d/resistance-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#8b5a2b",
        "hexes": [
          "#8b5a2b"
        ],
        "imagem": "/__l5e/assets-v1/ffdb7248-5f9a-4363-a19c-52a6b28e0498/resistance-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#7fbf3f",
        "hexes": [
          "#7fbf3f"
        ],
        "imagem": "/__l5e/assets-v1/3fd50e4c-4b55-4c63-adec-62e67004496a/resistance-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5fae2e",
        "hexes": [
          "#5fae2e"
        ],
        "imagem": "/__l5e/assets-v1/59500d68-8831-4046-b91c-ff79475d159e/resistance-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#3e8e1e",
        "hexes": [
          "#3e8e1e"
        ],
        "imagem": "/__l5e/assets-v1/1b37287d-718f-4af1-b97c-0ae1f9966ab6/resistance-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#2f6f17",
        "hexes": [
          "#2f6f17"
        ],
        "imagem": "/__l5e/assets-v1/473ca1b4-997c-4701-9897-3b434609cdf6/resistance-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/b87763bd-ed03-4374-a7e3-84557938ed95/resistance-verde5.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fff176",
        "hexes": [
          "#fff176"
        ],
        "imagem": "/__l5e/assets-v1/caad6c2e-6b7f-4320-a435-359d9c4e8321/resistance-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/68015bc3-e9e3-4ea8-a692-76933409fe7b/resistance-amarelo2.webp"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#fbc02d",
        "hexes": [
          "#fbc02d"
        ],
        "imagem": "/__l5e/assets-v1/f5fbdc7d-04f8-42d9-834c-aabffa16b600/resistance-amarelo3.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#ff9800",
        "hexes": [
          "#ff9800"
        ],
        "imagem": "/__l5e/assets-v1/df71b829-eb90-4183-8846-c6cf2408c13d/resistance-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/b36db3e8-3f2d-46da-8331-4c77c4666cd7/resistance-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#d32f2f",
        "hexes": [
          "#d32f2f"
        ],
        "imagem": "/__l5e/assets-v1/6a302bc9-50d9-49ca-b684-9c408c81aaff/resistance-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/b3a59942-7ebf-4349-bc74-8b98831b1e63/resistance-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/211bf7f9-befd-4c6d-a7b7-188cfb936295/resistance-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/71b0a1d8-b534-4add-bbb4-63f6d48092c6/resistance-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#ab47bc",
        "hexes": [
          "#ab47bc"
        ],
        "imagem": "/__l5e/assets-v1/68f3accc-aa3e-47b5-812c-66c96115503a/resistance-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#8e24aa",
        "hexes": [
          "#8e24aa"
        ],
        "imagem": "/__l5e/assets-v1/ac5d0130-aaa2-42b2-9b8d-190b55fa4f45/resistance-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/88d81940-e11f-4eed-b7fc-2d999af03924/resistance-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#2196f3",
        "hexes": [
          "#2196f3"
        ],
        "imagem": "/__l5e/assets-v1/02e32a92-917f-4a4c-9799-d30e6a4ae5bd/resistance-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/5ccf87f4-434e-428c-98d3-b41d9847341b/resistance-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/63f94fbf-45e8-4fe6-9539-88a8343fbc7e/resistance-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/4ed7732e-48f4-472c-aad8-ec1f34d6a2bc/resistance-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/9e255812-5cce-45dd-bb03-92582115206d/resistance-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/de1a5de3-5aac-46d7-9018-3b40ce3e2cfe/resistance-preto.webp"
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
    "nome": "T-shirt ROCKSPEED",
    "referenciaNome": "ROCKSPEED",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt ROCKSPEED disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#ROC-ROC",
    "imagem": "/__l5e/assets-v1/a73e56d1-ad03-4afb-93dc-bdbf43b4ce81/rockspeed-cinzento.webp",
    "cores": [
      {
        "nome": "Cinzento",
        "hex": "#ffffff",
        "hexes": [
          "#555555",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/a73e56d1-ad03-4afb-93dc-bdbf43b4ce81/rockspeed-cinzento.webp"
      },
      {
        "nome": "Verde",
        "hex": "#81c784",
        "hexes": [
          "#2e7d32",
          "#81c784"
        ],
        "imagem": "/__l5e/assets-v1/348187f6-e7da-451e-aef7-32d9c8cdc9df/rockspeed-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ffeb3b",
        "hexes": [
          "#ef6c00",
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/c5a39a24-5c4c-45a5-9396-df3a84b40e14/rockspeed-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#d81b60",
        "hexes": [
          "#f48fb1",
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/781beaea-a31f-42bc-9056-9a7dfd3ee2ef/rockspeed-rosa.webp"
      },
      {
        "nome": "Azul",
        "hex": "#64b5f6",
        "hexes": [
          "#0d47a1",
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/f38d7134-f23f-4f27-bfae-f840f225e8f1/rockspeed-azul.webp"
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
    "nome": "T-shirt BRICKPLUS",
    "referenciaNome": "BRICKPLUS",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt BRICKPLUS disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#BRI-BRI",
    "imagem": "/__l5e/assets-v1/0868ba06-2bf8-417e-a42a-54a07a8ea2f0/brickplus-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#a5d6a7",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/0868ba06-2bf8-417e-a42a-54a07a8ea2f0/brickplus-verde.webp"
      },
      {
        "nome": "Amarelo",
        "hex": "#ffffff",
        "hexes": [
          "#fdd835",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/d1aef11d-19d1-4786-9a2d-c7e86a992ee2/brickplus-amarelo.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ffffff",
        "hexes": [
          "#ef6c00",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/f5a4dd43-4d19-4686-984e-aee58a465317/brickplus-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ffffff",
        "hexes": [
          "#ec407a",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/3a2976aa-1f71-4526-b6b1-c47d7f828a4c/brickplus-rosa.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/859adcce-f4d6-495e-9fdf-f2cebbbce173/brickplus-preto.webp"
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
    "nome": "T-shirt LEOPARD",
    "referenciaNome": "LEOPARD",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt LEOPARD disponível em 4 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#LEO-LEO",
    "imagem": "/__l5e/assets-v1/15f267c5-04f1-4b17-932e-c671df1398f9/leopard-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#2e7d32",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/15f267c5-04f1-4b17-932e-c671df1398f9/leopard-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/0f396e28-f012-4bf4-8fa7-977f24bfade8/leopard-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/95518aaf-d087-401b-b1e4-d34b3e00f985/leopard-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/246b6843-b44e-446b-8e51-124e9aff4a1b/leopard-preto.webp"
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
    "nome": "T-shirt MAURICE",
    "referenciaNome": "MAURICE",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt MAURICE disponível em 5 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 145 g/m²",
    "referencia": "#MAU-MAU",
    "imagem": "/__l5e/assets-v1/0c5ca6b0-bbda-4ced-ae47-500d56ebd795/maurice-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#2e7d32",
        "hexes": [
          "#000000",
          "#ffffff",
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/0c5ca6b0-bbda-4ced-ae47-500d56ebd795/maurice-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#000000",
          "#ffffff",
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/182cad70-bd46-40ef-862d-2ea0bee96bf2/maurice-laranja.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#000000",
          "#ffffff",
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/e200b40e-e209-4911-a917-cbf0b408c5e3/maurice-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#0d47a1",
        "hexes": [
          "#000000",
          "#ffffff",
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/a3861b05-060f-4f70-adb3-961b6dd503e6/maurice-azul.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#616161",
        "hexes": [
          "#000000",
          "#ffffff",
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/e67fd6ed-691f-40ce-8a81-4ffd9dd4e0f0/maurice-cinzento.webp"
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
    "nome": "T-shirt DACITA",
    "referenciaNome": "DACITA",
    "categoria": "tshirts",
    "subcategoria": "Desportivas",
    "descricao": "T-shirt DACITA disponível em 3 cores. 23% Poliéster",
    "composicao": "23% Poliéster, 77% Poliamida, Densidade: 180 g/m²",
    "referencia": "#DAC-DAC",
    "imagem": "/__l5e/assets-v1/78ca3d84-5b1d-4788-a16f-d70ac2a65495/dacita-azul.webp",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#002171",
        "hexes": [
          "#0d47a1",
          "#002171"
        ],
        "imagem": "/__l5e/assets-v1/78ca3d84-5b1d-4788-a16f-d70ac2a65495/dacita-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#616161",
        "hexes": [
          "#000000",
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/ff5a2a47-e898-4944-a4bd-fb7290ba2f1c/dacita-preto.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#000000",
        "hexes": [
          "#757575",
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/b038c7bd-6f8d-4d9c-a6e2-856f02b41ed0/dacita-cinzento.webp"
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
    "id": "patrol",
    "nome": "Polo PATROL",
    "referenciaNome": "PATROL",
    "categoria": "polos",
    "subcategoria": "Clássicos",
    "descricao": "Polo PATROL disponível em 25 cores. 100% Algodão",
    "composicao": "100% Algodão, Densidade: 220 g/m²",
    "referencia": "#PAT-PAT",
    "imagem": "/__l5e/assets-v1/51393a4d-1b80-4106-9558-b8fcd24022e6/patrol-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/51393a4d-1b80-4106-9558-b8fcd24022e6/patrol-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d7ccc8",
        "hexes": [
          "#d7ccc8"
        ],
        "imagem": "/__l5e/assets-v1/2d370081-0a09-47c5-8602-6c3833388961/patrol-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/d3247065-0f20-4267-8999-398dfc0d5b49/patrol-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/2dad955b-e3a7-4bad-85b5-b64b5fc8a7a4/patrol-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/4990a1e5-5e2e-4d72-971f-b3767d4aa695/patrol-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/280a541b-b2b9-478e-bb72-b71cb0d839a8/patrol-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/99483073-75cb-41e3-9647-6ee787fc2784/patrol-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/2e915b9c-31bb-447f-845d-f6133ee55f5e/patrol-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#ffeb3b",
        "hexes": [
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/d864ac5e-4576-478f-bc32-9e6e6c0f2612/patrol-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/3504d44e-66c5-498e-a63b-a69c924d8c74/patrol-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/af967e49-e4cd-4635-869e-64e73e4a6a9b/patrol-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/109b6f52-c9b8-4148-a6a4-846e1e24ca29/patrol-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/9eff3c0f-54c2-42d6-a122-72e6b0039c80/patrol-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/d4088e87-42b4-40bf-996c-f2bac3af2747/patrol-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/92f8562c-b7ff-4ea1-b6e2-97200ba79d0e/patrol-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/2d6bbbb5-4c25-412a-94ec-b56991d097f1/patrol-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/68f5962f-5a7c-433b-970b-9bbfa228dbc8/patrol-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#01579b",
        "hexes": [
          "#01579b"
        ],
        "imagem": "/__l5e/assets-v1/88292061-e005-4ffa-9490-8bbcfe591828/patrol-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/52ed4a89-bda7-4dcd-83e5-53315c1e4967/patrol-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#001f54",
        "hexes": [
          "#001f54"
        ],
        "imagem": "/__l5e/assets-v1/2e8799b0-2758-494a-9b40-5534a0dbb0cd/patrol-azul6.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#eeeeee",
        "hexes": [
          "#eeeeee"
        ],
        "imagem": "/__l5e/assets-v1/d9188843-979a-48c4-bd53-f530a5ca4ae0/patrol-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/a6c1a9eb-6817-45c6-9ca0-fe39f1697a23/patrol-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/54065713-d570-414c-a9fe-0a1b68a8ee40/patrol-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/7187caca-b611-473f-b881-c94c10106b28/patrol-cinzento4.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/6f4eb65c-38c7-4651-a072-1d705db5c0ba/patrol-preto.webp"
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
    "nome": "Polo KENTUKY",
    "referenciaNome": "KENTUKY",
    "categoria": "polos",
    "subcategoria": "Desportivos",
    "descricao": "Polo KENTUKY disponível em 9 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#KEN-KEN",
    "imagem": "/__l5e/assets-v1/592bc4c4-aafb-4a21-90b3-59025b9b8e82/kentuky-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/592bc4c4-aafb-4a21-90b3-59025b9b8e82/kentuky-branco.webp"
      },
      {
        "nome": "Verde",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/027fe705-a4c8-4f82-b122-0bd376a9b564/kentuky-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/a0acf9ce-b264-424e-9143-2108167adafd/kentuky-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/b070b721-bd27-44e0-8f6b-8d937ef07383/kentuky-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/6a28a851-e750-41dd-a4de-4c7e22a2390f/kentuky-vermelho2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/94e4be24-fcdd-4220-8018-432182f86f56/kentuky-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/c1c59dcf-9b05-4352-b9cf-6e9ca3c02609/kentuky-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/3c4e6a35-62d2-4eb2-bbcb-b2324b032259/kentuky-azul3.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/aaaca10a-8eed-4543-a3d7-c15ed59bb42d/kentuky-preto.webp"
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
    "nome": "Polo SAGANO",
    "referenciaNome": "SAGANO",
    "categoria": "polos",
    "subcategoria": "Desportivos",
    "descricao": "Polo SAGANO disponível em 4 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#SAG-SAG",
    "imagem": "/__l5e/assets-v1/ce5366fa-fef3-44dd-9d0b-28c218d76a98/sagano-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#1b5e20",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/ce5366fa-fef3-44dd-9d0b-28c218d76a98/sagano-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/850f095c-066d-4120-aeee-6040ad2dacfc/sagano-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/16d7ba5a-dee0-4f89-bc1d-b8215de18987/sagano-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/dcfe503c-d02f-4436-b2d2-ffe82484f636/sagano-preto.webp"
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
    "nome": "Polo STRATEGY",
    "referenciaNome": "STRATEGY",
    "categoria": "polos",
    "subcategoria": "Desportivos",
    "descricao": "Polo STRATEGY disponível em 6 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 170 g/m²",
    "referencia": "#STR-STR",
    "imagem": "/__l5e/assets-v1/28a1b79e-1d75-4ce2-81cc-089759af82eb/strategy-vermelhov1.webp",
    "cores": [
      {
        "nome": "Vermelhov 1",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/28a1b79e-1d75-4ce2-81cc-089759af82eb/strategy-vermelhov1.webp"
      },
      {
        "nome": "Azulv 1",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/2092b036-0549-41d7-88b6-ae331d277fbc/strategy-azulv1.webp"
      },
      {
        "nome": "Pretov 1",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/03302a1e-7229-4246-b210-7346cec003b5/strategy-pretov1.webp"
      },
      {
        "nome": "Vermelhov 2",
        "hex": "#b71c1c",
        "hexes": [
          "#ffffff",
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/29628fd1-a382-4d02-9474-2ae7d050f401/strategy-vermelhov2.webp"
      },
      {
        "nome": "Azulv 2",
        "hex": "#0d47a1",
        "hexes": [
          "#ffffff",
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/a85c4583-4966-45d6-b630-883e2ac0dbf7/strategy-azulv2.webp"
      },
      {
        "nome": "Pretov 2",
        "hex": "#000000",
        "hexes": [
          "#ffffff",
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/5da69564-9266-4c9b-9070-3025cf5ed90c/strategy-pretov2.webp"
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
    "id": "arizona",
    "nome": "Hoodie ARIZONA",
    "referenciaNome": "ARIZONA",
    "categoria": "sweats",
    "subcategoria": "Com Capuz",
    "descricao": "Hoodie ARIZONA disponível em 20 cores. 100% Poliéster",
    "composicao": "100% Poliéster, Densidade: 280 g/m²",
    "referencia": "#ARI-ARI",
    "imagem": "/__l5e/assets-v1/23e2ea62-0527-4c53-afb3-87c4d715c5b8/arizona-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/23e2ea62-0527-4c53-afb3-87c4d715c5b8/arizona-branco.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/26a1ada5-3d42-440c-83e8-5e26496d99c8/arizona-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/0322dd53-31e0-46ee-8c07-9315edab76be/arizona-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/b1da4331-1cc0-427c-9d07-72012b3ba058/arizona-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/312a40a8-20ed-46a5-9c6b-0d2b027c755b/arizona-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/39676cf5-bc73-4d84-b56f-a953c7f5ce81/arizona-verde4.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/a251f09f-5e1f-4fbb-b76a-c23dab12fddf/arizona-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/443ef4b3-ce61-4122-9509-f7256a31025e/arizona-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/c1405452-5978-4e00-9172-7482566f6ac4/arizona-vermelho2.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/cccc45ca-456c-4473-8996-fac6eed30407/arizona-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/c63e864e-a63f-4629-9fbf-9dd16c52ea36/arizona-rosa2.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/127d9f21-6869-45a4-b601-a1851f094cbc/arizona-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#4a148c",
        "hexes": [
          "#4a148c"
        ],
        "imagem": "/__l5e/assets-v1/c4fdb802-7c2c-41d2-87b3-4b72f1a79599/arizona-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/cc83be97-3c76-419a-b790-2cc256059ec3/arizona-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/2f94840e-888e-4e69-9456-784e1dcc9e40/arizona-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/ed186ce9-6415-4648-96d4-1bf6eeb14dda/arizona-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/a0a9c482-f7d0-474f-9971-33827040c7d5/arizona-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/7f20fe3a-ae22-43d4-9aaf-be2aef7da0a3/arizona-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/7e76e887-8347-4d6f-84d7-5047af3ac1a9/arizona-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/f33d4add-bd80-4b73-80fb-52563df59cdf/arizona-preto.webp"
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
    "id": "dublin",
    "nome": "Sweatshirt DUBLIN",
    "referenciaNome": "DUBLIN",
    "categoria": "sweats",
    "subcategoria": "Sem Capuz",
    "descricao": "Sweatshirt DUBLIN disponível em 25 cores. 65% Poliéster",
    "composicao": "65% Poliéster, 35% Algodão, Densidade: 300 g/m²",
    "referencia": "#DUB-DUB",
    "imagem": "/__l5e/assets-v1/e2bbafde-a7f7-4a6c-a210-a0714b4c6480/dublin-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/e2bbafde-a7f7-4a6c-a210-a0714b4c6480/dublin-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d7ccc8",
        "hexes": [
          "#d7ccc8"
        ],
        "imagem": "/__l5e/assets-v1/847a585b-d334-4b28-b154-41f704e6be61/dublin-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/7b422cdc-39b5-4c08-8e4b-a9d79d2bb6f5/dublin-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/db2a0444-ecfd-4b06-afee-88158484b814/dublin-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/670c86b4-5664-4ddd-aea0-0c8b641347da/dublin-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/808a1931-fed3-41d2-8e30-80f36fc33b25/dublin-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/d1d1db41-2ddb-496a-ae60-dc9fa51c565b/dublin-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/d081ab4a-8b79-44d8-9398-b8d65ac45406/dublin-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#ffeb3b",
        "hexes": [
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/e15f27c8-4de2-4451-99ab-e04ad84f4021/dublin-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/6fdd65bb-7837-4181-84b9-6f9552e2dd7b/dublin-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/853a94ef-c524-4b74-a375-e261e014c774/dublin-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/7874a37e-0df8-4705-94b4-5464f32096d1/dublin-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/c31eebef-8491-4a9d-b797-31b865841119/dublin-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/80e5fc6a-fb58-47aa-9526-cacf55247fd5/dublin-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/a99013d4-419f-4882-ad44-7385a478806b/dublin-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/34279ffd-a211-4023-a81c-9ab8ce9024a2/dublin-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/42b44f6b-7a6e-4306-b5ff-9a083c36bba5/dublin-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/586e54b5-e9f5-40af-b81a-c215f083ae18/dublin-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#eeeeee",
        "hexes": [
          "#eeeeee"
        ],
        "imagem": "/__l5e/assets-v1/75394b50-42d7-411e-9cd5-eca9ec0937ab/dublin-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/1d0d8021-3fa6-46d8-b2e8-135d849226c5/dublin-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#9e9e9e",
        "hexes": [
          "#9e9e9e"
        ],
        "imagem": "/__l5e/assets-v1/c77a9091-8d81-458d-abf7-73d518f07ee2/dublin-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/d041cce7-0e97-4ec0-915b-d94a068195a9/dublin-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/992f8415-e4fd-4ab6-98db-da4b5393b4e4/dublin-cinzento5.webp"
      },
      {
        "nome": "Cinzento 6",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/c27bed6c-5f28-499e-982a-12304326d2af/dublin-cinzento6.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/d6ef65e0-112b-4a3a-9435-b49f21c5664e/dublin-preto.webp"
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
    "nome": "Jaqueta MANITOBA",
    "referenciaNome": "MANITOBA",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta MANITOBA disponível em 8 cores. Interior: 100% Poliéster (225 g/m²)",
    "composicao": "Interior: 100% Poliéster (225 g/m²), Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
    "referencia": "#MAN-MAN",
    "imagem": "/__l5e/assets-v1/d6f63608-6ad3-44ef-8076-b8950d406fa0/manitoba-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/d6f63608-6ad3-44ef-8076-b8950d406fa0/manitoba-branco.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/edf199d0-b2b1-45f1-b7f1-88c3cfc46b62/manitoba-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#33691e",
        "hexes": [
          "#33691e"
        ],
        "imagem": "/__l5e/assets-v1/4781f236-4d95-4cba-8bbd-b2a795e8990c/manitoba-verde2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/d7e76ae5-d04f-4a6b-a57e-ef0e9abc786e/manitoba-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/7aedce05-9425-482d-9671-282d36d4a8a1/manitoba-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/0a1c2498-6459-4e03-8827-b65efd473c46/manitoba-azul2.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/e1a557dd-4974-4bce-a001-b1ebcd15d2cf/manitoba-cinzento.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/953c2721-854d-44c6-a2c6-da2d9609343c/manitoba-preto.webp"
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
    "nome": "Jaqueta ONTARIO",
    "referenciaNome": "ONTARIO",
    "categoria": "jaquetas",
    "subcategoria": "Com Capuz",
    "descricao": "Jaqueta ONTARIO disponível em 4 cores. Interior: 100% Poliéster (200 g/m²)",
    "composicao": "Interior: 100% Poliéster (200 g/m²), Exterior: 70% Poliéster, 30% PVC (200 g/m²)",
    "referencia": "#ONT-ONT",
    "imagem": "/__l5e/assets-v1/2c218f25-2753-4676-b340-22454d1eb68f/ontario-vermelho.webp",
    "cores": [
      {
        "nome": "Vermelho",
        "hex": "#8b0000",
        "hexes": [
          "#8b0000"
        ],
        "imagem": "/__l5e/assets-v1/2c218f25-2753-4676-b340-22454d1eb68f/ontario-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/a59c7189-1e0f-469c-bde2-bc9885e88c46/ontario-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/e81ffe78-169e-408a-ad0f-c68afdc6b762/ontario-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/f10669bb-1a4f-43b4-a95a-5ca4a570caec/ontario-preto.webp"
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
    "imagem": "/__l5e/assets-v1/75ca49d5-0cb4-43c8-b64d-e29799a98bd9/balak-azul.webp",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/75ca49d5-0cb4-43c8-b64d-e29799a98bd9/balak-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/de3d4569-9669-4f11-b30d-0c2b8789b0df/balak-preto.webp"
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
  }
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
