/* ===== ĐỀ ÔN TẬP GIỮA HỌC KÌ I · VĂN MIẾU – QUỐC TỬ GIÁM =====
   Ma trận theo đề mẫu (90 phút): Phần I 12 câu trắc nghiệm (3 điểm), Phần II 2 câu đúng/sai (2 điểm),
   Phần III 4 câu trả lời ngắn (2 điểm), Phần IV 3 câu tự luận (3 điểm).
   Câu hỏi chọn từ phần bài tập vận dụng / nâng cao của các phiếu bài học và file "BÀI TẬP NÂNG CAO";
   đáp án đã tính lại (một số chỗ sai trong tài liệu gốc đã được sửa).
   Câu: mc(q, [đúng, sai, sai, sai], e) · tf(q, [[ý, đúng/sai]×4], e) · num(q, đáp số, e, sai số) · tl: { q, parts: [{ q, s, ans }] }
   fig: tên ảnh trong src/fig (không có đuôi) hoặc hàm trả về SVG; figSol: hình hiện kèm lời giải. */
const EXAM_LOC = {
  id: "exam", no: 11, short: "Văn Miếu", place: "Văn Miếu – Quốc Tử Giám", topic: "Đề ôn tập giữa học kì I", icon: "lm-vanmieu",
  x: 206, y: 222,
  note: "Văn Miếu – Quốc Tử Giám là trường đại học đầu tiên của Việt Nam (1076). 82 bia tiến sĩ khắc tên những người đỗ đạt. Đây là trường thi của Vẹt: 4 đề ôn tập theo đúng ma trận đề giữa kì.",
  food: { name: "Bánh cốm Hàng Than", icon: "fd-com", line: "Bánh cốm xanh dẻo thơm mùi lá dong, nhân đậu xanh dừa, quà Hà Nội cho người đỗ đạt.", exam: true },
};
const EXAM_MIN = 90, EXAM_PASS = 5.5; // phút làm bài · điểm trắc nghiệm (I–III, tối đa 7) để tính là "đạt"
const EXAM_SCORE = { mc: .25, sa: .5, tf: [0, .1, .25, .5, 1] };
const tl = (q, parts, more) => Object.assign({ t: "tl", q, parts }, more || {});
const fx = (item, more) => Object.assign(item, more);

