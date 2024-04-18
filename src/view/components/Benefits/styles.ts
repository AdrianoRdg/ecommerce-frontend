import styled from "styled-components";

export const BenefitsContainer = styled.section`
  background-color: #faf3ea;
  height: 16.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 83.375rem;
`;

export const BenefitCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BenefitCardInfo = styled.div`
  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #898989;
    font-size: 20px;
    font-weight: 500;
  }
`;
