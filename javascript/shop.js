const scrollingImages = document.querySelector('.scrolling-images');

function autoScroll() {
    scrollingImages.scrollBy({ left: 1, behavior: 'smooth' });

    if (scrollingImages.scrollLeft + scrollingImages.clientWidth >= scrollingImages.scrollWidth) {
        scrollingImages.scrollLeft = 0; // Reset to start
    }
}

setInterval(autoScroll, 20); // Adjust speed by changing the interval time

//         document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.card button');

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             alert(this.previousElementSibling.previousElementSibling.innerText + ' has been added to your cart.');
//         });
//     });
// });
const reviews = [
    { text: "Great quality and fast delivery!", author: "John Doe" },
    { text: "The almonds are fresh and tasty.", author: "Jane Smith" },
    { text: "I love the packaging and the service.", author: "Mike Johnson" },
    // Add more reviews as needed
];

function loadReviews() {
    const reviewsContainer = document.querySelector('.customer-reviews');
    reviewsContainer.innerHTML = '<h3>Customer Reviews</h3>'; // Reset the container

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        reviewElement.innerHTML = `
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">
                <span>- ${review.author}</span>
            </div>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
}

window.onload = loadReviews;


document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        document.getElementById('email').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // Handle quantity increase and decrease
let cart_div=document.querySelector("#cart");
let add_ToCart=document.getElementById("add-to-cart");
let close_cart=document.getElementById("close-cart");
add_ToCart.addEventListener('click',()=>{
   cart_div.style.display="block";
})
close_cart.addEventListener("click", () => {
        cart_div.style.display = "none"
 })
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let currentValue = parseInt(input.value);
            if (this.classList.contains('minus')) {
                input.value = Math.max(1, currentValue - 1);
            } else if (this.classList.contains('plus')) {
                input.value = Math.min(100, currentValue + 1);
            }
        });
    });

    // Handle add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.parentElement;
            const productName = productCard.querySelector('.product-name').textContent;
            const quantity = parseInt(productCard.querySelector('.quantity-input').value);
            const price = productCard.querySelector('.price').textContent; // Example price, you can replace it with dynamic pricing
            addToCart(productName, quantity, price);
        });
    });

    // Add item to cart
    function addToCart(productName, quantity, price) {
        let existingItem = cartItems.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ name: productName, quantity: quantity, price: price });
        }
        cart_div.style.display="block";
        cart_div. style.position="fixed";
        updateCartUI();
    }
    
    // Update cart UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;

            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} x${item.quantity}</span></span> <button  class="remove-cart-item"">Remove</button>
               
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = `Rs${total.toFixed(2)}`;
        
    } 
    
    // Handle purchase button click
    document.querySelector('.purchase-btn2').addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert('Purchase successful!');
        cartItems.length = 0; // Clear the cart
        updateCartUI(); // Update the cart UI
    });
});