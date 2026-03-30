// Mã giảm giá và giá trị giảm
const coupons = {
    'WELCOME10': 50000,
    'SUMMER20': 100000,
    'VIP30': 200000,
    'EASYCODE': 75000,
};

// Các sản phẩm có sẵn
const products = {
    'Lập Trình PHP & MySQL': { price: 345000 },
    'Learning Web Design': { price: 279000 },
    'Tự Học HTML': { price: 199000 },
    'Thiết Kế Dreamweaver': { price: 235000 },
    'Clean Code': { price: 299000 },
    'Refactoring': { price: 350000 },
    'Design Patterns': { price: 410000 },
    'You Don\'t Know JS': { price: 245000 },
    'JavaScript: The Good Parts': { price: 220000 },
    'Effective Java': { price: 455000 },
    'Pro Git': { price: 180000 },
    'UX Design for Programmers': { price: 215000 },
    'The Pragmatic Programmer': { price: 340000 },
};

// Lấy giỏ hàng từ localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {};
}

// Lưu giỏ hàng vào localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, price = null, image = null, quantity = 1) {
    const cart = getCart();
    
    if (!productName) return;
    
    quantity = Math.max(1, parseInt(quantity) || 1);
    
    if (!cart[productName]) {
        cart[productName] = {
            price: price || products[productName]?.price || 0,
            quantity: quantity,
            image: image || null
        };
    } else {
        cart[productName].quantity += quantity;
    }
    
    saveCart(cart);
    updateCartBadge();
    alert(`${productName} x${quantity} đã được thêm vào giỏ hàng!`);
}

