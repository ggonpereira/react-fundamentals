import styled, { css } from "styled-components";

interface AvatarWrapperProps {
  withBorder: boolean;
}

const outlineCSS = css`
  outline: 0.2rem solid ${({ theme }) => theme.colors.primary};
`;

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  display: flex;
  height: fit-content;
  ${({ withBorder }) => withBorder && outlineCSS}
  padding: 0.3rem;
  width: fit-content;

  img {
    border-radius: 5px;
    height: 4.9rem;
    object-fit: cover;
    width: 4.9rem;

    @media all and (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
  }
`;
