import React from 'react';
import { addDataInLocalStorage } from '../Utilities/localData';
import './Product.css'

const Product = (props) => {
        // console.log(props.product)
        const { name, price, brand, image_link, id } = props.product;

        // Handle Local Storage:
        const handleAddToCart = (id) => {
                addDataInLocalStorage(id)
        }
        return (
                <div className="product">
                        <div style={{
                                height: '350px',
                                overflow: 'hidden',
                        }}>
                                <img src={image_link} alt="" />
                                <h3>{name}</h3>
                                <h2>Price: ${price} ID: {id}</h2>
                                <p>Brand: {brand}</p>
                        </div>
                        <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
                </div>
        );
};

export default Product;