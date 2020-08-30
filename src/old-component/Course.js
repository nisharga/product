import React, { useState } from 'react';
import Data from '../data/data'
import Singlecourse from './Singlecourse';
import Checkout from './Checkout';



const Shop = () => {
    const first10 = Data.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [card, setcard] = useState([])

    const handleAddProduct = (product) => {
        console.log('product Add', product);
        const newcard = [...card, product];
        setcard(newcard);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                    <h1>Product:</h1>
                    <ul>
                        {
                         product.map(val => 
                            console.log(val)
                        )
                        }
                    </ul>
            </div>
            <div className="cart-container">
                <Checkout Checkout={Checkout}></Checkout>
            </div>
        </div>
    );
};

export default Shop;











// import React, { useState } from 'react';
// import Data from '../data/data'
// import Singlecourse from './Singlecourse';


// const course = () => {
//     const first13 = Data.slice(0, 13);
//     const [course, setcourse] = useState(first13);
//     // const [card, setcard] = useState([])

//     // const handleAddProduct = (product) => {
//     //     console.log('product Add', product);
//     //     const newcard = [...card, product];
//     //     setcard(newcard);
//     // }

//     return (
//         <div>
//             <ul>
//                         {
                         
//                         }
//             </ul>
//             {
//                 course.map(data => {
                    
                       
                    
                    
//                 })
//             }
            
//             <h1>Length: {course.length}</h1> 
//             <h1>image:  <img src={course[1].img} alt=""/></h1>
//             <h1>Title: {course[1].title}</h1>
//             <h1>By: {course[1].by}</h1>
//             <h1>cost: {course[1].cost}</h1>
//             <h1>hour: {course[1].hour} view: {course[1].view}</h1>
            
//         </div>
//     );
// };

// export default course;