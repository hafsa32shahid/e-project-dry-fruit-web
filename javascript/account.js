let title = document.getElementById("title");
let name_field =document.getElementById("name-field");
// let signup_btn =document.querySelector("submit");
// let  login_btn = document.querySelector(".login-btn");

login_btn.addEventListener('click', (e)=>{
  e.preventDefault()
    name_field.style.maxHeight="0";
    title.innerText="Login";
    login_btn.style.backgroundColor="#a6cc7a";
    login_btn.style.color="white";
    signup_btn.style.backgroundColor="rgb(189, 189, 189)";
    signup_btn.style.color="#403f3f";
})
signup_btn.addEventListener('click', (e)=>{
  e.preventDefault()
    name_field.style.maxHeight= "65px";
    title.innerText="Sign Up";
    login_btn.style.backgroundColor="rgb(189, 189, 189)";
    login_btn.style.color="#403f3f";
    signup_btn.style.backgroundColor="#a6cc7a";
    signup_btn.style.color="white";
})

function validateForm() {
  // Get form inputs
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Get error elements
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  
  // Reset errors
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  
  var isValid = true;
  
  // Name validation
  if (name === "") {
  nameError.innerHTML = "Name is required";
  isValid = false;
  }
  
  // Email validation
  if (email === "") {
  emailError.innerHTML = "Email is required";
  isValid = false;
  } else if (!isValidEmail(email)) {
  emailError.innerHTML = "Invalid email format";
  isValid = false;
  }
  
  // Password validation
  if (password === "") {
  passwordError.innerHTML = "Password is required";
  isValid = false;
  } else if (password.length < 6) {
  passwordError.innerHTML = "Password must be at least 6 characters";
  isValid = false;
  }
  
  return isValid;
  }
  
  // Email format validation using regular expression
  function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
  }



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
