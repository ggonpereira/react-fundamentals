import * as S from "./UserAvatar.styles";

interface UserAvatarProps {
  userAvatar: string;
  userName: string;
}

export const UserAvatar = ({ userAvatar, userName }: UserAvatarProps) => (
  <S.AvatarWrapper>
    <img src={userAvatar} alt={`${userName} picture`} />
  </S.AvatarWrapper>
);
