// Hệ thống Quiz cho trang thi thử
// Chứa câu hỏi, logic và chức năng của hệ thống quiz

// Cấu trúc dữ liệu Quiz
const quizData = {
    html: {
        basic: [
            {
                question: "Thẻ nào được sử dụng để tạo tiêu đề chính của trang web?",
                options: ["<head>", "<title>", "<h1>", "<header>"],
                correct: 2,
                explanation: "<h1> là thẻ tiêu đề chính, có độ quan trọng cao nhất trong hệ thống heading."
            },
            {
                question: "Thuộc tính nào được sử dụng để tạo liên kết trong HTML?",
                options: ["src", "href", "alt", "class"],
                correct: 1,
                explanation: "Thuộc tính href được sử dụng trong thẻ <a> để chỉ định URL đích của liên kết."
            },
            {
                question: "Thẻ nào được sử dụng để tạo danh sách có thứ tự?",
                options: ["<ul>", "<ol>", "<li>", "<dl>"],
                correct: 1,
                explanation: "<ol> (Ordered List) tạo danh sách có thứ tự với số hoặc chữ cái."
            },
            {
                question: "Để tạo dòng mới trong HTML, ta sử dụng thẻ nào?",
                options: ["<break>", "<br>", "<newline>", "<line>"],
                correct: 1,
                explanation: "Thẻ <br> được sử dụng để tạo ngắt dòng (line break)."
            },
            {
                question: "Thẻ nào được sử dụng để định nghĩa một phần nội dung độc lập?",
                options: ["<div>", "<span>", "<section>", "<article>"],
                correct: 3,
                explanation: "<article> đại diện cho một phần nội dung độc lập, có thể đứng riêng."
            },
            {
                question: "Thuộc tính 'alt' trong thẻ <img> dùng để làm gì?",
                options: ["Thay đổi kích thước ảnh", "Mô tả ảnh khi không tải được", "Tạo liên kết cho ảnh", "Thêm viền cho ảnh"],
                correct: 1,
                explanation: "Thuộc tính alt cung cấp văn bản thay thế khi hình ảnh không thể hiển thị."
            },
            {
                question: "Thẻ <table> trong HTML dùng để tạo gì?",
                options: ["Danh sách", "Biểu đồ", "Bảng dữ liệu", "Menu điều hướng"],
                correct: 2,
                explanation: "<table> được sử dụng để tạo bảng với hàng và cột."
            },
            {
                question: "Để tạo một form nhập liệu, ta sử dụng thẻ nào?",
                options: ["<input>", "<form>", "<textarea>", "<button>"],
                correct: 1,
                explanation: "<form> là container chứa các phần tử nhập liệu của người dùng."
            },
            {
                question: "Thẻ <meta> thường được đặt ở đâu trong HTML?",
                options: ["<body>", "<head>", "<footer>", "<main>"],
                correct: 1,
                explanation: "Thẻ <meta> chứa thông tin meta về trang web, thường đặt trong <head>."
            },
            {
                question: "Thuộc tính 'id' và 'class' khác nhau như thế nào?",
                options: ["id dùng cho CSS, class dùng cho JavaScript", "id là duy nhất, class có thể dùng nhiều lần", "id cho thẻ <div>, class cho thẻ <span>", "id bắt buộc, class tùy chọn"],
                correct: 1,
                explanation: "id phải là duy nhất trong một trang, class có thể được sử dụng cho nhiều phần tử."
            }
        ],
        intermediate: [
            {
                question: "Trong HTML5, thẻ <nav> dùng để làm gì?",
                options: ["Tạo menu điều hướng", "Tạo thanh bên", "Tạo footer", "Tạo header"],
                correct: 0,
                explanation: "<nav> định nghĩa một phần điều hướng, thường chứa các liên kết menu."
            },
            {
                question: "Thuộc tính 'data-*' trong HTML5 dùng để làm gì?",
                options: ["Lưu trữ dữ liệu tùy chỉnh", "Tạo animation", "Kết nối database", "Tạo responsive design"],
                correct: 0,
                explanation: "Thuộc tính data-* cho phép lưu trữ dữ liệu tùy chỉnh trong HTML elements."
            },
            {
                question: "Thẻ <canvas> trong HTML5 dùng để vẽ gì?",
                options: ["Hình ảnh bitmap", "Vector graphics", "SVG", "WebGL"],
                correct: 0,
                explanation: "<canvas> cung cấp một vùng để vẽ đồ họa bitmap bằng JavaScript."
            },
            {
                question: "Thuộc tính 'autocomplete' trong form dùng để làm gì?",
                options: ["Tự động điền form", "Kiểm tra dữ liệu", "Mã hóa dữ liệu", "Tạo dropdown"],
                correct: 0,
                explanation: "autocomplete giúp trình duyệt tự động điền các trường form dựa trên dữ liệu đã nhập trước đó."
            },
            {
                question: "Thẻ <figure> và <figcaption> dùng để làm gì?",
                options: ["Tạo bảng", "Nhúng media với mô tả", "Tạo form", "Tạo navigation"],
                correct: 1,
                explanation: "<figure> chứa nội dung media, <figcaption> cung cấp tiêu đề hoặc mô tả cho figure."
            },
            {
                question: "Thuộc tính 'contenteditable' cho phép gì?",
                options: ["Chỉnh sửa nội dung trực tiếp", "Thay đổi CSS", "Tạo animation", "Kết nối API"],
                correct: 0,
                explanation: "contenteditable cho phép người dùng chỉnh sửa nội dung của phần tử trực tiếp trên trang web."
            },
            {
                question: "Thẻ <progress> hiển thị gì?",
                options: ["Thanh tiến trình", "Thanh cuộn", "Menu dropdown", "Tooltip"],
                correct: 0,
                explanation: "<progress> đại diện cho tiến trình hoàn thành của một task."
            },
            {
                question: "Thuộc tính 'pattern' trong input dùng để làm gì?",
                options: ["Kiểm tra định dạng dữ liệu", "Thay đổi màu sắc", "Tạo animation", "Kết nối database"],
                correct: 0,
                explanation: "pattern sử dụng biểu thức chính quy để kiểm tra định dạng dữ liệu nhập vào."
            },
            {
                question: "Thẻ <details> và <summary> tạo gì?",
                options: ["Accordion/Collapsible content", "Tabs", "Modal", "Tooltip"],
                correct: 0,
                explanation: "<details> tạo phần nội dung có thể mở/đóng, <summary> là tiêu đề có thể click."
            },
            {
                question: "Thuộc tính 'download' trong thẻ <a> làm gì?",
                options: ["Tải file thay vì mở", "Mở trong tab mới", "In trang", "Chia sẻ"],
                correct: 0,
                explanation: "Thuộc tính download làm cho liên kết tải file về thay vì mở trong trình duyệt."
            },
            {
                question: "Thẻ <mark> dùng để làm gì?",
                options: ["Đánh dấu/highlight text", "Tạo bookmark", "Tạo marker", "Tạo menu"],
                correct: 0,
                explanation: "<mark> được sử dụng để đánh dấu hoặc highlight một phần văn bản."
            },
            {
                question: "Thuộc tính 'spellcheck' làm gì?",
                options: ["Kiểm tra chính tả", "Đếm từ", "Tìm kiếm", "Dịch ngôn ngữ"],
                correct: 0,
                explanation: "spellcheck cho phép trình duyệt kiểm tra chính tả trong các trường text input."
            },
            {
                question: "Thẻ <time> dùng để làm gì?",
                options: ["Hiển thị thời gian", "Tạo đồng hồ", "Đặt lịch", "Tạo timer"],
                correct: 0,
                explanation: "<time> đại diện cho thời gian hoặc ngày tháng, có thể có thuộc tính datetime."
            },
            {
                question: "Thuộc tính 'placeholder' trong input khác gì với value?",
                options: ["Là text gợi ý, biến mất khi nhập", "Là giá trị mặc định", "Là label", "Là tooltip"],
                correct: 0,
                explanation: "Placeholder hiển thị text gợi ý mờ, biến mất khi người dùng bắt đầu nhập liệu."
            },
            {
                question: "Thẻ <wbr> dùng để làm gì?",
                options: ["Tạo ngắt từ có thể bẻ", "Tạo khoảng trắng", "Tạo dòng mới", "Tạo tab"],
                correct: 0,
                explanation: "<wbr> gợi ý vị trí có thể bẻ từ khi text quá dài, giúp responsive design."
            }
        ],
        advanced: [
            {
                question: "Trong HTML5, Web Storage API bao gồm gì?",
                options: ["localStorage và sessionStorage", "cookies và cache", "database và files", "server storage"],
                correct: 0,
                explanation: "Web Storage API cung cấp localStorage (lưu vĩnh viễn) và sessionStorage (lưu trong session)."
            },
            {
                question: "Thẻ <template> trong HTML5 dùng để làm gì?",
                options: ["Tạo template có thể clone", "Tạo layout", "Tạo component", "Tạo theme"],
                correct: 0,
                explanation: "<template> chứa HTML có thể được clone và sử dụng nhiều lần bằng JavaScript."
            },
            {
                question: "Geolocation API trong HTML5 làm gì?",
                options: ["Lấy vị trí địa lý của thiết bị", "Tính khoảng cách", "Hiển thị bản đồ", "Tìm địa điểm"],
                correct: 0,
                explanation: "Geolocation API cho phép web app lấy vị trí địa lý của người dùng (với sự cho phép)."
            },
            {
                question: "Web Workers trong HTML5 dùng để làm gì?",
                options: ["Chạy JavaScript trong background", "Tạo animation", "Xử lý form", "Kết nối network"],
                correct: 0,
                explanation: "Web Workers cho phép chạy JavaScript trong background thread, không block UI."
            },
            {
                question: "Thẻ <dialog> trong HTML5 tạo gì?",
                options: ["Modal dialog", "Alert box", "Confirm box", "Prompt box"],
                correct: 0,
                explanation: "<dialog> tạo modal dialog có thể được hiển thị/ẩn bằng JavaScript."
            },
            {
                question: "Drag and Drop API cho phép gì?",
                options: ["Kéo thả elements", "Di chuyển files", "Resize elements", "Sort lists"],
                correct: 0,
                explanation: "Drag and Drop API cho phép người dùng kéo và thả các HTML elements."
            },
            {
                question: "File API trong HTML5 làm gì?",
                options: ["Đọc và xử lý files local", "Upload files", "Download files", "Compress files"],
                correct: 0,
                explanation: "File API cho phép JavaScript đọc và xử lý files được chọn bởi người dùng."
            },
            {
                question: "History API method pushState() làm gì?",
                options: ["Thay đổi URL mà không reload", "Quay lại trang trước", "Làm mới trang", "Mở tab mới"],
                correct: 0,
                explanation: "pushState() thay đổi URL và thêm entry vào history mà không reload trang."
            },
            {
                question: "WebSockets trong HTML5 dùng để làm gì?",
                options: ["Kết nối real-time với server", "Upload files", "Cache data", "Store data"],
                correct: 0,
                explanation: "WebSockets cung cấp kết nối full-duplex real-time giữa client và server."
            },
            {
                question: "Notification API cho phép gì?",
                options: ["Hiển thị desktop notifications", "Tạo alerts", "Gửi email", "Tạo reminders"],
                correct: 0,
                explanation: "Notification API cho phép web app hiển thị notifications trên desktop (với sự cho phép)."
            },
            {
                question: "Page Visibility API làm gì?",
                options: ["Phát hiện tab đang active/inactive", "Kiểm tra zoom level", "Theo dõi mouse", "Kiểm tra network"],
                correct: 0,
                explanation: "Page Visibility API cho phép phát hiện khi trang web đang được xem hoặc ẩn."
            },
            {
                question: "Battery Status API cung cấp thông tin gì?",
                options: ["Trạng thái pin thiết bị", "CPU usage", "Memory usage", "Network speed"],
                correct: 0,
                explanation: "Battery Status API cung cấp thông tin về mức pin và trạng thái sạc của thiết bị."
            },
            {
                question: "Vibration API làm gì?",
                options: ["Làm rung thiết bị", "Phát âm thanh", "Hiển thị light", "Kết nối Bluetooth"],
                correct: 0,
                explanation: "Vibration API cho phép web app làm rung thiết bị di động."
            },
            {
                question: "Fullscreen API cho phép gì?",
                options: ["Hiển thị element fullscreen", "Zoom in/out", "Change resolution", "Split screen"],
                correct: 0,
                explanation: "Fullscreen API cho phép bất kỳ element nào hiển thị ở chế độ fullscreen."
            },
            {
                question: "WebRTC (Web Real-Time Communication) dùng để làm gì?",
                options: ["Truyền video/audio real-time", "Upload files", "Download files", "Share screen"],
                correct: 0,
                explanation: "WebRTC cho phép truyền video, audio và data real-time giữa browsers mà không cần plugin."
            },
            {
                question: "IndexedDB là gì?",
                options: ["Database NoSQL trong browser", "SQL database", "Cache storage", "Cookie storage"],
                correct: 0,
                explanation: "IndexedDB là database NoSQL lưu trữ dữ liệu có cấu trúc trong browser."
            },
            {
                question: "Service Workers trong PWA dùng để làm gì?",
                options: ["Xử lý background tasks và caching", "Tạo UI", "Xử lý form", "Kết nối database"],
                correct: 0,
                explanation: "Service Workers cho phép xử lý network requests, caching và background sync trong PWA."
            },
            {
                question: "WebGL trong HTML5 dùng để làm gì?",
                options: ["Render 3D graphics", "Play video", "Process images", "Create animations"],
                correct: 0,
                explanation: "WebGL là JavaScript API để render interactive 3D graphics trong web browser."
            },
            {
                question: "MediaRecorder API làm gì?",
                options: ["Ghi âm/video từ camera/microphone", "Play media", "Edit media", "Stream media"],
                correct: 0,
                explanation: "MediaRecorder API cho phép ghi âm thanh và video từ camera/microphone của thiết bị."
            },
            {
                question: "Web Audio API dùng để làm gì?",
                options: ["Xử lý và synthesize audio", "Play music", "Record audio", "Edit audio files"],
                correct: 0,
                explanation: "Web Audio API cung cấp advanced audio processing và synthesis capabilities."
            }
        ]
    },
    css: {
        basic: [
            {
                question: "Thuộc tính CSS nào dùng để thay đổi màu nền?",
                options: ["color", "background-color", "text-color", "fill-color"],
                correct: 1,
                explanation: "background-color được sử dụng để thiết lập màu nền của phần tử."
            },
            {
                question: "Để làm chữ in đậm, ta dùng thuộc tính nào?",
                options: ["font-style", "font-weight", "text-decoration", "font-size"],
                correct: 1,
                explanation: "font-weight: bold; làm cho chữ trở nên in đậm."
            },
            {
                question: "Thuộc tính nào dùng để thiết lập khoảng cách giữa các dòng?",
                options: ["letter-spacing", "line-height", "word-spacing", "margin"],
                correct: 1,
                explanation: "line-height kiểm soát khoảng cách giữa các dòng văn bản."
            },
            {
                question: "Để căn giữa nội dung theo chiều ngang, ta dùng gì?",
                options: ["text-align: center", "margin: auto", "float: center", "position: center"],
                correct: 0,
                explanation: "text-align: center căn giữa nội dung văn bản theo chiều ngang."
            },
            {
                question: "Border-radius dùng để làm gì?",
                options: ["Thay đổi độ dày viền", "Làm bo góc", "Thay đổi màu viền", "Tạo shadow"],
                correct: 1,
                explanation: "border-radius làm bo tròn các góc của phần tử."
            },
            {
                question: "Thuộc tính display: none khác gì với visibility: hidden?",
                options: ["Không khác gì", "none không chiếm space, hidden vẫn chiếm", "hidden không chiếm space, none vẫn chiếm", "Cả hai đều không chiếm space"],
                correct: 1,
                explanation: "display: none loại bỏ phần tử khỏi flow, visibility: hidden ẩn nhưng vẫn chiếm space."
            },
            {
                question: "Để tạo khoảng cách bên ngoài phần tử, ta dùng thuộc tính nào?",
                options: ["padding", "margin", "border", "spacing"],
                correct: 1,
                explanation: "margin tạo khoảng cách giữa phần tử và các phần tử khác."
            },
            {
                question: "Flexbox dùng để làm gì?",
                options: ["Tạo animation", "Sắp xếp layout", "Thay đổi màu sắc", "Tạo shadow"],
                correct: 1,
                explanation: "Flexbox là mô hình layout để sắp xếp và phân bổ space trong container."
            },
            {
                question: "Thuộc tính z-index dùng để làm gì?",
                options: ["Thay đổi kích thước", "Điều khiển thứ tự layer", "Thay đổi opacity", "Tạo border"],
                correct: 1,
                explanation: "z-index kiểm soát thứ tự chồng lên nhau của các phần tử positioned."
            },
            {
                question: "Pseudo-class :hover dùng khi nào?",
                options: ["Khi click", "Khi rê chuột vào", "Khi focus", "Khi active"],
                correct: 1,
                explanation: ":hover kích hoạt khi người dùng rê chuột vào phần tử."
            }
        ],
        intermediate: [
            {
                question: "Trong Flexbox, justify-content: space-between làm gì?",
                options: ["Căn đều các item", "Căn giữa container", "Căn cuối container", "Căn đầu container"],
                correct: 0,
                explanation: "space-between phân bổ space đều giữa các flex items."
            },
            {
                question: "CSS Grid khác gì với Flexbox?",
                options: ["Grid 2 chiều, Flexbox 1 chiều", "Grid đơn giản hơn", "Flexbox mạnh hơn", "Không khác gì"],
                correct: 0,
                explanation: "CSS Grid hoạt động theo cả 2 chiều (hàng và cột), Flexbox chủ yếu 1 chiều."
            },
            {
                question: "Thuộc tính position: absolute khác gì với relative?",
                options: ["absolute dựa trên viewport, relative dựa trên parent", "absolute dựa trên parent, relative dựa trên normal flow", "Không khác gì", "absolute tĩnh, relative động"],
                correct: 1,
                explanation: "absolute định vị dựa trên positioned parent, relative dựa trên vị trí normal."
            },
            {
                question: "CSS Variables (Custom Properties) được khai báo như thế nào?",
                options: ["--variable-name", "@variable-name", "$variable-name", "var-variable-name"],
                correct: 0,
                explanation: "CSS Variables sử dụng cú pháp --variable-name để khai báo."
            },
            {
                question: "Media queries dùng để làm gì?",
                options: ["Tạo animation", "Responsive design", "Thay đổi font", "Tạo gradient"],
                correct: 1,
                explanation: "Media queries cho phép áp dụng CSS khác nhau dựa trên điều kiện thiết bị."
            },
            {
                question: "Transform: translate() làm gì?",
                options: ["Xoay phần tử", "Di chuyển phần tử", "Scale phần tử", "Skew phần tử"],
                correct: 1,
                explanation: "translate() di chuyển phần tử từ vị trí hiện tại theo trục X và Y."
            },
            {
                question: "CSS Animation khác gì với Transition?",
                options: ["Animation phức tạp hơn, Transition đơn giản", "Transition phức tạp hơn", "Không khác gì", "Animation chỉ cho hover"],
                correct: 0,
                explanation: "Animation cho phép tạo keyframes phức tạp, Transition chỉ thay đổi mượt mà giữa 2 trạng thái."
            },
            {
                question: "Box-sizing: border-box có nghĩa gì?",
                options: ["Width/height bao gồm padding và border", "Chỉ tính content", "Chỉ tính border", "Chỉ tính padding"],
                correct: 0,
                explanation: "border-box làm cho width/height bao gồm content, padding và border."
            },
            {
                question: "CSS Specificity hoạt động như thế nào?",
                options: ["Inline > ID > Class > Element", "Element > Class > ID > Inline", "Class > Element > ID > Inline", "ID > Inline > Class > Element"],
                correct: 0,
                explanation: "Thứ tự ưu tiên: Inline styles > ID > Class/Attribute/Pseudo-class > Element/Pseudo-element."
            },
            {
                question: "nth-child() và nth-of-type() khác nhau như thế nào?",
                options: ["nth-child đếm tất cả, nth-of-type chỉ đếm type cụ thể", "nth-of-type đếm tất cả, nth-child chỉ đếm type cụ thể", "Không khác gì", "nth-child cho class, nth-of-type cho id"],
                correct: 0,
                explanation: "nth-child() đếm tất cả children, nth-of-type() chỉ đếm children cùng type."
            },
            {
                question: "CSS BEM methodology là gì?",
                options: ["Block Element Modifier", "Basic Element Model", "Border Element Method", "Box Element Margin"],
                correct: 0,
                explanation: "BEM là phương pháp đặt tên class: Block__Element--Modifier."
            },
            {
                question: "CSS-in-JS là gì?",
                options: ["Viết CSS trong JavaScript", "Import CSS vào JS", "Convert CSS sang JS", "CSS framework"],
                correct: 0,
                explanation: "CSS-in-JS cho phép viết CSS dưới dạng JavaScript objects hoặc template literals."
            },
            {
                question: "CSS Modules giải quyết vấn đề gì?",
                options: ["Class name conflicts", "Browser compatibility", "Performance", "Syntax errors"],
                correct: 0,
                explanation: "CSS Modules tạo class names unique để tránh conflicts trong large applications."
            },
            {
                question: "SASS/SCSS khác gì với CSS?",
                options: ["Có variables, nesting, mixins", "Chỉ có variables", "Chỉ có nesting", "Chỉ có mixins"],
                correct: 0,
                explanation: "SASS/SCSS cung cấp variables, nesting, mixins, functions, và nhiều features khác."
            },
            {
                question: "CSS Custom Properties (Variables) có scope như thế nào?",
                options: ["Global và local scope", "Chỉ global", "Chỉ local", "Không có scope"],
                correct: 0,
                explanation: "CSS Variables có thể khai báo globally (:root) hoặc locally trong selectors."
            }
        ],
        advanced: [
            {
                question: "CSS Containment API làm gì?",
                options: ["Tối ưu performance bằng cách isolate subtree", "Tạo containers", "Chứa elements", "Tạo boundaries"],
                correct: 0,
                explanation: "CSS Containment cho phép browser tối ưu rendering bằng cách isolate phần subtree."
            },
            {
                question: "CSS Houdini là gì?",
                options: ["API để extend CSS engine", "CSS framework", "CSS preprocessor", "CSS methodology"],
                correct: 0,
                explanation: "CSS Houdini cung cấp APIs để developers can extend CSS engine với custom properties và functions."
            },
            {
                question: "CSS Logical Properties dùng để làm gì?",
                options: ["Responsive design cho different writing modes", "Tính toán logic", "Conditional styling", "Math operations"],
                correct: 0,
                explanation: "Logical properties (margin-inline-start) thay đổi dựa trên writing mode và text direction."
            },
            {
                question: "CSS Scroll Snap dùng để làm gì?",
                options: ["Control scroll behavior", "Snap to grid", "Create parallax", "Infinite scroll"],
                correct: 0,
                explanation: "Scroll Snap cho phép control chính xác vị trí dừng khi scroll."
            },
            {
                question: "CSS Subgrid là gì?",
                options: ["Child grid inherits parent grid tracks", "Sub-grid system", "Smaller grid", "Grid inside grid"],
                correct: 0,
                explanation: "Subgrid cho phép child grid inherit và align với parent grid tracks."
            },
            {
                question: "CSS Cascade Layers (@layer) dùng để làm gì?",
                options: ["Control cascade order explicitly", "Create layers in design", "Layer animations", "Layer backgrounds"],
                correct: 0,
                explanation: "@layer cho phép control explicit order của cascade, override specificity."
            },
            {
                question: "CSS :has() pseudo-class làm gì?",
                options: ["Style parent based on children", "Check if element has attribute", "Check if element has class", "Check if element has content"],
                correct: 0,
                explanation: ":has() cho phép style parent element dựa trên children elements."
            },
            {
                question: "CSS Container Queries khác gì với Media Queries?",
                options: ["Query container size thay vì viewport", "Query content", "Query parent", "Query siblings"],
                correct: 0,
                explanation: "Container Queries cho phép component responsive dựa trên container size thay vì viewport."
            },
            {
                question: "CSS @property (Houdini Properties) dùng để làm gì?",
                options: ["Define custom properties với type checking", "Create CSS variables", "Define functions", "Create mixins"],
                correct: 0,
                explanation: "@property cho phép define custom CSS properties với type checking và animation support."
            },
            {
                question: "CSS Painting API (Houdini) cho phép gì?",
                options: ["Create custom background images", "Paint elements", "Create gradients", "Draw shapes"],
                correct: 0,
                explanation: "CSS Painting API cho phép create custom images cho backgrounds, borders, etc."
            },
            {
                question: "CSS Layout API (Houdini) làm gì?",
                options: ["Create custom layout algorithms", "Layout pages", "Position elements", "Create grids"],
                correct: 0,
                explanation: "CSS Layout API cho phép developers create custom layout algorithms như masonry, etc."
            },
            {
                question: "CSS Typed OM API dùng để làm gì?",
                options: ["Manipulate CSS values as typed objects", "Type CSS", "Create types", "Type checking"],
                correct: 0,
                explanation: "Typed OM cho phép manipulate CSS values as typed JavaScript objects thay vì strings."
            },
            {
                question: "CSS Font Metrics API làm gì?",
                options: ["Access font metrics for layout calculations", "Load fonts", "Measure text", "Create fonts"],
                correct: 0,
                explanation: "Font Metrics API cung cấp access to low-level font metrics để tính toán layout chính xác."
            },
            {
                question: "CSS Worklets là gì?",
                options: ["Run JavaScript in CSS rendering pipeline", "CSS functions", "CSS mixins", "CSS variables"],
                correct: 0,
                explanation: "Worklets cho phép run JavaScript code trong CSS rendering pipeline để custom behaviors."
            },
            {
                question: "CSS @scope dùng để làm gì?",
                options: ["Limit scope của selectors", "Create scopes", "Scope variables", "Scope functions"],
                correct: 0,
                explanation: "@scope giới hạn phạm vi của CSS selectors đến một subtree cụ thể."
            },
            {
                question: "CSS Nesting (native) khác gì với preprocessor nesting?",
                options: ["Compiled at parse time thay vì build time", "Không khác gì", "Chỉ nested classes", "Chỉ nested elements"],
                correct: 0,
                explanation: "Native CSS nesting được compile bởi browser tại parse time, không cần build step."
            },
            {
                question: "CSS Relative Color Syntax (RCS) làm gì?",
                options: ["Manipulate colors relatively", "Create relative colors", "Convert color formats", "Mix colors"],
                correct: 0,
                explanation: "RCS cho phép modify colors relatively như lighten, darken dựa trên color hiện tại."
            },
            {
                question: "CSS Trigonometric functions dùng để làm gì?",
                options: ["Math calculations trong CSS", "Create shapes", "Position elements", "Animate elements"],
                correct: 0,
                explanation: "Trigonometric functions (sin, cos, tan) cho phép complex math calculations trong CSS."
            },
            {
                question: "CSS anchor positioning làm gì?",
                options: ["Position elements relative to other elements", "Anchor to viewport", "Anchor to parent", "Anchor to grid"],
                correct: 0,
                explanation: "CSS anchor positioning cho phép position elements relative to other elements thay vì container."
            },
            {
                question: "CSS view transitions dùng để làm gì?",
                options: ["Animate between page states", "Transition views", "Change themes", "Navigate pages"],
                correct: 0,
                explanation: "View Transitions API cho phép create smooth animations khi transition between different states."
            }
        ]
    },
    js: {
        basic: [
            {
                question: "Để khai báo biến trong JavaScript, ta dùng từ khóa nào?",
                options: ["variable", "var", "declare", "let"],
                correct: 1,
                explanation: "var là từ khóa cổ điển để khai báo biến trong JavaScript."
            },
            {
                question: "Phương thức nào dùng để hiển thị thông báo trong JavaScript?",
                options: ["print()", "display()", "alert()", "show()"],
                correct: 2,
                explanation: "alert() hiển thị hộp thoại thông báo với nội dung được chỉ định."
            },
            {
                question: "Để lấy phần tử HTML theo ID, ta dùng phương thức nào?",
                options: ["getElement()", "querySelector()", "getElementById()", "findElement()"],
                correct: 2,
                explanation: "getElementById() trả về phần tử có ID được chỉ định."
            },
            {
                question: "Array trong JavaScript là gì?",
                options: ["Một loại vòng lặp", "Cấu trúc dữ liệu lưu nhiều giá trị", "Một hàm", "Một biến"],
                correct: 1,
                explanation: "Array là cấu trúc dữ liệu dùng để lưu trữ nhiều giá trị trong một biến."
            },
            {
                question: "Toán tử nào dùng để so sánh bằng về giá trị và kiểu dữ liệu?",
                options: ["==", "===", "!=", "!=="],
                correct: 1,
                explanation: "=== so sánh cả giá trị và kiểu dữ liệu (strict equality)."
            },
            {
                question: "Function trong JavaScript dùng để làm gì?",
                options: ["Lưu trữ dữ liệu", "Thực hiện một tác vụ cụ thể", "Tạo biến", "Tạo vòng lặp"],
                correct: 1,
                explanation: "Function là một khối code có thể tái sử dụng để thực hiện một tác vụ."
            },
            {
                question: "Vòng lặp for dùng để làm gì?",
                options: ["Kiểm tra điều kiện", "Lặp lại code", "Khai báo biến", "Tạo hàm"],
                correct: 1,
                explanation: "Vòng lặp for thực hiện một khối code lặp lại cho đến khi điều kiện không còn đúng."
            },
            {
                question: "if...else dùng để làm gì?",
                options: ["Tạo vòng lặp", "Thực hiện code dựa trên điều kiện", "Khai báo hàm", "Tạo biến"],
                correct: 1,
                explanation: "Câu lệnh if...else thực hiện code khác nhau dựa trên các điều kiện khác nhau."
            },
            {
                question: "String concatenation dùng toán tử nào?",
                options: ["+", "-", "*", "/"],
                correct: 0,
                explanation: "Toán tử + được dùng để nối các chuỗi string với nhau."
            },
            {
                question: "console.log() dùng để làm gì?",
                options: ["Hiển thị alert", "In ra console", "Tạo file log", "Gửi dữ liệu"],
                correct: 1,
                explanation: "console.log() in thông tin ra console của trình duyệt để debug."
            }
        ],
        intermediate: [
            {
                question: "ES6 arrow function có cú pháp như thế nào?",
                options: ["function() => {}", "() => {}", "=> function() {}", "function => () {}"],
                correct: 1,
                explanation: "() => {} là cú pháp cơ bản của arrow function trong ES6."
            },
            {
                question: "Template literals dùng ký tự nào để bao quanh?",
                options: ["''", "\"\"", "``", "//"],
                correct: 2,
                explanation: "Template literals sử dụng backticks (`) để bao quanh chuỗi."
            },
            {
                question: "Destructuring assignment dùng để làm gì?",
                options: ["Tạo mảng mới", "Trích xuất giá trị từ array/object", "Sắp xếp mảng", "Lọc mảng"],
                correct: 1,
                explanation: "Destructuring cho phép trích xuất giá trị từ array hoặc object vào các biến riêng biệt."
            },
            {
                question: "Promise trong JavaScript dùng để xử lý gì?",
                options: ["Đồng bộ", "Bất đồng bộ", "Vòng lặp", "Điều kiện"],
                correct: 1,
                explanation: "Promise được sử dụng để xử lý các hoạt động bất đồng bộ."
            },
            {
                question: "async/await dùng để làm gì?",
                options: ["Tạo hàm đồng bộ", "Xử lý bất đồng bộ dễ đọc hơn", "Tạo vòng lặp", "Xử lý lỗi"],
                correct: 1,
                explanation: "async/await làm cho code bất đồng bộ dễ đọc và viết hơn."
            },
            {
                question: "Local storage khác gì với session storage?",
                options: ["Local lưu vĩnh viễn, session lưu trong session", "Session lưu vĩnh viễn, local lưu trong session", "Không khác gì", "Local cho object, session cho string"],
                correct: 0,
                explanation: "Local storage lưu dữ liệu vĩnh viễn, session storage chỉ lưu trong session hiện tại."
            },
            {
                question: "JSON.parse() dùng để làm gì?",
                options: ["Chuyển object thành JSON", "Chuyển JSON thành object", "Validate JSON", "Format JSON"],
                correct: 1,
                explanation: "JSON.parse() chuyển đổi chuỗi JSON thành object JavaScript."
            },
            {
                question: "Event listener thêm sự kiện như thế nào?",
                options: ["element.event = function", "element.addEventListener()", "element.onEvent = function", "Cả A và B"],
                correct: 3,
                explanation: "Có thể dùng cả thuộc tính event hoặc addEventListener() để thêm event listener."
            },
            {
                question: "Map và Set khác gì với Array?",
                options: ["Map lưu key-value, Set lưu unique values", "Set lưu key-value, Map lưu unique values", "Không khác gì", "Map cho string, Set cho number"],
                correct: 0,
                explanation: "Map lưu trữ key-value pairs, Set lưu trữ unique values không trùng lặp."
            },
            {
                question: "Rest parameters (...) dùng để làm gì?",
                options: ["Spread array", "Collect remaining arguments", "Copy object", "Merge arrays"],
                correct: 1,
                explanation: "Rest parameters thu thập các arguments còn lại thành một array."
            },
            {
                question: "Spread operator (...) dùng để làm gì?",
                options: ["Collect arguments", "Expand array/object", "Create rest", "Copy shallow"],
                correct: 1,
                explanation: "Spread operator mở rộng array hoặc object thành các phần tử riêng biệt."
            },
            {
                question: "Optional chaining (?.) dùng để làm gì?",
                options: ["Kiểm tra null/undefined", "Tạo optional parameters", "Chain methods", "Safe property access"],
                correct: 3,
                explanation: "Optional chaining cho phép truy cập properties an toàn mà không throw error nếu null/undefined."
            },
            {
                question: "Nullish coalescing (??) khác gì với || ?",
                options: ["|| check falsy, ?? check null/undefined", "?? check falsy, || check null/undefined", "Không khác gì", "|| cho number, ?? cho string"],
                correct: 0,
                explanation: "|| trả về right operand nếu left là falsy, ?? chỉ trả về right nếu left là null/undefined."
            },
            {
                question: "Array methods filter() làm gì?",
                options: ["Thay đổi array gốc", "Tạo array mới với elements thỏa điều kiện", "Sắp xếp array", "Tìm element"],
                correct: 1,
                explanation: "filter() tạo array mới chứa các elements thỏa mãn điều kiện trong callback function."
            },
            {
                question: "Array methods map() làm gì?",
                options: ["Lọc elements", "Tạo array mới với elements đã transform", "Tìm element", "Sắp xếp array"],
                correct: 1,
                explanation: "map() tạo array mới bằng cách gọi function trên mỗi element của array gốc."
            }
        ],
        advanced: [
            {
                question: "Closure trong JavaScript là gì?",
                options: ["Một loại vòng lặp", "Function có thể truy cập variables từ outer scope", "Một cách khai báo biến", "Một loại error"],
                correct: 1,
                explanation: "Closure là function có thể ghi nhớ và truy cập variables từ scope bên ngoài nơi nó được tạo."
            },
            {
                question: "Prototype trong JavaScript dùng để làm gì?",
                options: ["Tạo class", "Chia sẻ properties/methods giữa objects", "Tạo inheritance", "Tất cả đều đúng"],
                correct: 3,
                explanation: "Prototype cho phép objects chia sẻ properties và methods, tạo cơ chế inheritance."
            },
            {
                question: "Event loop trong JavaScript làm gì?",
                options: ["Xử lý synchronous code", "Quản lý call stack và callback queue", "Tạo vòng lặp", "Xử lý errors"],
                correct: 1,
                explanation: "Event loop điều phối giữa call stack và callback queue để xử lý asynchronous operations."
            },
            {
                question: "Hoisting trong JavaScript là gì?",
                options: ["Di chuyển declarations lên đầu scope", "Tạo variables", "Tạo functions", "Xử lý errors"],
                correct: 0,
                explanation: "Hoisting là cơ chế JavaScript di chuyển variable và function declarations lên đầu scope."
            },
            {
                question: "Currying trong functional programming là gì?",
                options: ["Tạo function mới từ function hiện có", "Transform function nhận multiple arguments thành sequence of functions", "Tạo closure", "Tạo higher-order function"],
                correct: 1,
                explanation: "Currying transform function f(a,b,c) thành f(a)(b)(c) - sequence of functions."
            },
            {
                question: "Memoization dùng để làm gì?",
                options: ["Tối ưu performance bằng cache results", "Tạo memory", "Quản lý memory", "Free memory"],
                correct: 0,
                explanation: "Memoization lưu trữ kết quả của expensive function calls để tránh tính toán lại."
            },
            {
                question: "Debouncing và throttling khác nhau như thế nào?",
                options: ["Debounce delay execution, throttle limit execution rate", "Throttle delay, debounce limit rate", "Không khác gì", "Debounce cho mouse, throttle cho keyboard"],
                correct: 0,
                explanation: "Debouncing đảm bảo function chỉ chạy sau khi stop triggering, throttling giới hạn tần suất chạy."
            },
            {
                question: "Web APIs trong JavaScript bao gồm gì?",
                options: ["DOM, Fetch, setTimeout", "JavaScript core", "Node.js APIs", "Browser APIs"],
                correct: 0,
                explanation: "Web APIs bao gồm DOM manipulation, Fetch API, timers, Web Storage, etc."
            },
            {
                question: "MutationObserver dùng để làm gì?",
                options: ["Observe changes to DOM", "Mutate objects", "Create mutations", "Track variables"],
                correct: 0,
                explanation: "MutationObserver theo dõi các thay đổi trong DOM tree và gọi callback khi có mutation."
            },
            {
                question: "Service Worker trong PWA dùng để làm gì?",
                options: ["Background processing và caching", "UI rendering", "Database operations", "Authentication"],
                correct: 0,
                explanation: "Service Workers xử lý background tasks, caching, và offline functionality trong PWA."
            },
            {
                question: "Intersection Observer API làm gì?",
                options: ["Detect element visibility in viewport", "Create intersections", "Calculate geometry", "Track mouse position"],
                correct: 0,
                explanation: "Intersection Observer phát hiện khi element intersect với viewport hoặc element khác."
            },
            {
                question: "Web Components bao gồm gì?",
                options: ["Custom Elements, Shadow DOM, HTML Templates", "React Components", "Vue Components", "Angular Components"],
                correct: 0,
                explanation: "Web Components là tập hợp các technologies: Custom Elements, Shadow DOM, và HTML Templates."
            },
            {
                question: "Generator functions (function*) dùng để làm gì?",
                options: ["Tạo iterable objects", "Generate random numbers", "Create functions", "Handle async code"],
                correct: 0,
                explanation: "Generator functions tạo functions có thể paused và resumed, trả về iterable objects."
            },
            {
                question: "Proxy object trong JavaScript dùng để làm gì?",
                options: ["Intercept object operations", "Create proxy servers", "Handle network requests", "Cache data"],
                correct: 0,
                explanation: "Proxy objects intercept và customize fundamental operations của objects (get, set, etc.)."
            },
            {
                question: "Reflect API dùng để làm gì?",
                options: ["Perform object operations safely", "Create reflections", "Mirror objects", "Copy properties"],
                correct: 0,
                explanation: "Reflect API cung cấp methods để perform object operations một cách safe và predictable."
            },
            {
                question: "WeakMap và WeakSet khác gì với Map và Set?",
                options: ["Không prevent garbage collection của keys", "Yếu hơn về performance", "Ít methods hơn", "Không iterable"],
                correct: 0,
                explanation: "WeakMap/WeakSet không prevent garbage collection của keys, cho phép memory-efficient caching."
            },
            {
                question: "Tail call optimization là gì?",
                options: ["Tối ưu recursive functions", "Tối ưu loop performance", "Tối ưu memory usage", "Tối ưu network calls"],
                correct: 0,
                explanation: "Tail call optimization cho phép recursive functions chạy mà không tăng call stack."
            },
            {
                question: "Intl API dùng để làm gì?",
                options: ["Internationalization và localization", "Internal operations", "Internet connectivity", "Integer operations"],
                correct: 0,
                explanation: "Intl API cung cấp internationalization features như number formatting, date formatting, collation."
            },
            {
                question: "Atomics API trong SharedArrayBuffer dùng để làm gì?",
                options: ["Thread-safe operations trên shared memory", "Atomic operations", "Create atoms", "Handle concurrency"],
                correct: 0,
                explanation: "Atomics API cung cấp atomic operations trên SharedArrayBuffer để thread-safe concurrency."
            },
            {
                question: "Module system trong JavaScript hiện đại dùng gì?",
                options: ["ES6 modules (import/export)", "CommonJS", "AMD", "UMD"],
                correct: 0,
                explanation: "ES6 modules với import/export syntax là standard hiện đại cho JavaScript modules."
            }
        ]
    }
};

