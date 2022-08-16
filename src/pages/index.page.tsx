import AuthButton from "@sections/AuthButton";
import Head from "next/head";
import { LinkWithUnderline, Subtitle } from "@styles/common";
import * as styles from "./index.styles";
import { NextPageWithLayout } from "@types";
import UsersList from "@components/lists/UsersList";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta
          name='description'
          content='A personal app to manage reminders, todos, and goals.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <styles.Title>Home page</styles.Title>
        <Link href='/projects' passHref>
          <LinkWithUnderline>
            <Subtitle>Projects</Subtitle>
          </LinkWithUnderline>
        </Link>
        <UsersList />
        <AuthButton />
      </styles.Main>
    </div>
  );
};

export default Home;
