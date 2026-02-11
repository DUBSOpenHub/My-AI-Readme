# MeetMe Skill — Profile Generation Reference

This skill provides the MeetMe agent with reference material for generating high-quality profiles.

---

## Profile Sections Reference

### Section 1: Header
**Format:** `# 🪪 MeetMe: {Full Name}`
**Subheader:** `> *{Role} · {Team} · {Spirit Emoji} {Snack/Drink detail}*`

The subheader should be a single italicized line that captures role, team, and a personality hint. Use the spirit emoji and snack/drink to add flavor.

**Good examples:**
- `> *Senior Product Manager · Platform Team · 🧩 Runs on oat milk lattes*`
- `> *Staff Software Engineer · Infrastructure Team · 🦉 Fueled by cold brew*`
- `> *UX Designer · Growth Team · 🎨 Powered by matcha and playlists*`

### Section 2: Connect Table
**Format:** Clean Markdown table with only the fields the user provided.

```markdown
## 📬 Connect
| | |
|---|---|
| **Email** | user@company.com |
| **LinkedIn** | [linkedin.com/in/handle](https://linkedin.com/in/handle) |
| **Timezone** | PST (10am–6pm) |
```

**Rules:**
- OMIT rows for skipped fields — no empty cells or "N/A"
- LinkedIn should be displayed as a short readable URL, linked to the full URL
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
*Generated with [MeetMe](https://github.com/yourorg/meetme) 🪪*
```

---

## Question Bank Quick Reference

| # | ID | Section | Type | Required |
|---|-----|---------|------|----------|
| 1 | name | basics | freeform | ✅ |
| 2 | role | basics | freeform | ✅ |
| 3 | team | basics | freeform | ✅ |
| 4 | linkedin | basics | freeform | ❌ |
| 5 | email | basics | freeform | ❌ |
| 6 | communication | work_style | choice | ✅ |
| 7 | productivity | work_style | choice | ✅ |
| 8 | feedback | work_style | choice | ✅ |
| 9 | superpower | work_style | choice+free | ✅ |
| 10 | drains | work_style | choice+free | ✅ |
| 11 | timezone | work_style | freeform | ✅ |
| 12 | fun_fact | fun | freeform | ✅ |
| 13 | spirit_emoji | fun | choice+free | ✅ |
| 14 | snack_drink | fun | freeform | ✅ |

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
