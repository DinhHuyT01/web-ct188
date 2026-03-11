// Ẩn hiện thanh sidebar
function toggleSidebar() {
	const sidebar = document.querySelector(".sidebar");

	if (!sidebar) {
		return;
	}

	sidebar.classList.toggle("is-hidden");
}

// Đảm bảo rằng DOM đã được tải xong trước khi gán sự kiện click cho nút menu bên trái.
document.addEventListener("DOMContentLoaded", function () {
	const navLeft = document.querySelector(".nav-left");

	if (!navLeft) {
		return;
	}

	navLeft.addEventListener("click", toggleSidebar);
});
