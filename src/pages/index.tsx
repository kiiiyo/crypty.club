import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypty Club</title>
        <meta name="description" content="Crypty Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Crypty Club</h1>
      </main>
    </div>
  );
};

export default Home;
