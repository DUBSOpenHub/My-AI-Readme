# 🤖 README.ai Onboarding — Your First 5 Minutes

Never used GitHub Copilot CLI? No problem. This guide gets you from zero to your first README.ai profile.

---

## Step 1: Install GitHub Copilot CLI

If you already have the `gh` (GitHub CLI) tool installed, just run:

```bash
gh extension install github/gh-copilot
```

Don't have `gh`? Install it first:
- **Mac:** `brew install gh`
- **Windows:** `winget install GitHub.cli`
- **Linux:** See [cli.github.com](https://cli.github.com/)

Then authenticate:
```bash
gh auth login
```

## Step 2: Clone This Repo

```bash
git clone https://github.com/DUBSOpenHub/readme-ai.git
cd readme-ai
```

## Step 3: Launch Copilot CLI

Start a Copilot CLI session from inside the repo:

```bash
ghcs
```

Or if you use the VS Code terminal, Copilot CLI is already available — just type in the chat.

## Step 4: Build Your Profile!

Type this in Copilot CLI:

```
@readme-ai
```

The agent takes over from here. It will:
1. 👋 Welcome you and explain what's happening
2. ❓ Ask you ~17 quick questions (mostly multiple-choice!)
3. ✍️ Write a polished profile based on your answers
4. 👀 Show you a preview to approve
5. 💾 Save it to `profiles/your-name.md`

**The whole thing takes about 3 minutes.**

## Step 5: Share It

After your profile is saved, share it with your team:

```bash
git add profiles/
git commit -m "Add my README.ai profile 🤖"
git push
```

---

## 🆘 Troubleshooting

**"Command not found" when running `ghcs`**
→ Make sure you installed `gh-copilot`: `gh extension install github/gh-copilot`

**"Not authenticated"**
→ Run `gh auth login` and follow the prompts

**"I accidentally closed the terminal mid-profile"**
→ No worries! Run `@readme-ai` again — the agent can detect if you have a partial profile and resume where you left off.

**"I want to edit my profile after saving"**
→ Run `@readme-ai` again — it will find your existing profile and let you update it.

---

That's it! Welcome to README.ai 🎉
