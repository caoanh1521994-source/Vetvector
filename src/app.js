/* ================= DỮ LIỆU CHẶNG ================= */
const CHAPS = [
  { no: 1, roman: "I", region: "Vùng núi phía Bắc", title: "Chương I. Mệnh đề và tập hợp" },
  { no: 2, roman: "II", region: "Hà Nội – Quảng Ninh", title: "Chương II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn" },
  { no: 3, roman: "III", region: "Miền Trung", title: "Chương III. Hệ thức lượng trong tam giác" },
  { no: 4, roman: "IV", region: "Tây Nguyên – Nam Trung Bộ", title: "Chương IV. Vectơ" },
  { no: 5, roman: "", region: "Đất Mũi", title: "Thử thách tổng hợp giữa kì I" },
];
const STAGES = [
  { id: "b1", no: 1, ch: 1, short: "Lũng Cú", place: "Cột cờ Lũng Cú", topic: "Bài 1. Mệnh đề", icon: "lm-flag", x: 223, y: 46, side: "r",
    note: "Cột cờ ở điểm cực Bắc Tổ quốc. Lá cờ trên đỉnh rộng 54 m², tượng trưng cho 54 dân tộc Việt Nam.",
    say: "Cực Bắc đây rồi! Mệnh đề nào đúng, mệnh đề nào sai, cùng phân xử nào!",
    tip: R`Phủ định của "\(\forall x, P(x)\)" là "\(\exists x, \overline{P(x)}\)". Mệnh đề \(P\Rightarrow Q\) chỉ sai khi P đúng mà Q sai.`,
    food: { name: "Bánh tam giác mạch", icon: "fd-tammach", line: "Bánh làm từ bột hạt tam giác mạch, nướng thơm trên bếp than giữa cao nguyên đá." } },
  { id: "b2", no: 2, ch: 1, short: "Sa Pa", place: "Sa Pa – Fansipan", topic: "Bài 2. Tập hợp và các phép toán trên tập hợp", icon: "lm-peak", x: 134, y: 86, side: "l",
    note: "Thị trấn trong sương dưới chân dãy Hoàng Liên Sơn, gần đỉnh Fansipan cao hơn 3.100 m, được gọi là nóc nhà Đông Dương.",
    say: "Lên Sa Pa rồi! Gom các tập hợp lại như gom mây trên đỉnh núi nào.",
    tip: R`\(n(A\cup B)=n(A)+n(B)-n(A\cap B)\). Với khoảng, dấu ngoặc tròn là không lấy đầu mút.`,
    food: { name: "Cá hồi Sa Pa", icon: "fd-cahoi", line: "Cá hồi nuôi trong dòng suối lạnh vùng núi, làm gỏi, nướng hay nấu lẩu đều ngon." } },
  { id: "b3", no: 3, ch: 2, short: "Hồ Gươm", place: "Hồ Gươm – Hà Nội", topic: "Bài 3. Bất phương trình bậc nhất hai ẩn", icon: "lm-lake", x: 255, y: 166, side: "l",
    note: "Hồ Hoàn Kiếm giữa lòng Thủ đô, Tháp Rùa đứng trên gò nhỏ giữa hồ. Mặt hồ chia đôi bởi một đường thẳng tưởng tượng, giống bờ của miền nghiệm.",
    say: "Hà Nội đây! Một đường thẳng chia mặt phẳng làm đôi, mình chọn nửa nào nhỉ?",
    tip: R`Muốn biết nửa mặt phẳng nào là miền nghiệm, thay thử một điểm không nằm trên bờ (thường là \(O(0;0)\)). Dấu < hoặc > thì không lấy bờ.`,
    food: { name: "Phở Hà Nội", icon: "fd-pho", line: "Bánh phở mềm, nước dùng ninh xương trong và ngọt, thêm hành lá, rau thơm." } },
  { id: "b4", no: 4, ch: 2, short: "Hạ Long", place: "Vịnh Hạ Long", topic: "Bài 4. Hệ bất phương trình bậc nhất hai ẩn", icon: "lm-karst", x: 332, y: 170, side: "r",
    note: "Gần 2.000 hòn đảo đá vôi nhô lên giữa vịnh, Di sản thiên nhiên thế giới. Mỗi hòn đảo như một miền nghiệm nằm trên mặt phẳng.",
    say: "Vịnh đẹp quá! Mỗi hòn đảo là một miền nghiệm, mình đi tìm đỉnh nhé!",
    tip: R`Miền nghiệm của hệ là phần giao. Giá trị lớn nhất, nhỏ nhất của \(F=ax+by\) đạt tại một đỉnh của miền nghiệm.`,
    food: { name: "Chả mực Hạ Long", icon: "fd-chamuc", line: "Mực tươi giã tay rồi rán vàng, giòn dai và thơm, đặc sản vùng biển Quảng Ninh." } },
  { id: "b5", no: 5, ch: 3, short: "Huế", place: "Kinh thành Huế", topic: "Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°", icon: "lm-citadel", x: 358, y: 449, side: "l",
    note: "Kinh đô của triều Nguyễn bên bờ sông Hương. Cổng thành, mái điện nghiêng đủ mọi góc, đúng chỗ để đo sin, côsin.",
    say: "Kinh thành nhiều góc lắm! Mình lấy nửa đường tròn đơn vị ra đo thử nào.",
    tip: R`\(\sin(180^\circ-\alpha)=\sin\alpha\), \(\cos(180^\circ-\alpha)=-\cos\alpha\), \(\sin^2\alpha+\cos^2\alpha=1\). Góc tù thì côsin âm.`,
    food: { name: "Bún bò Huế", icon: "fd-bunbo", line: "Sợi bún to, nước dùng thơm mùi sả, màu đỏ cam của sa tế, ăn kèm rau sống." } },
  { id: "b6", no: 6, ch: 3, short: "Hội An", place: "Phố cổ Hội An", topic: "Bài 6. Hệ thức lượng trong tam giác", icon: "lm-lantern", x: 406, y: 488, side: "r",
    note: "Phố cổ bên sông Hoài với đèn lồng và Chùa Cầu. Muốn biết hai con phố cách nhau bao xa, hãy dùng định lí côsin.",
    say: "Đèn lồng sáng rồi! Tính cạnh, tính góc tam giác thôi.",
    tip: R`\(a^2=b^2+c^2-2bc\cos A\); \(\frac{a}{\sin A}=2R\); \(S=\frac12 bc\sin A=pr=\frac{abc}{4R}\).`,
    food: { name: "Cao lầu Hội An", icon: "fd-caolau", line: "Sợi mì vàng dai đặc trưng, ăn cùng thịt xíu, rau sống và bánh đa giòn." } },
  { id: "b7", no: 7, ch: 4, short: "Đà Lạt", place: "Đà Lạt", topic: "Bài 7. Các khái niệm mở đầu về vectơ", icon: "lm-pine", x: 400, y: 738, side: "l",
    note: "Thành phố ngàn hoa trên cao nguyên Lâm Viên. Gió thổi qua đồi thông có hướng và có độ lớn, đúng chất một vectơ.",
    say: "Đây là quê mình! Mũi tên nào cũng có hướng và độ dài nhé.",
    tip: R`Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Cùng phương là giá song song hoặc trùng nhau.`,
    food: { name: "Bánh tráng nướng Đà Lạt", icon: "fd-banhtrang", line: "Bánh tráng nướng giòn trên than hồng, phết trứng, hành lá, ăn nóng giữa trời se lạnh." } },
  { id: "b8", no: 8, ch: 4, short: "Nha Trang", place: "Biển Nha Trang", topic: "Bài 8. Tổng và hiệu của hai vectơ", icon: "lm-beach", x: 456, y: 708, side: "r",
    note: "Thành phố biển với vịnh Nha Trang và Tháp Bà Ponagar của người Chăm. Thuyền đi trên biển chịu cả lực gió lẫn dòng nước: hợp lực là tổng hai vectơ.",
    say: "Ra biển nào! Gió đẩy một hướng, sóng đẩy một hướng, cộng lại xem thuyền đi đâu.",
    tip: R`Quy tắc ba điểm: \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\). Hình bình hành ABCD: \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\). Hiệu: \(\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}\).`,
    food: { name: "Bún chả cá Nha Trang", icon: "fd-bunchaca", line: "Nước dùng ngọt từ cá biển, chả cá chiên vàng thái miếng, thêm chút rau thơm." } },
  { id: "boss", no: 9, ch: 5, short: "Cà Mau", place: "Mũi Cà Mau", topic: "Thử thách tổng hợp giữa kì I", icon: "lm-cape", x: 200, y: 925, side: "r",
    note: "Đất Mũi là điểm cực Nam trên đất liền. 10 câu trộn từ cả 8 bài, mức Thông hiểu đến Vận dụng cao.",
    say: "Chặng cuối rồi! Trộn đủ cả 8 bài, giữ chắc trái tim nhé!",
    tip: R`10 câu trộn từ cả 8 bài. Nên luyện chắc mức 3 (Vận dụng) ở các địa danh trước khi thử sức. Vượt qua để nhận Phiếu điểm 10 vàng.`,
    food: { name: "Cua Cà Mau", icon: "fd-cua", line: "Cua biển Cà Mau chắc thịt, nhiều gạch, nổi tiếng khắp cả nước.", gold: true } },
];
const N_STOPS = 8;
const LEVELS = [
  { n: 1, name: "Nhận biết", sub: "Nhớ định nghĩa, kí hiệu, công thức", color: "var(--lv1)" },
  { n: 2, name: "Thông hiểu", sub: "Áp dụng trực tiếp một bước", color: "var(--lv2)" },
  { n: 3, name: "Vận dụng", sub: "Nhiều bước, bài toán thực tế", color: "var(--lv3)" },
  { n: 4, name: "Vận dụng cao", sub: "Tham số, tổng hợp, nâng cao", color: "var(--lv4)" },
];
const PER_ROUND = 5, BOSS_ROUND = 10, HEARTS = 3, FIFTY_COST = 20, HINT_COST = 10, START_SEEDS = 30;

const SAY = {
  good: ["Chuẩn không cần chỉnh!", "Mũi tên trúng đích!", "Vẹt phục bạn luôn!", "Quá đỉnh, thưởng hạt nào!", "Đúng rồi, bay tiếp thôi!", "Chính xác tuyệt đối!"],
  bad: ["Ối, lệch hướng mất rồi. Đọc lời giải nhé!", "Không sao, vectơ nào cũng có lúc đổi hướng.", "Gần đúng rồi! Xem lại lời giải bên dưới.", "Sai một li… Mình cùng xem cách làm nhé."],
  streak: n => `Combo ${n} câu liền! Thêm hạt thưởng cho bạn!`,
  last: "Chỉ còn một trái tim. Bình tĩnh đọc kĩ đề nha!",
};

/* ================= TRẠNG THÁI ================= */
const KEY = "vetvecto-v2";
const fresh = () => ({ name: "", seeds: START_SEEDS, charms: 0, coupons: {}, cave: { found: false, sel: "b1", best: {}, done: {}, seen: {}, hint: {} }, omi: { n: 0, keep: [], tied: 0, fixed: 0 }, sound: true, music: true, musicVol: .6, teacher: false, prog: {}, tickets: {}, sel: "b1" });
let S = fresh();
/* ===== Nhiều tài khoản trên cùng một máy =====
   Danh sách ở PKEY: { list: [{ id, name, pin (mã băm hoặc null), stars, tix, last }], cur }.
   Tiến độ của từng tài khoản ở khóa "vetvecto-v2:<id>". Bản cũ (một tài khoản ở "vetvecto-v2") được chuyển sang tự động. */
const PKEY = "vetvecto-profiles";
let P = { list: [], cur: null };
const stateKey = id => KEY + ":" + id;
const todayISO = () => new Date().toISOString().slice(0, 10);
const curProfile = () => P.list.find(x => x.id === P.cur) || null;
function saveProfiles() { try { localStorage.setItem(PKEY, JSON.stringify(P)); } catch (e) {} }
function loadProfiles() {
  try { const r = JSON.parse(localStorage.getItem(PKEY) || "null"); if (r && Array.isArray(r.list)) P = { list: r.list, cur: r.cur || null }; } catch (e) {}
  try { // chuyển dữ liệu bản cũ
    const old = localStorage.getItem(KEY);
    if (old) {
      const o = JSON.parse(old), id = "p" + Date.now().toString(36);
      if (o && typeof o === "object" && o.name) { P.list.push({ id, name: o.name, pin: null, last: todayISO() }); localStorage.setItem(stateKey(id), old); if (!P.cur) P.cur = id; }
      localStorage.removeItem(KEY); saveProfiles();
    }
  } catch (e) {}
  if (P.cur && !curProfile()) P.cur = null;
}
function load() {
  try { const raw = P.cur && localStorage.getItem(stateKey(P.cur)); if (raw) { const s = JSON.parse(raw); if (s && typeof s === "object") return Object.assign(fresh(), s); } } catch (e) {}
  return fresh();
}
function save() {
  if (!P.cur) return;
  try { localStorage.setItem(stateKey(P.cur), JSON.stringify(S)); } catch (e) {}
  const pr = curProfile(); if (pr) { pr.name = S.name || pr.name; pr.stars = totalStars(); pr.tix = ticketCount(); pr.last = todayISO(); saveProfiles(); }
}

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, kids = []) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v; else if (k === "text") n.textContent = v; else if (k === "html") n.innerHTML = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
  }
  for (const c of [].concat(kids)) if (c != null) n.append(c);
  return n;
};
const icon = (id, cls = "") => { const s = document.createElementNS("http://www.w3.org/2000/svg", "svg"); if (cls) s.setAttribute("class", cls); s.setAttribute("aria-hidden", "true"); const u = document.createElementNS("http://www.w3.org/2000/svg", "use"); u.setAttribute("href", "#" + id); s.append(u); return s; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const stageIdx = id => STAGES.findIndex(s => s.id === id);
const stars = (id, l) => (S.prog[id] && S.prog[id][l] && S.prog[id][l].stars) || 0;
const passed = (id, l) => stars(id, l) > 0;
/* Mọi địa danh và mức đều mở sẵn: học sinh chọn luyện bất kì phần nào (ví dụ chỉ mức Vận dụng cao).
   Phiếu điểm 10 vẫn chỉ trao khi qua đủ 4 mức của địa danh; phiếu vàng khi qua Thử thách Đất Mũi. */
function stageUnlocked(i) { return true; }
function levelUnlocked(id, l) { return true; }
const stageDone = id => id === "boss" ? passed("boss", 1) : [1, 2, 3, 4].every(l => passed(id, l));
const totalStars = () => Object.values(S.prog).reduce((t, lv) => t + Object.values(lv).reduce((u, x) => u + (x.stars || 0), 0), 0);
const ticketCount = () => Object.keys(S.tickets).length;

/* ================= CÔNG THỨC ================= */
function typeset() { return Promise.resolve(); }
function clearMath() {}

/* ================= ÂM THANH ================= */
let AC = null;
function play(kind) {
  if (!S.sound) return;
  try {
    AC = Music.context(); if (AC.state !== "running") Music.unlock();
    if (kind === "rattle") {
      for (let k = 0; k < 9; k++) { const t = AC.currentTime + k * .1 + Math.random() * .03, o = AC.createOscillator(), g = AC.createGain();
        o.type = "square"; o.frequency.value = 700 + Math.random() * 900; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.05, t + .004); g.gain.exponentialRampToValueAtTime(.0001, t + .05);
        link(o, g, AC.destination); o.start(t); o.stop(t + .06); }
      return;
    }
    const seq = { chime: [[1047, .12], [1319, .12], [1568, .35]], wind: [[392, .3], [330, .5]], good: [[660, .09], [990, .14]], bad: [[220, .14], [165, .2]], win: [[523, .1], [659, .1], [784, .1], [1047, .25]], tap: [[520, .05]], ticket: [[784, .1], [988, .1], [1175, .1], [1568, .3]] }[kind] || [];
    let t = AC.currentTime + .01;
    for (const [f, d] of seq) {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = kind === "bad" ? "triangle" : "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.18, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      link(o, g, AC.destination); o.start(t); o.stop(t + d + .02); t += d * .9;
    }
  } catch (e) {}
}

