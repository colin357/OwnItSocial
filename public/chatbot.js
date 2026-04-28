(function () {
  'use strict';

  const QUESTIONS = [
    {
      id: 'veteran',
      text: 'Are you a veteran or active-duty service member?',
      type: 'buttons',
      options: ['Yes, I\'m a veteran', 'Yes, active duty', 'No'],
    },
    {
      id: 'home_type',
      text: 'What type of home are you looking for?',
      type: 'buttons',
      options: ['Single Family', 'Townhouse / Condo', 'Multi-Family', 'Not sure yet'],
    },
    {
      id: 'home_budget',
      text: 'What is your target home purchase price?',
      type: 'buttons',
      options: ['Under $200k', '$200k–$350k', '$350k–$500k', '$500k–$750k', '$750k+'],
    },
    {
      id: 'monthly_budget',
      text: 'What monthly payment are you comfortable with?',
      type: 'buttons',
      options: ['Under $1,000', '$1,000–$1,500', '$1,500–$2,000', '$2,000–$2,500', '$2,500+'],
    },
    {
      id: 'credit_score',
      text: 'What is your approximate credit score?',
      type: 'buttons',
      options: ['Below 580', '580–619', '620–679', '680–719', '720+', 'Not sure'],
    },
    {
      id: 'timeline',
      text: 'When are you hoping to buy?',
      type: 'buttons',
      options: ['ASAP / 0–3 months', '3–6 months', '6–12 months', 'Just exploring'],
    },
    {
      id: 'location',
      text: 'What city or area are you looking in?',
      type: 'text',
      placeholder: 'e.g. San Antonio, TX',
    },
    {
      id: 'name',
      text: 'What\'s your name?',
      type: 'text',
      placeholder: 'Your full name',
    },
    {
      id: 'phone',
      text: 'What\'s the best phone number to reach you?',
      type: 'text',
      placeholder: '(555) 555-5555',
    },
    {
      id: 'email',
      text: 'And your email address?',
      type: 'text',
      placeholder: 'you@email.com',
    },
  ];

  const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/17690982/uvml2j7/';

  const STYLES = `
    #kh-chat-widget * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    #kh-chat-toggle {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
      background: #1a3a6b; color: #fff; font-size: 28px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, background 0.2s;
    }
    #kh-chat-toggle:hover { background: #14305a; transform: scale(1.08); }
    #kh-chat-window {
      position: fixed; bottom: 96px; right: 24px; z-index: 9998;
      width: 360px; max-width: calc(100vw - 32px);
      background: #fff; border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      display: flex; flex-direction: column; overflow: hidden;
      transition: opacity 0.25s, transform 0.25s;
    }
    #kh-chat-window.kh-hidden { opacity: 0; pointer-events: none; transform: translateY(16px); }
    #kh-chat-header {
      background: #1a3a6b; color: #fff; padding: 14px 18px;
      display: flex; align-items: center; gap: 10px;
    }
    #kh-chat-header img {
      width: 38px; height: 38px; border-radius: 50%; object-fit: cover;
      border: 2px solid rgba(255,255,255,0.4);
    }
    #kh-chat-header .kh-header-info { flex: 1; }
    #kh-chat-header .kh-header-name { font-weight: 700; font-size: 15px; }
    #kh-chat-header .kh-header-sub { font-size: 12px; opacity: 0.8; }
    #kh-chat-header .kh-close-btn {
      background: none; border: none; color: #fff; font-size: 20px; cursor: pointer; padding: 0 4px; line-height: 1;
    }
    #kh-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px 14px; display: flex; flex-direction: column; gap: 10px;
      min-height: 280px; max-height: 380px;
    }
    .kh-msg { max-width: 80%; padding: 10px 14px; border-radius: 14px; font-size: 14px; line-height: 1.45; }
    .kh-msg-bot { background: #f0f2f7; color: #1a1a2e; border-bottom-left-radius: 4px; align-self: flex-start; }
    .kh-msg-user { background: #1a3a6b; color: #fff; border-bottom-right-radius: 4px; align-self: flex-end; }
    .kh-buttons { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 2px; }
    .kh-opt-btn {
      background: #fff; border: 1.5px solid #1a3a6b; color: #1a3a6b;
      border-radius: 20px; padding: 6px 14px; font-size: 13px; cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }
    .kh-opt-btn:hover { background: #1a3a6b; color: #fff; }
    .kh-opt-btn:disabled { opacity: 0.45; cursor: default; }
    #kh-chat-input-row {
      display: flex; gap: 8px; padding: 10px 12px; border-top: 1px solid #e5e8f0; align-items: center;
    }
    #kh-chat-input {
      flex: 1; border: 1.5px solid #d0d4e0; border-radius: 22px; padding: 9px 14px;
      font-size: 14px; outline: none; transition: border-color 0.15s;
    }
    #kh-chat-input:focus { border-color: #1a3a6b; }
    #kh-chat-send {
      background: #1a3a6b; color: #fff; border: none; border-radius: 50%;
      width: 38px; height: 38px; cursor: pointer; font-size: 17px;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s;
    }
    #kh-chat-send:hover { background: #14305a; }
    #kh-chat-send:disabled { background: #b0b8cc; cursor: default; }
    .kh-typing { display: flex; gap: 4px; align-items: center; padding: 10px 14px; }
    .kh-typing span {
      width: 7px; height: 7px; background: #b0b8cc; border-radius: 50%; display: inline-block;
      animation: kh-bounce 1.2s infinite;
    }
    .kh-typing span:nth-child(2) { animation-delay: 0.2s; }
    .kh-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes kh-bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
    .kh-progress { font-size: 11px; color: #888; text-align: center; padding: 4px 0 0; }
    .kh-thank-you { text-align: center; padding: 16px 8px; font-size: 14px; color: #1a3a6b; font-weight: 600; }
    @media (max-width: 400px) {
      #kh-chat-window { right: 12px; bottom: 88px; width: calc(100vw - 24px); }
      #kh-chat-toggle { right: 12px; bottom: 16px; }
    }
  `;

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function buildWidget() {
    const container = document.createElement('div');
    container.id = 'kh-chat-widget';
    container.innerHTML = `
      <button id="kh-chat-toggle" aria-label="Chat with us">💬</button>
      <div id="kh-chat-window" class="kh-hidden" role="dialog" aria-label="VA Home Buyer Chat">
        <div id="kh-chat-header">
          <div class="kh-header-info">
            <div class="kh-header-name">Kris Heichel</div>
            <div class="kh-header-sub">VA Home Loan Specialist ⭐</div>
          </div>
          <button class="kh-close-btn" id="kh-chat-close" aria-label="Close chat">✕</button>
        </div>
        <div id="kh-chat-messages"></div>
        <div id="kh-chat-input-row">
          <input id="kh-chat-input" type="text" placeholder="Type your answer…" autocomplete="off" />
          <button id="kh-chat-send" aria-label="Send">➤</button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  }

  let state = {
    open: false,
    step: 0,
    answers: {},
    waitingInput: false,
  };

  function getMessages() { return document.getElementById('kh-chat-messages'); }
  function getInput() { return document.getElementById('kh-chat-input'); }
  function getSend() { return document.getElementById('kh-chat-send'); }

  function scrollBottom() {
    const m = getMessages();
    if (m) m.scrollTop = m.scrollHeight;
  }

  function addMessage(text, role) {
    const div = document.createElement('div');
    div.className = 'kh-msg kh-msg-' + role;
    div.textContent = text;
    getMessages().appendChild(div);
    scrollBottom();
    return div;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'kh-msg kh-msg-bot kh-typing';
    div.id = 'kh-typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    getMessages().appendChild(div);
    scrollBottom();
  }

  function removeTyping() {
    const el = document.getElementById('kh-typing-indicator');
    if (el) el.remove();
  }

  function setInputEnabled(enabled) {
    const input = getInput();
    const send = getSend();
    if (input) input.disabled = !enabled;
    if (send) send.disabled = !enabled;
  }

  function askQuestion(q) {
    showTyping();
    setTimeout(function () {
      removeTyping();
      addMessage(q.text, 'bot');

      if (q.type === 'buttons') {
        const wrap = document.createElement('div');
        wrap.className = 'kh-buttons';
        q.options.forEach(function (opt) {
          const btn = document.createElement('button');
          btn.className = 'kh-opt-btn';
          btn.textContent = opt;
          btn.addEventListener('click', function () {
            wrap.querySelectorAll('.kh-opt-btn').forEach(function (b) { b.disabled = true; });
            recordAnswer(q.id, opt);
          });
          wrap.appendChild(btn);
        });
        getMessages().appendChild(wrap);
        scrollBottom();
        setInputEnabled(false);
        state.waitingInput = false;
      } else {
        setInputEnabled(true);
        getInput().placeholder = q.placeholder || 'Type your answer…';
        getInput().focus();
        state.waitingInput = true;
      }
    }, 700);
  }

  function recordAnswer(id, value) {
    state.answers[id] = value;
    addMessage(value, 'user');
    state.step++;
    next();
  }

  function next() {
    if (state.step < QUESTIONS.length) {
      askQuestion(QUESTIONS[state.step]);
    } else {
      finish();
    }
  }

  function finish() {
    setInputEnabled(false);
    showTyping();
    setTimeout(function () {
      removeTyping();
      const msg = getMessages();
      const div = document.createElement('div');
      div.className = 'kh-thank-you';
      div.innerHTML = '🎉 Thanks! Kris will be in touch with you shortly.<br><span style="font-weight:400;color:#555;font-size:13px">A VA specialist will reach out to discuss your options.</span>';
      msg.appendChild(div);
      scrollBottom();
      submitToWebhook();
    }, 800);
  }

  function submitToWebhook() {
    if (!WEBHOOK_URL || WEBHOOK_URL === 'YOUR_WEBHOOK_URL_HERE') return;
    var payload = Object.assign({ timestamp: new Date().toISOString(), source: window.location.href }, state.answers);
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(function () {});
  }

  function openChat() {
    state.open = true;
    document.getElementById('kh-chat-window').classList.remove('kh-hidden');
    document.getElementById('kh-chat-toggle').innerHTML = '✕';
    if (state.step === 0 && getMessages().children.length === 0) {
      greet();
    }
  }

  function closeChat() {
    state.open = false;
    document.getElementById('kh-chat-window').classList.add('kh-hidden');
    document.getElementById('kh-chat-toggle').innerHTML = '💬';
  }

  function greet() {
    showTyping();
    setTimeout(function () {
      removeTyping();
      addMessage('Hi there! 👋 I\'m here to help match you with the best VA home loan options. Just a few quick questions — it only takes 2 minutes!', 'bot');
      setTimeout(function () { next(); }, 600);
    }, 600);
  }

  function init() {
    injectStyles();
    buildWidget();

    document.getElementById('kh-chat-toggle').addEventListener('click', function () {
      state.open ? closeChat() : openChat();
    });
    document.getElementById('kh-chat-close').addEventListener('click', closeChat);

    getSend().addEventListener('click', handleTextSubmit);
    getInput().addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleTextSubmit();
    });
  }

  function handleTextSubmit() {
    if (!state.waitingInput) return;
    const input = getInput();
    const val = (input.value || '').trim();
    if (!val) return;
    input.value = '';
    const q = QUESTIONS[state.step];
    state.waitingInput = false;
    recordAnswer(q.id, val);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
