/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Meta from '../../component/Meta';

const updateProduct = ({params}) => {

  const [products,setProducts] = useState({})
  const router = useRouter()

  const {id} = params;
  const getproducts = async() => {

    const res = await fetch(`http://127.0.0.1:8000/api/get-single-porduct/${id}`);
    let products = await res.json();
    setProducts(products);
  }

 useEffect(()=>{
  getproducts()
  
 },[])

 const nameRef = useRef("");
 const imgRef = useRef("");
 const pirceRef = useRef("");


 const updateProduct = (e) => {
  e.preventDefault();

 let name = nameRef.current.value;
 let img = imgRef.current.value;
  let price = pirceRef.current.value;

  axios.post('http://127.0.0.1:8000/api/updateproduct', {
   name:name,
   img:img,
   price:price,
   id:id
  })
  .then(function (response) {
    console.log(response.data);
    getproducts()
    router.back()
  })
  .catch(function (error) {
    console.log(error);
  });

}


    return (
        <div>
        <h2 className='text-center pt-5'>Update Product</h2>
            <main>
        <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
         <div className='container my-5'>
           <div className='card p-5'>
           <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" name="name" ref={nameRef} defaultValue={products.name} class="form-control" />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Prduct Price</label>
    <input type="text" name="name" ref={pirceRef} defaultValue={products.price} class="form-control" />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image</label>
    <input type="text" name="name" ref={imgRef} defaultValue={products.img} class="form-control" />
  
  </div>

 


  <button type="submit" class="btn btn-primary" onClick={updateProduct}>Update</button>
            </form>
           </div>
        </div>
       </main>
        </div>
    );
};


export const getServerSideProps = async(context) => {
      return{
    props:{params: context.params}
  }

}

export default updateProduct;