import styled, { css } from "styled-components";

interface TextProps {
  variant: "sm" | "md" | "lg";
  color?: string;
  isBold?: boolean;
}

const smVariantCSS = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
`;

const mdVariantCSS = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const lgVariantCSS = css`
  font-size: 16px;
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

  color: ${({ color, theme }) => color || theme.colors.gray[6]}

  ${({ isBold }) => isBold && isBoldCSS}
`;
