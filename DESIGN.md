---
name: 8links
description: SEO no piloto automático — dark premium com laranja terracota como única voz de cor
colors:
  orange-500: "#ff751a"
  orange-400: "#ff8b3d"
  orange-600: "#e65c00"
  orange-900: "#371a06"
  amber: "#ff9500"
  surface: "#050505"
  surface-raised: "#0c0c0c"
  surface-card: "#0f0f0f"
  text-primary: "#f0f0f0"
  text-secondary: "#999999"
  text-muted: "#555555"
  border-subtle: "#ffffff0f"
  success-green: "#22c55e"
  warning-red: "#ef4444"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.1
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "0.75rem"
  md: "0.875rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  section: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.orange-500}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.orange-400}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.xl}"
    padding: "1rem 1.5rem"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    padding: "2rem"
  badge-orange:
    backgroundColor: "{colors.orange-900}"
    textColor: "{colors.orange-400}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.375rem 1rem"
  pricing-highlight:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: "2rem"
---

# Design System: 8links

## 1. Overview

**Creative North Star: "O Cockpit no Piloto Automático"**

8links é uma sala escura com uma única luz acesa: o laranja terracota do motor trabalhando enquanto você não está olhando. O sistema é quase-preto de ponta a ponta (`#050505`), e contra esse fundo o laranja não é decoração — é a evidência de que algo está acontecendo sozinho. Aurora difusa, orbs borrados, um beam girando na borda do mockup, tickers que contam sozinhos: tudo comunica automação em movimento, não um painel pra você operar. A densidade é confortável, com seções respiradas (8rem de respiro vertical) e um scroll longo e narrado — problema, ponte, solução, motor, prova, planos.

O sistema **rejeita** quatro coisas por princípio (ver PRODUCT.md → Anti-references): o *painel de avião* da Ahrefs/Semrush (dados densos que não agem), o *SaaS genérico de template* (cream, Inter, cards iguais), o *crypto/hype neon* (apesar de ser dark+laranja, nada de cara de esquema) e o *curso de info-produto agressivo* (vermelho gritando, contagem regressiva). A linha entre "dark premium confiante" e "neon de pump" é fina, e a defesa é a disciplina de cor: um único laranja, chroma controlado, nunca um segundo neon competindo.

A identidade descrita aqui é a que **está em produção e é canônica**. Algumas escolhas divergem das leis gerais do impeccable (gradiente animado em texto, fonte Outfit, glass por padrão) — elas estão documentadas como são, e os pontos de evolução estão marcados como `Don't` futuros na seção 6.

**Key Characteristics:**
- Quase-preto absoluto como palco; laranja terracota como única voz.
- Automação visível: aurora, orbs, beam, tickers, feed ao vivo, marquee.
- Scroll longo e narrado, seção a seção, com respiro generoso (8rem).
- Glass + blur como textura recorrente de superfície (candidato a evolução).
- Mono (IBM Plex Mono) reservado a labels, números e kickers — voz "técnica" medida.

## 2. Colors

Estratégia **Committed**: um único laranja carrega a identidade inteira sobre um neutro quase-preto. Sem segunda cor de marca — verde e vermelho aparecem só como semântica funcional (acerto / objeção).

### Primary
- **Laranja Terracota** (`#ff751a` / `hsl(24 100% 55%)`): a voz da marca. CTAs, kickers, números de destaque, ícones de feature, glow de hover, beam, aurora. É o "motor aceso".
- **Laranja Claro** (`#ff8b3d` / `hsl(24 100% 62%)`): hover de botão, texto de ênfase em laranja (links inline, "8links Club"), texto do badge.
- **Laranja Profundo** (`#e65c00` / `hsl(24 100% 45%)`): base de gradientes de botão e do degradê "Mais popular".
- **Laranja Carvão** (`#371a06` / `hsl(24 80% 12%)`): fundo de badge e superfícies tingidas de laranja em chroma baixíssimo.

