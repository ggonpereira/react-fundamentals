import { ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps {
  variant?: "filled" | "outlined";
  onClick: (prop?: any) => void;
  icon?: ReactNode;
  children: ReactNode;
  isFullWidth?: boolean;
}

export const Button = ({
  variant = "filled",
  onClick,
  icon,
  children,
  isFullWidth,
}: ButtonProps) => (
  <S.Button onClick={onClick} variant={variant} isFullWidth={isFullWidth}>
    {icon && icon}

    <S.Text>{children}</S.Text>
  </S.Button>
);
