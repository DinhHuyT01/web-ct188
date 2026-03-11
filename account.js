const danhSachTaiKhoan = [
    { username: "giangvien", password: "giangvien123", role: "Giảng viên" },
    { username: "sinhvien", password: "sinhvien123", role: "Sinh viên" },
    { username: "admin", password: "admin123", role: "Quản trị viên" }
];

function xuLyDangNhap(event) {

    event.preventDefault();

    const userInp = document.getElementById('username').value;
    const passInp = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

    // Kiểm tra xem tài khoản nhập vào có khớp với tài khoản nào trong danh sách không
    const timThay = danhSachTaiKhoan.find(acc => acc.username === userInp && acc.password === passInp);

    if (timThay) {
        alert("Đăng nhập thành công! Quyền: " + timThay.role);
        // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        window.location.href = "trang-chu.html"; 
    } else {
        errorMsg.style.display = "block";
    }
}

document.getElementById('loginForm').addEventListener('submit', xuLyDangNhap);