/* ================= VẸT ================= */
const tplParrot = $("#tpl-parrot");
function mountParrots(root = document) { root.querySelectorAll("[data-parrot]").forEach(h => { if (!h.firstElementChild) h.append(tplParrot.content.firstElementChild.cloneNode(true)); }); }
function mood(host, m, anim) {
  const p = host && host.querySelector(".parrot"); if (!p) return;
  p.classList.remove("happy", "sad", "jump", "shake");
  if (m) p.classList.add(m);
  if (anim) { void p.getBoundingClientRect(); p.classList.add(anim); setTimeout(() => p.classList.remove(anim), 700); }
}

/* ================= MÀN HÌNH ================= */
function show(id) {
  for (const s of document.querySelectorAll(".screen")) s.hidden = s.id !== id;
  $("#hud").hidden = id === "scrWelcome";
  try { Music.duck(id === "scrQuiz" ? .5 : 1); } catch (e) {}
  window.scrollTo({ top: 0 });
}
function hud() {
  $("#hudName").textContent = S.name;
  $("#hudSeeds").textContent = S.seeds;
  $("#hudStars").textContent = totalStars();
  $("#hudTickets").textContent = ticketCount();
  $("#soundBtn use").setAttribute("href", S.sound ? "#i-sound" : "#i-mute");
  $("#soundBtn").setAttribute("aria-pressed", String(S.sound));
  $("#musicBtn use").setAttribute("href", S.music ? "#i-music" : "#i-music-off");
  $("#musicBtn").classList.toggle("on", !!S.music && Music.playing);
  $("#musicBtn").setAttribute("aria-pressed", String(!!S.music));
}
let toastTimer;
function toast(msg) {
  let t = $(".toast"); if (!t) { t = el("div", { class: "toast", role: "status" }); document.body.append(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => t.hidden = true, 2600);
}

/* ================= BẢN ĐỒ ================= */
const SVGNS = "http://www.w3.org/2000/svg";
const sv = (tag, attrs = {}) => { const n = document.createElementNS(SVGNS, tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
function drawMap() {
  const routes = $("#routes"), nodes = $("#nodes");
  routes.innerHTML = ""; nodes.innerHTML = "";
  for (let i = 0; i < STAGES.length - 1; i++) {
    const a = STAGES[i], b = STAGES[i + 1];
    const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), k = (i % 2 ? -1 : 1) * Math.min(.22 * L, 70);
    const mx = (a.x + b.x) / 2 - dy / L * k, my = (a.y + b.y) / 2 + dx / L * k;
    const d = `M${a.x},${a.y} Q${mx.toFixed(1)},${my.toFixed(1)} ${b.x},${b.y}`;
    routes.append(sv("path", { d, class: "route" }));
    const segDone = i < N_STOPS - 1 ? passed(a.id, 3) : STAGES.slice(0, N_STOPS).every(s => passed(s.id, 3));
    if (segDone) routes.append(sv("path", { d, class: "route done" }));
  }
  let current = STAGES.findIndex(s => !stageDone(s.id));
  if (current < 0) current = STAGES.length - 1;
  const R0 = 24;
  STAGES.forEach((s, i) => {
    const open = stageUnlocked(i), done = stageDone(s.id);
    const g = sv("g", { class: "node" + (open ? "" : " locked") + (S.sel === s.id ? " sel" : ""), tabindex: "0", role: "button",
      "aria-label": `${s.place}, ${s.topic}${open ? "" : " (đang khóa)"}${done ? ", đã nhận phiếu" : ""}` });
    if (open) g.append(sv("circle", { cx: s.x, cy: s.y, r: R0 + 16, fill: "url(#halo)", opacity: done ? ".45" : ".7" }));
    if (open && !done && i === current) g.append(sv("circle", { cx: s.x, cy: s.y, r: R0, fill: "none", stroke: "#3EF0D0", "stroke-width": 3, class: "pulse" }));
    g.append(sv("circle", { class: "ring", cx: s.x, cy: s.y, r: R0, fill: done ? "url(#orbDone)" : open ? "url(#orbOpen)" : "url(#orbLock)", stroke: done ? "#FFF3B0" : open ? "#fff" : "#4A5490", "stroke-width": 2.5 }));
    const u = sv("use", { href: "#" + s.icon, x: s.x - 17, y: s.y - 17, width: 34, height: 34 });
    if (!open) u.setAttribute("opacity", ".35");
    g.append(u);
    if (!open) g.append(sv("use", { href: "#i-lock", x: s.x + 8, y: s.y + 6, width: 20, height: 20 }));
    if (done) { g.append(sv("circle", { cx: s.x + 19, cy: s.y - 18, r: 10, fill: "var(--leaf)", stroke: "#fff", "stroke-width": 2.5 })); g.append(sv("use", { href: "#i-check", x: s.x + 12, y: s.y - 25, width: 14, height: 14 })); }
    const tag = sv("g", { class: "tag" });
    const left = s.side === "l";
    const tx = left ? s.x - 32 : s.x + 32, ty = s.y + 7;
    const rect = sv("rect", { y: s.y - 16, rx: 11, height: 32, width: 100, x: left ? tx - 108 : tx - 8 });
    const text = sv("text", { x: tx, y: ty, "font-size": 19, "text-anchor": left ? "end" : "start" });
    text.textContent = s.id === "boss" ? "★ Cà Mau" : `${s.no} · ${s.short}`;
    tag.append(rect, text); g.append(tag);
    const choose = () => { S.sel = s.id; save(); play("tap"); drawMap(); renderPanel(); if (innerWidth <= 900) $("#panel").scrollIntoView({ behavior: "smooth", block: "start" }); };
    g.addEventListener("click", choose);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
    nodes.append(g);
    requestAnimationFrame(() => { try { const w = text.getComputedTextLength() + 18; rect.setAttribute("width", w); rect.setAttribute("x", left ? tx - w + 9 : tx - 9); } catch (e) {} });
  });
  mapCaveNode(nodes);
  const c = STAGES[current];
  const tok = sv("g", { class: "token" });
  tok.append(sv("use", { href: "#parrot-head", x: c.x - 28, y: c.y - 78, width: 50, height: 50 }));
  nodes.append(tok);
}

function starRow(n) { const w = el("span", { class: "stars", "aria-label": `${n}/3 sao` }); for (let i = 0; i < 3; i++) w.append(icon(i < n ? "i-star" : "i-star-off")); return w; }

function renderPanel() {
  const p = $("#panel"); clearMath(p); p.innerHTML = "";
  const s = STAGES.find(x => x.id === S.sel) || STAGES[0];
  const i = stageIdx(s.id), open = stageUnlocked(i), chap = CHAPS[s.ch - 1], boss = s.id === "boss";
  const card = el("section", { class: "stagecard" });
  card.append(el("div", { class: "stagehead" }, [el("div", { class: "lmk" }, icon(s.icon)), el("div", { style: "min-width:0" }, [
    el("div", { class: "eyebrow", text: boss ? "Chặng 5 · Đất Mũi" : `Chặng ${s.ch} · ${chap.region}` }),
    el("h2", { text: s.place }), el("p", { text: s.topic })])]));
  const body = el("div", { class: "stagebody" });
  if (!boss) {
    const sibs = STAGES.filter(x => x.ch === s.ch);
    const row = el("div", { class: "sibs" }, [el("span", { class: "sibs-l", text: chap.title })]);
    const chips = el("div", { class: "sibchips" });
    sibs.forEach(x => {
      const xi = stageIdx(x.id), xo = stageUnlocked(xi), xd = stageDone(x.id);
      const b = el("button", { class: "sib" + (x.id === s.id ? " on" : "") + (xo ? "" : " off"), "aria-pressed": String(x.id === s.id),
        onclick: () => { S.sel = x.id; save(); play("tap"); drawMap(); renderPanel(); } }, [icon(xd ? "i-star" : xo ? x.icon : "i-lock"), document.createTextNode(`Bài ${x.no} · ${x.short}`)]);
      chips.append(b);
    });
    row.append(chips); body.append(row);
  }
  body.append(el("p", { class: "placenote", text: s.note }));
  if (!open) body.append(el("p", { class: "note err", text: boss ? "Đang khóa: qua mức 3 (Vận dụng) ở cả 8 địa danh để mở." : `Đang khóa: qua mức 3 (Vận dụng) ở ${STAGES[i - 1].place} để mở.` }));
  const list = el("ul", { class: "levels" });
  const rows = boss ? [{ n: 1, name: "Thử thách Đất Mũi", sub: `${BOSS_ROUND} câu trộn cả 8 bài`, color: "var(--red)" }] : LEVELS;
  for (const L of rows) {
    const ok = levelUnlocked(s.id, L.n), st = stars(s.id, L.n);
    const count = boss ? "" : ` · ${BANK[s.id][L.n].length} câu`;
    const btn = ok ? el("button", { class: "btn small" + (st ? " ghost" : ""), text: st ? "Chơi lại" : "Chơi", onclick: () => startRound(s.id, L.n) })
                   : el("span", { class: "lockic", "aria-label": "Đang khóa" }, icon("i-lock"));
    if (!ok) btn.firstChild.style.cssText = "width:26px;height:26px";
    const btns = S.teacher && !boss ? el("div", { class: "lvbtns" }, [el("button", { class: "btn small ghost keybtn", text: "Đáp án", onclick: () => openKey(s.id, L.n) }), btn]) : btn;
    list.append(el("li", { class: "level" + (ok ? "" : " locked") }, [
      el("div", { class: "lvbadge", style: `background:${L.color}`, text: boss ? "!" : String(L.n) }),
      el("div", {}, [el("div", { class: "lvname", text: boss ? L.name : `Mức ${L.n} · ${L.name}` }),
        el("div", { class: "lvsub" }, [document.createTextNode(L.sub + count + " "), ok ? starRow(st) : null])]),
      btns]));
  }
  body.append(list);
  const nPassed = boss ? (passed("boss", 1) ? 1 : 0) : [1, 2, 3, 4].filter(l => passed(s.id, l)).length;
  const need = boss ? 1 : 4, has = !!S.tickets[s.id];
  const bar = el("div", { class: "bar" }, el("i", { style: `width:${(nPassed / need) * 100}%` }));
  const rw = el("div", { class: "reward" + (has ? " got" : "") }, [el("div", { class: "foodbadge" + (s.food.gold ? " gold" : "") }, icon(s.food.icon)), el("div", { style: "flex:1;min-width:0" }, [
    el("small", { class: "rw-k", text: s.food.gold ? "Phiếu điểm 10 vàng" : "Phiếu điểm 10" }),
    el("b", { text: s.food.name }),
    el("small", { text: has ? "Đã nhận! Bấm để xem phiếu." : S.teacher ? "Giáo viên: bấm để xem trước phiếu." : boss ? "Vượt qua thử thách để nhận." : `Qua cả 4 mức để nhận (${nPassed}/4).` }), bar])]);
  if (has || S.teacher) { rw.style.cursor = "pointer"; rw.tabIndex = 0; rw.setAttribute("role", "button"); rw.addEventListener("click", () => openTicket(s.id)); rw.addEventListener("keydown", e => { if (e.key === "Enter") openTicket(s.id); }); }
  body.append(rw);
  const cs = el("div", { class: "cstrip" }, [el("span", { class: "cs-l" }, [icon("i-coupon"), document.createTextNode("Phiếu miễn BTVN")])]);
  for (const l of (boss ? [1] : [1, 2, 3, 4])) {
    const key = `${s.id}.${l}`, rec = S.coupons[key], view = !!rec || S.teacher;
    const c = el(view ? "button" : "span", { class: "cchip" + (rec ? (rec.used ? " used" : " has") : ""), title: rec ? (rec.used ? "Đã dùng" : "Đã nhận, bấm để xem") : "Qua mức này lần đầu để nhận", text: boss ? `Thử thách · ${BOSS_PCT}%` : `M${l} · ${COUPON_PCT[l]}%` });
    if (view) c.addEventListener("click", () => openCoupon(key));
    cs.append(c);
  }
  body.append(cs);
  card.append(body);
  p.append(card);
  const tipc = el("div", { class: "tipcard" }, [icon("parrot-head"), el("div", { style: "min-width:0" }, [el("p", {}, [el("b", { text: "Mẹo của Vẹt: " }), T(s.tip)]),
    el("button", { class: "btn small ghost", style: "margin-top:8px", onclick: () => openBook(boss ? "nen" : s.id) }, [icon("i-book"), document.createTextNode(boss ? "Mở Sổ tay công thức" : `Sổ tay ${s.topic.split(".")[0]}`)])])]);
  tipc.querySelector(".btn svg").style.cssText = "width:18px;height:18px";
  p.append(tipc);
  const oc = el("div", { class: "omicard" }, [el("button", { class: "omi-mini", "aria-label": "Mở Hộp quẻ học tập", onclick: openOmikuji }, icon("omi-box")),
    el("div", { style: "min-width:0;flex:1" }, [el("b", { text: "Hộp quẻ học tập" }),
      el("p", { text: `Lắc ${OMI_COST} hạt một lần: nhận bí kíp, công thức, thử thách nhanh hoặc một lỗi sai cần tránh.` }),
      el("button", { class: "btn small", style: "margin-top:8px", onclick: openOmikuji }, [icon("i-seed"), document.createTextNode(`Lắc quẻ · ${OMI_COST} hạt`)])])]);
  oc.querySelector(".btn svg").style.cssText = "width:18px;height:18px";
  p.append(oc);
}

/* ================= LƯỢT CHƠI ================= */
let RUN = null;
function prepare(q, meta) {
  const c = Object.assign({}, q, meta || {});
  if (q.t === "mc") { const order = shuffle([0, 1, 2, 3]); c.opts = order.map(k => q.o[k]); c.ans = order.indexOf(0); }
  return c;
}
function buildPool(id, lv) {
  if (id !== "boss") return shuffle(BANK[id][lv]).slice(0, PER_ROUND).map(q => prepare(q, { lv }));
  const qs = [];
  const ids = STAGES.slice(0, N_STOPS).map(s => s.id);
  for (const b of ids) { const l = pick([2, 3]); qs.push(prepare(pick(BANK[b][l]), { lv: l, ch: b })); }
  for (const b of shuffle(ids).slice(0, 2)) qs.push(prepare(pick(BANK[b][4]), { lv: 4, ch: b }));
  return shuffle(qs);
}
function startRound(id, lv) {
  play("tap");
  RUN = { id, lv, qs: buildPool(id, lv), i: 0, hearts: HEARTS, wrong: 0, right: 0, streak: 0, seeds: 0, marks: [] };
  show("scrQuiz");
  const s = STAGES[stageIdx(id)];
  say(s.say); mood($("#coachParrot"), "", "jump");
  renderQuestion();
}
function say(t) { const b = $("#coachSay"); clearMath(b); b.textContent = t; typeset(b); }
function renderTop() {
  const s = STAGES[stageIdx(RUN.id)];
  const w = $("#qWhere"); w.innerHTML = "";
  w.append(document.createTextNode(RUN.id === "boss" ? `${s.place} · Thử thách` : `${s.short} · Mức ${RUN.lv} – ${LEVELS[RUN.lv - 1].name}`));
  w.append(el("small", { text: s.topic }));
  const pips = $("#qPips"); pips.innerHTML = "";
  RUN.qs.forEach((_, k) => pips.append(el("i", { class: RUN.marks[k] === true ? "ok" : RUN.marks[k] === false ? "no" : k === RUN.i ? "now" : "" })));
  const h = $("#qHearts"); h.innerHTML = "";
  for (let k = 0; k < HEARTS; k++) h.append(icon("i-heart", k < RUN.hearts ? "" : "lost"));
  h.setAttribute("aria-label", `Còn ${RUN.hearts} trái tim`);
}
const TYPE = { mc: "Chọn 1 đáp án", tf: "Đúng hay Sai", num: "Trả lời ngắn" };
function renderQuestion() {
  renderTop();
  const q = RUN.qs[RUN.i], card = $("#qCard");
  clearMath(card); card.innerHTML = "";
  RUN.answered = false; RUN.used5050 = false; RUN.hinted = RUN.hinted || []; RUN.paid = RUN.paid || [];
  const meta = el("div", { class: "qmeta" }, [
    el("span", { class: "pill", text: `Câu ${RUN.i + 1}/${RUN.qs.length}` }),
    el("span", { class: "pill", text: TYPE[q.t] }),
    el("span", { class: "pill lv", style: `background:${LEVELS[q.lv - 1].color}`, text: `Mức ${q.lv}` + (q.ch ? ` · Bài ${STAGES[stageIdx(q.ch)].no}` : "") })]);
  card.append(meta, el("p", { class: "qtext" }, T(q.q)));
  { const fg = figEl(q.key); if (fg) card.append(fg); }
  const area = el("div", { class: "answer" }); card.append(area);
  const hintSlot = el("div", { id: "hintSlot" }); card.append(hintSlot);
  const actions = el("div", { class: "actions" }); card.append(actions);
  const hb = el("button", { class: "btn small hint", id: "hintBtn", onclick: () => showHint(q) }, [icon("i-bulb"), document.createTextNode("Gợi ý công thức " + helpPrice())]);
  hb.firstChild.style.cssText = "width:20px;height:20px";
  const tools = el("div", { class: "row", style: "margin-top:0" }, hb);
  actions.append(tools);
  if (q.t === "mc") {
    const long = q.opts.some(o => o.length > 34 || /begin|frac/.test(o) && o.length > 24);
    const box = el("div", { class: "opts" + (long ? " long" : "") });
    q.opts.forEach((o, k) => box.append(el("button", { class: "opt", "data-k": k, onclick: () => answerMC(k) }, [el("span", { class: "k", text: "ABCD"[k] }), el("span", { class: "v" }, T(o))])));
    area.append(box);
    const ff = el("button", { class: "btn small ghost", id: "fiftyBtn", onclick: fifty }, [icon("i-seed"), document.createTextNode(`50/50 (−${FIFTY_COST} hạt)`)]);
    ff.firstChild.style.cssText = "width:20px;height:20px";
    tools.append(ff);
  } else if (q.t === "tf") {
    RUN.tfPick = [null, null, null, null];
    const check = el("button", { class: "btn green", text: "Kiểm tra", disabled: true, onclick: answerTF });
    q.s.forEach(([txt], k) => {
      const seg = el("div", { class: "seg", role: "group", "aria-label": `Ý ${"abcd"[k]}` });
      for (const [lab, val] of [["Đúng", true], ["Sai", false]]) {
        seg.append(el("button", { "aria-pressed": "false", text: lab, onclick: e => {
          if (RUN.answered) return; RUN.tfPick[k] = val; play("tap");
          seg.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b === e.currentTarget)));
          check.disabled = RUN.tfPick.some(v => v === null);
        } }));
      }
      area.append(el("div", { class: "tfrow", "data-k": k }, [el("div", { class: "s" }, [el("b", { text: "abcd"[k] + ")" }), T(txt)]), seg]));
    });
    actions.append(check);
  } else {
    const inp = el("input", { id: "numInput", type: "text", inputmode: "decimal", autocomplete: "off", placeholder: "Nhập đáp số", "aria-label": "Đáp số" });
    const check = el("button", { class: "btn green", text: "Kiểm tra", onclick: () => answerNum(inp) });
    inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); answerNum(inp); } });
    area.append(el("div", { class: "numrow" }, [inp, check]), el("p", { class: "hint", text: "Số thập phân dùng dấu phẩy hoặc dấu chấm, ví dụ 8,5. Có thể nhập phân số như 43/30." }));
    setTimeout(() => inp.focus({ preventScroll: true }), 50);
  }
  typeset(card);
}
function fifty() {
  const q = RUN.qs[RUN.i]; if (RUN.answered || RUN.used5050) return;
  if (S.seeds < FIFTY_COST) { toast(`Cần ${FIFTY_COST} hạt để dùng 50/50. Bạn đang có ${S.seeds} hạt.`); return; }
  RUN.used5050 = true; S.seeds -= FIFTY_COST; save(); hud();
  const wrongs = shuffle([0, 1, 2, 3].filter(k => k !== q.ans)).slice(0, 2);
  wrongs.forEach(k => { const b = $(`.opt[data-k="${k}"]`); b.classList.add("gone"); b.disabled = true; });
  $("#fiftyBtn").disabled = true; say("Mình đã cất bớt 2 đáp án sai. Chọn tiếp nhé!"); play("tap");
}
function answerMC(k) {
  if (RUN.answered) return;
  const q = RUN.qs[RUN.i], ok = k === q.ans;
  document.querySelectorAll(".opt").forEach(b => { b.disabled = true; const j = +b.dataset.k; if (j === q.ans) b.classList.add("right"); else if (j === k) b.classList.add("wrong"); });
  const ff = $("#fiftyBtn"); if (ff) ff.remove();
  settle(ok, ok ? null : `Đáp án đúng: ${"ABCD"[q.ans]}.`);
}
function answerTF() {
  if (RUN.answered) return;
  const q = RUN.qs[RUN.i]; let all = true;
  q.s.forEach(([, truth], k) => {
    const row = $(`.tfrow[data-k="${k}"]`), good = RUN.tfPick[k] === truth; if (!good) all = false;
    row.classList.add(good ? "right" : "wrong");
    row.querySelectorAll(".seg button").forEach(b => b.disabled = true);
    row.querySelector(".s").append(el("span", { class: "ans", text: `  → ${truth ? "Đúng" : "Sai"}` }));
  });
  const nRight = q.s.filter(([, t], k) => RUN.tfPick[k] === t).length;
  document.querySelector(".actions .btn.green").remove();
  settle(all, all ? null : `Bạn đúng ${nRight}/4 ý. Cần đúng cả 4 ý mới qua câu này.`);
}
function parseNum(str) {
  let s = String(str).trim().replace(/\s+/g, "").replace(/[−–]/g, "-");
  if (!s) return NaN;
  const fr = s.match(/^(-?[\d.,]+)\/(-?[\d.,]+)$/);
  const toN = t => { t = t.replace(/,/g, "."); return /^-?\d*\.?\d+$/.test(t) ? parseFloat(t) : NaN; };
  if (fr) { const a = toN(fr[1]), b = toN(fr[2]); return b ? a / b : NaN; }
  return toN(s);
}
function answerNum(inp) {
  if (RUN.answered) return;
  const q = RUN.qs[RUN.i], v = parseNum(inp.value);
  if (Number.isNaN(v)) { toast("Hãy nhập một số, ví dụ 8,5 hoặc −2."); inp.focus(); return; }
  const ok = Math.abs(v - q.a) <= q.tol + 1e-9;
  inp.classList.add(ok ? "right" : "wrong"); inp.readOnly = true;
  const btn = inp.parentElement.querySelector("button"); if (btn) btn.remove();
  settle(ok, ok ? null : `Đáp số đúng: ${String(q.a).replace(".", ",")}.`);
}
function settle(ok, extra) {
  RUN.answered = true;
  const q = RUN.qs[RUN.i];
  RUN.marks[RUN.i] = ok;
  let gain = 0;
  if (ok) { RUN.right++; RUN.streak++; gain = 10 + (RUN.streak >= 3 ? 5 : 0); }
  else { RUN.wrong++; RUN.streak = 0; RUN.hearts--; }
  RUN.seeds += gain; S.seeds += gain; save(); hud(); renderTop();
  const host = $("#coachParrot");
  if (ok) { play("good"); mood(host, "happy", "jump"); say(RUN.streak >= 3 ? SAY.streak(RUN.streak) : pick(SAY.good)); }
  else { play("bad"); mood(host, "sad", "shake"); say(RUN.hearts === 1 ? SAY.last : RUN.hearts === 0 ? "Hết tim mất rồi… Nghỉ một chút rồi thử lại nhé!" : pick(SAY.bad)); }
  const fb = el("div", { class: "feedback " + (ok ? "good" : "bad"), role: "status" }, [
    el("h3", { text: ok ? `Chính xác! +${gain} hạt` : "Chưa đúng rồi" }),
    extra ? el("p", { class: "sol", style: "font-weight:700", text: extra }) : null,
    el("p", { class: "sol" }, [el("b", { text: "Lời giải: " }), T(q.e)]),
    figEl(q.key, "sol"),
    relLinks(q)]);
  const card = $("#qCard"); card.append(fb);
  const last = RUN.i === RUN.qs.length - 1 || RUN.hearts === 0;
  const actions = card.querySelector(".actions");
  const nextBtn = el("button", { class: "btn red", text: last ? "Xem kết quả" : "Câu tiếp theo", onclick: () => { if (last) finish(); else { RUN.i++; mood(host, ""); renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); } } });
  actions.innerHTML = ""; actions.append(el("span"), nextBtn);
  typeset(fb).then(() => { nextBtn.focus({ preventScroll: true }); fb.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
}
function finish() {
  const r = RUN, ok = r.hearts > 0, st = ok ? Math.max(1, HEARTS - r.wrong) : 0;
  const prev = stars(r.id, r.lv);
  S.prog[r.id] = S.prog[r.id] || {};
  if (st > prev) S.prog[r.id][r.lv] = { stars: st };
  let bonus = 0; if (ok) { bonus = st * 5; S.seeds += bonus; }
  let newTicket = false, newCoupon = false; const ckey = `${r.id}.${r.lv}`;
  if (ok && stageDone(r.id) && !S.tickets[r.id]) { S.tickets[r.id] = new Date().toISOString().slice(0, 10); newTicket = true; }
  if (ok && !S.coupons[ckey]) { S.coupons[ckey] = { d: new Date().toISOString().slice(0, 10) }; newCoupon = true; }
  save(); hud();
  if (ok) { play(newTicket ? "ticket" : "win"); confetti(newTicket ? 220 : 120); }
  const s = STAGES[stageIdx(r.id)];
  const big = el("div", { class: "bigstars" }); for (let k = 0; k < 3; k++) big.append(icon(k < st ? "i-star" : "i-star-off", k < st ? "on" : ""));
  const nextLv = r.id !== "boss" && r.lv < 4 && levelUnlocked(r.id, r.lv + 1) ? r.lv + 1 : null;
  const btns = el("div", { class: "btnrow" });
  if (newTicket) btns.append(el("button", { class: "btn red", text: "Mở Phiếu điểm 10", onclick: () => { closeModal(); openTicket(r.id, true); } }));
  if (newCoupon) btns.append(el("button", { class: "btn " + (newTicket ? "ghost" : "red"), text: `Xem phiếu miễn ${couponPct(ckey)}%`, onclick: () => { closeModal(); openCoupon(ckey, true); } }));
  if (nextLv && !newTicket) btns.append(el("button", { class: "btn " + (newCoupon ? "ghost" : "red"), text: `Lên mức ${nextLv}`, onclick: () => { closeModal(); startRound(r.id, nextLv); } }));
  btns.append(el("button", { class: "btn ghost", text: "Chơi lại", onclick: () => { closeModal(); startRound(r.id, r.lv); } }));
  btns.append(el("button", { class: "btn ghost", text: "Về bản đồ", onclick: () => { closeModal(); goMap(); } }));
  let msg;
  if (!ok) msg = "Hết tim ở lượt này. Đọc lại lời giải rồi thử lại, câu hỏi sẽ được xáo mới.";
  else if (newTicket) msg = r.id === "boss" ? "Bạn đã chinh phục Đất Mũi! Phiếu điểm 10 vàng · Cua Cà Mau là của bạn." : `Hoàn thành cả 4 mức ở ${s.place}! Bạn nhận Phiếu điểm 10 · ${s.food.name}.`;
  else if (nextLv && prev === 0) msg = `Thử sức tiếp với mức ${nextLv} – ${LEVELS[nextLv - 1].name} nhé!`;
  else msg = st === 3 ? "Không sai câu nào. Tuyệt vời!" : "Qua trạm rồi! Chơi lại để gom đủ 3 sao nhé.";
  const m = el("div", { class: "modal result", role: "dialog", "aria-modal": "true", "aria-labelledby": "resTitle" }, [
    el("div", { "data-parrot": "", style: "width:120px;margin:0 auto" }),
    el("h2", { id: "resTitle", text: ok ? (st === 3 ? "Hoàn hảo!" : "Qua trạm!") : "Hết lượt rồi!" }),
    big,
    el("p", { style: "font-weight:600;margin:0 0 6px", text: msg }),
    newCoupon ? el("p", { class: "res-coupon" }, [icon("i-coupon"), el("span", { html: `<b>+1 Phiếu miễn ${couponPct(ckey)}%</b> bài tập về nhà` })]) : null,
    el("div", { class: "stats" }, [
      el("div", {}, [el("b", { text: `${r.right}/${r.qs.length}` }), el("span", { text: "câu đúng" })]),
      el("div", {}, [el("b", { text: `+${r.seeds + bonus}` }), el("span", { text: "hạt hướng dương" })]),
      el("div", {}, [el("b", { text: `${Math.max(st, prev)}/3` }), el("span", { text: "sao tốt nhất" })])]),
    btns]);
  openModal(m, { dismiss: false });
  mood(m, ok ? "happy" : "sad", ok ? "jump" : "shake");
}
function goMap() { RUN = null; show("scrMap"); drawMap(); renderPanel(); hud(); caveDiscovery(); }

/* ================= PHIẾU ĐIỂM 10 ================= */
function hash(str) { let h = 2166136261; for (const ch of str) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36).toUpperCase().padStart(6, "0").slice(0, 6); }
function ticketEl(id, reveal) {
  const s = stageById(id), gold = !!s.food.gold, secret = !!s.food.secret, date = S.tickets[id] || (S.teacher ? new Date().toISOString().slice(0, 10) : "");
  const d = date ? date.split("-").reverse().join("/") : "";
  return el("div", { class: "ticket" + (gold ? " gold" : "") + (secret ? " secret" : "") + (reveal ? " reveal" : "") }, [
    el("span", { class: "rar", text: secret ? "BÍ ẨN" : gold ? "HUYỀN THOẠI" : "SIÊU HIẾM" }),
    el("div", { class: "t-head", text: secret ? "PHIẾU ĐIỂM 10 BÍ ẨN" : gold ? "PHIẾU ĐIỂM 10 VÀNG" : "PHIẾU ĐIỂM 10" }),
    el("div", { class: "t-sub", text: "Hành trình Vẹt Vectơ · Toán 10 · Giữa học kì I" }),
    el("div", { class: "t-prize" }, [
      el("div", { class: "t-food" }, icon(s.food.icon)),
      el("div", { class: "ten", html: `<span class="ten-cap">ĐIỂM</span><b>10</b><span class="ten-stars">★★★</span>` })]),
    el("div", { class: "t-ribbon", text: s.food.name }),
    el("p", { class: "t-line", text: s.food.line }),
    el("div", { class: "t-sub", style: "margin-top:8px", text: "Trao tặng cho" }),
    el("div", { class: "t-name", text: S.name || "Nhà thám hiểm" }),
    el("p", { class: "t-for", text: secret ? `Đã tìm ra bản đồ ẩn và chinh phục cả ${essayList().length} bài tự luận Vận dụng cao trong Hang Sơn Đoòng.` : gold ? "Đã vượt qua Thử thách tổng hợp tại Đất Mũi Cà Mau, hoàn thành trọn hành trình 8 bài học từ Bắc vào Nam." : `Đã chinh phục ${s.place}: ${s.topic}, vượt qua cả 4 mức Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao.` }),
    el("div", { class: "t-foot" }, [
      el("div", {}, [document.createTextNode("Ngày nhận: " + d), el("br"), document.createTextNode("Mã phiếu: VV" + s.no + "-" + hash((S.name || "") + id + date))]),
      el("div", { class: "sign" }, [icon("parrot-head"), document.createTextNode("Vẹt Vectơ")])])]);
}
function openTicket(id, reveal) {
  const m = el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Phiếu điểm 10" }, [
    ticketEl(id, reveal),
    el("p", { style: "font-size:.88rem;color:var(--ink-soft);text-align:center;margin:12px 0", text: !S.tickets[id] && S.teacher ? "Bản xem trước dành cho giáo viên. Học sinh chỉ nhận phiếu này khi vượt qua đủ các mức." : "Chụp màn hình phiếu để khoe với thầy cô và bố mẹ nhé! Thầy cô có thể đối chiếu mã phiếu với tên học sinh." }),
    el("div", { class: "btnrow" }, [
      el("button", { class: "btn ghost", text: "Mở túi phiếu", onclick: () => { closeModal(); openWallet("ticket"); } }),
      el("button", { class: "btn red", text: "Về bản đồ", onclick: () => { closeModal(); goMap(); } })])]);
  openModal(m);
  if (reveal) { play("ticket"); confetti(180); }
}
function openWallet(tab) {
  tab = tab || "ticket";
  const grid = el("div", { class: "wallet" });
  const tstages = STAGES.concat(caveOpen() || S.tickets.cave ? [CAVE] : []);
  for (const s of tstages) {
    const has = !!S.tickets[s.id], gold = !!s.food.gold, secret = !!s.food.secret, view = has || S.teacher;
    const slot = el(view ? "button" : "div", { class: "slot" + (view ? " has" : "") + (gold ? " gold" : "") + (secret ? " secret" : "") }, [
      el("div", { class: "foodbadge" + (gold ? " gold" : "") + (secret ? " secret" : "") }, icon(s.food.icon)),
      el("b", { text: s.food.name }),
      el("small", { text: has ? `${s.short} · bấm để xem` : S.teacher ? `${s.short} · xem trước` : `${s.short} · chưa nhận` })]);
    if (view) slot.addEventListener("click", () => { closeModal(); openTicket(s.id); });
    grid.append(slot);
  }
  const all = Object.keys(S.coupons), used = all.filter(k => S.coupons[k].used).length, left = all.length - used;
  const clist = el("div", { class: "cwallet" });
  for (const s of STAGES) {
    const row = el("div", { class: "crow" }, [el("div", { class: "crow-l" }, [el("b", { text: s.id === "boss" ? "Đất Mũi" : `Bài ${s.no} · ${s.short}` }), el("small", { text: s.id === "boss" ? "Thử thách tổng hợp" : s.topic.replace(/^Bài \d+\. /, "") })])]);
    const chips = el("div", { class: "crow-c" });
    for (const l of (s.id === "boss" ? [1] : [1, 2, 3, 4])) {
      const key = `${s.id}.${l}`, rec = S.coupons[key], view = !!rec || S.teacher;
      const c = el(view ? "button" : "span", { class: "cslot" + (rec ? (rec.used ? " used" : " has") : ""), "aria-label": `${s.short} ${s.id === "boss" ? "thử thách" : "mức " + l}: ${rec ? (rec.used ? "đã dùng" : "đã nhận") : "chưa nhận"}` }, [
        el("b", { text: couponPct(key) + "%" }), el("small", { text: s.id === "boss" ? "Thử thách" : `Mức ${l}` })]);
      if (view) c.addEventListener("click", () => { closeModal(); openCoupon(key); });
      chips.append(c);
    }
    row.append(chips); clist.append(row);
  }
  const panes = {
    ticket: [el("p", { style: "margin:4px 0 0", text: `Bạn có ${ticketCount()}/${tstages.length} phiếu. Qua đủ 4 mức ở một địa danh để nhận phiếu đặc sản của nơi đó; vượt Thử thách Đất Mũi để nhận phiếu vàng.` + (S.teacher ? " Chế độ giáo viên: bấm vào phiếu bất kì để xem trước." : "") }), grid],
    coupon: [el("p", { style: "margin:4px 0 0", text: `Mỗi mức vượt qua lần đầu tặng 1 phiếu miễn bài tập về nhà: Nhận biết 2%, Thông hiểu 5%, Vận dụng 10%, Vận dụng cao 20%, Thử thách Đất Mũi ${BOSS_PCT}%. Bạn có ${all.length}/33 phiếu (tổng ${all.reduce((t, k) => t + couponPct(k), 0)}%), đã dùng ${used}, còn lại ${all.filter(k => !S.coupons[k].used).reduce((t, k) => t + couponPct(k), 0)}%.` + (S.teacher ? " Chế độ giáo viên: bấm phiếu để xem hoặc đánh dấu đã dùng." : "") }), clist],
  };
  const body = el("div");
  const tabs = el("div", { class: "book-tabs wtabs", role: "tablist" });
  const draw = () => { body.innerHTML = ""; body.append(...panes[tab]); tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.t === tab))); };
  [["ticket", `Phiếu điểm 10 · ${ticketCount()}`], ["coupon", `Phiếu miễn BTVN · ${all.length}`]].forEach(([t, txt]) => tabs.append(el("button", { "data-t": t, role: "tab", text: txt, onclick: () => { tab = t; draw(); play("tap"); } })));
  draw();
  openModal(el("div", { class: "modal wide", role: "dialog", "aria-modal": "true", "aria-labelledby": "wTitle" }, [
    closeX(), el("h2", { id: "wTitle", text: "Túi phiếu" }), tabs, body]));
}
/* ================= PHIẾU MIỄN BTVN ================= */
// Mức 1 Nhận biết 2% · Mức 2 Thông hiểu 5% · Mức 3 Vận dụng 10% · Mức 4 Vận dụng cao 20% · Thử thách Đất Mũi 20%
const COUPON_PCT = { 1: 2, 2: 5, 3: 10, 4: 20 }, BOSS_PCT = 20;
const couponPct = key => { const [id, l] = key.split("."); return id === "boss" ? BOSS_PCT : COUPON_PCT[+l]; };
function couponEl(key, reveal) {
  const [id, lvS] = key.split("."), lv = +lvS, s = STAGES[stageIdx(id)], boss = id === "boss";
  const rec = S.coupons[key], date = rec ? rec.d : (S.teacher ? new Date().toISOString().slice(0, 10) : ""), d = date.split("-").reverse().join("/");
  const lvName = boss ? "Thử thách tổng hợp" : `Mức ${lv} · ${LEVELS[lv - 1].name}`;
  return el("div", { class: "coupon" + (reveal ? " reveal" : "") + (rec && rec.used ? " used" : ""), style: `--lvg:${boss ? "var(--red)" : LEVELS[lv - 1].color}` }, [
    el("div", { class: "cp-main" }, [
      el("div", { class: "cp-eyebrow", text: "Phiếu miễn bài tập về nhà" }),
      el("div", { class: "cp-big" }, [el("b", { text: couponPct(key) + "%" }), el("span", { html: `Miễn <strong>${couponPct(key)}%</strong> bài tập<br>về nhà` })]),
      el("div", { class: "cp-for", text: `${boss ? s.place : `Bài ${s.no} · ${s.place}`}` }),
      el("div", { class: "cp-lvl", text: lvName }),
      el("div", { class: "cp-name", text: S.name || "Nhà thám hiểm" }),
      el("div", { class: "cp-rule", text: "Dùng một lần · Xuất trình cho thầy cô khi nộp bài" })]),
    el("div", { class: "cp-stub" }, [
      el("small", { text: boss ? "THỬ THÁCH" : "MỨC" }),
      el("div", { class: "cp-lv", text: boss ? "★" : String(lv) }),
      el("div", { class: "cp-code", text: `MB${s.no}${lv}-${hash((S.name || "") + key + date).slice(0, 5)}` }),
      el("small", { class: "cp-date", text: d }),
      el("div", { class: "cp-sign" }, [icon("parrot-head"), el("span", { text: "Vẹt Vectơ" })])]),
    rec && rec.used ? el("div", { class: "cp-stamp", text: "ĐÃ DÙNG" }) : null]);
}
function openCoupon(key, reveal) {
  const rec = S.coupons[key];
  const btns = el("div", { class: "btnrow" });
  if (S.teacher && rec) btns.append(el("button", { class: "btn " + (rec.used ? "ghost" : "green"), text: rec.used ? "Bỏ đánh dấu đã dùng" : "Đánh dấu đã dùng", onclick: () => {
    if (rec.used) delete rec.used; else rec.used = new Date().toISOString().slice(0, 10);
    save(); toast(rec.used ? "Đã đánh dấu phiếu đã dùng." : "Đã bỏ đánh dấu."); openCoupon(key); if (!$("#scrMap").hidden) renderPanel(); } }));
  btns.append(el("button", { class: "btn ghost", text: "Mở túi phiếu", onclick: () => { closeModal(); openWallet("coupon"); } }),
    el("button", { class: "btn red", text: "Đóng", onclick: () => closeModal() }));
  const cap = !rec ? "Bản xem trước dành cho giáo viên. Học sinh nhận phiếu này khi vượt qua mức lần đầu."
    : rec.used ? `Phiếu đã được dùng ngày ${rec.used.split("-").reverse().join("/")}.`
    : "Chụp màn hình hoặc mở phiếu này cho thầy cô xem khi muốn dùng. Thầy cô sẽ đánh dấu phiếu đã dùng.";
  openModal(el("div", { class: "modal cpmodal", role: "dialog", "aria-modal": "true", "aria-label": `Phiếu miễn ${couponPct(key)}% bài tập về nhà` }, [
    couponEl(key, reveal), el("p", { class: "cp-cap", text: cap }), btns]));
  if (reveal) { play("ticket"); confetti(120); }
}


