import {
  CardLabel,
  ImageContainer,
  InfoContainer,
  InfoPrice,
  InfoTitle,
  ProductCardContainer,
} from "./styles";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  isNew: boolean;
}

export function ProductCard({
  image,
  name,
  description,
  price,
  discountPrice,
}: ProductCardProps) {
  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <ProductCardContainer>
      <CardLabel color="#e97171">10</CardLabel>

      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>

      <InfoContainer>
        <InfoTitle>
          <h3>{name}</h3>
          <p>{description}</p>
        </InfoTitle>
        <InfoPrice>
          <p>{`Rp ${formatNumber(discountPrice)}`}</p>
          <p>{`Rp ${formatNumber(price)}`}</p>
        </InfoPrice>
      </InfoContainer>
    </ProductCardContainer>
  );
}
