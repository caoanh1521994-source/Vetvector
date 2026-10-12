/* ===== SỔ TAY CÔNG THỨC (theo 2 tài liệu "Tổng hợp lý thuyết Toán THPT") =====
   Mỗi mục: { id, t: tiêu đề, f: [các dòng, có TeX], tag?: "Mẹo" | "Mở rộng", table?: bảng } */
const BOOK = [
{ id: "nen", short: "Nền tảng", title: "Kiến thức nền cần nhớ", items: [
  { id: "nen-hdt", t: "Hằng đẳng thức đáng nhớ", f: [
    R`\[(A+B)^2=A^2+2AB+B^2,\quad (A-B)^2=A^2-2AB+B^2\]`,
    R`\[A^2-B^2=(A-B)(A+B)\]`,
    R`\[A^3+B^3=(A+B)(A^2-AB+B^2),\quad A^3-B^3=(A-B)(A^2+AB+B^2)\]`,
    R`\[A^2+B^2=(A+B)^2-2AB\]`,
    R`Hay dùng khi biết \(\sin\alpha+\cos\alpha\): bình phương hai vế để tìm \(\sin\alpha\cos\alpha\).`] },
  { id: "nen-pytago", t: "Định lí Py-ta-go", f: [R`Tam giác ABC vuông tại A: \[BC^2=AB^2+AC^2\]`] },
  { id: "nen-hinh", t: "Hình vuông, tam giác đều, tam giác vuông cân", f: [
    R`Hình vuông cạnh a: đường chéo \(a\sqrt2\); tâm O cách mỗi đỉnh \(\frac{a\sqrt2}{2}\).`,
    R`Tam giác đều cạnh a: đường cao \(\frac{a\sqrt3}{2}\); \(S=\frac{a^2\sqrt3}{4}\); \(R=\frac{a\sqrt3}{3}\); \(r=\frac{a\sqrt3}{6}\).`,
    R`Tam giác vuông cân, cạnh góc vuông a: cạnh huyền \(a\sqrt2\), \(S=\frac12a^2\).`] },
  { id: "nen-dt", t: "Diện tích các hình thường gặp", f: [
    R`Hình bình hành: \(S=AH\cdot CD=AD\cdot CD\cdot\sin\alpha\).`,
    R`Hình thoi: \(S=\frac12 AC\cdot BD\). Hình chữ nhật: \(S=AB\cdot BC\).`,
    R`Hình thang: \(S=\frac{(AB+CD)\cdot AH}{2}\). Tam giác vuông tại A: \(S=\frac12AB\cdot AC\).`] },
  { id: "nen-tg", t: "Các đường đặc biệt trong tam giác", f: [
    R`Trung tuyến: nối đỉnh với trung điểm cạnh đối diện; ba trung tuyến cắt nhau tại trọng tâm G.`,
    R`Đường cao, phân giác; trực tâm là giao ba đường cao.`,
    R`Đường trung bình nối trung điểm hai cạnh, song song và bằng nửa cạnh thứ ba.`,
    R`Tâm đường tròn ngoại tiếp: giao ba đường trung trực. Tâm đường tròn nội tiếp: giao ba đường phân giác trong.`] },
  { id: "nen-cauchy", t: "Bất đẳng thức Cô-si", f: [R`Với \(a,b\ge0\): \[\frac{a+b}{2}\ge\sqrt{ab}\]`, R`Dấu "=" xảy ra khi và chỉ khi \(a=b\).`] },
]},
{ id: "b1", short: "Bài 1", title: "Bài 1. Mệnh đề", items: [
  { id: "md-dn", t: "Mệnh đề", f: [R`Mệnh đề là một khẳng định đúng hoặc sai; không thể vừa đúng vừa sai.`, R`Câu hỏi, câu cảm thán không phải là mệnh đề. Kí hiệu mệnh đề: P, Q, R, …`] },
  { id: "md-chuabien", t: "Mệnh đề chứa biến", f: [R`"n chia hết cho 5" chưa là mệnh đề vì đúng hay sai tùy n. Kí hiệu \(P(n)\).`, R`Thay biến bằng một giá trị cụ thể thì được một mệnh đề.`] },
  { id: "md-phudinh", t: "Mệnh đề phủ định", f: [R`Phủ định của P là \(\overline P\): thêm hoặc bớt "không", "không phải" trước vị ngữ.`, R`P đúng thì \(\overline P\) sai và ngược lại.`, R`Đổi dấu khi phủ định: "\(=\)" thành "\(\ne\)"; "\(>\)" thành "\(\le\)"; "\(<\)" thành "\(\ge\)"; "\(\ge\)" thành "\(<\)"; "\(\le\)" thành "\(>\)".`] },
  { id: "md-keotheo", t: "Mệnh đề kéo theo", f: [R`"Nếu P thì Q", kí hiệu \(P\Rightarrow Q\).`, R`\(P\Rightarrow Q\) chỉ sai khi P đúng và Q sai.`, R`Để xét đúng sai, chỉ cần xét khi P đúng: Q đúng thì mệnh đề đúng, Q sai thì mệnh đề sai.`],
    table: { head: ["P", "Q", "P ⇒ Q"], rows: [["Đ", "Đ", "Đ"], ["S", "S", "Đ"], ["S", "Đ", "Đ"], ["Đ", "S", "S"]] } },
  { id: "md-dkcan", t: "Định lí, điều kiện cần, điều kiện đủ", f: [R`Định lí là mệnh đề đúng, thường có dạng \(P\Rightarrow Q\): P là giả thiết, Q là kết luận.`, R`P là điều kiện đủ để có Q; Q là điều kiện cần để có P.`] },
  { id: "md-dao", t: "Mệnh đề đảo, mệnh đề tương đương", f: [R`Mệnh đề đảo của \(P\Rightarrow Q\) là \(Q\Rightarrow P\) (không nhất thiết đúng).`, R`Nếu \(P\Rightarrow Q\) và \(Q\Rightarrow P\) cùng đúng thì \(P\Leftrightarrow Q\): "P khi và chỉ khi Q", P là điều kiện cần và đủ để có Q.`, R`\(P\Leftrightarrow Q\) đúng khi P và Q cùng đúng hoặc cùng sai.`] },
  { id: "md-luongtu", t: "Kí hiệu ∀ (với mọi), ∃ (tồn tại)", f: [R`Phủ định của "\(\forall x, P(x)\)" là "\(\exists x, \overline{P(x)}\)".`, R`Phủ định của "\(\exists x, P(x)\)" là "\(\forall x, \overline{P(x)}\)".`, R`"\(\forall x\in M, P(x)\)" đúng khi đúng với mọi \(x_0\); sai khi có một \(x_0\) làm nó sai.`, R`"\(\exists x\in M, P(x)\)" đúng khi có một \(x_0\) làm nó đúng; sai khi mọi \(x_0\) đều làm nó sai.`] },
  { id: "md-phanchung", t: "Chứng minh trực tiếp và phản chứng", tag: "Mở rộng", f: [R`Trực tiếp: giả thiết \(x\in X\) và P(x) đúng, suy luận ra Q(x) đúng.`, R`Phản chứng: giả sử tồn tại \(x_0\) mà \(P(x_0)\) đúng và \(Q(x_0)\) sai, rồi chỉ ra mâu thuẫn.`] },
  { id: "md-chiahet", t: "Mẹo xét tính chia hết", tag: "Mẹo", f: [R`Tích hai số tự nhiên liên tiếp \(n(n+1)\) chia hết cho 2; tích ba số liên tiếp \((n-1)n(n+1)\) chia hết cho 6.`, R`Xét số dư: viết \(n=3k,\ 3k\pm1\) (hoặc \(5k\pm1,\ 5k\pm2\)…) rồi thay vào.`, R`Một ví dụ sai (phản ví dụ) là đủ để bác bỏ mệnh đề "với mọi".`] },
]},
{ id: "b2", short: "Bài 2", title: "Bài 2. Tập hợp và các phép toán trên tập hợp", items: [
  { id: "th-kh", t: "Tập hợp và kí hiệu", f: [R`\(a\in A\): a thuộc A; \(a\notin A\): a không thuộc A. Tập rỗng: \(\varnothing\).`, R`\(\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\). Lưu ý \(0\in\mathbb N\), \(\mathbb N^*\) là tập số tự nhiên khác 0.`] },
  { id: "th-xacdinh", t: "Cách xác định tập hợp", f: [R`Liệt kê các phần tử, hoặc chỉ ra tính chất đặc trưng: \(A=\{x\in X\mid P(x)\}\).`, R`Mỗi phần tử chỉ liệt kê một lần. \(n(A)\) là số phần tử của A.`] },
  { id: "th-con", t: "Tập con, hai tập hợp bằng nhau", f: [R`\(A\subset B\): mọi phần tử của A đều thuộc B. \(A=B\Leftrightarrow A\subset B\) và \(B\subset A\).`, R`\(A\subset A\) và \(\varnothing\subset A\) với mọi tập A.`, R`Tập có n phần tử có \(2^n\) tập con.`] },
  { id: "th-khoang", t: "Khoảng, đoạn, nửa khoảng", f: [R`\((a;b)\): \(a<x<b\) · \([a;b]\): \(a\le x\le b\) · \([a;b)\): \(a\le x<b\) · \((a;b]\): \(a<x\le b\).`, R`\((a;+\infty)\): \(x>a\) · \([a;+\infty)\): \(x\ge a\) · \((-\infty;b)\): \(x<b\) · \((-\infty;b]\): \(x\le b\).`, R`Ngoặc tròn: không lấy đầu mút; ngoặc vuông: lấy đầu mút. Luôn mở ở \(\pm\infty\).`] },
  { id: "th-phep", t: "Các phép toán trên tập hợp", f: [R`Hợp \(A\cup B\): các phần tử thuộc A hoặc thuộc B.`, R`Giao \(A\cap B\): các phần tử thuộc cả A và B.`, R`Hiệu \(A\setminus B\): các phần tử thuộc A nhưng không thuộc B.`, R`Phần bù: nếu \(A\subset E\) thì \(C_EA=E\setminus A\).`] },
  { id: "th-dem", t: "Công thức tính số phần tử", f: [R`\[n(A\cup B)=n(A)+n(B)-n(A\cap B)\]`, R`Nếu \(A\cap B=\varnothing\) thì \(n(A\cup B)=n(A)+n(B)\).`, R`Số phần tử không thuộc A, không thuộc B = tổng số − \(n(A\cup B)\).`] },
  { id: "th-dem3", t: "Số phần tử của hợp ba tập hợp", tag: "Mở rộng", f: [R`\[n(A\cup B\cup C)=n(A)+n(B)+n(C)-n(A\cap B)-n(B\cap C)-n(C\cap A)+n(A\cap B\cap C)\]`] },
  { id: "th-thamso", t: "Mẹo bài toán khoảng có tham số", tag: "Mẹo", f: [R`Vẽ trục số, so sánh các đầu mút.`, R`\([a;b]\subset[c;d]\Leftrightarrow c\le a\) và \(b\le d\).`, R`Hai khoảng mở \((a;b)\) và \((c;d)\) có điểm chung \(\Leftrightarrow a<d\) và \(c<b\). Cẩn thận dấu "=" khi có đầu mút đóng.`] },
]},
{ id: "b3", short: "Bài 3", title: "Bài 3. Bất phương trình bậc nhất hai ẩn", items: [
  { id: "bpt-dn", t: "Bất phương trình bậc nhất hai ẩn", f: [R`Dạng \(ax+by+c<0\) (hoặc \(>0,\ \le0,\ \ge0\)), trong đó a, b không đồng thời bằng 0.`, R`Mỗi cặp \((x_0;y_0)\) thỏa mãn là một nghiệm; tập các điểm nghiệm là miền nghiệm.`] },
  { id: "bpt-mien", t: "Biểu diễn miền nghiệm (3 bước)", f: [R`Bước 1: Vẽ đường thẳng \(d: ax+by+c=0\).`, R`Bước 2: Lấy điểm \(M(x_0;y_0)\notin d\) (thường lấy \(O(0;0)\)), thay vào vế trái.`, R`Bước 3: Đúng thì miền nghiệm là nửa mặt phẳng bờ d chứa M; sai thì là nửa mặt phẳng không chứa M.`, R`Dấu \(<,>\): không kể bờ. Dấu \(\le,\ge\): kể cả bờ.`] },
  { id: "bpt-dacbiet", t: "Miền nghiệm đặc biệt", f: [R`\(x>a\): bên phải đường \(x=a\); \(x<a\): bên trái.`, R`\(y>a\): phía trên đường \(y=a\); \(y<a\): phía dưới.`, R`Trục Ox: \(y=0\); trục Oy: \(x=0\).`] },
  { id: "bpt-thucte", t: "Lập bất phương trình từ bài toán thực tế", tag: "Mẹo", f: [R`Gọi x, y là hai đại lượng cần tìm, tính tổng chi phí (thời gian, khối lượng…) dạng \(ax+by\).`, R`"Không quá", "tối đa" dùng \(\le\); "ít nhất", "tối thiểu" dùng \(\ge\).`] },
  { id: "bpt-haiphia", t: "Hai điểm nằm khác phía một đường thẳng", tag: "Mẹo", f: [R`Đặt \(f(x;y)=ax+by+c\). M, N nằm về hai phía của \(ax+by+c=0\Leftrightarrow f(M)\cdot f(N)<0\).`] },
]},
{ id: "b4", short: "Bài 4", title: "Bài 4. Hệ bất phương trình bậc nhất hai ẩn", items: [
  { id: "he-dn", t: "Hệ bất phương trình bậc nhất hai ẩn", f: [R`Gồm hai hay nhiều bất phương trình bậc nhất hai ẩn x, y. Mỗi nghiệm chung của tất cả các bất phương trình là một nghiệm của hệ.`] },
  { id: "he-mien", t: "Biểu diễn miền nghiệm của hệ", f: [R`Biểu diễn miền nghiệm của từng bất phương trình trên cùng một mặt phẳng tọa độ.`, R`Phần giao là miền nghiệm của hệ. Miền đa giác lồi (kể cả biên) gọi là miền đa giác.`] },
  { id: "he-gtln", t: "GTLN, GTNN của F = ax + by trên miền đa giác", f: [R`F đạt giá trị lớn nhất, nhỏ nhất tại một trong các đỉnh của đa giác.`, R`Bước 1: Xác định miền nghiệm. Bước 2: Tìm tọa độ các đỉnh (giải hệ hai đường thẳng). Bước 3: Tính F tại các đỉnh rồi so sánh.`] },
  { id: "he-thucte", t: "Bài toán tối ưu thực tế", tag: "Mẹo", f: [R`Gọi ẩn x, y; viết mọi ràng buộc thành bất phương trình (nhớ \(x\ge0,\ y\ge0\)).`, R`Viết F là tiền lãi hoặc chi phí, tìm các đỉnh của miền nghiệm, thay vào F để chọn phương án tốt nhất.`] },
]},
{ id: "b5", short: "Bài 5", title: "Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°", items: [
  { id: "lg-dn", t: "Định nghĩa trên nửa đường tròn đơn vị", f: [R`Góc \(\widehat{xOM}=\alpha\), điểm \(M(x_0;y_0)\) trên nửa đường tròn đơn vị:`, R`\[\sin\alpha=y_0,\quad\cos\alpha=x_0,\quad\tan\alpha=\frac{y_0}{x_0}\ (x_0\ne0),\quad\cot\alpha=\frac{x_0}{y_0}\ (y_0\ne0)\]`] },
  { id: "lg-dau", t: "Dấu của các giá trị lượng giác", f: [R`Góc nhọn: cả bốn giá trị đều dương.`, R`Góc tù: \(\sin\alpha>0,\ \cos\alpha<0,\ \tan\alpha<0,\ \cot\alpha<0\).`, R`\(\tan\alpha\) chỉ xác định khi \(\alpha\ne90^\circ\); \(\cot\alpha\) chỉ xác định khi \(\alpha\ne0^\circ\) và \(\alpha\ne180^\circ\).`] },
  { id: "lg-phu", t: "Hai góc phụ nhau", f: [R`\(\sin(90^\circ-\alpha)=\cos\alpha\); \(\cos(90^\circ-\alpha)=\sin\alpha\);`, R`\(\tan(90^\circ-\alpha)=\cot\alpha\); \(\cot(90^\circ-\alpha)=\tan\alpha\).`] },
  { id: "lg-bu", t: "Hai góc bù nhau", f: [R`\(\sin(180^\circ-\alpha)=\sin\alpha\); \(\cos(180^\circ-\alpha)=-\cos\alpha\);`, R`\(\tan(180^\circ-\alpha)=-\tan\alpha\); \(\cot(180^\circ-\alpha)=-\cot\alpha\).`] },
  { id: "lg-coban", t: "Công thức lượng giác cơ bản", f: [R`\[\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\quad\cot\alpha=\frac{\cos\alpha}{\sin\alpha},\quad\sin^2\alpha+\cos^2\alpha=1\]`, R`\[\tan\alpha\cdot\cot\alpha=1,\quad\frac{1}{\cos^2\alpha}=1+\tan^2\alpha,\quad\frac{1}{\sin^2\alpha}=1+\cot^2\alpha\]`, R`Biết \(\tan\alpha\), tính biểu thức của sin, cos: chia cả tử và mẫu cho \(\cos\alpha\) (hoặc \(\cos^2\alpha\)).`] },
  { id: "lg-bang", t: "Giá trị lượng giác của các góc đặc biệt", f: [R`"‖" là không xác định.`],
    table: { head: ["α", "0°", "30°", "45°", "60°", "90°", "120°", "135°", "150°", "180°"], rows: [
      ["sin", "0", R`\(\frac12\)`, R`\(\frac{\sqrt2}2\)`, R`\(\frac{\sqrt3}2\)`, "1", R`\(\frac{\sqrt3}2\)`, R`\(\frac{\sqrt2}2\)`, R`\(\frac12\)`, "0"],
      ["cos", "1", R`\(\frac{\sqrt3}2\)`, R`\(\frac{\sqrt2}2\)`, R`\(\frac12\)`, "0", R`\(-\frac12\)`, R`\(-\frac{\sqrt2}2\)`, R`\(-\frac{\sqrt3}2\)`, "−1"],
      ["tan", "0", R`\(\frac{\sqrt3}3\)`, "1", R`\(\sqrt3\)`, "‖", R`\(-\sqrt3\)`, "−1", R`\(-\frac{\sqrt3}3\)`, "0"],
      ["cot", "‖", R`\(\sqrt3\)`, "1", R`\(\frac{\sqrt3}3\)`, "0", R`\(-\frac{\sqrt3}3\)`, "−1", R`\(-\sqrt3\)`, "‖"]] } },
  { id: "tgv-tile", t: "Tỉ số lượng giác trong tam giác vuông", f: [R`sin = đối / huyền; cos = kề / huyền; tan = đối / kề; cot = kề / đối.`, R`Bài toán góc nâng: tan(góc nâng) = chiều cao : khoảng cách ngang.`] },
]},
{ id: "b6", short: "Bài 6", title: "Bài 6. Hệ thức lượng trong tam giác", items: [
  { id: "htl-cos", t: "Định lí côsin", f: [R`Với \(BC=a,\ CA=b,\ AB=c\):`, R`\[a^2=b^2+c^2-2bc\cos A,\quad b^2=a^2+c^2-2ac\cos B,\quad c^2=a^2+b^2-2ab\cos C\]`, R`Hệ quả: \[\cos A=\frac{b^2+c^2-a^2}{2bc}\]`] },
  { id: "htl-sin", t: "Định lí sin", f: [R`\[\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R\]`, R`Hệ quả: \(a=2R\sin A\), \(\sin A=\frac{a}{2R}\) (R là bán kính đường tròn ngoại tiếp).`] },
  { id: "htl-dt", t: "Các công thức tính diện tích tam giác", f: [R`\(S=\frac12ah_a=\frac12bh_b=\frac12ch_c\);  \(S=\frac12bc\sin A=\frac12ac\sin B=\frac12ab\sin C\);`, R`\(S=\frac{abc}{4R}\);  \(S=pr\);  \(S=\sqrt{p(p-a)(p-b)(p-c)}\) (Hê-rông), với \(p=\frac{a+b+c}{2}\).`] },
  { id: "htl-tt", t: "Độ dài đường trung tuyến", f: [R`\[m_a^2=\frac{2(b^2+c^2)-a^2}{4},\quad m_b^2=\frac{2(a^2+c^2)-b^2}{4},\quad m_c^2=\frac{2(a^2+b^2)-c^2}{4}\]`] },
  { id: "htl-nhandang", t: "Nhận dạng góc nhọn, tù, vuông", f: [R`\(a^2<b^2+c^2\) (hay \(\cos A>0\)): góc A nhọn.`, R`\(a^2>b^2+c^2\) (hay \(\cos A<0\)): góc A tù. \(a^2=b^2+c^2\): góc A vuông.`, R`Góc lớn nhất đối diện cạnh lớn nhất.`] },
  { id: "htl-vuong", t: "Hệ thức lượng trong tam giác vuông", f: [R`Tam giác ABC vuông tại A, đường cao AH, trung tuyến AM:`, R`\(AB^2=BC\cdot BH\); \(AC^2=BC\cdot CH\); \(AH^2=HB\cdot HC\); \(AB\cdot AC=BC\cdot AH\);`, R`\(\frac{1}{AH^2}=\frac{1}{AB^2}+\frac{1}{AC^2}\); \(AM=BM=CM=\frac12BC\).`] },
  { id: "htl-thucte", t: "Đo khoảng cách trong thực tế", tag: "Mẹo", f: [R`Biết hai góc và một cạnh: dùng định lí sin (góc thứ ba \(=180^\circ-\) tổng hai góc).`, R`Biết hai cạnh và góc xen giữa: dùng định lí côsin.`] },
]},
{ id: "b7", short: "Bài 7", title: "Bài 7. Các khái niệm mở đầu về vectơ", items: [
  { id: "vt-dn", t: "Định nghĩa vectơ", f: [R`Vectơ là đoạn thẳng có hướng (chỉ rõ điểm đầu, điểm cuối). \(\overrightarrow{AB}\): điểm đầu A, điểm cuối B.`, R`Giá của \(\overrightarrow{AB}\) là đường thẳng AB. Độ dài: \(\left|\overrightarrow{AB}\right|=AB\).`, R`Mẹo đếm: từ n điểm phân biệt có \(n(n-1)\) vectơ khác \(\vec0\).`] },
  { id: "vt-phuong", t: "Hai vectơ cùng phương, cùng hướng", f: [R`Cùng phương: giá song song hoặc trùng nhau. Hai vectơ cùng phương thì cùng hướng hoặc ngược hướng.`, R`Ba điểm phân biệt A, B, C thẳng hàng \(\Leftrightarrow\overrightarrow{AB}\) và \(\overrightarrow{AC}\) cùng phương.`] },
  { id: "vt-bang", t: "Vectơ bằng nhau, vectơ đối nhau", f: [R`\(\vec a=\vec b\): cùng hướng và cùng độ dài.`, R`\(\vec a=-\vec b\) (đối nhau): ngược hướng và cùng độ dài. \(\overrightarrow{MN}=-\overrightarrow{NM}\).`, R`ABCD là hình bình hành \(\Leftrightarrow\overrightarrow{AB}=\overrightarrow{DC}\).`] },
  { id: "vt-khong", t: "Vectơ-không", f: [R`\(\vec0=\overrightarrow{AA}=\overrightarrow{BB}=\dots\), có độ dài 0.`, R`Vectơ-không cùng phương, cùng hướng với mọi vectơ; vectơ đối của \(\vec0\) là chính nó.`] },
  { id: "vt-thucte", t: "Biểu diễn đại lượng có hướng", tag: "Mẹo", f: [R`Lực, vận tốc, độ dời là đại lượng có hướng: hướng của vectơ là hướng của đại lượng, độ dài tỉ lệ với độ lớn.`] },
]},
{ id: "b8", short: "Bài 8", title: "Bài 8. Tổng và hiệu của hai vectơ", items: [
  { id: "v8-tong", t: "Tổng của hai vectơ", f: [R`Từ điểm A tùy ý lấy B, C sao cho \(\overrightarrow{AB}=\vec a,\ \overrightarrow{BC}=\vec b\). Khi đó \(\vec a+\vec b=\overrightarrow{AC}\).`, R`Giao hoán \(\vec a+\vec b=\vec b+\vec a\); kết hợp \((\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)\); \(\vec a+\vec0=\vec a\).`] },
  { id: "v8-3diem", t: "Quy tắc ba điểm", f: [R`Với ba điểm M, N, P tùy ý: \[\overrightarrow{MN}+\overrightarrow{NP}=\overrightarrow{MP}\]`] },
  { id: "v8-hbh", t: "Quy tắc hình bình hành", f: [R`ABCD là hình bình hành: \[\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\]`] },
  { id: "v8-hieu", t: "Hiệu của hai vectơ, quy tắc trừ", f: [R`\(\vec a-\vec b=\vec a+(-\vec b)\).`, R`Với ba điểm O, A, B tùy ý: \[\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}\]`] },
  { id: "v8-trungdiem", t: "Trung điểm đoạn thẳng", f: [R`M là trung điểm AB \(\Leftrightarrow\overrightarrow{MA}+\overrightarrow{MB}=\vec0\).`, R`Mở rộng: I là trung điểm AB, M bất kì thì \(\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}\).`] },
  { id: "v8-trongtam", t: "Trọng tâm tam giác", f: [R`G là trọng tâm tam giác ABC \(\Leftrightarrow\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\).`, R`Mở rộng: với M bất kì, \(\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}\).`] },
  { id: "v8-dodai", t: "Tính độ dài vectơ tổng, vectơ hiệu", f: [R`Biến đổi tổng (hiệu) về một vectơ duy nhất \(\vec u\) bằng quy tắc ba điểm, hình bình hành, quy tắc trừ.`, R`Sau đó tính độ dài \(\vec u\) bằng Py-ta-go, định lí côsin, tam giác đều…`] },
  { id: "v8-tapdiem", t: "Tìm điểm thỏa mãn hệ thức vectơ", f: [R`Đưa về \(\overrightarrow{AM}=\vec v\) (A cố định, \(\vec v\) không đổi): có duy nhất một điểm M.`, R`Đưa về \(\left|\overrightarrow{AM}\right|=\left|\vec v\right|\) không đổi: M thuộc đường tròn tâm A, bán kính \(\left|\vec v\right|\).`, R`Đưa về \(\left|\overrightarrow{AM}\right|=\left|\overrightarrow{BM}\right|\): M thuộc đường trung trực của AB.`] },
  { id: "v8-luc", t: "Hợp lực của hai lực", tag: "Mẹo", f: [R`Hợp lực của hai lực cùng điểm đặt là đường chéo hình bình hành lực.`, R`Hai lực vuông góc: \(F=\sqrt{F_1^2+F_2^2}\). Góc \(\alpha\) giữa hai lực: \(F^2=F_1^2+F_2^2+2F_1F_2\cos\alpha\).`] },
]},
];
const BOOK_ITEM = {}; BOOK.forEach(sec => sec.items.forEach(it => { BOOK_ITEM[it.id] = Object.assign({ sec: sec.id }, it); }));

