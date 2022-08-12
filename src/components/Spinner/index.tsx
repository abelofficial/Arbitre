import * as styles from "./styles";

interface SpinnerProps {
  size?: "normal" | "small";
}

const Spinner = ({ size = "normal" }: SpinnerProps) => (
  <styles.Container size={size}>
    <styles.Spinner />
  </styles.Container>
);

export default Spinner;

Spinner.defaultProps = {
  size: "normal",
};
