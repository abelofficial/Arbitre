import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import AuthButton from "@components/buttons/AuthButton";
import UserProfile from "@sections/UserProfile";
import { closeDrawer, selectDrawer } from "@store/slices/config";
import {
  Button,
  HighlightedText,
  Link as BaseA,
  LinkWithUnderline,
} from "@styles/common";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as styles from "./styles";

export interface FullScreenNavbarProps {
  children?: React.ReactNode;
}

const FullScreenNavbar = ({ children }: FullScreenNavbarProps) => {
  const [loading, setLoading] = useState(false);
  const isDrawerShowing = useSelector(selectDrawer);
  const dispatch = useDispatch();

  const closeWithDelay = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(closeDrawer());
      setLoading(false);
    }, 100);
  };

  return (
    <Modal show={isDrawerShowing} actionButton={undefined}>
      {loading ? (
        <Spinner />
      ) : (
        <styles.Container>
          <div onClickCapture={closeWithDelay}>
            <Link href='/profile' passHref>
              <BaseA href='dummy'>
                <HighlightedText>profile</HighlightedText>
              </BaseA>
            </Link>
          </div>
          <div onClickCapture={closeWithDelay}>
            <Link href='/projects' passHref>
              <BaseA href='dummy'>
                {loading && <Spinner />}
                <HighlightedText>projects</HighlightedText>
              </BaseA>
            </Link>
          </div>
          <AuthButton />
          <Button color='danger' onClick={() => dispatch(closeDrawer())}>
            close
          </Button>
        </styles.Container>
      )}
    </Modal>
  );
};

export default FullScreenNavbar;