const EXAMS = [
/* ======================= ĐỀ SỐ 1 ======================= */
{ id: "d1", title: "Đề số 1",
mc: [
  mc(R`Trong các mệnh đề sau, mệnh đề nào đúng?`,
    [R`Tích của hai số tự nhiên là một số lẻ khi và chỉ khi cả hai số đều là số lẻ.`, R`Tổng của hai số tự nhiên là một số chẵn khi và chỉ khi cả hai số đều là số chẵn.`, R`Tích của hai số tự nhiên là một số chẵn khi và chỉ khi cả hai số đều là số chẵn.`, R`Tổng của hai số tự nhiên là một số lẻ khi và chỉ khi cả hai số đều là số lẻ.`],
    R`Tổng chẵn nhưng hai số lẻ: \(1+3=4\). Tích chẵn nhưng có số lẻ: \(2\cdot3=6\). Hai số lẻ có tổng chẵn nên "tổng lẻ ⇔ cả hai lẻ" sai. Tích là số lẻ khi và chỉ khi không thừa số nào chẵn, tức là cả hai số đều lẻ.`),
  mc(R`Trong các mệnh đề sau, mệnh đề nào có mệnh đề đảo là mệnh đề đúng?`,
    [R`Nếu a chia hết cho 3 thì a chia hết cho 9.`, R`Nếu a và b cùng chia hết cho c thì a + b chia hết cho c.`, R`Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau.`, R`Nếu một số tận cùng bằng 0 thì số đó chia hết cho 5.`],
    R`Mệnh đề đảo của \(P\Rightarrow Q\) là \(Q\Rightarrow P\). "Nếu a chia hết cho 9 thì a chia hết cho 3" là mệnh đề đúng. Các mệnh đề đảo còn lại sai: \(1+2=3\) chia hết cho 3 nhưng 1, 2 không chia hết cho 3; hai tam giác cùng diện tích chưa chắc bằng nhau; 5 chia hết cho 5 nhưng không tận cùng bằng 0.`),
  mc(R`Cho các tập hợp \(A=\{x\in\mathbb R\mid x<3\}\), \(B=\{x\in\mathbb R\mid 1<x\le 5\}\), \(C=\{x\in\mathbb R\mid -2\le x\le 4\}\). Tập hợp \((B\cup C)\setminus(A\cap C)\) bằng`,
    [R`\([3;5]\)`, R`\([-2;3)\)`, R`\((-\infty;1]\)`, R`\([-2;5]\)`],
    R`\(A=(-\infty;3)\), \(B=(1;5]\), \(C=[-2;4]\). Ta có \(B\cup C=[-2;5]\), \(A\cap C=[-2;3)\). Vậy \((B\cup C)\setminus(A\cap C)=[3;5]\).`),
  mc(R`Cho hai tập hợp khác rỗng \(A=(m-1;5)\) và \(B=(3;+\infty)\). Tất cả các giá trị của m để \(A\setminus B=\varnothing\) là`,
    [R`\(4\le m<6\)`, R`\(4<m<6\)`, R`\(m\ge 4\)`, R`\(3\le m<6\)`],
    R`A khác rỗng nên \(m-1<5\Leftrightarrow m<6\). \(A\setminus B=\varnothing\Leftrightarrow A\subset B\Leftrightarrow m-1\ge 3\Leftrightarrow m\ge 4\). Kết hợp: \(4\le m<6\).`),
  mc(R`Miền nghiệm của bất phương trình \(3x+2(y+3)\ge 4(x+1)-y+3\) là nửa mặt phẳng chứa điểm nào sau đây?`,
    [R`\((2;1)\)`, R`\((3;0)\)`, R`\((1;0)\)`, R`\((4;1)\)`],
    R`Bất phương trình \(\Leftrightarrow 3x+2y+6\ge 4x+4-y+3\Leftrightarrow -x+3y-1\ge 0\). Thay \((2;1)\): \(-2+3-1=0\ge 0\) đúng. Với \((3;0)\), \((1;0)\), \((4;1)\) vế trái lần lượt bằng \(-4,\ -2,\ -2\), đều âm.`),
  mc(R`Miền nghiệm của hệ bất phương trình \(\begin{cases}3x+y\ge 9\\ x\ge y-3\\ 2y\ge 8-x\\ y\le 6\end{cases}\) chứa điểm nào trong các điểm sau đây?`,
    [R`\(P(8;4)\)`, R`\(O(0;0)\)`, R`\(M(1;2)\)`, R`\(N(2;1)\)`],
    R`Với \(P(8;4)\): \(28\ge 9\), \(8\ge 1\), \(8\ge 0\), \(4\le 6\) đều đúng. Các điểm O, M, N không thỏa mãn bất phương trình đầu: \(3x+y\) lần lượt bằng 0, 5, 7, đều nhỏ hơn 9.`),
  mc(R`Một hộ kinh doanh sản xuất hai loại sản phẩm. Mỗi kg sản phẩm loại I cần 3 kg nguyên liệu và 1 giờ sản xuất, lãi 300 nghìn đồng; mỗi kg sản phẩm loại II cần 1 kg nguyên liệu và 1 giờ sản xuất, lãi 200 nghìn đồng. Mỗi ngày hộ dùng không quá 6 kg nguyên liệu và làm việc không quá 4 giờ. Số tiền lãi lớn nhất hộ có thể thu được trong một ngày là`,
    [R`900 nghìn đồng`, R`600 nghìn đồng`, R`800 nghìn đồng`, R`1200 nghìn đồng`],
    R`Gọi x, y (kg) là lượng sản phẩm I, II. Hệ: \(3x+y\le 6,\ x+y\le 4,\ x\ge 0,\ y\ge 0\). Miền nghiệm là tứ giác với các đỉnh \(O(0;0),\ (2;0),\ (1;3),\ (0;4)\). Tiền lãi \(F=300x+200y\) lần lượt bằng 0; 600; 900; 800. Lãi lớn nhất 900 nghìn đồng khi sản xuất 1 kg loại I và 3 kg loại II.`),
  mc(R`Cho góc α thỏa mãn \(0^\circ<\alpha<90^\circ\) và \(3\cos\alpha-\sin\alpha=1\). Giá trị của \(\tan\alpha\) bằng`,
    [R`\(\frac43\)`, R`\(\frac34\)`, R`\(\frac45\)`, R`\(\frac54\)`],
    R`\(\sin\alpha=3\cos\alpha-1\) nên \((3\cos\alpha-1)^2+\cos^2\alpha=1\Leftrightarrow 10\cos^2\alpha-6\cos\alpha=0\). Vì \(0^\circ<\alpha<90^\circ\) nên \(\cos\alpha=\frac35\), \(\sin\alpha=\frac45\), do đó \(\tan\alpha=\frac43\).`),
  mc(R`Cho \(\cos\alpha+\sin\alpha=\frac13\). Giá trị của \(P=\sqrt{\tan^2\alpha+\cot^2\alpha}\) bằng`,
    [R`\(\frac74\)`, R`\(\frac54\)`, R`\(\frac94\)`, R`\(\frac{11}{4}\)`],
    R`Bình phương: \(1+2\sin\alpha\cos\alpha=\frac19\Rightarrow \sin\alpha\cos\alpha=-\frac49\). \(\tan^2\alpha+\cot^2\alpha=\frac{\sin^4\alpha+\cos^4\alpha}{\sin^2\alpha\cos^2\alpha}=\frac{1-2\cdot\frac{16}{81}}{\frac{16}{81}}=\frac{49}{16}\). Vậy \(P=\frac74\).`),
  mc(R`Tam giác ABC có hai đường trung tuyến BM, CN vuông góc với nhau, \(BC=3\) và \(\widehat{BAC}=30^\circ\). Diện tích tam giác ABC bằng`,
    [R`\(3\sqrt3\)`, R`\(6\sqrt3\)`, R`\(9\sqrt3\)`, R`\(\frac{3\sqrt3}{2}\)`],
    R`Gọi G là trọng tâm. \(BG\perp CG\) nên \(BG^2+CG^2=BC^2\Leftrightarrow\frac49(m_b^2+m_c^2)=a^2\Leftrightarrow\frac{4a^2+b^2+c^2}{9}=a^2\Leftrightarrow b^2+c^2=5a^2=45\). Định lí côsin: \(9=45-2bc\cos30^\circ\Rightarrow bc=12\sqrt3\). Vậy \(S=\frac12bc\sin30^\circ=3\sqrt3\). (Tài liệu gốc chọn nhầm \(9\sqrt3\).)`),
  mc(R`Cho tứ giác ABCD có \(\overrightarrow{AB}=\overrightarrow{DC}\) và \(|\overrightarrow{AB}|=|\overrightarrow{BC}|\). Khẳng định nào sau đây sai?`,
    [R`ABCD là hình thang cân.`, R`\(|\overrightarrow{CD}|=|\overrightarrow{BC}|\)`, R`\(\overrightarrow{AD}=\overrightarrow{BC}\)`, R`ABCD là hình thoi.`],
    R`\(\overrightarrow{AB}=\overrightarrow{DC}\) nên ABCD là hình bình hành, suy ra \(\overrightarrow{AD}=\overrightarrow{BC}\). Thêm \(AB=BC\) nên ABCD là hình thoi và \(CD=AB=BC\). Hình thoi nói chung không phải hình thang cân, nên khẳng định "ABCD là hình thang cân" sai.`),
  mc(R`Cho tam giác ABC đều cạnh a, H là trung điểm của BC. Độ dài \(|\overrightarrow{CA}-\overrightarrow{HC}|\) bằng`,
    [R`\(\frac{a\sqrt7}{2}\)`, R`\(\frac a2\)`, R`\(\frac{3a}{2}\)`, R`\(\frac{2\sqrt3\,a}{3}\)`],
    R`\(\overrightarrow{CA}-\overrightarrow{HC}=\overrightarrow{CA}+\overrightarrow{CH}=\overrightarrow{CD}\) với ACHD là hình bình hành; khi đó AHBD là hình chữ nhật, \(BD=AH=\frac{a\sqrt3}{2}\). Vậy \(CD=\sqrt{BD^2+BC^2}=\sqrt{\frac{3a^2}{4}+a^2}=\frac{a\sqrt7}{2}\).`),
],
tf: [
  tf(R`Cho hai tập hợp \(A=[m-3;m+2]\) và \(B=(-3;5)\), với m là tham số thực.`,
    [[R`Khi \(m=1\) thì \(A\cap B=(-3;3]\).`, false],
     [R`\(A\cap B=\varnothing\) khi và chỉ khi \(m\le-5\) hoặc \(m\ge 8\).`, true],
     [R`Có đúng 12 giá trị nguyên của m để \(A\cap B\ne\varnothing\).`, true],
     [R`\(A\subset B\) khi và chỉ khi \(0\le m\le 3\).`, false]],
    R`a) \(m=1\): \(A=[-2;3]\subset B\) nên \(A\cap B=[-2;3]\). Sai.
b) \(A\cap B=\varnothing\Leftrightarrow m+2\le-3\) hoặc \(m-3\ge 5\Leftrightarrow m\le-5\) hoặc \(m\ge 8\). Đúng.
c) \(A\cap B\ne\varnothing\Leftrightarrow -5<m<8\), có các số nguyên \(-4,-3,\dots,7\): 12 giá trị. Đúng.
d) \(A\subset B\Leftrightarrow m-3>-3\) và \(m+2<5\Leftrightarrow 0<m<3\) (B là khoảng mở). Sai.`),
  tf(R`Cho tam giác ABC có \(b=7\), \(c=5\) và \(\cos A=\frac35\).`,
    [[R`\(\sin A=\frac45\).`, true],
     [R`Diện tích tam giác ABC bằng 14.`, true],
     [R`\(a=3\sqrt2\).`, false],
     [R`Bán kính đường tròn nội tiếp \(r=4-\sqrt2\).`, false]],
    R`a) \(\sin^2A=1-\frac{9}{25}=\frac{16}{25}\), \(\sin A>0\) nên \(\sin A=\frac45\). Đúng.
b) \(S=\frac12bc\sin A=\frac12\cdot7\cdot5\cdot\frac45=14\). Đúng.
c) \(a^2=49+25-2\cdot7\cdot5\cdot\frac35=32\Rightarrow a=4\sqrt2\). Sai.
d) \(p=\frac{7+5+4\sqrt2}{2}=6+2\sqrt2\), \(r=\frac Sp=\frac{14}{6+2\sqrt2}=3-\sqrt2\). Sai.`),
],
sa: [
  num(R`Có 100 cử tri tham gia bày tỏ cảm tình với ba ứng cử viên A, B, C. Kết quả: 43 người có cảm tình với A, 21 người với B, 18 người với C; 9 người với cả A và B; 10 người với cả B và C; 5 người với cả C và A; 3 người với cả ba ứng cử viên. Hỏi có bao nhiêu cử tri chỉ có cảm tình với ứng cử viên A?`, 32,
    R`Số người chỉ thích A và B (không thích C): \(9-3=6\); chỉ thích A và C: \(5-3=2\). Số người chỉ thích A: \(43-6-2-3=32\).`),
  num(R`Cho tam giác ABC có \(AB=8\), \(AC=9\), \(BC=10\). Điểm M nằm trên cạnh BC sao cho \(BM=7\). Tính độ dài đoạn AM (làm tròn đến hàng phần trăm).`, 7.41,
    R`\(\cos B=\frac{AB^2+BC^2-AC^2}{2\cdot AB\cdot BC}=\frac{64+100-81}{160}=\frac{83}{160}\). Trong tam giác ABM: \(AM^2=64+49-2\cdot8\cdot7\cdot\frac{83}{160}=\frac{549}{10}\Rightarrow AM\approx 7{,}41\).`, .006),
  num(R`Tìm giá trị lớn nhất của biểu thức \(F(x;y)=x+2y\) trên miền xác định bởi hệ \(\begin{cases}0\le y\le 4\\ x\ge 0\\ x-y-1\le 0\\ x+2y-10\le 0\end{cases}\).`, 10,
    R`Miền nghiệm là ngũ giác với các đỉnh \(O(0;0),\ (1;0),\ (4;3),\ (2;4),\ (0;4)\). F lần lượt bằng 0; 1; 10; 10; 8. Giá trị lớn nhất bằng 10.`),
  fx(num(R`Hai chiếc tàu thủy P và Q cách nhau 100 m. Từ P và Q thẳng hàng với chân A của tháp hải đăng AB ở trên bờ biển, người ta nhìn chiều cao AB của tháp dưới các góc \(\widehat{BPA}=15^\circ\) và \(\widehat{BQA}=22^\circ\) (hình vẽ). Tính chiều cao AB của tháp (đơn vị mét, làm tròn đến hàng phần trăm).`, 79.56,
    R`Tam giác ABP, ABQ vuông tại A nên \(AP=AB\cot15^\circ\), \(AQ=AB\cot22^\circ\). Do đó \(PQ=AB(\cot15^\circ-\cot22^\circ)\Rightarrow AB=\frac{100}{\cot15^\circ-\cot22^\circ}\approx 79{,}56\) m.`, .006), { fig: "ex-hai-dang" }),
],
tl: [
  tl(R`Cho hai tập hợp \(A=[m+1;m+3]\) và \(B=(2m-1;2m)\), với m là tham số thực.`, [
    { q: R`Với \(m=1\), xác định các tập hợp \(A\cap B\) và \(A\cup B\).`, ans: R`\(A\cap B=\varnothing;\ A\cup B=(1;4]\)`,
      s: R`Với \(m=1\): \(A=[2;4]\), \(B=(1;2)\). Vì \(2\notin B\) nên \(A\cap B=\varnothing\) và \(A\cup B=(1;4]\).` },
    { q: R`Tìm tất cả các giá trị của m để \(A\cap B\ne\varnothing\).`, ans: R`\(1<m<4\)`,
      s: R`Ta tìm m để \(A\cap B=\varnothing\): B nằm bên trái A khi \(2m\le m+1\Leftrightarrow m\le 1\); B nằm bên phải A khi \(2m-1\ge m+3\Leftrightarrow m\ge 4\). Vậy \(A\cap B\ne\varnothing\Leftrightarrow 1<m<4\).` }]),
  tl(R`Giải các bài toán sau (mỗi ý 0,5 điểm).`, [
    { q: R`Cho hình vuông ABCD cạnh a. Gọi M là trung điểm của AB, N là điểm đối xứng với C qua D. Tính \(|\overrightarrow{MD}|\) và \(|\overrightarrow{MN}|\).`, ans: R`\(|\overrightarrow{MD}|=\frac{a\sqrt5}{2};\ |\overrightarrow{MN}|=\frac{a\sqrt{13}}{2}\)`,
      s: R`Tam giác MAD vuông tại A: \(MD^2=AD^2+AM^2=a^2+\frac{a^2}{4}\Rightarrow |\overrightarrow{MD}|=\frac{a\sqrt5}{2}\). Qua N kẻ đường thẳng song song với AD cắt đường thẳng AB tại P; ADNP là hình vuông nên \(PN=a\), \(PM=PA+AM=a+\frac a2=\frac{3a}{2}\). Tam giác NPM vuông tại P: \(MN^2=\frac{9a^2}{4}+a^2=\frac{13a^2}{4}\Rightarrow |\overrightarrow{MN}|=\frac{a\sqrt{13}}{2}\).` },
    { q: R`Cho tam giác ABC có \(BC=12\), \(CA=13\) và trung tuyến \(AM=8\). Tính độ dài cạnh AB và diện tích tam giác ABC.`, ans: R`\(AB=\sqrt{31};\ S=\frac{9\sqrt{55}}{2}\approx 33{,}37\)`,
      s: R`Công thức trung tuyến: \(AM^2=\frac{AB^2+AC^2}{2}-\frac{BC^2}{4}\Rightarrow AB^2=2\cdot64-169+\frac{144}{2}=31\Rightarrow AB=\sqrt{31}\). Tam giác AMC có các cạnh 8, 6, 13, nửa chu vi \(p=\frac{27}{2}\); theo Hê-rông \(S_{AMC}=\sqrt{\frac{27}{2}\cdot\frac{11}{2}\cdot\frac{15}{2}\cdot\frac12}=\frac{9\sqrt{55}}{4}\). Vì M là trung điểm BC nên \(S_{ABC}=2S_{AMC}=\frac{9\sqrt{55}}{2}\approx 33{,}37\).` }]),
  tl(R`Một hộ nông dân định trồng dứa và củ đậu trên diện tích 8 ha. Trên mỗi hecta, nếu trồng dứa thì cần 20 công lao động và thu được 3 triệu đồng; nếu trồng củ đậu thì cần 30 công và thu được 4 triệu đồng. Tổng số công lao động không quá 180.`, [
    { q: R`Gọi x, y (ha) lần lượt là diện tích trồng dứa và củ đậu. Viết hệ bất phương trình biểu thị các điều kiện của bài toán và xác định miền nghiệm.`, ans: R`\(\begin{cases}x+y\le 8\\ 2x+3y\le 18\\ x\ge 0,\ y\ge 0\end{cases}\)`,
      s: R`Điều kiện: \(x\ge 0,\ y\ge 0\), \(x+y\le 8\), \(20x+30y\le 180\Leftrightarrow 2x+3y\le 18\). Miền nghiệm là tứ giác OABC với \(O(0;0)\), \(A(8;0)\), \(B(6;2)\) (giao của \(x+y=8\) và \(2x+3y=18\)), \(C(0;6)\).` },
    { q: R`Cần trồng mỗi loại cây trên diện tích bao nhiêu hecta để thu được nhiều tiền nhất?`, ans: R`6 ha dứa và 2 ha củ đậu (thu 26 triệu đồng)`,
      s: R`Số tiền thu được \(T=3x+4y\) (triệu đồng). \(T(O)=0\), \(T(A)=24\), \(T(B)=26\), \(T(C)=24\). Vậy cần trồng 6 ha dứa và 2 ha củ đậu, thu được nhiều nhất 26 triệu đồng.` }]),
] },

/* ======================= ĐỀ SỐ 2 ======================= */
{ id: "d2", title: "Đề số 2",
mc: [
  mc(R`Cho x là số tự nhiên. Mệnh đề phủ định của mệnh đề "Với mọi x chẵn, \(x^2+x\) là số chẵn" là`,
    [R`Tồn tại x chẵn, \(x^2+x\) là số lẻ.`, R`Tồn tại x lẻ, \(x^2+x\) là số lẻ.`, R`Tồn tại x lẻ, \(x^2+x\) là số chẵn.`, R`Với mọi x lẻ, \(x^2+x\) là số lẻ.`],
    R`Phủ định của "\(\forall x\in X,\ P(x)\)" là "\(\exists x\in X,\ \overline{P(x)}\)". Tập X (các số chẵn) giữ nguyên, chỉ phủ định tính chất: "Tồn tại x chẵn, \(x^2+x\) là số lẻ".`),
  mc(R`Mệnh đề nào sau đây đúng?`,
    [R`\(\forall n\in\mathbb N,\ (2n+1)^2-1\) chia hết cho 4.`, R`\(\exists x\in\mathbb R,\ x^2+3=0\).`, R`\(\exists x\in\mathbb R,\ x^4+3x^2+2=0\).`, R`\(\forall x\in\mathbb Z,\ x^5>x^2\).`],
    R`\((2n+1)^2-1=4n^2+4n=4(n^2+n)\) chia hết cho 4 với mọi n. Hai phương trình \(x^2+3=0\), \(x^4+3x^2+2=0\) vô nghiệm vì vế trái luôn dương. Với \(x=0\) thì \(x^5>x^2\) sai.`),
  mc(R`Phần bù của tập hợp \((-\infty;-10)\cup(10;+\infty)\cup\{0\}\) trong \(\mathbb R\) là`,
    [R`\([-10;10]\setminus\{0\}\)`, R`\([-10;10]\)`, R`\((-10;10)\setminus\{0\}\)`, R`\((-10;0)\cup(0;10]\)`],
    R`Phần bù gồm các số thực không thuộc tập đã cho: \(\mathbb R\setminus\left((-\infty;-10)\cup(10;+\infty)\cup\{0\}\right)=[-10;10]\setminus\{0\}\). Hai đầu mút \(-10\) và 10 không thuộc tập đã cho nên thuộc phần bù.`),
  mc(R`Cho m là tham số thực và hai tập hợp \(A=[1-2m;m+3]\), \(B=\{x\in\mathbb R\mid x\ge 8-5m\}\). Tất cả các giá trị của m để \(A\cap B=\varnothing\) là`,
    [R`\(-\frac23\le m<\frac56\)`, R`\(m<\frac56\)`, R`\(m\ge-\frac23\)`, R`\(-\frac23<m\le\frac56\)`],
    R`A là một đoạn nên \(1-2m\le m+3\Leftrightarrow m\ge-\frac23\). \(B=[8-5m;+\infty)\). \(A\cap B=\varnothing\Leftrightarrow m+3<8-5m\Leftrightarrow m<\frac56\). Vậy \(-\frac23\le m<\frac56\).`),
  fx(mc(R`Phần không bị gạch (kể cả bờ) trong hình vẽ là miền nghiệm của bất phương trình nào?`,
    [R`\(2x+y-6\le 0\)`, R`\(2x+y-6\ge 0\)`, R`\(x+2y-6\le 0\)`, R`\(x+2y-6\ge 0\)`],
    R`Bờ là đường thẳng đi qua \((3;0)\) và \((0;6)\): \(2x+y=6\). Miền nghiệm chứa \(O(0;0)\) và \(2\cdot0+0-6\le 0\) đúng, nên đó là miền nghiệm của \(2x+y-6\le 0\).`),
    { fig: () => FigPlane({ x: [-2, 5], y: [-1.5, 7.5], lines: [{ a: 2, b: 1, c: 6, keep: -1 }], hatch: true, tx: [3], ty: [6] }), cap: "Hình vẽ" }),
  mc(R`Giá trị nhỏ nhất của biểu thức \(F=y-x\) trên miền xác định bởi hệ \(\begin{cases}y-2x\le 2\\ 2y-x\ge 4\\ x+y\le 5\end{cases}\) là`,
    [R`\(\min F=1\) khi \(x=2,\ y=3\)`, R`\(\min F=2\) khi \(x=0,\ y=2\)`, R`\(\min F=3\) khi \(x=1,\ y=4\)`, R`\(\min F=0\) khi \(x=0,\ y=0\)`],
    R`Miền nghiệm là tam giác với các đỉnh \(A(0;2)\), \(B(1;4)\), \(C(2;3)\) (giao từng cặp đường thẳng \(y=2x+2\), \(2y=x+4\), \(x+y=5\)). \(F(A)=2\), \(F(B)=3\), \(F(C)=1\). Vậy \(\min F=1\) khi \(x=2,\ y=3\). (Điểm (0; 0) không thuộc miền nghiệm.)`),
  mc(R`Cho x, y thỏa mãn hệ \(\begin{cases}x+2y-100\le 0\\ 2x+y-80\le 0\\ x\ge 0\\ y\ge 0\end{cases}\). Giá trị lớn nhất của \(P=40000x+30000y\) là`,
    [R`2 000 000`, R`2 400 000`, R`1 800 000`, R`1 600 000`],
    R`Miền nghiệm là tứ giác với các đỉnh \(O(0;0),\ A(0;50),\ B(20;40),\ C(40;0)\). \(P(A)=1\,500\,000\), \(P(B)=2\,000\,000\), \(P(C)=1\,600\,000\). Giá trị lớn nhất là 2 000 000.`),
  mc(R`Cho góc α thỏa mãn \(0^\circ<\alpha<90^\circ\) và \(2\cos\alpha+\sqrt2\sin\alpha=2\). Giá trị của \(\cot\alpha\) bằng`,
    [R`\(\frac{\sqrt2}{4}\)`, R`\(\frac{\sqrt5}{4}\)`, R`\(\frac{\sqrt3}{4}\)`, R`\(\frac{\sqrt2}{2}\)`],
    R`\(\sqrt2\sin\alpha=2-2\cos\alpha\Rightarrow 2\sin^2\alpha=4(1-\cos\alpha)^2\Leftrightarrow 2(1-\cos^2\alpha)=4-8\cos\alpha+4\cos^2\alpha\Leftrightarrow 3\cos^2\alpha-4\cos\alpha+1=0\). Vì \(0^\circ<\alpha<90^\circ\) nên \(\cos\alpha\ne1\), suy ra \(\cos\alpha=\frac13\), \(\sin\alpha=\frac{2\sqrt2}{3}\), \(\cot\alpha=\frac{1}{2\sqrt2}=\frac{\sqrt2}{4}\).`),
  mc(R`Cho \(\sin\alpha-\cos\alpha=\frac{1}{\sqrt5}\). Giá trị của \(\sqrt{\sin^4\alpha+\cos^4\alpha}\) bằng`,
    [R`\(\frac{\sqrt{17}}{5}\)`, R`\(\frac{17}{25}\)`, R`\(\frac{\sqrt{15}}{5}\)`, R`\(\frac35\)`],
    R`Bình phương: \(1-2\sin\alpha\cos\alpha=\frac15\Rightarrow\sin\alpha\cos\alpha=\frac25\). \(\sin^4\alpha+\cos^4\alpha=1-2\sin^2\alpha\cos^2\alpha=1-\frac{8}{25}=\frac{17}{25}\). Vậy giá trị cần tìm là \(\frac{\sqrt{17}}{5}\).`),
  mc(R`Tam giác ABC vuông cân tại A và nội tiếp đường tròn tâm O bán kính R. Gọi r là bán kính đường tròn nội tiếp tam giác ABC. Khi đó tỉ số \(\frac Rr\) bằng`,
    [R`\(1+\sqrt2\)`, R`\(\frac{2+\sqrt2}{2}\)`, R`\(\frac{\sqrt2-1}{2}\)`, R`\(\frac{1+\sqrt2}{2}\)`],
    R`Đặt \(AB=AC=a\Rightarrow BC=a\sqrt2\), \(R=\frac{BC}{2}=\frac{a\sqrt2}{2}\). \(p=\frac{a(2+\sqrt2)}{2}\), \(S=\frac{a^2}{2}\Rightarrow r=\frac Sp=\frac{a}{2+\sqrt2}\). Vậy \(\frac Rr=\frac{\sqrt2(2+\sqrt2)}{2}=1+\sqrt2\).`),
  mc(R`Cho hình chữ nhật ABCD tâm O có \(AB=\sqrt3\), \(AD=1\). Gọi \(\vec u\) là vectơ khác \(\vec0\), cùng hướng với \(\overrightarrow{BD}\), khác \(\overrightarrow{BD}\) và có điểm đầu, điểm cuối thuộc tập \(\{A;B;C;D;O\}\). Độ dài của \(\vec u\) bằng`,
    [R`1`, R`2`, R`\(\sqrt3\)`, R`\(\frac{\sqrt3}{2}\)`],
    R`Các vectơ cùng hướng với \(\overrightarrow{BD}\) (khác nó) là \(\overrightarrow{BO}\) và \(\overrightarrow{OD}\). \(BD=\sqrt{AB^2+AD^2}=2\) nên \(|\vec u|=\frac{BD}{2}=1\).`),
  mc(R`Gọi G là trọng tâm của tam giác ABC vuông tại A, có cạnh huyền \(BC=12\). Độ dài của vectơ \(\vec v=\overrightarrow{GB}+\overrightarrow{GC}\) bằng`,
    [R`4`, R`2`, R`\(2\sqrt3\)`, R`8`],
    R`Gọi M là trung điểm BC: \(\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}\). \(GM=\frac13AM=\frac13\cdot\frac{BC}{2}=2\) nên \(|\vec v|=2GM=4\).`),
],
tf: [
  tf(R`Bác Minh có kế hoạch đầu tư không quá 240 triệu đồng vào hai khoản X và Y. Để đạt lợi nhuận thì khoản Y phải đầu tư ít nhất 40 triệu đồng và số tiền đầu tư cho khoản X phải ít nhất gấp ba lần số tiền cho khoản Y. Gọi x, y (triệu đồng) là số tiền đầu tư vào khoản X và khoản Y.`,
    [[R`Ta có hệ bất phương trình \(\begin{cases}x+y\le 240\\ y\ge 40\\ x\ge 3y\end{cases}\).`, true],
     [R`Miền nghiệm của hệ bất phương trình là một tứ giác.`, false],
     [R`Điểm \(C(200;40)\) không thuộc miền nghiệm của hệ.`, false],
     [R`Điểm \(A(180;60)\) là điểm có tung độ lớn nhất thuộc miền nghiệm của hệ.`, true]],
    R`a) Đúng theo đề bài.
b) Miền nghiệm là tam giác ABC với \(A(180;60)\), \(B(120;40)\), \(C(200;40)\). Sai.
c) \(200+40=240\le240\), \(40\ge40\), \(200\ge120\) nên C thuộc miền nghiệm. Sai.
d) Từ \(x\ge3y\) và \(x+y\le240\) suy ra \(4y\le240\Rightarrow y\le60\), dấu bằng tại \(A(180;60)\). Đúng.`),
  fx(tf(R`Cho lục giác đều ABCDEF tâm O (hình vẽ).`,
    [[R`\(\overrightarrow{AB}=\overrightarrow{CD}\).`, false],
     [R`\(\overrightarrow{AB}+\overrightarrow{OD}=\overrightarrow{AC}\).`, true],
     [R`\(\overrightarrow{AB}+\overrightarrow{OC}=\overrightarrow{FC}\).`, true],
     [R`\(\overrightarrow{AB}+\overrightarrow{AE}-\overrightarrow{FD}=\overrightarrow{AF}\).`, true]],
    R`a) \(\overrightarrow{AB}\) và \(\overrightarrow{CD}\) không cùng phương. Sai.
b) BCDO là hình thoi nên \(\overrightarrow{OD}=\overrightarrow{BC}\), suy ra \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\). Đúng.
c) ABCO là hình thoi nên \(\overrightarrow{OC}=\overrightarrow{AB}\); \(2\overrightarrow{AB}=\overrightarrow{FC}\) (FC song song, cùng hướng với AB và \(FC=2AB\)). Đúng.
d) ABDE là hình bình hành nên \(\overrightarrow{AB}+\overrightarrow{AE}=\overrightarrow{AD}\); \(\overrightarrow{AD}-\overrightarrow{FD}=\overrightarrow{AD}+\overrightarrow{DF}=\overrightarrow{AF}\). Đúng.`),
    { fig: () => FigHex(), cap: "Hình vẽ" }),
],
sa: [
  num(R`Cho các tập hợp \(A=(-\infty;m)\) và \(B=[3m-1;3m+3]\). Tìm giá trị nhỏ nhất của m để \(A\subset C_{\mathbb R}B\).`, .5,
    R`\(C_{\mathbb R}B=(-\infty;3m-1)\cup(3m+3;+\infty)\). \(A\subset C_{\mathbb R}B\Leftrightarrow m\le 3m-1\Leftrightarrow m\ge\frac12\). Giá trị nhỏ nhất của m là 0,5.`),
  num(R`Cho tam giác nhọn ABC có \(BC=3\), \(CA=4\) và diện tích \(S=3\sqrt3\). Tính bán kính R của đường tròn ngoại tiếp tam giác ABC (làm tròn đến hàng phần trăm).`, 2.08,
    R`\(S=\frac12ab\sin C\Rightarrow\sin C=\frac{2\cdot3\sqrt3}{12}=\frac{\sqrt3}{2}\), tam giác nhọn nên \(C=60^\circ\). \(c^2=9+16-2\cdot3\cdot4\cdot\frac12=13\). \(R=\frac{c}{2\sin C}=\frac{\sqrt{13}}{\sqrt3}\approx 2{,}08\).`, .006),
  num(R`Cho hệ bất phương trình \(\begin{cases}x+y\ge 5\\ x-2y\le 2\\ y\le 3\end{cases}\). Tìm giá trị nhỏ nhất của tham số m để bất phương trình \(2x-5y+m\ge 0\) nghiệm đúng với mọi cặp số \((x;y)\) thỏa mãn hệ.`, 11,
    R`Miền nghiệm là tam giác với các đỉnh \(A(4;1)\), \(B(8;3)\), \(C(2;3)\). \(2x-5y+m\ge0\Leftrightarrow m\ge 5y-2x\). Đặt \(F=5y-2x\): \(F(A)=-3\), \(F(B)=-1\), \(F(C)=11\). Cần \(m\ge\max F=11\), nên giá trị nhỏ nhất của m là 11.`),
  fx(num(R`Một cái cây mọc thẳng đứng bị gió mạnh làm gãy không hoàn toàn (hai đoạn thân vẫn dính liền nhau như hình vẽ). Đoạn thẳng nối gốc cây A với ngọn cây B (đã chạm đất) dài 6 m, \(\widehat{CAB}=76^\circ\), \(\widehat{CBA}=35^\circ\). Tính chiều cao của cây trước khi bị gãy (đơn vị mét, làm tròn đến hàng phần mười).`, 9.9,
    R`\(\widehat C=180^\circ-76^\circ-35^\circ=69^\circ\). Định lí sin: \(AC=\frac{6\sin35^\circ}{\sin69^\circ}\approx3{,}69\) m, \(BC=\frac{6\sin76^\circ}{\sin69^\circ}\approx6{,}24\) m. Chiều cao cây \(AC+BC\approx 9{,}9\) m.`, .06), { fig: "ex-cay-gay" }),
],
tl: [
  fx(tl(R`Ngày 18/12/2021, một số trung tâm y tế được phân phát vắc xin phòng Covid-19 gồm ba loại: Vero Cell, AstraZeneca và Pfizer. Trong 140 trung tâm y tế, có 7 trung tâm được phát cả 3 loại; 34 trung tâm được phát Vero Cell và AstraZeneca; 22 trung tâm được phát Vero Cell và Pfizer; 19 trung tâm được phát AstraZeneca và Pfizer; 76 trung tâm được phát Vero Cell; 62 trung tâm được phát AstraZeneca và 46 trung tâm được phát Pfizer.`, [
    { q: R`Điền số trung tâm y tế vào từng phần của biểu đồ Ven (hình vẽ).`, ans: R`\(27;\ 16;\ 12;\ 27;\ 15;\ 12;\ 7\)`,
      s: R`Cả ba loại: 7. Chỉ Vero Cell và AstraZeneca: \(34-7=27\); chỉ Vero Cell và Pfizer: \(22-7=15\); chỉ AstraZeneca và Pfizer: \(19-7=12\). Chỉ Vero Cell: \(76-27-15-7=27\); chỉ AstraZeneca: \(62-27-12-7=16\); chỉ Pfizer: \(46-15-12-7=12\).` },
    { q: R`Có bao nhiêu trung tâm y tế không được nhận loại vắc xin nào?`, ans: R`\(24\)`,
      s: R`Số trung tâm nhận ít nhất một loại: \(27+16+12+27+15+12+7=116\) (hoặc \(76+62+46-34-22-19+7=116\)). Số trung tâm không nhận loại nào: \(140-116=24\).` }]), { fig: "ex-vacxin" }),
  fx(tl(R`Giải các bài toán sau (mỗi ý 0,5 điểm).`, [
    { q: R`Cho hai tam giác vuông ABC (vuông tại A) và DBC (vuông tại D) có chung cạnh huyền \(BC=\sqrt2\). Gọi I là trung điểm của BC, biết \(\widehat{AID}=120^\circ\). Tính \(|\overrightarrow{AB}-\overrightarrow{AC}|\) và \(|\overrightarrow{IA}+\overrightarrow{ID}|\).`, ans: R`\(\sqrt2;\ \frac{\sqrt2}{2}\)`,
      s: R`\(|\overrightarrow{AB}-\overrightarrow{AC}|=|\overrightarrow{CB}|=\sqrt2\). IA, ID là trung tuyến ứng với cạnh huyền nên \(IA=ID=\frac{BC}{2}=\frac{\sqrt2}{2}\). Dựng hình bình hành IAED: vì \(IA=ID\) nên IAED là hình thoi, \(\widehat{AID}=120^\circ\Rightarrow\widehat{IAE}=60^\circ\), tam giác IAE đều. Vậy \(|\overrightarrow{IA}+\overrightarrow{ID}|=IE=IA=\frac{\sqrt2}{2}\).` },
    { q: R`Vịnh Vân Phong (Khánh Hòa) có con đường đi bộ xuyên biển nối từ Hòn Quạ đến đảo Điệp Sơn. Một du khách muốn chèo thuyền kayak từ vị trí C trên Hòn Quạ đến vị trí B trên Bè, thay vì đi bộ qua con đường đến vị trí A rồi mới đến B. Biết \(AB=0{,}4\) km, \(AC=0{,}6\) km, góc giữa AB và AC là \(60^\circ\), vận tốc chèo thuyền không đổi là 4 km/h. Người đó mất bao nhiêu phút (làm tròn đến hàng phần mười)?`, ans: R`khoảng 7,9 phút`,
      s: R`Định lí côsin: \(BC^2=0{,}4^2+0{,}6^2-2\cdot0{,}4\cdot0{,}6\cdot\cos60^\circ=0{,}28\Rightarrow BC\approx0{,}529\) km. Thời gian \(t=\frac{BC}{4}\approx0{,}132\) giờ \(\approx 7{,}9\) phút. (Tài liệu gốc quên lấy căn, ghi BC = 0,28 km và 4,2 phút.)` }]), { fig: "ex-van-phong", figSol: "ex-hai-tg-vuong" }),
  tl(R`Một học viên lớp pha chế được dùng tối đa 28 g hương liệu, 8 lít nước và 240 g đường để pha cocktail cam và cocktail táo. Pha 1 lít cocktail cam cần 30 g đường, 1 lít nước và 1 g hương liệu; pha 1 lít cocktail táo cần 10 g đường, 1 lít nước và 4 g hương liệu. Mỗi lít cocktail cam đạt yêu cầu được 60 điểm, mỗi lít cocktail táo được 80 điểm.`, [
    { q: R`Gọi x, y lần lượt là số lít cocktail cam và táo. Viết hệ bất phương trình biểu thị các điều kiện và xác định miền nghiệm.`, ans: R`\(\begin{cases}3x+y\le 24\\ x+y\le 8\\ x+4y\le 28\\ x\ge0,\ y\ge0\end{cases}\)`,
      s: R`Đường: \(30x+10y\le240\Leftrightarrow3x+y\le24\); nước: \(x+y\le8\); hương liệu: \(x+4y\le28\); \(x,y\ge0\). Miền nghiệm là tứ giác OABC với \(O(0;0)\), \(A(0;7)\), \(B\left(\frac43;\frac{20}{3}\right)\) (giao của \(x+y=8\) và \(x+4y=28\)), \(C(8;0)\).` },
    { q: R`Cần pha bao nhiêu lít mỗi loại để đạt nhiều điểm nhất?`, ans: R`\(\frac43\) lít cam và \(\frac{20}{3}\) lít táo`,
      s: R`Số điểm \(F=60x+80y\): \(F(O)=0\), \(F(A)=560\), \(F(B)=80+\frac{1600}{3}=\frac{1840}{3}\approx613{,}3\), \(F(C)=480\). Vậy cần pha \(\frac43\) lít cocktail cam và \(\frac{20}{3}\) lít cocktail táo.` }]),
] },

/* ======================= ĐỀ SỐ 3 ======================= */
{ id: "d3", title: "Đề số 3",
mc: [
  mc(R`Cho định lí "Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau". Mệnh đề nào sau đây đúng?`,
    [R`Hai tam giác bằng nhau là điều kiện đủ để diện tích của chúng bằng nhau.`, R`Hai tam giác bằng nhau là điều kiện cần để diện tích của chúng bằng nhau.`, R`Hai tam giác bằng nhau là điều kiện cần và đủ để chúng có diện tích bằng nhau.`, R`Hai tam giác có diện tích bằng nhau là điều kiện đủ để chúng bằng nhau.`],
    R`Định lí dạng \(P\Rightarrow Q\): P ("hai tam giác bằng nhau") là điều kiện đủ để có Q, còn Q ("diện tích bằng nhau") là điều kiện cần để có P. Mệnh đề đảo sai nên không có "cần và đủ".`),
  mc(R`Trong các mệnh đề sau, mệnh đề nào đúng?`,
    [R`Phương trình \(x^2+7x-2=0\) có hai nghiệm trái dấu.`, R`\(6\sqrt2\) là số hữu tỉ.`, R`Phương trình \(x^2+x+7=0\) có nghiệm.`, R`17 là số chẵn.`],
    R`Phương trình \(x^2+7x-2=0\) có \(a\cdot c=1\cdot(-2)<0\) nên có hai nghiệm trái dấu. \(6\sqrt2\) là số vô tỉ; \(x^2+x+7=0\) có \(\Delta=1-28<0\) nên vô nghiệm; 17 là số lẻ.`),
  mc(R`Cho hai tập hợp \(A=[-4;1]\) và \(B=[-3;m]\), với \(m>-3\). Tất cả các giá trị của m để \(A\cup B=A\) là`,
    [R`\(-3<m\le 1\)`, R`\(m\le 1\)`, R`\(-3<m<1\)`, R`\(m\ge 1\)`],
    R`\(A\cup B=A\Leftrightarrow B\subset A\Leftrightarrow m\le 1\) (vì \(-3\ge-4\)). Kết hợp điều kiện \(m>-3\): \(-3<m\le 1\).`),
  mc(R`Cho hai tập hợp \(A=\{x\in\mathbb R\mid |mx-3|=mx-3\}\) và \(B=\{x\in\mathbb R\mid x^2-4=0\}\). Tất cả các giá trị của m để \(B\setminus A=B\) là`,
    [R`\(-\frac32<m<\frac32\)`, R`\(m<\frac32\)`, R`\(-\frac32\le m\le\frac32\)`, R`\(m<-\frac32\) hoặc \(m>\frac32\)`],
    R`\(x\in A\Leftrightarrow mx-3\ge 0\); \(B=\{-2;2\}\). \(B\setminus A=B\Leftrightarrow B\cap A=\varnothing\Leftrightarrow\) cả 2 và \(-2\) đều không thuộc A \(\Leftrightarrow 2m-3<0\) và \(-2m-3<0\Leftrightarrow-\frac32<m<\frac32\).`),
  fx(mc(R`Đường thẳng \(d:\ 2x-y=2\) chia mặt phẳng tọa độ thành hai miền I và II như hình vẽ. Miền nghiệm của bất phương trình \(2x-y\ge 2\) là`,
    [R`Nửa mặt phẳng I kể cả bờ d.`, R`Nửa mặt phẳng I bỏ đi đường thẳng d.`, R`Nửa mặt phẳng II kể cả bờ d.`, R`Nửa mặt phẳng II bỏ đi đường thẳng d.`],
    R`Thay \(O(0;0)\): \(2\cdot0-0\ge2\) sai, nên miền nghiệm là nửa mặt phẳng không chứa O, tức là miền I; dấu "≥" nên lấy cả bờ d.`),
    { fig: () => FigPlane({ x: [-3, 4], y: [-3.5, 4], lines: [{ a: 2, b: -1, c: 2, lab: "d", labAt: [2.6, 3.2] }], tx: [1], ty: [-2], marks: [[2.6, -1.6, "I"], [-1.5, 1.6, "II"]] }), cap: "Hình vẽ" }),
  mc(R`Giá trị nhỏ nhất của biểu thức \(F(x;y)=4x+3y\) trên miền xác định bởi hệ \(\begin{cases}0\le x\le 10\\ 0\le y\le 9\\ 2x+y\ge 14\\ 2x+5y\ge 30\end{cases}\) là`,
    [R`32`, R`23`, R`26`, R`67`],
    R`Miền nghiệm là tứ giác với các đỉnh \(A(5;4)\), \(B\left(\frac52;9\right)\), \(C(10;9)\), \(D(10;2)\). \(F(A)=32\), \(F(B)=37\), \(F(C)=67\), \(F(D)=46\). Vậy \(F_{\min}=32\).`),
  mc(R`Một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipit trong thức ăn mỗi ngày. Mỗi kg thịt bò chứa 800 đơn vị protein và 200 đơn vị lipit; mỗi kg thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipit. Gia đình chỉ mua nhiều nhất 1,6 kg thịt bò và 1,1 kg thịt lợn; giá mỗi kg thịt bò là 250 000 đồng, mỗi kg thịt lợn là 85 000 đồng. Chi phí ít nhất để mua thịt mỗi ngày là`,
    [R`168 500 đồng`, R`209 500 đồng`, R`417 000 đồng`, R`493 500 đồng`],
    R`Hệ: \(8x+6y\ge9\), \(x+2y\ge2\), \(0\le x\le1{,}6\), \(0\le y\le1{,}1\). Miền nghiệm là tứ giác với các đỉnh \((0{,}6;0{,}7)\), \((1{,}6;0{,}2)\), \((1{,}6;1{,}1)\), \((0{,}3;1{,}1)\). Chi phí \(T=250x+85y\) (nghìn đồng) lần lượt bằng 209,5; 417; 493,5; 168,5. Ít nhất 168 500 đồng khi mua 0,3 kg thịt bò và 1,1 kg thịt lợn.`),
  mc(R`Cho \(\cos\alpha=-\frac23\). Giá trị của \(P=\frac{\cot\alpha+3\tan\alpha}{2\cot\alpha+\tan\alpha}\) bằng`,
    [R`\(\frac{19}{13}\)`, R`\(-\frac{19}{13}\)`, R`\(\frac{25}{13}\)`, R`\(-\frac{25}{13}\)`],
    R`Nhân cả tử và mẫu với \(\sin\alpha\cos\alpha\): \(P=\frac{\cos^2\alpha+3\sin^2\alpha}{2\cos^2\alpha+\sin^2\alpha}\). Với \(\cos^2\alpha=\frac49\), \(\sin^2\alpha=\frac59\): \(P=\frac{\frac49+\frac{15}{9}}{\frac89+\frac59}=\frac{19}{13}\).`),
  mc(R`Cho \(\cot\alpha=5\). Giá trị của \(P=2\cos^2\alpha+5\sin\alpha\cos\alpha+1\) bằng`,
    [R`\(\frac{101}{26}\)`, R`\(\frac{10}{26}\)`, R`\(\frac{100}{26}\)`, R`\(\frac{50}{26}\)`],
    R`\(P=\sin^2\alpha\,(2\cot^2\alpha+5\cot\alpha)+1=\frac{2\cot^2\alpha+5\cot\alpha}{1+\cot^2\alpha}+1=\frac{50+25}{26}+1=\frac{101}{26}\).`),
  fx(mc(R`Trên nóc một tòa nhà có một cột ăng-ten cao 5 m. Từ vị trí quan sát A cao 7 m so với mặt đất, có thể nhìn thấy đỉnh B và chân C của cột ăng-ten dưới góc \(50^\circ\) và \(40^\circ\) so với phương nằm ngang (hình vẽ). Chiều cao của tòa nhà gần nhất với giá trị nào sau đây?`,
    [R`19 m`, R`12 m`, R`24 m`, R`29 m`],
    R`\(\widehat{BAC}=10^\circ\), \(\widehat{ABD}=90^\circ-50^\circ=40^\circ\). Định lí sin trong tam giác ABC: \(AC=\frac{BC\sin40^\circ}{\sin10^\circ}=\frac{5\sin40^\circ}{\sin10^\circ}\approx18{,}5\) m. Tam giác vuông ADC: \(CD=AC\sin40^\circ\approx11{,}9\) m. Chiều cao tòa nhà \(CH=CD+DH\approx11{,}9+7=18{,}9\approx19\) m.`), { fig: "ex-angten" }),
  mc(R`Cho lục giác đều ABCDEF tâm O. Có bao nhiêu vectơ đối của vectơ \(\overrightarrow{OA}\) có điểm đầu và điểm cuối lấy từ các điểm A, B, C, D, E, F, O?`,
    [R`4`, R`3`, R`5`, R`6`],
    R`Vectơ đối của \(\overrightarrow{OA}\) cùng độ dài, ngược hướng với nó: \(\overrightarrow{AO},\ \overrightarrow{OD},\ \overrightarrow{BC},\ \overrightarrow{FE}\). Có 4 vectơ.`),
  mc(R`Cho hình thoi ABCD có \(AC=2a\) và \(BD=a\). Độ dài \(|\overrightarrow{AC}+\overrightarrow{BD}|\) bằng`,
    [R`\(a\sqrt5\)`, R`\(3a\)`, R`\(a\sqrt3\)`, R`\(5a\)`],
    R`Gọi O là tâm, M là trung điểm CD: \(\overrightarrow{AC}+\overrightarrow{BD}=2\overrightarrow{OC}+2\overrightarrow{OD}=4\overrightarrow{OM}\). \(OM=\frac{CD}{2}=\frac12\sqrt{a^2+\frac{a^2}{4}}=\frac{a\sqrt5}{4}\). Vậy độ dài bằng \(a\sqrt5\).`),
],
tf: [
  tf(R`Cho hai tập hợp \(A=[m+1;2m-1]\) và \(B=(0;6)\), với \(m>2\).`,
    [[R`Khi \(m=3\) thì \(A\subset B\).`, true],
     [R`\(A\subset B\) khi và chỉ khi \(2<m<\frac72\).`, true],
     [R`Có đúng hai giá trị nguyên của m để \(A\subset B\).`, false],
     [R`\(A\cap B=\varnothing\) khi và chỉ khi \(m\ge 5\).`, true]],
    R`a) \(m=3\): \(A=[4;5]\subset(0;6)\). Đúng.
b) \(A\subset B\Leftrightarrow m+1>0\) và \(2m-1<6\Leftrightarrow -1<m<\frac72\); kết hợp \(m>2\): \(2<m<\frac72\). Đúng.
c) Chỉ có \(m=3\). Sai.
d) Với \(m>2\) thì \(2m-1>0\), nên \(A\cap B=\varnothing\Leftrightarrow m+1\ge 6\Leftrightarrow m\ge5\). Đúng.`),
  tf(R`Cho hình bình hành ABCD. Gọi M, N lần lượt là trung điểm của BC và AD.`,
    [[R`\(\overrightarrow{MC}=\overrightarrow{AN}\).`, true],
     [R`\(\overrightarrow{NC}+\overrightarrow{MC}=\overrightarrow{AN}\).`, false],
     [R`\(\overrightarrow{AM}+\overrightarrow{CD}=\overrightarrow{BM}\).`, true],
     [R`\(\overrightarrow{AM}+\overrightarrow{AN}=\overrightarrow{AB}+\overrightarrow{AD}\).`, true]],
    R`a) \(\overrightarrow{MC}=\frac12\overrightarrow{BC}=\frac12\overrightarrow{AD}=\overrightarrow{AN}\). Đúng.
b) \(\overrightarrow{NC}+\overrightarrow{MC}=\overrightarrow{NC}+\overrightarrow{AN}=\overrightarrow{AC}\ne\overrightarrow{AN}\). Sai.
c) \(\overrightarrow{CD}=\overrightarrow{BA}\) nên \(\overrightarrow{AM}+\overrightarrow{CD}=\overrightarrow{BA}+\overrightarrow{AM}=\overrightarrow{BM}\). Đúng.
d) \(\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{BM}=\overrightarrow{AB}+\frac12\overrightarrow{AD}\), \(\overrightarrow{AN}=\frac12\overrightarrow{AD}\), cộng lại được \(\overrightarrow{AB}+\overrightarrow{AD}\). Đúng.`),
],
sa: [
  num(R`Lớp 10A có 35 học sinh làm bài kiểm tra Toán gồm 3 bài toán. Có 20 em giải được bài thứ nhất, 14 em giải được bài thứ hai, 10 em giải được bài thứ ba; 5 em giải được bài thứ hai và bài thứ ba, 2 em giải được bài thứ nhất và bài thứ hai, 6 em giải được bài thứ nhất và bài thứ ba; chỉ có 1 học sinh giải được cả ba bài. Hỏi có bao nhiêu học sinh không giải được bài nào?`, 3,
    R`Số học sinh giải được ít nhất một bài: \(20+14+10-2-5-6+1=32\). Số học sinh không giải được bài nào: \(35-32=3\).`),
  fx(num(R`Cho ba lực \(\vec F_1=\overrightarrow{MA}\), \(\vec F_2=\overrightarrow{MB}\), \(\vec F_3=\overrightarrow{MC}\) cùng tác động vào một ô tô tại điểm M và ô tô đứng yên. Biết cường độ hai lực \(\vec F_1,\ \vec F_2\) đều bằng 25 N và \(\widehat{AMB}=60^\circ\) (hình vẽ). Tính cường độ của lực \(\vec F_3\) (đơn vị N, làm tròn đến hàng phần mười).`, 43.3,
    R`\(\vec F_1+\vec F_2=\overrightarrow{MD}\) với AMBD là hình bình hành (hình thoi, vì \(MA=MB\)). Tam giác MAB đều cạnh 25 nên \(MD=2\cdot\frac{25\sqrt3}{2}=25\sqrt3\). Ô tô đứng yên nên \(\vec F_3=-(\vec F_1+\vec F_2)\), suy ra \(|\vec F_3|=25\sqrt3\approx43{,}3\) N.`, .06), { fig: "ex-o-to" }),
  num(R`Trong mặt phẳng Oxy, cho tứ giác ABCD với \(A(-3;0)\), \(B(0;2)\), \(C(3;1)\), \(D(3;-2)\). Tìm giá trị lớn nhất của m để điểm \(M(m;m-1)\) nằm trong tứ giác ABCD (kể cả 4 cạnh).`, 2.25,
    R`Tứ giác (kể cả cạnh) là miền nghiệm của hệ \(2x-3y+6\ge0\) (bờ AB), \(x+3y-6\le0\) (bờ BC), \(x\le3\) (bờ CD), \(x+3y+3\ge0\) (bờ DA). Thay \(M(m;m-1)\): \(m\le9\), \(4m-9\le0\), \(m\le3\), \(4m\ge0\). Suy ra \(0\le m\le\frac94\). Giá trị lớn nhất là 2,25.`, .006),
  fx(num(R`Để đo chiều cao CD của tháp Chàm Po Klong Garai (Ninh Thuận), người ta lấy hai điểm A, B trên mặt đất cách nhau 12 m, thẳng hàng với chân C của tháp và đặt hai giác kế có chân cao 1,3 m. Gọi D là đỉnh tháp, \(A_1, B_1\) là đầu hai giác kế, thẳng hàng với điểm \(C_1\) trên CD. Đo được \(\widehat{DA_1C_1}=49^\circ\) và \(\widehat{DB_1C_1}=35^\circ\) (hình vẽ). Tính chiều cao CD của tháp (đơn vị mét, làm tròn đến hàng phần trăm).`, 22.77,
    R`\(\widehat{A_1DB_1}=49^\circ-35^\circ=14^\circ\). Định lí sin trong tam giác \(A_1DB_1\): \(A_1D=\frac{12\sin35^\circ}{\sin14^\circ}\approx28{,}45\) m. Tam giác \(C_1A_1D\) vuông tại \(C_1\): \(C_1D=A_1D\sin49^\circ\approx21{,}47\) m. Vậy \(CD=C_1D+1{,}3\approx22{,}77\) m.`, .006), { fig: "ex-po-klong" }),
],
tl: [
  tl(R`Cho tập hợp \(A=(m;m+2]\) và \(B=\{x\in\mathbb R\mid -3<x-1<5\}\), với m là tham số thực.`, [
    { q: R`Viết tập hợp B dưới dạng khoảng và xác định \(C_{\mathbb R}B\).`, ans: R`\(B=(-2;6);\ C_{\mathbb R}B=(-\infty;-2]\cup[6;+\infty)\)`,
      s: R`\(-3<x-1<5\Leftrightarrow-2<x<6\) nên \(B=(-2;6)\). \(C_{\mathbb R}B=\mathbb R\setminus B=(-\infty;-2]\cup[6;+\infty)\).` },
    { q: R`Tìm tất cả các giá trị của m để \(A\cap B\ne\varnothing\).`, ans: R`\(-4<m<6\)`,
      s: R`\(A\cap B=\varnothing\Leftrightarrow m+2\le-2\) hoặc \(m\ge6\Leftrightarrow m\le-4\) hoặc \(m\ge6\). Vậy \(A\cap B\ne\varnothing\Leftrightarrow-4<m<6\).` }]),
  fx(tl(R`Giải các bài toán sau (mỗi ý 0,5 điểm).`, [
    { q: R`Cho tam giác ABC vuông tại A có \(AB=1\), \(AC=2\). Gọi I là trung điểm của AB và N là điểm thỏa mãn \(\overrightarrow{CN}=\overrightarrow{CA}+\overrightarrow{CB}+\overrightarrow{CI}\). Tính \(|\overrightarrow{AC}-\overrightarrow{AB}|\) và \(|\overrightarrow{CN}|\).`, ans: R`\(\sqrt5;\ \frac{3\sqrt{17}}{2}\approx 6{,}18\)`,
      s: R`\(|\overrightarrow{AC}-\overrightarrow{AB}|=|\overrightarrow{BC}|=\sqrt{1+4}=\sqrt5\). Vì I là trung điểm AB nên \(\overrightarrow{CA}+\overrightarrow{CB}=2\overrightarrow{CI}\), do đó \(\overrightarrow{CN}=3\overrightarrow{CI}\). \(CI=\sqrt{AC^2+AI^2}=\sqrt{4+\frac14}=\frac{\sqrt{17}}{2}\). Vậy \(|\overrightarrow{CN}|=\frac{3\sqrt{17}}{2}\approx6{,}18\).` },
    { q: R`Để đo chiều cao AB của một tòa tháp (B là chân tháp, A là đỉnh tháp) mà không đến được chân tháp, người ta chọn hai điểm C, D cách nhau 30 m sao cho B, D, C thẳng hàng (D nằm giữa B và C) rồi đo được \(\widehat{BCA}=43^\circ\), \(\widehat{BDA}=67^\circ\) (hình vẽ). Tính chiều cao AB của tháp (làm tròn đến hàng phần trăm).`, ans: R`khoảng 46,30 m`,
      s: R`Trong tam giác ACD: \(\widehat{CAD}=67^\circ-43^\circ=24^\circ\). Định lí sin: \(AD=\frac{CD\sin43^\circ}{\sin24^\circ}=\frac{30\sin43^\circ}{\sin24^\circ}\approx50{,}30\) m. Tam giác ABD vuông tại B: \(AB=AD\sin67^\circ\approx46{,}30\) m.` }]), { fig: () => FigTower() }),
  tl(R`Một xí nghiệp sản xuất hai loại sản phẩm I và II. Một tấn sản phẩm I lãi 3 triệu đồng, một tấn sản phẩm II lãi 2,4 triệu đồng. Sản xuất 1 tấn sản phẩm I cần dùng máy \(M_1\) trong 4 giờ và máy \(M_2\) trong 2 giờ; sản xuất 1 tấn sản phẩm II cần dùng máy \(M_1\) trong 1,5 giờ và máy \(M_2\) trong 3,5 giờ. Mỗi máy có thể sản xuất đồng thời hai loại sản phẩm; máy \(M_1\) làm việc không quá 7 giờ một ngày, máy \(M_2\) làm việc không quá 6 giờ một ngày.`, [
    { q: R`Gọi x, y (tấn) là khối lượng sản phẩm I, II sản xuất trong một ngày. Viết hệ bất phương trình và xác định miền nghiệm.`, ans: R`\(\begin{cases}8x+3y\le 14\\ 4x+7y\le 12\\ x\ge0,\ y\ge0\end{cases}\)`,
      s: R`Máy \(M_1\): \(4x+1{,}5y\le7\Leftrightarrow8x+3y\le14\); máy \(M_2\): \(2x+3{,}5y\le6\Leftrightarrow4x+7y\le12\); \(x,y\ge0\). Miền nghiệm là tứ giác OABC với \(O(0;0)\), \(A\left(0;\frac{12}{7}\right)\), \(B\left(\frac{31}{22};\frac{10}{11}\right)\), \(C\left(\frac74;0\right)\).` },
    { q: R`Lập kế hoạch sản xuất trong ngày để tổng số tiền lãi lớn nhất.`, ans: R`\(x=\frac{31}{22},\ y=\frac{10}{11}\); lãi khoảng 6,41 triệu đồng`,
      s: R`Tiền lãi \(F=3x+2{,}4y\) (triệu đồng): \(F(A)\approx4{,}11\), \(F(B)=\frac{93}{22}+\frac{24}{11}=\frac{141}{22}\approx6{,}41\), \(F(C)=5{,}25\). Vậy mỗi ngày sản xuất \(\frac{31}{22}\) tấn sản phẩm I và \(\frac{10}{11}\) tấn sản phẩm II thì lãi lớn nhất, khoảng 6,41 triệu đồng.` }]),
] },

/* ======================= ĐỀ SỐ 4 ======================= */
{ id: "d4", title: "Đề số 4",
mc: [
  mc(R`Mệnh đề phủ định của mệnh đề "\(\exists x\in\mathbb Q:\ 2x^2-5x+2=0\)" là`,
    [R`"\(\forall x\in\mathbb Q:\ 2x^2-5x+2\ne 0\)"`, R`"\(\exists x\in\mathbb Q:\ 2x^2-5x+2>0\)"`, R`"\(\exists x\in\mathbb Q:\ 2x^2-5x+2\ne 0\)"`, R`"\(\forall x\in\mathbb Q:\ 2x^2-5x+2=0\)"`],
    R`Phủ định của "\(\exists x\in X,\ P(x)\)" là "\(\forall x\in X,\ \overline{P(x)}\)", và phủ định của dấu "=" là dấu "≠".`),
  mc(R`Trong các mệnh đề sau, mệnh đề nào là định lí?`,
    [R`\(\forall x\in\mathbb R,\ x>2\Rightarrow x^2>4\)`, R`\(\forall x\in\mathbb R,\ x>-2\Rightarrow x^2>4\)`, R`\(\forall x\in\mathbb R,\ x^2>4\Rightarrow x>2\)`, R`Nếu a + b chia hết cho 3 thì a, b đều chia hết cho 3.`],
    R`Định lí là mệnh đề đúng. Với \(x>2\) thì \(x^2>4\) đúng. Các mệnh đề khác sai: \(x=0>-2\) nhưng \(0^2<4\); \(x=-3\) có \(x^2>4\) nhưng \(x<2\); \(1+2=3\) chia hết cho 3 nhưng 1, 2 không chia hết cho 3.`),
  mc(R`Cho hai tập hợp \(A=[2;+\infty)\) và \(B=\left(-\infty;\frac52\right)\). Khi đó \((A\cap B)\cup(B\setminus A)\) là`,
    [R`\(\left(-\infty;\frac52\right)\)`, R`\(\left[2;\frac52\right)\)`, R`\((-\infty;2)\)`, R`\(\mathbb R\)`],
    R`\(A\cap B=\left[2;\frac52\right)\), \(B\setminus A=(-\infty;2)\). Hợp của hai tập là \(\left(-\infty;\frac52\right)=B\). (Tổng quát: \((A\cap B)\cup(B\setminus A)=B\).)`),
  mc(R`Cho các tập hợp khác rỗng \(A=(-\infty;m)\) và \(B=(2m-2;2m+2)\). Tất cả các giá trị của m để \(C_{\mathbb R}A\cap B\ne\varnothing\) là`,
    [R`\(m>-2\)`, R`\(m\ge-2\)`, R`\(m<-2\)`, R`\(m\le-2\)`],
    R`\(C_{\mathbb R}A=[m;+\infty)\). \(C_{\mathbb R}A\cap B\ne\varnothing\Leftrightarrow 2m+2>m\Leftrightarrow m>-2\).`),
  fx(mc(R`Phần tô đậm (kể cả bờ) trong hình vẽ biểu diễn miền nghiệm của bất phương trình nào?`,
    [R`\(2x-y\ge 3\)`, R`\(2x-y\le 3\)`, R`\(x-2y\ge 3\)`, R`\(x-2y\le 3\)`],
    R`Bờ đi qua \(\left(\frac32;0\right)\) và \((0;-3)\) nên có phương trình \(2x-y=3\). \(O(0;0)\) không thuộc phần tô đậm và \(2\cdot0-0\ge3\) sai, nên phần tô đậm là miền nghiệm của \(2x-y\ge3\).`),
    { fig: () => FigPlane({ x: [-2, 4.5], y: [-4, 3.5], lines: [{ a: 2, b: -1, c: 3, keep: 1 }], fill: true, tx: [1.5], ty: [-3], txl: { 1.5: "3/2" } }), cap: "Hình vẽ" }),
  fx(mc(R`Phần không bị gạch (không kể bờ) trong hình vẽ là miền nghiệm của hệ bất phương trình nào?`,
    [R`\(\begin{cases}x-2y<0\\ x+3y>-2\end{cases}\)`, R`\(\begin{cases}x-2y\le 0\\ x+3y\ge-2\end{cases}\)`, R`\(\begin{cases}x-2y>0\\ x+3y>-2\end{cases}\)`, R`\(\begin{cases}x-2y<0\\ x+3y<-2\end{cases}\)`],
    R`Hai bờ là \(x-2y=0\) (qua O và \((2;1)\)) và \(x+3y=-2\) (qua \((-2;0)\) và \((1;-1)\)), vẽ nét đứt nên không kể bờ. Điểm \(M(0;1)\) thuộc miền nghiệm: \(0-2<0\) và \(0+3>-2\). Vậy hệ là \(x-2y<0,\ x+3y>-2\).`),
    { fig: () => FigPlane({ x: [-3.5, 3.5], y: [-2.5, 3], lines: [{ a: 1, b: -2, c: 0, keep: -1, dash: true }, { a: 1, b: 3, c: -2, keep: 1, dash: true }], hatch: true, tx: [-2, 2], ty: [1] }), cap: "Hình vẽ" }),
  mc(R`Mỗi lạng thịt bò chứa 26 g protein, mỗi lạng cá chứa 22 g protein. Một người đàn ông cần từ 56 g đến 91 g protein mỗi ngày; theo lời khuyên của bác sĩ, không nên ăn thịt nhiều hơn cá. Gọi x, y lần lượt là số lạng thịt bò, số lạng cá người đó ăn trong một ngày. Cặp số \((x;y)\) nào sau đây thỏa mãn các yêu cầu trên?`,
    [R`\((1;2)\)`, R`\((2;1)\)`, R`\((1;1)\)`, R`\((2;3)\)`],
    R`Hệ: \(56\le26x+22y\le91\), \(x\le y\), \(x,y\ge0\). \((1;2)\): \(26+44=70\) và \(1\le2\), thỏa mãn. \((2;1)\) vi phạm \(x\le y\); \((1;1)\) cho 48 g < 56 g; \((2;3)\) cho 118 g > 91 g.`),
  mc(R`Cho tam giác ABC. Giá trị của biểu thức \(P=\frac{\sin^3\frac B2}{\cos\frac{A+C}{2}}+\frac{\cos^3\frac B2}{\sin\frac{A+C}{2}}-\frac{\cos(A+C)}{\sin B}\cdot\tan B\) bằng`,
    [R`2`, R`1`, R`0`, R`3`],
    R`Vì \(\frac{A+C}{2}=90^\circ-\frac B2\) nên \(\cos\frac{A+C}{2}=\sin\frac B2\), \(\sin\frac{A+C}{2}=\cos\frac B2\); \(\cos(A+C)=-\cos B\). Do đó \(P=\sin^2\frac B2+\cos^2\frac B2+\frac{\cos B}{\sin B}\cdot\frac{\sin B}{\cos B}=1+1=2\).`),
  mc(R`Cho \(\sin\alpha+\cos\alpha=a\). Giá trị của \(\sin\alpha\cos\alpha\) bằng`,
    [R`\(\frac{a^2-1}{2}\)`, R`\(a^2\)`, R`\(2a\)`, R`\(\frac{a^2+1}{2}\)`],
    R`Bình phương hai vế: \(\sin^2\alpha+\cos^2\alpha+2\sin\alpha\cos\alpha=a^2\Rightarrow 1+2\sin\alpha\cos\alpha=a^2\Rightarrow\sin\alpha\cos\alpha=\frac{a^2-1}{2}\).`),
  fx(mc(R`Từ hai vị trí A và B của một tòa nhà, người ta quan sát đỉnh C của một ngọn núi. Biết độ cao \(AB=70\) m, phương nhìn AC tạo với phương nằm ngang góc \(30^\circ\), phương nhìn BC tạo với phương nằm ngang góc \(15^\circ30'\) (hình vẽ). Ngọn núi có độ cao so với mặt đất gần nhất với giá trị nào sau đây?`,
    [R`135 m`, R`234 m`, R`165 m`, R`195 m`],
    R`Tam giác ABC có \(\widehat{CAB}=60^\circ\), \(\widehat{ABC}=105^\circ30'\), suy ra \(\widehat C=14^\circ30'\). Định lí sin: \(AC=\frac{70\sin105^\circ30'}{\sin14^\circ30'}\approx269{,}4\) m. Tam giác vuông ACH có góc \(30^\circ\) tại A nên \(CH=\frac{AC}{2}\approx134{,}7\approx135\) m.`), { fig: "ex-nui-70" }),
  mc(R`Cho \(\overrightarrow{AB}\ne\vec0\) và một điểm C. Có bao nhiêu điểm D thỏa mãn \(|\overrightarrow{AB}|=|\overrightarrow{CD}|\)?`,
    [R`Vô số`, R`1`, R`2`, R`Không có điểm nào`],
    R`\(|\overrightarrow{AB}|=|\overrightarrow{CD}|\Leftrightarrow CD=AB\). Tập hợp các điểm D là đường tròn tâm C bán kính AB, nên có vô số điểm D. (Nếu đề hỏi \(\overrightarrow{AB}=\overrightarrow{CD}\) thì chỉ có 1 điểm.)`),
  mc(R`Cho tam giác ABC. Tập hợp tất cả các điểm M thỏa mãn \(|\overrightarrow{MB}-\overrightarrow{MC}|=|\overrightarrow{BM}-\overrightarrow{BA}|\) là`,
    [R`đường tròn tâm A, bán kính BC.`, R`đường thẳng AB.`, R`đường trung trực của đoạn BC.`, R`đường thẳng qua A và song song với BC.`],
    R`\(\overrightarrow{MB}-\overrightarrow{MC}=\overrightarrow{CB}\), \(\overrightarrow{BM}-\overrightarrow{BA}=\overrightarrow{AM}\). Đẳng thức trở thành \(AM=BC\): M thuộc đường tròn tâm A, bán kính BC.`),
],
tf: [
  tf(R`Bà Lan dùng hai loại thực phẩm X và Y cho chế độ ăn kiêng. Mỗi gói X chứa 20 đơn vị canxi, 20 đơn vị sắt, 10 đơn vị vitamin B; mỗi gói Y chứa 20 đơn vị canxi, 10 đơn vị sắt, 20 đơn vị vitamin B. Mỗi ngày cần tối thiểu 240 đơn vị canxi, 160 đơn vị sắt, 140 đơn vị vitamin B và không dùng quá 12 gói mỗi loại. Gọi x, y là số gói X, Y dùng mỗi ngày.`,
    [[R`Các điều kiện được mô tả bởi hệ \(\begin{cases}x+y\ge 12\\ 2x+y\ge 16\\ x+2y\ge 14\\ 0\le x\le 12\\ 0\le y\le 12\end{cases}\).`, true],
     [R`Miền nghiệm của hệ là một ngũ giác.`, true],
     [R`Biết một gói X giá 20 000 đồng, một gói Y giá 25 000 đồng. Để chi phí ít nhất, bà Lan cần dùng 10 gói X và 2 gói Y mỗi ngày.`, true],
     [R`Điểm \((10;8)\) không thuộc miền nghiệm của hệ.`, false]],
    R`a) Canxi: \(20x+20y\ge240\Leftrightarrow x+y\ge12\); sắt: \(20x+10y\ge160\Leftrightarrow2x+y\ge16\); vitamin B: \(10x+20y\ge140\Leftrightarrow x+2y\ge14\). Đúng.
b) Miền nghiệm là ngũ giác với các đỉnh \((12;12)\), \((2;12)\), \((4;8)\), \((10;2)\), \((12;1)\). Đúng.
c) \(T=20x+25y\) (nghìn đồng) tại năm đỉnh: 540; 340; 280; 250; 265. Nhỏ nhất 250 nghìn đồng tại \((10;2)\). Đúng.
d) \(18\ge12\), \(28\ge16\), \(26\ge14\) và \(0\le 10\le 12\), \(0\le 8\le 12\) nên \((10;8)\) thuộc miền nghiệm. Sai.`),
  tf(R`Cho tam giác ABC có góc A tù, \(AB=3\), \(AC=4\) và diện tích \(S=3\sqrt3\).`,
    [[R`\(BC^2=AB^2+AC^2-2\cdot AB\cdot AC\cdot\cos A\).`, true],
     [R`\(\sin A=-\frac{\sqrt3}{2}\).`, false],
     [R`\(\cos A=-\frac12\).`, true],
     [R`\(BC=\sqrt{37}\).`, true]],
    R`a) Định lí côsin. Đúng.
b) \(\sin A=\frac{2S}{AB\cdot AC}=\frac{6\sqrt3}{12}=\frac{\sqrt3}{2}>0\). Sai.
c) \(\cos^2A=1-\frac34=\frac14\), góc A tù nên \(\cos A=-\frac12\). Đúng.
d) \(BC^2=9+16-2\cdot3\cdot4\cdot\left(-\frac12\right)=37\). Đúng.`),
],
sa: [
  num(R`Trong một lớp có 16 học sinh giỏi Toán, 15 học sinh giỏi Lý và 11 học sinh giỏi Hóa. Có 9 học sinh vừa giỏi Toán vừa giỏi Lý, 6 học sinh vừa giỏi Lý vừa giỏi Hóa, 8 học sinh vừa giỏi Hóa vừa giỏi Toán (các bạn này có thể giỏi thêm môn thứ ba); trong đó có đúng 11 học sinh giỏi đúng hai môn. Hỏi có bao nhiêu học sinh giỏi cả ba môn Toán, Lý, Hóa?`, 4,
    R`Trong tổng \(9+6+8=23\), mỗi học sinh giỏi đúng hai môn được đếm 1 lần, mỗi học sinh giỏi cả ba môn được đếm 3 lần. Gọi x là số học sinh giỏi cả ba môn: \(11+3x=23\Rightarrow x=4\).`),
  fx(num(R`Cho hai lực \(\vec F_1,\ \vec F_2\) có cùng điểm đặt A, tạo với nhau góc \(45^\circ\), cường độ lần lượt là 60 N và 90 N. Tính cường độ lực tổng hợp của hai lực (đơn vị N, làm tròn đến hàng đơn vị).`, 139,
    R`Đặt \(\vec F_1=\overrightarrow{AB}\), \(\vec F_2=\overrightarrow{AD}\), dựng hình bình hành ABCD: \(\vec F_1+\vec F_2=\overrightarrow{AC}\), \(\widehat{ABC}=135^\circ\), \(BC=90\). \(AC^2=60^2+90^2-2\cdot60\cdot90\cos135^\circ\approx19336{,}75\Rightarrow AC\approx139\) N.`, .6), { figSol: "ex-luc-60-90" }),
  fx(num(R`Một tấm thép có dạng một phần tư hình tròn bán kính 60 cm, đặt trên hệ trục tọa độ với tâm tại gốc tọa độ, hai cạnh vuông góc nằm trên các trục Ox, Oy. Cần khoan hai lỗ tròn đường kính 2 cm như hình vẽ: tâm hai lỗ nằm trên đường tròn bán kính 56 cm, các tia nối tâm tấm thép với tâm mỗi lỗ tạo với trục Ox góc \(30^\circ\) và \(60^\circ\). Gọi tọa độ tâm hai lỗ là \((x_1;y_1)\) và \((x_2;y_2)\). Tính \(y_1+x_2\).`, 56,
    R`Điểm trên đường tròn bán kính R, tạo với Ox góc θ có tọa độ \((R\cos\theta;R\sin\theta)\). \(y_1=56\sin30^\circ=28\), \(x_2=56\cos60^\circ=28\). Vậy \(y_1+x_2=56\).`), { fig: "ex-tam-thep" }),
  fx(num(R`Để đo đường kính một hồ nước hình tròn, người ta lấy ba điểm A, B, C trên bờ hồ như hình vẽ và đo được \(AB=8{,}5\) m, \(AC=11{,}5\) m, \(\widehat{BAC}=141^\circ\). Tính đường kính của hồ (đơn vị mét, làm tròn đến hàng đơn vị).`, 30,
    R`Định lí côsin: \(BC=\sqrt{8{,}5^2+11{,}5^2-2\cdot8{,}5\cdot11{,}5\cos141^\circ}\approx18{,}88\) m. Hồ là đường tròn ngoại tiếp tam giác ABC: \(2R=\frac{BC}{\sin141^\circ}\approx30\) m.`, .6), { fig: "ex-ho-tron" }),
],
tl: [
  tl(R`Tìm tất cả các số thực m sao cho:`, [
    { q: R`\((m;m+1)\cup(3;5)\) là một khoảng.`, ans: R`\(2<m<5\)`,
      s: R`Hai khoảng mở có hợp là một khoảng khi và chỉ khi chúng có điểm chung (nếu chỉ chạm nhau tại một đầu mút thì hợp bị "thủng" tại điểm đó). \((m;m+1)\cap(3;5)=\varnothing\Leftrightarrow m+1\le3\) hoặc \(m\ge5\Leftrightarrow m\le2\) hoặc \(m\ge5\). Vậy \(2<m<5\).` },
    { q: R`\((-\infty;9m)\cap\left(\frac4m;+\infty\right)=\varnothing\), trong đó \(m<0\).`, ans: R`\(m\le-\frac23\)`,
      s: R`Giao bằng rỗng khi và chỉ khi \(9m\le\frac4m\). Nhân hai vế với \(m<0\) (đổi chiều): \(9m^2\ge4\Leftrightarrow m^2\ge\frac49\). Kết hợp \(m<0\): \(m\le-\frac23\).` }]),
  fx(tl(R`Giải các bài toán sau (mỗi ý 0,5 điểm).`, [
    { q: R`Cho hình thang ABCD có hai đáy \(AB=1\), \(CD=2\). Gọi M, N lần lượt là trung điểm của AD và BC. Tính \(|\overrightarrow{DM}-\overrightarrow{BA}-\overrightarrow{CN}|\).`, ans: R`\(\frac32\)`,
      s: R`\(\overrightarrow{DM}=\overrightarrow{MA}\), \(-\overrightarrow{BA}=\overrightarrow{AB}\), \(-\overrightarrow{CN}=\overrightarrow{NC}=\overrightarrow{BN}\). Do đó \(\overrightarrow{DM}-\overrightarrow{BA}-\overrightarrow{CN}=\overrightarrow{MA}+\overrightarrow{AB}+\overrightarrow{BN}=\overrightarrow{MN}\). MN là đường trung bình của hình thang nên \(MN=\frac{AB+CD}{2}=\frac32\).` },
    { q: R`Một người quan sát đỉnh C của một ngọn núi nhân tạo từ hai vị trí của một tòa nhà cao 60 m. Lần đầu ở tầng trệt A, phương nhìn tạo với phương nằm ngang góc \(35^\circ\); lần thứ hai trên sân thượng B, phương nhìn tạo với phương nằm ngang góc \(15^\circ\) (hình vẽ). Tính chiều cao của ngọn núi (làm tròn đến hàng phần mười).`, ans: R`khoảng 97,2 m`,
      s: R`\(\widehat{CBA}=90^\circ+15^\circ=105^\circ\), \(\widehat{BAC}=90^\circ-35^\circ=55^\circ\Rightarrow\widehat{BCA}=20^\circ\). Định lí sin: \(AC=\frac{60\sin105^\circ}{\sin20^\circ}\approx169{,}45\) m. Tam giác ACD vuông tại D: \(CD=AC\sin35^\circ\approx97{,}2\) m.` }]), { fig: "ex-nui-nhan-tao" }),
  tl(R`Một công ty có hai phân xưởng A, B cùng sản xuất hai loại sản phẩm M, N. Mỗi giờ, phân xưởng A sản xuất được 250 đơn vị M và 100 đơn vị N với chi phí 600 000 đồng; phân xưởng B sản xuất được 250 đơn vị M và 200 đơn vị N với chi phí 1 000 000 đồng. Công ty nhận đơn đặt hàng 5000 đơn vị M và 3000 đơn vị N.`, [
    { q: R`Gọi x, y lần lượt là số giờ hoạt động của phân xưởng A và B. Viết hệ bất phương trình biểu thị yêu cầu của đơn hàng.`, ans: R`\(\begin{cases}x+y\ge 20\\ x+2y\ge 30\\ x\ge0,\ y\ge0\end{cases}\)`,
      s: R`Sản phẩm M: \(250x+250y\ge5000\Leftrightarrow x+y\ge20\); sản phẩm N: \(100x+200y\ge3000\Leftrightarrow x+2y\ge30\); \(x,y\ge0\). Miền nghiệm là miền không bị chặn, có các đỉnh \(A(0;20)\), \(B(10;10)\), \(C(30;0)\).` },
    { q: R`Phân phối thời gian hoạt động thế nào để chi phí thấp nhất? Tính chi phí đó.`, ans: R`mỗi phân xưởng 10 giờ; chi phí 16 triệu đồng`,
      s: R`Chi phí \(F=0{,}6x+y\) (triệu đồng), các hệ số dương nên giá trị nhỏ nhất đạt tại một đỉnh: \(F(A)=20\), \(F(B)=16\), \(F(C)=18\). Vậy cho mỗi phân xưởng hoạt động 10 giờ, chi phí thấp nhất 16 triệu đồng.` }]),
] },
];
EXAMS.forEach(ex => { ["mc", "tf", "sa", "tl"].forEach(p => { if (ex[p].length !== { mc: 12, tf: 2, sa: 4, tl: 3 }[p]) throw new Error("Sai ma trận " + ex.id + " " + p); }); });
