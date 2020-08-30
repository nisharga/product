import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.val
    console.log(cart)
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0).toFixed(2);
    

    let shipping = 12;
    if(totalPrice == 0){
        shipping = 0
    }
    if(totalPrice > 30){
        shipping = 10
    }
    if(totalPrice > 50){
        shipping = 5
    }
    if(totalPrice > 100){
        shipping = 3
    }
    let tax = (totalPrice / 10).toFixed(2)
    let grandTotal = (totalPrice + shipping)

    // let all = (totalPrice + shipping + tax).toFixed(2);

    return (
        <div>
            <h3>Order Summary: from Cart</h3>
            <h1>Item Added:: {cart.length}</h1>
            <h2>Product Price: {totalPrice}</h2>
            <h2>Shipping: {shipping}</h2>
            <h2>Tax: {tax}</h2>
             <h2>Total: { grandTotal}</h2>
             
        </div>
    );
};

export default Cart;