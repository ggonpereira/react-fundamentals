import { darken } from "@theme-ui/color";
import styled, { css } from "styled-components";

interface ReactionAreaProps {
  wasReacted: boolean;
}

const wasReactedCSS = css`
  color: ${({ theme }) => theme.colors.primary};

  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;

  & + & {
    margin-bottom: 2.4rem;
  }
`;

export const InnerContent = styled.div`
  width: 100%;
`;

export const MainContent = styled.div`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 9px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: -5px;
`;

export const NameArea = styled.div``;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
  cursor: pointer;
  transition: cursor 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => darken(theme.colors.gray[400], 0.05)};
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 1.4rem;
  line-height: 160%;
  margin-bottom: 0.9rem;
  margin-top: 1.6rem;
`;

export const ReactionArea = styled.button<ReactionAreaProps>`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  gap: 1rem;
  margin-top: 1.6rem;
  transition: color 0.2s ease;

  span {
    transition: color 0.2s ease;
  }

  &:focus {
    box-shadow: none;

    color: ${({ theme }) => theme.colors.primary};

    > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${({ wasReacted }) => wasReacted && wasReactedCSS}
`;
