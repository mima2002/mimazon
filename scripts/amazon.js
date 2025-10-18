/*
MAIN IDEA OF JAVASCRIPT
1. Save the data in javaScript
2. Generate the HTML
3. Make it interactive.
*/


//GET A VARIABLE OUT OF A FILE
// 1. Add type="module" attribute
// 2. Export
// 3. import
//BENEFITS OF MODULE
//1. Helps us avoid naming conflicts
//2. we don't have to worry about the order of our files
//3.
import{cart, addToCart, } from '../data/cart.js';
import{products} from '../data/products.js'
import { formatCurrency } from './utils/money.js';
let productsHTML = '';

//Generating html in javaScript
//it makes our code brief
//and we only need to save only in array.
products.forEach((product) => {
    productsHTML +=
    `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container js-product-quantity-container">
            <select class="product-select">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`

       
});


//DOM is Used to put all the html
document.querySelector('.js-product-grid').innerHTML = productsHTML

//add event listener




export function updateCartQuantity() {
            let cartQuantity = 0;
         cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        
  
});

 document.querySelector('.js-cart-quantity')
     .innerHTML = cartQuantity;
  
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () => {
       //DATA ATTRIBUTE 
       // - IS just another HTML attribute
       // -allows us to attach any information element
       // Known as the kebab case
       // dataset gives us all the information  in the data attribute
       const productId = button.dataset.productId;
         addToCart(productId);
       updateCartQuantity();
     
  

     //replacing the cart quantity
     
        });
       

     
});  