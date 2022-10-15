import { ReactNode } from "react";
import { Heading } from "../Heading";
import * as S from "./Header.styles";

interface HeaderProps {
  logo: ReactNode;
  title: string;
}

export const Header = ({ logo, title }: HeaderProps) => (
  <S.Container>
    <S.LogoWrapper>{logo}</S.LogoWrapper>
    <Heading>{title}</Heading>
  </S.Container>
);
