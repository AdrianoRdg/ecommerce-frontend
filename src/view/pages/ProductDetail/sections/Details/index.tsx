import { useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import {
  ActionButtons,
  AddToCartButton,
  ColorOption,
  ColorOptions,
  CompareButton,
  Counter,
  DescriptionContainer,
  DescriptionContent,
  DetailsContainer,
  ExtraInfo,
  InformationChoice,
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
  SecondaryImage,
  Separator,
  SizeOptions,
  Value,
} from "./styles";

import ratingStars from "../../../../../assets/images/productDetails/stars.svg";
import { DivisionLine } from "../../../../components/Lines/DivisionLine";
import { Pipe } from "../../../../components/Lines/Pipe";

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
          <OtherImages>
            <SecondaryImage src={imageLink} alt="" />
            <SecondaryImage src={imageLink} alt="" />
            <SecondaryImage src={imageLink} alt="" />
            <SecondaryImage src={imageLink} alt="" />
          </OtherImages>

          <MainImage src={imageLink} alt="" />
        </ProductImages>

        <ProductInfo>
          <div>
            <ProductName>{name}</ProductName>
            <ProductPrice>{`Rs. ${price}`}</ProductPrice>
          </div>

          <Ratings>
            <img src={ratingStars} alt="" />
            <Pipe />
            <p>5 Customer Review</p>
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

      <DescriptionContainer>
        <InformationChoice>
          <h2>Description</h2>
          <h2>Additional Information</h2>
        </InformationChoice>

        <DescriptionContent>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </DescriptionContent>
      </DescriptionContainer>
    </DetailsContainer>
  );
}
