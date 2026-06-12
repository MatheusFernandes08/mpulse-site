Este repositório contém o site institucional da **MPulse IA**, empresa especializada em soluções de Inteligência Artificial para negócios de diferentes segmentos.

O site foi projetado para:

- Apresentar o portfólio de produtos e serviços da MPulse IA
- Gerar leads qualificados via formulário de contato com integração ao WhatsApp
- Oferecer atendimento inicial automatizado via **agente de IA** embutido no chat widget
- Transmitir credibilidade técnica e autoridade no segmento de IA

**Fundador:** Matheus Fernandes de Sousa Pimentel — Mestre em Engenharia e Especialista em IA para Negócios  

## 🛠️ Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **HTML5** | — | Estrutura semântica e acessível do conteúdo |
| **CSS3** | — | Layout, animações, responsividade e design system |
| **JavaScript** | ES6+ | Interatividade, chat widget e integração com WhatsApp |
| **Google Fonts** | — | Tipografia: Space Grotesk, Inter, JetBrains Mono |
| **Vercel** | — | Hospedagem, HTTPS e deploy automático via GitHub |

> **Sem dependências externas.** O projeto não usa npm, frameworks ou bibliotecas de terceiros. Isso garante carregamento rápido, zero configuração de build e máxima portabilidade.

## 📁 Estrutura do repositório

```
mpulse-ia-site/
│
├── html/
│   └── index.html          # Estrutura e conteúdo do site
│
├── css/
│   ├── main.css            # Estilos principais (variáveis, layout, seções)
│   └── chat.css            # Estilos do widget de chat / assistente virtual
│
├── js/
│   └── main.js             # Lógica de interatividade e agente de IA
│
├── README.md               # Documentação do projeto (este arquivo)
│
└── docs/                   # Materiais de apoio (não publicados no site)
    ├── Estrategia_Vendas_Sistemas.pdf
    ├── Prompts_Lovable_Sistemas.pdf
    └── Prompts_Seguranca_Analise.pdf
```

### Detalhamento dos arquivos

#### `html/index.html`
Contém toda a estrutura HTML5 semântica do site, dividida em seções comentadas:
- `<nav>` — navegação fixa com logo animado e link para WhatsApp
- `<section class="hero">` — tela inicial com headline, botões e estatísticas
- `<section id="sobre">` — apresentação do fundador com badges de credenciais
- `<section id="servicos">` — grade com os 6 produtos/serviços
- `<section id="como">` — processo em 3 passos
- `<section id="precos">` — tabela de planos e preços
- `<section id="contato">` — formulário + informações de contato
- Chat widget — assistente virtual flutuante (HTML + referência aos arquivos externos)

#### `css/main.css`
Design system completo com 12 seções documentadas:
- Variáveis CSS globais (cores, espaçamentos, tipografia)
- Animações: `@keyframes pulse-dot`, `spin-border` (avatar giratório)
- Grid de fundo futurístico via `body::before`
- Layout responsivo com `grid`, `flexbox` e `clamp()` para tipografia fluida
- Media queries para mobile (≤ 768px) e `prefers-reduced-motion`

#### `css/chat.css`
Estilos isolados do assistente virtual:
- Bolinha flutuante com efeito glow
- Janela do chat com header em gradiente
- Balões de mensagem (agente e usuário)
- Animação de digitação (três pontos pulsantes)

#### `js/main.js`
Lógica de interatividade em JavaScript puro (sem jQuery ou libs):
- `handleSubmit()` — captura formulário e abre WhatsApp com mensagem formatada
- `respostas` — base de conhecimento do assistente (palavras-chave + respostas)
- `toggleChat()` / `addMsg()` / `showTyping()` — controle do chat widget
- `getReply()` — motor de busca por palavras-chave nas mensagens
- `quickReply()` / `sendMsg()` — processamento de interações do usuário


### Convenção de mensagens de commit

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade ou seção |
| `fix:` | Correção de bug ou erro visual |
| `style:` | Alteração apenas de CSS (cores, espaçamentos) |
| `content:` | Atualização de texto ou imagem |
| `docs:` | Atualização do README |

---

## 🏗️ Arquitetura do código

### Design system — variáveis CSS

Todas as cores e espaçamentos estão centralizados em `:root` no `css/main.css`. Para alterar a identidade visual, basta editar esse bloco:

```css
:root {
  --purple:       #7C3AED;   /* cor primária — botões, destaques */
  --purple-dark:  #5B21B6;   /* hover dos botões */
  --purple-light: #A78BFA;   /* textos em roxo claro */
  --cyan:         #06B6D4;   /* cor secundária — eyebrows, dot animado */
  --bg:           #07070F;   /* fundo principal */
  --bg2:          #0D0D1C;   /* fundo de seções alternadas */
  --bg3:          #14142A;   /* fundo de cards */
  --text:         #E8E6F0;   /* texto principal */
  --muted:        #8B8AA6;   /* texto secundário / labels */
}
```

### Como adicionar um novo tema ao agente de IA

No arquivo `js/main.js`, localize o objeto `respostas` e adicione uma nova entrada:

```javascript
const respostas = {
  // ... entradas existentes ...

  // NOVO TEMA — exemplo: perguntas sobre suporte
  suporte: {
    kw: ['suporte', 'problema', 'ajuda', 'dúvida', 'erro'],
    text: 'Para suporte técnico, o Matheus atende por WhatsApp em horário comercial. ' +
          'Clientes com plano Profissional têm prioridade de atendimento! 🛠️',
    wpp: true   // true = exibe botão de abrir WhatsApp após a resposta
  }
};
```

## 🗺️ Roadmap

### v1.0 — Atual
- [x] Site institucional com design futurístico
- [x] Chat widget com agente de IA embutido
- [x] Formulário de contato integrado ao WhatsApp
- [x] Layout responsivo (mobile e desktop)
- [x] Código separado em HTML, CSS e JS
- [x] Publicação no GitHub

Copyright © 2026 MPulse IA — Matheus Pimentel
Todos os direitos reservados.

Este projeto é de uso privado e proprietário.
É proibida a reprodução total ou parcial sem autorização expressa do autor.

