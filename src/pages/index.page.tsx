import AuthButton from "@components/AuthButton";
import MessageScreen from "@components/MessageScreen";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "@services/trpc";
import { UserProfile, useUser } from "@auth0/nextjs-auth0";
import { Button, HighlightedText, Paragraph, Subtitle } from "@styles/common";
import * as styles from "./index.styles";
import Spinner from "@components/Spinner";
import { formatDateLong } from "@utils/date";

const Home: NextPage = () => {
  const utils = trpc.useContext();
  const { user, error, isLoading } = useUser();
  const getAllUsers = trpc.useQuery(["users.all"]);

  const addUser = trpc.useMutation("users.add", {
    async onSuccess(newUser) {
      return await utils.invalidateQueries(["users.all"]);
    },
  });

  const errorMsg = error?.message ? error.message : getAllUsers.error?.message;

  if (isLoading || getAllUsers.status === "loading")
    return <MessageScreen message='loading..' />;

  if (isLoading || getAllUsers.status === "error")
    return <MessageScreen message={errorMsg as string} />;

  const addMeHandler = async () => {
    if (user) {
      return await addUser.mutate({
        name: user.name as string,
        email: user.email as string,
      });
    }
  };

  if (!getAllUsers.data) return <MessageScreen message='no users' />;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <styles.Main>
        <styles.Title>Home page</styles.Title>
        {user && (
          <Button onClick={addMeHandler}>
            {addUser.isLoading && <Spinner />}
            Add me
          </Button>
        )}
        {getAllUsers.data.length > 0 ? (
          getAllUsers.data.map((user) => (
            <styles.Row key={user.email}>
              <Paragraph>{user.name as string}</Paragraph>
              <HighlightedText>{user.email as string} </HighlightedText>
              <HighlightedText>
                {formatDateLong(new Date(user.createdAt))}
              </HighlightedText>
            </styles.Row>
          ))
        ) : (
          <Subtitle>No users</Subtitle>
        )}
        <AuthButton />
      </styles.Main>
    </div>
  );
};

export default Home;
