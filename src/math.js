/* ===== Bộ hiển thị công thức tự viết: TeX (tập con) → HTML + CSS, không cần thư viện hay font ngoài ===== */
const TeX = (() => {
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const OP = c => `<span class="op">${c}</span>`;
  const SYM = {
    le: OP("≤"), ge: OP("≥"), ne: OP("≠"), approx: OP("≈"), Rightarrow: OP("⇒"), Leftrightarrow: OP("⇔"),
    in: OP("∈"), notin: OP("∉"), subset: OP("⊂"), cap: OP("∩"), cup: OP("∪"), setminus: OP("\\"), mid: OP("|"),
    lt: OP("&lt;"), gt: OP("&gt;"), pm: "±", cdot: OP("·"), infty: "∞", forall: "∀", exists: "∃", varnothing: "∅",
    dots: "…", circ: "∘", alpha: "<i>α</i>", theta: "<i>θ</i>", pi: "π", Delta: "Δ", quad: "&emsp;",
  };
  const FN = new Set(["sin", "cos", "tan", "cot", "max", "min"]);
  const BB = { R: "ℝ", N: "ℕ", Z: "ℤ", Q: "ℚ" };
  function tokens(s) {
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (c === "\\") {
        const m = s.slice(i + 1).match(/^[a-zA-Z]+/);
        if (m) { t.push({ c: m[0] }); i += 1 + m[0].length; } else { t.push({ e: s[i + 1] }); i += 2; }
      } else if (/\s/.test(c)) i++;
      else { t.push({ ch: c }); i++; }
    }
    return t;
  }
  function render(src) {
    const t = tokens(src); let p = 0;
    const isClose = k => k && k.ch === "}";
    function seq(stop) { let o = ""; while (p < t.length && !stop(t[p])) o += step(); return o; }
    function arg() {
      if (t[p] && t[p].ch === "{") { p++; const h = seq(isClose); p++; return h; }
      return atom();
    }
    function step() {
      const k = t[p];
      if (k.ch === "^" || k.ch === "_") {
        p++; const a = arg();
        if (k.ch === "^") return a === "∘" ? "°" : `<sup>${a}</sup>`;
        return `<sub>${a}</sub>`;
      }
      return atom();
    }
    function atom() {
      const k = t[p++];
      if (!k) return "";
      if (k.ch !== undefined) {
        const c = k.ch;
        if (c === "{") { const h = seq(isClose); p++; return h; }
        if (c === "}") return "";
        if (/[A-Za-z]/.test(c)) return `<i>${c}</i>`;
        if (c === "-") { const pv = t[p - 2]; const unary = !pv || (pv.ch && "({=,;<>".includes(pv.ch)) || (pv.c && /^(le|ge|ne|approx|Rightarrow|Leftrightarrow|in|left|begin|pm)$/.test(pv.c)) || pv.e === "\\" || pv.e === " "; return unary ? "−" : OP("−"); }
        if ("+=<>".includes(c)) return OP(esc(c));
        if (c === "'") return "′";
        if (c === "&") return "";
        if (c === "*") return "*";
        return esc(c);
      }
      if (k.e !== undefined) return { "{": "{", "}": "}", ",": "&thinsp;", " ": "&nbsp;", "|": "‖", "\\": " ", ";": "&ensp;" }[k.e] ?? esc(k.e);
      const c = k.c;
      if (c === "frac" || c === "dfrac" || c === "tfrac") { const a = arg(), b = arg(); return `<span class="m-frac"><span class="m-num">${a}</span><span class="m-den">${b}</span></span>`; }
      if (c === "sqrt") return `<span class="m-sqrt"><span class="m-rad">√</span><span class="m-rc">${arg()}</span></span>`;
      if (c === "overrightarrow" || c === "vec") return `<span class="m-vec">${arg()}</span>`;
      if (c === "widehat" || c === "hat") return `<span class="m-hat">${arg()}</span>`;
      if (c === "overline") return `<span class="m-bar">${arg()}</span>`;
      if (c === "mathbb") { let L; if (t[p].ch === "{") { L = t[p + 1].ch; p += 3; } else { L = t[p].ch; p++; } return BB[L] || L; }
      if (c === "left" || c === "right") { const d = t[p++]; const ch = d.ch ?? d.e; return ch === "." ? "" : ch === "|" ? `<span class="m-del">|</span>` : esc(ch); }
      if (c === "begin") {
        arg(); const rows = []; let cur = "";
        while (p < t.length) {
          const q = t[p];
          if (q.c === "end") { p++; arg(); break; }
          if (q.e === "\\") { p++; rows.push(cur); cur = ""; continue; }
          cur += step();
        }
        if (cur) rows.push(cur);
        return `<span class="m-cases"><span class="m-brace" style="--n:${rows.length}"></span><span class="m-rows">${rows.map(r => `<span>${r}</span>`).join("")}</span></span>`;
      }
      if (FN.has(c)) { const sup = t[p] && t[p].ch === "^" ? step() : ""; return `${p > 1 ? "&thinsp;" : ""}<span class="fn">${c}</span>${sup}&thinsp;`; }
      if (c in SYM) return SYM[c];
      return esc(c);
    }
    return seq(() => false);
  }
  function rich(text) {
    let out = "", last = 0;
    const re = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g; let m;
    while ((m = re.exec(text))) {
      out += esc(text.slice(last, m.index));
      out += m[1] !== undefined ? `<span class="m">${render(m[1])}</span>` : `<span class="m m-disp">${render(m[2])}</span>`;
      last = re.lastIndex;
    }
    return out + esc(text.slice(last));
  }
  return { render, rich };
})();
function T(text) { const tp = document.createElement("template"); tp.innerHTML = TeX.rich(text); return tp.content; }
