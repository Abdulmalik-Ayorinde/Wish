import Head from 'next/head'
import Image from 'next/image'

import ConfettiComp from '../components/confetti'
import Form from '../components/form'

import styles from '../styles/Home.module.css'
import personface from '../public/personface.jpg'
export default function Home() {
  return (
    <>
    <Head>
      <title>Happy Birthday Person</title>
      <link type='favcon/ico' href="#" />
    </Head>
    <ConfettiComp />
    
    {/* </ConfettiComp> */}
      <main className={styles.main__container}>        
        <h2 className={styles.h2}>Happy Birthday PersonName</h2>
        <div>
        <Image 
          src={personface} 
          className={styles.main__img} 
          width='250' 
          height='250' 
          alt='person'
          layout="intrinsic"
        />
        </div>
        <Form />
      </main>
    </>
  )
}
