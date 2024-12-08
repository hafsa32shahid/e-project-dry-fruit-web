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


document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // Handle quantity increase and decrease
    let cart_div=document.querySelector("#cart");
    let add_ToCart=document.querySelector(".add-to-cart-btn");
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