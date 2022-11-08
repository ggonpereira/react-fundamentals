import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import parse from "html-react-parser";
import * as S from "./Post.styles";
import { Button } from "../Button";
import { useState } from "react";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import { useUserContext } from "../../contexts/UserContext";

import { v4 as uuidv4 } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";

interface PostProps {
  userAvatar: string;
  userName: string;
  userRole: string;
  postContent: string;
  publishedAt: Date;
  postId: number;
}

interface CommentType {
  userAvatar: string;
  userName: string;
  commentContent: string;
  publishedAt: Date;
  postId: number;
  commentId: string;
  reactionScore: number;
  wasReacted: boolean;
}

interface Inputs {
  comment: string;
}

export const Post = ({
  userAvatar,
  userName,
  userRole,
  postContent,
  publishedAt,
  postId,
}: PostProps) => {
  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const { colors } = useTheme();
  const { user } = useUserContext();
  const [comments, setComments] = useState<CommentType[]>([]);
  const publishedDateFormatTitle = format(
    publishedAt,
    "MMMM dd'th at' HH:mm'h'"
  );
  const dateDistance = formatDistanceToNow(publishedAt);

  const handlePublishFeedback: SubmitHandler<Inputs> = (data) => {
    const comment = {
      userAvatar: user.avatar,
      userName: user.name,
      commentContent: data.comment,
      publishedAt: new Date(),
      postId,
      commentId: uuidv4(),
      reactionScore: 0,
      wasReacted: false,
    };

    resetField("comment");
    setComments((oldValues) => [...oldValues, comment]);
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

      <S.FeedbackArea onSubmit={handleSubmit(handlePublishFeedback)}>
        <Typography variant="lg" isBold color={colors.gray[100]}>
          Write your feedback
        </Typography>

        <S.TextArea placeholder="Write a comment..." {...register("comment")} />

        <Button type="submit">Publish</Button>
      </S.FeedbackArea>

      {comments.map((comment) => (
        <Comment
          isAuthor={true}
          key={comment.commentId}
          publishedAt={new Date(comment.publishedAt)}
          textContent={comment.commentContent}
          userAvatar={comment.userAvatar}
          userName={comment.userName}
          wasReacted={comment.wasReacted}
        />
      ))}
    </S.Container>
  );
};
