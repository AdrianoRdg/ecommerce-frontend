import styled from "styled-components";

export const CardContainer = styled.div`
  width: 23.8125rem;
  display: flex;
  overflow: hidden;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 30rem;
    border-radius: 10px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;
