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
const FIG_SRC = "Hình minh họa · nguồn: phiếu bài tập";
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
  box.append(el("figcaption", { text: which === "sol" ? "Hình vẽ trong lời giải · nguồn: phiếu bài tập" : f.cap }));
  return box;
}
