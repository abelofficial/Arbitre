import { AvatarSkeleton, TextSkeleton } from "@styles/common";
import * as styles from "./styles";

const CardSkeleton = () => {
  return (
    <styles.Card>
      <styles.Header>
        <AvatarSkeleton />
        <styles.Column>
          <TextSkeleton width='7rem' height='0.5rem' />
          <TextSkeleton width='4rem' height='0.5rem' />
        </styles.Column>
      </styles.Header>
      <styles.Column>
        <TextSkeleton width='100%' height='0.5rem' />
        <TextSkeleton width='7rem' height='0.5rem' />
      </styles.Column>
      <styles.Footer></styles.Footer>
    </styles.Card>
  );
};

export default CardSkeleton;