// Biến trạng thái Quiz
let currentSubject = 'html';
let currentLevel = 'basic';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 900; // 15 phút tính bằng giây
let timerInterval;
let userAnswers = [];
let quizStartTime;

// Phần tử DOM
const levelSelection = document.getElementById('levelSelection');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const reviewContainer = document.getElementById('reviewContainer');

// Khởi tạo quiz
function initQuiz() {
    selectSubject('html');
    showLevelSelection();
}

// Chọn môn thi
function selectSubject(subject) {
    currentSubject = subject;
    
    // Cập nhật tab đang hoạt động
    document.querySelectorAll('.subject-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[onclick="selectSubject('${subject}')"]`).classList.add('active');
    
    showLevelSelection();
}

// Hiện lựa chọn cấp độ
function showLevelSelection() {
    levelSelection.style.display = 'block';
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    reviewContainer.style.display = 'none';
}

// Bắt đầu quiz
function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    // Thiết lập thời gian theo cấp độ
    const timeLimits = { basic: 900, intermediate: 1200, advanced: 1800 }; // giây
    timeLeft = timeLimits[level];
    
    levelSelection.style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    reviewContainer.style.display = 'none';
    
    startTimer();
    showQuestion();
}

// Hàm bộ đếm giờ
function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Hiển thị câu hỏi hiện tại
function showQuestion() {
    const questions = quizData[currentSubject][currentLevel];
    const question = questions[currentQuestionIndex];
    
    // Cập nhật tiến độ
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Cập nhật thanh tiến độ
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Hiển thị câu hỏi
    document.getElementById('questionText').textContent = question.question;
    
    // Hiển thị đáp án
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = (event) => selectOption(event, index);
        optionsContainer.appendChild(optionElement);
    });
    
    // Cập nhật nút điều hướng
    document.getElementById('prevBtn').style.display = currentQuestionIndex > 0 ? 'flex' : 'none';
    document.getElementById('nextBtn').style.display = 'flex';
    document.getElementById('submitBtn').style.display = 'none';
    
    // Kiểm tra nếu là câu cuối
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'flex';
    }
}

