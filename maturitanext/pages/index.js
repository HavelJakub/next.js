import Head from 'next/head';
import Welcome from '../components/welcome';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import SwiperProducts from '../components/product-swiper';
import React from 'react';

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
