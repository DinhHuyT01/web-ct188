// Ẩn hiện thanh sidebar
function toggleSidebar() {
	const sidebar = document.querySelector(".sidebar");
	// Nếu không tìm thấy sidebar thì return
	if (!sidebar) {
		return;
	}
	// Chỉ hoạt động ở màn hình điện thoại
	if (window.innerWidth <= 480) {
		sidebar.classList.toggle("is-hidden");
	}
}

// Ẩn thanh sidebar trên màn hình điện thoại và hiển thị trên màn hình desktop
function syncSidebarState() {
	const sidebar = document.querySelector(".sidebar");
	// Nếu không tìm thấy sidebar thì return
	if (!sidebar) {
		return;
	}
	// Nếu là màn hình điện thoại thì ẩn sidebar
	if (window.innerWidth <= 480) {
		sidebar.classList.add("is-hidden");
		return;
	}
	// Nếu là màn hình desktop thì luôn hiển thị sidebar
	sidebar.classList.remove("is-hidden");
}

// Đảm bảo rằng DOM đã được tải xong trước khi gán sự kiện click cho nút menu
document.addEventListener("DOMContentLoaded", function () {
	const menu = document.querySelector(".menu");
	syncSidebarState();
	// Nếu không tìm thấy nút menu thì return
	if (!menu) {
		return;
	}
	// Gán sự kiện click cho nút menu để ẩn hiện sidebar
	menu.addEventListener("click", toggleSidebar);
	window.addEventListener("resize", syncSidebarState);
});
