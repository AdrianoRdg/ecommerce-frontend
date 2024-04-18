import styled from "styled-components";

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const CardsContainer = styled.div`
  max-width: 77.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.85rem;
`;