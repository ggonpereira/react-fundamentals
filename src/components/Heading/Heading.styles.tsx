import styled, { css } from "styled-components";

interface HeadingProps {
  variant: "md" | "lg";
  color?: string;
}

const mdVariantCSS = css`
  font-size: 25.6px;
  font-weight: 700;
  line-height: 41px;
`;

const lgVariantCSS = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 33.6px;
`;

export const Heading = styled.h2<HeadingProps>`
  ${({ variant }) => variant === "md" && mdVariantCSS}
  ${({ variant }) => variant === "lg" && lgVariantCSS}

  color: ${({ color, theme }) => color || theme.colors.gray[7]}
`;
