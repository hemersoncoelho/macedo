# MEMORY.md — contexto para as próximas sessões

> Atualizado em 2026-11-14. Registre aqui decisões tomadas e o estado atual; o plano de trabalho fica em [ROADMAP.md](ROADMAP.md).

## Cliente

- **Macedo Neto | Advocacia Especializada** — escritório físico, nº **108C** (cidade/UF pendente; OABs do MA, mas há um livro da Constituição do **Piauí** numa sala → confirmar atuação no PI).
- Advogados: Francimar Moura Macedo Neto (OAB/MA 31.307), Victor Felipe Teixeira (OAB/MA 31.375), Benedito Tomaz de Oliveira Neto (OAB/MA 30.308).
- Instagram: @advocaciamacedoneto. WhatsApp/endereço/CNPJ/horário: **ainda não recebidos**.
- **Inconsistência aberta:** a fachada lista Consumidor e Família; o documento de serviços lista Trabalho e Notarial/Registral. Lista final não confirmada.
- 3 depoimentos (prints de WhatsApp: salário-maternidade, pensão por morte, aposentadoria) — transcritos em `docs/briefing-site.md`; **publicação depende de decisão do advogado (OAB) e autorização escrita (LGPD)**.

## Decisões já tomadas

1. **Referências de estrutura:** ingracio.adv.br (principal), koetzadvocacia.com.br, forthepeople.com, pittabaione.com. **Estética:** cravath.com. Detalhes em `docs/briefing-site.md`.
2. **Direção visual:** "material nobre" tirado do espaço físico — grafite (fachada ACM), mármore, prata (letras de aço), madeira (marcenaria), luz de LED quente. Fugir do azul-marinho jurídico. "Premium na casca, gov.br na usabilidade".
3. **Design system v0.1** implementado em `dark-disk/` (ver `dark-disk/DESIGN.md` e a página `/design-system`). Fontes: Montserrat (títulos, ecoa o letreiro), Source Sans 3 (texto), Cormorant Garamond itálico (só citações). Paleta e contrastes validados em `src/design/tokens.json`.
4. **Motion:** CSS + IntersectionObserver, sem GSAP/Lenis. Curva-assinatura `cubic-bezier(.22,1,.36,1)`. Elementos M1–M8 definidos em `docs/motion-design.md` (M3 "deriva do mármore" ainda não implementado).
5. **Stack:** Astro 7 estático, sem Tailwind/React. Node 22 via nvm é obrigatório.
6. "`.astra`" que o usuário mencionou = o projeto **Astro** em `dark-disk/` (não existe pasta `.astra`).

## Estado atual (onde paramos)

- Design system pronto e buildando; `/design-system` verificado visualmente no topo (desktop e 390px, sem overflow). Seções abaixo do hero da página do DS **não** foram inspecionadas visualmente.
- **Hero da home pronto (2026-11-14):** `src/components/sections/Hero.astro` em `index.astro` (com `SiteHeader`, `SiteFooter`, WhatsApp flutuante). **Sem foto, por decisão do usuário** (a foto em moldura 4:3 ficou ruim: foto de celular, logo serrilhado). No desktop: painel "parede do escritório" em CSS (mármore + monograma grande + letreiro + faixa de LED quente no topo que acende); no celular, só o monograma pequeno. A foto da sala fica para "O escritório", quando houver fotos boas.
- **Páginas de benefício (modelo único, 2026-11-14):** rota dinâmica `src/pages/previdenciario/[slug].astro` + conteúdo em `src/data/beneficios.ts`. Ordem fixa: topo → quem tem direito (gráfico próprio) → documentos → como ajudamos → FAQ → "Não é bem o seu caso?" (ServiceCard dos outros benefícios, morph M8) → CTA. **Para adicionar um benefício: 1 entrada em `beneficios.ts` + 1 gráfico em `src/components/graphics/` + registrar em `GraficoId` e no mapa `graficos` do `[slug].astro`; depois tirar o nome de `AINDA_SEM_PAGINA` no `Hero.astro`.**
  - Prontos: `aposentadoria` (barras de idade e de tempo + nota de transição/atividade especial), `auxilio-doenca` (3 requisitos + trilha vertical do dia 1 à perícia com fio que desce + 3 desfechos em cartões escuros), `salario-maternidade` (120 pontos em 4 meses que se acendem em sequência + casos + quadro de carência 0 × 10), `pensao-por-morte` (fila da família em degraus com fio entre as numerações + cartões "o que mais conta" + anel do prazo de 90 dias), `bpc-loas` (fluxo de requisitos + conta da renda).
  - **Os 5 benefícios do hero estão prontos** (2026-11-14). Os chips do hero vêm de `beneficios.ts` (benefício novo ganha o chip sozinho). Outros benefícios do ROADMAP (auxílio-reclusão, aposentadoria rural, por incapacidade, benefício negado/cortado) seguem o mesmo procedimento.
  - Textos são informação legal geral: **validar com o escritório** (números da aposentadoria valem para quem começou a contribuir após a reforma de 2019).
