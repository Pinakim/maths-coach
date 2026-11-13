#!/usr/bin/env bash
# SessionStart: bring this copy up to date with GitHub and tell Claude where things stand.
. "$(dirname "$0")/lib.sh"

pulled="no"
if [ -z "$(dirty_files)" ]; then
  before=$(git rev-parse HEAD 2>/dev/null)
  if git pull -q --ff-only 2>/dev/null; then
    [ "$before" != "$(git rev-parse HEAD)" ] && pulled="yes, new commits pulled"
  else
    pulled="FAILED (pull could not fast-forward or GitHub was unreachable; sort this out before editing)"
  fi
else
  pulled="skipped: there are uncommitted changes from an earlier session"
fi

echo "Study Buddy sync check (automatic, at session start)"
echo "- Branch $(git rev-parse --abbrev-ref HEAD), at $(git log -1 --format='%h %s (%cr)')"
echo "- Pulled from GitHub: $pulled"
d=$(dirty_files); [ -n "$d" ] && echo "- Uncommitted changes:" && echo "$d" | sed 's/^/    /'
n=$(unpushed_count); [ "$n" != "0" ] && echo "- $n commit(s) not pushed yet"
if [ -f "$APP" ]; then
  if [ "$(app_hash)" = "$(published_hash)" ]; then echo "- $APP matches the last version published to the artifact (by .published-sha)"
  else echo "- $APP is NOT recorded as published (it differs from .published-sha)"; fi
fi
echo "Before editing Study Buddy: read the live artifact and compare it with $APP (CLAUDE.md, step 1)."
exit 0
