import React from 'react'
import styles from './home.module.scss'
import { GetServerSideProps } from '../../node_modules/next';
import Head from '../../node_modules/next/head'
import { Header } from '../components/Header/index'
import { stripe } from '../services/stripe';


function Home() {
  return (
    <>
      <Head>
        <title>
          Início | ig.news
        </title>
      </Head>
      <Header/>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getSeverSideProps : GetServerSideProps= async () => {


}

export default Home