# ROADMAP.md — Site Macedo Neto

> Legenda: ✅ feito · 🔜 próximo · ⬜ a fazer · ⛔ bloqueado (depende do cliente)

## Fase 0 — Pesquisa e fundação ✅
- ✅ Referências de sites (`docs/briefing-site.md`)
- ✅ Referências de design system (`docs/design-system-referencias.md`)
- ✅ Motion design e mapa de transições (`docs/motion-design.md`)
- ✅ Design system v0.1 no Astro (`dark-disk/DESIGN.md`, tokens, 14 componentes, `/design-system`)

## Fase 1 — Home 🔜
- ✅ **Hero** (`sections/Hero.astro`) — sem foto, painel "parede do escritório" em CSS
- ✅ Remover o starter do Astro
- ✅ "Como podemos ajudar" — `ServiceCard` ×5 + cartão "Não sabe qual é o seu caso?"
- ✅ "Como funciona" — `Steps`, âncora `#como-funciona`
- ⬜ "Outras áreas" — Bancário, Contratos, Trabalho, Notarial/Registral (⛔ lista final)
- ✅ "O escritório" — chamada na home (foto da sala com `data-reveal-clip` + `.led-frame`, M2) → página `/escritorio`
- ✅ "Equipe" em `/escritorio#equipe` — `LawyerCard` ×3 com iniciais (⛔ retratos e bios)
- ✅ Prova social — `sections/Depoimentos.astro` (home + `/escritorio`), 3 trechos sem nome em `data/depoimentos.ts` (⛔ **autorização escrita dos 3 clientes antes de publicar**)
- ✅ FAQ — `Accordion` + `AntiScamNotice`
- ✅ CTA final (LED + marca d'água) · ⬜ mapa (⛔ endereço)
- ✅ Verificação visual (2026-11-16): home, hub e 5 benefícios em 390px, 1366px e "reduzir movimento" — sem rolagem horizontal, todo conteúdo revelado. Corrigidos: breadcrumb desalinhado e links dos painéis do hub < 48px

## Fase 2 — Páginas internas
- ✅ Transição entre páginas "a luz desce" + M8 (atalho → H1)
- ✅ Modelo de página de benefício (`[slug].astro` + `data/beneficios.ts`): **Aposentadoria**, **Pensão por morte**, **Salário-maternidade**, **Auxílio-doença** e **BPC/LOAS** prontos (os 5 atalhos do hero); textos a validar
- ✅ Hub Previdenciário (`/previdenciario`, guia por situação + comparador "precisa contribuir?")
- ⬜ Demais páginas de benefício: aposentadoria por incapacidade, aposentadoria rural, auxílio-reclusão, benefício negado/cortado
  - modelo: Para quem é → Quem tem direito → Documentos → Como ajudamos → FAQ → CTA WhatsApp (mensagem por benefício)
  - H1 com `view-transition-name: servico-{slug}` (M8)
  - avaliar Content Collections do Astro para os textos
- ⬜ Páginas das demais áreas
- ✅ O escritório (`/escritorio`: onde fica, por dentro, equipe, depoimentos) · ⬜ Contato
- ⬜ M3 (deriva do mármore, só desktop) — opcional

## Fase 3 — Publicação
- ⬜ SEO: títulos/descrições por página, `sitemap`, Open Graph, schema.org `LegalService`/`Attorney`
- ⬜ Favicon a partir do monograma real
- ⬜ Política de privacidade (LGPD)
- ⬜ Performance: auto-hospedar fontes (hoje Google Fonts), checar Lighthouse em mobile
- ⬜ Domínio + hospedagem (⛔ domínio)
- ⬜ Validação final dos textos pelo escritório

## Pendências do cliente ⛔ (bloqueiam partes acima)
- [ ] **Logo em SVG** (o `Monogram.astro` é placeholder; afeta M1 e favicon)
- [ ] WhatsApp, telefone, e-mail, CNPJ, endereço completo, cidade/UF, horário → `src/data/site.ts`
- [ ] Lista final de áreas (Consumidor? Família? Trabalho? Notarial?)
- [ ] Fotos: fachada sem reflexo, sala sem fita azul, recepção, retratos dos 3 advogados + bios
- [ ] Foto em alta da textura do mármore (substituir o gradiente `.bg-marmore`)
- [ ] Decisão sobre depoimentos + autorizações; perfil no Google com avaliações?
- [ ] Atua também no Piauí? Atende online/outras cidades?
- [ ] O que pode ser dito sobre honorários / primeira conversa
- [ ] Escolha da variação visual "Noite" vs "Dia"
