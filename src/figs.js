/* ===== HÌNH MINH HỌA CHO CÁC BÀI THỰC TẾ =====
   img: ảnh lấy từ phiếu bài tập (src/fig/*.webp, build.py nhúng vào FIG_IMG)
   svg: hình vẽ lại theo đúng số liệu của câu hỏi
   sol: hình kèm lời giải (hiện sau khi trả lời / mở lời giải)
   Khóa: "bX.L.k" cho câu trắc nghiệm, "cave:bX.k" cho bài tự luận. */
const FigSVG = (() => {
  const INK = "#1E2A44", RED = "#D23B3B", BLUE = "#2D6CDF", GREEN = "#1F8A5B";
  const mk = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`;
  const defs = id => `<defs>${mk("ah" + id + "r", RED)}${mk("ah" + id + "b", BLUE)}</defs>`;
  const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="${o.size || 14}" font-weight="${o.w || 600}" fill="${o.fill || INK}" text-anchor="${o.a || "middle"}"${o.it ? ' font-style="italic"' : ""}>${s}</text>`;
  const arc = (cx, cy, r, a1, a2, col = RED) => { // góc tính theo độ, chiều dương ngược kim đồng hồ (trục y hướng lên)
    const p = a => [cx + r * Math.cos(a * Math.PI / 180), cy - r * Math.sin(a * Math.PI / 180)];
    const [x1, y1] = p(a1), [x2, y2] = p(a2);
    return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}A${r} ${r} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${col}" stroke-width="2"/>`;
  };
  let uid = 0;
  /* Hai lực cùng điểm đặt O */
  function forces(l1, l2, ang, angLabel) {
    const id = "f" + (++uid), a = ang * Math.PI / 180, L2 = 130, O = [Math.max(70, 40 - L2 * Math.cos(a) + 30), 170], L1 = Math.min(170, 280 - O[0]);
    const B = [O[0] + L2 * Math.cos(a), O[1] - L2 * Math.sin(a)];
    let s = `<svg viewBox="0 0 300 210" role="img" aria-label="Hai lực ${l1} và ${l2} cùng điểm đặt O, hợp với nhau góc ${angLabel || ang + "°"}">${defs(id)}`;
    s += `<line x1="${O[0]}" y1="${O[1]}" x2="${O[0] + L1}" y2="${O[1]}" stroke="${RED}" stroke-width="3" marker-end="url(#ah${id}r)"/>`;
    s += `<line x1="${O[0]}" y1="${O[1]}" x2="${B[0].toFixed(1)}" y2="${B[1].toFixed(1)}" stroke="${BLUE}" stroke-width="3" marker-end="url(#ah${id}b)"/>`;
    s += ang === 90 ? `<path d="M${O[0] + 14} ${O[1]}V${O[1] - 14}H${O[0]}" fill="none" stroke="${INK}" stroke-width="1.6"/>` : arc(O[0], O[1], 26, 0, ang, INK);
    const mid = ang / 2 * Math.PI / 180;
    if (ang !== 90) s += txt(O[0] + 46 * Math.cos(mid), O[1] - 46 * Math.sin(mid) + 5, angLabel || ang + "°", { size: 13 });
    s += `<circle cx="${O[0]}" cy="${O[1]}" r="4" fill="${INK}"/>` + txt(O[0] - 12, O[1] + 18, "O", { it: 1 });
    s += txt(O[0] + L1 - 6, O[1] + 24, `F₁ = ${l1}`, { fill: RED, a: "end" });
    s += txt(B[0] + (ang > 100 ? -6 : 10), B[1] - 8, `F₂ = ${l2}`, { fill: BLUE, a: ang > 100 ? "middle" : "start" });
    return s + "</svg>";
  }
  /* Vật treo bởi hai sợi dây, mỗi dây lệch 30° so với phương thẳng đứng */
  function hanging() {
    const K = [150, 162.6];
    let s = `<svg viewBox="0 0 300 250" role="img" aria-label="Vật nặng 100 N treo bởi hai sợi dây, mỗi dây hợp với phương thẳng đứng góc 30 độ">`;
    s += `<rect x="40" y="14" width="220" height="10" fill="#9AA5B8"/><path d="M40 14h220" stroke="${INK}" stroke-width="2"/>`;
    for (let x = 48; x < 260; x += 14) s += `<path d="M${x} 14l-8-8" stroke="${INK}" stroke-width="1.2"/>`;
    s += `<path d="M70 24L${K[0]} ${K[1]}L230 24" fill="none" stroke="${INK}" stroke-width="2.4"/>`;
    s += `<path d="M${K[0]} ${K[1]}V40" stroke="${INK}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
    s += arc(K[0], K[1], 34, 90, 120) + arc(K[0], K[1], 40, 60, 90);
    s += txt(K[0] - 15, K[1] - 56, "30°", { size: 12, fill: RED }) + txt(K[0] + 15, K[1] - 56, "30°", { size: 12, fill: RED });
    s += `<path d="M${K[0]} ${K[1]}V188" stroke="${INK}" stroke-width="2.4"/><rect x="${K[0] - 30}" y="188" width="60" height="40" rx="6" fill="#E8A65A" stroke="${INK}" stroke-width="2"/>`;
    s += txt(K[0], 214, "100 N", { w: 700 });
    s += `<circle cx="${K[0]}" cy="${K[1]}" r="4" fill="${INK}"/>`;
    return s + "</svg>";
  }
  /* Ngắm điểm C bên kia sông từ A, B trên bờ */
  function river() {
    const A = [50, 192], B = [180, 192], C = [129.7, 54];
    let s = `<svg viewBox="0 0 300 230" role="img" aria-label="Hai điểm A, B trên bờ sông cách nhau 100 mét, điểm C ở bờ bên kia, góc CAB 60 độ, góc CBA 70 độ">`;
    s += `<rect width="300" height="230" fill="#EAF6E6"/><rect y="68" width="300" height="104" fill="#BFE3F5"/>`;
    for (let k = 0; k < 6; k++) s += `<path d="M${20 + k * 48} ${92 + (k % 3) * 24}q8-6 16 0t16 0" fill="none" stroke="#fff" stroke-width="2"/>`;
    s += `<circle cx="${C[0]}" cy="${C[1] - 16}" r="12" fill="#3E9A52"/><path d="M${C[0]} ${C[1] - 4}V${C[1]}" stroke="#7A4E12" stroke-width="3"/>`;
    s += `<path d="M${A[0]} ${A[1]}L${C[0]} ${C[1]}L${B[0]} ${B[1]}Z" fill="none" stroke="${INK}" stroke-width="2"/>`;
    s += arc(A[0], A[1], 26, 0, 60) + arc(B[0], B[1], 24, 110, 180);
    s += txt(A[0] + 38, A[1] - 10, "60°", { size: 13, fill: RED }) + txt(B[0] - 36, B[1] - 10, "70°", { size: 13, fill: RED });
    s += txt(A[0] - 10, A[1] + 18, "A", { it: 1 }) + txt(B[0] + 10, B[1] + 18, "B", { it: 1 }) + txt(C[0] + 14, C[1] + 4, "C", { it: 1, a: "start" });
    s += txt((A[0] + B[0]) / 2, A[1] + 22, "100 m", { size: 13 });
    s += `<path d="M${A[0]} ${A[1]}h${B[0] - A[0]}" stroke="${INK}" stroke-width="2"/>`;
    for (const P of [A, B, C]) s += `<circle cx="${P[0]}" cy="${P[1]}" r="3.5" fill="${INK}"/>`;
    return s + "</svg>";
  }
  /* Hai máy bay: một chiếc bay về hướng bắc, một chiếc về hướng đông */
  function planes() {
    const id = "p" + (++uid), O = [70, 190], N = [70, 60], E = [244, 190];
    let s = `<svg viewBox="0 0 300 230" role="img" aria-label="Từ sân bay O, máy bay thứ nhất bay về hướng bắc 600 km, máy bay thứ hai bay về hướng đông 800 km">${defs(id)}`;
    s += `<line x1="${O[0]}" y1="${O[1]}" x2="${N[0]}" y2="${N[1]}" stroke="${BLUE}" stroke-width="3" marker-end="url(#ah${id}b)"/>`;
    s += `<line x1="${O[0]}" y1="${O[1]}" x2="${E[0]}" y2="${E[1]}" stroke="${RED}" stroke-width="3" marker-end="url(#ah${id}r)"/>`;
    s += `<path d="M${N[0]} ${N[1]}L${E[0]} ${E[1]}" stroke="${INK}" stroke-width="1.6" stroke-dasharray="6 5"/>`;
    s += `<path d="M${O[0] + 14} ${O[1]}V${O[1] - 14}H${O[0]}" fill="none" stroke="${INK}" stroke-width="1.5"/>`;
    s += txt(O[0] - 10, O[1] + 20, "O", { it: 1 }) + txt(O[0] - 12, (O[1] + N[1]) / 2, "600 km", { a: "end", fill: BLUE, size: 13 });
    s += txt((O[0] + E[0]) / 2, O[1] + 20, "800 km", { fill: RED, size: 13 }) + txt(170, 112, "?", { size: 18, w: 800 });
    s += `<g transform="translate(250 50)"><circle r="20" fill="none" stroke="#9AA5B8" stroke-width="1.5"/><path d="M0-17L4 0H-4z" fill="${INK}"/><path d="M0 17L4 0H-4z" fill="#9AA5B8"/>${txt(0, -24, "B", { size: 12, w: 800 })}${txt(28, 5, "Đ", { size: 12, w: 800 })}</g>`;
    return s + "</svg>";
  }
  /* Khinh khí cầu quan sát từ A, B (bài tự luận) */
  function balloon() {
    const A = [60, 212], B = [210, 212], C = [162.5, 37.5], H = [162.5, 212];
    let s = `<svg viewBox="0 0 300 250" role="img" aria-label="Khinh khí cầu C, hai người ở A và B cách nhau 300 mét, góc nâng tại A là 60 độ, tại B là 75 độ">`;
    s += `<rect width="300" height="250" fill="#E8F4FF"/><rect y="212" width="300" height="38" fill="#CDE8B5"/>`;
    s += `<path d="M${A[0]} ${A[1]}L${C[0]} ${C[1]}L${B[0]} ${B[1]}Z" fill="none" stroke="${INK}" stroke-width="2"/>`;
    s += `<path d="M${C[0]} ${C[1]}V${H[1]}" stroke="${INK}" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M${H[0] - 10} ${H[1]}V${H[1] - 10}H${H[0]}" fill="none" stroke="${INK}" stroke-width="1.3"/>`;
    s += arc(A[0], A[1], 26, 0, 60) + arc(B[0], B[1], 24, 105, 180);
    s += txt(A[0] + 38, A[1] - 10, "60°", { size: 13, fill: RED }) + txt(B[0] - 30, B[1] - 22, "75°", { size: 13, fill: RED });
    s += `<ellipse cx="${C[0]}" cy="${C[1] - 18}" rx="16" ry="19" fill="#E5463F" stroke="${INK}" stroke-width="1.5"/><path d="M${C[0] - 8} ${C[1] - 2}l3 6h10l3-6" fill="none" stroke="${INK}" stroke-width="1.2"/><rect x="${C[0] - 5}" y="${C[1] + 3}" width="10" height="7" fill="#7A4E12"/>`;
    s += txt(C[0] + 22, C[1] + 6, "C", { it: 1, a: "start" }) + txt(A[0] - 6, A[1] + 22, "A", { it: 1 }) + txt(B[0] + 6, B[1] + 22, "B", { it: 1 }) + txt(H[0] + 10, H[1] + 22, "H", { it: 1, size: 12 });
    s += txt((A[0] + B[0]) / 2 - 18, A[1] + 22, "300 m", { size: 13 });
    for (const P of [A, B]) s += `<circle cx="${P[0]}" cy="${P[1]}" r="3.5" fill="${INK}"/>`;
    return s + "</svg>";
  }
  return { forces, hanging, river, planes, balloon };
})();
const FIG_SRC = "Hình minh họa";
const FIGS = {
  "b5.3.4": { img: "cay-71-5", cap: FIG_SRC, alt: "Chuyên viên đứng cách gốc cây 50 feet, góc nâng lên đỉnh cây 71,5 độ" },
  "b5.3.5": { img: "bo-song-200yd", cap: FIG_SRC, alt: "Cách bờ sông 200 yard, đi 400 yard theo đường thẳng tới mép sông, góc theta với bờ sông" },
  "b5.3.6": { img: "dieu-toa-nha", sol: "dieu-toa-nha-giai", cap: FIG_SRC, alt: "Bạn A trên nóc tòa nhà và bạn B dưới chân tòa nhà cùng nhìn chiếc diều" },
  "b5.4.4": { img: "du-quay", sol: "du-quay-giai", cap: FIG_SRC, alt: "Đu quay bán kính 75 m, tâm cao 90 m so với mặt đất" },
  "b5.4.5": { img: "nui-3-5-9", cap: FIG_SRC, alt: "Ô tô nhìn đỉnh núi với góc nâng 3,5 độ, tiến thêm 13 dặm góc nâng 9 độ" },
  "b6.3.2": { img: "hai-tau-60", cap: FIG_SRC, alt: "Hai tàu rời cảng A theo hai hướng hợp góc 60 độ" },
  "b6.3.4": { svg: () => FigSVG.river(), cap: "Hình minh họa" },
  "b7.4.4": { svg: () => FigSVG.planes(), cap: "Hình minh họa" },
  "b8.3.3": { svg: () => FigSVG.forces("3 N", "4 N", 90), cap: "Hình minh họa" },
  "b8.3.4": { svg: () => FigSVG.forces("50 N", "50 N", 60), cap: "Hình minh họa" },
  "b8.4.0": { svg: () => FigSVG.forces("100 N", "100 N", 120), cap: "Hình minh họa" },
  "b8.4.5": { svg: () => FigSVG.forces("3 N", "4 N", 60), cap: "Hình minh họa" },
  "b8.4.6": { svg: () => FigSVG.hanging(), cap: "Hình minh họa" },
  "cave:b6.0": { svg: () => FigSVG.balloon(), cap: "Hình minh họa" },
  "cave:b6-trungtuyen": { sol: "trung-tuyen-giai", cap: FIG_SRC, alt: "Tam giác ABC, trọng tâm, điểm D đối xứng qua trung điểm I của BC" },
  "cave:b6-duongtb": { img: "duong-tb-60", cap: FIG_SRC, alt: "Tam giác ABC, M, N là trung điểm AB, BC, góc C bằng 60 độ" },
  "cave:b6-tugiac": { img: "tu-giac-mn", cap: FIG_SRC, alt: "Tứ giác ABCD, M, N là trung điểm hai đường chéo" },
  "cave:b7-tructam": { img: "truc-tam-bb", cap: FIG_SRC, alt: "Tam giác ABC nội tiếp đường tròn tâm O, trực tâm H, B' đối xứng B qua O" },
  "cave:b7-chiaba": { img: "hbh-chia-ba", cap: FIG_SRC, alt: "Hình bình hành ABCD, E, F là trung điểm AB, CD, BD cắt AF, CE tại M, N" },
  "cave:b7-trungdiem": { img: "trung-diem-ef-hbh", cap: FIG_SRC + " (hình cho câu b và câu c)", alt: "Tam giác ABC với AE = EF = FC; hình bình hành ABCD với M, N, P, Q" },
  "cave:b8.1": { svg: () => FigSVG.forces("30 N", "40 N", 70, "θ"), cap: "Hình minh họa (θ là góc giữa hai lực)" },
};
function figEl(key, which) {
  const f = FIGS[key]; if (!f) return null;
  const name = which === "sol" ? f.sol : f.img;
  if (which === "sol" && !f.sol) return null;
  if (which !== "sol" && !f.img && !f.svg) return null;
  const box = el("figure", { class: "qfig" + (which === "sol" ? " sol" : "") });
  if (name) box.append(el("img", { src: FIG_IMG[name], alt: (which === "sol" ? "Hình lời giải: " : "") + (f.alt || "Hình minh họa") }));
  else box.insertAdjacentHTML("afterbegin", f.svg());
  box.append(el("figcaption", { text: which === "sol" ? "Hình vẽ trong lời giải" : f.cap }));
  return box;
}
/* ===== Hình cho đề ôn tập (Văn Miếu): mặt phẳng tọa độ, lục giác đều, đo chiều cao tháp ===== */
let figUid = 0;
const svgT = (x, y, s, o = {}) => `<text x="${(+x).toFixed(1)}" y="${(+y).toFixed(1)}" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="${o.size || 13}" font-weight="${o.w || 600}" fill="${o.fill || "#1E2A44"}" text-anchor="${o.a || "middle"}"${o.it ? ' font-style="italic"' : ""}>${s}</text>`;
/* Mặt phẳng tọa độ. lines: [{ a, b, c, keep (1: giữ phía ax+by≥c, -1: phía ≤), dash, lab, labAt }]
   hatch: gạch phần bị loại của từng bất phương trình · fill: tô phần nghiệm · tx/ty: vạch chia có ghi số · marks: [[x, y, chữ]] */
