import styled from "styled-components";

export const AvatarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  display: flex;
  height: fit-content;
  outline: 0.2rem solid ${({ theme }) => theme.colors.primary};
  padding: 0.3rem;
  width: fit-content;

  img {
    border-radius: 5px;
    height: 4.9rem;
    object-fit: cover;
    width: 4.9rem;
  }
`;
