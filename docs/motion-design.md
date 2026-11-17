# Motion Design — Referências, Elementos e Mapa de Transições

> Complemento do [design-system-referencias.md](design-system-referencias.md).
> Regra-mãe: **o movimento revela o conteúdo, não o decora.** O público (INSS, idosos, área rural, PcD, celular em 3G/4G) define o limite: elegante, curto e sempre opcional.

---

## 1. Referências pesquisadas

### 1.1 Sites e peças de advocacia com motion

| Referência | O que observar |
|---|---|
| [Wordstone (Awwwards)](https://www.awwwards.com/inspiration/typography-scroll-wordstone) | Escritório com **logo animado no header**, galeria e tipografia que reage à rolagem. É a curadoria mais confiável do grupo. |
| [AttorneyX (DesignRush)](https://www.designrush.com/best-designs/websites/attorneyx-website-design) | Animações suaves ao rolar e hero de impacto. |
| [King Law Firm (portfólio)](https://personalportfolioproject-aaj.pages.dev/projects/king-law-firm) | Seções que se empilham ao rolar e faixa de logos em loop. ⚠ Serve de referência visual; é pesado demais para o nosso público. |
| [Cinematic Law Firm (template)](https://enter.converge.ai/marketplace/templates/cinematic-law-firm-website-2143) | Overlays escuros cinematográficos e hero em tela cheia. Bom para o clima "Noite" com mármore. |
| [Law Office Attorney (Dribbble)](https://dribbble.com/shots/24690001-Law-Office-Attorney-Premium-Web-Design-Animation) | Conceito premium de motion (referência visual, não verificada em produção). |
| [Digital Silk: escritórios de NY adotando motion UI](https://www.newsfilecorp.com/release/243978) | Tendência: escritórios saindo do site estático para se diferenciar. |
| [PaperStreet: rolar ou não rolar](https://www.paperstreet.com/blog/to-scroll-or-not-to-scroll-law-firm-website-homepage-functions/) | Transições de seção em tela cheia em sites jurídicos. |
| [Cravath](https://www.cravath.com) | Numeração 01/02/03 e carrossel editorial sóbrio. |

### 1.2 Princípios de motion "premium"

| Referência | Achado |
|---|---|
| [Por que alguns sites "parecem caros" (IIAD)](https://www.iiad.edu.in/the-circle/why-some-websites-just-feel-expensive/) | Movimento contido, ritmo lento e muito respiro. |
| [KIJO: princípios de sites de luxo](https://kijo.london/blog/luxury-website-design) | Animações suaves **guiam a atenção sem distrair**. |
| [Animation principles: elegância e sofisticação](https://playbooks.com/skills/dylantarre/animation-principles/elegance-sophistication) | Tempos contidos e easing elegante. Referência: fade 300–400ms, deslize 400–500ms, revelação 500–700ms. **Entradas 30–50% mais longas que saídas** e **uma curva-assinatura em ~80% das animações**. |
| [Bluetext: animação de scroll](https://bluetext.com/blog/scroll-animation/) | Acompanhar o fluxo da rolagem, enfatizar a informação e manter cada sequência curta. |
| [Webflow: 9 exemplos de animação](https://webflow.com/blog/webpage-animation) | Motion a serviço da ação (CTA). |
| [IBM Carbon: Motion](https://carbondesignsystem.com/elements/motion/overview/) / [Material 3: Motion](https://m3.material.io/styles/motion/overview) | Motion tratado como **tokens** (duração + easing). O Carbon separa **produtivo** (interface) de **expressivo** (momentos de marca). **Vamos adotar essa divisão.** |

### 1.3 Acessibilidade

| Referência | Achado |
|---|---|
| [W3C, WCAG 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) | Pessoas com distúrbio vestibular precisam poder desligar o movimento. Técnicas oficiais: **C39** (CSS `prefers-reduced-motion`) e **SCR40** (JS). |
| [NHS Digital: checklist](https://nhsdigital.github.io/accessibility-checklist/pages/2.3.3-animation-respects-reduce-motion-settings) | Serviço público de saúde: toda animação respeita o "reduzir movimento". |
| [MileMark Media: motion em sites jurídicos](https://www.milemarkmedia.com/?p=22588) | **Toda** animação de site jurídico deve respeitar `prefers-reduced-motion`. |
| [Anti-pattern: animação sem reduced motion](https://webgency.github.io/design-system/foundations/anti-patterns/animation-without-reduced-motion) | Com movimento reduzido, **trocar deslocamento por fade** em vez de cortar tudo. |
| [Val Head: Making Motion Inclusive](https://noti.st/valhead/xICaMq/present) | Referência clássica sobre motion inclusivo. |

### 1.4 Tecnologia

| Ferramenta | Situação | Decisão |
|---|---|---|
| **View Transitions entre páginas** ([Chrome Dev](https://developer.chrome.com/docs/web-platform/view-transitions), [caniuse](https://caniuse.com/cross-document-view-transitions), [WebKit](https://webkit.org/?p=16967)) | Chrome/Edge 126+ e **Safari 18.2+**. Firefox ainda não tem (pauta do [Interop 2026](https://hacks.mozilla.org/2026/02/launching-interop-2026/)). | ✅ **Melhoria progressiva**: quem não suporta navega normalmente. |
| **CSS puro + IntersectionObserver** | Universal, cerca de 1 KB de JS. | ✅ **Base de todas as revelações ao rolar.** |
| **Scroll-driven em CSS** (`animation-timeline: view()`) | Suporte crescente, não universal. | ⚠ Só para enfeites dispensáveis, dentro de `@supports`. |
| **GSAP + ScrollTrigger / SplitText** ([Webflow: GSAP grátis](https://webflow.com/blog/gsap-becomes-free)) | **Gratuito para uso comercial desde 30/04/2025**, incluindo SplitText. | ⏸ Desnecessário no MVP. Só se o cliente quiser uma abertura mais cinematográfica (~30–40 KB). |
| **Scroll suave sequestrado** (Lenis, Locomotive) | Popular em sites "Awwwards". | ❌ **Não usar.** Altera a rolagem nativa e confunde o público idoso. |
| **Preloader** | Comum em sites premium. | ❌ **Não usar.** Atrasa o conteúdo no 3G. |

---

## 2. Sistema de motion: tokens

### 2.1 Duas camadas (lógica do Carbon)

| Camada | Para quê | Sensação |
|---|---|---|
| **Produtivo** | Hover, foco, acordeão, menu, botões | Rápido, preciso, quase imperceptível |
| **Expressivo** | Hero, monograma, troca de página, revelação de seção | Lento, "assentado", como pedra sendo colocada |

### 2.2 Durações

| Token | Valor | Uso |
|---|---|---|
| `--dur-instant` | 120ms | Cor de hover |
| `--dur-fast` | 200ms | Botões, ícones, sublinhado |
| `--dur-base` | 300ms | Acordeão, menu, saídas |
| `--dur-slow` | 600ms | Revelação de seções e cards |
| `--dur-page` | 650ms | Troca de página |
| `--dur-signature` | 1200ms | **Só** o desenho do monograma (1x por sessão) |
| `--stagger` | 70ms | Atraso entre itens (máx. 6 itens) |

### 2.3 Curvas

| Token | Valor | Uso |
|---|---|---|
| `--ease-assinatura` | `cubic-bezier(0.22, 1, 0.36, 1)` | **Curva-assinatura** (~80%): sai rápido e assenta devagar, como "pedra pousando" |
| `--ease-saida` | `cubic-bezier(0.4, 0, 1, 1)` | Saídas (sempre mais curtas) |
| `--ease-padrao` | `cubic-bezier(0.4, 0, 0.2, 1)` | Mudanças de estado produtivas |

**Proibido:** quique e elástico (`bounce`, `elastic`, `back`). Parece brinquedo.

### 2.4 Distâncias

- Entrada: **12–16px** no eixo Y (máx. 24px).
- Hover de card: sobe **2px**; seta anda **4px**.
- Escala: no máximo `0.98 → 1`.
- **Só `transform`, `opacity` e `clip-path`.**

---

## 3. Elementos de motion da marca

Os elementos-assinatura vêm **do espaço físico** do escritório:

| # | Elemento | Inspiração física | Como funciona | Camada |
|---|---|---|---|---|
| **M1** | **Monograma que se desenha** | Letras de aço da fachada | O traço do "MN" se desenha (SVG `stroke-dashoffset`) e preenche em prata. 1 vez por sessão. | Expressivo |
| **M2** | **Luz de LED na borda** | Fita de LED quente em volta do painel de mármore | Uma linha de luz (madeira → prata) contorna o bloco ao entrar na tela. Só em 2–3 lugares. | Expressivo |
| **M3** | **Veios do mármore em deriva** | Letreiro de mármore | Parallax muito lento da textura (máx. 40px). Só no desktop. | Expressivo (dispensável) |
| **M4** | **Divisor diagonal do "N"** | Diagonal do monograma | Linha prata que se risca ao entrar na seção | Expressivo |
| **M5** | **Revelação por máscara** | Placas de mármore sendo assentadas | Títulos sobem linha a linha de dentro de uma máscara. Só nos H1. | Expressivo |
| **M6** | **Fade-up padrão** | — | `opacity` + `translateY 16px`, 600ms com a curva-assinatura | Expressivo |
| **M7** | **Fio que liga os passos** | — | Linha 01 → 02 → 03 desenhada conforme a rolagem | Expressivo |
| **M8** | **Card que vira página** | — | O card de serviço se transforma no topo da página do benefício (View Transition) | Expressivo |

---

## 4. Mapa de transições: onde cada coisa acontece

### 4.1 Global

| Onde | Gatilho | Motion | Token |
|---|---|---|---|
| **Header** | Rolar mais de 80px | Compacta (88→64px), o logo completo vira **só o monograma MN** e o fundo ganha desfoque translúcido | `--dur-base` |
| **WhatsApp flutuante** | Carregar a página | Entra 1 vez, 1,5s após o carregamento. **Sem pulsar em loop.** | `--dur-slow` |
| **Menu mobile** | Toque no ☰ | Painel desliza da direita e os links entram em sequência. Fecha mais rápido. | `--dur-base` |
| **Links/botões** | Hover / foco | Sublinhado cresce, botão escurece, seta anda 4px. **O anel de foco é instantâneo.** | `--dur-fast` |
| **Troca de página** | Link interno | "A luz desce": a página nova é revelada de cima para baixo com uma linha de LED quente na borda; a antiga recua e escurece. Header e WhatsApp ficam fixos; o atalho do benefício vira o H1 (M8) | `--dur-page` |
| **Divisores** | Seção entra na tela | **M4** | `--dur-slow` |

### 4.2 Home

| Seção | Motion | Observação |
|---|---|---|
| **1. Hero** | **M1** monograma → **M5** título → subtítulo → botões → **M3** fundo (~1,8s no total) | Na 2ª visita da sessão aparece pronto. O texto nunca fica escondido por mais de 600ms. |
| **2. Como podemos ajudar** | **M6** em cascata. Hover: sobe 2px e a borda vai de prata para madeira | O clique dispara **M8** |
| **3. Como funciona** | **M7** + números com fade-up | — |
| **4. Outras áreas** | **M6** simples | — |
| **5. O escritório** | Foto revelada por máscara horizontal + **M2** luz de LED contornando | **O momento "uau"**: reproduz o painel iluminado real |
| **6. Equipe** | Fade-up em cascata. Hover/foco: foto de P&B para cor | Funciona com toque |
| **7. Prova social** | **M6**. **Sem carrossel automático** (viola a WCAG 2.2.2) | Grade fixa ou setas manuais |
| **8. FAQ** | Acordeão (`grid-template-rows 0fr→1fr`) e o + gira para × | Produtivo |
| **9. CTA final** | **M2** + monograma em marca d'água | 2º e último uso do M2 |
| **10. Rodapé** | Nenhum | — |

### 4.3 Página de benefício

| Seção | Motion |
|---|---|
| Topo | Via **M8** (vindo do card) ou **M5** (acesso direto pelo Google) |
| Quem tem direito / Documentos | Itens do checklist em cascata, com o ✓ se desenhando |
| CTA WhatsApp | Barra fixa no mobile, que aparece após 30% de rolagem |

### 4.4 Equipe / O escritório / Contato

- **Equipe:** foto do card faz morph para a página do advogado (View Transition).
- **O escritório:** galeria com máscara; a foto em tela cheia abre com fade 300ms e fecha com Esc.
- **Contato:** sem animação, exceto o ✓ de confirmação do formulário.

---

## 5. Regras obrigatórias (acessibilidade e performance)

1. **`prefers-reduced-motion`** → todo deslocamento vira **fade de 150ms**; M1, M3, M5, M7 e M8 desligados.
2. Nada pisca mais de 3x por segundo (WCAG 2.3.1).
3. Nada se move sozinho por mais de 5s sem pausa (WCAG 2.2.2).
4. Conteúdo **nunca depende** da animação (sem JS, tudo aparece).
5. Cada elemento anima **uma vez só**.
6. Só `transform`, `opacity` e `clip-path`.
7. Sem preloader, sem scroll sequestrado e sem vídeo de fundo no mobile.
8. Orçamento: **CSS + menos de 2 KB de JS**.

### Esqueleto de referência

```css
:root{
  --ease-assinatura: cubic-bezier(.22,1,.36,1);
  --ease-saida: cubic-bezier(.4,0,1,1);
  --dur-fast: 200ms; --dur-base: 300ms; --dur-slow: 600ms; --dur-page: 650ms;
}

.js .reveal{ opacity:0; transform:translateY(16px); }
.js .reveal.is-in{
  opacity:1; transform:none;
  transition: opacity var(--dur-slow) var(--ease-assinatura),
              transform var(--dur-slow) var(--ease-assinatura);
  transition-delay: calc(var(--i, 0) * 70ms);
}

@view-transition { navigation: auto; }
.site-header{ view-transition-name: header; }

@media (prefers-reduced-motion: reduce){
  .js .reveal{ transform:none; }
  .js .reveal.is-in{ transition: opacity 150ms linear; transition-delay:0s; }
  @view-transition { navigation: none; }
}
```

---

## 6. Próximos passos

1. Prototipar o **M1**, o que exige o **logo em SVG** (pendência do briefing).
2. Protótipo só do hero (M1 + M5 + M2) para o cliente aprovar o tom do movimento.
3. Testar num Android de entrada em 4G limitado e com "Remover animações" ligado.
