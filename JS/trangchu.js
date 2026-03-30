const bookDescriptions = {
    'Lập Trình PHP & MySQL': 'Chương trình từ bài cơ bản đến nâng cao, kèm MySQL, thực hành form, CRUD, xây dựng dự án web thực tế.',
    'Learning Web Design': 'Hướng dẫn HTML, CSS, responsive, thiết kế giao diện hiện đại dành cho người mới.',
    'Tự Học HTML': 'Nền tảng HTML cơ bản, semantic, form, layout, đồ án thực hành để tự học nhanh.',
    'Thiết Kế Dreamweaver': 'Hướng dẫn thiết kế giao diện với Dreamweaver, trình bày, tạo form, template động.',
    'Clean Code': 'Các nguyên tắc viết mã sạch, dễ đọc, dễ bảo trì và tổ chức code tốt cho dự án thực tế.',
    'Refactoring': 'Kỹ thuật tối ưu, tái cấu trúc code mà không làm thay đổi hành vi, giúp code chuẩn và hiệu quả.',
    'Design Patterns': '26 mẫu thiết kế phần mềm phổ biến trong OOP, giải pháp thực tế cho các bài toán lập trình.',
};

const bookImages = {
    'Lập Trình PHP & MySQL': 'HinhAnh/Lập Trình PHP & MySQL.jpg',
    'Learning Web Design': 'HinhAnh/Learning Web Design.jpg',
    'Tự Học HTML': 'HinhAnh/Tự Học HTML.jpg',
    'Thiết Kế Dreamweaver': 'HinhAnh/Thiết Kế Dreamweaver.jpg',
    'Clean Code': 'HinhAnh/Clean Code.jpg',
    'Refactoring': 'HinhAnh/Refactoring.jpg',
    'Design Patterns': 'HinhAnh/Design Patterns.jpg',
};

const bookModal = document.createElement('div');
bookModal.id = 'bookModal';
bookModal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="modalTitle">Tiêu đề</h2>
            <button class="close-modal" id="modalClose">Đóng</button>
        </div>
        <p id="modalDesc">Mô tả...</p>
        <p id="modalPrice" style="font-weight:800; margin-top: 1rem; color: #2563eb;"></p>
        <button id="modalAddCart" class="btn-checkout" style="margin-top: 1rem; width: 100%;">Thêm vào giỏ</button>
    </div>
`;

document.body.appendChild(bookModal);

function openBookModal(title, price) {
    const modal = document.getElementById('bookModal');
    const titleNode = document.getElementById('modalTitle');
    const descNode = document.getElementById('modalDesc');
    const priceNode = document.getElementById('modalPrice');
    const addCartBtn = document.getElementById('modalAddCart');

    titleNode.textContent = title;
    descNode.textContent = bookDescriptions[title] || 'Thông tin sách đang cập nhật. Hãy liên hệ để biết thêm chi tiết.';
    priceNode.textContent = 'Giá: ' + price;

    addCartBtn.onclick = () => {
        if (typeof addToCart === 'function') {
            addToCart(title);
        } else {
            alert('Lỗi: Không thể thêm vào giỏ hàng');
        }
        closeBookModal();
    };

    modal.classList.add('active');
}

function closeBookModal() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('active');
}

document.addEventListener('click', (event) => {
    const details = event.target.closest('.btn-detail');
    if (details) {
        const card = details.closest('.product-card');
        if (!card) return;

        const title = card.querySelector('.product-info h3')?.textContent.trim();
        const price = card.querySelector('.product-info .price')?.textContent.trim();
        if (title && price) {
            openBookModal(title, price);
        }
    }

    if (event.target.id === 'modalClose' || event.target.id === 'bookModal') {
        closeBookModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeBookModal();
    }
});

function openDetailBook(event) {
    event.preventDefault();
    const card = event.target.closest('.product-card');
    if (!card) return;

    const title = card.querySelector('.product-info h3')?.textContent.trim();
    const price = card.querySelector('.product-info .price')?.textContent.trim();
    if (title && price) {
        openBookModal(title, price);
    }
}

// Hàm tương thích với nút Đặt hàng 
function addCart(productId) {
    // Map ID thành tên sản phẩm
    const productMap = {
        'sp001': 'Lập Trình PHP & MySQL',
        'sp002': 'Learning Web Design',
        'sp003': 'Tự Học HTML',
        'sp004': 'Thiết Kế Dreamweaver',
        'sp005': 'Clean Code',
        'sp006': 'Refactoring',
        'sp007': 'Design Patterns',
    };

    const productName = productMap[productId];
    const productImage = bookImages[productName] || null;
    
    // Đọc số lượng từ input
    const quantityInput = document.getElementById(productId);
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    
    if (productName && typeof addToCart === 'function') {
        addToCart(productName, null, productImage, quantity);
    } else {
        console.error('Lỗi: Không thể thêm sản phẩm vào giỏ', productName, typeof addToCart);
    }
}
