/* eslint-disable @next/next/no-img-element */
import React from 'react';

const OperationProductCard = () => {
    return (
        <div>
        <div class="card mt-4">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlF2cjYZRwICIX7gPcxFrw_1QDwN_Kj9G-dr99XRHxA&s" class="card-img-top" alt="img"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
            <a href="#" class="btn btn-danger">Delete</a>
            <a href="#" class="btn btn-primary m-1">Edit</a>
            <a href="#" class="btn btn-success">Details</a>
        </div>
        </div>
    </div>
    );
};

export default OperationProductCard;