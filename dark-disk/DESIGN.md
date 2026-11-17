# DESIGN.md — Design System Macedo Neto | Advocacia Especializada

> **v0.1 · rascunho para validação com o cliente.**
> Página viva: `/design-system` (rodar `npm run dev`). Pesquisa de origem em `../docs/`:
> [briefing-site.md](../docs/briefing-site.md) · [design-system-referencias.md](../docs/design-system-referencias.md) · [motion-design.md](../docs/motion-design.md)

## 1. Direção

| Pergunta | Resposta |
|---|---|
| **Propósito** | Levar quem precisa do INSS (e outras áreas) a uma conversa pelo WhatsApp, com confiança. |
| **Público** | Pessoas idosas, trabalhadores rurais, PcD, mães; celular simples em 3G/4G; pouca familiaridade digital. |
| **Tom** | *Refinado e calmo*: premium na aparência, gov.br na usabilidade. |
| **Detalhe memorável** | O próprio escritório vira interface: grafite da fachada, mármore, letras de aço, madeira e a **luz de LED** que contorna o painel do logo (motion M2). |
| **Restrições** | WCAG 2.2 AA, corpo ≥ 18px, sem dependências de animação, publicidade informativa (Provimento 205/2021 OAB), LGPD. |

**Anti-padrões banidos:** balança/martelo/colunas, azul-marinho genérico, gradientes roxos, glassmorphism decorativo, carrossel automático, preloader, scroll sequestrado, banco de imagem com aperto de mão.

## 2. Estrutura no projeto

```
src/
├── styles/
│   ├── tokens.css        ← fonte da verdade (CSS custom properties)
│   └── global.css        ← base, layout, utilitários, motion, reduced-motion
├── design/tokens.json    ← espelho legível por máquina + contrastes
├── scripts/motion.ts     ← revelações (IntersectionObserver), header compacto, intro 1x/sessão
├── data/site.ts          ← dados do escritório (campos PENDENTE)
├── layouts/Layout.astro  ← pt-BR, fontes, classe .js antes da pintura, fallback de segurança
├── components/
│   ├── ui/               ← Icon, Button, WhatsAppButton, SectionHeading, Divider, Monogram,
│   │                       ServiceCard, Steps, LawyerCard, Testimonial, Accordion, AntiScamNotice
│   └── layout/           ← SiteHeader, SiteFooter
└── pages/design-system.astro  ← documentação viva (noindex)
```

## 3. Cor

Nomes = materiais do escritório. Tons por **seção**: claro (padrão, "Dia") e `.tone-dark` ("Noite"); os tokens semânticos (`--color-bg`, `--color-text`, `--color-accent`…) trocam sozinhos.

| Token | HEX | Origem | Uso | Contraste |
|---|---|---|---|---|
| `grafite-950` | `#111214` | ACM da fachada | Fundo escuro / texto sobre claro | 16,8:1 |
| `grafite-900` | `#1C1E21` | — | Superfícies no escuro | — |
| `marmore-600` | `#5B5F66` | Mármore | Texto secundário (claro) | 5,7:1 AA |
| `prata-300` | `#C9CCD1` | Letras de aço | Texto/logo no escuro | 11,6:1 AAA |
| `prata-500` | `#9A9EA5` | — | Texto secundário (escuro) | 7,0:1 AAA |
| `pedra-50` | `#F4F2EE` | Piso | Fundo claro | — |
| `madeira-700` | `#8A5530` | Marcenaria | CTA/links no claro | 5,5:1 AA |
| `madeira-400` | `#C49A6C` | Marcenaria | CTA/destaque no escuro | 7,3:1 AAA |
| `sucesso-700` | `#1F7A4D` | — | Botão WhatsApp (texto branco) | 5,3:1 AA |

**Por quê:** o setor jurídico se concentra em azul/vermelho/bordô; pedra + metal + madeira posiciona como "material nobre" (lição Haynes Boone/White & Case) e dá continuidade à experiência física. O verde oficial do WhatsApp (`#25D366`) com texto branco **reprova** (1,8:1) — por isso `sucesso-700`.

## 4. Tipografia

| Papel | Fonte | Por quê |
|---|---|---|
| Títulos | Montserrat 600/700 | Geométrica, ecoa o letreiro "MACEDO NETO" |
| Overline | Montserrat 500, caixa alta, 0.16em | Repete "ADVOCACIA ESPECIALIZADA" |
| Texto | Source Sans 3 400/600 | Legibilidade em tela pequena, acentuação completa |
| Citações | Cormorant Garamond itálico | Serifa só na "voz" (modelo Hannes Snellman) |

