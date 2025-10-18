import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js'



export function renderPaymentSummary() {

    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {

    const product = getProduct(cartItem.productId);
    if (product) {
    productPriceCents += product.priceCents * cartItem.quantity;
    }
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents
   })
   console.log(productPriceCents)
   console.log(shippingPriceCents);
}

/*
import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js'; // assuming this exists

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    if (cartItem.quantity <= 0) return;

    const product = getProduct(cartItem.productId);
    if (!product) return;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    if (!deliveryOption) return;

    productPriceCents += product.priceCents * cartItem.quantity;
    shippingPriceCents += deliveryOption.priceCents;
  });

  console.log('Products:', formatCurrency(productPriceCents));
  console.log('Shipping:', formatCurrency(shippingPriceCents));
}
*/