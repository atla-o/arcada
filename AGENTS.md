# Agent notes

Arcada is a social club. Clubs are named only:

- ancestry club
- spiritual club
- political club
- education club

Do not invent trade names for the clubs. Use those plain names in UI, routes, metadata, and copy.

This file is Arcada ship notes only.

## Live UI preview

Every UI PR must include a live clickable preview URL before asking for review or merge. Screenshots alone are not enough. Do not ask to merge until the preview link works.

Put the exact URL at the top of the PR description and in a PR comment. Prefer a real running Next server of the PR head (Cursor preview tunnel, ephemeral public URL, or similar). Do not ship a static mock unless that is the only option.

The human walks the lander, clubs, documents, and membership on that URL. No merge and no production deploy until they say merge and deploy.

## Shipping

Work happens on pull requests.

Do not merge. Do not deploy. A human says “merge and deploy” before merge or deploy.

No auto-merge.
