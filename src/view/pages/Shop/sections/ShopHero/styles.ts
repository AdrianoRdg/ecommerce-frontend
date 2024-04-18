import styled from "styled-components";
import heroImage from "../../../../../assets/images/shop/hero-image.svg";

export const ShopHeroContainer = styled.section`
  height: 316px;
  overflow: hidden;
`;

export const ShopHeroContent = styled.div`
  height: 100%;
  background-image: url(${heroImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    padding: 0.5rem 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
  }
`;
