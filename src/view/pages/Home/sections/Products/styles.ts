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

export const ShowMoreButton = styled.button`
  border: 1px solid #b88e2f;
  color: #b88e2f;
  font-size: 16px;
  font-weight: 600;
  width: 245px;
  height: 48px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #b88e2f;
    color: #fff;
  }
`;
