import styled from "styled-components";

export const RelatedProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;

  h2 {
    font-size: 36px;
    font-weight: 500;
  }
`;

export const RelatedProductsContent = styled.div`
  width: 77.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
