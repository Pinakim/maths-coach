# Shared helpers for the Study Buddy hooks. Works in Git Bash (Windows laptop) and Linux (claude.ai/code cloud).
export GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=never
ROOT="$(git -C "${CLAUDE_PROJECT_DIR:-.}" rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$ROOT" || exit 0
APP=study-buddy.html
MARK=.published-sha

# hash of the app with any Windows line endings removed, so the phone (LF) and laptop agree
app_hash() {
  if command -v sha256sum >/dev/null 2>&1; then tr -d '\r' < "$APP" | sha256sum | cut -c1-64
  else tr -d '\r' < "$APP" | shasum -a 256 | cut -c1-64; fi
}
published_hash() { [ -f "$MARK" ] && tr -d '\r\n ' < "$MARK"; }
unpushed_count() { git rev-list --count '@{u}..HEAD' 2>/dev/null || echo 0; }
dirty_files() { git status --porcelain --untracked-files=no 2>/dev/null; }
# for the finish check: new files count too
changed_files() { git status --porcelain 2>/dev/null; }
