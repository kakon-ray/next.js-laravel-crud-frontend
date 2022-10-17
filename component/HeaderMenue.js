import Link from 'next/link';
import React from 'react';

const HeaderMenue = () => {
    return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <Link class="nav-item" href="/">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        <Link class="nav-item" href="/operationProduct">
          <a class="nav-link active" aria-current="page" href="#">Product Operation</a>
        </Link>
        <Link class="nav-item" href="/addProduct">
          <a class="nav-link active" aria-current="page" href="#">Add Product</a>
        </Link>
        <Link class="nav-item" href="/updateProduct">
          <a class="nav-link active" aria-current="page" href="#">Update Product</a>
        </Link>
       
      
      </ul>
    </div>
  </div>
</nav>
    </div>
    );
};

export default HeaderMenue;