import * as S from "./UserAvatar.styles";

interface UserAvatarProps {
  userAvatar: string;
  userName: string;
  withBorder?: boolean;
}

export const UserAvatar = ({
  userAvatar,
  userName,
  withBorder = true,
}: UserAvatarProps) => (
  <S.AvatarWrapper withBorder={withBorder}>
    <img src={userAvatar} alt={`${userName} picture`} />
  </S.AvatarWrapper>
);
