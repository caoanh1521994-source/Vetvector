# Hành trình Vẹt Vectơ · Toán 10

Game ôn tập Toán 10 giữa học kì I (Chương I–IV): 8 địa danh trên bản đồ Việt Nam, 4 mức độ mỗi bài, Phiếu điểm 10 đặc sản, sổ tay công thức, hộp quẻ học tập và nhạc nền.

Trang chạy tại **https://vetvector.vercel.app**. Mỗi lần đẩy lên nhánh `main`, Vercel tự triển khai lại.

## Cấu trúc
| Tệp | Nội dung |
|---|---|
| `index.html` | Bản game hoàn chỉnh (do `build.py` sinh ra, **không sửa tay**) |
| `src/app.html` | Khung trang, biểu tượng SVG, các màn hình |
| `src/style.css` | Giao diện |
| `src/app.js` | Logic game: bản đồ, lượt chơi, phiếu thưởng, sổ tay, hộp quẻ, cài đặt |
| `src/bank.js`, `src/bank2.js` | Ngân hàng câu hỏi (242 câu, bài 1–8, mức 1–4) |
| `src/handbook.js` | Sổ tay công thức và gợi ý cho từng câu |
| `src/omikuji.js` | Dữ liệu Hộp quẻ học tập (lời quẻ, mẹo học, lỗi sai hay gặp) |
| `src/cave.js` | Bản đồ ẩn Hang Sơn Đoòng: 16 bài tự luận Vận dụng cao, đáp số, lời giải, thang điểm |
| `src/math.js` | Bộ hiển thị công thức toán tự viết |
| `src/music.js` | Nhạc nền tổng hợp bằng Web Audio |
| `src/head.html` | Phần `<head>` (tiêu đề, mô tả, biểu tượng tab) |
| `src/map/` | Đường viền bản đồ và script tạo ra chúng |

## Sửa và cập nhật
1. Sửa tệp trong `src/`.
2. Chạy `python3 build.py` để sinh lại `index.html` (có kiểm tra cú pháp JS nếu máy có Node).
3. Commit cả `src/` lẫn `index.html`, đẩy lên `main`.

Tiến độ của học sinh lưu trong trình duyệt (localStorage, khóa `vetvecto-v2`); chuyển máy bằng mã sao lưu trong phần Cài đặt.