/* ================= ĐÁP ÁN (CHẾ ĐỘ GIÁO VIÊN) ================= */
function keyOrder(q) { // thứ tự phương án cố định cho mỗi câu, để đáp án không luôn là A
  let h = 2166136261; for (const ch of q.key || q.q) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); }
  const a = [0, 1, 2, 3]; for (let i = 3; i > 0; i--) { h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; const j = h % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function keyCard(q, k, lv) {
  const c = el("article", { class: "kcard" }, [
    el("div", { class: "qmeta" }, [el("span", { class: "pill", text: `Câu ${k + 1}` }), el("span", { class: "pill", text: TYPE[q.t] }),
      el("span", { class: "pill lv", style: `background:${LEVELS[lv - 1].color}`, text: `Mức ${lv}` })]),
    el("p", { class: "kq" }, T(q.q)), figEl(q.key)]);
  if (q.t === "mc") {
    const ord = keyOrder(q), box = el("div", { class: "kopts" });
    ord.forEach((src, j) => box.append(el("div", { class: "kopt" + (src === 0 ? " right" : "") }, [el("span", { class: "k", text: "ABCD"[j] }), el("span", { class: "v" }, T(q.o[src])), src === 0 ? icon("i-check") : null])));
    c.append(box, el("p", { class: "kans", text: `Đáp án: ${"ABCD"[ord.indexOf(0)]}` }));
  } else if (q.t === "tf") {
    const box = el("div", { class: "ktf" });
    q.s.forEach(([txt, v], j) => box.append(el("div", { class: "ktfrow" }, [el("div", { class: "s" }, [el("b", { text: "abcd"[j] + ") " }), T(txt)]), el("span", { class: "kbadge " + (v ? "yes" : "no"), text: v ? "Đúng" : "Sai" })])));
    c.append(box);
  } else {
    c.append(el("p", { class: "kans", text: `Đáp số: ${String(q.a).replace(".", ",")}` + (q.tol > 1e-6 ? ` (chấp nhận sai số ±${String(q.tol).replace(".", ",")})` : "") }));
  }
  c.append(el("p", { class: "ksol" }, [el("b", { text: "Lời giải: " }), T(q.e)]), figEl(q.key, "sol") || "");
  return c;
}
function openKey(lesson, level) {
  if (!S.teacher) return;
  let cur = lesson, lv = level || 0;
  const tabs = el("div", { class: "book-tabs", role: "tablist" }), lvs = el("div", { class: "book-tabs" });
  const info = el("p", { class: "key-info" }), body = el("div", { class: "book-body" });
  function render() {
    tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === cur)));
    lvs.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.lv === lv)));
    const st = STAGES[stageIdx(cur)]; body.innerHTML = "";
    const groups = (lv ? [lv] : [1, 2, 3, 4]).map(l => [l, BANK[cur][l]]);
    info.textContent = `${st.topic} · ${groups.reduce((t, [, a]) => t + a.length, 0)} câu`;
    for (const [l, qs] of groups) {
      if (!lv) body.append(el("h3", { class: "sec", text: `Mức ${l} · ${LEVELS[l - 1].name}` }));
      qs.forEach((q, k) => body.append(keyCard(q, k, l)));
    }
    body.scrollTop = 0;
  }
  STAGES.slice(0, N_STOPS).forEach(st => tabs.append(el("button", { "data-id": st.id, role: "tab", text: `Bài ${st.no} · ${st.short}`, onclick: () => { cur = st.id; render(); play("tap"); } })));
  [[0, "Tất cả mức"], [1, "Mức 1"], [2, "Mức 2"], [3, "Mức 3"], [4, "Mức 4"]].forEach(([n, t]) => lvs.append(el("button", { "data-lv": n, text: t, onclick: () => { lv = n; render(); play("tap"); } })));
  const m = el("div", { class: "modal book key", role: "dialog", "aria-modal": "true", "aria-labelledby": "keyTitle" }, [
    el("div", { class: "book-head" }, [closeX(), el("h2", { id: "keyTitle" }, [icon("i-check"), document.createTextNode("Đáp án · Giáo viên")]), tabs, lvs, info]), body]);
  render(); openModal(m);
  const t = tabs.querySelector('[aria-pressed="true"]'); if (t) t.scrollIntoView({ block: "nearest", inline: "center" });
}

