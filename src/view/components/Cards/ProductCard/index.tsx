import { useState } from "react";
import {
  CardLabel,
  HoverActions,
  HoverButton,
  HoverContent,
  HoverIconContent,
  ImageContainer,
  InfoContainer,
  InfoPrice,
  InfoTitle,
  ProductCardContainer,
  ProductCardHover,
} from "./styles";

import compare from "../../../../assets/images/productCard/compare.svg";
import like from "../../../../assets/images/productCard/like.svg";
import share from "../../../../assets/images/productCard/share.svg";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
}

export function ProductCard({
  image,
  name,
  description,
  price,
  discountPrice,
  discountPercent,
  isNew,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const getCardLabelProps = (isNew: boolean, discountPercent: number) => {
    if (isNew) {
      return {
        color: "#2EC1AC",
        label: "New",
      };
    }

    if (discountPercent !== 0) {
      return {
        color: "#e97171",
        label: `-${discountPercent}%`,
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
      {isHovered && (
        <ProductCardHover>
          <HoverContent>
            <HoverButton>See Details</HoverButton>
            <HoverActions>
              <HoverIconContent>
                <img src={share} alt="" />
                <span>Share</span>
              </HoverIconContent>

              <HoverIconContent>
                <img src={compare} alt="" />
                <span>Compare</span>
              </HoverIconContent>

              <HoverIconContent>
                <img src={like} alt="" />
                <span>Like</span>
              </HoverIconContent>
            </HoverActions>
          </HoverContent>
        </ProductCardHover>
      )}

      {cardLabelProps && (
        <CardLabel color={cardLabelProps.color}>
          {cardLabelProps.label}
        </CardLabel>
      )}

      <ImageContainer>
        <img src={image} alt="" />
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
