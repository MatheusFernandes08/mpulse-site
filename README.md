# MPulse IA — Site Institucional

<div align="center">

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-purple?style=flat-square)
![Licença](https://img.shields.io/badge/licen%C3%A7a-privado-red?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Site institucional e comercial da MPulse IA**  
Soluções e Estratégias em Inteligência Artificial para Negócios

[🌐 Acessar site](#) · [📱 WhatsApp](https://wa.me/5524999999999) · [📋 Solicitar proposta](#contato)

</div>

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Estrutura do repositório](#-estrutura-do-repositório)
- [Como rodar localmente](#-como-rodar-localmente)
- [Como publicar no ar](#-como-publicar-no-ar)
- [Como atualizar o site](#-como-atualizar-o-site)
- [Arquitetura do código](#-arquitetura-do-código)
- [Serviços oferecidos](#-serviços-oferecidos)
- [Roadmap](#-roadmap)
- [Contato](#-contato)

---

## 📌 Sobre o projeto

Este repositório contém o site institucional da **MPulse IA**, empresa especializada em soluções de Inteligência Artificial para negócios de diferentes segmentos.

O site foi projetado para:

- Apresentar o portfólio de produtos e serviços da MPulse IA
- Gerar leads qualificados via formulário de contato com integração ao WhatsApp
- Oferecer atendimento inicial automatizado via **agente de IA** embutido no chat widget
- Transmitir credibilidade técnica e autoridade no segmento de IA

**Fundador:** Matheus Pimentel — Mestre em Engenharia e Especialista em IA para Negócios  
**Localização:** Barra Mansa, RJ — Atendimento remoto em todo o Brasil

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **HTML5** | — | Estrutura semântica e acessível do conteúdo |
| **CSS3** | — | Layout, animações, responsividade e design system |
| **JavaScript** | ES6+ | Interatividade, chat widget e integração com WhatsApp |
| **Google Fonts** | — | Tipografia: Space Grotesk, Inter, JetBrains Mono |
| **Vercel** | — | Hospedagem, HTTPS e deploy automático via GitHub |

> **Sem dependências externas.** O projeto não usa npm, frameworks ou bibliotecas de terceiros. Isso garante carregamento rápido, zero configuração de build e máxima portabilidade.

---

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

---

## 💻 Como rodar localmente

Não é necessário instalar nada. O projeto roda direto no navegador.

```bash
# 1. Clonar o repositório
git clone https://github.com/MatheusP/mpulse-ia-site.git

# 2. Entrar na pasta
cd mpulse-ia-site

# 3. Abrir no navegador
# Windows:
start html/index.html

# macOS:
open html/index.html

# Linux:
xdg-open html/index.html
```

Ou simplesmente arraste o arquivo `html/index.html` para qualquer navegador.

> **Nota:** As fontes do Google Fonts requerem conexão com a internet para carregar. Sem internet, o site usa as fontes de fallback do sistema (sans-serif).

---

## 🚀 Como publicar no ar

O deploy é feito via integração **GitHub → Vercel**. Uma vez configurado, qualquer alteração no repositório é publicada automaticamente em menos de 1 minuto.

### Passo 1 — GitHub (já feito)
O código já está neste repositório. ✅

### Passo 2 — Vercel (primeira vez)
1. Acesse [vercel.com](https://vercel.com) e entre com sua conta GitHub
2. Clique em **"Add New Project"**
3. Selecione este repositório (`mpulse-ia-site`)
4. Em **"Root Directory"**, configure para `html/`
5. Clique em **"Deploy"**

O Vercel gera automaticamente um link como `mpulse-ia-site.vercel.app`.

### Passo 3 — Domínio próprio (opcional)
1. Compre `mpulseia.com.br` no [Registro.br](https://registro.br) (~R$40/ano)
2. No Vercel: **Settings → Domains → Add Domain**
3. Copie os registros DNS fornecidos pelo Vercel
4. Cole-os no painel DNS do Registro.br
5. Aguarde a propagação (até 24h, geralmente menos de 1h)

---

## 🔄 Como atualizar o site

```bash
# 1. Fazer a alteração no arquivo desejado
# Exemplos: editar html/index.html, css/main.css ou js/main.js

# 2. Adicionar as alterações ao Git
git add .

# 3. Fazer o commit com uma mensagem descritiva
git commit -m "feat: adiciona novo serviço de automação"

# 4. Enviar para o GitHub
git push origin main

# ✅ O Vercel detecta o push e publica automaticamente em ~30 segundos
```

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

---

## 🎯 Serviços oferecidos

| # | Produto | Público-alvo | A partir de |
|---|---|---|---|
| 01 | **Strategos — CRM Político** | Vereadores, Deputados | R$ 600/mês |
| 02 | **WhatsApp Político + IA** | Gabinetes e campanhas | R$ 800/mês |
| 03 | **Agente IA — Barbearia** | Barbearias e salões | R$ 500/mês |
| 04 | **Agente IA — Clínica de Saúde** | Odonto e medicina | R$ 600/mês |
| 05 | **Agente IA — Comércio** | Mercados, lojas, restaurantes | R$ 500/mês |
| 06 | **Automações N8N sob medida** | Qualquer segmento | R$ 500/mês |

---

## 🗺️ Roadmap

### v1.0 — Atual
- [x] Site institucional com design futurístico
- [x] Chat widget com agente de IA embutido
- [x] Formulário de contato integrado ao WhatsApp
- [x] Layout responsivo (mobile e desktop)
- [x] Código separado em HTML, CSS e JS
- [x] Publicação no GitHub

### v1.1 — Próximos passos
- [ ] Publicar no ar via Vercel
- [ ] Configurar domínio próprio (mpulseia.com.br)
- [ ] Adicionar favicon e ícone para celular (PWA básico)
- [ ] Conectar formulário ao N8N para notificação automática por WhatsApp

### v2.0 — Futuro (migração para Lovable)
- [ ] Migrar para React + TypeScript + Tailwind CSS
- [ ] Área do cliente com login (Supabase Auth)
- [ ] Blog técnico sobre IA e automação (SEO)
- [ ] Dashboard de demonstração do Strategos
- [ ] Integração com sistema de pagamento (Pagar.me)

---

## 📞 Contato

**Matheus Pimentel**  
Mestre em Engenharia · Especialista em IA para Negócios

| Canal | Contato |
|---|---|
| 📱 WhatsApp | [(24) 9 9999-9999](https://wa.me/5524999999999) |
| ✉️ E-mail | seuemail@gmail.com |
| 📍 Localização | Barra Mansa, RJ — Atende todo Brasil |

---

## 📄 Licença

```
Copyright © 2026 MPulse IA — Matheus Pimentel
Todos os direitos reservados.

Este projeto é de uso privado e proprietário.
É proibida a reprodução total ou parcial sem autorização expressa do autor.
```
