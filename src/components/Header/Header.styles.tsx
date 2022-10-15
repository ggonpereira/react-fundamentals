import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[2]};
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 20px 0;
`;

export const LogoWrapper = styled.div`
  height: 64px;
  width: 64px;
`;