- **Transição entre páginas "a luz desce"** (global.css + `Layout.astro`): página nova revelada de cima para baixo com uma linha de LED (`.vt-led`) na borda; a antiga recua/escurece. A linha só é nomeada durante a transição via evento `pagereveal` (classe `.vt-nav`); `.vt-chegou` impede o WhatsApp flutuante de "entrar" de novo. Header e WhatsApp ficam fixos. M8: atalho do hero ↔ H1 com `view-transition-name: servico-{slug}` + `view-transition-class: servico`. `--dur-page` agora 650ms.
  - Chrome headless **trava** ao capturar screenshot no meio de uma navegação; validar a transição pelo estado final (`vt-chegou`, URL) ou no navegador.
- **Home montada (2026-11-14), em `src/pages/index.astro`:** Hero → "Como podemos ajudar" (`#previdenciario`: 5 `ServiceCard` vindos de `beneficios.ts` + 6º cartão escuro "Não sabe qual é o seu caso?" com WhatsApp) → "Como funciona" (`#como-funciona`, `Steps`) → "Perguntas frequentes" (`#duvidas`, `Accordion` + `AntiScamNotice`) → CTA final (LED + monograma em marca d'água) → rodapé (`#contato`). Menu do header reduzido às seções que existem (Previdenciário, Como funciona, Dúvidas, Contato); **voltar "Áreas", "O escritório" e "Equipe" quando existirem** (comentário PENDENTE em `SiteHeader.astro`).
  - **Regra do M8:** `view-transition-name` precisa ser único por página. Na home o morph fica nos cartões; os chips do hero NÃO têm nome (duplicado cancelaria a transição).
  - Faltam na home (⛔ dependem do cliente): Outras áreas, O escritório (fotos boas), Equipe (fotos/bios), Prova social, mapa/endereço.
- **Hub Previdenciário (2026-11-14):** `src/pages/previdenciario/index.astro` (`/previdenciario`). Organiza pela SITUAÇÃO: guia com fio vertical + marcos (cada linha = `pergunta` + `resumo` + nome do benefício, que leva o `view-transition-name` M8 → H1) e dois painéis "Precisa ter contribuído para o INSS?" (sim × não; notas hardcoded no hub, **validar com o escritório**). Novo campo `resumo` em `beneficios.ts` (obrigatório em todo benefício novo). `CtaFinal.astro` (`sections/`) virou componente compartilhado (home + hub; prop `linhas` = título quebrado à mão). Header "Previdenciário" e breadcrumb das páginas de benefício apontam para o hub; a home tem botão "Ver todos os benefícios lado a lado".
- Âncoras ainda sem destino: `#areas`, `#escritorio`, `#equipe` (não estão mais no menu).
- **Bug corrigido no DS:** `[data-reveal-clip]` agora recorta os FILHOS (alvo 100% recortado nunca dispara o IntersectionObserver no Chrome). **SVG com `pathLength` não combina com `vector-effect: non-scaling-stroke`** (o tracejado vira pixels) — para fios responsivos use bordas CSS + `clip-path`.
- **Dev server é lento para imagens** (recodifica AVIF a cada requisição); para screenshots use `npm run build && npx astro preview --port 4400`.
- **Verificação visual completa (2026-11-16):** 7 páginas × (390, 1366, reduce) ok. Para capturar a página inteira, rolar com `scrollTo({behavior:"instant"})` — o `scroll-behavior: smooth` do site faz a rolagem programática "pular" reveals no teste (falso alarme). O link "A r=400" no celular é o menu dentro do `<details>` fechado (invisível, não é bug). Em aberto (decisão do usuário): o `AntiScamNotice` aparece duas vezes seguidas na home e no hub (seção + rodapé).
- Próxima tarefa: demais páginas de benefício (incapacidade, rural, reclusão, negado/cortado) ou SEO da Fase 3.

## Fotos

- Originais em alta: `assets/fotos-hq/` (`fachada.jpg` 3120×4160, `sala-socio.jpg` 3024×4032, `sala-advogado.jpg` 3120×4160). Versões antigas (prints) em `assets/fotos/`.
- **Problemas nas fotos:** fachada tem reflexo de uma pessoa no vidro; o painel de mármore da sala-sócio tem **fita azul** logo abaixo do logo (aprox. y ≥ 1778 px no original). Pedir novas fotos ao cliente.
- `dark-disk/src/assets/photos/hero-sala.jpg` foi refeito (1081×811, painel centralizado, sem a fita) com:
  ```js
  sharp("../assets/fotos-hq/sala-socio.jpg").rotate()
    .extract({ left: 685, top: 949, width: 1081, height: 811 }) // 4:3, termina acima da fita
    .jpeg({ quality: 90, mozjpeg: true }).toFile("src/assets/photos/hero-sala.jpg")
  ```
  Ainda mostra um pouco de teto; trocar quando chegarem fotos novas.
