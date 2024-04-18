import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 17.8125rem;
  height: 27.875rem;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: 18.8125rem;
`;

export const InfoContainer = styled.div`
  height: 9.0625rem;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
`;

export const InfoTitle = styled.div`
  width: 8.625rem;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #3a3a3a;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #898989;
    padding: 0.5rem 0;
  }
`;

export const InfoPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: 600;
  }

  p:nth-child(2) {
    color: #898989;
    text-decoration: line-through;
    font-size: 16px;
    font-weight: 400;
  }
`;
