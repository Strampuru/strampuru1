# Repor as fotos originais dos modelos

Os ficheiros enviados correspondem exatamente aos conjuntos de fotos que já estão no site, mas as versões atuais foram alteradas (fundo removido, luminosidade ajustada) e algumas peças claras ficaram danificadas. O plano é substituir cada foto pela original enviada, sem qualquer tratamento.

## Modelos abrangidos (números = fotos por modelo)

- **Envios individuais**: Melodias/Dublin (25), Manila (11), Roma (2), Colombo (5)
- **EM FALTA 1**: Abu Dhabi (97 — T-shirt, Polo curta, Polo comprida, Sweat, Calças)
- **EM FALTA 2**: Bruxelas (15), Budapeste (3), Buenos Aires (4), Caracas (18), Colombo (5), Dacar (9), Dublin (5), Doa (2), Jacarta (28), Jamena (10), Luanda (6), Madrid (6)
- **EM FALTA 3**: Moroni (6), Nairobi (8), Paris (7), Pequim (8), Santiago (6), Singapura (13), Sucre (5), Tirana (8), Tóquio (4), Viena (7)
- **EM FALTA 4**: Berlim (9), Bissau (10), Bogotá (25), Brasília (9)

Total: cerca de 380 fotos em 31 modelos.

## O que muda

- Cada foto passa a ser exatamente a imagem enviada: fundo original, cores e luminosidade tal como no ficheiro.
- A ordem das fotos e as cores associadas a cada modelo mantêm-se — o número de fotos coincide com o que o site já mostra, por isso nada se desloca nem desaparece.
- As capas que gerei (as imagens com pessoas a vestir as peças) e as imagens de estilo de vida não são tocadas.
- Nada muda nos textos, preços, tamanhos, composições ou na navegação.

## Detalhes técnicos

- Extrair os 8 arquivos para `/tmp`, normalizando os nomes com escapes (`#U0327`, `#U00c1`).
- Para cada pasta, ordenar os ficheiros pela mesma regra usada originalmente (numérica natural para `Nome - N.png`, alfabética para os `Racing_<timestamp>.png`) e mapear 1:1 para os ponteiros existentes em `src/assets/<modelo>/`.
- Reenviar cada imagem com `lovable-assets create --file <png> --filename <nome-existente>` e escrever o JSON devolvido sobre o `.asset.json` correspondente, mantendo caminhos e imports de `src/lib/catalogo.ts` inalterados.
- Sem PIL, sem flood-fill, sem ajuste de brilho.
- Verificar depois no browser as páginas de Roma, Jacarta, Abu Dhabi, Bogotá e Colombo, confirmando que todas as imagens carregam com peso normal (nenhum ponteiro vazio).
