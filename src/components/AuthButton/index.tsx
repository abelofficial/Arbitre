import { useUser } from "@auth0/nextjs-auth0";
import * as styles from "./styles";

const AuthButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <styles.Text>Loading...</styles.Text>;

  if (error) return <styles.Text>{error.message}</styles.Text>;

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
