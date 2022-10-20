/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const OperationProductCard = ({product,getproducts}) => {

    const router = useRouter()


    const deleteProduct = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/deletedata/${id}`,)
           .then(function (response) {
             console.log(response.data);
             getproducts()
           })
           .catch(function (error) {
             console.log(error);
           });
 
        
    }
    return (
        <div>
        <div class="card mt-4">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlF2cjYZRwICIX7gPcxFrw_1QDwN_Kj9G-dr99XRHxA&s" class="card-img-top" alt="img"/>
        <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
            <button class="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Delete</button>
            <Link href="/update/[id]" as={`update/${product.id}`}  >
            <button  class="btn btn-primary m-1">Edit</button>
            </Link>
            <a href="#" class="btn btn-success">Details</a>
        </div>
        </div>
    </div>
    );
};

export default OperationProductCard;