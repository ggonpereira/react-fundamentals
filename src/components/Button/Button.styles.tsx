import styled, { css } from "styled-components";
import { darken } from "@theme-ui/color";

interface ButtonProps {
  variant: "filled" | "outlined";
  isFullWidth?: boolean;
}

const filledVariantCSS = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    --color: ${({ theme }) => darken(theme.colors.primary, 0.07)};
    background: var(--color);
    border-color: var(--color);
  }
`;

const outlinedVariantCSS = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    --color: ${({ theme }) => darken(theme.colors.primary, 0.07)};
    color: ${({ theme }) => theme.colors.white};
    background: var(--color);
    border-color: var(--color);
  }
`;

export const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 8px;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.4rem 2.4rem;
  transition: all 0.12s ease-in;
  max-width: ${({ isFullWidth }) => !isFullWidth && "fit-content"};

  ${({ variant }) => variant === "filled" && filledVariantCSS}
  ${({ variant }) => variant === "outlined" && outlinedVariantCSS}
`;

export const Text = styled.span`
  line-height: 1.9rem;
  font-size: 1.6rem;
  font-weight: 700;

  user-select: none;
`;