### Secondary
- **Âmbar** (`#ff9500` / `hsl(35 100% 50%)`): exclusivo dos orbs flutuantes secundários. Nunca em texto ou CTA — é atmosfera, não voz.

### Tertiary (semântica funcional, não cor de marca)
- **Verde Acerto** (`#22c55e`): checkmarks de feature, respostas na quebra de objeção, ícones de resultado, badge "Bônus incluso". Significa "isso é verdade / isso você ganha".
- **Vermelho Objeção** (`#ef4444`): ícones de dor (seção Problema) e de objeção. Significa "isso é o medo / a frustração". Usado com parcimônia, nunca como alarme de venda.

### Neutral
- **Surface** (`#050505`): o palco. Fundo de tudo.
- **Surface Raised** (`#0c0c0c`) e **Surface Card** (`#0f0f0f`): elevação tonal de cards e painéis.
- **Texto Primário** (`#f0f0f0`): headlines e ênfase. Nunca `#fff` puro.
- **Texto Secundário** (`#999999`): corpo de texto, descrições.
- **Texto Muted** (`#555555`): legendas, metadados, footnotes.
- **Borda Sutil** (`rgba(255,255,255,0.06)`): contorno de cards, divisores, inputs.

### Named Rules
**A Regra da Voz Única.** Existe exatamente um laranja na marca. Verde e vermelho são semântica, não identidade — nunca viram CTA, kicker ou destaque de marca. Um segundo tom saturado disputando atenção empurra o sistema pro território "crypto neon" que o PRODUCT.md proíbe.

**A Regra do Tinte.** Nenhum neutro é cinza puro nem `#000`/`#fff`. O preto é `#050505`, o branco de texto é `#f0f0f0`. Toda superfície laranja-tingida fica em chroma baixíssimo (`rgba(249,115,22,0.06–0.08)`).

## 3. Typography

**Display Font:** Outfit (com `system-ui, sans-serif`)
**Body Font:** Satoshi (com `system-ui, sans-serif`)
**Label/Mono Font:** IBM Plex Mono (com `monospace`)

**Character:** Outfit é uma geométrica de peso pesado (800) que dá o tom confiante e direto das headlines; Satoshi traz um corpo humanista e respirável; Plex Mono injeta a voz "técnica" exatamente onde ela é prova (números, kickers, stats), não onde vira custume. O contraste de peso entre display 800 e body 400 é o motor da hierarquia.

### Hierarchy
- **Display** (Outfit 800, `clamp(2.25rem, 6vw, 5.5rem)`, line-height 0.92, tracking -0.02em): headlines de hero e de seção. Quebras manuais de linha (`<br>`) controlam o ritmo.
- **Headline** (Outfit 800, `clamp(1.875rem, 4vw, 2.25rem)`, line-height 1.1): títulos de bloco de feature (split text/imagem).
- **Title** (Outfit 700, 1.25rem, line-height 1.3): títulos de card, nomes de plano.
- **Body** (Satoshi 400, ~1.0625rem, line-height 1.65): descrições e parágrafos. Manter 65–75ch de largura máxima de leitura.
- **Label** (IBM Plex Mono 600, 0.75rem, letter-spacing 0.05em, UPPERCASE): badges/kickers, tickers de número, barra de stats marquee.

### Named Rules
**A Regra do Mono Medido.** Mono só em label, número e kicker. Nunca em body. Mono em texto corrido vira costume de "dev tool" — e o 8links fala com quem não é técnico.

**A Regra do Peso, Não do Tamanho Sozinho.** A hierarquia nasce do contraste de peso (800 vs 400) somado ao de escala. Headlines são sempre 800; subir tamanho sem subir peso achata a hierarquia.

## 4. Elevation

Sistema **híbrido**: a profundidade base vem de camadas tonais (surface `#050505` → card `#0f0f0f`), e a sombra entra como **resposta a estado**, não como decoração em repouso. Cards são planos no rest e sobem (translateY -3px) com sombra difusa só no hover. O glow laranja é a assinatura de elevação — sombra colorida de baixa opacidade que sugere o "motor aceso" reagindo ao toque.

