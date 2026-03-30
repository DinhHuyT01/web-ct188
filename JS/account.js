const danhSachTaiKhoan = [
    { username: "user", password: "user123", role: "Người dùng" },
];

function xuLyDangNhap(event) {
    event.preventDefault();

    const userInp = document.getElementById('username').value;
    const passInp = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

    const timThay = danhSachTaiKhoan.find(acc => acc.username === userInp && acc.password === passInp);

    if (timThay) {
        alert("Đăng nhập thành công! Quyền: " + timThay.role);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userName', timThay.username);
        localStorage.setItem('userRole', timThay.role);
        window.location.href = "trangchu.html";
    } else {
        if (errorMsg) errorMsg.style.display = "block";
    }
}

function capNhatNavDangNhap() {
    const authContainer = document.getElementById('authContainer');
    if (!authContainer) return;

    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userName = localStorage.getItem('userName') || 'Người dùng';

    // Giữ lại phần icon giỏ hàng nếu có
    const cartNode = authContainer.querySelector('.btn-icon, .cart');
    authContainer.innerHTML = '';
    if (cartNode) {
        authContainer.appendChild(cartNode);
    }

    if (loggedIn) {
        const welcomeSpan = document.createElement('span');
        welcomeSpan.className = 'login-welcome';
        welcomeSpan.textContent = `Xin chào, ${userName}`;

        const logoutBtn = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.id = 'logoutBtn';
        logoutBtn.className = 'btn-primary';
        logoutBtn.textContent = 'Đăng xuất';

        authContainer.appendChild(welcomeSpan);
        authContainer.appendChild(logoutBtn);

        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            window.location.href = 'trangchu.html';
        });
    } else {
        const loginBtn = document.createElement('a');
        loginBtn.href = 'login.html';
        loginBtn.className = 'btn-primary lg-btn';
        loginBtn.id = 'loginBtn';
        loginBtn.textContent = 'Đăng nhập';

        authContainer.appendChild(loginBtn);
    }
}

function setActiveNav() {
    const path = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navLinks.length) return;

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const hrefBase = href.split('/').pop();
        if (hrefBase === path || (path === '' && hrefBase === 'trangchu.html')) {
            link.classList.add('active');
        }
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', xuLyDangNhap);
}

window.addEventListener('load', () => {
    capNhatNavDangNhap();
    setActiveNav();
});
window.addEventListener('storage', capNhatNavDangNhap);
