import styled from "styled-components";

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;

  h1 {
    font-size: 40px;
  }
`;

export const ProductsContent = styled.div`
  width: 77.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 0;
`;
