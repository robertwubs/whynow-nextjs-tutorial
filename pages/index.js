import { useState, useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'

import API from '../lib/api'
import Link from 'next/link'

//1) Generate every time

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       testData: new Date().toString()
//     },
//   }
// }

//2) Pre-generate upon build-time

// export async function getStaticProps(context) {
//   return {
//     props: {
//       testData: 'Generated at build time',
//     },
//     revalidate: 60
//   }
// }

export default function Home({ testData = 'Test data' }) {
  // const [categories, setCategories] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     setLoading(true)

  //     setTimeout(async () => {
  //       const cats = await API.getCategories()
  //       setCategories(cats)

  //       setLoading(false)
  //     }, 500)
  //   }

  //   fetchCategories()

  //   return () => {
  //     //Cleanup
  //   }
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>whynow</title>
        <meta name="description" content="Test tutorial for whynow devs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to whynow
        </h1>

        <p className={styles.description}>
          We'll get started here
        </p>
        <p>{testData}</p>

        <li>
          <Link href={`/category-1`}>
            <a>Link to category</a>
          </Link>
        </li>

        {/* {loading && <p>Loading...</p>}

        {!loading && <ul>
          {categories.map(item => <li>
            <Link href={`/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </li>)}
        </ul>} */}
      </main>

      <footer className={styles.footer}>
        Whynow tutorial &copy;
      </footer>
    </div >
  )
}
