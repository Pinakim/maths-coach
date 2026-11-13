#!/usr/bin/env bash
# Run right after publishing study-buddy.html to the artifact: records which version is live.
. "$(dirname "$0")/lib.sh"
app_hash > "$MARK" && echo "Recorded $APP as published ($(cut -c1-12 "$MARK")). Commit $MARK with the change."
