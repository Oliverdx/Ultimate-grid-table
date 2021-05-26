import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";

import store from "../store";

import "styles/globals.scss";
import "antd/dist/antd.css";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Ultimate Grid Data</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

App.getStaticProps = async (appContext) => {
  const appProps = await App.getStaticProps(appContext);
  return { ...appProps };
};

export default App;
