import styled from "styled-components";
import { darken } from "@theme-ui/color";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 4rem;

  & + & {
    margin-top: 3.2rem;
  }

  @media all and (max-width: 768px) {
    padding: 1.6rem;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  @media all and (max-width: 320px) {
    flex-direction: column;
    align-items: initial;
    gap: 1.6rem;
  }
`;

export const UserArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.time`
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const PostContent = styled.div`
  font-size: 1.6rem;
  line-height: 2.5rem;
  border-bottom: 0.1px solid ${({ theme }) => theme.colors.gray[600]};
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => darken(theme.colors.primary, 0.1)};
    }
  }
`;

export const FeedbackArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  button {
    position: absolute;
    top: -9999px;
  }

  &:focus-within {
    button {
      position: initial;
    }
  }
`;
