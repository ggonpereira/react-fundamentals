import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import parse from "html-react-parser";
import * as S from "./Post.styles";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { FormEvent, useEffect, useState } from "react";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import { useUserContext } from "../../contexts/UserContext";

import { v4 as uuidv4 } from "uuid";

interface PostProps {
  userAvatar: string;
  userName: string;
  userRole: string;
  postContent: string;
  publishedAt: Date;
  postId: number;
}

interface Comment {
  userAvatar: string;
  userName: string;
  commentContent: string;
  publishedAt: Date;
  postId: number;
  commentId: string;
  reactionScore: number;
  wasReacted: boolean;
}

const getStoredComments = () => {
  const storedComments = localStorage.getItem("@techyFeed:comments");
  if (storedComments) {
    const parsedComments: Comment[] = JSON.parse(storedComments);
    return parsedComments;
  }
};

export const Post = ({
  userAvatar,
  userName,
  userRole,
  postContent,
  publishedAt,
  postId,
}: PostProps) => {
  const { colors } = useTheme();
  const { user } = useUserContext();
  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const publishedDateFormatTitle = format(
    publishedAt,
    "MMMM dd'th at' HH:mm'h'"
  );
  const dateDistance = formatDistanceToNow(publishedAt);

  useEffect(() => {
    const storedComments = getStoredComments();

    if (storedComments) {
      const commentsOfThisPost = storedComments.filter(
        (comment) => comment.postId === postId
      );

      setComments(commentsOfThisPost);
    }
  }, []);

  const handlePublishFeedback = (e: FormEvent) => {
    e.preventDefault();
    const comment = {
      userAvatar: user.avatar,
      userName: user.name,
      commentContent: feedback,
      publishedAt: new Date(),
      postId,
      commentId: uuidv4(),
      reactionScore: 0,
      wasReacted: false,
    };

    setComments((oldValue) => [...oldValue, comment]);
    localStorage.setItem(
      "@techyFeed:comments",
      JSON.stringify([...comments, comment])
    );

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

      <S.FeedbackArea onSubmit={handlePublishFeedback}>
        <Typography variant="lg" isBold color={colors.gray[100]}>
          Write your feedback
        </Typography>

        <TextArea
          placeholder="Write a comment..."
          value={feedback}
          onChange={setFeedback}
        />

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
