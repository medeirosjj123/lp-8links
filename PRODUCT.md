# Product

## Register

brand

## Users

O 8links fala com quem **tem um site mas não tem SEO** — e não quer virar especialista pra conseguir.

- **Donos de sites de afiliados** — vivem de comissão e dependem de tráfego. Mais visita orgânica = mais venda, sem queimar margem em ads.
- **Donos de blogs e sites com AdSense** — monetizam volume de tráfego. Cada posição que sobe no Google vira receita.
- **Revendedores e agências de SEO** (plano Agency) — querem entregar resultado a clientes sem fazer o trabalho braçal. Usam CRM embutido, relatórios white-label e controle de links por cliente.
- **Iniciante que não entende de SEO** — a persona central. Já tentou publicar todo dia, já achou Ahrefs/Semrush um "painel de avião", já pagou agência cara sem entender o que recebia. O bordão da marca é pra ele: *"se você sabe copiar e colar um link, sabe usar o 8links."*

**Contexto de uso:** brasileiro, em português, frustrado com tentativas anteriores, querendo resultado sem o fardo do trabalho manual. O job a ser feito: **colocar o site na primeira página do Google sem virar especialista e sem operar ferramenta complexa.**

**Emoções a evocar:** alívio (alguém/algo carrega o fardo), confiança (fundador real, sites reais, sem risco de punição), e uma urgência leve e honesta (o concorrente está crescendo agora).

## Product Purpose

O 8links faz SEO no piloto automático: detecta as palavras-chave que já estão perto da primeira página, publica artigos por IA em uma rede de 68+ sites brasileiros reais do mesmo nicho, monitora posições em tempo real e repete toda semana — sem o usuário precisar entender ou operar nada.

A landing page existe pra **converter o cético cansado em assinante**. Sucesso é a pessoa que "já tentou de tudo" entender, em um scroll, que aqui o trabalho é feito *por ela* — e assinar (Stripe cartão ou Kiwify PIX) num dos três planos (Starter R$147, Pro R$247, Agency R$397), todos com a consultoria do 8links Club inclusa.

## Brand Personality

Três palavras: **direto, desmistificador, confiante-sem-hype.**

- **Voz:** primeira pessoa do fundador (Bruno Medeiros, especialista em SEO, 16k no YouTube). A marca tem rosto, não é corporativa anônima.
- **Tom:** PT-BR coloquial, frases curtas com peso, promessa concreta e visual ("enquanto você dorme, viaja ou faz qualquer outra coisa"). Nunca jargão de SEO sem traduzir.
- **Postura:** prova no lugar de adjetivo. Não diz "o melhor", mostra "+347%", "68+ sites", depoimento em vídeo. Encara a objeção de frente (medo de punição do Google, demora) em vez de esconder.

## Anti-references

O 8links **não pode parecer** nenhuma destas quatro coisas:

1. **Painel de avião (Ahrefs / Semrush).** Dashboards densos de dados que só mostram e não agem. A própria LP zomba disso: *"parecem painel de avião, custam R$500+ por mês e só mostram dados — não fazem nada por você."* O 8links é o oposto: faz por você, sem jargão.
2. **SaaS genérico de template.** Fundo cream/branco, fonte Inter, cards idênticos icon-título-texto repetidos, hero centralizado padrão. O "AI fez isso" do mercado SaaS.
3. **Crypto / hype neon.** Neon berrante sobre preto, glow exagerado, promessa de enriquecer. Mesmo sendo dark + laranja, não pode ter cara de esquema.
4. **Curso de info-produto agressivo.** Contagem regressiva, vermelho gritando, depoimento empilhado, "método secreto". O registro de lançamento hypado é proibido.

## Design Principles

1. **Faz por você, não te ensina.** A interface mostra a automação *acontecendo* (autopilot, feed ao vivo, backlinks sendo criados), não ferramentas pra operar. Show the autopilot working.
2. **Anti-jargão por padrão.** Toda promessa em linguagem de quem não sabe SEO. Se precisa explicar um termo técnico, reescreve até não precisar.
3. **Prova concreta vence adjetivo.** Números reais, sites reais, depoimentos em vídeo de pessoas reais. Métrica antes de superlativo.
4. **Honestidade desarma objeção.** Encara o medo de frente — punição do Google, prazo, "preciso saber de SEO?" — com resposta direta, não com silêncio.
5. **Fundador na frente.** Bruno é a credibilidade. A epiphany bridge (a história), o avatar no rodapé e o "16k no YouTube" não são enfeite: são a âncora de confiança.

## Accessibility & Inclusion

**Alvo: WCAG AA.**

- Contraste mínimo 4.5:1 em texto corrido. Atenção redobrada ao `text-secondary` (#999) e `text-muted` (#555) sobre `surface` (#050505) — o muted em particular precisa de auditoria de contraste (ver DESIGN.md → Do's and Don'ts).
- Foco visível e navegável por teclado em CTAs, accordion de FAQ e lightbox (o lightbox já tem suporte a Esc/setas).
- **`prefers-reduced-motion` deve ser respeitado.** Hoje a LP anima reveals, aurora, marquee, gradiente e tickers sem honrar a preferência — é uma pendência de a11y, não uma decisão. Animação decorativa precisa desligar com `prefers-reduced-motion: reduce`.
