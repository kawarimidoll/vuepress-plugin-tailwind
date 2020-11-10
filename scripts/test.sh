#!/bin/sh

name='[test.sh]'

die() {
  echo "$name error: $*"
  exit 1
}

yarn clean || die 'Clean failed!'

yarn build || die 'Build failed!'

cssdir='docs/.vuepress/dist/assets/css/'
[ -d "$cssdir" ] || die 'There isn'\''t output directory!'
cssfile=$(ls -1 "$cssdir")
echo "$name success: Build finished."

[ "$(echo "$cssfile" | wc -l)" -eq 1 ] || die 'An output style file is not found!'
echo "$name success: An output style file is found."

grep -q 'mx-2' "${cssdir}${cssfile}" || die 'There isn'\''t used style!'
echo "$name success: There is used style."

grep -q 'mx-1' "${cssdir}${cssfile}" && die 'There is unused style!'
echo "$name success: There isn't unused style."

grep -q 'sidebar-link' "${cssdir}${cssfile}" || die 'There isn'\''t vuepress style!'
echo "$name success: There is vuepress style."

echo "$name All tests passed!"
