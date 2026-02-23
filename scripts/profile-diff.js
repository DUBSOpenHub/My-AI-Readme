#!/usr/bin/env node
// Compares two versions of a profile and outputs a natural-language summary.
// Usage: node scripts/profile-diff.js profiles/jane-doe.md [commit-sha]

const { execSync } = require('child_process');
const fs = require('fs');

const file = process.argv[2];
const sha = process.argv[3] || 'HEAD~1';

if (!file) {
  console.error('Usage: node scripts/profile-diff.js <profile-path> [commit-sha]');
  process.exit(1);
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^(\w[\w_]*)\s*:\s*(.+)/);
    if (m) result[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  });
  return result;
}

const current = fs.readFileSync(file, 'utf8');
let previous;
try {
  previous = execSync(`git show ${sha}:${file}`, { encoding: 'utf8' });
} catch {
  console.log(`\n📋 No previous version found at ${sha}. This appears to be a new profile.`);
  process.exit(0);
}

const curr = extractFrontmatter(current);
const prev = extractFrontmatter(previous);

const changes = [];
const allKeys = new Set([...Object.keys(curr), ...Object.keys(prev)]);
for (const key of allKeys) {
  if (curr[key] !== prev[key]) {
    if (!prev[key]) changes.push(`  + Added ${key}: "${curr[key]}"`);
    else if (!curr[key]) changes.push(`  - Removed ${key}`);
    else changes.push(`  ~ Changed ${key}: "${prev[key]}" → "${curr[key]}"`);
  }
}

if (changes.length === 0) {
  console.log(`\n✅ No frontmatter changes between ${sha} and current.`);
} else {
  console.log(`\n📋 Profile Changes for ${curr.name || file}:`);
  changes.forEach(c => console.log(c));
  console.log(`\n  Version: ${prev.version || '?'} → ${curr.version || '?'}`);
}
