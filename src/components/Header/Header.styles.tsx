import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  padding: 2rem 0;
`;

export const LogoWrapper = styled.div`
  height: 6.4rem;
  width: 6.4rem;
`;
