import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price , 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 12.99;
    if(total > 100){
        shipping = 5;
    }
    if(total > 50){
        shipping = 3;
    }else if(total <= 0){
        shipping = 0;
    }

    const tax = total / 10;

    const formatNumber = num => {
        const presison = num.toFixed(2);
        return Number(presison);
    }

    return (
        <div>
            <h3>Order Summary: from Cart</h3>
            {/* <p>Items Ordered: {cart.length}</p>
            <p>Price: {formatNumber(total)}</p>
            <p><small>shipping Cost {shipping}</small></p>
            <p><small>Tax + VAT {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(total + shipping)}</p> */}
        </div>
    );
};

export default Cart;