import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 3rem 0;
`;

export const CardsContainer = styled.div`
  max-width: 77.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.85rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0 4rem 0;
`;

export const PaginationButton = styled.button<{ $curr?: boolean }>`
  border: none;
  background-color: ${(props) => (props.$curr ? "#b88e2f" : "#faf3ea")};
  color: ${(props) => props.$curr && "white"};
  font-size: 20px;
  padding: 1rem 1.3rem;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$curr ? "#9a7a26" : "#ebe1d1")};
  }
`;
