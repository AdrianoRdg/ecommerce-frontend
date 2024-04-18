import {
  ImageContainer,
  InfoContainer,
  InfoPrice,
  InfoTitle,
  ProductCardContainer,
} from "./styles";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src="https://i.postimg.cc/Qtc09hjv/mesa.png" alt="" />
      </ImageContainer>

      <InfoContainer>
        <InfoTitle>
          <h3>Syltherine</h3>
          <p>Stylish cafe chair</p>
        </InfoTitle>
        <InfoPrice>
          <p>Rp 2.500.000</p>
          <p>Rp 3.500.000</p>
        </InfoPrice>
      </InfoContainer>
    </ProductCardContainer>
  );
}