/* ================= SỔ TAY CÔNG THỨC & GỢI Ý ================= */
function fcard(it, hl) {
  const c = el("article", { class: "fcard" + (hl ? " hl" : ""), id: "f-" + it.id }, [
    el("h4", {}, [document.createTextNode(it.t), it.tag ? el("span", { class: "tg", text: it.tag }) : null])]);
  for (const line of it.f) c.append(el("p", {}, T(line)));
  if (it.table) {
    const tb = el("table");
    tb.append(el("tr", {}, it.table.head.map(h => el("th", {}, T(h)))));
    for (const r of it.table.rows) tb.append(el("tr", {}, r.map(x => el("td", {}, T(x)))));
    c.append(el("div", { class: "tbl" }, tb));
  }
  return c;
}
function openBook(secId, focus) {
  let cur = BOOK.find(s => s.id === secId) ? secId : "nen";
  const search = el("input", { class: "book-search", id: "bookSearch", type: "search", placeholder: "Tìm công thức: côsin, trung tuyến, phủ định, hình bình hành…", "aria-label": "Tìm trong sổ tay" });
  const tabs = el("div", { class: "book-tabs", role: "tablist" });
  const body = el("div", { class: "book-body" });
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  function render() {
    body.innerHTML = "";
    const q = norm(search.value.trim());
    tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(!q && b.dataset.id === cur)));
    if (q) {
      let n = 0;
      for (const sec of BOOK) {
        const hits = sec.items.filter(it => norm(it.t + " " + it.f.join(" ")).includes(q));
        if (!hits.length) continue;
        body.append(el("h3", { class: "sec", text: sec.title }));
        hits.forEach(it => { body.append(fcard(it)); n++; });
      }
      if (!n) body.append(el("p", { class: "book-empty", text: "Chưa tìm thấy công thức phù hợp. Thử từ khóa ngắn hơn, ví dụ \"sin\" hoặc \"tập con\"." }));
    } else {
      const sec = BOOK.find(s => s.id === cur);
      body.append(el("h3", { class: "sec", text: sec.title }));
      sec.items.forEach(it => body.append(fcard(it, focus && focus.includes(it.id))));
    }
    body.scrollTop = 0;
  }
  BOOK.forEach(sec => tabs.append(el("button", { "data-id": sec.id, role: "tab", text: sec.short, onclick: () => { cur = sec.id; search.value = ""; focus = null; render(); play("tap"); } })));
  search.addEventListener("input", render);
  const m = el("div", { class: "modal book", role: "dialog", "aria-modal": "true", "aria-labelledby": "bkTitle" }, [
    el("div", { class: "book-head" }, [closeX(), el("h2", { id: "bkTitle" }, [icon("i-book"), document.createTextNode("Sổ tay công thức")]), search, tabs]), body]);
  render();
  openModal(m);
  if (focus && focus.length) { const f = body.querySelector("#f-" + focus[0]); if (f) setTimeout(() => f.scrollIntoView({ block: "center" }), 60); }
}
function showHint(q) {
  if (RUN.answered || RUN.hinted[RUN.i]) return;
  if (!payHelp()) return;
  RUN.hinted[RUN.i] = true; play("tap");
  const ids = hintFor(q);
  const box = el("div", { class: "hintbox", role: "note" }, [
    el("div", { class: "hh" }, [icon("i-bulb"), document.createTextNode("Gợi ý từ Sổ tay công thức")]),
    ...ids.map(id => fcard(BOOK_ITEM[id])),
    el("p", { class: "note", text: RUN.paid[RUN.i] === "charm" ? "Đã dùng 1 Bùa gợi ý cho câu này." : `Đã trả ${HINT_COST} hạt cho trợ giúp ở câu này. Sổ tay cũng mở miễn phí cho tới khi trả lời xong.` })]);
  const slot = $("#hintSlot"); slot.innerHTML = ""; slot.append(box);
  const b = $("#hintBtn"); if (b) b.disabled = true;
  say(pick(["Mở sổ tay ra nào! Công thức cần dùng ở ngay đây.", "Gợi ý đây! Nhìn kĩ công thức rồi thay số nhé.", "Bí kíp của Vẹt đây, áp dụng thôi!"]));
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
/* Mỗi trợ giúp đều mất hạt: gợi ý công thức, mở sổ tay khi đang làm câu hỏi (−HINT_COST, chung một lần trả mỗi câu), 50/50 (−FIFTY_COST).
   Bùa gợi ý (từ Hộp quẻ) dùng thay cho hạt. */
function helpPrice() { return RUN && RUN.paid && RUN.paid[RUN.i] ? "(đã trả)" : S.charms > 0 ? "(dùng 1 bùa)" : `(−${HINT_COST} hạt)`; }
function payHelp() {
  if (RUN.paid[RUN.i]) return true;
  let how;
  if (S.charms > 0) { S.charms--; how = "charm"; }
  else if (S.seeds >= HINT_COST) { S.seeds -= HINT_COST; how = "seeds"; }
  else { toast(`Cần ${HINT_COST} hạt để dùng trợ giúp. Bạn đang có ${S.seeds} hạt.`); return false; }
  RUN.paid[RUN.i] = how; save(); hud();
  const hb = $("#hintBtn"); if (hb && !RUN.hinted[RUN.i]) hb.lastChild.textContent = "Gợi ý công thức (đã trả)";
  return true;
}
const inQuestion = () => RUN && !$("#scrQuiz").hidden && !RUN.answered;
function bookFromHud() {
  if (!RUN) return openBook(S.sel === "boss" ? "nen" : S.sel);
  const q = RUN.qs[RUN.i], sec = q.lesson || "nen";
  if (!inQuestion() || RUN.paid[RUN.i]) return openBook(sec);
  openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "pbTitle" }, [
    closeX(), el("h2", { id: "pbTitle", text: "Mở sổ tay lúc đang làm bài?" }),
    el("p", { text: S.charms > 0 ? "Mở sổ tay khi chưa trả lời là một lần trợ giúp. Bạn sẽ dùng 1 Bùa gợi ý, và nút Gợi ý công thức của câu này cũng được miễn phí." : `Mở sổ tay khi chưa trả lời là một lần trợ giúp: −${HINT_COST} hạt (bạn đang có ${S.seeds} hạt). Nút Gợi ý công thức của câu này cũng được miễn phí. Trả lời xong thì xem sổ tay không mất hạt.` }),
    el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Thôi", onclick: () => closeModal() }),
      el("button", { class: "btn red", text: S.charms > 0 ? "Dùng 1 bùa" : `Mở (−${HINT_COST} hạt)`, onclick: () => { closeModal(true); if (payHelp()) openBook(sec); } })])]));
}
function relLinks(q) {
  const ids = hintFor(q); if (!ids.length) return null;
  return el("div", { class: "rel" }, [document.createTextNode("Ôn lại trong sổ tay:"),
    ...ids.map(id => el("button", { text: BOOK_ITEM[id].t, onclick: () => openBook(BOOK_ITEM[id].sec, [id]) }))]);
}
/* ================= HỘP QUẺ HỌC TẬP ================= */
const OMI = { cur: null, busy: false, peek: null };
function omiPool() { const ids = STAGES.slice(0, N_STOPS).filter((s, i) => stageUnlocked(i)).map(s => s.id); return ids.length ? ids : ["b1"]; }
function omiFormula(pool) { const sec = BOOK.find(b => b.id === pick(pool)) || BOOK[0]; return pick(sec.items).id; }
function omiDraw() {
  const r = Math.random(), pool = omiPool();
  const tier = r < .08 ? "dai" : r < .30 ? "cat" : r < .65 ? "binh" : "hung";
  const d = { tier, no: 1 + Math.floor(Math.random() * 100), say: pick(OMI_TIER[tier].say) };
  if (tier === "dai") { d.f = omiFormula(pool); S.charms = (S.charms || 0) + 1; }
  if (tier === "binh") { d.f = omiFormula(pool); d.tip = pick(OMI_TIPS); }
  if (tier === "cat") {
    const l = pick(pool), lv = pick([1, 2]);
    const cand = BANK[l][lv].filter(q => q.t === "mc");
    d.q = prepare(pick(cand.length ? cand : BANK[l][1].filter(q => q.t === "mc")), { lv });
    d.f = hintFor(d.q)[0] || omiFormula([l]);
  }
  if (tier === "hung") { const list = OMI_MISTAKES.filter(m => pool.includes(m.l)); d.m = pick(list.length ? list : OMI_MISTAKES); }
  return d;
}
function omiSeal(text) { return el("div", { class: "omi-seal", "aria-hidden": "true" }, text.split("\n").map(t => el("span", { text: t }))); }
function omiKeepBtn(fid) {
  const kept = S.omi.keep.includes(fid);
  const b = el("button", { class: "btn small omi-keep", disabled: kept, text: kept ? "Đã có trong túi quẻ" : "Giữ quẻ vào túi", onclick: () => {
    if (!S.omi.keep.includes(fid)) { S.omi.keep.unshift(fid); S.omi.keep = S.omi.keep.slice(0, 40); save(); }
    b.disabled = true; b.textContent = "Đã giữ trong túi quẻ"; play("good"); omiBag(fid); } });
  return b;
}
function omiPaper(state) {
  const pap = $("#omiPaper"); if (!pap) return;
  const d = OMI.cur; pap.innerHTML = ""; pap.classList.remove("fly");
  const head = (seal, small, title, say) => el("div", { class: "omi-top" }, [seal, el("div", { class: "omi-h" }, [small ? el("small", { text: small }) : null, el("h3", { text: title }), say ? el("p", { class: "omi-say", text: say }) : null])]);
  if (state === "poor") { pap.className = "omi-paper t-poor"; pap.append(head(omiSeal("!"), null, "Chưa đủ hạt", `Mỗi lần lắc cần ${OMI_COST} hạt, bạn đang có ${S.seeds} hạt. Làm bài ở các địa danh để kiếm thêm hạt nhé.`)); return; }
  if (state === "gone") { pap.className = "omi-paper t-gone"; pap.append(head(omiSeal("~"), null, "Gió đã mang quẻ xấu đi", "Nhớ lấy cách hiểu đúng nhé. Lắc tiếp nào!")); return; }
  if (!d) { pap.className = "omi-paper"; pap.append(head(omiSeal("?"), null, "Chưa rút quẻ", `Chạm vào hộp để lắc. Mỗi lần lắc tốn ${OMI_COST} hạt.`)); return; }
  const T0 = OMI_TIER[d.tier];
  pap.className = "omi-paper t-" + T0.cls;
  pap.append(head(omiSeal(T0.mark), `Quẻ số ${d.no}`, T0.name, `“${d.say}”`));
  const body = el("div", { class: "omi-body" }); pap.append(body);
  if (d.tier === "dai") {
    body.append(el("p", { class: "omi-gift" }, [icon("i-bulb"), el("span", { html: `<b>+1 Bùa gợi ý.</b> Dùng thay cho ${HINT_COST} hạt khi cần gợi ý công thức hoặc mở sổ tay lúc đang làm bài.` })]),
      el("p", { class: "omi-k", text: "Công thức may mắn" }), fcard(BOOK_ITEM[d.f]), el("div", { class: "omi-act" }, omiKeepBtn(d.f)));
  } else if (d.tier === "binh") {
    body.append(el("p", { class: "omi-k", text: "Bí kíp ôn tập" }), el("p", { class: "omi-tip", text: d.tip }),
      el("p", { class: "omi-k", text: "Công thức của quẻ" }), fcard(BOOK_ITEM[d.f]), el("div", { class: "omi-act" }, omiKeepBtn(d.f)));
  } else if (d.tier === "cat") {
    const q = d.q, st = STAGES[stageIdx(q.lesson)] || STAGES[0];
    body.append(el("p", { class: "omi-k", text: `Thử thách nhanh · Bài ${st.no} · trả lời đúng +${OMI_WIN} hạt` }), el("p", { class: "omi-q" }, T(q.q)), figEl(q.key) || "");
    const box = el("div", { class: "omi-opts" });
    q.opts.forEach((o, k) => box.append(el("button", { class: "opt", "data-k": k, disabled: d.done, onclick: () => {
      if (d.done) return; d.done = true; d.ok = k === q.ans; d.pickK = k;
      if (d.ok) { S.seeds += OMI_WIN; play("good"); } else play("bad");
      save(); hud(); omiStats(); omiPaper();
    } }, [el("span", { class: "k", text: "ABCD"[k] }), el("span", { class: "v" }, T(o))])));
    body.append(box);
    if (d.done) {
      box.querySelectorAll(".opt").forEach(b => { const j = +b.dataset.k; if (j === q.ans) b.classList.add("right"); else if (j === d.pickK) b.classList.add("wrong"); });
      body.append(el("p", { class: "omi-res " + (d.ok ? "ok" : "no"), text: d.ok ? `Chính xác! +${OMI_WIN} hạt.` : `Chưa đúng. Đáp án đúng: ${"ABCD"[q.ans]}.` }),
        el("p", { class: "omi-sol" }, [el("b", { text: "Lời giải: " }), T(q.e)]),
        el("p", { class: "omi-k", text: "Công thức của quẻ" }), fcard(BOOK_ITEM[d.f]), el("div", { class: "omi-act" }, omiKeepBtn(d.f)));
    }
  } else {
    const m = d.m, st = STAGES[stageIdx(m.l)];
    body.append(el("p", { class: "omi-k", text: `Lỗi sai hay gặp · Bài ${st.no}` }), el("p", { class: "omi-err" }, T(m.m)),
      el("p", { class: "omi-k", text: "Hóa giải: mệnh đề sau đúng hay sai?" }), el("p", { class: "omi-q" }, T(m.tf[0])));
    const seg = el("div", { class: "omi-tf" });
    for (const [lab, val] of [["Đúng", true], ["Sai", false]]) seg.append(el("button", { class: "btn small ghost" + (d.done && d.pickV === val ? (val === m.tf[1] ? " right" : " wrong") : ""), disabled: d.done, text: lab, onclick: () => {
      if (d.done) return; d.done = true; d.pickV = val; d.ok = val === m.tf[1];
      if (d.ok) { S.seeds += OMI_FIX; S.omi.fixed = (S.omi.fixed || 0) + 1; play("good"); } else play("bad");
      save(); hud(); omiStats(); omiPaper();
    } }));
    body.append(seg);
    if (d.done) {
      body.append(el("p", { class: "omi-res " + (d.ok ? "ok" : "no"), text: d.ok ? `Hóa giải thành công! Mệnh đề trên ${m.tf[1] ? "đúng" : "sai"}. +${OMI_FIX} hạt.` : `Chưa hóa giải được: mệnh đề trên ${m.tf[1] ? "đúng" : "sai"}.` }),
        el("p", { class: "omi-fix" }, [el("b", { text: "Hiểu đúng: " }), T(m.fix)]),
        el("div", { class: "omi-act" }, el("button", { class: "btn small red", id: "omiTie", text: "Buộc lên cành cây", onclick: omiTie })));
    } else body.append(el("p", { class: "omi-note", text: "Trả lời xong thì buộc quẻ lên cành cây để gió mang đi." }));
  }
}
function omiTie() {
  const d = OMI.cur; if (!d || d.tier !== "hung" || d.tied) return;
  d.tied = true; S.omi.tied = (S.omi.tied || 0) + 1; save(); play("wind");
  const pap = $("#omiPaper"); pap.classList.add("fly");
  setTimeout(() => { OMI.cur = null; omiTree(true); omiPaper("gone"); omiStats(); }, 560);
}
const OMI_BR = [[[42, 40], [120, 22], [230, 30], [344, 18], 7], [[40, 82], [120, 66], [220, 78], [334, 64], 7], [[36, 120], [110, 108], [200, 118], [304, 106], 6]];
function omiTree(fresh) {
  const host = $("#omiTree"); if (!host) return;
  const n = S.omi.tied || 0;
  const bz = (P, t) => [0, 1].map(k => (1 - t) ** 3 * P[0][k] + 3 * (1 - t) ** 2 * t * P[1][k] + 3 * (1 - t) * t * t * P[2][k] + t ** 3 * P[3][k]);
  let svg = `<svg viewBox="0 0 360 160" role="img" aria-label="Cành cây đã buộc ${n} quẻ xấu"><path d="M30 160 C 40 120, 30 80, 46 20" stroke="#5B3A25" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  for (const P of OMI_BR) svg += `<path d="M${P[0]} C ${P[1]}, ${P[2]}, ${P[3]}" stroke="#6B4630" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  const slots = []; OMI_BR.forEach(P => { for (let k = 0; k < P[4]; k++) slots.push(bz(P, .2 + k * (.76 / (P[4] - 1)))); });
  OMI_BR.forEach((P, b) => [.12, .5, .9].forEach((t, k) => { const [x, y] = bz(P, t); svg += `<g transform="translate(${x.toFixed(1)} ${(y - 6).toFixed(1)})"><circle r="5" fill="#FF9EC8"/><circle r="1.8" fill="#FFE7A3"/></g><ellipse cx="${(x + 9).toFixed(1)}" cy="${(y - 3).toFixed(1)}" rx="6" ry="2.6" fill="#38C98A" transform="rotate(-25 ${(x + 9).toFixed(1)} ${(y - 3).toFixed(1)})"/>`; }));
  slots.slice(0, n).forEach(([x, y], k) => {
    const isNew = fresh && k === Math.min(n, slots.length) - 1;
    svg += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><g class="knot${isNew ? " new" : ""}" style="animation-delay:${(k * .37 % 2).toFixed(2)}s"><path d="M0 0 V7" stroke="#E9D7B0" stroke-width="1.4"/><rect x="-5" y="7" width="10" height="20" rx="1.5" fill="#FFF8E8" stroke="#D8C49C"/><rect x="-6.5" y="13" width="13" height="4.5" rx="1" fill="#E5463F"/></g></g>`;
  });
  if (n > slots.length) svg += `<text x="350" y="150" text-anchor="end" font-family="Exo 2, sans-serif" font-weight="800" font-size="16" fill="#FFD66B">+${n - slots.length}</text>`;
  host.innerHTML = svg + "</svg>";
}
function omiBag(show) {
  const host = $("#omiBag"); if (!host) return;
  host.innerHTML = "";
  const keep = S.omi.keep.filter(id => BOOK_ITEM[id]);
  if (!keep.length) { host.append(el("p", { class: "omi-empty", text: "Chưa giữ quẻ nào. Quẻ tốt có công thức, bấm Giữ quẻ vào túi để ôn lại sau." })); return; }
  const list = el("div", { class: "omi-chips" });
  keep.forEach(id => list.append(el("button", { class: "omi-chip" + (OMI.peek === id ? " on" : ""), text: BOOK_ITEM[id].t, "aria-pressed": String(OMI.peek === id), onclick: () => { OMI.peek = OMI.peek === id ? null : id; omiBag(); play("tap"); } })));
  host.append(list);
  if (OMI.peek && BOOK_ITEM[OMI.peek]) host.append(fcard(BOOK_ITEM[OMI.peek]));
}
function omiStats() {
  const h = $("#omiStats"); if (!h) return;
  h.innerHTML = "";
  h.append(el("span", { class: "chip" }, [icon("i-seed"), document.createTextNode(`${S.seeds} hạt`)]),
    el("span", { class: "chip" }, [icon("i-bulb"), document.createTextNode(`${S.charms || 0} bùa gợi ý`)]),
    el("span", { class: "chip plain", text: `Đã lắc ${S.omi.n || 0} lần` }));
  const b = $("#omiShakeBtn"); if (b) b.classList.toggle("poor", S.seeds < OMI_COST);
  const t = $("#omiTreeNote"); if (t) t.textContent = `Đã buộc ${S.omi.tied || 0} quẻ xấu · hóa giải đúng ${S.omi.fixed || 0} lần`;
}
function omiShake() {
  if (OMI.busy) return;
  const d = OMI.cur, box = $("#omiBox");
  if (d && d.tier === "hung" && !d.tied) {
    toast(d.done ? "Buộc quẻ xấu lên cành cây trước đã." : "Hóa giải và buộc quẻ xấu lên cành cây trước đã.");
    const t = $("#omiTie") || $("#omiPaper"); t.classList.remove("nudge"); void t.offsetWidth; t.classList.add("nudge"); return;
  }
  if (S.seeds < OMI_COST) { OMI.cur = null; omiPaper("poor"); play("bad"); return; }
  S.seeds -= OMI_COST; S.omi.n = (S.omi.n || 0) + 1; save(); hud(); omiStats();
  OMI.busy = true; box.classList.remove("drawn"); void box.offsetWidth; box.classList.add("shaking"); play("rattle");
  const pap = $("#omiPaper"); pap.classList.add("dim");
  setTimeout(() => {
    box.classList.remove("shaking"); OMI.cur = omiDraw(); save();
    $("#omiNo").textContent = OMI.cur.no; box.classList.add("drawn");
    play(OMI.cur.tier === "hung" ? "wind" : "chime"); omiStats();
    setTimeout(() => { pap.classList.remove("dim"); omiPaper(); OMI.busy = false; if (OMI.cur.tier === "dai") confetti(90); pap.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, 480);
  }, 1150);
}
function openOmikuji() {
  play("tap");
  const box = el("button", { class: "omi-box", id: "omiBox", "aria-label": `Lắc hộp quẻ (−${OMI_COST} hạt)`, onclick: omiShake }, [
    el("span", { class: "omi-pick", "aria-hidden": "true" }, [el("small", { text: "SỐ" }), el("b", { id: "omiNo", text: "" })]), icon("omi-box")]);
  const m = el("div", { class: "modal wide omi", role: "dialog", "aria-modal": "true", "aria-labelledby": "omiTitle" }, [
    closeX(),
    el("h2", { id: "omiTitle", text: "Hộp quẻ học tập" }),
    el("p", { class: "omi-intro", text: "Lắc hộp quẻ như khi xin xăm đầu năm. Quẻ tốt mang theo bí kíp, công thức hoặc thử thách nhanh: giữ lại để ôn. Quẻ xấu là một lỗi sai hay gặp: hóa giải rồi buộc lên cành cây để gió mang đi." }),
    el("div", { class: "omi-stats", id: "omiStats" }),
    el("div", { class: "omi-stage" }, [
      el("div", { class: "omi-left" }, [box,
        el("button", { class: "btn red omi-shake", id: "omiShakeBtn", onclick: omiShake }, [icon("i-seed"), document.createTextNode(`Lắc quẻ · −${OMI_COST} hạt`)])]),
      el("div", { class: "omi-paper", id: "omiPaper", "aria-live": "polite" })]),
    el("div", { class: "omi-bottom" }, [
      el("section", { class: "omi-card" }, [el("h3", { text: "Cành cây gió" }), el("div", { id: "omiTree", class: "omi-tree" }),
        el("p", { class: "omi-note", id: "omiTreeNote", text: `Đã buộc ${S.omi.tied || 0} quẻ xấu · hóa giải đúng ${S.omi.fixed || 0} lần` })]),
      el("section", { class: "omi-card" }, [el("h3", { text: "Túi quẻ đã giữ" }), el("div", { id: "omiBag" })])]),
    el("p", { class: "omi-odds", text: `Tỉ lệ quẻ: Đại cát 8% · Cát 22% · Tiểu cát 35% · Hung 35%. Thử thách nhanh đúng +${OMI_WIN} hạt, hóa giải đúng +${OMI_FIX} hạt.` })]);
  openModal(m);
  m.querySelector(".btn.red svg").style.cssText = "width:20px;height:20px";
  if (OMI.cur) { $("#omiNo").textContent = OMI.cur.no; box.classList.add("drawn"); }
  omiStats(); omiPaper(); omiTree(); omiBag();
}
/* ================= BẢN ĐỒ ẨN · HANG SƠN ĐOÒNG ================= */
const caveReady = () => STAGES.slice(0, N_STOPS).filter(s => passed(s.id, 4)).length >= CAVE_NEED;
const caveOpen = () => S.teacher || S.cave.found || caveReady();
const stageById = id => id === "cave" ? CAVE : STAGES[stageIdx(id)];
const essayList = () => Object.values(ESSAYS).flat();
/* Tự luận không chấm điểm: học sinh làm ra giấy, dùng hạt để mở lời giải từng ý, tự đánh dấu "đã làm xong". */
const essayDone = e => !!S.cave.done[e.key];
const essaySeen = (key, i) => !!(S.cave.seen[key] && S.cave.seen[key][i]);
const CAVE_ROUTE = "M70 74 C 140 60, 170 130, 214 118 S 330 140, 326 196 S 240 250, 196 262 S 60 290, 74 334 S 150 420, 196 408 S 312 420, 312 470 S 240 540, 196 532";
function mapCaveNode(nodes) {
  if (caveOpen()) {
    const done = !!S.tickets.cave;
    const g = sv("g", { class: "node secret", tabindex: "0", role: "button", "aria-label": "Bản đồ ẩn: Hang Sơn Đoòng" + (done ? ", đã nhận phiếu" : "") });
    g.append(sv("circle", { cx: CAVE.x, cy: CAVE.y, r: 40, fill: "url(#haloSecret)", class: "pulse-soft" }));
    g.append(sv("circle", { class: "ring", cx: CAVE.x, cy: CAVE.y, r: 22, fill: done ? "url(#orbDone)" : "url(#orbSecret)", stroke: "#F3E8FF", "stroke-width": 2.5 }));
    g.append(sv("use", { href: "#lm-cave", x: CAVE.x - 16, y: CAVE.y - 16, width: 32, height: 32 }));
    const tag = sv("g", { class: "tag" }), tx = CAVE.x - 30;
    const text = sv("text", { x: tx, y: CAVE.y + 7, "font-size": 18, "text-anchor": "end" }); text.textContent = "✦ Sơn Đoòng";
    const rect = sv("rect", { y: CAVE.y - 16, rx: 11, height: 32, width: 120, x: tx - 111 });
    tag.append(rect, text); g.append(tag);
    requestAnimationFrame(() => { try { const w = text.getComputedTextLength() + 18; rect.setAttribute("width", w); rect.setAttribute("x", tx - w + 9); } catch (e) {} });
    g.addEventListener("click", () => { play("tap"); goCave(); });
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goCave(); } });
    nodes.append(g);
  } else {
    const n = STAGES.slice(0, N_STOPS).filter(s => passed(s.id, 4)).length;
    const g = sv("g", { class: "secret-spot", tabindex: "0", role: "button", "aria-label": "Bản đồ bí ẩn: bấm để xem cách tìm lối vào" });
    g.append(sv("circle", { cx: CAVE.x, cy: CAVE.y, r: 44, fill: "url(#haloSecret)", class: "pulse-soft" }));
    const bob = sv("g", { class: "smap" });
    bob.append(sv("use", { href: "#i-secretmap", x: CAVE.x - 30, y: CAVE.y - 30, width: 60, height: 60 }));
    bob.append(sv("circle", { cx: CAVE.x + 24, cy: CAVE.y - 24, r: 12, fill: "#9B6BFF", stroke: "#F3E8FF", "stroke-width": 2.5 }));
    const qm = sv("text", { x: CAVE.x + 24, y: CAVE.y - 18, "text-anchor": "middle", class: "smap-q" }); qm.textContent = "?"; bob.append(qm);
    g.append(bob);
    [[-34, -20], [30, 22], [-22, 30], [36, -2]].forEach(([dx, dy], k) => g.append(sv("path", { d: `M${CAVE.x + dx} ${CAVE.y + dy - 6}l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z`, fill: "#FFF3B0", class: "twinkle", style: `animation-delay:${k * .7}s` })));
    const hint = () => { play("tap"); toast(`Một tấm bản đồ bí ẩn chỉ đường vào lòng núi đá vôi… Vượt mức 4 (Vận dụng cao) ở ${CAVE_NEED} địa danh để tìm lối vào (${n}/${CAVE_NEED}).`); };
    g.addEventListener("click", hint); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hint(); } });
    nodes.append(g);
  }
}
function caveDiscovery() {
  if (S.teacher || S.cave.found || !caveReady()) return;
  S.cave.found = true; save(); play("ticket"); confetti(150);
  openModal(el("div", { class: "modal result", role: "dialog", "aria-modal": "true", "aria-labelledby": "cdTitle" }, [
    el("div", { class: "cd-icon" }, icon("lm-cave")),
    el("h2", { id: "cdTitle", text: "Bạn đã tìm ra bản đồ ẩn!" }),
    el("p", { text: "Sâu trong dãy núi đá vôi Quảng Bình, Vẹt phát hiện lối vào Hang Sơn Đoòng, hang động tự nhiên lớn nhất thế giới. Bên trong là 8 khoang với nhiều bài tự luận Vận dụng cao, mỗi khoang một bài học." }),
    el("p", { text: `Làm bài ra giấy, rồi dùng hạt để mở lời giải từng ý (${ESSAY_SOL_COST} hạt/ý) mà đối chiếu. Làm xong cả ${essayList().length} bài để nhận Phiếu điểm 10 bí ẩn.` }),
    el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Để sau", onclick: () => closeModal() }), el("button", { class: "btn red", text: "Vào hang", onclick: () => { closeModal(true); goCave(); } })])]));
}
function goCave() { if (!caveOpen()) return; RUN = null; show("scrCave"); drawCave(); renderCavePanel(); hud(); }
let caveDecoDone = false;
function drawCave() {
  const r = $("#caveRoutes"), nodes = $("#caveNodes"); r.innerHTML = ""; nodes.innerHTML = "";
  r.append(sv("path", { d: CAVE_ROUTE, fill: "none", stroke: "url(#tunnel)", "stroke-width": 30, "stroke-linecap": "round", opacity: ".9" }),
    sv("path", { d: CAVE_ROUTE, fill: "none", stroke: "#7EF2DC", "stroke-width": 2, "stroke-dasharray": "2 10", opacity: ".7" }));
  if (!caveDecoDone) {
    caveDecoDone = true; const d = $("#caveDeco"); let h = 7;
    const rnd = () => (h = (h * 9301 + 49297) % 233280) / 233280;
    for (let k = 0; k < 40; k++) d.append(sv("circle", { cx: (rnd() * 400).toFixed(1), cy: (40 + rnd() * 520).toFixed(1), r: (rnd() * 1.6 + .4).toFixed(2), fill: k % 3 ? "#7EF2DC" : "#E9D8FF", class: "twinkle", style: `animation-delay:${(rnd() * 3).toFixed(2)}s` }));
  }
  Object.entries(CHAMBERS).forEach(([l, c], i) => {
    const es = ESSAYS[l], nPass = es.filter(essayDone).length, done = nPass === es.length, sel = S.cave.sel === l;
    const g = sv("g", { class: "cnode" + (sel ? " sel" : ""), tabindex: "0", role: "button", "aria-label": `Khoang ${i + 1}: ${c.name}, ${nPass}/${es.length} bài` });
    g.append(sv("circle", { cx: c.x, cy: c.y, r: 30, fill: done ? "rgba(255,214,107,.25)" : "rgba(126,242,220,.18)", filter: "url(#cglow)" }));
    g.append(sv("path", { d: `M${c.x} ${c.y - 22}l14 10v24l-14 10-14-10v-24z`, fill: done ? "url(#crystalDone)" : "url(#crystal)", stroke: sel ? "#FFD66B" : "#E9FFFB", "stroke-width": sel ? 3.5 : 2, class: "ring" }));
    const t = sv("text", { x: c.x, y: c.y + 6, "text-anchor": "middle", class: "cnum" }); t.textContent = String(i + 1); g.append(t);
    if (nPass) for (let k = 0; k < es.length; k++) g.append(sv("circle", { cx: c.x - (es.length - 1) * 4.5 + k * 9, cy: c.y + 30, r: 3.2, fill: k < nPass ? "#FFD66B" : "rgba(255,255,255,.25)" }));
    const lab = sv("text", { x: c.x, y: c.y - 30, "text-anchor": "middle", class: "clab" }); lab.textContent = c.name; g.append(lab);
    const choose = () => { S.cave.sel = l; save(); play("tap"); drawCave(); renderCavePanel(); if (innerWidth <= 900) $("#cavePanel").scrollIntoView({ behavior: "smooth", block: "start" }); };
    g.addEventListener("click", choose); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
    nodes.append(g);
  });
}
function renderCavePanel() {
  const p = $("#cavePanel"); p.innerHTML = "";
  const all = essayList(), nDone = all.filter(essayDone).length;
  const l = S.cave.sel in CHAMBERS ? S.cave.sel : "b1", c = CHAMBERS[l], st = STAGES[stageIdx(l)], idx = Object.keys(CHAMBERS).indexOf(l);
  const card = el("section", { class: "stagecard cavepanel" });
  card.append(el("div", { class: "stagehead" }, [el("div", { class: "lmk secret" }, icon("lm-cave")), el("div", { style: "min-width:0" }, [
    el("div", { class: "eyebrow", text: "Bản đồ ẩn · Quảng Bình" }), el("h2", { text: "Hang Sơn Đoòng" }),
    el("p", { text: `Tự luận Vận dụng cao · đã làm ${nDone}/${all.length} bài` })])]));
  const body = el("div", { class: "stagebody" });
  body.append(el("button", { class: "btn small ghost backmap", onclick: () => { play("tap"); goMap(); } }, [document.createTextNode("← Về bản đồ")]));
  const chips = el("div", { class: "sibchips cchips" });
  Object.entries(CHAMBERS).forEach(([k, ch], i) => {
    const done = ESSAYS[k].every(essayDone);
    chips.append(el("button", { class: "sib" + (k === l ? " on" : ""), "aria-pressed": String(k === l), onclick: () => { S.cave.sel = k; save(); play("tap"); drawCave(); renderCavePanel(); } }, [document.createTextNode((done ? "★ " : "") + `Khoang ${i + 1}`)]));
  });
  body.append(el("div", { class: "sibs" }, [el("span", { class: "sibs-l", text: "8 khoang · mỗi khoang một bài học" }), chips]));
  body.append(el("h3", { class: "chamber-h", text: `Khoang ${idx + 1} · ${c.name}` }), el("p", { class: "placenote", text: st.topic }));
  const list = el("div", { class: "essays" });
  ESSAYS[l].forEach((e, k) => {
    const ok = essayDone(e), seen = e.parts.filter((_, i) => essaySeen(e.key, i)).length;
    list.append(el("article", { class: "ecard" + (ok ? " done" : "") }, [
      el("div", { class: "ec-num", text: ok ? "★" : String(k + 1) }),
      el("div", { style: "min-width:0" }, [el("b", { text: `Bài ${k + 1}. ${e.t}` }),
        el("small", { text: `${e.parts.length} ý · ` + (S.teacher ? "giáo viên xem lời giải miễn phí" : `đã mở ${seen}/${e.parts.length} lời giải`) + (ok ? " · đã làm xong" : "") })]),
      el("button", { class: "btn small" + (ok ? " ghost" : ""), text: ok ? "Xem lại" : "Làm bài", onclick: () => openEssay(e.key) })]));
  });
  body.append(list);
  const has = !!S.tickets.cave;
  const bar = el("div", { class: "bar" }, el("i", { style: `width:${nDone / all.length * 100}%` }));
  const rw = el("div", { class: "reward secret" + (has ? " got" : "") }, [el("div", { class: "foodbadge secret" }, icon(CAVE.food.icon)), el("div", { style: "flex:1;min-width:0" }, [
    el("small", { class: "rw-k", text: "Phiếu điểm 10 bí ẩn" }), el("b", { text: CAVE.food.name }),
    el("small", { text: has ? "Đã nhận! Bấm để xem phiếu." : S.teacher ? "Giáo viên: bấm để xem trước phiếu." : `Làm xong cả ${all.length} bài để nhận (${nDone}/${all.length}).` }), bar])]);
  if (has || S.teacher) { rw.style.cursor = "pointer"; rw.tabIndex = 0; rw.setAttribute("role", "button"); rw.addEventListener("click", () => openTicket("cave")); rw.addEventListener("keydown", e => { if (e.key === "Enter") openTicket("cave"); }); }
  body.append(rw);
  card.append(body); p.append(card);
  p.append(el("div", { class: "tipcard" }, [icon("parrot-head"), el("p", {}, [el("b", { text: "Mẹo của Vẹt: " }),
    document.createTextNode(`Làm bài ra giấy, trình bày đủ bước như bài kiểm tra rồi mới mở lời giải để đối chiếu. Mỗi ý mở lời giải mất ${ESSAY_SOL_COST} hạt; ý nào đã mở thì xem lại miễn phí.`)])]));
}
function openEssay(key) {
  const e = ESSAY_BY[key]; if (!e) return;
  const l = e.lesson, k = e.idx, c = CHAMBERS[l], st = STAGES[stageIdx(l)], idx = Object.keys(CHAMBERS).indexOf(l);
  const m = el("div", { class: "modal wide essay", role: "dialog", "aria-modal": "true", "aria-labelledby": "esTitle" });
  const seenSet = () => (S.cave.seen[key] = S.cave.seen[key] || {});
  const open = i => S.teacher || essaySeen(key, i);
  function pay(n) {
    if (S.teacher) return true;
    const cost = n * ESSAY_SOL_COST;
    if (S.seeds < cost) { toast(`Cần ${cost} hạt để mở lời giải. Bạn đang có ${S.seeds} hạt.`); play("bad"); return false; }
    S.seeds -= cost; save(); hud(); return true;
  }
  function draw() {
    const top = m.scrollTop; m.innerHTML = "";
    const closed = e.parts.map((_, i) => i).filter(i => !open(i));
    m.append(closeX(),
      el("div", { class: "eyebrow", text: `Khoang ${idx + 1} · ${c.name} · Bài ${st.no}` }),
      el("h2", { id: "esTitle", text: `Bài ${+k + 1}. ${e.t}` }),
      el("div", { class: "qmeta" }, [el("span", { class: "pill", text: "Tự luận" }), el("span", { class: "pill lv", style: "background:var(--lv4)", text: "Vận dụng cao" }), el("span", { class: "pill", text: `${e.parts.length} ý` }),
        essayDone(e) ? el("span", { class: "pill", text: "✓ Đã làm xong" }) : null]),
      el("p", { class: "estmt" }, T(e.q)));
    const fg = figEl("cave:" + key); if (fg) m.append(fg);
    m.append(el("p", { class: "ep-note", text: "Làm bài ra giấy trước, rồi mở lời giải từng ý để đối chiếu." }));
    const ol = el("ol", { class: "eparts" });
    e.parts.forEach((p, i) => {
      const li = el("li", { class: "epart" }, [el("div", { class: "ep-head" }, [el("span", { class: "ep-lab", text: "abcdef"[i] + ")" }), el("div", { class: "ep-q" }, T(p.q))])]);
      if (open(i)) {
        if (p.a !== undefined) li.append(el("p", { class: "ep-res ok", text: `Đáp số: ${String(Math.round(p.a * 1e4) / 1e4).replace(".", ",")}${p.unit ? " " + p.unit : ""}` }));
        else if (p.ans) li.append(el("p", { class: "ep-res ok" }, [document.createTextNode("Kết quả: "), T(`\\(${p.ans}\\)`)]));
        li.append(el("div", { class: "ep-sol" }, [el("b", { text: "Lời giải: " }), T(p.s)]));
      } else li.append(el("div", { class: "ep-lock" }, el("button", { class: "btn small ghost", onclick: () => { if (!pay(1)) return; seenSet()[i] = 1; save(); play("tap"); draw(); if (!$("#scrCave").hidden) renderCavePanel(); } },
        [icon("i-seed"), document.createTextNode(`Xem lời giải ý ${"abcdef"[i]} (−${ESSAY_SOL_COST} hạt)`)])));
      ol.append(li);
    });
    m.append(ol);
    if (e.parts.some((_, i) => open(i))) { const sf = figEl("cave:" + key, "sol"); if (sf) m.append(sf); }
    if (S.cave.hint && S.cave.hint[key] || S.teacher) m.append(el("div", { class: "hintbox" }, [el("div", { class: "hh" }, [icon("i-bulb"), document.createTextNode("Gợi ý hướng làm")]), el("p", { style: "margin:0;color:var(--text)" }, T(e.hint))]));
    const act = el("div", { class: "btnrow e-act" });
    if (!S.teacher && !(S.cave.hint && S.cave.hint[key])) act.append(el("button", { class: "btn ghost ehint", onclick: () => {
      if (S.charms > 0) S.charms--; else if (S.seeds >= HINT_COST) S.seeds -= HINT_COST; else { toast(`Cần ${HINT_COST} hạt để xem gợi ý. Bạn đang có ${S.seeds} hạt.`); return; }
      S.cave.hint = S.cave.hint || {}; S.cave.hint[key] = 1; save(); hud(); play("tap"); draw(); } }, [icon("i-bulb"), document.createTextNode(S.charms > 0 ? "Gợi ý hướng làm (dùng 1 bùa)" : `Gợi ý hướng làm (−${HINT_COST} hạt)`)]));
    if (closed.length > 1 && !S.teacher) act.append(el("button", { class: "btn ghost", onclick: () => { if (!pay(closed.length)) return; closed.forEach(i => seenSet()[i] = 1); save(); play("tap"); draw(); if (!$("#scrCave").hidden) renderCavePanel(); } },
      [icon("i-seed"), document.createTextNode(`Mở tất cả lời giải (−${closed.length * ESSAY_SOL_COST} hạt)`)]));
    act.append(el("button", { class: "btn " + (essayDone(e) ? "ghost" : "red"), text: essayDone(e) ? "Bỏ đánh dấu đã làm" : "Mình đã làm xong bài này", onclick: () => {
      if (essayDone(e)) delete S.cave.done[key]; else { S.cave.done[key] = new Date().toISOString().slice(0, 10); play("good"); }
      let newTicket = false;
      if (!S.tickets.cave && essayList().every(essayDone)) { S.tickets.cave = new Date().toISOString().slice(0, 10); newTicket = true; }
      save(); if (!$("#scrCave").hidden) { drawCave(); renderCavePanel(); } draw();
      if (newTicket) setTimeout(() => { closeModal(true); openTicket("cave", true); }, 500); } }));
    const nxt = essayList()[essayList().findIndex(x => x.key === key) + 1];
    if (nxt) act.append(el("button", { class: "btn ghost", text: "Bài tiếp theo", onclick: () => { closeModal(true); S.cave.sel = nxt.lesson; save(); drawCave(); renderCavePanel(); openEssay(nxt.key); } }));
    m.append(act);
    m.scrollTop = top;
  }
  draw(); openModal(m);
}
/* ================= MODAL ================= */
let lastFocus = null;
function closeX() { return el("button", { class: "iconbtn x", "aria-label": "Đóng", onclick: closeModal }, icon("i-close")); }
function openModal(m, opt = {}) {
  closeModal(true); lastFocus = document.activeElement;
  const ov = el("div", { class: "overlay" }, m);
  if (opt.dismiss !== false) ov.addEventListener("click", e => { if (e.target === ov) closeModal(); });
  $("#overlayRoot").append(ov); mountParrots(ov); typeset(ov);
  const f = m.querySelector("button, input, textarea, [tabindex]"); if (f) f.focus({ preventScroll: true });
  ov._dismiss = opt.dismiss !== false;
}
function closeModal(silent) { const r = $("#overlayRoot"); if (!r.firstChild) return; clearMath(r); r.innerHTML = ""; if (!silent && lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true }); }
document.addEventListener("keydown", e => { if (e.key === "Escape") { const ov = $("#overlayRoot .overlay"); if (ov && ov._dismiss) closeModal(); } });

/* ================= CÀI ĐẶT ================= */
function encodeSave() { return btoa(unescape(encodeURIComponent(JSON.stringify({ v: 1, ...S })))); }
function openMenu() {
  const nameIn = el("input", { type: "text", id: "renameInput", maxlength: "40", value: S.name, "aria-label": "Tên hiển thị" });
  const code = el("textarea", { id: "backupCode", readonly: true, "aria-label": "Mã sao lưu" }); code.value = encodeSave();
  const restore = el("textarea", { id: "restoreCode", placeholder: "Dán mã sao lưu vào đây", "aria-label": "Dán mã khôi phục" });
  const note = el("p", { class: "note", "aria-live": "polite" });
  const tpw = el("input", { type: "password", id: "teacherPw", inputmode: "numeric", autocomplete: "off", placeholder: "Mật khẩu giáo viên", "aria-label": "Mật khẩu giáo viên", style: "max-width:220px" });
  const tnote = el("p", { class: "note", "aria-live": "polite", style: "margin:6px 0 0" });
  const tbox = el("div");
  function drawTeacher() {
    tbox.innerHTML = ""; tnote.textContent = ""; tnote.className = "note";
    if (S.teacher) {
      tbox.append(el("p", { class: "note ok", text: "Đang bật: xem đáp án mọi câu và xem trước mọi phiếu thưởng mà không cần làm bài." }),
        el("div", { class: "row" }, [
          el("button", { class: "btn small", text: "Xem đáp án", onclick: () => openKey(S.sel && S.sel !== "boss" ? S.sel : "b1", 1) }),
          el("button", { class: "btn small", text: "Xem tất cả phiếu", onclick: () => { closeModal(true); openWallet(); } })]),
        el("div", { class: "row" }, el("button", { class: "btn small ghost", text: "Tắt chế độ giáo viên", onclick: () => { S.teacher = false; S.teacherLock = 0; save(); drawMap(); renderPanel(); toast("Đã tắt chế độ giáo viên."); drawTeacher(); } })));
    } else {
      const go = async () => {
        const ok = await checkTeacher(tpw.value.trim());
        if (ok) { S.teacher = true; S.teacherLock = 1; save(); drawMap(); renderPanel(); toast("Đã bật chế độ giáo viên."); tpw.value = ""; drawTeacher(); }
        else { tnote.className = "note err"; tnote.textContent = "Sai mật khẩu. Chế độ này chỉ dành cho thầy cô."; tpw.select(); }
      };
      tpw.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); go(); } };
      tbox.append(el("p", { text: "Dành cho thầy cô: xem đáp án, lời giải của mọi câu và xem trước mọi phiếu thưởng mà không cần làm bài." }),
        el("div", { class: "row" }, [tpw, el("button", { class: "btn small", text: "Bật", onclick: go })]), tnote);
    }
  }
  drawTeacher();
  const musicVol = el("input", { type: "range", id: "musicVol", min: "0", max: "100", value: String(Math.round((S.musicVol ?? .6) * 100)) });
  musicVol.addEventListener("input", () => { S.musicVol = musicVol.value / 100; Music.setVolume(S.musicVol); save(); if (S.musicVol > 0 && !Music.playing) { S.music = true; Music.start(); hud(); } });
  const confirmBox = el("div", { class: "row", hidden: true }, [
    el("span", { class: "note err", text: "Xóa hết sao, hạt và phiếu?" }),
    el("button", { class: "btn small red", text: "Xóa hết", onclick: () => { const keepName = S.name; S = fresh(); S.name = keepName; save(); closeModal(); goMap(); toast("Đã xóa tiến độ. Bắt đầu lại từ Lũng Cú!"); } }),
    el("button", { class: "btn small ghost", text: "Thôi", onclick: () => confirmBox.hidden = true })]);
  const m = el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "mTitle" }, [
    closeX(), el("h2", { id: "mTitle", text: "Cài đặt" }),
    el("div", { class: "menu-list" }, [
      el("section", {}, [el("h3", { text: "Tài khoản" }), el("p", { text: `Đang chơi: ${S.name}. Máy này có ${P.list.length} tài khoản.` }),
        el("div", { class: "row" }, [el("button", { class: "btn small", text: "Tài khoản & mã PIN", onclick: () => { closeModal(true); openAccount(); } }), el("button", { class: "btn small ghost", text: "Đăng xuất / đổi tài khoản", onclick: () => logout() })])]),
      el("section", {}, [el("h3", { text: "Tên trên phiếu" }), nameIn, el("div", { class: "row" }, el("button", { class: "btn small", text: "Lưu tên", onclick: () => { const v = nameIn.value.trim(); if (!v) { note.className = "note err"; note.textContent = "Tên không được để trống."; return; } S.name = v; save(); hud(); toast("Đã lưu tên: " + v); } }))]),
      el("section", {}, [el("h3", { text: "Chuyển tiến độ sang máy khác" }),
        el("p", { text: "Tiến độ chỉ lưu trên trình duyệt này. Sao chép mã dưới đây, rồi dán vào ô Khôi phục ở máy khác." }), code,
        el("div", { class: "row" }, el("button", { class: "btn small ghost", text: "Sao chép mã", onclick: async () => { try { await navigator.clipboard.writeText(code.value); toast("Đã sao chép mã sao lưu."); } catch (e) { code.select(); toast("Hãy bấm giữ và chọn Sao chép."); } } })),
        el("p", { style: "margin-top:10px", text: "Khôi phục từ mã:" }), restore,
        el("div", { class: "row" }, el("button", { class: "btn small", text: "Khôi phục", onclick: () => {
          try { const o = JSON.parse(decodeURIComponent(escape(atob(restore.value.trim())))); if (!o || typeof o.prog !== "object") throw 0; delete o.v; o.teacher = false; o.teacherLock = 0; S = Object.assign(fresh(), o); save(); closeModal(); goMap(); toast("Đã khôi phục tiến độ của " + (S.name || "bạn") + "."); }
          catch (e) { note.className = "note err"; note.textContent = "Mã không hợp lệ. Hãy dán đúng toàn bộ mã sao lưu."; } } })), note]),
      el("section", {}, [el("h3", { text: "Nhạc nền" }),
        el("p", { text: "Bản EDM không lời tự tổng hợp ngay trong trang. Nhạc tự nhỏ lại khi đang làm bài." }),
        el("div", { class: "vol" }, [el("label", { for: "musicVol", text: "Âm lượng" }), musicVol])]),
      el("section", {}, [el("h3", { text: "Chế độ giáo viên" }),
        tbox,
        el("p", { style: "margin-top:6px", text: "Phiếu điểm 10 vẫn chỉ trao khi qua đủ 4 mức." })]),
      el("section", {}, [el("h3", { text: "Chơi lại từ đầu" }), el("button", { class: "btn small ghost", text: "Xóa tiến độ", onclick: () => confirmBox.hidden = false }), confirmBox])])]);
  openModal(m);
}

/* Mật khẩu giáo viên chỉ lưu dưới dạng mã băm SHA-256 */
const TEACHER_HASH = "5645a9b7f3651a9ce3ad8a4bc24e7297d74e60c47736083c7df0280965c452e4";
async function checkTeacher(pw) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("vetvecto:" + pw));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("") === TEACHER_HASH;
  } catch (e) { return false; }
}

/* ================= PHÁO GIẤY ================= */
function confetti(n) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("#confetti"), ctx = cv.getContext("2d"); cv.hidden = false;
  const W = cv.width = innerWidth, H = cv.height = innerHeight;
  const cols = ["#E5463F", "#FFC53A", "#26935A", "#39B7CF", "#2D7FD3", "#F28DB2"];
  const ps = Array.from({ length: n }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: pick(cols), a: Math.random() * 6, s: (Math.random() - .5) * .3 }));
  let t = 0;
  (function step() {
    ctx.clearRect(0, 0, W, H); t++;
    for (const p of ps) { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.s; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); }
    if (t < 160) requestAnimationFrame(step); else { ctx.clearRect(0, 0, W, H); cv.hidden = true; }
  })();
}


/* ================= BẦU TRỜI LẤP LÁNH ================= */
function sky() {
  const cv = $("#sky"); if (!cv) return; const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, DPR, stars = [], motes = [];
  function resize() {
    DPR = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    stars = Array.from({ length: Math.round(W * H / 6500) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .3, p: Math.random() * 6.28, s: .6 + Math.random() * 1.6 }));
    motes = Array.from({ length: Math.round(W / 60) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.2 + 1, vx: (Math.random() - .5) * .25, vy: -Math.random() * .35 - .08, c: pick(["62,240,208", "155,107,255", "255,214,107", "255,111,181"]) }));
  }
  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) { const a = .35 + .65 * Math.abs(Math.sin(s.p + t / 1000 * s.s)); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill(); }
    for (const m of motes) {
      m.x += m.vx; m.y += m.vy; if (m.y < -10) { m.y = H + 10; m.x = Math.random() * W; } if (m.x < -10) m.x = W + 10; if (m.x > W + 10) m.x = -10;
      const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 5); g.addColorStop(0, `rgba(${m.c},.5)`); g.addColorStop(1, `rgba(${m.c},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 5, 0, 6.283); ctx.fill();
    }
    if (!reduce && !document.hidden) requestAnimationFrame(frame);
  }
  resize(); addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !reduce) requestAnimationFrame(frame); });
  requestAnimationFrame(frame);
  // sao nhỏ lấp lánh trên biển của bản đồ
  const g = $("#seastars");
  if (g) for (let k = 0; k < 46; k++) {
    const x = 470 + Math.random() * 340, y = 160 + Math.random() * 800;
    const c = sv("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: (Math.random() * 1.6 + .5).toFixed(2), class: "twinkle", style: `animation-delay:${(Math.random() * 3).toFixed(2)}s` });
    g.append(c);
  }
}
/* ================= KHỞI ĐỘNG ================= */
function afterLoad() {
  if (S.teacher && S.teacherLock !== 1) { S.teacher = false; save(); }
  // trao bù phiếu miễn cho các mức đã qua trước khi có phần thưởng này
  S.coupons = S.coupons || {}; let bf = 0;
  for (const st of STAGES) for (const l of (st.id === "boss" ? [1] : [1, 2, 3, 4])) if (passed(st.id, l) && !S.coupons[`${st.id}.${l}`]) { S.coupons[`${st.id}.${l}`] = { d: new Date().toISOString().slice(0, 10) }; bf++; }
  if (bf) save();
  S.cave = Object.assign({ found: false, sel: "b1", best: {}, done: {}, seen: {}, hint: {} }, S.cave || {});
  for (const k in S.cave.best) if (!S.cave.done[k]) S.cave.done[k] = new Date().toISOString().slice(0, 10); // bản cũ có điểm → coi như đã làm
  Music.setVolume(S.musicVol ?? .6);
}
function start(data) {
  loadProfiles();
  S = load(); if (P.cur) afterLoad();
  try { window.claude && window.claude.hot && window.claude.hot.snapshot && window.claude.hot.snapshot(() => ({ S })); } catch (e) {}
  mountParrots(); sky();
  $("#homeBtn").addEventListener("click", () => { if (RUN) confirmQuit(); else goMap(); });
  $("#walletBtn").addEventListener("click", () => openWallet());
  $("#menuBtn").addEventListener("click", openMenu);
  $("#soundBtn").addEventListener("click", () => { S.sound = !S.sound; save(); hud(); if (S.sound) play("tap"); });
  $("#bookBtn").addEventListener("click", bookFromHud);
  $("#musicBtn").addEventListener("click", () => {
    // đang bật mà chưa phát được (máy chặn tự phát) thì bấm nút là phát, không tắt
    if (S.music && !Music.playing) S.music = true; else S.music = !S.music;
    save();
    if (S.music) { Music.setVolume(S.musicVol ?? .6); Music.start(); toast("Nhạc nền: bật"); checkMusic(); } else { Music.stop(); toast("Nhạc nền: tắt"); }
    hud();
  });
  Music.setVolume(S.musicVol ?? .6);
  // Trình duyệt chỉ cho phát âm thanh sau một thao tác thật của người dùng. Trên điện thoại, chạm (touchend/click)
  // mới được tính, pointerdown thì không, nên nghe cả các sự kiện này và mở khóa âm thanh ở mỗi lần cần.
  const onGesture = e => {
    Music.unlock();
    const onBtn = e && e.target && e.target.closest && e.target.closest("#musicBtn");
    if (S.music && !Music.playing && !onBtn) { Music.start(); hud(); checkMusic(); }
  };
  ["pointerup", "touchend", "click", "keydown"].forEach(t => addEventListener(t, onGesture, true));
  $("#quitBtn").addEventListener("click", confirmQuit);
  $("#nameForm").addEventListener("submit", async e => {
    e.preventDefault(); const v = $("#nameInput").value.trim(), pin = $("#pinInput").value.trim();
    if (!v) { $("#nameInput").focus(); toast("Nhập tên để Vẹt ghi lên phiếu điểm 10 nhé!"); return; }
    if (pin && !/^\d{4}$/.test(pin)) { $("#pinInput").focus(); toast("Mã PIN gồm đúng 4 chữ số, hoặc để trống."); return; }
    if (P.list.some(x => x.name.trim().toLowerCase() === v.toLowerCase())) { toast("Tên này đã có trên máy. Hãy chọn tài khoản đó hoặc đặt tên khác."); return; }
    const id = "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    P.list.push({ id, name: v, pin: pin ? await pinHash(id, pin) : null, last: todayISO() });
    P.cur = id; saveProfiles();
    S = fresh(); S.name = v; afterLoad(); save();
    $("#nameInput").value = ""; $("#pinInput").value = "";
    play("win"); applyMusicPref(); goMap();
    toast(`Chào ${v}! Vẹt tặng bạn ${S.seeds} hạt khởi hành. Dùng hạt cho trợ giúp và Hộp quẻ.`);
  });
  $("#nameBack").addEventListener("click", () => { play("tap"); renderAccounts(); });
  $("#hudName").addEventListener("click", openAccount);
  hud();
  if (P.cur) goMap(); else { renderAccounts(); show("scrWelcome"); }
}
/* ================= TÀI KHOẢN ================= */
async function pinHash(id, pin) {
  try { const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("vetvecto-pin:" + id + ":" + pin)); return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join(""); }
  catch (e) { return "plain:" + pin; } // trình duyệt quá cũ không có crypto.subtle
}
async function pinOk(pr, pin) { return !pr.pin || (await pinHash(pr.id, pin)) === pr.pin; }
function applyMusicPref() { try { if (S.music && !Music.playing) Music.start(); else if (!S.music && Music.playing) Music.stop(); } catch (e) {} hud(); }
const AV_COLORS = ["#FF6FB5", "#3EF0D0", "#FFD66B", "#9B6BFF", "#5CC8FF", "#37F2A0", "#FF8E5C"];
function avatar(pr) { let h = 0; for (const ch of pr.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0; const name = pr.name.trim().split(/\s+/).pop() || "?"; return el("span", { class: "acct-av", style: `background:${AV_COLORS[h % AV_COLORS.length]}`, text: name[0].toUpperCase() }); }
function renderAccounts() {
  const box = $("#acctList"), form = $("#nameForm");
  box.innerHTML = "";
  if (!P.list.length) { box.hidden = true; form.hidden = false; $("#nameBack").hidden = true; $("#nameLabel").textContent = "Tên của bạn (ghi lên phiếu điểm 10)"; return; }
  box.hidden = false; form.hidden = true;
  box.append(el("h3", { class: "acct-h", text: "Chọn tài khoản để chơi tiếp" }));
  const grid = el("div", { class: "acct-grid" });
  const list = P.list.slice().sort((a, b) => (b.last || "").localeCompare(a.last || ""));
  for (const pr of list) {
    const card = el("div", { class: "acct-card" }, [
      el("button", { class: "acct-main", "aria-label": `Đăng nhập ${pr.name}${pr.pin ? " (có mã PIN)" : ""}`, onclick: () => loginAs(pr) }, [
        avatar(pr), el("span", { class: "acct-info" }, [el("b", { text: pr.name }), el("small", { text: `★ ${pr.stars || 0} · ${pr.tix || 0} phiếu` + (pr.last ? ` · ${pr.last.split("-").reverse().slice(0, 2).join("/")}` : "") })]),
        pr.pin ? icon("i-lock", "acct-lock") : null]),
      el("button", { class: "acct-del", "aria-label": `Xóa tài khoản ${pr.name}`, title: "Xóa tài khoản", onclick: () => deleteAccount(pr) }, icon("i-close"))]);
    grid.append(card);
  }
  grid.append(el("button", { class: "acct-card acct-new", onclick: () => { play("tap"); box.hidden = true; form.hidden = false; $("#nameBack").hidden = false; $("#nameLabel").textContent = "Tạo tài khoản mới: tên của bạn (ghi lên phiếu điểm 10)"; $("#nameInput").focus(); } }, [el("span", { class: "acct-av plus", text: "+" }), el("span", { class: "acct-info" }, [el("b", { text: "Tài khoản mới" }), el("small", { text: "Cho bạn khác dùng chung máy" })])]));
  box.append(grid, el("p", { class: "pin-note", text: "Mỗi tài khoản có tiến độ, hạt và phiếu thưởng riêng, chỉ lưu trên máy này. Muốn chuyển sang máy khác, dùng mã sao lưu trong Cài đặt." }));
}
function askPin(pr, title, then) {
  const inp = el("input", { type: "password", inputmode: "numeric", maxlength: "4", class: "pin-big", placeholder: "• • • •", "aria-label": "Mã PIN", autocomplete: "off" });
  const note = el("p", { class: "note", "aria-live": "polite" });
  const go = async () => { if (await pinOk(pr, inp.value.trim())) { closeModal(true); then(); } else { note.className = "note err"; note.textContent = "Sai mã PIN."; inp.select(); play("bad"); } };
  inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); go(); } });
  openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "pinT" }, [closeX(),
    el("div", { class: "acct-head" }, [avatar(pr), el("div", {}, [el("h2", { id: "pinT", text: title }), el("p", { text: pr.name })])]),
    inp, note, el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Thôi", onclick: () => closeModal() }), el("button", { class: "btn red", text: "Xác nhận", onclick: go })])]));
  setTimeout(() => inp.focus(), 50);
}
function loginAs(pr) {
  play("tap");
  const doLogin = () => { P.cur = pr.id; saveProfiles(); S = load(); if (!S.name) S.name = pr.name; afterLoad(); save(); applyMusicPref(); goMap(); toast(`Chào mừng ${S.name} quay lại!`); };
  if (pr.pin) askPin(pr, "Nhập mã PIN", doLogin); else doLogin();
}
function deleteAccount(pr) {
  play("tap");
  const confirmDel = () => openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "delT" }, [closeX(),
    el("h2", { id: "delT", text: "Xóa tài khoản?" }),
    el("p", { text: `Toàn bộ tiến độ, hạt và phiếu thưởng của "${pr.name}" trên máy này sẽ bị xóa và không lấy lại được (trừ khi đã lưu mã sao lưu).` }),
    el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Thôi", onclick: () => closeModal() }),
      el("button", { class: "btn red", text: "Xóa tài khoản", onclick: () => { try { localStorage.removeItem(stateKey(pr.id)); } catch (e) {} P.list = P.list.filter(x => x.id !== pr.id); if (P.cur === pr.id) P.cur = null; saveProfiles(); closeModal(); renderAccounts(); toast(`Đã xóa tài khoản ${pr.name}.`); } })])]));
  if (pr.pin) askPin(pr, "Nhập mã PIN để xóa", confirmDel); else confirmDel();
}
function logout() {
  save(); RUN = null; P.cur = null; saveProfiles(); S = fresh(); closeModal(true); renderAccounts(); show("scrWelcome"); play("tap");
  const tt = $(".toast"); if (tt) tt.hidden = true;
}
function openAccount() {
  const pr = curProfile(); if (!pr) return;
  const pinIn = el("input", { type: "password", inputmode: "numeric", maxlength: "4", class: "acct-pin", placeholder: "Mã PIN mới (4 số)", "aria-label": "Mã PIN mới", autocomplete: "off" });
  const note = el("p", { class: "note", "aria-live": "polite" });
  const setPin = async clear => {
    const v = pinIn.value.trim();
    if (!clear && !/^\d{4}$/.test(v)) { note.className = "note err"; note.textContent = "Mã PIN gồm đúng 4 chữ số."; return; }
    pr.pin = clear ? null : await pinHash(pr.id, v); saveProfiles(); pinIn.value = "";
    note.className = "note ok"; note.textContent = clear ? "Đã bỏ mã PIN." : "Đã đặt mã PIN."; drawPinBtns();
  };
  const pinBtns = el("div", { class: "row" });
  const drawPinBtns = () => { pinBtns.innerHTML = ""; pinBtns.append(pinIn, el("button", { class: "btn small", text: pr.pin ? "Đổi PIN" : "Đặt PIN", onclick: () => setPin(false) })); if (pr.pin) pinBtns.append(el("button", { class: "btn small ghost", text: "Bỏ PIN", onclick: () => setPin(true) })); };
  drawPinBtns();
  openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "accT" }, [closeX(),
    el("div", { class: "acct-head" }, [avatar(pr), el("div", {}, [el("h2", { id: "accT", text: S.name }), el("p", { text: `★ ${totalStars()} · ${ticketCount()} phiếu · ${S.seeds} hạt · ${P.list.length} tài khoản trên máy này` })])]),
    el("div", { class: "menu-list" }, [
      el("section", {}, [el("h3", { text: "Đổi tài khoản" }), el("p", { text: "Đăng xuất để bạn khác đăng nhập hoặc tạo tài khoản mới trên máy này. Tiến độ của bạn vẫn được giữ nguyên." }),
        el("div", { class: "row" }, el("button", { class: "btn small red", text: "Đăng xuất / đổi tài khoản", onclick: () => { if (RUN) { closeModal(true); confirmQuitThen(logout); } else logout(); } }))]),
      el("section", {}, [el("h3", { text: "Mã PIN" }), el("p", { text: pr.pin ? "Tài khoản đang có mã PIN." : "Đặt mã PIN 4 số để người khác không vào nhầm tài khoản của bạn." }), pinBtns, note])])]));
}
function confirmQuitThen(fn) {
  openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "qT2" }, [
    el("h2", { id: "qT2", text: "Đang làm bài dở" }), el("p", { text: "Kết quả lượt này sẽ không được tính. Hạt đã nhận vẫn được giữ." }),
    el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Ở lại", onclick: () => closeModal() }), el("button", { class: "btn red", text: "Vẫn đăng xuất", onclick: () => fn() })])]));
}
let musicWarned = false;
function checkMusic() {
  setTimeout(() => { if (S.music && Music.playing && Music.state !== "running" && !musicWarned) { musicWarned = true; toast("Chạm vào màn hình một lần nữa để bật nhạc nền. Trên iPhone, kiểm tra cả nút âm lượng."); } }, 700);
}
function confirmQuit() {
  openModal(el("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "qTitle" }, [
    el("h2", { id: "qTitle", text: "Rời trạm?" }),
    el("p", { text: "Kết quả lượt này sẽ không được tính. Hạt đã nhận vẫn được giữ." }),
    el("div", { class: "btnrow" }, [el("button", { class: "btn ghost", text: "Ở lại", onclick: () => closeModal() }), el("button", { class: "btn red", text: "Rời trạm", onclick: () => { closeModal(true); goMap(); } })])]));
}
(function boot() {
  const hot = window.claude && window.claude.hot;
  if (hot && hot.ready) hot.ready(start); else start((hot && hot.data) || {});
})();
