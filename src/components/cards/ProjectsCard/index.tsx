import LikeProjectButton from "@components/buttons/LikeProject";
import UpdateProjectButton from "@components/buttons/UpdateProject";
import { User } from "@prisma/client";
import { Avatar } from "@sections/UserProfile/styles";
import { trpc } from "@services/trpc";
import { Paragraph, HighlightedText, Title } from "@styles/common";
import { ProjectWithOwner } from "@types";
import Link from "next/link";
import * as styles from "./styles";
import CardSkeleton from "@components/cards/CardSkeleton";
export interface ProjectsCardProps {
  project: ProjectWithOwner;
  isOwner: boolean;
  user: User;
}

const ProjectsCard = ({ project, isOwner, user }: ProjectsCardProps) => {
  const { status, data, error } = trpc.useQuery([
    "likes.allProjectLikes",
    { projectId: project.id },
  ]);

  if (status === "loading" || !data) return <CardSkeleton />;

  const projectIsLiked = !!data.find((l) => l.userId === user.id);

  return (
    <styles.Card key={project.id}>
      <styles.Header>
        <Avatar src={project.owner.picture} width={30} height={30} />
        <styles.Column>
          <Paragraph>{project.name}</Paragraph>
          <Link href={`/profile/${project.owner.id}`} passHref>
            <HighlightedText color='primary'>
              <styles.SmallText>{`@${project.owner.name}`}</styles.SmallText>
            </HighlightedText>
          </Link>
        </styles.Column>
        {isOwner && <UpdateProjectButton icon project={project} />}
      </styles.Header>
      <HighlightedText>{project.description} </HighlightedText>
      <styles.Footer>
        <LikeProjectButton
          currentUser={user}
          project={project}
          liked={projectIsLiked}
          likes={data.length}
        />
      </styles.Footer>
    </styles.Card>
  );
};

export default ProjectsCard;
