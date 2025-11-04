// 购物车功能
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
let cart = [];

// 计算购物车总价
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// 渲染购物车
function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
    });
    calculateTotal();
}

// 添加到购物车事件
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
        cart.push({ name, price });
        renderCart();
        alert('Added to cart!');
    });
});

// 评论功能
const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');
const commentList = document.getElementById('comment-list');

submitComment.addEventListener('click', () => {
    if (commentInput.value.trim() === '') return;
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.textContent = commentInput.value;
    commentList.appendChild(comment);
    commentInput.value = '';
});