/**
 * ============================================================
 *  MPulse IA — Lógica de Interatividade
 *  Arquivo: js/main.js
 *
 *  Autor:   Matheus Pimentel
 *  Projeto: MPulse IA — Site Institucional
 *  Versão:  1.0.0
 *  Licença: Privado — todos os direitos reservados
 * ============================================================
 *
 *  Índice de funções:
 *
 *  FORMULÁRIO DE CONTATO
 *  ─────────────────────
 *  handleSubmit(e)      → Captura o formulário e abre o WhatsApp
 *                         com a mensagem pré-preenchida
 *
 *  AGENTE DE IA (CHAT WIDGET)
 *  ──────────────────────────
 *  respostas            → Base de conhecimento do assistente virtual.
 *                         Objeto com palavras-chave e respostas por tema.
 *
 *  toggleChat()         → Abre ou fecha a janela do chat
 *  addMsg(html, type)   → Adiciona uma mensagem na conversa
 *                         type: 'user' | 'agent'
 *  showTyping()         → Exibe o indicador de digitação (...)
 *  removeTyping()       → Remove o indicador de digitação
 *  showWpp()            → Adiciona o botão de abrir WhatsApp
 *  getReply(text)       → Busca a resposta correta pelas palavras-chave
 *  quickReply(text)     → Processa clique em botão de resposta rápida
 *  sendMsg()            → Processa mensagem digitada pelo usuário
 *
 * ============================================================
 *
 *  COMO EXPANDIR O AGENTE:
 *  Para adicionar um novo tema, basta acrescentar uma entrada
 *  no objeto `respostas` seguindo o padrão:
 *
 *  novoTema: {
 *    kw: ['palavra1', 'palavra2'],   // palavras que ativam o tema
 *    text: 'Texto da resposta aqui', // pode conter HTML básico
 *    wpp: true                       // true = exibe botão WhatsApp
 *  }
 *
 * ============================================================
 */

'use strict';

function handleSubmit(e) {
  e.preventDefault();
  const nome     = document.getElementById('nome').value;
  const empresa  = document.getElementById('empresa').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const interesse= document.getElementById('interesse').value;
  const mensagem = document.getElementById('mensagem').value;
  const texto = encodeURIComponent(
    `Olá! Me chamo *${nome}*${empresa ? ' — ' + empresa : ''}.\n\n` +
    `*Interesse:* ${interesse}\n*WhatsApp:* ${whatsapp}\n\n` +
    (mensagem ? `*Mensagem:* ${mensagem}` : '')
  );
  window.open(`https://wa.me/5524999999999?text=${texto}`, '_blank');
}

const respostas = {
  strategos:  { kw:['strategos','crm','político','deputado','vereador','eleitor','campanha'],
    text:'O <b>Strategos</b> é o sistema de CRM político mais completo — gerencia lideranças, demandas, mapa de votos e estratégia eleitoral em um painel. 🏛️<br><br>Planos a partir de <b>R$ 600/mês</b>. Quer que eu te conecte ao Matheus para uma demonstração?', wpp:true },
  whatsapp:   { kw:['whatsapp','agente','secretária','atendimento','automação','automático','bot'],
    text:'O agente de IA funciona como uma <b>secretária virtual 24h</b> — agenda, confirma, responde e filtra o que precisa de atenção humana. 🤖<br><br>Disponível para barbearias, clínicas, comércios e políticos. A partir de <b>R$ 500/mês</b>.', wpp:false },
  preco:      { kw:['preço','quanto','custa','valor','mensalidade','plano','investimento'],
    text:'Os planos começam em <b>R$ 500/mês</b> sem fidelidade obrigatória. 💰<br><br><b>Essencial:</b> R$ 500/mês<br><b>Profissional:</b> R$ 800/mês<br><b>Premium Político:</b> R$ 1.500/mês<br><br>Inclui implantação, treinamento e suporte. Quer uma proposta personalizada?', wpp:true },
  proposta:   { kw:['proposta','orçamento','contratar','quero','interesse','negócio'],
    text:'Ótimo! Para montar uma proposta, o Matheus vai precisar de alguns detalhes. Vou te encaminhar direto para o WhatsApp dele:',wpp:true },
  default:    { text:'Entendido! Vou encaminhar para o Matheus. Ele responde em até <b>24 horas</b> ⚡<br><br>Ou prefere falar direto agora?',wpp:true }
};

function toggleChat() {
  const w = document.getElementById('chat-widget');
  w.classList.toggle('open');
  if (w.classList.contains('open')) document.getElementById('chat-notif').style.display='none';
}
function addMsg(html, type) {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div'); d.className = type==='user'?'msg-user':'msg-agent';
  const b = document.createElement('div'); b.className = type==='user'?'bubble-user':'bubble-agent';
  b.innerHTML = html; d.appendChild(b); msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}
function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div'); d.className='msg-agent'; d.id='typing-indicator';
  d.innerHTML='<div class="bubble-agent"><div class="typing"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}
function removeTyping() { const t=document.getElementById('typing-indicator'); if(t)t.remove(); }
function showWpp() {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div'); d.className='msg-agent';
  d.innerHTML=`<a href="https://wa.me/5524999999999" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:#25D366;color:#fff;padding:0.5rem 1.1rem;border-radius:8px;font-size:0.8rem;font-weight:600;text-decoration:none;margin-top:4px;">📱 Abrir WhatsApp</a>`;
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}
function getReply(text) {
  const l = text.toLowerCase();
  for (const k in respostas) {
    if (k==='default') continue;
    if (respostas[k].kw && respostas[k].kw.some(w => l.includes(w))) return respostas[k];
  }
  return respostas.default;
}
function quickReply(text) {
  document.getElementById('quick-options').style.display='none';
  addMsg(text,'user'); showTyping();
  setTimeout(() => { removeTyping(); const r=getReply(text); addMsg(r.text,'agent'); if(r.wpp)showWpp(); }, 900+Math.random()*600);
}
function sendMsg() {
  const inp = document.getElementById('chat-input');
  const t = inp.value.trim(); if(!t) return; inp.value='';
  document.getElementById('quick-options').style.display='none';
  addMsg(t,'user'); showTyping();
  setTimeout(() => { removeTyping(); const r=getReply(t); addMsg(r.text,'agent'); if(r.wpp)showWpp(); }, 900+Math.random()*700);
}
