# Agents

## Overview
My AI README ships a single Copilot CLI agent and matching skill that guides users through a conversational profile-builder, generating polished "How to Work With Me" Markdown documents.

## Available Agents

### my-ai-readme
- **Purpose**: Conducts a guided interview and generates a personal "How to Work With Me" Markdown profile for team directories.
- **Usage**: Invoke via `/skills add DUBSOpenHub/My-AI-Readme`, then type `@my-ai-readme` in a Copilot CLI session. The agent detects existing profiles and supports editing.
- **Model**: Default Copilot CLI model

## Available Skills

### my-ai-readme (skill)
- **Purpose**: Provides the same guided profile-builder as a reusable Copilot CLI skill for personal or org-wide installation.
- **Usage**: Install with `/skills add DUBSOpenHub/My-AI-Readme`, then invoke by mentioning `@my-ai-readme` in any session.
- **Location**: `skills/my-ai-readme/`

## Configuration
- Profiles are saved to `profiles/` in the repo and can be committed/pushed by the agent.
- GitHub Pages can be enabled to expose the team directory at `https://<org>.github.io/My-AI-Readme/profiles/`.
- All profile fields are optional; the agent respects skipped answers.
