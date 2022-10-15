import { ReactNode } from "react";
import * as S from "./Heading.styles";

interface HeadingProps {
  variant?: "md" | "lg";
  color?: string;
  children: ReactNode;
}

export const Heading = ({ variant = "md", color, children }: HeadingProps) => (
  <S.Heading variant={variant} color={color}>
    {children}
  </S.Heading>
);
