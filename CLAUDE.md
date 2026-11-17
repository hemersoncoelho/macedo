# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O projeto

Site institucional do escritório **Macedo Neto | Advocacia Especializada** (Direito Previdenciário/INSS como carro-chefe; também Bancário, Contratual, Trabalho, Notarial/Registral). Idioma do site e da comunicação com o usuário: **português (pt-BR)**.

**No início de cada sessão leia [MEMORY.md](MEMORY.md) (contexto e decisões) e [ROADMAP.md](ROADMAP.md) (próximos passos).** Ao concluir uma etapa, atualize os dois.

## Estrutura

```
Macedo/
├── docs/                 # pesquisa e decisões (fonte das escolhas de design)
│   ├── briefing-site.md            # dados do cliente, áreas, pendências, mapa do site
│   ├── design-system-referencias.md
│   └── motion-design.md            # mapa de onde cada transição acontece
├── assets/               # material bruto do cliente (fotos-hq/ = originais em alta)
└── dark-disk/            # o site (Astro 7, sem framework de UI, sem Tailwind)
    ├── DESIGN.md         # design system documentado — consultar antes de qualquer UI
    └── src/
        ├── styles/tokens.css   # FONTE DA VERDADE de cor/tipo/espaço/motion
        ├── styles/global.css   # base, utilitários, regras de motion e reduced-motion
        ├── scripts/motion.ts   # runtime de animação (IntersectionObserver)
        ├── data/site.ts        # dados do escritório (campos PENDENTE)
        ├── components/ui/      # componentes do DS
        ├── components/layout/  # SiteHeader, SiteFooter
        └── pages/design-system.astro  # documentação viva do DS (noindex)
```

## Comandos (rodar dentro de `dark-disk/`)

O Astro 7 exige **Node ≥ 22.23.4**; o Node padrão do sistema é 20 e falha. Use o Node do nvm:

```bash
export PATH=$HOME/.nvm/versions/node/v22.23.5/bin:$PATH   # ou: nvm use 22
npm run build                 # build estático em dist/ — validação principal (não há testes nem lint)
npx astro dev --background    # dev server (ver AGENTS.md); `astro dev status|stop|logs`
npx astro check               # checagem de tipos .astro/.ts
```

Já houve um dev server em background na porta **4329** — confira com `npx astro dev status` antes de subir outro.

**Verificação visual:** o Playwright MCP não funciona neste ambiente (falta a extensão "Playwright MCP Bridge"). Use o script com Chrome headless + CDP, que emula viewport real e reporta overflow horizontal:

```bash
node scripts/screenshot.mjs http://localhost:4329/ 390 844 /tmp/claude-1000/mob.png   # celular
node scripts/screenshot.mjs http://localhost:4329/ 1366 900 /tmp/claude-1000/desk.png # desktop
```
Saída: `{"vw":390,"sw":390,"wide":[...]}` — `sw > vw` significa rolagem horizontal (bug). `google-chrome --window-size` sozinho NÃO serve para mobile (não encolhe abaixo de ~500px).

## Arquitetura do design system (o que exige ler vários arquivos)

- **Tons por seção, não "dark mode":** `tokens.css` define tokens semânticos (`--color-bg`, `--color-text`, `--color-accent`, `--color-on-accent`, `--color-focus`…) em `:root` (claro) e os redefine em `.tone-dark`. Componentes usam só os semânticos, então funcionam em qualquer seção. Nunca use hex direto em componente.
- **Motion opt-in por atributo**, ligado por `motion.ts` (adiciona `.is-in` uma única vez):
  `data-reveal` (fade-up; `data-reveal-group` no pai gera cascata via `--i`), `data-reveal-mask` + `.mask-line > span` (título linha a linha), `data-reveal-clip` (imagem por máscara), `.led-frame` (luz de LED na borda), `data-draw` (traço SVG / fio dos passos).
- **Conteúdo nunca depende do JS:** `Layout.astro` adiciona `.js` no `<html>` antes da pintura; estados ocultos só valem sob `.js:not(.motion-fallback)`. Se `motion.ts` não marcar `.motion-ready` em 3s, entra `.motion-fallback` e tudo aparece. `.intro-seen` (sessionStorage `mn-intro`) faz o monograma (M1) tocar só uma vez por sessão.
- Todo motion novo precisa de regra em `@media (prefers-reduced-motion: reduce)` (deslocamento → fade 150ms). Só animar `transform`/`opacity`/`clip-path`.
- **Transição entre páginas:** CSS nativo `@view-transition { navigation: auto }` (sem ClientRouter). `ServiceCard` define `view-transition-name: servico-{slug}`; a página do benefício deve usar o mesmo nome no H1.
- Estilos de componente são `<style>` com escopo do Astro; para reagir às classes globais use `:global(.js:not(.motion-fallback)) .x:not(:global(.is-in))`.

## Regras de produto (não óbvias, vêm do briefing)

- Público: idosos, rurais, PcD, celular simples em 3G/4G → corpo ≥ 18px, alvos ≥ 48px, WCAG 2.2 AA, linguagem simples.
- **WhatsApp é o CTA nº 1** (`WhatsAppButton`, `whatsappUrl()` em `site.ts`). Verde `#1F7A4D` — o `#25D366` oficial com texto branco reprova contraste.
- **OAB (Provimento 205/2021):** publicidade informativa; sem promessa de resultado, sem comparação, sem valores de causas. **Depoimentos** só com autorização escrita (LGPD), por iniciais, nunca print do WhatsApp.
- Proibido: balança/martelo/colunas, azul-marinho genérico, carrossel automático, preloader, scroll sequestrado (Lenis), WhatsApp pulsando.
- Não invente dados do escritório (anos de experiência, nº de clientes, cidade, "consulta grátis"); use `PENDENTE` e registre no ROADMAP.

## Ambiente / hooks

- Um hook (GateGuard) bloqueia a **primeira** tentativa de criar cada arquivo novo e pede fatos (quem chama o arquivo, que não existe equivalente, dados, instrução literal do usuário). Para economizar, faça a primeira tentativa com conteúdo mínimo, apresente os fatos e reenvie o conteúdo real. Editar arquivos existentes não é bloqueado.
- Há um hook de custo que pede para avisar o usuário quando a sessão fica cara — respeite-o.