### Shadow Vocabulary
- **Glow de Botão** (`box-shadow: 0 8px 32px rgba(249,115,22,0.3), 0 0 80px rgba(249,115,22,0.1)`): só no hover do CTA primário. A luz do laranja vazando.
- **Lift de Card** (`box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)`): hover de card neutro.
- **Glow de Card** (`box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 60px rgba(249,115,22,0.05)`): hover de `.card-glow`, laranja sutil.
- **Ring de Plano** (`box-shadow: 0 0 60px rgba(249,115,22,0.08), 0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(249,115,22,0.1)`): o card "Mais popular", elevação permanente pra ancorar a venda.

### Named Rules
**A Regra do Plano em Repouso.** Superfícies são planas paradas. Sombra só aparece como resposta a hover/foco/elevação intencional (o plano destacado). Sombra decorativa em repouso é proibida.

## 5. Components

### Buttons
- **Shape:** cantos arredondados — `rounded-xl` (0.75rem) no primário, `rounded-2xl` (1.5rem) no CTA grande de hero/footer e no outline.
- **Primary:** fundo `orange-500`, texto branco, Outfit 700, padding `1rem 2rem`. Classe `.btn-glow`: brilho deslizante (`::before` translada no hover) + lift -2px + glow laranja.
- **Hover / Focus:** transita pra `orange-400`, sobe 2px, acende o glow. Transição `cubic-bezier(0.16, 1, 0.3, 1)` em 0.4s.
- **Outline (secundário):** transparente, borda `border-subtle`, texto secundário. Hover: borda laranja 0.4 alpha, fundo laranja 0.05, texto `orange-400`. Usado em "Ver planos" e nos CTAs de PIX/Kiwify.

### Cards / Containers
- **Corner Style:** `rounded-lg` (1rem).
- **Background:** `rgba(15,15,15,0.6)` com `backdrop-filter: blur(12px)` (glass). Hover sobe pra `rgba(18,18,18,0.8)`.
- **Shadow Strategy:** plano em repouso; Lift ou Glow de Card no hover (ver Elevation).
- **Border:** `border-subtle` em repouso; `rgba(255,255,255,0.1)` (neutro) ou `rgba(249,115,22,0.15)` (`.card-glow`) no hover.
- **Internal Padding:** 2rem (`p-8`) padrão; 2.5–4rem (`p-10`/`p-16`) em cards-herói (ponte, Club).

### Chips / Badges
- **Style:** pílula (`rounded-full`), fundo laranja-carvão `rgba(249,115,22,0.08)`, borda laranja 0.2, texto `orange-400`, IBM Plex Mono UPPERCASE 0.75rem com tracking. É o kicker que abre cada seção.
- **Variante semântica:** badge verde (`bg-green-500/10`, texto `green-400`) só pra "Bônus incluso".

### Inputs / Fields
Não há formulários nativos na LP atual (conversão é via links externos Stripe/Kiwify). O `<details>` do FAQ é o componente interativo mais próximo: summary clicável, ícone `+` em caixa `rounded-md` que gira 45° (vira `×`) no `[open]`, conteúdo expandindo via transição de `grid-template-rows: 0fr → 1fr` (não `height`).

### Navigation
- **Style:** header fixo com `.nav-glass` — `backdrop-filter: blur(20px) saturate(1.6)`, fundo `rgba(5,5,5,0.7)`. Ao rolar (>60px) ganha `.scrolled`: fundo mais opaco + sombra.
- **Typography:** links em Satoshi/`font-500`, `text-sm`, `text-secondary`.
- **States:** hover → `text-primary`. Login é botão primário laranja compacto.
- **Mobile:** a nav atual NÃO colapsa em hamburger (ver Do's and Don'ts — pendência de responsividade).

