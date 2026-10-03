# Agent notes

Arcada is a social club. Clubs are named only:

- ancestry club
- spiritual club
- political club
- education club

Do not invent trade names for the clubs. Use those plain names in UI, routes, metadata, and copy.

This file is Arcada ship notes only.

## Standing framework

The agent handles code. Devo handles the human UI himself and reiterates it. Do not restyle UI he will fix.

When Devo says a UI is good and says push, ship that exact UI to GitHub `main`. Do not restyle it. Do not open a new agent. Do not change DNS. `main` already serves https://arcada.devoutshaman.com. No throwaway host.

Code publishes through GitHub to `main`, then the existing devoutshaman.com host. No new pull request unless a real code change needs one. No Cloudflare or DNS changes. No new cloud agent.

## Live UI preview

Any UI change that is not yet what Devo should look at must include a clickable live preview he can open so he can watch and reiterate. Not screenshots alone.

- Before it is on the public host: a Cursor preview link (real Next server of the PR head, Cursor preview tunnel, or ephemeral public URL). A static HTML mock is last resort only.
- Once the public host is the thing to look at: https://arcada.devoutshaman.com

Every UI PR must put the exact clickable URL at the top of the PR description and in a PR comment. Do not ask to merge until the preview link works.

The human walks the lander, clubs, documents, and membership on that URL. No merge and no production deploy until they say merge and deploy.

## Shipping

Work happens on pull requests when a real code change needs one.

Do not merge. Do not deploy. A human says “merge and deploy” before merge or deploy.

When Devo says the UI is good and says push, ship that exact UI to `main`. Main already serves https://arcada.devoutshaman.com.

No auto-merge.