// Hiển thị danh sách sản phẩm trong giỏ
function renderCart() {
    const cart = getCart();
    const cartItemsList = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (Object.keys(cart).length === 0) {
        cartItemsList.style.display = 'none';
        emptyCart.style.display = 'block';
        updateSummary();
        return;
    }

    cartItemsList.style.display = 'block';
    emptyCart.style.display = 'none';
    cartItemsList.innerHTML = '';

    Object.entries(cart).forEach(([productName, item]) => {
        const total = item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const imgSrc = item.image || 'HinhAnh/luyentap.png';
        cartItem.innerHTML = `
            <input type="checkbox" class="cart-item-checkbox" data-product="${productName}">
            <div class="cart-item-info">
                <div class="cart-item-img">
                    <img src="${imgSrc}" alt="${productName}">
                </div>
                <div class="cart-item-details">
                    <h3>${productName}</h3>
                    <p>Mã: ${productName.substring(0, 3).toUpperCase()}</p>
                </div>
            </div>
            <div class="cart-item-price">${item.price.toLocaleString('vi-VN')} đ</div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="decreaseQuantity('${productName}')">-</button>
                <input type="number" class="qty-input" value="${item.quantity}" min="1" max="99" onchange="changeQuantity('${productName}', this.value)">
                <button class="qty-btn" onclick="increaseQuantity('${productName}')">+</button>
            </div>
            <div class="cart-item-total">${total.toLocaleString('vi-VN')} đ</div>
            <button class="cart-item-remove" onclick="removeFromCart('${productName}')">Xóa</button>
        `;
        cartItemsList.appendChild(cartItem);
    });

    updateSummary();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    const cart = getCart();
    delete cart[productName];
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

// Tăng số lượng sản phẩm
function increaseQuantity(productName) {
    const cart = getCart();
    if (cart[productName]) {
        cart[productName].quantity = Math.min(cart[productName].quantity + 1, 99);
        saveCart(cart);
        renderCart();
    }
}

// Giảm số lượng sản phẩm
function decreaseQuantity(productName) {
    const cart = getCart();
    if (cart[productName] && cart[productName].quantity > 1) {
        cart[productName].quantity -= 1;
        saveCart(cart);
        renderCart();
    }
}

// Thay đổi số lượng sản phẩm
function changeQuantity(productName, quantity) {
    const cart = getCart();
    quantity = parseInt(quantity);
    
    if (quantity < 1 || isNaN(quantity)) {
        quantity = 1;
    } else if (quantity > 99) {
        quantity = 99;
    }
    
    cart[productName].quantity = quantity;
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

// Cập nhật tóm tắt đơn hàng
function updateSummary() {
    const cart = getCart();
    const subtotalEl = document.getElementById('subtotal');
    const totalPriceEl = document.getElementById('totalPrice');
    const shippingCostEl = document.getElementById('shippingCost');
    const discountEl = document.getElementById('discount');
    const discountRowEl = document.getElementById('discountRow');
    const shippingSelectEl = document.getElementById('shipping');

    // Tính tổng tiền
    let subtotal = 0;
    Object.values(cart).forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // Phí vận chuyển
    const shippingCost = parseInt(shippingSelectEl.value) || 0;

    // Giảm giá
    let discount = 0;
    const couponCode = document.getElementById('coupon').value.trim();
    if (couponCode && coupons[couponCode]) {
        discount = coupons[couponCode];
    }

    // Tổng cộng
    const total = subtotal + shippingCost - discount;

    // Cập nhật UI
    subtotalEl.textContent = subtotal.toLocaleString('vi-VN') + ' đ';
    shippingCostEl.textContent = shippingCost.toLocaleString('vi-VN') + ' đ';
    totalPriceEl.textContent = (total < 0 ? 0 : total).toLocaleString('vi-VN') + ' đ';

    if (discount > 0) {
        discountRowEl.style.display = 'flex';
        discountEl.textContent = '-' + discount.toLocaleString('vi-VN') + ' đ';
    } else {
        discountRowEl.style.display = 'none';
    }
}

// Áp dụng mã giảm giá
function applyCoupon() {
    const couponEl = document.getElementById('coupon');
    const couponCode = couponEl.value.trim().toUpperCase();

    if (!couponCode) {
        alert('Vui lòng nhập mã giảm giá');
        return;
    }

    if (!coupons[couponCode]) {
        alert('Mã giảm giá không hợp lệ');
        couponEl.value = '';
        return;
    }

    alert(`Áp dụng mã "${couponCode}" thành công! Giảm ${coupons[couponCode].toLocaleString('vi-VN')} đ`);
    updateSummary();
}

// Thanh toán
function checkout() {
    const cart = getCart();
    
    if (Object.keys(cart).length === 0) {
        alert('Giỏ hàng trống. Vui lòng thêm sản phẩm');
        return;
    }

    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để thanh toán');
        window.location.href = 'login.html';
        return;
    }

    // Hiển thị form giao hàng
    document.querySelector('.cart-content').style.display = 'none';
    document.getElementById('shippingForm').style.display = 'block';
}

// Quay lại giỏ hàng
function backToCart() {
    document.querySelector('.cart-content').style.display = 'flex';
    document.getElementById('shippingForm').style.display = 'none';
}

// Xử lý đặt hàng
function placeOrder(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const notes = document.getElementById('notes').value.trim();
    
    if (!fullName || !email || !phone || !address) {
        alert('Vui lòng điền đầy đủ thông tin giao hàng');
        return;
    }
    
    const cart = getCart();
    
    // Tính tổng tiền
    let subtotal = 0;
    Object.values(cart).forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    const shippingCost = parseInt(document.getElementById('shipping').value) || 0;
    let discount = 0;
    const couponCode = document.getElementById('coupon').value.trim();
    if (couponCode && coupons[couponCode]) {
        discount = coupons[couponCode];
    }
    
    const total = Math.max(subtotal + shippingCost - discount, 0);
    
    // Tạo object đơn hàng
    const order = {
        orderId: 'ORD-' + Date.now(),
        customer: {
            name: fullName,
            email: email,
            phone: phone,
            address: address,
            notes: notes
        },
        items: cart,
        pricing: {
            subtotal: subtotal,
            shipping: shippingCost,
            discount: discount,
            total: total
        },
        orderDate: new Date().toISOString(),
        status: 'Đã đặt hàng'
    };
    
    // Lấy danh sách đơn hàng cũ từ localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Cập nhật đơn hàng vào localStorage (không download file js nữa)
    localStorage.setItem('orders', JSON.stringify(orders));
    
    alert('Đặt hàng thành công! Đơn hàng đã được lưu trữ.');
    
    // Xóa giỏ hàng
    localStorage.removeItem('cart');
    updateCartBadge();
    renderCart();

    // Hiển thị lại form/giỏ hàng với thông báo xác nhận
    const shippingForm = document.getElementById('shippingForm');
    shippingForm.innerHTML = `
        <h2>Đặt hàng thành công!</h2>
        <p>Đơn hàng của bạn đã lưu vào bộ nhớ trình duyệt.</p>
        <p>Vui lòng vào <a href=\"trangchu.html\">Trang chủ</a> để tiếp tục mua sắm.</p>
    `;
}

// Cập nhật badge giỏ hàng
function updateCartBadge() {
    const cart = getCart();
    const badgeEl = document.getElementById('cartBadge');
    
    if (!badgeEl) return;
    
    let totalItems = 0;
    Object.values(cart).forEach(item => {
        totalItems += item.quantity;
    });
    
    badgeEl.textContent = totalItems;
    
    // Ẩn badge nếu 0 items
    if (totalItems === 0) {
        badgeEl.style.display = 'none';
    } else {
        badgeEl.style.display = 'flex';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartBadge();

    // Nút áp dụng mã giảm giá
    const applyCouponBtn = document.getElementById('applyCoupon');
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', applyCoupon);
    }

    // Nút thanh toán
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Nút quay lại giỏ hàng
    const backToCartBtn = document.getElementById('backToCart');
    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', backToCart);
    }

    // Form đặt hàng
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', placeOrder);
    }

    // Select vận chuyển thay đổi
    const shippingSelect = document.getElementById('shipping');
    if (shippingSelect) {
        shippingSelect.addEventListener('change', updateSummary);
    }

    // Input mã giảm giá thay đổi (tự động cập nhật)
    const couponInput = document.getElementById('coupon');
    if (couponInput) {
        couponInput.addEventListener('input', () => {
            // Chỉ cập nhật nếu có mã hợp lệ
            if (couponInput.value.trim() && coupons[couponInput.value.trim().toUpperCase()]) {
                updateSummary();
            } else if (!couponInput.value.trim()) {
                updateSummary();
            }
        });
    }

    // Select all checkbox
    const selectAllBtn = document.getElementById('selectAll');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.cart-item-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = e.target.checked;
            });
        });
    }
});
