import React from "react";
import * as styles from "./styles";

export interface MessageScreenProps {
  message: string;
}

const MessageScreen = ({ message }: MessageScreenProps) => {
  return (
    <styles.Container>
      <styles.Text>{message}</styles.Text>
    </styles.Container>
  );
};

export default MessageScreen;
