import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  margin: 3.2rem auto;
  max-width: 112rem;

  @media all and (max-width: 1200px) {
    padding: 0 1.6rem;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  max-width: 83.2rem;
  width: 100%;
`;
