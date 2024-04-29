import styled from "styled-components";
import { devices } from "../../../assets/styles/mediaQueries";

export const FooterContainer = styled.footer`
  height: 31.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  max-width: 77.5006rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4rem;
    color: #9f9f9f;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;

  @media ${devices.xl} {
    flex-wrap: wrap;
  }

  @media (max-width: 1240px) {
    padding: 2.5rem 2rem;
    gap: 2rem;
    justify-content: flex-start;
  }
`;

export const BrandInfo = styled.div`
  h2 {
    margin-bottom: 4rem;
  }

  p {
    color: #9f9f9f;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 8.5rem;
`;

export const FooterNavContent = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  li {
    font-weight: 600;
  }
`;

export const FooterNewsletter = styled.div`
  input {
    border: none;
    border-bottom: 2px solid black;
    margin-right: 0.5rem;

    &::placeholder {
      color: #9f9f9f;
      font-size: 14px;
    }
  }

  button {
    font-size: 14px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 1240px) {
    padding: 0 2rem;
  }
`;
