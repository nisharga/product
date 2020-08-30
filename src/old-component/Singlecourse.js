// import React from 'react';



// const Singlecourse = (props) => {
//     return (
//         <div className="product">
//             <div className="">
//                 <h1>this is</h1>
//             </div>
//             <div className="">
//                 <h5>nam</h5>
//                 <h6>by:</h6>
//                 <h4>$price</h4>
//                 <h5 className="black">
//                 <small>only left in stock - order soon</small></h5>
//                 <button onClick={() => 
//                 props.handleAddProduct(props.product)}>
//                     <i className="fa fa-shopping-cart"></i>
//                     Add to Cart...
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Singlecourse;


import React from 'react';
const Product = (props) => { 
    // const {img, name, seller, price, stock} = props.product;
    return (
        
        <div className="product">
            <div className="">
                <h1>Img</h1>
            </div>
            <div className="">
               <h1>fsfs</h1>
                {/* <h5 className="black"><small>only {} left in stock - order soon</small></h5> */}
                {/* <button onClick={() => props.handleAddProduct(props.product)}>
                    
                    Add to Cart...
                </button> */}
            </div>
        </div>
    );
};

export default Product;