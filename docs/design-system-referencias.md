# Design System — Referências e Achados

> Base de pesquisa para o design system do site **Macedo Neto | Advocacia Especializada**.
> A seção 4 é um **ponto de partida** com tokens já testados em contraste. Ainda não é a versão final.

---

## 1. Referências pesquisadas

### 1.1 Design systems e brand books de escritórios de advocacia

| Referência | O que tem de útil | O que levar para o nosso |
|---|---|---|
| **[Hannes Snellman, Brand Book](https://www.hannessnellman.com/brand-book/graphic-guidelines/)** (Finlândia/Suécia) | Um dos poucos brand books de escritório **publicados abertamente**. Usa 2 famílias (Aime, serifada, nos títulos; Lynstone, sem serifa, no texto) e uma escala tipográfica relativa: corpo = X, subtítulo = 1,5X, título = 3X a 4X, com a regra "limite o número de tamanhos". São 5 cores nomeadas pela natureza (Spruce `#0A3728`, Barley `#D2AA78`, Stone `#E9E6E3`…) com HEX/RGB/PMS/CMYK. O **monograma "HS"** é a versão reduzida do logo, com área de proteção de 1 a 2 alturas do "H". Tem regras de foto: pessoas sobre fundo liso na cor da marca e luz quente natural. | ✔ Escala relativa simples. ✔ **Nomear as cores pela matéria do escritório** (Mármore, Grafite, Prata, Madeira). ✔ Regras do monograma MN e da área de proteção. ✔ Padrão de retrato da equipe. |
| **[Harbottle & Lewis (Huddle Creative)](https://huddlecreative.com/work/harbottle-lewis)** (Reino Unido) | O **monograma evoluído vira sistema gráfico**: as hastes verticais geram padrões, divisores e grids. A tipografia é a Domaine (Klim), que "equilibra autoridade e calor". | ✔ **Ideia central:** as diagonais e hastes do "MN" viram divisores, molduras, marca d'água e bullets. |
| **[Brady Law (case)](https://justin-kerr-design-v2.squarespace.com/brady-law-case-study)** (EUA) | Monograma de traço duplo para dois sócios. Argumenta que o monograma lê melhor em tamanho pequeno. | ✔ Testar o MN em 16px (favicon) e 32px (header mobile). Se perder leitura, criar uma versão simplificada. |
| **[Mamedes & Gasch (Design Compass)](https://designcompass.org/en/archive/mamedes-gasch/)** | Verde-preto profundo + bronze terroso + cinza, **priorizando legibilidade e confiança em vez de cores de destaque fortes**. | ✔ É praticamente a nossa lógica: escuro + metal/madeira + cinza. |
| **[Kurtz & Blum Brand Guide (2026)](https://skybound-brandguides-0babk.kinsta.page/kurtz-blum/brand_guide/brand-guide.html)** | Brand guide web inteiro, com **3 cores usadas com intenção** e regras de logo. | ✔ Formato de entrega: o DS como página HTML navegável. |
| **[Hewett Diamaduros (VIP Marketing)](https://vipmarketing.com/case-studies/from-ai-sketch-to-brand-system-for-hewett-diamaduros)** | Escritório pequeno com sistema construído a partir de um logo existente. **Cada cor e cada fonte tem uma justificativa escrita.** | ✔ Documentar o porquê de cada token, ligando-o ao espaço físico. |
| **[Ogletree Deakins (Mighty Roar)](https://mightyroar.com/work/ogletree-deakins-redesign)** | Paleta principal + paletas por área de atuação + templates de papelaria e slides. | ⚠ No nosso caso, só um ícone por área. Cores por área fragmentariam a marca. |
| **[Hughes Hubbard (Living Group)](https://www.living-group.com/our-work/case-studies/hughes-hubbard/)** | Sistema que integra cor, tipo, imagem **e mensagem**. | ✔ Incluir **tom de voz** no DS. |

### 1.2 Posicionamento: fugir do clichê

| Referência | Achado |
|---|---|
| **[White & Case, rebrand pela Uncommon (Creative Boom)](https://www.creativeboom.com/work/this-rebrand-ditches-every-law-firm-cliche-as-white-case-loses-the-navy-blue/)** | Abandonou o **azul-marinho**, o clichê do setor, e adotou tipografia cinética. |
| **[Haynes Boone (Brandfetch)](https://brandfetch.com/blog/haynes-boone-new-logo-and-brand)** | Os grandes escritórios se concentram em **azuis, vermelhos e bordôs**. Para parecer premium, o time se inspirou em **marcas de luxo** (iates, carros). |
| **[Robinson+Cole (Behance)](https://www.behance.net/gallery/177470185/Corporate-Rebrand-RobinsonCole-(Undergraduate))** | Sans-serif com terminais clássicos para ser moderno sem perder tradição. |

➡ **Conclusão:** preto + mármore + prata + madeira **já foge** da paleta azul/bordô do setor. O DS deve reforçar essa linguagem de **material nobre**, próxima do mercado de luxo.

### 1.3 Acessibilidade e serviço público: o público do INSS

| Referência | Achado |
|---|---|
| **[Padrão Digital de Governo, gov.br DS](https://www.gov.br/ds/)** | É o DS que o cliente do INSS **já conhece** (Meu INSS, fonte Rawline). Componentes, tokens e diretrizes abertos em português. |
| **[Cartilha de Acessibilidade gov.br](https://www.gov.br/gestaodeconteudo/pt-br/manuais/tutoriais/cartilha-de-acessibilidade-gov-br/cartilha_acessibilidade_govbr_v2-1.pdf)** | Regras práticas em PT-BR, alinhadas à Lei Brasileira de Inclusão (13.146/2015). |
| **[Estudo CIDI 2025 sobre o Meu INSS (Blucher)](https://pdf.blucher.com.br/designproceedings/cidi2025/1089523.pdf)** | **Tipografia inclusiva** é fator crítico de usabilidade para o usuário do INSS. |
| **[MOJ Design System, Ministério da Justiça do Reino Unido](https://design-patterns.service.justice.gov.uk/accessibility/)** | DS do setor de **justiça**, com meta WCAG 2.2 AA e padrões de formulário e de linguagem simples. |
| **[Scottish Gov DS](https://designsystem.gov.scot/guidance/accessibility)** / **[GC Design System, Canadá](https://design-system.canada.ca/en/accessibility)** | Atendem WCAG AA e testam tokens de cor automaticamente. |
| **[Case Michels Legal Group](https://www.8ration.com/case-studies/michels-legal-group-website/)** | Site previdenciário (SSDI): o público é idoso, com limitações e pouca familiaridade digital. |

➡ **Conclusão:** **premium na casca, gov.br na usabilidade.**

---

## 2. Princípios do nosso DS (achados consolidados)

1. **Material nobre, não clichê jurídico.** Sem balança, martelo, colunas ou azul-marinho. A linguagem visual vem do escritório: mármore, metal escovado, madeira e o monograma MN.
2. **O monograma é o sistema.** As diagonais do MN geram divisores, molduras, bullets e marca d'água.
3. **Poucas cores, com intenção:** 2 de marca + neutros + 1 destaque.
4. **Escala tipográfica curta**, com corpo grande.
5. **Acessível por padrão:** WCAG 2.2 AA, corpo com 18px ou mais, alvos de toque com 48px ou mais e foco visível.
6. **Cada token tem um porquê** documentado.
7. **Tom de voz faz parte do DS:** claro, acolhedor e dentro das regras da OAB.

---

## 3. Análise da marca existente (a partir das fotos)

| Elemento físico | Leitura | Vira token |
|---|---|---|
| Fachada em ACM preto fosco | Solidez, contemporâneo | `grafite` |
| Mármore cinza com veios brancos | Nobreza, permanência | `marmore` + textura |
| Letras e monograma em aço/prata | Precisão, premium | `prata` |
| Marcenaria amadeirada | Calor, acolhimento | `madeira` (destaque/CTA) |
| Fita de LED quente contornando o painel | Sofisticação | Borda luminosa sutil em cards de destaque |
| Logo geométrico, caixa alta, tracking largo | Moderno, institucional | Títulos geométricos + *overlines* espaçadas |
| Estante verde-oliva (sala 2) | Opcional | Cor de apoio (não usar no início) |

---

## 4. Proposta inicial de tokens (rascunho para validar)

### 4.1 Cores (contraste WCAG calculado)

| Token | HEX | Uso | Contraste |
|---|---|---|---|
| `grafite-950` | `#111214` | Fundo escuro / texto sobre claro | 16,8:1 sobre `pedra-50` ✅ AAA |
| `grafite-900` | `#1C1E21` | Superfícies no escuro | — |
| `marmore-600` | `#5B5F66` | Texto secundário sobre claro | 5,7:1 ✅ AA |
| `prata-300` | `#C9CCD1` | Texto/ícones/logo sobre escuro | 11,6:1 ✅ AAA |
| `prata-500` | `#9A9EA5` | Texto secundário sobre escuro | 7,0:1 ✅ AAA |
| `pedra-50` | `#F4F2EE` | Fundo claro (off-white quente) | — |
| `madeira-700` | `#8A5530` | CTA/links sobre claro | 5,5:1 sobre `pedra-50` ✅ AA |
| `madeira-400` | `#C49A6C` | CTA/destaque sobre escuro | 7,3:1 sobre `grafite-950` ✅ AAA |
| `sucesso-700` | `#1F7A4D` | Botão WhatsApp (texto branco) | 5,3:1 ✅ AA |

> ⚠ **Botão do WhatsApp:** o verde oficial `#25D366` com texto branco dá só **1,8:1** e reprova. Use `#1F7A4D` com texto branco, ou `#25D366` com texto `grafite-950`.

### 4.2 Tipografia (Google Fonts)

| Papel | Fonte | Por quê |
|---|---|---|
| Títulos | **Montserrat** 600/700 | Geométrica, muito próxima do letreiro "MACEDO NETO" |
| Overline/rótulos | Montserrat 500, CAIXA ALTA, `letter-spacing: .16em` | Repete o "ADVOCACIA ESPECIALIZADA" |
| Texto corrido | **Source Sans 3** ou **Inter** | Alta legibilidade no celular |
| Citações (opcional) | **Cormorant Garamond** itálico | Serifa só no que é "voz" (modelo da Hannes Snellman) |

| Token | Mobile | Desktop |
|---|---|---|
| `text-body` | 18px / 1.6 | 18px / 1.65 |
| `text-small` (mínimo) | 16px | 16px |
| `text-lead` | 20px | 22px |
| `h3` | 22px | 26px |
| `h2` | 28px | 38px |
| `h1` | 34px | 56px |

### 4.3 Espaçamento, grid e forma

- Base 8px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- Grid de 12 colunas (máx. 1200px) / 4 colunas no mobile com margem de 16px. Texto com no máximo 70 caracteres por linha.
- Raio de 2 a 4px, quase reto, como a arquitetura da fachada.
- Sombras mínimas. A profundidade vem do contraste e de bordas de 1px em `prata`.
- Textura: foto real do mármore, só no hero e em faixas, com overlay escuro.

### 4.4 Componentes do MVP

| Componente | Regras-chave |
|---|---|
| Botão primário | `madeira-700` / `madeira-400`. Altura de 48px ou mais, 18px semibold e anel de foco de 3px. |
| WhatsApp (flutuante + inline) | Ícone oficial + "Falar no WhatsApp". Mensagem pré-preenchida por página. |
| Card de serviço | Ícone de linha + pergunta orientadora + "Saiba mais". Card inteiro clicável. |
| Passo a passo | 3 etapas "01 / 02 / 03" (à la Cravath) |
| Card de advogado | Foto padronizada + nome + OAB + área |
| Depoimento | Aspas em serifa + iniciais + benefício. Nunca o print bruto. |
| FAQ (acordeão) | Pergunta inteira clicável, +/−, `aria-expanded` |
| Aviso antigolpe | "Como saber se é mesmo o escritório" |
| Header / Rodapé | WhatsApp sempre visível. Rodapé com OABs, CNPJ, mapa e privacidade. |

### 4.5 Iconografia e imagem

- Ícones de linha 1,5px: [Lucide](https://lucide.dev) ou [Phosphor Light](https://phosphoricons.com). **Proibido:** balança, martelo e colunas.
- Fotos só reais (escritório e equipe), com luz quente. Nada de banco de imagens com "aperto de mão".
- Monograma como marca d'água a 4–6% de opacidade; a diagonal do "N" como divisor.

### 4.6 Tom de voz

| Faça | Evite |
|---|---|
| "Teve seu benefício negado? Vamos analisar seu caso." | "Garantimos seu benefício." (promessa de resultado, vedada pela OAB) |
| "Auxílio-doença (auxílio por incapacidade temporária)" | Só o termo técnico |
| Frases curtas, "você" | Juridiquês, latim |
| "Do pedido ao resultado, com você" | "O melhor escritório da região" (comparativo) |

---

## 5. Próximos passos

1. Mostrar ao cliente 2 variações: **"Noite"** (hero escuro com mármore) e **"Dia"** (fundo `pedra-50` alternando com seções escuras).
2. Receber o **logo em vetor** e testar o monograma em 16, 32 e 64px.
3. Fotografar a textura do mármore da fachada em alta resolução.
4. Montar o DS como página navegável (tokens + componentes) antes das páginas.
