import styled from "styled-components";
import { devices } from "../../../assets/styles/mediaQueries";

export const BenefitsContainer = styled.section`
  background-color: #faf3ea;
  min-height: 16.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitsContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 3rem; */
  align-items: center;
  width: 83.375rem;

  @media ${devices.xl} {
    justify-content: space-between;
    gap: 0;
    padding: 0 2rem;
  }

  @media ${devices.lg} {
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
  }

  @media ${devices.md} {
    gap: 0;
    padding: 1rem 3rem;
    align-items: center;
  }

  @media ${devices.ms} {
    gap: 1rem;
    justify-content: center;
  }
`;

export const BenefitCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media ${devices.xl} {
    flex-direction: column;
    align-items: center;

    img {
      width: 62px;
    }
  }

  @media ${devices.md} {
    width: 258px;
  }
`;

export const BenefitCardInfo = styled.div`
  h3 {
    font-size: 25px;
    font-weight: 600;
    /* margin-bottom: 0.5rem; */
    padding-bottom: 0.3rem;
  }

  p {
    color: #898989;
    font-size: 20px;
    font-weight: 500;
  }

  @media ${devices.xl} {
    text-align: center;
    /* margin-bottom: 0; */
    padding: 0;
  }
`;
