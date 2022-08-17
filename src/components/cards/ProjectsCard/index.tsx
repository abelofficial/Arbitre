import LikeProjectButton from "@components/buttons/LikeProject";
import UpdateProjectButton from "@components/buttons/UpdateProject";
import { Project, User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Paragraph, HighlightedText, Title } from "@styles/common";
import * as styles from "./styles";

export interface ProjectsCardProps {
  project: Project;
  isOwner: boolean;
  user: User;
}

const ProjectsCard = ({ project, isOwner, user }: ProjectsCardProps) => {
  const { status, data, error } = trpc.useQuery([
    "likes.allProjectLikes",
    { projectId: project.id },
  ]);

  if (status === "loading" || !data) return <Title>loading..</Title>;

  const projectIsLiked = !!data.find((l) => l.userId === user.id);

  return (
    <styles.Card key={project.id}>
      <styles.Header>
        {isOwner && <UpdateProjectButton icon project={project} />}
      </styles.Header>
      <Paragraph>{project.name}</Paragraph>
      <HighlightedText>{project.description} </HighlightedText>
      <styles.Footer>
        <LikeProjectButton
          currentUser={user}
          project={project}
          isLiked={projectIsLiked}
        />
        <HighlightedText>{`${data.length} likes`}</HighlightedText>
      </styles.Footer>
    </styles.Card>
  );
};

export default ProjectsCard;
