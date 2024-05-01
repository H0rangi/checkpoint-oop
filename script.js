class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.length;
    }

    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    displayCart() {
        this.items.forEach((item, index) => {
            console.log(`Item ${index + 1}: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const amdPrice = parseFloat(document.getElementById("amd-price").innerHTML);
    const nvdPrice = parseFloat(document.getElementById("nvd-price").innerHTML);

    const product1 = new Product(1, 'AMD', amdPrice);
    const product2 = new Product(2, 'NVD', nvdPrice);

    const cart = new ShoppingCart();

    const quantityAmd = parseFloat(document.getElementById("form").value);
    const quantityNvd = parseFloat(document.getElementById("form1").value);

    cart.addItem(product1, quantityAmd);
    cart.addItem(product2, quantityNvd);

    console.log("Total Items in Cart:", cart.getTotalItems());
    console.log("Displaying Cart Items:");
    cart.displayCart();
});
