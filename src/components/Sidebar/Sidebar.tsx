import { Typography } from "../Typography";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import * as S from "./Sidebar.styles";
import { useTheme } from "styled-components";
import { Button } from "../Button/Button";
import { PencilSimpleLine } from "phosphor-react";

interface SidebarProps {
  backgroundImage: string;
  userAvatar: string;
  userName: string;
  userRole: string;
  handleEditProfile: () => void;
}

export const Sidebar = ({
  backgroundImage,
  userAvatar,
  userName,
  userRole,
  handleEditProfile,
}: SidebarProps) => {
  const { colors } = useTheme();

  return (
    <S.Sidebar>
      <S.Background>
        <img src={backgroundImage} alt="User Sidebar Background Image" />
      </S.Background>

      <S.MainContent>
        <UserAvatar userAvatar={userAvatar} userName={userName} />

        <S.UserInformation>
          <Typography variant="lg" isBold color={colors.gray[100]}>
            {userName}
          </Typography>
          <Typography color={colors.gray[300]}>{userRole}</Typography>
        </S.UserInformation>
      </S.MainContent>

      <S.BottomContent>
        <Button
          onClick={handleEditProfile}
          icon={<PencilSimpleLine size={22} />}
          variant="outlined"
        >
          Edit your profile
        </Button>
      </S.BottomContent>
    </S.Sidebar>
  );
};
