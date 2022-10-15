import { ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps {
  variant?: "filled" | "outlined";
  onClick: (prop?: any) => void;
  icon?: ReactNode;
  children: ReactNode;
}

export const Button = ({
  variant = "outlined",
  onClick,
  icon,
  children,
}: ButtonProps) => (
  <S.Button onClick={onClick} variant={variant}>
    {icon && icon}

    <S.Text>{children}</S.Text>
  </S.Button>
);
