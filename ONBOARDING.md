# 🤖 My AI README Onboarding — Your First 5 Minutes

Never used GitHub Copilot CLI? No problem. This guide gets you from zero to your first My AI README profile.

---

## Step 1: Install GitHub CLI

If you don't have `gh` yet:
- **Mac:** `brew install gh`
- **Windows:** `winget install GitHub.cli`
- **Linux:** See [cli.github.com](https://cli.github.com/)

Then authenticate:
```bash
gh auth login
```

## Step 2: Install My AI README

```bash
gh extension install DUBSOpenHub/My-AI-Readme
```

## Step 3: Build Your Profile!

```bash
gh my-ai-readme
```

This single command will:
1. ✅ Install Copilot CLI if you don't have it
2. ✅ Set up the repo behind the scenes (no manual clone!)
3. 🚀 Launch Copilot CLI — just type `@my-ai-readme`

The agent takes over from here. It will:
1. 👋 Welcome you and explain what's happening
2. ❓ Ask you ~18 quick questions (mostly multiple-choice!)
3. ✍️ Write a polished profile based on your answers
4. 👀 Show you a preview to approve
5. 💾 Save it to `profiles/your-name.md`

**The whole thing takes about 3 minutes.**

## Step 4: Share It

After your profile is saved, share it with your team:

```bash
cd ~/.my-ai-readme
git add profiles/
git commit -m "Add my profile 🤖"
git push
```

---

## 🆘 Troubleshooting

**"Command not found" when running `gh my-ai-readme`**
→ Make sure you installed the extension: `gh extension install DUBSOpenHub/My-AI-Readme`

**"Not authenticated"**
→ Run `gh auth login` and follow the prompts

**"I accidentally closed the terminal mid-profile"**
→ No worries! Run `gh my-ai-readme` again — the agent can detect if you have a partial profile and resume where you left off.

**"I want to edit my profile after saving"**
→ Run `gh my-ai-readme` again — it will find your existing profile and let you update it.

---

That's it! Welcome to My AI README 🎉
