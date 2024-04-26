import { useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import {
  ActionButtons,
  AddToCartButton,
  ColorOption,
  ColorOptions,
  CompareButton,
  Counter,
  DetailsContainer,
  ExtraInfo,
  Key,
  ListItem,
  MainImage,
  OtherImages,
  ProductContent,
  ProductDescription,
  ProductImages,
  ProductInfo,
  ProductName,
  ProductPrice,
  Ratings,
  Separator,
  SizeOptions,
  Value,
} from "./styles";

import ratingStars from "../../../../../assets/images/productDetails/stars.svg";
import { DivisionLine } from "../../../../components/Lines/DivisionLine";

export function Details({
  name,
  description,
  imageLink,
  price,
  sku,
  category,
}: Product) {
  const [quantity, setQuantity] = useState(1);

  return (
    <DetailsContainer className="container">
      <ProductContent>
        <ProductImages>
          <OtherImages></OtherImages>
          <MainImage src={imageLink} alt="" />
        </ProductImages>

        <ProductInfo>
          <div>
            <ProductName>{name}</ProductName>
            <ProductPrice>{`Rs. ${price}`}</ProductPrice>
          </div>
          <Ratings>
            <img src={ratingStars} alt="" />
          </Ratings>

          <ProductDescription>{description}</ProductDescription>

          <SizeOptions>
            <h3>Size</h3>
            <div>
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
          </SizeOptions>
          <ColorOptions>
            <h3>Color</h3>
            <div>
              <ColorOption $color="#816DFA"></ColorOption>
              <ColorOption $color="#000000"></ColorOption>
              <ColorOption $color="#B88E2F"></ColorOption>
            </div>
          </ColorOptions>
          <ActionButtons>
            <Counter>
              <button
                onClick={() => {
                  if (quantity > 1) setQuantity((oldValue) => oldValue - 1);
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

          <DivisionLine />

          <ExtraInfo>
            <ListItem>
              <Key>SKU</Key>
              <Separator>:</Separator>
              <Value>{sku}</Value>
            </ListItem>

            <ListItem>
              <Key>Category</Key>
              <Separator>:</Separator>
              <Value>{category.name}</Value>
            </ListItem>

            <ListItem>
              <Key>Tags</Key>
              <Separator>:</Separator>
              <Value>{category.name}</Value>
            </ListItem>

            <ListItem>
              <Key>Share</Key>
              <Separator>:</Separator>
              <Value>Share</Value>
            </ListItem>
          </ExtraInfo>
        </ProductInfo>
      </ProductContent>
    </DetailsContainer>
  );
}
