import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductContent = styled.div`
  width: 1241.01px;
  border: 1px solid red;
  display: flex;
`;

export const ProductImages = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.img`
  width: 26.4375rem;
  height: 31.25rem;
  /* object-fit: cover; */
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ProductName = styled.h1`
  font-size: 42px;
  font-weight: 400;
`;

export const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #9f9f9f;
`;

export const ProductDescription = styled.p`
  width: 26.5rem;
  font-size: 13px;
  font-weight: 400;
`;

export const Style = styled.div`
  width: 7.6875rem;
  height: 3.9375rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Counter = styled.div`
  width: 6.5rem;
  height: 4rem;
  border-radius: 10px;
  border: 1.5px solid #9f9f9f;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 100%;
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  height: 4rem;
  border-radius: 15px;
  border: 1.5px solid black;
  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
`;

export const AddToCartButton = styled(StyledButton)`
  width: 13.4375rem;
`;

export const CompareButton = styled(StyledButton)`
  width: 13.4375rem;
`;
