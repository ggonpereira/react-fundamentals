import { ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps {
  variant?: "filled" | "outlined";
  onClick?: (prop?: any) => void;
  icon?: ReactNode;
  children: ReactNode;
  isFullWidth?: boolean;
  type: "submit" | "button";
}

export const Button = ({
  variant = "filled",
  onClick,
  icon,
  children,
  isFullWidth,
  type = "button",
}: ButtonProps) => (
  <S.Button
    onClick={onClick}
    variant={variant}
    isFullWidth={isFullWidth}
    type={type}
  >
    {icon && icon}

    <S.Text>{children}</S.Text>
  </S.Button>
);
