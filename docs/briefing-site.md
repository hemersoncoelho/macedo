# Briefing — Site Macedo Neto | Advocacia Especializada

> Documento de trabalho para construir o site. Tudo marcado com **[PENDENTE]** precisa ser confirmado com o cliente.

---

## 1. Referências de sites

### A. Estrutura e conversão: o que copiar na lógica da página

| # | Site | País | Por que usar como referência |
|---|------|------|------------------------------|
| 1 | [ingracio.adv.br](https://ingracio.adv.br) | BR (previdenciário) | **Referência principal de estrutura.** O hero fala direto com quem teve um benefício negado ou precisa de orientação, com a nota do Google ao lado. Os cards de serviço têm uma pergunta orientadora. Traz um "Passo a passo" em 3 etapas, um FAQ antes do contato (honorários, atendimento em outras cidades) e um bloco **"como confirmar que a mensagem é mesmo do escritório"**, que protege contra o golpe do falso advogado. |
| 2 | [koetzadvocacia.com.br](https://www.koetzadvocacia.com.br) | BR (previdenciário) | WhatsApp como CTA principal, com mensagem já preenchida ("Gostaria de falar com um advogado especialista"). Tem uma seção de equipe com foto e OAB de cada advogado, um blog "Conheça seus direitos", aviso contra golpes no rodapé e CNPJ visível. |
| 3 | [forthepeople.com](https://www.forthepeople.com) (Morgan & Morgan) | EUA | O maior escritório voltado a pessoa física dos EUA. Vale estudar o "How it works" em 3 passos, o formulário curto logo no topo, os depoimentos em vídeo, o telefone fixo flutuante e o CTA repetido ao longo da página. |
| 4 | [pittabaione.com](https://www.pittabaione.com) | EUA | Escritório de porte parecido. Cards de área com sublinks, depoimentos com estrelas e data, um bloco "Your Case, Our Commitment" com a foto do sócio e a missão, unidades com "atendimento com hora marcada" e formulário de consulta no rodapé. |

### B. Estética: tom premium e institucional

| # | Site | País | Por que usar como referência |
|---|------|------|------------------------------|
| 5 | [cravath.com](https://www.cravath.com) | EUA | Sobriedade editorial: seções numeradas (01 / 02 / 03), muito respiro e tipografia forte. |
| 6 | [mattosfilho.com.br](https://www.mattosfilho.com.br) | BR | Padrão premium brasileiro: paleta contida e fotografia institucional. *(O site bloqueou a leitura automática; vale abrir no navegador.)* |

### C. Acessibilidade para o público do INSS

- [Case Michels Legal Group (8ration)](https://www.8ration.com/case-studies/michels-legal-group-website/): site de advocacia previdenciária americana (SSDI) pensado para pessoas idosas, com limitação física ou pouca familiaridade com tecnologia. É o mesmo perfil do público do BPC/LOAS e da aposentadoria rural.

### Direção proposta

**A estrutura e a conversão das referências 1 a 4, com a estética do próprio escritório.** A identidade física é forte e o site deve ser a continuação dela: preto/grafite (fachada), mármore cinza com veios brancos, prata/branco (logo) e amadeirado (salas) como cor de destaque. O visual é premium e a linguagem é simples.

---

## 2. Dados do escritório

| Campo | Valor |
|------|------|
| Nome | Macedo Neto, Advocacia Especializada |
| Logo | Monograma "MN" + "MACEDO NETO" + "ADVOCACIA ESPECIALIZADA" (prata sobre preto). **[PENDENTE] arquivo vetorial** |
| Instagram | [@advocaciamacedoneto](https://www.instagram.com/advocaciamacedoneto/) |
| Endereço | Nº **108C**, visível na fachada. **[PENDENTE] rua, bairro, cidade/UF, CEP** |
| WhatsApp / telefone / e-mail | **[PENDENTE]** |
| Horário | **[PENDENTE]** |
| CNPJ | **[PENDENTE]** |
| Domínio | **[PENDENTE]** |
| Atende online / outras cidades? | **[PENDENTE]** |

### Equipe (conforme a vitrine da fachada)

| Advogado | OAB |
|---|---|
| Francimar Moura Macedo Neto | OAB/MA 31.307 |
| Victor Felipe Teixeira | OAB/MA 31.375 |
| Benedito Tomaz de Oliveira Neto | OAB/MA 30.308 |

**[PENDENTE]** Foto profissional de cada um, minibio e cargo. Na foto de uma das salas aparece a *Constituição do Estado do Piauí*. Confirmar se o escritório também atua no PI.

---

## 3. Áreas de atuação: inconsistência a resolver

| Área | Fachada | Documento |
|---|:-:|:-:|
| Previdenciário | ✅ | ✅ (mais completo) |
| Bancário | ✅ | ✅ |
| Contratos | ✅ | ✅ |
| **Consumidor** | ✅ | ❌ |
| **Família** | ✅ | ❌ |
| **Trabalho** | ❌ | ✅ |
| **Notarial e Registral** | ❌ | ✅ |

Sugestão: **Previdenciário como carro-chefe**, com uma página por benefício (BPC/LOAS, auxílio-doença, aposentadoria por incapacidade, aposentadoria rural, pensão por morte, salário-maternidade, auxílio-reclusão e "benefício negado ou cortado"). Cada uma segue o modelo: Para quem é → Quem tem direito → Documentos → Como ajudamos → FAQ → CTA WhatsApp.

---

## 4. Material visual recebido (em `assets/`)

| Arquivo | Conteúdo | Uso / ajuste |
|---|---|---|
| `assets/fotos/fachada.png` | Fachada preta com letreiro em mármore | Bloco "Visite o escritório". Tem reflexo de uma pessoa no vidro, então pedir nova foto ou recortar só o letreiro. |
| `assets/fotos/sala-socio.png` | Painel de mármore iluminado com o logo e marcenaria amadeirada | **Melhor foto, para o hero ou "O escritório".** Tem fita azul no painel, então pedir nova foto. |
| `assets/fotos/sala-advogado.png` | Sala de atendimento | Galeria / "Estrutura" |
| `assets/depoimentos/*.png` | 3 prints de WhatsApp | Ver a seção 5 |

**[PENDENTE]** Retratos dos advogados, foto da equipe, recepção e uma cena de atendimento.

---

## 5. Depoimentos (transcritos)

> Os 3 depoimentos (salário-maternidade, pensão por morte, aposentadoria) ficam só na cópia local, em `assets/depoimentos/` (fora do git, por serem dados de clientes — LGPD).

### ⚠️ Antes de publicar: OAB e LGPD

- **OAB (Provimento 205/2021):** a publicidade da advocacia tem de ser informativa, sem captação de clientela nem divulgação de resultados. Depoimentos ficam numa zona cinzenta, então **o advogado deve decidir se publica**.
- **LGPD:** publicar só com autorização escrita, iniciais ou anônimo, **nunca o print bruto do WhatsApp**.
- **Alternativa mais segura:** link para as avaliações do Google. **[PENDENTE]** O escritório tem perfil no Google?

---

## 6. Mapa do site proposto

```
Home
├── Previdenciário (hub) → 1 página por benefício
├── Outras áreas (Bancário, Contratos, Trabalho, Notarial/Registral, [Consumidor, Família?])
├── O escritório
├── Equipe
├── Conheça seus direitos (blog, fase 2)
└── Contato (WhatsApp, mapa, endereço, horário)
```

**Home:** Header com WhatsApp fixo → Hero (dor + CTA) → Como podemos ajudar (cards de benefícios) → Como funciona (3 passos) → Outras áreas → O escritório (fotos) → Equipe → Prova social → FAQ (inclui "como saber se a mensagem é do escritório") → CTA + mapa → Rodapé (CNPJ, OABs, aviso contra golpes).

**Acessibilidade:** texto com 18px ou mais, alto contraste, botões com 48px ou mais, linguagem simples, WhatsApp como canal nº 1, feito primeiro para celular, leve para 3G/4G e sem formulário longo.

---

## 7. Pendências para o cliente

- [ ] Endereço, cidade/UF, horário, atendimento online/outras cidades (PI?)
- [ ] WhatsApp, telefone, e-mail, CNPJ, domínio
- [ ] Logo em vetor
- [ ] Lista final de áreas
- [ ] Fotos e bios dos 3 advogados; novas fotos (fachada sem reflexo, sala sem fita, recepção)
- [ ] Decisão sobre depoimentos + autorização dos clientes
- [ ] Perfil no Google com avaliações?
- [ ] Ano de fundação / história
- [ ] O que pode ser dito sobre honorários e a primeira consulta
- [ ] Validação final dos textos de serviço
