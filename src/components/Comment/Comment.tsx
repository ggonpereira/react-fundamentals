import { UserAvatar } from "../UserAvatar";
import * as S from "./Comment.styles";
import parse from "html-react-parser";

import userAvatar from "../../assets/userPicture.jpg";
import { ThumbsUp, Trash } from "phosphor-react";
import { Typography } from "../Typography";
import { useState } from "react";
import { useTheme } from "styled-components";

const textContent = "Muito bom Devon, parabéns!! 👏👏";
const publishedAt = "About 2h ago";

interface CommentProps {
  isAuthor: boolean;
  userName: string;
}

export const Comment = ({
  isAuthor = false,
  userName = "Pereira",
}: CommentProps) => {
  const theme = useTheme();

  const [reactionCount, setReactionCount] = useState(0);
  const [wasReacted, setWasReacted] = useState(false);

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
            <S.NameArea>
              <Typography isBold color={theme.colors.gray[100]}>
                {userName}
              </Typography>
              {isAuthor && (
                <Typography isBold color={theme.colors.gray[400]}>
                  {" "}
                  (you)
                </Typography>
              )}
            </S.NameArea>
            <S.IconWrapper>
              <Trash size={24} />
            </S.IconWrapper>
          </S.Header>
          <Typography variant="sm" color={theme.colors.gray[400]}>
            {publishedAt}
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
