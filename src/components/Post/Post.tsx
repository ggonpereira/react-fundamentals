import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import parse from "html-react-parser";
import * as S from "./Post.styles";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { useState } from "react";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";

interface PostProps {
  userAvatar: string;
  userName: string;
  userRole: string;
  postContent: string;
  publishedAt: Date;
}

export const Post = ({
  userAvatar,
  userName,
  userRole,
  postContent = "",
  publishedAt,
}: PostProps) => {
  console.info(publishedAt);
  const { colors } = useTheme();
  const [feedback, setFeedback] = useState("");
  const publishedDateFormatTitle = format(
    publishedAt,
    "MMMM dd'th at' HH:mm'h'"
  );

  const dateDistance = formatDistanceToNow(publishedAt);

  const handlePublishFeedback = () => {
    console.log("Your feedback was: ", feedback);
    setFeedback("");
  };

  return (
    <S.Container>
      <S.Header>
        <S.UserArea>
          <UserAvatar userAvatar={userAvatar} userName={userName} />
          <S.UserInformation>
            <Typography variant="lg" isBold color={colors.gray[100]}>
              {userName}
            </Typography>
            <Typography color={colors.gray[300]}>{userRole}</Typography>
          </S.UserInformation>
        </S.UserArea>

        <S.Time
          title={publishedDateFormatTitle}
          dateTime={publishedAt.toISOString()}
        >
          Published {dateDistance} ago
        </S.Time>
      </S.Header>

      <S.PostContent>{parse(postContent)}</S.PostContent>

      <S.FeedbackArea>
        <Typography variant="lg" isBold color={colors.gray[100]}>
          Write your feedback
        </Typography>

        <TextArea
          placeholder="Write a comment..."
          value={feedback}
          onChange={setFeedback}
        />

        <Button onClick={handlePublishFeedback}>Publish</Button>
      </S.FeedbackArea>

      <Comment isAuthor={true} userName="Gabriel Pereira" />
    </S.Container>
  );
};
