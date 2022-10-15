import { Logo } from "../../assets/icons";
import { Heading } from "../Heading";
import * as S from "./Header.styles";

export const Header = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <Heading>Techy Feed</Heading>
    </S.Container>
  );
};