/* ===== Gán gợi ý: luật theo bài + nội dung câu (ưu tiên từ trên xuống, tối đa 3 mục) ===== */
const HINT_RULES = {
  b1: [[/phản chứng/i, ["md-phanchung"]], [/phủ định/i, ["md-phudinh", "md-luongtu"]], [/điều kiện cần|điều kiện đủ|định lí/i, ["md-dkcan", "md-dao"]],
       [/đảo|Leftrightarrow|tương đương/, ["md-dao"]], [/Rightarrow|Nếu .* thì|kéo theo/, ["md-keotheo"]], [/chia hết|nguyên tố|số lẻ/, ["md-luongtu", "md-chiahet"]],
       [/forall|exists/, ["md-luongtu"]], [/chứa biến|P\(x\)|P\(n\)/, ["md-chuabien"]], [/./, ["md-dn"]]],
  b2: [[/học sinh|khách|thí sinh|ngày|số tự nhiên, mỗi số|trường có/, ["th-dem"]], [/ba câu|ba môn|3 bài|ba môn|Lượng giác|cả ba|vừa mưa/, ["th-dem3"]],
       [/Tìm (số thực )?[mna]\b|tham số|với \\\(m>|\\\(a<0\\\)|giá trị của m/, ["th-thamso", "th-khoang"]], [/cup|cap|setminus|C_|phần bù/, ["th-phep"]],
       [/\(-|\[-|infty|khoảng|\(1;|\[1;|\[2;/, ["th-khoang"]], [/tập con|subset/, ["th-con"]], [/liệt kê|\\mid|tập rỗng|\\in\\mathbb/, ["th-xacdinh", "th-kh"]], [/./, ["th-kh"]]],
  b3: [[/hai phía/, ["bpt-haiphia"]], [/nghìn|kg|giờ|g\)|vải|bơm|bi |viên|áo/, ["bpt-thucte"]], [/diện tích|trục tọa độ/, ["bpt-mien", "nen-dt"]],
       [/là bất phương trình bậc nhất|bậc nhất hai ẩn\./, ["bpt-dn"]], [/nghiệm|thuộc|chứa|miền|bờ|D/, ["bpt-mien"]], [/./, ["bpt-dn", "bpt-mien"]]],
  b4: [[/lãi|chi phí|điểm lớn nhất|phương án/, ["he-thucte", "he-gtln"]], [/lớn nhất|nhỏ nhất|max|min/, ["he-gtln"]], [/diện tích/, ["he-mien", "nen-dt"]],
       [/hệ bất phương trình bậc nhất hai ẩn\?|Hệ nào/, ["he-dn"]], [/./, ["he-dn", "he-mien"]]],
  b5: [[/góc nâng|feet|yard|diều|núi|đu quay|bờ sông/, ["tgv-tile", "lg-bang"]], [/sin\\alpha\+\\cos\\alpha|sin x\+\\cos x/, ["nen-hdt", "lg-coban"]],
       [/tan\\alpha=|tan\\beta|cos\\beta|\\cot\^2 22/, ["lg-coban", "lg-phu"]], [/sin\^2 12|cos\^2 5|cos2\^/, ["lg-phu", "lg-bu"]], [/A\+B|tam giác ABC/, ["lg-bu", "lg-coban"]],
       [/tù|xác định/, ["lg-dau"]], [/sin\\alpha=|cos\\alpha=/, ["lg-coban", "lg-dau"]], [/\d+\^\\circ|cos 0|tan 45/, ["lg-bang", "lg-bu"]], [/./, ["lg-dn", "lg-coban"]]],
  b6: [[/trung tuyến|m_a/, ["htl-tt"]], [/nội tiếp đường tròn có/, ["htl-dt"]], [/ngoại tiếp|2R|=R/, ["htl-sin"]], [/tàu|bờ sông|mảnh đất/, ["htl-thucte", "htl-cos", "htl-dt"]],
       [/diện tích|Hê-rông|chu vi|nội tiếp|pr|h_a/, ["htl-dt"]], [/tù|nhọn|vuông tại|a\^2=b\^2\+c\^2/, ["htl-nhandang", "htl-cos"]],
       [/widehat B.*widehat C|\\widehat B=/, ["htl-sin"]], [/./, ["htl-cos", "htl-sin"]]],
  b7: [[/vận tốc|máy bay|thuyền/, ["vt-thucte", "nen-pytago"]], [/vectơ-không/, ["vt-khong"]], [/bằng nhau|bằng vectơ|bằng \\\(|= ?\\overrightarrow|AB\}=\\overrightarrow\{DC|ABCD là/, ["vt-bang"]],
       [/cùng phương|cùng hướng|đoạn thẳng có hướng|thẳng hàng/, ["vt-phuong"]], [/bao nhiêu vectơ/, ["vt-dn", "vt-bang"]], [/Độ dài|độ dài/, ["vt-dn", "nen-hinh", "nen-pytago"]], [/./, ["vt-dn"]]],
  b8: [[/lực|treo/, ["v8-luc", "v8-hbh"]], [/Tập hợp các điểm/, ["v8-tapdiem", "v8-trungdiem"]], [/trọng tâm/, ["v8-trongtam"]], [/trung điểm/, ["v8-trungdiem"]],
       [/vectơ đối|-\\overrightarrow|-\\vec|hiệu/, ["v8-hieu", "v8-3diem"]], [/hình bình hành|hình vuông|hình thoi|hình chữ nhật/, ["v8-hbh", "v8-3diem"]],
       [/\\left\|/, ["v8-dodai", "v8-3diem"]], [/./, ["v8-3diem", "v8-hbh"]]],
};
function hintIds(q, lesson) {
  const txt = q.q + " " + (q.o ? q.o.join(" ") : "") + " " + (q.s ? q.s.map(s => s[0]).join(" ") : "");
  const out = [];
  for (const [re, ids] of HINT_RULES[lesson] || []) {
    if (re.source === "." && out.length) break;
    if (re.test(txt)) for (const id of ids) if (!out.includes(id) && out.length < 3) out.push(id);
    if (out.length >= 3) break;
  }
  return out;
}

/* Gán tay cho các câu cần công thức cụ thể hơn (khóa: bài.mức.thứ tự) */
const HINT_OVERRIDE = {
  "b1.1.3": ["md-dn"], "b1.1.4": ["md-chuabien", "md-dn"], "b1.1.6": ["md-phudinh"], "b1.2.5": ["md-keotheo", "md-dao"], "b1.2.6": ["md-chuabien"],
  "b1.2.7": ["md-chuabien", "md-luongtu"], "b1.3.1": ["md-chuabien", "nen-hdt"], "b1.3.5": ["md-luongtu", "nen-hdt"], "b1.3.6": ["md-dkcan", "md-dao"],
  "b1.4.0": ["md-luongtu", "md-chiahet"], "b1.4.1": ["md-chuabien", "md-phudinh"], "b1.4.2": ["md-chuabien", "nen-hdt"], "b1.4.3": ["md-phanchung", "md-chiahet"],
  "b1.4.4": ["md-chuabien", "md-chiahet"], "b1.4.5": ["md-luongtu", "md-chiahet", "md-phanchung"], "b1.4.6": ["md-chuabien", "md-phudinh"], "b1.4.7": ["md-phanchung", "nen-cauchy", "nen-hdt"],
  "b2.1.0": ["th-kh"], "b2.1.3": ["th-con"], "b2.1.5": ["th-kh", "th-xacdinh"], "b2.2.2": ["th-phep", "th-khoang"], "b2.2.5": ["th-xacdinh"], "b2.4.7": ["th-dem3"],
  "b3.1.1": ["bpt-dn"], "b3.1.6": ["bpt-dn"], "b3.2.1": ["bpt-dn"], "b3.2.4": ["bpt-dn"], "b3.2.5": ["bpt-dn"], "b3.2.7": ["bpt-dn", "bpt-mien"], "b3.3.4": ["bpt-mien", "bpt-dn"],
  "b3.4.2": ["bpt-dn"], "b3.4.3": ["bpt-dn"], "b3.4.4": ["bpt-mien", "bpt-dn"], "b3.4.6": ["bpt-mien", "bpt-dn"],
  "b4.2.1": ["he-mien", "he-gtln"], "b4.2.2": ["he-gtln", "he-mien"], "b4.2.3": ["he-thucte", "he-dn"], "b4.2.4": ["he-gtln", "he-mien"], "b4.2.6": ["he-gtln", "he-mien"],
  "b4.4.0": ["he-mien", "he-dn"], "b4.4.2": ["he-thucte", "he-gtln"], "b4.4.3": ["he-dn"], "b4.4.5": ["he-mien", "he-gtln"], "b4.4.7": ["he-thucte", "he-gtln"],
  "b5.1.4": ["lg-bu"], "b5.1.5": ["lg-dn", "lg-bang"], "b5.1.6": ["lg-dau", "lg-coban"], "b5.2.0": ["lg-coban", "lg-dau"], "b5.2.1": ["lg-coban"], "b5.2.2": ["lg-phu", "lg-coban"],
  "b5.2.4": ["lg-bang", "lg-bu"], "b5.3.0": ["lg-phu", "lg-coban"], "b5.3.1": ["lg-coban", "lg-dau"], "b5.3.2": ["lg-coban", "nen-hdt"], "b5.3.7": ["lg-coban"],
  "b5.4.1": ["lg-phu", "lg-bu", "lg-coban"], "b5.4.2": ["lg-bu", "lg-bang"], "b5.4.4": ["lg-dn", "lg-bang", "lg-bu"], "b5.4.6": ["lg-coban", "lg-dau"],
  "b6.1.0": ["htl-cos"], "b6.1.2": ["htl-dt"], "b6.2.0": ["htl-dt"], "b6.2.1": ["htl-cos"], "b6.2.4": ["htl-cos"], "b6.2.5": ["htl-cos", "htl-dt", "htl-sin"],
  "b6.2.7": ["htl-sin", "nen-pytago", "htl-vuong"], "b6.3.0": ["htl-cos", "htl-dt"], "b6.3.1": ["htl-tt"], "b6.3.2": ["htl-cos", "htl-thucte"], "b6.3.3": ["htl-dt"],
  "b6.3.4": ["htl-sin", "htl-thucte"], "b6.4.0": ["htl-tt", "htl-dt", "nen-tg"], "b6.4.1": ["htl-cos", "nen-tg"], "b6.4.2": ["htl-dt", "htl-cos"],
  "b6.4.3": ["htl-tt", "nen-pytago", "nen-tg"], "b6.4.4": ["htl-cos", "nen-hdt"], "b6.4.5": ["htl-tt"], "b6.4.6": ["htl-dt", "htl-cos"],
  "b7.1.0": ["vt-dn"], "b7.1.1": ["vt-phuong"], "b7.1.2": ["vt-khong"], "b7.1.4": ["vt-dn"], "b7.1.5": ["vt-bang"], "b7.1.6": ["vt-khong", "vt-phuong"],
  "b7.2.0": ["vt-bang", "nen-hinh"], "b7.2.2": ["vt-dn"], "b7.2.3": ["vt-dn", "nen-hinh"], "b7.2.4": ["vt-bang", "vt-dn"], "b7.3.0": ["vt-dn"],
  "b7.3.2": ["vt-dn", "nen-hinh"], "b7.3.3": ["vt-dn", "nen-hinh"], "b7.3.4": ["vt-thucte"], "b7.3.5": ["vt-phuong", "vt-dn"], "b7.3.6": ["vt-bang", "vt-phuong", "vt-dn"],
  "b7.4.0": ["vt-bang", "nen-tg"], "b7.4.1": ["vt-dn", "nen-hinh"], "b7.4.5": ["vt-bang", "vt-phuong", "nen-hinh"], "b7.4.6": ["vt-dn", "nen-hinh"],
  "b8.1.0": ["v8-3diem"], "b8.1.2": ["v8-hieu"], "b8.1.3": ["v8-trungdiem"], "b8.1.5": ["v8-tong"], "b8.1.6": ["vt-bang", "v8-hieu"],
  "b8.2.0": ["v8-3diem", "v8-dodai"], "b8.2.1": ["v8-hbh", "nen-hinh"], "b8.2.2": ["v8-hieu"], "b8.2.3": ["v8-3diem"], "b8.2.4": ["v8-hieu", "v8-dodai"],
  "b8.2.5": ["v8-hbh", "v8-hieu", "vt-bang"], "b8.2.6": ["v8-hieu"], "b8.2.7": ["v8-hbh", "nen-pytago"], "b8.3.0": ["v8-hbh", "htl-cos"],
  "b8.3.1": ["v8-3diem", "tgv-tile"], "b8.3.2": ["v8-hieu", "v8-3diem", "tgv-tile"], "b8.3.5": ["v8-hieu", "vt-bang"], "b8.3.6": ["v8-hieu", "vt-bang"],
  "b8.3.7": ["vt-bang", "v8-3diem"], "b8.3.8": ["v8-trongtam", "v8-hbh", "v8-hieu"], "b8.4.1": ["v8-trungdiem", "v8-hieu", "v8-tapdiem"],
  "b8.4.2": ["v8-hbh", "nen-hinh"], "b8.4.3": ["v8-3diem", "v8-dodai"], "b8.4.4": ["v8-hbh", "nen-hinh"], "b8.4.7": ["v8-trungdiem", "vt-bang"],
  "b8.4.8": ["v8-trungdiem", "htl-vuong", "nen-pytago"],
};
for (const b in BANK) for (const l in BANK[b]) BANK[b][l].forEach((q, k) => { q.key = `${b}.${l}.${k}`; q.lesson = b; });
function hintFor(q) { return HINT_OVERRIDE[q.key] || hintIds(q, q.lesson); }
