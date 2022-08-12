import { useUser } from "@auth0/nextjs-auth0";
import MessageScreen from "@components/MessageScreen";
import * as styles from "./styles";

const AuthButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <MessageScreen message='Loading...' />;

  if (error) return <MessageScreen message={error.message} />;

  if (user) {
    console.log("User: ", user);
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <styles.Text href='/api/auth/logout'>Logout</styles.Text>
      </div>
    );
  }
  return <styles.Text href='/api/auth/login'>Login</styles.Text>;
};

export default AuthButton;
