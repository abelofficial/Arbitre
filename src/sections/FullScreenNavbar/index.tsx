import Modal from "@components/hocs/Modal";
import AuthButton from "@sections/AuthButton";
import UserProfile from "@sections/UserProfile";
import { closeDrawer, selectDrawer } from "@store/slices/config";
import { Button } from "@styles/common";
import { useDispatch, useSelector } from "react-redux";
import * as styles from "./styles";

export interface FullScreenNavbarProps {
  children?: React.ReactNode;
}

const FullScreenNavbar = ({ children }: FullScreenNavbarProps) => {
  const isDrawerShowing = useSelector(selectDrawer);
  const dispatch = useDispatch();

  return (
    <Modal show={isDrawerShowing} actionButton={undefined}>
      <styles.Container>
        <UserProfile />
        <AuthButton />
        <Button color='danger' onClick={() => dispatch(closeDrawer())}>
          close
        </Button>
      </styles.Container>
    </Modal>
  );
};

export default FullScreenNavbar;
