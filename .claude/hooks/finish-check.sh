#!/usr/bin/env bash
# Stop: if work is left uncommitted, unpushed or unpublished, ask Claude once to finish it (or say why not).
input=$(cat)
case "$input" in *'"stop_hook_active":true'*|*'"stop_hook_active": true'*) exit 0;; esac
. "$(dirname "$0")/lib.sh"

msg=""
d=$(changed_files); [ -n "$d" ] && msg="$msg uncommitted changes ($(echo "$d" | awk '{print $2}' | tr '\n' ' '));"
n=$(unpushed_count); [ "$n" != "0" ] && msg="$msg $n commit(s) not pushed;"
[ -f "$APP" ] && [ "$(app_hash)" != "$(published_hash)" ] && msg="$msg $APP not published to the artifact;"
[ -z "$msg" ] && exit 0

reason="Study Buddy is not in sync:$msg Finish it now (CLAUDE.md step 3): publish $APP to the artifact, run 'bash .claude/hooks/mark-published.sh', commit, and push as Pinakim. If the user is still reviewing, or asked you not to publish or push yet, don't. Tell them in one line what is left undone instead."
reason=$(printf '%s' "$reason" | sed 's/\\/\\\\/g; s/"/\\"/g')
printf '{"decision":"block","reason":"%s"}\n' "$reason"
exit 0
