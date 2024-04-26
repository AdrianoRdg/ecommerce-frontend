import styled from "styled-components";

export const FilterSection = styled.section`
  background-color: #f9f1e7;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterContent = styled.div`
  width: 77.25rem;
  display: flex;
  justify-content: space-between;
`;

export const FilterOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 0.5rem;

  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const FilterInputs = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 400;
`;

export const StyledSelect = styled.select`
  height: 3.4375rem;
  border: none;
  font-size: 20px;
  background-color: white;
  color: #9f9f9f;
  padding-left: 0.5rem;
`;

export const ShowSelect = styled(StyledSelect)`
  width: 3.5rem;
`;

export const ShortBySelect = styled(StyledSelect)`
  width: 11rem;
`;
