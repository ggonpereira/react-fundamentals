import styled from "styled-components";

export const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  max-width: 25.6rem;
  position: relative;
  width: 100%;

  @media all and (max-width: 768px) {
    max-width: none;
  }
`;

export const MainContent = styled.div`
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 4rem 0 2.4rem 0px;

  div:first-of-type {
    position: absolute;
    top: 15%;
  }
`;

export const Background = styled.div`
  img {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    height: 7.2rem;
    object-fit: cover;
    width: 100%;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
`;
