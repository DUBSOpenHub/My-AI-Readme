---
title: Team Directory
permalink: /profiles/
layout: default
---

<style>
.search-container { margin: 1.5rem 0; }
.search-input { width: 100%; max-width: 480px; padding: 12px 16px 12px 44px; font-size: 16px; border: 2px solid #d0d7de; border-radius: 12px; outline: none; transition: border-color 0.2s; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23656d76' viewBox='0 0 16 16'%3E%3Cpath d='M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04Z'/%3E%3C/svg%3E") 14px center no-repeat; }
.search-input:focus { border-color: #0969da; box-shadow: 0 0 0 3px rgba(9,105,218,0.15); }
.search-count { margin-top: 8px; font-size: 14px; color: #656d76; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-top: 1.5rem; }
.profile-card { border: 1px solid #d0d7de; border-radius: 12px; padding: 20px; transition: box-shadow 0.2s, transform 0.15s; background: #fff; text-decoration: none; color: inherit; display: block; }
.profile-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(-2px); text-decoration: none; color: inherit; }
.card-emoji { font-size: 32px; margin-bottom: 8px; }
.card-name { font-size: 18px; font-weight: 600; margin: 0 0 4px 0; color: #1f2328; }
.card-role { font-size: 14px; color: #656d76; margin: 0 0 8px 0; }
.card-team { display: inline-block; font-size: 12px; padding: 2px 10px; border-radius: 20px; background: #ddf4ff; color: #0969da; font-weight: 500; }
.card-joined { font-size: 12px; color: #8b949e; margin-top: 10px; }
.no-results { display: none; text-align: center; padding: 3rem 1rem; color: #656d76; font-size: 16px; }
.no-results.visible { display: block; }
.cta-banner { margin-top: 2rem; padding: 16px 20px; border-radius: 12px; background: linear-gradient(135deg, #f0f7ff, #e8f0fe); border: 1px solid #c8d8ea; text-align: center; font-size: 15px; color: #1f2328; }
.cta-banner code { background: #fff; padding: 2px 8px; border-radius: 6px; font-weight: 600; }
</style>

<h1>🤖 My AI README Team Directory</h1>
<p><em>Browse profiles to learn how your teammates work best.</em></p>

<div class="search-container">
  <input type="text" class="search-input" id="profileSearch" placeholder="Search by name, role, or team..." autocomplete="off" aria-label="Search profiles">
  <div class="search-count" id="searchCount" aria-live="polite"></div>
</div>

<div class="card-grid" id="cardGrid">

  <a href="gregg-cochran" class="profile-card" data-name="gregg cochran" data-role="staff program manager" data-team="open source programs team">
    
    <div class="card-emoji">☕</div>
    <p class="card-name">Gregg Cochran</p>
    <p class="card-role">Staff Program Manager</p>
    <span class="card-team">Open Source Programs Team</span>
    
  </a>
  <a href="jane-doe" class="profile-card" data-name="jane doe" data-role="senior product manager" data-team="platform team">
    <img src="https://github.com/janedoe.png?size=80" alt="Jane Doe" style="width:48px;height:48px;border-radius:50%;margin-bottom:8px;">
    <div class="card-emoji">🧩</div>
    <p class="card-name">Jane Doe</p>
    <p class="card-role">Senior Product Manager</p>
    <span class="card-team">Platform Team</span>
    <p class="card-joined">Joined June 2021</p>
  </a>
  <a href="marcus-chen" class="profile-card" data-name="marcus chen" data-role="staff software engineer" data-team="infrastructure team">
    <img src="https://github.com/marcuschen.png?size=80" alt="Marcus Chen" style="width:48px;height:48px;border-radius:50%;margin-bottom:8px;">
    <div class="card-emoji">🦉</div>
    <p class="card-name">Marcus Chen</p>
    <p class="card-role">Staff Software Engineer</p>
    <span class="card-team">Infrastructure Team</span>
    <p class="card-joined">Joined January 2020</p>
  </a>
  <a href="sofia-rivera" class="profile-card" data-name="sofia rivera" data-role="ux designer" data-team="growth team">
    
    <div class="card-emoji">🎨</div>
    <p class="card-name">Sofia Rivera</p>
    <p class="card-role">UX Designer</p>
    <span class="card-team">Growth Team</span>
    <p class="card-joined">Joined March 2023</p>
  </a>

</div>

<div class="no-results" id="noResults">
  🔍 No profiles match your search.<br>
  Try a different name, role, or team.
</div>

<div class="cta-banner">
  🤖 Don't see yourself? Run <code>@my-ai-readme</code> in Copilot CLI to create your profile!
</div>

<script>
(function() {
  var search = document.getElementById('profileSearch');
  var grid = document.getElementById('cardGrid');
  var cards = Array.from(grid.querySelectorAll('.profile-card'));
  var noResults = document.getElementById('noResults');
  var countEl = document.getElementById('searchCount');
  var total = cards.length;
  var PAGE_SIZE = 50;
  var showAll = false;

  function update() {
    var q = search.value.toLowerCase().trim();
    var visible = 0;
    var hidden = 0;
    cards.forEach(function(card) {
      var text = card.dataset.name + ' ' + card.dataset.role + ' ' + card.dataset.team;
      var match = !q || text.indexOf(q) !== -1;
      if (match) {
        visible++;
        // Paginate: only show first PAGE_SIZE unless searching or showAll
        card.style.display = (q || showAll || visible <= PAGE_SIZE) ? '' : 'none';
        if (!q && !showAll && visible > PAGE_SIZE) hidden++;
      } else {
        card.style.display = 'none';
      }
    });
    noResults.classList.toggle('visible', visible === 0);
    var msg = q ? visible + ' of ' + total + ' profiles' : total + ' profiles';
    if (!q && !showAll && hidden > 0) msg += ' (showing first ' + PAGE_SIZE + ')';
    countEl.textContent = msg;

    // Show/hide "Show All" button
    var btn = document.getElementById('showAllBtn');
    if (!q && !showAll && hidden > 0) {
      if (!btn) {
        btn = document.createElement('button');
        btn.id = 'showAllBtn';
        btn.textContent = 'Show all ' + total + ' profiles';
        btn.style.cssText = 'margin:16px auto;display:block;padding:10px 24px;border:1px solid #d0d7de;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;';
        btn.onclick = function() { showAll = true; update(); };
        grid.parentNode.insertBefore(btn, grid.nextSibling);
      }
    } else if (btn) {
      btn.remove();
    }
  }
  search.addEventListener('input', function() { showAll = false; update(); });
  update();
})();
</script>
