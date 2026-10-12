"""Ghép mã nguồn trong src/ thành index.html (một tệp duy nhất, Vercel phục vụ trực tiếp).
Chạy:  python3 build.py        (cần Python 3; kiểm tra JS thêm nếu có Node: node --check)
"""
import os, re, subprocess, sys, tempfile
ROOT = os.path.dirname(os.path.abspath(__file__)); SRC = os.path.join(ROOT, "src")
rd = lambda *p: open(os.path.join(SRC, *p), encoding="utf-8").read()

body = rd("app.html").replace("{{CSS}}", rd("style.css"))
body = re.sub(r"^<title>.*?</title>\n?", "", body, count=1)  # tiêu đề nằm trong head.html
body = (body.replace("{{LAND}}", rd("map", "d.txt")).replace("{{SEA}}", rd("map", "sea.txt"))
            .replace("{{HAINAN}}", rd("map", "hainan.txt")))
data = "\n".join(rd(f) for f in ["bank.js", "bank2.js", "math.js", "handbook.js", "music.js", "omikuji.js"])
body = body.replace("{{BANK}}", data).replace("{{APP}}", rd("app.js"))
assert "{{" not in body, "còn placeholder chưa thay"

html = rd("head.html") + body + "\n</body>\n</html>\n"
open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(html)
print("index.html:", len(html.encode("utf-8")), "bytes")

# Kiểm tra cú pháp JavaScript nếu máy có Node
js = "\n;\n".join(re.findall(r"<script>(.*?)</script>", html, re.S))
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f: f.write(js)
try:
    r = subprocess.run(["node", "--check", f.name], capture_output=True, text=True)
    print("JS:", "OK" if r.returncode == 0 else r.stderr); sys.exit(r.returncode)
except FileNotFoundError:
    print("JS: bỏ qua (không có node)")
finally:
    os.unlink(f.name)
