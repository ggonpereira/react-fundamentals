import styled, { css } from "styled-components";

interface TextProps {
  variant: "sm" | "md" | "lg";
  color?: string;
  isBold?: boolean;
}

const smVariantCSS = css`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 22px;
`;

const mdVariantCSS = css`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 24px;
`;

const lgVariantCSS = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 26px;
`;

const isBoldCSS = css`
  font-weight: 700;
`;

export const Text = styled.span<TextProps>`
  ${({ variant }) => variant === "sm" && smVariantCSS}
  ${({ variant }) => variant === "md" && mdVariantCSS}
  ${({ variant }) => variant === "lg" && lgVariantCSS}

  color: ${({ color, theme }) => color || theme.colors.gray[300]}

  ${({ isBold }) => isBold && isBoldCSS}
`;
