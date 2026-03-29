// Ẩn hiện thanh sidebar
function toggleSidebar() {
	const sidebar = document.querySelector(".sidebar");

	if (!sidebar) {
		return;
	}

	if (window.innerWidth <= 480) {
		sidebar.classList.toggle("is-hidden");
	}
}

// Ẩn thanh sidebar trên màn hình điện thoại và hiển thị trên màn hình desktop
function syncSidebarState() {
	const sidebar = document.querySelector(".sidebar");

	if (!sidebar) {
		return;
	}

	if (window.innerWidth <= 480) {
		sidebar.classList.add("is-hidden");
		return;
	}

	sidebar.classList.remove("is-hidden");
}

// Đảm bảo rằng DOM đã được tải xong trước khi gán sự kiện click cho nút menu bên trái.
document.addEventListener("DOMContentLoaded", function () {
	const Menu = document.querySelector(".menu");
	syncSidebarState();

	if (!Menu) {
		return;
	}

	Menu.addEventListener("click", toggleSidebar);
	window.addEventListener("resize", syncSidebarState);
});
