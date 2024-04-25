import { useState } from "react";
import { CardHover } from "./CardHover";
import {
  CardLabel,
  ImageContainer,
  InfoContainer,
  InfoPrice,
  InfoTitle,
  ProductCardContainer,
} from "./styles";

interface ProductCardProps {
  id: number;
  imageLink: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
}

export function ProductCard({
  id,
  imageLink,
  name,
  description,
  price,
  discountPrice,
  discountPercent,
  isNew,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const getCardLabelProps = (isNew: boolean, discountPercent: number) => {
    if (discountPercent !== 0) {
      return {
        color: "#e97171",
        label: `-${discountPercent}%`,
      };
    }

    if (isNew) {
      return {
        color: "#2EC1AC",
        label: "New",
      };
    }

    return null;
  };

  const cardLabelProps = getCardLabelProps(isNew, discountPercent);

  return (
    <ProductCardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <CardHover id={id} />}

      {cardLabelProps && (
        <CardLabel color={cardLabelProps.color}>
          {cardLabelProps.label}
        </CardLabel>
      )}

      <ImageContainer>
        <img src={imageLink} alt="" />
      </ImageContainer>

      <InfoContainer>
        <InfoTitle>
          <h3>{name}</h3>
          <p>{description}</p>
        </InfoTitle>
        <InfoPrice>
          {discountPrice > 0 && <p>{`Rp ${formatNumber(discountPrice)}`}</p>}
          <p>{`Rp ${formatNumber(price)}`}</p>
        </InfoPrice>
      </InfoContainer>
    </ProductCardContainer>
  );
}
