// Initializing an empty array to store cart items
let cartItems = [];

// Function to add a product to the cart
function addToCart(event) {
    // Preventing the default behavior of the link
    event.preventDefault();

    // Getting product details from the data attributes
    const productName = event.target.getAttribute('data-name');
    const productPrice = event.target.getAttribute('data-price');
    const productImage = event.target.getAttribute('data-image');

    // Creating a product object
    const product = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
    };

    // Adding the product to the cart
    cartItems.push(product);

    // Updating the cart UI
    updateCart();
}

// Function to update the cart
function updateCart() {
    // Getting the cart container
    const cartContainer = document.getElementById('cart-container');
    
    // Clearing the current cart items
    cartContainer.innerHTML = '';

    // Calculating total price
    let totalPrice = 0;

    // Looping through the cart items to display them
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"/>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            </div>
        `;

        cartContainer.appendChild(cartItemElement);
        totalPrice += item.price;
    });

    // Updating the total price display
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerHTML = `Total: ₹${totalPrice}`;
}

// Adding event listeners for all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.product-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

