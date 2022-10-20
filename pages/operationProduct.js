/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Meta from '../component/Meta';
import OperationProductCard from '../component/OperationProductCard';
import ProductCard from '../component/ProductCard';

const allProduct = () => {
  const [allProducts,setALlProducts] = useState([])

  const getproducts = async() => {
    const res = await fetch(`http://127.0.0.1:8000/api/getproduct`);
    let allProducts = await res.json();
    setALlProducts(allProducts);
  }

 useEffect(()=>{
  getproducts()
 },[])


  
    return (
        <>
        <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
        
        <main className='my-5'>
          <div className='container'>
            <div className='row'>

              {
                allProducts.map(item => {
                  return(
                    <div className='col-lg-3' key={item.id}>
                  <OperationProductCard product={item} getproducts={getproducts}/>
                  </div>
                  )
                })
              }
             
         
            </div>
          </div>
        </main>
         
      </>
    );
};


export default allProduct;