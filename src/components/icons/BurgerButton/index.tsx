import * as styles from "./styles";

interface BurgerButtonProps {
  isShowing: boolean;
  handleClick: () => void;
}

const BurgerButton = ({ isShowing, handleClick }: BurgerButtonProps) => (
  <styles.Burger type='button' onClick={handleClick}>
    <styles.Div isShowing={isShowing} />
    <styles.Div isShowing={isShowing} />
  </styles.Burger>
);

export default BurgerButton;