### Signature Components
- **Border Beam:** moldura do mockup de hero. Conic-gradient girando (`@property --beam-angle`, 4s linear) revelando o laranja na borda. A assinatura visual do "motor rodando".
- **Number Ticker:** números que contam de 0 ao alvo com easing quart em 2.2s, `IntersectionObserver` disparando no viewport, `tabular-nums`. Prova em movimento.
- **Aurora + Orbs:** radial-gradients laranja/âmbar borrados (`blur 100–120px`, opacity 0.08–0.12) flutuando devagar. Atmosfera, nunca conteúdo.
- **Marquee de Stats:** faixa infinita (`translateX 0 → -50%`, 30s) com números-prova, pausa no hover.
- **Lightbox:** overlay global pros screenshots de produto, com Esc / setas / contador.

## 6. Do's and Don'ts

### Do:
- **Do** manter o laranja terracota como **voz única**. Um acento, um hue. Verde/vermelho só como semântica funcional.
- **Do** tingir todo neutro pro hue da marca em chroma baixíssimo. `#050505` e `#f0f0f0`, nunca `#000`/`#fff`.
- **Do** usar contraste de peso (Outfit 800 vs Satoshi 400) como motor de hierarquia.
- **Do** reservar IBM Plex Mono pra label, número e kicker — nunca body.
- **Do** manter cards planos em repouso; sombra e glow só como resposta a estado.
- **Do** mostrar a automação acontecendo (beam, ticker, feed, marquee) — é a tradução visual de "faz por você".
- **Do** transicionar `grid-template-rows` (não `height`) em accordions; ease-out `cubic-bezier(0.16, 1, 0.3, 1)`.

### Don't:
- **Don't** deixar a LP parecer **painel de avião (Ahrefs/Semrush)**: nada de tabela densa de dados crus que não age. Dado aqui sempre vem com a ação que o 8links toma por cima.
- **Don't** cair no **SaaS genérico de template**: fundo cream/branco, fonte Inter, grades de cards idênticos icon-título-texto, hero centralizado padrão.
- **Don't** flertar com **crypto/hype neon**: segundo neon competindo com o laranja, glow estourado, promessa de enriquecer. O dark+laranja é premium, não pump.
- **Don't** virar **curso de info-produto agressivo**: contagem regressiva, vermelho gritando como alarme de venda, "método secreto".
- **Don't** usar `#000` ou `#fff` puros, nem cinza neutro sem tinte.
- **Don't** usar `border-left`/`border-right` colorida como faixa de acento (regra geral impeccable).

### Pontos de evolução (divergências da lei impeccable — documentadas, candidatas a revisão)
- **`.gradient-text` (background-clip: text + gradiente animado).** Usado em quase toda headline de destaque. A lei impeccable bane gradiente em texto — ênfase deveria vir de peso/cor sólida. É a assinatura atual da marca; evoluir só com decisão deliberada (e Tereza na mesa, por ser token de marca).
- **Outfit + IBM Plex Mono.** Ambas estão na reflex-reject list do impeccable (defaults de training-data). Como já são a identidade no ar, preservação vence — mas qualquer redesign greenfield deveria buscar mais longe.
- **Glass por padrão.** `backdrop-filter: blur` em praticamente toda superfície (cards, nav). A lei trata glassmorphism como raro e proposital. Avaliar reduzir o glass a superfícies de destaque.
- **Grades de cards idênticos.** Problema (3), Motor (4), Resultados (3) repetem o padrão card-igual. Considerar quebrar o ritmo em pelo menos uma seção.
- **Drift token↔hardcode.** O token `orange-500` é `hsl(24 100% 55%)` (≈`#ff751a`), mas sombras e bordas hardcodam `rgba(249,115,22,...)` (≈`#f97316`, o laranja-500 do Tailwind). São dois laranjas levemente diferentes convivendo. Unificar numa fonte de verdade.
- **`prefers-reduced-motion` não respeitado.** Reveals, aurora, marquee, beam, gradiente e tickers animam sempre. Pendência de WCAG AA: desligar animação decorativa sob `prefers-reduced-motion: reduce`.
- **Contraste de `text-muted` (#555 sobre #050505).** Abaixo de 4.5:1. Auditar e subir onde for texto informativo (não só decorativo) pra cumprir o AA cravado no PRODUCT.md.
