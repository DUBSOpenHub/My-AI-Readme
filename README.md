# 🤖 My AI README: How to Work With Me

> **"How to Work With Me" — AI-powered team profiles, built in 3 minutes.**

My AI README is a GitHub Copilot CLI agent that helps every team member create a polished "How to Work With Me" profile through a fun, guided conversation. No writing skills required — just answer a few questions and the AI does the rest.

## ✨ What You Get

A beautiful Markdown profile that tells your teammates:
- 📬 How to reach you (email, LinkedIn, timezone)
- 💬 Your communication style and preferences
- ⚡ Your superpower at work
- 🔋 What drains your energy (so people can avoid it!)
- 🎲 Fun facts that make you *you*

## 🚀 Quickstart (2 minutes)

### Prerequisites
- [GitHub Copilot CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli) installed and authenticated

### Step 1: Clone this repo
```bash
git clone https://github.com/DUBSOpenHub/MyAIReadme.git
cd MyAIReadme
```

### Step 2: Build your profile
Open GitHub Copilot CLI and invoke the My AI README agent:
```
@my-ai-readme
```

That's it! The agent will guide you through everything. 🎉

### Step 3: Share with your team
Your profile is saved to `profiles/your-name.md`. Commit and push to share it:
```bash
git add profiles/
git commit -m "Add my profile 🤖"
git push
```

## 📚 Browse Profiles

Check out the [team directory](profiles/README.md) to see everyone's profiles.

### 🌐 GitHub Pages

This repo is GitHub Pages-ready. To enable the web directory:

1. Go to **Settings → Pages** in your GitHub repo
2. Set source to **Deploy from a branch → `main` / `/ (root)`**
3. Your team directory will be live at `https://DUBSOpenHub.github.io/MyAIReadme/profiles/`

## 🤔 FAQ

**Q: How long does it take?**
A: About 3 minutes. Most questions are multiple-choice — just pick and go.

**Q: Do I need to be a good writer?**
A: Nope! You give short answers, the AI writes the polished version. You review and approve before saving.

**Q: I've never used Copilot CLI before.**
A: Perfect! Check out [ONBOARDING.md](ONBOARDING.md) — it'll get you from zero to running in under 2 minutes.

**Q: Can I update my profile later?**
A: Absolutely! Just run `@my-ai-readme` again and the agent will detect your existing profile and let you edit it.

**Q: What if I don't want to share certain info?**
A: Every field is optional. Skip anything you're not comfortable sharing.

## 🏗️ For Admins

Want to set this up for your company?

1. Fork this repo to your org
2. Share the ONBOARDING.md link with your team
3. Profiles accumulate in `profiles/` as people complete them
4. The directory at `profiles/README.md` auto-updates

## 📄 License

[MIT](LICENSE)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
