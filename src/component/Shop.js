import React, { useState } from 'react';
import fakeData from '../data/fakeData';
import './shop.css'
import Product from './Product';
import Cart from './Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [data, setData] = useState(first10);

    const [cart, setCart] = useState([]);
    const AddProduct = (product) => {
        console.log('add product:-', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    data.map(element => 
                    <Product val={element} handle={AddProduct}>
                    </Product>)
                } 
            </div>
            <div className="cart-container">
              <Cart val={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;