Escala curta e fluida: `small 16` · `body 18` · `lead 20→22` · `h3 22→26` · `h2 28→38` · `h1 34→56`. Linha ≤ 70ch. **Nunca texto corrido abaixo de 18px.**

## 5. Espaço, grid e forma

- Base 8: `--space-1…10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container 1200px; gutter 16→32px; `.grid` auto-fill com `--grid-min`.
- Raio 2–4px (arquitetura reta da fachada). Profundidade por contraste e borda de 1px; sombra só no hover.
- Alvo de toque mínimo **48px** (`--target-min`).

## 6. Motion

Duas camadas (IBM Carbon): **produtivo** (interface, 120–300ms) e **expressivo** (marca, 600–1200ms). Curva-assinatura `cubic-bezier(.22,1,.36,1)` — "pedra pousando". Só `transform`/`opacity`/`clip-path`. Cada elemento anima **uma vez**.

| # | Elemento | Implementação |
|---|---|---|
| M1 | Monograma se desenha (1x/sessão) | `Monogram animate` + `.intro-seen` |
| M2 | Luz de LED na borda | classe `.led-frame` (`@property --led-angle`) |
| M3 | Deriva do mármore | *fase 2* (só desktop) |
| M4 | Divisor diagonal do "N" | `Divider` (`data-draw`) |
| M5 | Título por máscara | `data-reveal-mask` + `.mask-line > span` |
| M6 | Fade-up padrão | `data-reveal` (+ `data-reveal-group` para cascata 70ms) |
| M7 | Fio dos passos | `Steps` |
| M8 | Card → página | `view-transition-name: servico-{slug}` + `@view-transition` |

**Segurança:** conteúdo só fica oculto com `.js`; se o motion não iniciar em 3s, `.motion-fallback` mostra tudo. `prefers-reduced-motion` → fade de 150ms, M1/M2/M5/M7/M8 desligados. Sem loops, sem carrossel automático (WCAG 2.2.2), sem preloader.

## 7. Componentes

| Componente | Regras-chave |
|---|---|
| `Button` | primary / secondary / ghost; ≥ 48px; seta anda 4px no hover; `<a>` ou `<button>` |
| `WhatsAppButton` | inline / floating; mensagem pré-preenchida por página; floating entra 1x, sem pulsar |
| `SectionHeading` | overline + título + divisor M4 + lead |
| `ServiceCard` | pergunta orientadora + título; card inteiro clicável; M8 |
| `Steps` | 01/02/03 + fio M7; vertical no mobile, horizontal no desktop |
| `LawyerCard` | foto padronizada (P&B → cor) ou iniciais sobre mármore; OAB visível |
| `Testimonial` | aspas em serifa, iniciais + benefício. **Só com autorização escrita** |
| `Accordion` | `<details name>` nativo (exclusivo); altura animada onde suportado |
| `AntiScamNotice` | "Como saber se a mensagem é mesmo do escritório" |
| `SiteHeader` | sticky escuro; compacta após 80px (vira só monograma); menu mobile `<details>` |
| `SiteFooter` | OABs, endereço, Instagram, aviso antigolpe, nota Provimento 205/2021 |

## 8. Acessibilidade (WCAG 2.2 AA)

Contraste ≥ 4.5:1 texto / 3:1 UI · foco `3px` sempre visível e instantâneo · alvos ≥ 48px · skip link · `lang="pt-BR"` · ícones `aria-hidden` com texto ao lado · links externos avisam "abre em nova aba" quando só ícone · reflow sem rolagem horizontal até 400% · motion desligável.

## 9. Voz

Clara, acolhedora, "você", frases curtas, termo popular + técnico ("auxílio-doença (auxílio por incapacidade temporária)"). **Nunca:** promessa de resultado, comparação com outros escritórios, valores de causas, juridiquês.

## 10. Pendências que afetam o DS

- [ ] **Logo em SVG** — `Monogram.astro` é placeholder geométrico (bloqueia M1 final e favicon).
- [ ] Foto em alta da **textura do mármore** — `.bg-marmore` é um gradiente provisório.
- [ ] Retratos dos advogados (fundo liso, luz quente).
- [ ] WhatsApp, endereço, CNPJ em `src/data/site.ts`.
- [ ] Validar com o cliente: variação "Noite" (hero escuro) vs. "Dia".
- [ ] Decisão sobre depoimentos (OAB/LGPD).
