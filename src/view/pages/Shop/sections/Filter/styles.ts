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

export const Pipe = styled.span`
  padding: 0 0.5rem;
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

const StyledInput = styled.input`
  height: 3.4375rem;
  border: none;
  font-size: 20px;
  padding-left: 1rem;

  &::placeholder {
    padding-left: 0.1rem;
    color: #9f9f9f;
  }
`;

export const ShowInput = styled(StyledInput)`
  width: 2.5rem;
`;

export const ShortByInput = styled(StyledInput)`
  width: 11rem;
`;
