import styled from "styled-components";
import { darken } from "@theme-ui/color";

export const TextArea = styled.textarea`
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 8px;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 1.6rem;
  line-height: 2.24rem;
  max-height: 20rem;
  min-height: 9.5rem;
  outline: none;
  padding: 1.3rem 1.6rem;
  resize: vertical;
  transition: border 0.1s ease-in;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => darken(theme.colors.primary, 0.17)};
    box-shadow: 0px 0px 14px 0px rgba(251, 167, 31, 0.027);
  }
`;
