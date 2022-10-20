import Head from 'next/head'
import Image from 'next/image'
import FooterMenue from '../component/FooterMenue'
import HeaderMenue from '../component/HeaderMenue'
import Meta from '../component/Meta'
import ProductCard from '../component/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home({products}) {
  console.log(products)

  return (
    <>
      <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
      
      <main className='my-5'>
        <div className='container'>
          <div className='row'>
            {
             products.map(item => {
              return(
                <div className='col-lg-3' key={item.id}>
                <ProductCard product={item}/>
                </div>
              )
             })
            }
           
           
          </div>
        </div>
      </main>
       
    </>
  )
}

export const getServerSideProps = async() => {
    
  const res = await fetch(`http://127.0.0.1:8000/api/getproduct`);
  let products = await res.json();

  return{
    props:{
        products
    }
  }

}