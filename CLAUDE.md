# Study Buddy: rules for every Claude session

This repo is worked on from two devices: a phone (Claude Code on claude.ai/code or the Claude app) and a laptop (Claude desktop app, clone at `D:\Pinaki\Claude\maths-coach`, computer "PMDell"). Sessions don't share memory, so everything a session needs to know is in this file.

## What's here

- `study-buddy.html`: **Study Buddy**, the main app. It's a single page, about 2.3 MB, published as a claude.ai artifact:
  **https://claude.ai/artifact/Mg1ofXxuYQaYbqB14ZzXqQ**
- `index.html`: the older "Maths Coach Practice" page. Leave it alone unless the user asks.
- The user sometimes types "Sutu Buddy"; that means Study Buddy.

## GitHub account: Pinakim only

- Commit and push **only as Pinakim**. In a laptop clone, set these in the repo's local git config:
  `user.name Pinakim`, `user.email Pinakim@users.noreply.github.com`, `credential.username Pinakim`, `credential.useHttpPath true`
- **Never** use or add the work account **pinakiLogicos**, or the work email, for this project: no commits, pushes, collaborator invites or sign-ins.
- If a push is refused, ask the user to sign in as Pinakim. Don't work around it.

## The routine (both devices)

The `main` branch on GitHub is the master copy. The artifact is its published form, and the two must stay the same.

1. **Start: sync first.**
   - Laptop: `git pull --ff-only origin main`.
   - Read the live artifact and compare it with `study-buddy.html` at `HEAD`. If the artifact is newer, it was published without a commit: commit that version first, then carry on.
2. **Work.** Edit `study-buddy.html` and test it.
3. **Finish: do both, together, in this order.**
   - Publish `study-buddy.html` to the **same** artifact link above. Never publish a new artifact, and don't change its capabilities or sharing.
   - Run `bash .claude/hooks/mark-published.sh`. It records the published version in `.published-sha`.
   - Commit everything, including `.published-sha`, with a message saying what changed for the user, then push to `main`.
4. Only one device works at a time. Finish step 3 before the user switches devices. If a push is rejected because `main` moved, pull, merge, re-test, then push and publish.

## Automatic checks (hooks in `.claude/settings.json`)

- **Session start** (`session-start.sh`): pulls `main` if there are no uncommitted changes, then reports the commit, any local or unpushed work, and whether `study-buddy.html` matches `.published-sha`. Read that report before starting.
- **End of each reply** (`finish-check.sh`): if there are uncommitted, unpushed or unpublished changes, you're asked once to finish step 3. When the user is still reviewing or said "don't publish yet", don't finish; just tell them in one line what's left.
- The hooks only check and remind. They never commit, push or publish on their own.

## Editing the file

- It's one large HTML file with some very long lines (40 to 120 KB each). Make targeted string replacements and check that each one matches exactly once. Don't rewrite whole lines from memory.
- New features are mostly added as separate `<script>` modules that wrap earlier functions (`render`, `save`, `useAs` and so on). Later modules override earlier ones, so read the latest wrapper before you change behaviour.
- The scripts are classic `<script>` tags sharing global variables (`S`, `view`, `DOC`, `CR`, `push`, `ROLE`, `GRP`, `SBPID`...). Note that `DB` is overwritten by the Doubt module; use `window.SBDB` for the database.
- After editing, check the syntax of the changed `<script>` (for example with `node --check` on the extracted script), and test by serving the folder with `python -m http.server`. Outside claude.ai, `claude.use()` is missing, so cloud saving is off and the app uses browser storage only.

## How the app stores data (don't break these)

- **Runtime capabilities:** `db`, `user`, `sample` (with images) and `assets`.
- **Progress:** each student's progress is saved in the browser and in the private store of the signed-in claude.ai account, `data/users/<uid>/...`. Only that account can read it, not even the artifact's owner.
- **Profiles (since v65):**
  - The first profile `main` uses the device key `coach1` and the cloud doc `coach`. Other profiles use `coach1:<id>` and `coach_<id>`.
  - The profile list is kept in `sb_profiles`.
  - The `/*PROFILE-KEYS*/` script (the first script) redirects the storage keys. The `/*PROFILES*/` module (the last script) holds the picker, PINs, idle lock, tutor dashboard and reports.
- **Tutor scope:** the tutor dashboard only sees students on the same claude.ai account. The user decided to keep it that way.
- **Settings to keep:**
  - The idle lock is 40 minutes for students and the tutor (`IDLE` in the PROFILES module), and only applies to profiles with a PIN.
  - New students start with sharing off. The tutor never sees private notes.
