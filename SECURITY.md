# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this repository, please report it through **GitHub's private vulnerability reporting**.

1. Navigate to the [**Security** tab](https://github.com/DUBSOpenHub/readme-ai/security) of this repository
2. Click **"Report a vulnerability"**
3. Fill out the advisory form with details about the issue

**Please do not open a public issue for security vulnerabilities.**

## Scope

This repository contains a Copilot CLI agent that generates team profiles. Security concerns may include:

- Agent or skill definitions that could lead to unintended data exposure
- HTML injection via user-provided profile fields
- Prompts that could be manipulated to bypass safety guardrails
- Leaked credentials, PII, or secrets in profile outputs

## Privacy Guidance

When creating your profile, please keep in mind:

- **Do not include** sensitive personal information (home address, phone number, SSN, etc.)
- **Email and social handles are optional** — only share what you're comfortable with
- Profiles are committed to the repo and may be visible to anyone with repo access
- Consider your organization's data policies before sharing information

## Response

We will acknowledge receipt within **48 hours** and aim to provide a resolution timeline within **5 business days**.
