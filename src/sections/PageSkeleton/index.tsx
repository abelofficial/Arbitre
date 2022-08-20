import Navbar from "@sections/Navbar";
import { Title } from "@styles/common";
import * as styles from "./styles";

export interface PageSkeletonProps {
  loadingComponent?: React.ReactNode;
}

const PageSkeleton = ({ loadingComponent }: PageSkeletonProps) => {
  return (
    <styles.Page>
      <Navbar />
      <styles.MainView>
        {loadingComponent ? (
          loadingComponent
        ) : (
          <Title>PageSkeleton: loading...</Title>
        )}
      </styles.MainView>
      <styles.Footer>
        <small>Copyright &copy; {new Date().getFullYear()}</small>
      </styles.Footer>
    </styles.Page>
  );
};

export default PageSkeleton;
