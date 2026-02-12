# My AI README Skill — Profile Generation Reference

This skill provides the My AI README agent with reference material for generating high-quality profiles.

---

## Profile Sections Reference

### Section 1: Header
**Format:** `# 🤖 My AI README: {Full Name}`
**Subheader:** `> *{Role} · {Team} · {Spirit Emoji} {Snack/Drink detail}*`

The subheader should be a single italicized line that captures role, team, and a personality hint. Use the spirit emoji and snack/drink to add flavor.

**Good examples:**
- `> *Senior Product Manager · Platform Team · 🧩 Runs on oat milk lattes*`
- `> *Staff Software Engineer · Infrastructure Team · 🦉 Fueled by cold brew*`
- `> *UX Designer · Growth Team · 🎨 Powered by matcha and playlists*`

### Section 2: About Table
**Format:** Clean Markdown table with name, role, team prominently shown, plus optional fields.

```markdown
## 📬 About
| | |
|---|---|
| **Name** | Jane Doe |
| **Role** | Senior Product Manager |
| **Team** | Platform Team |
| **Joined** | June 2021 |
| **Email** | jane@company.com |
| **LinkedIn** | [linkedin.com/in/janedoe](https://linkedin.com/in/janedoe) |
| **GitHub** | [@janedoe](https://github.com/janedoe) |
| **Twitter/X** | [@janedoe](https://twitter.com/janedoe) |
| **Timezone** | PST (10am–6pm) |
```

**Rules:**
- Name, Role, and Team are ALWAYS shown at the top of the table
- OMIT rows for skipped fields — no empty cells or "N/A"
- Start date displayed as "Joined" with the value the user gave (e.g., "March 2022")
- LinkedIn should be displayed as a short readable URL, linked to the full URL
- GitHub should be displayed as @username, linked to their profile
- Social handles: parse what the user provides and format each on its own row with the platform name as the label
- Timezone is always included (it's a required field)

### Section 3: How to Work With Me
**Format:** Three subsections — Communication, Best Hours, Feedback

Each subsection should be 2–4 sentences in **first person**. The writing should:
- Sound natural and conversational — like the person actually talks
- Be specific, not generic — "ping me on Slack" not "feel free to reach out"
- Include a practical tip that teammates can act on
- Show personality through word choice and phrasing

**Tone mapping from multiple-choice answers:**

| Answer | Prose Direction |
|--------|----------------|
| Slack-first 💬 | Emphasize quick, informal communication. Mention they're responsive on Slack. |
| Email person 📧 | Value thoughtful, written communication. Mention they like having a paper trail. |
| Face-to-face / video 📹 | Prefer real-time, visual communication. Mention reading body language. |
| Async — messages and docs 📄 | Prefer async. Mention they write things down and think before responding. |
| Whatever works 🤷 | Flexible. Mention they adapt to whatever the team uses. |
| Early bird 🌅 | Mornings are best. Afternoon is for meetings/collabs. |
| Night owl 🦉 | Peak after lunch. Mornings are warm-up time. |
| Steady ⏰ | Consistent energy. No strong preference for time of day. |
| Coffee-dependent ☕ | Playful — tie productivity to caffeine intake. |
| Direct 🎯 | Values honesty. Don't sugarcoat. Get to the point. |
| Context and kindness 🎁 | Values empathy. Explain the *why* behind feedback. |
| Written 📝 | Needs time to process. Prefers async feedback. |
| 1:1 conversation 🗣️ | Prefers real-time, private discussion. Doesn't like public critiques. |

### Section 4: Superpower
**Format:** 2–3 sentences in first person.

Expand the user's choice (or custom answer) into a vivid description. Don't just restate the choice — paint a picture of what it looks like in practice. Include a concrete example or scenario if possible.

**Expansion examples:**
- "Making complex things simple" → Describe untangling problems, finding clarity in chaos, being the person who asks the question nobody realized needed asking
- "Bringing people together" → Describe translating between disciplines, creating alignment, running productive meetings
- "Shipping fast" → Describe bias for action, iterating quickly, unblocking themselves

### Section 5: What Drains Me
**Format:** 2–3 sentences in first person.

This is the most valuable section for teammates — it tells them what to avoid. Write it as a direct, honest statement. Include what the user *does* about it (how they cope or what they need from teammates).

### Section 6: Fun Facts
**Format:** Bullet list with bold labels.

```markdown
## 🎲 Fun Facts
- **Spirit emoji:** {emoji}
- **Fun fact:** {fun fact as given, lightly polished}
- **Fuel:** {snack/drink with a personality twist}
```

**Rules:**
- Keep the fun fact close to what the user said — don't over-edit their personality
- Add a small personality twist to the fuel item (e.g., "no exceptions", "industrial quantities", "the bigger the mug the better")

### Footer
Always end with:
```markdown
---
*Generated with [My AI README](https://github.com/DUBSOpenHub/MyAIReadme) 🤖*
```

---

## Question Bank Quick Reference

| # | ID | Section | Type | Required |
|---|-----|---------|------|----------|
| 1 | name | basics | freeform | ✅ |
| 2 | role | basics | freeform | ✅ |
| 3 | business_unit | basics | choice+free | ✅ |
| 4 | team | basics | freeform | ✅ |
| 5 | start_date | basics | freeform | ❌ |
| 6 | email | basics | freeform | ❌ |
| 7 | linkedin | basics | freeform | ❌ |
| 8 | github_handle | basics | freeform | ❌ |
| 9 | social_handles | basics | freeform | ❌ |
| 10 | communication | work_style | choice | ✅ |
| 11 | productivity | work_style | choice | ✅ |
| 12 | feedback | work_style | choice | ✅ |
| 13 | superpower | work_style | choice+free | ✅ |
| 14 | drains | work_style | choice+free | ✅ |
| 15 | timezone | work_style | freeform | ✅ |
| 16 | fun_fact | fun | freeform | ✅ |
| 17 | spirit_emoji | fun | choice+free | ✅ |
| 18 | snack_drink | fun | freeform | ✅ |

---

## Writing Style Guide

- **Voice:** First person ("I", "my", "me")
- **Tone:** Warm, specific, human — like a real person wrote it
- **Length:** Each prose section should be 2–4 sentences. The whole profile should fit on one screen.
- **Avoid:** Corporate jargon, buzzwords, vague statements, passive voice
- **Embrace:** Specificity, humor, practical tips, personality quirks
- **Examples of good writing:**
  - ✅ "Ping me on Slack anytime — I'm usually fastest between 10am and 2pm"
  - ❌ "Feel free to reach out through appropriate communication channels"
  - ✅ "My brain is sharpest before noon, so that's when I tackle strategy work"
  - ❌ "I tend to be most productive during morning hours"
