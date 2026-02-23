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

<div class="filter-bar" style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 8px;">
  <button class="filter-btn active" data-filter="all" onclick="filterCards('all', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #0969da; color: #fff; cursor: pointer; font-size: 13px;">All</button>
  <button class="filter-btn" data-filter="the-architect" onclick="filterCards('the-architect', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px;">🏗️ Architect</button>
  <button class="filter-btn" data-filter="the-connector" onclick="filterCards('the-connector', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px;">🤝 Connector</button>
  <button class="filter-btn" data-filter="the-shipper" onclick="filterCards('the-shipper', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px;">🚀 Shipper</button>
  <button class="filter-btn" data-filter="the-questioner" onclick="filterCards('the-questioner', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px;">❓ Questioner</button>
  <button class="filter-btn" data-filter="the-sage" onclick="filterCards('the-sage', this)" style="padding: 6px 14px; border: 1px solid #d0d7de; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px;">🔬 Sage</button>
</div>

<div class="search-container">
  <input type="text" class="search-input" id="profileSearch" placeholder="Search by name, role, or team..." autocomplete="off" aria-label="Search profiles">
  <div class="search-count" id="searchCount" aria-live="polite"></div>
</div>

<div class="card-grid" id="cardGrid">

{% assign profiles = site.pages | where_exp: "p", "p.path contains 'profiles/' and p.name != 'index.md' and p.name != 'README.md'" %}
{% for p in profiles %}
<a href="{{ p.url | relative_url }}" class="profile-card"
   data-name="{{ p.name | downcase }}"
   data-role="{{ p.role | downcase }}"
   data-team="{{ p.team | downcase }}"
   data-bu="{{ p.business_unit | downcase }}"
   data-archetype="{{ p.archetype | downcase | replace: ' ', '-' }}">
  {% if p.github and p.github != "" %}<img src="https://github.com/{{ p.github }}.png?size=80" alt="{{ p.title }}" style="width:48px;height:48px;border-radius:50%;margin-bottom:8px;">{% endif %}
  <div class="card-emoji">{{ p.spirit_emoji | default: "🤖" }}</div>
  <span class="card-badge" title="{{ p.completeness_level }} profile">{{ p.completeness_badge }}</span>
  <p class="card-name">{{ p.title }}</p>
  <p class="card-role">{{ p.role }}</p>
  <span class="card-team">{{ p.team }}</span>
  {% if p.archetype %}<span class="card-archetype" style="display:inline-block;font-size:11px;padding:2px 8px;border-radius:12px;background:#f0f0f0;color:#555;margin-left:6px;">{{ p.archetype }}</span>{% endif %}
  {% if p.start_date %}<p class="card-joined">Joined {{ p.start_date }}</p>{% endif %}
</a>
{% endfor %}

</div>

<div class="no-results" id="noResults">
  🔍 No profiles match your search.<br>
  Try a different name, role, or team.
</div>

<div class="cta-banner">
  🤖 Don't see yourself? Run <code>@my-ai-readme</code> in Copilot CLI to create your profile!
</div>

<script>
var currentFilter = 'all';
function filterCards(archetype, btn) {
  currentFilter = archetype;
  document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.style.background = '#fff';
    b.style.color = '#1f2328';
  });
  btn.style.background = '#0969da';
  btn.style.color = '#fff';
  update();
}

(function() {
  var search = document.getElementById('profileSearch');
  var grid = document.getElementById('cardGrid');
  var cards = Array.from(grid.querySelectorAll('.profile-card'));
  var noResults = document.getElementById('noResults');
  var countEl = document.getElementById('searchCount');
  var total = cards.length;

  window.update = function() {
    var q = search.value.toLowerCase().trim();
    var visible = 0;
    cards.forEach(function(card) {
      var text = (card.dataset.name || '') + ' ' + (card.dataset.role || '') + ' ' + (card.dataset.team || '') + ' ' + (card.dataset.bu || '');
      var matchText = !q || text.indexOf(q) !== -1;
      var matchArch = currentFilter === 'all' || card.dataset.archetype === currentFilter;
      if (matchText && matchArch) {
        visible++;
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    noResults.classList.toggle('visible', visible === 0);
    countEl.textContent = visible + ' of ' + total + ' profiles';
  };
  search.addEventListener('input', function() { update(); });
  update();
})();
</script>
