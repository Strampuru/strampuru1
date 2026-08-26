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
    "imagem": "/__l5e/assets-v1/6939986e-0e53-4a37-93d0-7cb8ff0335e4/racing-branco.webp",
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
    "imagem": "/__l5e/assets-v1/c691766e-6030-48a4-a92c-6b857330fee4/patrol-branco.webp",
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
    "imagem": "/__l5e/assets-v1/8884b771-a182-4028-bbc1-d28e35955d6c/arizona-branco.webp",
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
    "imagem": "/__l5e/assets-v1/9e61b93d-306a-4fe7-bc59-e951b1e3bd32/manitoba-branco.webp",
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
    "imagem": "/__l5e/assets-v1/6939986e-0e53-4a37-93d0-7cb8ff0335e4/racing-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/6939986e-0e53-4a37-93d0-7cb8ff0335e4/racing-branco.webp"
      },
      {
        "nome": "Bege 1",
        "hex": "#e6d8b8",
        "hexes": [
          "#e6d8b8"
        ],
        "imagem": "/__l5e/assets-v1/765939f4-5559-4a4d-80c8-b72637d709e1/racing-beje1.webp"
      },
      {
        "nome": "Bege 2",
        "hex": "#d2b48c",
        "hexes": [
          "#d2b48c"
        ],
        "imagem": "/__l5e/assets-v1/e7f85db7-fbe9-47a5-93d6-24b05feb7a98/racing-beje2.webp"
      },
      {
        "nome": "Castanho 1",
        "hex": "#8b5a2b",
        "hexes": [
          "#8b5a2b"
        ],
        "imagem": "/__l5e/assets-v1/4c560b35-d3bb-40f6-9b80-97352f11e886/racing-castanho1.webp"
      },
      {
        "nome": "Castanho 2",
        "hex": "#5c3a21",
        "hexes": [
          "#5c3a21"
        ],
        "imagem": "/__l5e/assets-v1/f2d79b52-bf25-43f2-9986-190912b03d32/racing-castanho2.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#7fbf3f",
        "hexes": [
          "#7fbf3f"
        ],
        "imagem": "/__l5e/assets-v1/8a16293b-b766-46e3-9e49-ae135ea88d6a/racing-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5fae2e",
        "hexes": [
          "#5fae2e"
        ],
        "imagem": "/__l5e/assets-v1/29608dd0-327f-47d4-81f7-0690aaa2e24a/racing-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#3e8e1e",
        "hexes": [
          "#3e8e1e"
        ],
        "imagem": "/__l5e/assets-v1/693939f2-986d-4f08-ba18-18727da1e3b1/racing-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#2f6f17",
        "hexes": [
          "#2f6f17"
        ],
        "imagem": "/__l5e/assets-v1/b9321de2-d6c9-45c5-9bc6-819b54b2af1c/racing-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#1f4f10",
        "hexes": [
          "#1f4f10"
        ],
        "imagem": "/__l5e/assets-v1/43ea2d35-2307-4e2e-8608-9d8f5f7ae040/racing-verde5.webp"
      },
      {
        "nome": "Verde 6",
        "hex": "#0f2f08",
        "hexes": [
          "#0f2f08"
        ],
        "imagem": "/__l5e/assets-v1/e1e28bf9-58df-484e-814f-a8957fae250c/racing-verde6.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fff176",
        "hexes": [
          "#fff176"
        ],
        "imagem": "/__l5e/assets-v1/588d09b0-faf8-4de1-9513-ce8746e93149/racing-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/b19af5b0-8143-400d-81d6-8cb0c553e0f3/racing-amarelo2.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#ff9800",
        "hexes": [
          "#ff9800"
        ],
        "imagem": "/__l5e/assets-v1/b1c4391a-bb41-47b6-8ca4-0212f83881b1/racing-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/97215c9b-5365-469f-8b36-88ff5910d291/racing-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#d32f2f",
        "hexes": [
          "#d32f2f"
        ],
        "imagem": "/__l5e/assets-v1/79078f7c-9c2b-401b-9bf6-a0278e084f21/racing-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/ea319ddf-c850-429d-b03e-d1bb6789ca57/racing-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/3a984b0f-05cd-4559-a486-e59b053b8f2b/racing-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/4ecb484e-71cb-456f-a36c-3c76affb7872/racing-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#ab47bc",
        "hexes": [
          "#ab47bc"
        ],
        "imagem": "/__l5e/assets-v1/d580b251-35a7-427e-85ea-355ec179048a/racing-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#8e24aa",
        "hexes": [
          "#8e24aa"
        ],
        "imagem": "/__l5e/assets-v1/cc6ffc08-3d6a-4212-8856-4160453fa560/racing-roxo2.webp"
      },
      {
        "nome": "Roxo 3",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/2cfb8efc-8f2c-434f-8cf0-87f121ad199c/racing-roxo3.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/b9068c65-90e6-427c-b0a0-b3b1ae0a9bc6/racing-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#42a5f5",
        "hexes": [
          "#42a5f5"
        ],
        "imagem": "/__l5e/assets-v1/3e1dbfdf-cc44-450c-91a1-4b2b6ba0caa0/racing-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#2196f3",
        "hexes": [
          "#2196f3"
        ],
        "imagem": "/__l5e/assets-v1/ed1a6945-fa8c-4264-970d-374ee09d1a55/racing-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#1e88e5",
        "hexes": [
          "#1e88e5"
        ],
        "imagem": "/__l5e/assets-v1/62e413ac-3ee0-4fb7-8fce-953dcef50a11/racing-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/c28e8e4b-dcb6-4dd9-ad29-7eaf479f2b8f/racing-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#1565c0",
        "hexes": [
          "#1565c0"
        ],
        "imagem": "/__l5e/assets-v1/78c34e55-2fe1-42b7-8fe7-ba63c85aa965/racing-azul6.webp"
      },
      {
        "nome": "Azul 7",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/121d5543-3ae4-4be2-b64d-36b6c31ee10c/racing-azul7.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/4662f213-cb45-43e0-b05c-5a0fb52aac5f/racing-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#9e9e9e",
        "hexes": [
          "#9e9e9e"
        ],
        "imagem": "/__l5e/assets-v1/b0b93c03-9094-4577-8efc-b0b605c743c6/racing-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/9498556e-cd88-4cc1-887a-0d280a802099/racing-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/c77bd2d7-3707-49cf-8dfd-4e3cddad2640/racing-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/b4ecfa2e-a293-4cc6-93e3-4aef97bb4777/racing-cinzento5.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/0f57789d-de4e-4e56-978f-f9ded840fcb7/racing-preto.webp"
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
    "imagem": "/__l5e/assets-v1/5da76585-707d-4dc4-9cae-02af10ea4e8a/wave-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/5da76585-707d-4dc4-9cae-02af10ea4e8a/wave-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d2b48c",
        "hexes": [
          "#d2b48c"
        ],
        "imagem": "/__l5e/assets-v1/64a68e4c-7c67-44e5-ab03-5bb44835cf2e/wave-beje.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/6638e43e-d98d-404d-bc56-d26ebe3aafb9/wave-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/5463d010-da92-4ab3-af1a-8e8f55a0d654/wave-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/ece2c969-037e-4150-8ddb-85e094344071/wave-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/fbbadab7-39e0-4287-bc87-6ece3f30f505/wave-preto.webp"
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
    "imagem": "/__l5e/assets-v1/c6dbe198-1cbc-4cc5-9b79-d548c6f8fb82/nappa-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/c6dbe198-1cbc-4cc5-9b79-d548c6f8fb82/nappa-branco.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/618135bc-7bff-483f-9371-e0f84ae49a7b/nappa-preto.webp"
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
    "imagem": "/__l5e/assets-v1/f55c55d9-09e6-4a31-800e-471be48b4f05/resistance-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/f55c55d9-09e6-4a31-800e-471be48b4f05/resistance-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#e6d8b8",
        "hexes": [
          "#e6d8b8"
        ],
        "imagem": "/__l5e/assets-v1/b25e632a-083e-4c92-afad-beee6e64991c/resistance-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#8b5a2b",
        "hexes": [
          "#8b5a2b"
        ],
        "imagem": "/__l5e/assets-v1/6db12ade-012a-477d-90d2-118923781563/resistance-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#7fbf3f",
        "hexes": [
          "#7fbf3f"
        ],
        "imagem": "/__l5e/assets-v1/e183b87b-200a-4432-b45e-747eb9d59c96/resistance-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#5fae2e",
        "hexes": [
          "#5fae2e"
        ],
        "imagem": "/__l5e/assets-v1/dd1f4543-8944-4de5-b0be-96d438e4a063/resistance-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#3e8e1e",
        "hexes": [
          "#3e8e1e"
        ],
        "imagem": "/__l5e/assets-v1/ff669833-0a86-488f-a17e-bfab3dc6a8c0/resistance-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#2f6f17",
        "hexes": [
          "#2f6f17"
        ],
        "imagem": "/__l5e/assets-v1/5a56e0b6-4f1c-4631-a198-e126b410b25e/resistance-verde4.webp"
      },
      {
        "nome": "Verde 5",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/a11b21e0-e300-4763-80ef-6e1453131050/resistance-verde5.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fff176",
        "hexes": [
          "#fff176"
        ],
        "imagem": "/__l5e/assets-v1/6f35ad7b-7206-40b0-a54a-3cf8c1e1c943/resistance-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/97b3bcbe-4909-43c9-8adb-67d2f20825aa/resistance-amarelo2.webp"
      },
      {
        "nome": "Amarelo 3",
        "hex": "#fbc02d",
        "hexes": [
          "#fbc02d"
        ],
        "imagem": "/__l5e/assets-v1/38046aee-941f-4f66-bd5c-91230181808c/resistance-amarelo3.webp"
      },
      {
        "nome": "Laranja 1",
        "hex": "#ff9800",
        "hexes": [
          "#ff9800"
        ],
        "imagem": "/__l5e/assets-v1/b87e9813-fd02-4dca-9455-27b9267cf0d5/resistance-laranja1.webp"
      },
      {
        "nome": "Laranja 2",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/d66f25d3-f997-4bee-89ea-8047bfe75dc1/resistance-laranja2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#d32f2f",
        "hexes": [
          "#d32f2f"
        ],
        "imagem": "/__l5e/assets-v1/71b72304-7be4-47c1-9ee4-288bd49548e7/resistance-vermelho.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/9b7e2055-801f-4ada-ba7c-345c298adaeb/resistance-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/2833d945-0fb6-40db-8742-7cfe10cf4ed1/resistance-rosa2.webp"
      },
      {
        "nome": "Rosa 3",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/4c7df160-93cd-4768-b2be-4aae1f05deaa/resistance-rosa3.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#ab47bc",
        "hexes": [
          "#ab47bc"
        ],
        "imagem": "/__l5e/assets-v1/4a9306f4-f4fc-426d-bfaf-b7d956b241d8/resistance-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#8e24aa",
        "hexes": [
          "#8e24aa"
        ],
        "imagem": "/__l5e/assets-v1/92558597-c877-4865-8fd5-8a92042b9852/resistance-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/5cc63a13-240f-400b-a66b-82462683889a/resistance-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#2196f3",
        "hexes": [
          "#2196f3"
        ],
        "imagem": "/__l5e/assets-v1/d1d2b05d-29d1-4b0f-a899-856c7db98a1d/resistance-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/04f874c3-773d-4abb-89a0-9c22601786b7/resistance-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/649676a8-c99f-4554-8ef8-28b9f3722b53/resistance-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/a4c3a3a5-8f4c-4b41-9699-1b73c2ae2919/resistance-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/bbcd0aef-f176-4811-9c37-867864009c7d/resistance-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/bf0018b8-b769-443c-9e22-cd9dc9182ca6/resistance-preto.webp"
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
    "imagem": "/__l5e/assets-v1/974ae291-b189-4678-8549-b0a10670f330/rockspeed-cinzento.webp",
    "cores": [
      {
        "nome": "Cinzento",
        "hex": "#ffffff",
        "hexes": [
          "#555555",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/974ae291-b189-4678-8549-b0a10670f330/rockspeed-cinzento.webp"
      },
      {
        "nome": "Verde",
        "hex": "#81c784",
        "hexes": [
          "#2e7d32",
          "#81c784"
        ],
        "imagem": "/__l5e/assets-v1/b2fbbf33-5d28-4909-ae75-5d0171b6198c/rockspeed-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ffeb3b",
        "hexes": [
          "#ef6c00",
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/fa395381-4157-4afc-9eb6-59d46346d299/rockspeed-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#d81b60",
        "hexes": [
          "#f48fb1",
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/fc6ea43f-41de-4ff0-b161-386cfd4c8652/rockspeed-rosa.webp"
      },
      {
        "nome": "Azul",
        "hex": "#64b5f6",
        "hexes": [
          "#0d47a1",
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/64cfddc0-eb32-474e-9b10-3d054cdad999/rockspeed-azul.webp"
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
    "imagem": "/__l5e/assets-v1/95116c99-73c9-408d-9977-7fc0129e9684/brickplus-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#a5d6a7",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/95116c99-73c9-408d-9977-7fc0129e9684/brickplus-verde.webp"
      },
      {
        "nome": "Amarelo",
        "hex": "#ffffff",
        "hexes": [
          "#fdd835",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/c91fd913-624c-4556-9161-41f198ccc327/brickplus-amarelo.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ffffff",
        "hexes": [
          "#ef6c00",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/074c9d57-474c-408c-b2b3-f0933c421e98/brickplus-laranja.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ffffff",
        "hexes": [
          "#ec407a",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/a2b53b6f-479c-4812-87f5-360095404525/brickplus-rosa.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/ab9c7a6a-f954-4ebd-8e54-2b31a8224e05/brickplus-preto.webp"
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
    "imagem": "/__l5e/assets-v1/1b1f356e-f617-42c6-b1dd-7a020256ea29/leopard-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#2e7d32",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/1b1f356e-f617-42c6-b1dd-7a020256ea29/leopard-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/c173da94-11cc-4401-8481-d24264cf888d/leopard-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/995172fe-a6ad-4d7d-8721-ea722fdc5ed9/leopard-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/6fa15a4e-9c7b-42e9-8b19-b15c0f3b85be/leopard-preto.webp"
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
    "imagem": "/__l5e/assets-v1/34d90afe-0532-4b6d-8dac-5a3d7bda7704/maurice-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#2e7d32",
        "hexes": [
          "#000000",
          "#ffffff",
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/34d90afe-0532-4b6d-8dac-5a3d7bda7704/maurice-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#000000",
          "#ffffff",
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/98b194a9-237e-4310-b61d-5368a7c6e68d/maurice-laranja.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#000000",
          "#ffffff",
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/75ec09d5-52ff-48f7-ad4d-51796930f285/maurice-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#0d47a1",
        "hexes": [
          "#000000",
          "#ffffff",
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/159ae0be-a4b5-472e-ba43-0a728b9ba4f1/maurice-azul.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#616161",
        "hexes": [
          "#000000",
          "#ffffff",
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/cf6c37de-2379-4d6a-9e4b-2c7a7495988a/maurice-cinzento.webp"
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
    "imagem": "/__l5e/assets-v1/b827b35e-fd48-4677-8fa7-5f134dc06e2d/dacita-azul.webp",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#002171",
        "hexes": [
          "#0d47a1",
          "#002171"
        ],
        "imagem": "/__l5e/assets-v1/b827b35e-fd48-4677-8fa7-5f134dc06e2d/dacita-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#616161",
        "hexes": [
          "#000000",
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/23bd70d9-37f7-42ef-935f-0685a24c3c2f/dacita-preto.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#000000",
        "hexes": [
          "#757575",
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/4651b15d-9c82-48c4-ab8c-272791b19ff1/dacita-cinzento.webp"
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
    "imagem": "/__l5e/assets-v1/c691766e-6030-48a4-a92c-6b857330fee4/patrol-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/c691766e-6030-48a4-a92c-6b857330fee4/patrol-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d7ccc8",
        "hexes": [
          "#d7ccc8"
        ],
        "imagem": "/__l5e/assets-v1/7c7d512c-c0b8-4237-8859-1b64c0560df1/patrol-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/fa0839a8-298b-48fa-b468-4315ee680ce3/patrol-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/e661b9c1-b55b-44db-8b52-0650d76f5496/patrol-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/08155f1f-812d-4962-a1a8-5eda915bc7e3/patrol-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/c95f06a0-a5da-428d-935d-1b6cb519f07b/patrol-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/add27e61-5d4c-4c48-98d6-d945b45d6f05/patrol-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/773912be-daa5-4264-aa38-f6c4ef6fd409/patrol-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#ffeb3b",
        "hexes": [
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/f7943698-f08d-434a-83c0-8f4ef420faf3/patrol-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/ad2d4492-5260-4ada-af10-e919fa0f2c5f/patrol-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/1de2ecb2-b1f4-4748-bf2d-33df44f3d9b5/patrol-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/3bf709b4-9e4f-42d1-90df-43a822fe9525/patrol-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/ffa8895a-de8b-4ff8-b6c8-60c8d3983cb0/patrol-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/bd5ad2b3-538e-47ae-bc01-ab545a667ac1/patrol-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/f7f8501a-4083-4e4a-857d-5f622184cac1/patrol-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/3be0242a-95ab-420c-a438-ac3cbd4a3087/patrol-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/ff6432a1-9ed1-4827-aff3-ca6fa6e5deb7/patrol-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#01579b",
        "hexes": [
          "#01579b"
        ],
        "imagem": "/__l5e/assets-v1/ca339e00-767a-47cd-bc11-37e3a75fdde2/patrol-azul4.webp"
      },
      {
        "nome": "Azul 5",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/c0a096d6-4117-46a7-a2c8-fd3623d8ec37/patrol-azul5.webp"
      },
      {
        "nome": "Azul 6",
        "hex": "#001f54",
        "hexes": [
          "#001f54"
        ],
        "imagem": "/__l5e/assets-v1/bab0fe95-5f53-49cc-8c96-41f57ea28240/patrol-azul6.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#eeeeee",
        "hexes": [
          "#eeeeee"
        ],
        "imagem": "/__l5e/assets-v1/cb1ffbea-925a-4182-abcc-b88ab68b830c/patrol-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/8536d855-e1cc-45d4-8f7f-4c63280d8127/patrol-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/8ff86daa-0199-42b0-be23-347172af1ae5/patrol-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/b8608b16-a1c9-4fe2-94fd-f1dcd910ec83/patrol-cinzento4.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/692376d9-109a-4752-b51d-6d6cf10831fc/patrol-preto.webp"
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
    "imagem": "/__l5e/assets-v1/e8eaa9ac-ab32-4826-9c58-5ed164ff961d/kentuky-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/e8eaa9ac-ab32-4826-9c58-5ed164ff961d/kentuky-branco.webp"
      },
      {
        "nome": "Verde",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/f74c1746-aacc-4abb-ba29-c80837aac4b1/kentuky-verde.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/47efb2ff-c007-4962-9c91-a125665aeef4/kentuky-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/e128fdd4-321d-4614-ad36-bc3f13024075/kentuky-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/3e75ba1d-fd28-4825-8d23-057fd3b1c182/kentuky-vermelho2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/db22e468-e88e-44f1-9889-06d63d354084/kentuky-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/5af74b17-5b85-45cc-8c9a-e7e31d4aa3f6/kentuky-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/c51ac65c-05b9-40e6-af96-05e531ef831d/kentuky-azul3.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/1f5cfdfe-9f92-43fd-8ff7-6f2611c309fe/kentuky-preto.webp"
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
    "imagem": "/__l5e/assets-v1/4d7f688e-c1e5-4ee3-8e43-6b8aab2d28e4/sagano-verde.webp",
    "cores": [
      {
        "nome": "Verde",
        "hex": "#ffffff",
        "hexes": [
          "#1b5e20",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/4d7f688e-c1e5-4ee3-8e43-6b8aab2d28e4/sagano-verde.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/cc0a1e6f-9278-4cdb-9dc0-934ebf301e2b/sagano-vermelho.webp"
      },
      {
        "nome": "Azul",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/b5ef94e2-91ee-4611-98b8-c51eb730b2c7/sagano-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/599d01f4-e8cd-4416-a503-725577fcea81/sagano-preto.webp"
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
    "imagem": "/__l5e/assets-v1/0b77695c-88a0-4928-9315-37086d4737c5/strategy-vermelhov1.webp",
    "cores": [
      {
        "nome": "Vermelhov 1",
        "hex": "#ffffff",
        "hexes": [
          "#b71c1c",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/0b77695c-88a0-4928-9315-37086d4737c5/strategy-vermelhov1.webp"
      },
      {
        "nome": "Azulv 1",
        "hex": "#ffffff",
        "hexes": [
          "#0d47a1",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/b3203dc1-bcae-4a86-86bb-000c718e79af/strategy-azulv1.webp"
      },
      {
        "nome": "Pretov 1",
        "hex": "#ffffff",
        "hexes": [
          "#000000",
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/671f324e-e2cc-44d3-82ab-848d6d47e316/strategy-pretov1.webp"
      },
      {
        "nome": "Vermelhov 2",
        "hex": "#b71c1c",
        "hexes": [
          "#ffffff",
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/c4c938c9-e1b0-4b0a-a1ba-fd37e38159c4/strategy-vermelhov2.webp"
      },
      {
        "nome": "Azulv 2",
        "hex": "#0d47a1",
        "hexes": [
          "#ffffff",
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/bfbb7bb6-9592-4ad1-9e33-a2913069d828/strategy-azulv2.webp"
      },
      {
        "nome": "Pretov 2",
        "hex": "#000000",
        "hexes": [
          "#ffffff",
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/c6c16f39-a465-446f-a5c4-47556065f138/strategy-pretov2.webp"
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
    "imagem": "/__l5e/assets-v1/8884b771-a182-4028-bbc1-d28e35955d6c/arizona-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/8884b771-a182-4028-bbc1-d28e35955d6c/arizona-branco.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/2e78a998-0107-4253-8cb7-3cbc8dbaf3a1/arizona-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/e4a8bf70-14c8-452f-b2fb-72774d2dec8a/arizona-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/da3f2833-cbc3-4f1f-9c39-ae2cb1697033/arizona-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/fadc5276-c913-46bb-8bd6-da14fb9d0010/arizona-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/a34fc173-82ab-49c5-bf8d-a5e773f6ce04/arizona-verde4.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/d32bd75b-c275-4376-bd12-cf8f1b40752c/arizona-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/136ec813-78af-4a57-bc44-fb7517b153c4/arizona-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/de869c38-790d-4afd-8652-c7a58e1327ea/arizona-vermelho2.webp"
      },
      {
        "nome": "Rosa 1",
        "hex": "#f48fb1",
        "hexes": [
          "#f48fb1"
        ],
        "imagem": "/__l5e/assets-v1/5320ad4e-e6ae-4759-9cc6-75402e6dab9a/arizona-rosa1.webp"
      },
      {
        "nome": "Rosa 2",
        "hex": "#d81b60",
        "hexes": [
          "#d81b60"
        ],
        "imagem": "/__l5e/assets-v1/63c3c7c0-aeed-4545-b591-07817e86a35d/arizona-rosa2.webp"
      },
      {
        "nome": "Roxo 1",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/ed61f822-ce29-4083-8b8f-c65620914f49/arizona-roxo1.webp"
      },
      {
        "nome": "Roxo 2",
        "hex": "#4a148c",
        "hexes": [
          "#4a148c"
        ],
        "imagem": "/__l5e/assets-v1/77f200b3-c2fa-495d-9234-3248be136c93/arizona-roxo2.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/dcd5b932-e0cf-4c63-983f-6bfc0aef8843/arizona-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/af3335e5-5821-4042-9f06-bbcb37e335a1/arizona-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/f9a9665b-a7a9-40f5-a564-12f05df30e7a/arizona-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/4e633938-35b6-426b-bb36-1e51d61a6fc9/arizona-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/65af455a-c71a-458c-9b97-33203b105e70/arizona-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/4f2e05e7-d915-4a85-ae2f-c7f062fac67d/arizona-cinzento2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/033f7b64-bec3-4b6b-9dd9-8288064ecd47/arizona-preto.webp"
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
    "imagem": "/__l5e/assets-v1/70bd2a7d-02cb-4d58-8d0e-e550cc22a630/dublin-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/70bd2a7d-02cb-4d58-8d0e-e550cc22a630/dublin-branco.webp"
      },
      {
        "nome": "Bege",
        "hex": "#d7ccc8",
        "hexes": [
          "#d7ccc8"
        ],
        "imagem": "/__l5e/assets-v1/46dc9437-45c9-4836-99f2-eb62abebcdf8/dublin-beje.webp"
      },
      {
        "nome": "Castanho",
        "hex": "#5d4037",
        "hexes": [
          "#5d4037"
        ],
        "imagem": "/__l5e/assets-v1/991325af-a822-4ed8-b0bc-beaf65af2d8b/dublin-castanho.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/2747eb92-0e9b-4f43-9fa8-3f37da467470/dublin-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#2e7d32",
        "hexes": [
          "#2e7d32"
        ],
        "imagem": "/__l5e/assets-v1/221a606a-bd7e-4ec2-b67f-4786b7365af9/dublin-verde2.webp"
      },
      {
        "nome": "Verde 3",
        "hex": "#388e3c",
        "hexes": [
          "#388e3c"
        ],
        "imagem": "/__l5e/assets-v1/536bdd41-8dc6-450c-8a12-b65980462fb8/dublin-verde3.webp"
      },
      {
        "nome": "Verde 4",
        "hex": "#66bb6a",
        "hexes": [
          "#66bb6a"
        ],
        "imagem": "/__l5e/assets-v1/222ce26c-619d-49c0-8512-28e71bae487c/dublin-verde4.webp"
      },
      {
        "nome": "Amarelo 1",
        "hex": "#fdd835",
        "hexes": [
          "#fdd835"
        ],
        "imagem": "/__l5e/assets-v1/61ba04db-e750-431b-952d-512728f75c18/dublin-amarelo1.webp"
      },
      {
        "nome": "Amarelo 2",
        "hex": "#ffeb3b",
        "hexes": [
          "#ffeb3b"
        ],
        "imagem": "/__l5e/assets-v1/e57607e6-13a2-4d6f-9eef-62922150d314/dublin-amarelo2.webp"
      },
      {
        "nome": "Laranja",
        "hex": "#ef6c00",
        "hexes": [
          "#ef6c00"
        ],
        "imagem": "/__l5e/assets-v1/9e319ab0-6b11-48ac-93d1-affd8c6a7f4c/dublin-laranja.webp"
      },
      {
        "nome": "Vermelho 1",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/8070ef4f-71b6-4cbd-9cff-d6573ca4a7f7/dublin-vermelho1.webp"
      },
      {
        "nome": "Vermelho 2",
        "hex": "#7f0000",
        "hexes": [
          "#7f0000"
        ],
        "imagem": "/__l5e/assets-v1/d4a38d4e-3547-454d-aa9b-75e7b6131dcd/dublin-vermelho2.webp"
      },
      {
        "nome": "Rosa",
        "hex": "#ec407a",
        "hexes": [
          "#ec407a"
        ],
        "imagem": "/__l5e/assets-v1/aa4b8a6a-2d20-48ff-b1f8-e12a34e53f83/dublin-rosa.webp"
      },
      {
        "nome": "Roxo",
        "hex": "#6a1b9a",
        "hexes": [
          "#6a1b9a"
        ],
        "imagem": "/__l5e/assets-v1/910def0b-11b4-4908-9fd3-67824f868fe6/dublin-roxo.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#64b5f6",
        "hexes": [
          "#64b5f6"
        ],
        "imagem": "/__l5e/assets-v1/27d0e7ff-a955-440b-9233-7e9e561d0c8c/dublin-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#1976d2",
        "hexes": [
          "#1976d2"
        ],
        "imagem": "/__l5e/assets-v1/6c4c0bc2-5e58-442c-91eb-765df649e000/dublin-azul2.webp"
      },
      {
        "nome": "Azul 3",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/757093a1-7305-4563-8f95-2beae09e7f50/dublin-azul3.webp"
      },
      {
        "nome": "Azul 4",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/0e0d7ad9-23bc-4266-aa0e-6297e423099d/dublin-azul4.webp"
      },
      {
        "nome": "Cinzento 1",
        "hex": "#eeeeee",
        "hexes": [
          "#eeeeee"
        ],
        "imagem": "/__l5e/assets-v1/05c1e89e-84b0-45e0-82af-0b6fdcd59503/dublin-cinzento1.webp"
      },
      {
        "nome": "Cinzento 2",
        "hex": "#bdbdbd",
        "hexes": [
          "#bdbdbd"
        ],
        "imagem": "/__l5e/assets-v1/b30bf675-d179-4dae-b379-847eb4fdb703/dublin-cinzento2.webp"
      },
      {
        "nome": "Cinzento 3",
        "hex": "#9e9e9e",
        "hexes": [
          "#9e9e9e"
        ],
        "imagem": "/__l5e/assets-v1/f3c55936-c0ab-4ff2-a955-f0707002ddde/dublin-cinzento3.webp"
      },
      {
        "nome": "Cinzento 4",
        "hex": "#757575",
        "hexes": [
          "#757575"
        ],
        "imagem": "/__l5e/assets-v1/82b73f80-0f38-4a16-8da5-07b624f3453e/dublin-cinzento4.webp"
      },
      {
        "nome": "Cinzento 5",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/1959820b-8325-4320-a249-d5e608f46e9b/dublin-cinzento5.webp"
      },
      {
        "nome": "Cinzento 6",
        "hex": "#424242",
        "hexes": [
          "#424242"
        ],
        "imagem": "/__l5e/assets-v1/58e0c9ae-2340-434f-aea0-1a94138fab77/dublin-cinzento6.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/8c100f77-a931-4bb2-aa6d-2426538289a0/dublin-preto.webp"
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
    "imagem": "/__l5e/assets-v1/9e61b93d-306a-4fe7-bc59-e951b1e3bd32/manitoba-branco.webp",
    "cores": [
      {
        "nome": "Branco",
        "hex": "#ffffff",
        "hexes": [
          "#ffffff"
        ],
        "imagem": "/__l5e/assets-v1/9e61b93d-306a-4fe7-bc59-e951b1e3bd32/manitoba-branco.webp"
      },
      {
        "nome": "Verde 1",
        "hex": "#1b5e20",
        "hexes": [
          "#1b5e20"
        ],
        "imagem": "/__l5e/assets-v1/5750297b-6eaf-4440-8c9e-5b6bff05f4b5/manitoba-verde1.webp"
      },
      {
        "nome": "Verde 2",
        "hex": "#33691e",
        "hexes": [
          "#33691e"
        ],
        "imagem": "/__l5e/assets-v1/f14e7851-5f24-4264-ba32-a23d61831000/manitoba-verde2.webp"
      },
      {
        "nome": "Vermelho",
        "hex": "#b71c1c",
        "hexes": [
          "#b71c1c"
        ],
        "imagem": "/__l5e/assets-v1/ff2795d1-b414-45b0-ac98-23fc92380fa9/manitoba-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/fad7e87e-a2d1-4bdb-8779-ca6096f32cff/manitoba-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/f0a5cfb3-6eba-4fe4-beb6-d28d998d681c/manitoba-azul2.webp"
      },
      {
        "nome": "Cinzento",
        "hex": "#616161",
        "hexes": [
          "#616161"
        ],
        "imagem": "/__l5e/assets-v1/bffba8b9-403b-448b-a105-6d4916be49b9/manitoba-cinzento.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/ee06969f-ba53-4dfd-95dc-0b2093bed9fd/manitoba-preto.webp"
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
    "imagem": "/__l5e/assets-v1/ac615133-50cc-458a-9bf7-fad1582b8912/ontario-vermelho.webp",
    "cores": [
      {
        "nome": "Vermelho",
        "hex": "#8b0000",
        "hexes": [
          "#8b0000"
        ],
        "imagem": "/__l5e/assets-v1/ac615133-50cc-458a-9bf7-fad1582b8912/ontario-vermelho.webp"
      },
      {
        "nome": "Azul 1",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/f03765c2-cca2-4cbe-86ad-73d871aaa26d/ontario-azul1.webp"
      },
      {
        "nome": "Azul 2",
        "hex": "#003c8f",
        "hexes": [
          "#003c8f"
        ],
        "imagem": "/__l5e/assets-v1/d1fe56a8-0552-4fec-9cd1-3576ff81ebe3/ontario-azul2.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/6f92d6c2-2a71-4c51-80a3-4e4af3ebcb84/ontario-preto.webp"
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
    "imagem": "/__l5e/assets-v1/5ebbcbbd-cf49-487a-84c0-61caf3b3d565/balak-azul.webp",
    "cores": [
      {
        "nome": "Azul",
        "hex": "#0d47a1",
        "hexes": [
          "#0d47a1"
        ],
        "imagem": "/__l5e/assets-v1/5ebbcbbd-cf49-487a-84c0-61caf3b3d565/balak-azul.webp"
      },
      {
        "nome": "Preto",
        "hex": "#000000",
        "hexes": [
          "#000000"
        ],
        "imagem": "/__l5e/assets-v1/9f043271-1c5b-4b65-ae17-2bbc075e8289/balak-preto.webp"
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
