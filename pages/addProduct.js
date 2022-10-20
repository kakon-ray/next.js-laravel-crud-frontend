/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Meta from '../component/Meta';

const addProduct = () => {



  const nameRef = useRef("");
  const imgRef = useRef("");
  const pirceRef = useRef("");

  const addProduct = (e) => {
    e.preventDefault();

   let name = nameRef.current.value;
   let img = imgRef.current.value;
    let price = pirceRef.current.value;

    axios.post('http://127.0.0.1:8000/api/addproduct', {
     name:name,
     img:img,
     price:price
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
       <main>
        <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
         <div className='container my-5'>
           <div className='card p-5'>
           <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" name="name" class="form-control" ref={nameRef}/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Prduct Price</label>
    <input type="text" name="name" class="form-control" ref={pirceRef}/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image</label>
    <input type="text" name="name" class="form-control" ref={imgRef}/>
  
  </div>

 


  <button type="submit" class="btn btn-primary" onClick={addProduct}>Submit</button>
            </form>
           </div>
        </div>
       </main>
    );
};

export default addProduct;