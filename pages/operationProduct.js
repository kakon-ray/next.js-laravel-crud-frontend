import React from 'react';
import Meta from '../component/Meta';
import OperationProductCard from '../component/OperationProductCard';
import ProductCard from '../component/ProductCard';

const allProduct = () => {
    return (
        <>
        <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
        
        <main className='my-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
              <OperationProductCard/>
              </div>
              <div className='col-lg-3'>
              <OperationProductCard/>
              </div>
              <div className='col-lg-3'>
              <OperationProductCard/>
              </div>
              <div className='col-lg-3'>
              <OperationProductCard/>
              </div>
              <div className='col-lg-3'>
              <OperationProductCard/>
              </div>
            </div>
          </div>
        </main>
         
      </>
    );
};

export default allProduct;