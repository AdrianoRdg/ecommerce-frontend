import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductContent = styled.div`
  width: 77.5631rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const ProductImages = styled.div`
  width: 553px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  gap: 2rem;
`;

export const MainImage = styled.img`
  width: 26.4375rem;
  height: 31.25rem;
  /* object-fit: cover; */
  border-radius: 10px;
`;

export const OtherImages = styled.div`
  width: 76px;
  height: 416px;
  border: 1px solid purple;
`;

export const ProductInfo = styled.div`
  border: 1px solid black;
  width: 37.8756rem;
  /* height: 730px; */
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

export const Ratings = styled.div``;

export const ProductDescription = styled.p`
  width: 26.5rem;
  font-size: 13px;
  font-weight: 400;
`;

export const Style = styled.div`
  width: 7.6875rem;
  height: 3.9375rem;
`;

const StyledOption = styled.div`
  width: 123px;
  height: 63px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #9f9f9f;
  }

  button {
    border: none;
  }

  div {
    display: flex;
    gap: 0.7rem;
  }
`;

export const SizeOptions = styled(StyledOption)`
  button {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
`;

export const ColorOptions = styled(StyledOption)``;

export const ColorOption = styled.div<{ $color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.$color};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 0.5rem;
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

export const ExtraInfo = styled.ul`
  color: #9f9f9f;
  list-style: none;
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Key = styled.span`
  flex: 1;
  max-width: 5rem;
  text-align: left;
  padding-right: 10px;
`;

export const Separator = styled.span`
  flex: 0 0 auto;
`;

export const Value = styled.span`
  flex: 1;
  text-align: left;
  padding-left: 10px;
`;