// Chọn đáp án
function selectOption(event, optionIndex) {
    // Bỏ chọn đáp án trước đó
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Đánh dấu đáp án vừa click
    event.target.classList.add('selected');
    
    // Lưu đáp án đã chọn
    userAnswers[currentQuestionIndex] = optionIndex;
}

// Hàm điều hướng
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Vui lòng chọn câu trả lời!');
        return;
    }
    
    currentQuestionIndex++;
    showQuestion();
}

function previousQuestion() {
    currentQuestionIndex--;
    showQuestion();
}

// Nộp bài
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Tính điểm
    const questions = quizData[currentSubject][currentLevel];
    score = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    showResults();
}

// Hiển thị kết quả
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    reviewContainer.style.display = 'none';
    
    const questions = quizData[currentSubject][currentLevel];
    const percentage = Math.round((score / questions.length) * 100);
    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    // Cập nhật kết quả
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = questions.length - score;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Cập nhật vòng điểm
    document.getElementById('scoreCircle').style.background = `conic-gradient(var(--primary-color) 0% ${percentage}%, #e2e8f0 ${percentage}% 100%)`;
    
    // Feedback
    let feedbackTitle, feedbackText;
    if (percentage >= 80) {
        feedbackTitle = "Xuất sắc! 🎉";
        feedbackText = "Bạn đã nắm vững kiến thức này. Tiếp tục phát huy!";
    } else if (percentage >= 60) {
        feedbackTitle = "Tốt! 👍";
        feedbackText = "Bạn có kiến thức khá tốt. Hãy ôn tập thêm để đạt kết quả cao hơn.";
    } else if (percentage >= 40) {
        feedbackTitle = "Cần cố gắng hơn 💪";
        feedbackText = "Bạn cần ôn tập thêm kiến thức. Đừng nản lòng!";
    } else {
        feedbackTitle = "Cần ôn tập kỹ 📚";
        feedbackText = "Hãy quay lại học lại các kiến thức cơ bản và thử lại bài thi.";
    }
    
    document.getElementById('resultsTitle').textContent = feedbackTitle;
    document.getElementById('feedbackTitle').textContent = feedbackTitle;
    document.getElementById('feedbackText').textContent = feedbackText;
}

// Review answers
function reviewAnswers() {
    resultsContainer.style.display = 'none';
    reviewContainer.style.display = 'block';
    
    const questions = quizData[currentSubject][currentLevel];
    const reviewQuestions = document.getElementById('reviewQuestions');
    reviewQuestions.innerHTML = '';
    
    questions.forEach((question, index) => {
        const reviewQuestion = document.createElement('div');
        reviewQuestion.className = userAnswers[index] === question.correct ? 'review-question correct' : 'review-question wrong';
        
        reviewQuestion.innerHTML = `
            <h4>Câu ${index + 1}: ${question.question}</h4>
            <p><strong>Câu trả lời của bạn:</strong> <span class="user-answer">${question.options[userAnswers[index] || 0]}</span></p>
            <p><strong>Đáp án đúng:</strong> <span class="correct-answer">${question.options[question.correct]}</span></p>
            <p><strong>Giải thích:</strong> ${question.explanation}</p>
        `;
        
        reviewQuestions.appendChild(reviewQuestion);
    });
}

// Navigation functions
function backToResults() {
    reviewContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
}

function retakeQuiz() {
    startQuiz(currentLevel);
}

function backToLevels() {
    showLevelSelection();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initQuiz);
