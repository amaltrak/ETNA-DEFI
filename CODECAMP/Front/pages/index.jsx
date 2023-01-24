import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Défi ETNA" />
        <link rel="shortcut icon" href="/etnaico.ico"></link>
        <title>ETNA</title>
      </Head>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
