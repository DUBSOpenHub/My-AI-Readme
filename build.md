---
title: Build Your Profile
permalink: /build/
layout: default
---

<style>
/* Reset & Layout */
.builder-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
}
.builder-header {
  text-align: center;
  margin-bottom: 2rem;
}
.builder-header h1 { font-size: 2rem; margin-bottom: 0.25rem; }
.builder-header .subtitle { color: #656d76; font-size: 1.05rem; }

/* Progress Bar */
.progress-wrap {
  margin-bottom: 2rem;
}
.progress-bar-bg {
  width: 100%;
  height: 8px;
  background: #e1e4e8;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #0969da, #1f6feb);
  border-radius: 4px;
  transition: width 0.4s ease;
}
.progress-text {
  font-size: 13px;
  color: #656d76;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
}

/* Question Card */
.question-card {
  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.question-card .section-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.badge-basics { background: #ddf4ff; color: #0969da; }
.badge-workstyle { background: #fff8c5; color: #9a6700; }
.badge-fun { background: #ffebe9; color: #cf222e; }
.question-card h2 {
  font-size: 1.2rem;
  margin: 0 0 16px 0;
  color: #1f2328;
}

/* Choice Buttons */
.choices {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.choice-btn {
  display: block;
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  text-align: left;
  border: 2px solid #d0d7de;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s;
  color: #1f2328;
  font-family: inherit;
}
.choice-btn:hover {
  border-color: #0969da;
  background: #f6f8fa;
}
.choice-btn.selected {
  border-color: #0969da;
  background: #ddf4ff;
  font-weight: 600;
}

/* Text Input */
.text-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 2px solid #d0d7de;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.text-input:focus {
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9,105,218,0.15);
}
.input-hint {
  font-size: 13px;
  color: #8b949e;
  margin-top: 6px;
}

/* Navigation */
.nav-row {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
.btn-next, .btn-skip {
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
  font-family: inherit;
}
.btn-next {
  background: #0969da;
  color: #fff;
  flex: 1;
}
.btn-next:hover { background: #0550ae; }
.btn-next:disabled { background: #8b949e; cursor: not-allowed; }
.btn-skip {
  background: transparent;
  color: #656d76;
  border: 1px solid #d0d7de;
}
.btn-skip:hover { background: #f6f8fa; }

/* Celebration */
.confetti { font-size: 3rem; text-align: center; margin: 1rem 0; }
.celebration-card {
  background: linear-gradient(135deg, #f0f7ff, #e8f0fe);
  border: 1px solid #c8d8ea;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}
.celebration-card h2 { margin-top: 0; }
.profile-link {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 24px;
  background: #0969da;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}
.profile-link:hover { background: #0550ae; color: #fff; text-decoration: none; }

/* Preview */
.preview-card {
  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 1.5rem;
  font-size: 14px;
  line-height: 1.6;
}
.preview-card h3 { margin-top: 0; }
.preview-card table { width: 100%; border-collapse: collapse; margin: 12px 0; }
.preview-card td { padding: 4px 8px; vertical-align: top; }
.preview-card td:first-child { font-weight: 600; white-space: nowrap; width: 100px; }

/* Phase indicator */
.phase-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 1.5rem;
}
.phase-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e1e4e8;
  transition: background 0.3s;
}
.phase-dot.active { background: #0969da; }
.phase-dot.done { background: #1a7f37; }

/* Avatar placeholder */
.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ddf4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 12px;
}

/* Responsive */
@media (max-width: 600px) {
  .builder-container { padding: 0.5rem; }
  .question-card { padding: 20px; }
}
</style>

<div class="builder-container">

  <div class="builder-header">
    <h1>🤖 My AI README</h1>
    <p class="subtitle">Build your "How to Work With Me" profile</p>
  </div>

  <div class="phase-dots">
    <div class="phase-dot" id="dot0"></div>
    <div class="phase-dot" id="dot1"></div>
    <div class="phase-dot" id="dot2"></div>
    <div class="phase-dot" id="dot3"></div>
    <div class="phase-dot" id="dot4"></div>
  </div>

  <div class="progress-wrap">
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" id="progressFill" style="width: 0%"></div>
    </div>
    <div class="progress-text">
      <span id="progressLabel">Ready to start</span>
      <span id="progressCount"></span>
    </div>
  </div>

  <div id="questionArea"></div>

</div>

<script>
(function() {
  var questions = [
    { id:'name', section:'basics', badge:'The Basics', type:'text', q:"What's your name?", hint:'First and last name', required:true },
    { id:'role', section:'basics', badge:'The Basics', type:'text', q:"What's your role or job title?", hint:'e.g., Senior Product Manager, Staff Engineer', required:true },
    { id:'business_unit', section:'basics', badge:'The Basics', type:'choice', q:"Which business unit or org are you in?", choices:["DevRel","Operations","Engineering","Product","Design","Marketing","Sales","Finance","Legal","People / HR"], required:true },
    { id:'team', section:'basics', badge:'The Basics', type:'text', q:"What team are you on?", hint:'e.g., Platform, Growth, Infrastructure', required:true },
    { id:'start_date', section:'basics', badge:'The Basics', type:'text', q:"When did you join the company?", hint:'e.g., March 2022, Q1 2024', required:false },
    { id:'email', section:'basics', badge:'The Basics', type:'text', q:"Work email for your profile?", hint:'e.g., you@company.com', required:false },
    { id:'linkedin', section:'basics', badge:'The Basics', type:'text', q:"LinkedIn URL?", hint:'e.g., linkedin.com/in/yourname', required:false },
    { id:'github', section:'basics', badge:'The Basics', type:'text', q:"GitHub username?", hint:'e.g., octocat', required:false },
    { id:'social', section:'basics', badge:'The Basics', type:'text', q:"Any other social handles?", hint:'Twitter/X, Bluesky, personal site, etc.', required:false },
    { id:'communication', section:'workstyle', badge:'How You Work', type:'choice', q:"How do you prefer to communicate?", choices:["Slack-first 💬","Email person 📧","Face-to-face / video 📹","Async — messages & docs 📄","Whatever works 🤷"], required:true },
    { id:'productivity', section:'workstyle', badge:'How You Work', type:'choice', q:"When are you at your best?", choices:["Early bird — mornings are magic 🌅","Night owl — I peak after lunch 🦉","Steady throughout the day ⏰","Depends on the coffee ☕"], required:true },
    { id:'feedback', section:'workstyle', badge:'How You Work', type:'choice', q:"How do you like to receive feedback?", choices:["Direct and to the point 🎯","With context and kindness 🎁","In writing so I can process it 📝","Over a 1:1 conversation 🗣️"], required:true },
    { id:'superpower', section:'workstyle', badge:'How You Work', type:'choice', q:"What's your superpower at work?", choices:["Making complex things simple 🧩","Bringing people together 🤝","Shipping fast and iterating 🚀","Asking the right questions ❓","Deep expertise in my domain 🔬","Keeping everyone organized 📋"], required:true },
    { id:'drains', section:'workstyle', badge:'How You Work', type:'choice', q:"What drains your energy?", choices:["Unnecessary meetings 😴","Ambiguity without a path forward 🌫️","Context switching all day 🔄","Long email threads 📨","Being blocked without clear ownership 🚧"], required:true },
    { id:'timezone', section:'workstyle', badge:'How You Work', type:'text', q:"Your timezone & working hours?", hint:'e.g., PST 9am–5pm, EST flexible', required:true },
    { id:'fun_fact', section:'fun', badge:'Fun Stuff', type:'text', q:"Tell me a fun fact about you! 🎉", hint:'Something your teammates might not know', required:true },
    { id:'spirit_emoji', section:'fun', badge:'Fun Stuff', type:'choice', q:"If you were an emoji, which one?", choices:["🚀","🧩","🎨","🦉","☕","🔥","🌊","🎯","💡","🐙"], required:true },
    { id:'snack_drink', section:'fun', badge:'Fun Stuff', type:'text', q:"Your go-to snack or drink while working?", hint:'The fuel that powers you', required:true },
  ];

  var answers = {};
  var current = -1; // -1 = welcome
  var area = document.getElementById('questionArea');
  var total = questions.length;

  function updateProgress() {
    var pct = current < 0 ? 0 : Math.round(((current) / total) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressCount').textContent = current < 0 ? '' : current + ' / ' + total;
    document.getElementById('progressLabel').textContent =
      current < 0 ? 'Ready to start' :
      current < 8 ? '📬 The Basics' :
      current < 14 ? '💬 How You Work' :
      current < total ? '🎲 Fun Stuff' : '✨ Preview';

    // Phase dots
    var phases = [0, 8, 14, total, total+1];
    for (var i = 0; i < 5; i++) {
      var dot = document.getElementById('dot' + i);
      if (current >= phases[i]) {
        dot.className = i < 4 && current >= phases[i+1] ? 'phase-dot done' : 'phase-dot active';
      } else {
        dot.className = 'phase-dot';
      }
    }
  }

  function badgeClass(section) {
    return section === 'basics' ? 'badge-basics' : section === 'workstyle' ? 'badge-workstyle' : 'badge-fun';
  }

  function showWelcome() {
    current = -1;
    updateProgress();
    area.innerHTML =
      '<div class="question-card">' +
        '<div class="confetti">🤖</div>' +
        '<h2 style="text-align:center">Welcome to My AI README!</h2>' +
        '<p style="text-align:center;color:#656d76;margin-bottom:24px;">' +
          "I'll help you build your \"How to Work With Me\" profile.<br>" +
          '<b>⏱️ ~3 minutes</b> · <b>✅ Mostly multiple-choice</b> · <b>✍️ AI writes the polished version</b>' +
        '</p>' +
        '<div class="choices">' +
          '<button class="choice-btn" onclick="window._start()">Let\'s go! 🚀</button>' +
          '<button class="choice-btn" onclick="window._example()">Show me an example first 👀</button>' +
        '</div>' +
      '</div>';
  }

  window._start = function() { current = 0; showQuestion(); };

  window._example = function() {
    area.innerHTML =
      '<div class="preview-card">' +
        '<div class="avatar-circle">🧩</div>' +
        '<h3 style="text-align:center">My AI README: Jane Doe</h3>' +
        '<p style="text-align:center;color:#656d76;font-style:italic">Senior Product Manager · Platform Team</p>' +
        '<table>' +
          '<tr><td>📧</td><td>jane.doe@company.com</td></tr>' +
          '<tr><td>🔗</td><td>linkedin.com/in/janedoe</td></tr>' +
          '<tr><td>🕐</td><td>PST (10am–6pm)</td></tr>' +
        '</table>' +
        '<p><b>💬 Communication:</b> I\'m Slack-first — ping me anytime. For complex stuff, let\'s hop on a quick call.</p>' +
        '<p><b>⚡ Superpower:</b> Making complex things simple. Give me a tangled problem and I\'ll find the one-sentence version.</p>' +
        '<p><b>🔋 Drains me:</b> Ambiguity without a path forward. I need us to agree on the next step.</p>' +
        '<p><b>🎲 Fun fact:</b> I once gave a keynote in a language I don\'t speak.</p>' +
      '</div>' +
      '<div class="nav-row"><button class="btn-next" onclick="window._start()">Build mine! 🚀</button></div>';
  };

  function showQuestion() {
    if (current >= total) { showPreview(); return; }
    var q = questions[current];
    updateProgress();
    var html = '<div class="question-card">' +
      '<span class="section-badge ' + badgeClass(q.section) + '">' + q.badge + '</span>' +
      '<h2>' + q.q + '</h2>';

    if (q.type === 'choice') {
      html += '<div class="choices">';
      q.choices.forEach(function(c) {
        html += '<button class="choice-btn" onclick="window._pick(this, \'' + c.replace(/'/g,"\\'") + '\')">' + c + '</button>';
      });
      html += '</div>';
      html += '<div class="nav-row">';
      if (!q.required) html += '<button class="btn-skip" onclick="window._skipQ()">Skip ⏭️</button>';
      html += '<button class="btn-next" id="btnNext" onclick="window._next()" disabled>Next →</button></div>';
    } else {
      html += '<input type="text" class="text-input" id="textIn" placeholder="Type your answer..." oninput="window._checkText()"' +
        (answers[q.id] ? ' value="' + answers[q.id].replace(/"/g,'&quot;') + '"' : '') + '>';
      if (q.hint) html += '<p class="input-hint">' + q.hint + '</p>';
      html += '<div class="nav-row">';
      if (!q.required) html += '<button class="btn-skip" onclick="window._skipQ()">Skip ⏭️</button>';
      html += '<button class="btn-next" id="btnNext" onclick="window._next()"' + (q.required ? ' disabled' : '') + '>Next →</button></div>';
    }

    html += '</div>';
    area.innerHTML = html;

    var inp = document.getElementById('textIn');
    if (inp) { inp.focus(); inp.addEventListener('keydown', function(e) { if (e.key === 'Enter') window._next(); }); }
  }

  window._pick = function(el, val) {
    var btns = el.parentNode.querySelectorAll('.choice-btn');
    btns.forEach(function(b) { b.classList.remove('selected'); });
    el.classList.add('selected');
    answers[questions[current].id] = val;
    document.getElementById('btnNext').disabled = false;
  };

  window._checkText = function() {
    var q = questions[current];
    var val = document.getElementById('textIn').value.trim();
    document.getElementById('btnNext').disabled = q.required && !val;
  };

  window._skipQ = function() {
    current++;
    showQuestion();
  };

  window._next = function() {
    var q = questions[current];
    if (q.type === 'text') {
      var val = document.getElementById('textIn').value.trim();
      if (q.required && !val) return;
      if (val) answers[q.id] = val;
    }
    current++;
    showQuestion();
  };

  function showPreview() {
    updateProgress();
    var a = answers;
    var avatar = a.github
      ? '<img src="https://github.com/' + a.github + '.png?size=120" style="width:80px;height:80px;border-radius:50%;margin-bottom:8px;" onerror="this.style.display=\'none\'">'
      : '<div class="avatar-circle">' + (a.spirit_emoji || '🤖') + '</div>';

    var rows = '';
    if (a.name) rows += '<tr><td><b>Name</b></td><td>' + a.name + '</td></tr>';
    if (a.role) rows += '<tr><td><b>Role</b></td><td>' + a.role + '</td></tr>';
    if (a.business_unit) rows += '<tr><td><b>Business Unit</b></td><td>' + a.business_unit + '</td></tr>';
    if (a.team) rows += '<tr><td><b>Team</b></td><td>' + a.team + '</td></tr>';
    if (a.start_date) rows += '<tr><td><b>Joined</b></td><td>' + a.start_date + '</td></tr>';
    if (a.email) rows += '<tr><td><b>Email</b></td><td>' + a.email + '</td></tr>';
    if (a.linkedin) rows += '<tr><td><b>LinkedIn</b></td><td>' + a.linkedin + '</td></tr>';
    if (a.github) rows += '<tr><td><b>GitHub</b></td><td>@' + a.github + '</td></tr>';
    if (a.social) rows += '<tr><td><b>Social</b></td><td>' + a.social + '</td></tr>';
    if (a.timezone) rows += '<tr><td><b>Timezone</b></td><td>' + a.timezone + '</td></tr>';

    area.innerHTML =
      '<div class="preview-card">' +
        '<div style="text-align:center">' + avatar + '</div>' +
        '<h3 style="text-align:center;margin-top:8px">🤖 My AI README: ' + (a.name || 'You') + '</h3>' +
        '<p style="text-align:center;color:#656d76;font-style:italic">' +
          (a.role || '') + ' · ' + (a.team || '') + ' · ' + (a.spirit_emoji || '') + ' ' + (a.snack_drink || '') +
        '</p>' +
        '<table>' + rows + '</table>' +
        '<hr style="border:none;border-top:1px solid #e1e4e8;margin:16px 0">' +
        '<p><b>💬 Communication:</b> ' + (a.communication || 'Not specified') + '</p>' +
        '<p><b>⏰ Best hours:</b> ' + (a.productivity || 'Not specified') + '</p>' +
        '<p><b>📝 Feedback:</b> ' + (a.feedback || 'Not specified') + '</p>' +
        '<p><b>⚡ Superpower:</b> ' + (a.superpower || 'Not specified') + '</p>' +
        '<p><b>🔋 Drains me:</b> ' + (a.drains || 'Not specified') + '</p>' +
        '<hr style="border:none;border-top:1px solid #e1e4e8;margin:16px 0">' +
        '<p><b>🎲 Fun fact:</b> ' + (a.fun_fact || '') + '</p>' +
        '<p><b>' + (a.spirit_emoji || '🤖') + ' Spirit emoji</b></p>' +
        '<p><b>☕ Fuel:</b> ' + (a.snack_drink || '') + '</p>' +
      '</div>' +
      '<p style="text-align:center;color:#656d76;font-size:13px;margin-bottom:16px">' +
        '⬆️ This is a mockup preview. In the real CLI, the AI expands your short answers into polished prose!' +
      '</p>' +
      '<div class="choices">' +
        '<button class="choice-btn" onclick="window._celebrate()" style="text-align:center;font-weight:600">Looks great, save it! ✅</button>' +
        '<button class="choice-btn" onclick="window._start()" style="text-align:center">Start over 🔄</button>' +
      '</div>';
  }

  window._celebrate = function() {
    var a = answers;
    var slug = (a.name || 'profile').toLowerCase().replace(/\s+/g, '-');
    area.innerHTML =
      '<div class="celebration-card">' +
        '<div class="confetti">🎉🎉🎉</div>' +
        '<h2>Your My AI README profile is live!</h2>' +
        '<p>📄 Saved to: <code>profiles/' + slug + '.md</code></p>' +
        '<p>📚 Added to the team directory</p>' +
        '<br>' +
        '<p>🤝 Share this with your team and tell them to build theirs!</p>' +
        '<a href="../profiles/" class="profile-link">Browse Team Directory →</a>' +
        '<p style="margin-top:24px;font-size:13px;color:#656d76">' +
          'This is a mockup. In the real experience, run <code>@my-ai-readme</code> in Copilot CLI!' +
        '</p>' +
      '</div>';
  };

  // Start
  showWelcome();
})();
</script>
