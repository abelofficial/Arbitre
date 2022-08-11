import AuthButton from "@components/AuthButton";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as styles from "./index.styles";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <styles.Main>
        <styles.Title>Home page</styles.Title>
        <AuthButton />
      </styles.Main>
    </div>
  );
};

export default Home;
