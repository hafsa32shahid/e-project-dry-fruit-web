let carret = document.getElementById("carret");
let select =document.getElementById("select");
let toggle = false ;
select.addEventListener("click", (e) =>{
    let option = document.getElementById("options");
    let carret_one = document.querySelector(".carret1");
    let carret_two = document.querySelector(".carret2")
    if(!toggle){
        toggle = true ;
        option.style.display="inline-block";
        option.style.position = "absolute";
        option.style.top = "170px";
        carret_one.style.display="inline";
        carret_two.style.display="none";
        return;
    }{
        toggle = false;
        option.style.display="none";
        carret_one.style.display="none";
        carret_two.style.display="inline";
    }
})

let menu = document.getElementById("menu");
let sidebar= document.getElementById("side-bar");
menu.addEventListener('click', (e) =>{
    sidebar.style.transform ='translateX(0px)';
})
let closeBTN = document.getElementById("close-btn");
closeBTN.addEventListener('click', (e)=>{
    sidebar.style.transform ='translateX(-300px)'
})


const scrollContainer = document.getElementById('scroll-container');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

// Scroll amount
const scrollAmount = 300;

scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});


// scroll cards for dry fruits
const scrollContainer2 = document.getElementById('scroll-container2');
const scrollLeft2 = document.getElementById('scroll-left2');
const scrollRight2 = document.getElementById('scroll-right2');

// Scroll amount
const scrollAmount2 = 300;

scrollLeft2.addEventListener('click', () => {
    scrollContainer2.scrollBy({
        left: -scrollAmount2,
        behavior: 'smooth'
    });
});

scrollRight2.addEventListener('click', () => {
    scrollContainer2.scrollBy({
        left: scrollAmount2,
        behavior: 'smooth'
    });
});

// scroll cards for dry fruits
const scrollContainer3 = document.getElementById('scroll-container3');
const scrollLeft3 = document.getElementById('scroll-left3');
const scrollRight3 = document.getElementById('scroll-right3');

// Scroll amount
const scrollAmount3 = 300;

scrollLeft3.addEventListener('click', () => {
    scrollContainer3.scrollBy({
        left: -scrollAmount3,
        behavior: 'smooth'
    });
});

scrollRight3.addEventListener('click', () => {
    scrollContainer3.scrollBy({
        left: scrollAmount3,
        behavior: 'smooth'
    });
});

// auto move carousell js
document.addEventListener('DOMContentLoaded', function () {
    const carousel2 = document.querySelector('.carousel2');
    const cards2 = document.querySelectorAll('.cards2');
    const scrollLeft3 = document.getElementById('scroll-left3,');
   const scrollRight3 = document.getElementById('scroll-right3');
    const totalWidth = Array.from(cards2).reduce((acc, cards2) => acc + cards2.clientWidth, 0) + (cards2.length - 1) * 20;
    
    carousel2.style.width = `${totalWidth}px`;

    carousel2.addEventListener('animationiteration', () => {
        carousel.appendChild(carousel.firstElementChild);
    });
    // Scroll amount
const scrollAmount3 = 300;

scrollLeft3.addEventListener('click', () => {
    carousel2.scrollBy({
        left: -scrollAmount3,
        behavior: 'smooth'
    });
});

scrollRight3.addEventListener('click', () => {
    carousel2.scrollBy({
        left: scrollAmount3,
        behavior: 'smooth'
    });
});
});

// PURCHASE SYTEM
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