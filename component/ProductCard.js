/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div>
            <div class="card mt-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlF2cjYZRwICIX7gPcxFrw_1QDwN_Kj9G-dr99XRHxA&s" class="card-img-top" alt="img"/>
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                
            </div>
            </div>
        </div>
    );
};

export default ProductCard;