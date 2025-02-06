let orderList = [];
let totalPrice = 0;

function addToOrder(item, price) {
    orderList.push(item);
    totalPrice += price;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderListElement = document.getElementById('order-list');
    orderListElement.innerHTML = '';

    orderList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        orderListElement.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: ₹${totalPrice}`;
}

function submitOrder() {
    if (orderList.length === 0) {
        alert("Your order is empty!");
        return;
    }

    alert(`Order submitted!\nItems: ${orderList.join(', ')}\nTotal: ₹${totalPrice}`);
    // Reset order
    orderList = [];
    totalPrice = 0;
    updateOrderSummary();
}