# Vẹt Vectơ – ghi chú cho Claude

Game web một tệp cho học sinh lớp 10 (tiếng Việt). Chủ repo trao đổi bằng tiếng Việt.

- Chỉ sửa trong `src/`, rồi chạy `python3 build.py` để sinh `index.html`. Không sửa tay `index.html`.
- Commit cả `src/` và `index.html`; đẩy lên `main` là Vercel tự triển khai (vetvector.vercel.app).
- Không thêm thư viện/CDN ngoài; công thức hiển thị bằng `src/math.js` (tập con TeX: frac, sqrt, overrightarrow, widehat, mathbb, cases…, không có `\text`).
- Câu hỏi: `mc(q, [đáp án đúng, sai, sai, sai], lời giải)` (đáp án đúng luôn đứng đầu, game tự xáo), `tf(q, [[ý, đúng/sai]×4], e)`, `num(q, đáp số, e, sai số)`. Chuỗi dùng ``R`...` `` (String.raw). Thêm câu mới phải kiểm tra lại đáp án bằng tính toán.
- Gợi ý công thức: `src/handbook.js` (`HINT_RULES`, `HINT_OVERRIDE` theo khóa `bX.L.k`).
- Mật khẩu chế độ giáo viên chỉ lưu dạng SHA-256 (`TEACHER_HASH` trong `src/app.js`, tiền tố `vetvecto:`); không ghi mật khẩu dạng chữ vào repo.
- Kinh tế hạt: gợi ý/sổ tay khi đang làm câu −10, 50/50 −20, lắc quẻ −15; người mới có 30 hạt.
- Trước khi đẩy: chạy thử bằng Playwright (Chromium có sẵn) ở 1200px và 390px, không có lỗi `pageerror`.
- Mọi địa danh, mức và Thử thách Đất Mũi đều mở sẵn (`stageUnlocked`/`levelUnlocked` luôn trả về true); phiếu điểm 10 vẫn cần qua đủ 4 mức.
