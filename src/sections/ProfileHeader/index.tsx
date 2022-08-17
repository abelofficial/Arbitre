import { FollowRequest, User } from "@prisma/client";
import { Title } from "@styles/common";
import * as styles from "./styles";

export interface ProfileHeaderProps {
  user: User;
  followers?: number;
}

const ProfileHeader = ({ user, followers }: ProfileHeaderProps) => {
  return (
    <styles.Container>
      <styles.CoverImage
        src={
          "https://timelinecovers.pro/facebook-cover/download/planets-drawing-facebook-cover.jpg"
        }
        width={1200}
        height={300}
        layout='fixed'
      />
      <styles.InfoSection>
        <styles.ProfileImage
          src={user.picture}
          width={150}
          height={150}
          layout='fixed'
        />
        <Title> {user.name} </Title>
        <Title> {`${followers} followers`} </Title>
      </styles.InfoSection>
    </styles.Container>
  );
};

export default ProfileHeader;
