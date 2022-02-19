import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import API from '../lib/api'

// //1) Generate every time
// export async function getServerSideProps({ params: { category } }) {
//     return {
//         props: {
//             testData: new Date().toString(),
//             category
//         },
//     }
// }

//2) Pre-generate upon build-time
export async function getStaticProps({ params: { category } }) {
    const content = await API.getContent(category)

    // if (category !== 'category-1' && API.getCategories().filter(function (cat) { return cat.slug === category }).length === 0) {
    //     return {
    //         notFound: true
    //     }
    // }

    return {
        props: {
            content,
            category
        },
        revalidate: 60
    }
}

//3) Pre-fetch routes
export async function getStaticPaths() {
    // const fetchedSlugs = await API.getCategories().map(cat => {
    //     return {
    //         params: {
    //             category: cat.slug
    //         }
    //     }
    // })

    return {
        paths: [
            { params: { category: 'category-1' } },
            { params: { category: 'category-2' } },
            { params: { category: 'category-3' } }
        ],
        // paths: fetchedSlugs,
        fallback: true // false or 'blocking'
    };
}

export default function Home({ category, content }) {
    // const router = useRouter()

    // if (router.isFallback) {
    //     return <div>Loading...</div>
    // }

    return (
        <div className={styles.container}>
            <Head>
                <title>whynow - {content.title}</title>
            </Head>

            <main className={styles.main}>
                <a href="/">&larr; back</a>

                <h1 className={styles.title}>
                    {content.title}
                </h1>

                <p>{content.description}</p>
            </main>

            <footer className={styles.footer}>
                Whynow tutorial &copy;
            </footer>
        </div>
    )
}
