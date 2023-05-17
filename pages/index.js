import Welcome from '../components/welcome';
import Layout from '../components/Layout';
import SwiperProducts from '../components/product-swiper';
import React from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    <Layout>
      <Welcome />
      
      <SwiperProducts />
      <style jsx global>{`
      
      body {
        margin: 0;
        padding: 0;
        background-color:#ecf0f1;
      }
    `}</style>

      

    </Layout>
    
  )
}
