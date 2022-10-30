import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar";
import parse from "html-react-parser";
import * as S from "./Post.styles";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { useState } from "react";
import {
  formatHours,
  getPassedHours,
  subtractHours,
} from "../../utils/functions";

interface PostProps {
  userAvatar: string;
  userName: string;
  userRole: string;
  postContent: string;
}

const mockPostDate = subtractHours(new Date(), 1);

export const Post = ({
  userAvatar,
  userName,
  userRole,
  postContent = "",
}: PostProps) => {
  const { colors } = useTheme();
  const [feedback, setFeedback] = useState("");

  const formattedHour = formatHours(mockPostDate);

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

        <S.Time title={formattedHour} dateTime={formattedHour}>
          Published {getPassedHours(mockPostDate)} ago
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
    </S.Container>
  );
};
