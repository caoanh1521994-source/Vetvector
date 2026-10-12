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
- Chế độ giáo viên (cần mật khẩu): nút "Đáp án" ở từng mức và trong Cài đặt (`openKey`), xem trước mọi phiếu thưởng (ví phiếu, thẻ phần thưởng).
- Phiếu miễn BTVN (`COUPON_PCT`: mức 1 = 2%, 2 = 5%, 3 = 10%, 4 = 20%; Đất Mũi `BOSS_PCT` = 20%): mỗi mức (và Thử thách Đất Mũi) qua lần đầu tặng 1 phiếu, lưu ở `S.coupons["bX.L"] = {d, used}`; giáo viên đánh dấu đã dùng trong `openCoupon`. Túi phiếu có 2 tab.
- Bản đồ ẩn Hang Sơn Đoòng (`src/cave.js`: `CAVE`, `CHAMBERS`, `ESSAYS`): 16 bài tự luận VDC (2/bài học). Mở khi qua mức 4 ở `CAVE_NEED` địa danh (giáo viên luôn mở). Không chấm điểm: học sinh làm ra giấy, mở lời giải từng ý bằng hạt (`ESSAY_SOL_COST` = 10/ý, lưu `S.cave.seen`), gợi ý hướng làm −10 (`S.cave.hint`), tự đánh dấu "đã làm xong" (`S.cave.done`); đủ 16 bài → phiếu `S.tickets.cave`. Giáo viên xem lời giải miễn phí.
- Hình minh họa bài thực tế: `src/figs.js` (`FIGS` theo khóa `bX.L.k` hoặc `cave:bX.k`; `img` = ảnh trong `src/fig/*.webp` lấy từ phiếu bài tập, build nhúng base64; `svg` = hình vẽ lại theo số liệu; `sol` = hình kèm lời giải).
