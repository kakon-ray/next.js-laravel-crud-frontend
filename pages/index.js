import Head from 'next/head'
import Image from 'next/image'
import FooterMenue from '../component/FooterMenue'
import HeaderMenue from '../component/HeaderMenue'
import Meta from '../component/Meta'
import ProductCard from '../component/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>
      
      <main className='my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
            <ProductCard/>
            </div>
            <div className='col-lg-3'>
            <ProductCard/>
            </div>
            <div className='col-lg-3'>
            <ProductCard/>
            </div>
            <div className='col-lg-3'>
            <ProductCard/>
            </div>
            <div className='col-lg-3'>
            <ProductCard/>
            </div>
          </div>
        </div>
      </main>
       
    </>
  )
}