function FigPlane(o) {
  const id = "pl" + (++figUid), U = o.u || 34, [x0, x1] = o.x, [y0, y1] = o.y, W = (x1 - x0) * U, H = (y1 - y0) * U;
  const X = x => (x - x0) * U, Y = y => (y1 - y) * U, INK = "#1E2A44";
  const clip = (poly, a, b, c, s) => { // giữ phần s*(ax+by-c) >= 0
    const f = p => s * (a * p[0] + b * p[1] - c), out = [];
    poly.forEach((p, i) => { const q = poly[(i + 1) % poly.length], fp = f(p), fq = f(q);
      if (fp >= 0) out.push(p);
      if (fp * fq < 0) { const t = fp / (fp - fq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); } });
    return out;
  };
  const rect = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const path = poly => poly.length ? "M" + poly.map(p => X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1)).join("L") + "Z" : "";
  let s = `<svg viewBox="-6 -6 ${W + 12} ${H + 12}" role="img" aria-label="Hình vẽ trên mặt phẳng tọa độ"><defs><pattern id="${id}h" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)"><rect width="7" height="7" fill="#E9EDF3"/><line x1="0" y1="0" x2="0" y2="7" stroke="#8C99AD" stroke-width="2.2"/></pattern>`;
  s += `<marker id="${id}a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${INK}"/></marker></defs>`;
  if (o.hatch) o.lines.forEach(L => { const pl = clip(rect, L.a, L.b, L.c, -L.keep); s += `<path d="${path(pl)}" fill="url(#${id}h)" opacity=".95"/>`; });
  if (o.fill) { let pl = rect; o.lines.forEach(L => pl = clip(pl, L.a, L.b, L.c, L.keep)); s += `<path d="${path(pl)}" fill="#9CC3F5" opacity=".75"/>`; }
  for (let gx = Math.ceil(x0); gx <= x1; gx++) s += `<line x1="${X(gx)}" y1="0" x2="${X(gx)}" y2="${H}" stroke="#D9DFE8" stroke-width="1"/>`;
  for (let gy = Math.ceil(y0); gy <= y1; gy++) s += `<line x1="0" y1="${Y(gy)}" x2="${W}" y2="${Y(gy)}" stroke="#D9DFE8" stroke-width="1"/>`;
  s += `<line x1="0" y1="${Y(0)}" x2="${W}" y2="${Y(0)}" stroke="${INK}" stroke-width="1.6" marker-end="url(#${id}a)"/><line x1="${X(0)}" y1="${H}" x2="${X(0)}" y2="0" stroke="${INK}" stroke-width="1.6" marker-end="url(#${id}a)"/>`;
  s += svgT(W - 8, Y(0) + 17, "x", { it: 1 }) + svgT(X(0) + 11, 12, "y", { it: 1 }) + svgT(X(0) - 9, Y(0) + 15, "O", { it: 1 });
  o.lines.forEach(L => {
    const seg = []; // giao điểm của đường thẳng với khung hình
    rect.forEach((p, i) => { const q = rect[(i + 1) % 4], fp = L.a * p[0] + L.b * p[1] - L.c, fq = L.a * q[0] + L.b * q[1] - L.c;
      if (fp === 0) seg.push(p); else if (fp * fq < 0) { const t = fp / (fp - fq); seg.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); } });
    if (seg.length >= 2) s += `<line x1="${X(seg[0][0]).toFixed(1)}" y1="${Y(seg[0][1]).toFixed(1)}" x2="${X(seg[1][0]).toFixed(1)}" y2="${Y(seg[1][1]).toFixed(1)}" stroke="#C0392B" stroke-width="2.4"${L.dash ? ' stroke-dasharray="7 5"' : ""}/>`;
    if (L.lab) s += svgT(X(L.labAt[0]), Y(L.labAt[1]), L.lab, { it: 1, fill: "#C0392B", size: 14 });
  });
  (o.tx || []).forEach(v => { s += `<line x1="${X(v)}" y1="${Y(0) - 4}" x2="${X(v)}" y2="${Y(0) + 4}" stroke="${INK}" stroke-width="1.6"/>` + svgT(X(v), Y(0) + (v < 0 ? -8 : 17), (o.txl && o.txl[v]) || String(v).replace("-", "−").replace(".", ","), { size: 12 }); });
  (o.ty || []).forEach(v => { s += `<line x1="${X(0) - 4}" y1="${Y(v)}" x2="${X(0) + 4}" y2="${Y(v)}" stroke="${INK}" stroke-width="1.6"/>` + svgT(X(0) - 8, Y(v) + 4, String(v).replace("-", "−"), { size: 12, a: "end" }); });
  (o.marks || []).forEach(([x, y, t]) => { s += svgT(X(x), Y(y) + 6, t, { size: 18, w: 800, fill: "#2D6CDF" }); });
  return s + "</svg>";
}
function FigHex() {
  const R = 78, cx = 130, cy = 100, P = {};
  "ABCDEF".split("").forEach((k, i) => { const a = (120 - 60 * i) * Math.PI / 180; P[k] = [cx + R * Math.cos(a), cy - R * Math.sin(a)]; });
  let s = `<svg viewBox="0 0 260 200" role="img" aria-label="Lục giác đều ABCDEF tâm O">`;
  s += `<path d="M${"ABCDEF".split("").map(k => P[k].map(v => v.toFixed(1)).join(" ")).join("L")}Z" fill="#EEF4FF" stroke="#1E2A44" stroke-width="2"/>`;
  ["AD", "BE", "CF"].forEach(([u, v]) => { s += `<line x1="${P[u][0].toFixed(1)}" y1="${P[u][1].toFixed(1)}" x2="${P[v][0].toFixed(1)}" y2="${P[v][1].toFixed(1)}" stroke="#8C99AD" stroke-width="1.4"/>`; });
  "ABCDEF".split("").forEach(k => { const dx = P[k][0] - cx, dy = P[k][1] - cy, L = Math.hypot(dx, dy); s += `<circle cx="${P[k][0].toFixed(1)}" cy="${P[k][1].toFixed(1)}" r="3" fill="#1E2A44"/>` + svgT(P[k][0] + dx / L * 15, P[k][1] + dy / L * 15 + 5, k, { it: 1, size: 15 }); });
  return s + `<circle cx="${cx}" cy="${cy}" r="3" fill="#1E2A44"/>` + svgT(cx + 12, cy + 16, "O", { it: 1, size: 15 }) + "</svg>";
}
function FigTower() {
  const B = [40, 170], A = [40, 30], D = [99, 170], C = [190, 170];
  const ln = (p, q, c = "#1E2A44", w = 2) => `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${c}" stroke-width="${w}"/>`;
  const arc = (p, r, a1, a2) => { const f = a => [p[0] + r * Math.cos(a * Math.PI / 180), p[1] - r * Math.sin(a * Math.PI / 180)], [u, v] = [f(a1), f(a2)]; return `<path d="M${u[0].toFixed(1)} ${u[1].toFixed(1)}A${r} ${r} 0 0 0 ${v[0].toFixed(1)} ${v[1].toFixed(1)}" fill="none" stroke="#C0392B" stroke-width="1.8"/>`; };
  let s = `<svg viewBox="0 0 230 200" role="img" aria-label="Tháp AB, hai điểm D và C trên mặt đất, góc BCA 43 độ, góc BDA 67 độ, CD 30 mét">`;
  s += `<rect x="30" y="${A[1]}" width="20" height="${B[1] - A[1]}" fill="#E7DCC8" stroke="#1E2A44" stroke-width="1.5"/>`;
  s += ln([10, 170], [220, 170], "#1E2A44", 2.2) + ln(A, D) + ln(A, C) + ln(B, A, "#1E2A44", 2.5);
  s += `<path d="M${B[0]} ${B[1] - 10}h10v10" fill="none" stroke="#1E2A44" stroke-width="1.4"/>`;
  s += arc(C, 26, 180 - 43, 180) + svgT(C[0] - 40, C[1] - 7, "43°", { size: 12, fill: "#C0392B" });
  s += arc(D, 18, 180 - 67, 180) + svgT(D[0] - 15, D[1] - 22, "67°", { size: 12, fill: "#C0392B" });
  s += svgT(A[0] - 12, A[1] + 4, "A", { it: 1, size: 15 }) + svgT(B[0] - 12, B[1] + 16, "B", { it: 1, size: 15 }) + svgT(D[0], D[1] + 18, "D", { it: 1, size: 15 }) + svgT(C[0], C[1] + 18, "C", { it: 1, size: 15 });
  s += svgT((C[0] + D[0]) / 2, C[1] + 18, "30 m", { size: 12 });
  return s + "</svg>";
}
/* Hình của một câu trong đề: tên ảnh (src/fig) hoặc hàm vẽ SVG */
function examFig(f, cap, sol) {
  if (!f) return null;
  const box = el("figure", { class: "qfig" + (sol ? " sol" : "") });
  if (typeof f === "function") box.insertAdjacentHTML("afterbegin", f());
  else if (FIG_IMG[f]) box.append(el("img", { src: FIG_IMG[f], alt: sol ? "Hình vẽ trong lời giải" : "Hình minh họa" }));
  else return null;
  box.append(el("figcaption", { text: sol ? "Hình vẽ trong lời giải" : (cap || (typeof f === "function" ? "Hình vẽ" : FIG_SRC)) }));
  return box;
}
