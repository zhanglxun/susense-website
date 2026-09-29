#!/usr/bin/env bash
# 将页面中引用的 image.susense.cn(七牛云图床)图片下载到 assets/img/remote/，并改写页面引用为本地路径。
#
# 用法(在项目根目录执行):
#   bash scripts/localize-remote-images.sh            # 下载 + 改写
#   bash scripts/localize-remote-images.sh --dry-run  # 只列出清单，不下载不改写
#
# 说明:
#   - 只处理图片(jpg/jpeg/png/gif/webp/svg)；CSS/JS 已改用 assets/ 下的本地库
#   - 下载后校验文件确实是图片(七牛欠费/失效时会返回错误页，不会当作图片保存)
#   - 仅改写"下载并校验成功"的引用，失败的保持原样并在末尾汇总，可修复图床后重跑
#   - 可重复执行(已下载且有效的文件会跳过)
set -u

HOST_RE='https?://image\.susense\.cn'
DEST_DIR="assets/img/remote"
DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

cd "$(dirname "$0")/.." || exit 1
mkdir -p "$DEST_DIR"

# 需要扫描/改写的页面(不含文档 md、脚本自身)
FILES=$(grep -rlIE "$HOST_RE" --include='*.html' --include='*.css' --include='*.js' . 2>/dev/null | grep -v -E '^\./(\.git|scripts)/')
if [ -z "$FILES" ]; then echo "没有发现 image.susense.cn 引用，无需处理。"; exit 0; fi

# 收集图片 URL(去重)
URLS=$(grep -hoIE "${HOST_RE}/[^\"' )>?#]+\.(jpg|jpeg|png|gif|webp|svg)" $FILES | sort -u)

echo "== 引用图床的文件 =="
echo "$FILES" | sed 's/^/  /'
echo "== 待处理图片 ($(echo "$URLS" | grep -c .) 个) =="
echo "$URLS" | sed 's/^/  /'
[ "$DRY_RUN" = 1 ] && exit 0

is_image() {  # $1=文件路径
  local f="$1" t
  [ -s "$f" ] || return 1
  t=$(file -b --mime-type "$f")
  case "$t" in
    image/*) return 0 ;;
    text/xml|text/plain|application/xml) grep -qi '<svg' "$f" && return 0 || return 1 ;;
    *) return 1 ;;
  esac
}

OK=0; FAIL=0; FAILED_LIST=""
for url in $URLS; do
  name=$(basename "$url")
  out="$DEST_DIR/$name"

  if is_image "$out"; then
    echo "[跳过] 已存在: $out"
  else
    rm -f "$out"
    code=$(curl -sSL --retry 2 --connect-timeout 10 --max-time 60 -o "$out" -w '%{http_code}' "$url" 2>/dev/null)
    if [ "$code" = "200" ] && is_image "$out"; then
      echo "[成功] $url -> $out ($(wc -c < "$out" | tr -d ' ') bytes)"
    else
      echo "[失败] $url (HTTP ${code:-000}，或返回内容不是图片)"
      rm -f "$out"
      FAIL=$((FAIL+1)); FAILED_LIST="$FAILED_LIST\n  $url"
      continue
    fi
  fi

  # 改写引用: http(s)://image.susense.cn/<name> -> assets/img/remote/<name>
  for f in $FILES; do
    sed -i.bak -E "s#https?://image\.susense\.cn/${name//./\\.}#${DEST_DIR}/${name}#g" "$f" && rm -f "$f.bak"
  done
  OK=$((OK+1))
done

echo
echo "== 汇总: 成功 ${OK}，失败 ${FAIL} =="
if [ "$FAIL" -gt 0 ]; then
  printf "以下图片未能下载(图床欠费/文件已删除/网络问题)，引用保持原样:%b\n" "$FAILED_LIST"
  echo "处理方式: 修复图床后重跑本脚本，或手动把原图放到 $DEST_DIR/ 后再重跑。"
  exit 2
fi
