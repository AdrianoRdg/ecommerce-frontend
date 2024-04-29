import styled from "styled-components";

export const BrowseContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  h2 {
    font-size: 32px;
    margin-bottom: 4rem;
  }
`;

export const BrowseCards = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 73.9375rem;
  gap: 1.4rem;

  @media (max-width: 880px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }
`;
