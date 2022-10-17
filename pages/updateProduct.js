import React from 'react';
import Meta from '../component/Meta';

const updateProduct = () => {
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
    <input type="text" name="name" class="form-control" />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Prduct Price</label>
    <input type="text" name="name" class="form-control" />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Image</label>
    <input type="text" name="name" class="form-control" />
  
  </div>

 


  <button type="submit" class="btn btn-primary">Update</button>
            </form>
           </div>
        </div>
       </main>
        </div>
    );
};

export default updateProduct;