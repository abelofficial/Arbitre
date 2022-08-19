import CardSkeleton from "@components/cards/CardSkeleton";
import * as styles from "./styles";

const CardsSkeleton = () => {
  return (
    <styles.Container>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </styles.Container>
  );
};

export default CardsSkeleton;
