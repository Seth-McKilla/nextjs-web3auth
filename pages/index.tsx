import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import web3Auth, { subscribeAuthEvents } from "../web3Auth";

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      if (!web3Auth) return;
      try {
        subscribeAuthEvents(web3Auth);
      } catch (error) {
        console.error(error);
      }
      await web3Auth.init();
    })();
  }, []);

  const login = async () => {
    if (!web3Auth) return;
    try {
      const provider = await web3Auth.connect();
      console.log(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS and Web3Auth</title>
        <meta
          name="description"
          content="Simple NextJS dApp bootstrapped with Web3Auth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextJS and Web3Auth</h1>
        <button onClick={login}>Login</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Seth-McKilla/nextjs-web3auth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out on GitHub!
        </a>
      </footer>
    </div>
  );
};

export default Home;
