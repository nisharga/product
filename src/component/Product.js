import React from 'react';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price, seller, shipping, stock} = props.val;  
    return (
        <div className="product">
            <div className="">
               <img src={img} alt=""/>
            </div>
            <div className="">
            <h6>Name: {name}</h6>
            <h6>Price: {price}</h6>
            <p>Sellar: {seller}, ShippIng: {shipping}, Stock: {stock}</p>

            <button onClick={() => props.handle(props.val)}
            className="btn btn-primary">Buy Now</button>

            </div>
        </div>
    );
};

export default Product;