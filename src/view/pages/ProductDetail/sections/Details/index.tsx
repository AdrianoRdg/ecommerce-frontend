import { useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import {
  ActionButtons,
  AddToCartButton,
  CompareButton,
  Counter,
  DetailsContainer,
  MainImage,
  ProductContent,
  ProductDescription,
  ProductImages,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./styles";

export function Details({ name, description, imageLink, price }: Product) {
  const [quantity, setQuantity] = useState(1);

  return (
    <DetailsContainer className="container">
      <ProductContent>
        <ProductImages>
          <MainImage src={imageLink} alt="" />
        </ProductImages>

        <ProductInfo>
          <div>
            <ProductName>{name}</ProductName>
            <ProductPrice>{`Rs ${price}`}</ProductPrice>
          </div>
          <ProductDescription>{description}</ProductDescription>

          <ActionButtons>
            <Counter>
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity((oldValue) => oldValue - 1);
                  }
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((oldValue) => oldValue + 1)}>
                +
              </button>
            </Counter>
            <AddToCartButton>Add To Cart</AddToCartButton>
            <CompareButton>+ Compare</CompareButton>
          </ActionButtons>
        </ProductInfo>
      </ProductContent>
    </DetailsContainer>
  );
}
