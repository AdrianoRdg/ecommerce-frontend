import styled from "styled-components";
import { devices } from "../../../assets/styles/mediaQueries";

export const ProductsGridContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductsContent = styled.div`
  max-width: 77.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 0;

  @media ${devices.xl} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.xmd} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media ${devices.ms} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
