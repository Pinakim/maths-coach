#!/usr/bin/env python3
"""Build the published form of Study Buddy from study-buddy.html.

study-buddy.html stays the single source file. This script writes dist/:
  dist/index.html   the page, with each run of <script> blocks replaced by <script src="js/...">
  dist/js/*.js      the scripts, in the same order, named by content hash

Why: a phone keeps the js files in its cache and Chrome keeps them compiled, so the app
opens much faster after the first time. The order of scripts and styles is unchanged.

Usage: python3 tools/build.py      then publish every file in dist/ to the artifact
       (publish_files with mode "replace", index.html as "index.html", js files as "js/<name>").
"""
import hashlib, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'study-buddy.html')
OUT = os.path.join(ROOT, 'dist')

s = open(SRC, encoding='utf-8').read()
blocks = [(m.start(), m.end()) for m in re.finditer(r'<script>.*?</script>', s, re.S)]
# keep tiny boot scripts inline: the first three (boot flag, profile keys, nav height) and the last (first render)
first, last = 3, len(blocks) - 2
groups, cur = [], [first]
for i in range(first + 1, last + 1):
    if s[blocks[i - 1][1]:blocks[i][0]].strip() == '':
        cur.append(i)
    else:
        groups.append(cur); cur = [i]
groups.append(cur)

shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(os.path.join(OUT, 'js'))
out, pos, n = [], 0, 0
for g in groups:
    b, e = blocks[g[0]][0], blocks[g[-1]][1]
    code = '\n;\n'.join(s[blocks[i][0] + 8:blocks[i][1] - 9] for i in g)
    name = 'js/sb%02d.%s.js' % (n, hashlib.sha1(code.encode()).hexdigest()[:10]); n += 1
    open(os.path.join(OUT, name), 'w', encoding='utf-8').write(code)
    out.append(s[pos:b]); out.append('<script src="%s" onerror="sbLoadFail()"></script>' % name); pos = e
out.append(s[pos:])
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(''.join(out))
print('dist/index.html +', n, 'script files')
