import { UserAvatar } from "../UserAvatar";
import * as S from "./Comment.styles";
import parse from "html-react-parser";

import { ThumbsUp, Trash } from "phosphor-react";
import { Typography } from "../Typography";
import { useState } from "react";
import { useTheme } from "styled-components";
import { formatDistanceToNow } from "date-fns";

interface CommentProps {
  isAuthor: boolean;
  userName: string;
  userAvatar: string;
  textContent: string;
  publishedAt: Date;
  wasReacted: boolean;
  commentId: string;
  deleteComment: (commentId: string) => void;
}

export const Comment = ({
  isAuthor = false,
  userName,
  userAvatar,
  textContent,
  publishedAt,
  wasReacted,
  commentId,
  deleteComment,
}: CommentProps) => {
  const theme = useTheme();

  const [reactionCount, setReactionCount] = useState(0);

  const dateDistance = formatDistanceToNow(publishedAt);

  return (
    <S.Container>
      <UserAvatar
        userAvatar={userAvatar}
        userName={userName}
        withBorder={false}
      />

      <S.InnerContent>
        <S.MainContent>
          <S.Header>
            <div>
              <Typography isBold color={theme.colors.gray[100]}>
                {userName}
              </Typography>
              {isAuthor && (
                <Typography isBold color={theme.colors.gray[400]}>
                  {" "}
                  (you)
                </Typography>
              )}
            </div>
            <S.IconWrapper onClick={() => deleteComment(commentId)}>
              <Trash size={24} />
            </S.IconWrapper>
          </S.Header>
          <Typography variant="sm" color={theme.colors.gray[400]}>
            {dateDistance}
          </Typography>
          <S.Content>{parse(textContent)}</S.Content>
        </S.MainContent>
        <S.ReactionArea wasReacted={wasReacted}>
          <ThumbsUp size={20} />
          <Typography isBold color={theme.colors.gray[400]}>
            Applause • {String(reactionCount).padStart(2, "0")}
          </Typography>
        </S.ReactionArea>
      </S.InnerContent>
    </S.Container>
  );
};
