import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import WithSubnavigation from '../components/Header'
import SplitScreen from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Features from '../components/Features'
import Form from '../components/Form';
import SmallCentered from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Masafi</title>
        <meta name="description" content="Masafi Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <WithSubnavigation />

      <Box pt={20} className={styles.main} backgroundImage={'/images/hero_image.png'} backgroundSize={{base:'inherit', md: 'contain'}} backgroundRepeat={'no-repeat'} backgroundPosition={{base:'-250px top', md: 'left top'}} maxW={'100vw'} >
        <div id="home">  
          <SplitScreen />
        </div>
        <div id="about" >
          <About />
        </div>
        <Products />
        <Features />
        <div id="contact" >
          <Form />
        </div>
        <SmallCentered />
      </Box>
      
      
    </div>
  )
}
