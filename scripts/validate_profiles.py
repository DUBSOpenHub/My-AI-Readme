#!/usr/bin/env python3
"""Validate YAML frontmatter in profile markdown files."""
import sys
import glob
import yaml

REQUIRED = ['title', 'name', 'role', 'team']
OPTIONAL_TYPED = {
    'completeness_score': int,
    'version': int,
    'tags': list,
}

errors = []

for path in sorted(glob.glob('profiles/*.md')):
    if path.endswith(('index.md', 'README.md')):
        continue
    with open(path) as f:
        content = f.read()
    if not content.startswith('---'):
        errors.append(f"{path}: missing YAML frontmatter")
        continue
    parts = content.split('---', 2)
    if len(parts) < 3:
        errors.append(f"{path}: malformed YAML frontmatter")
        continue
    try:
        fm = yaml.safe_load(parts[1])
    except yaml.YAMLError as e:
        errors.append(f"{path}: invalid YAML — {e}")
        continue
    if fm is None:
        errors.append(f"{path}: empty YAML frontmatter")
        continue
    for field in REQUIRED:
        if not fm.get(field):
            errors.append(f"{path}: missing required field '{field}'")
    for field, expected_type in OPTIONAL_TYPED.items():
        if field in fm and not isinstance(fm[field], expected_type):
            errors.append(f"{path}: '{field}' should be {expected_type.__name__}")

if errors:
    print("❌ Validation failed:\n" + "\n".join(f"  • {e}" for e in errors))
    sys.exit(1)
print(f"✅ All profiles valid ({len(glob.glob('profiles/*.md')) - 2} checked)")
