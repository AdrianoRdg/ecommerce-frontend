import styled from "styled-components";
import { devices } from "../../../../assets/styles/mediaQueries";

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
    border-radius: 10px;
    overflow: hidden;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media ${devices.xl} {
    width: 19rem;
  }

  @media ${devices.xmd} {
    width: 17rem;
  }
`;

export const ImageContainer = styled.div`
  height: 29rem;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  @media ${devices.xl} {
    height: 22rem;
  }

  @media ${devices.xmd} {
    height: 22rem;
  }
`;
