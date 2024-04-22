import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 17.8125rem;
  height: 27.875rem;
  display: flex;
  flex-direction: column;
  position: relative;
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

export const CardLabel = styled.div<{ color?: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

export const ProductCardHover = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(58, 58, 58, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HoverContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const HoverButton = styled.button`
  background-color: white;
  color: #b88e2f;
  width: 202px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  border: none;

  &:hover {
    transition: all 0.2s;
    background-color: #b88e2f;
    color: white;
  }
`;

export const HoverActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HoverIconContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span {
    font-size: 16px;
    font-weight: 600;
    color: white;
  }
`;
