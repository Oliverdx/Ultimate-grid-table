import Head from 'next/head'
import { Fragment } from 'react'
import 'styles/globals.scss'
import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
  return <Fragment>
      <Head>
        <title>Ultimate Grid Data</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
}

export default App
