import { useEffect, useState } from "react";
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
  ProductContent,
  ProductDescription,
  ProductImages,
  ProductInfo,
  ProductName,
  ProductPrice,
  Ratings,
  SecondaryImage,
  Separator,
  SideImages,
  SizeOptions,
  Value,
} from "./styles";

import ratingStars from "../../../../../assets/images/productDetails/stars.svg";
import { DivisionLine } from "../../../../components/Lines/DivisionLine";
import { Pipe } from "../../../../components/Lines/Pipe";

import facebook from "../../../../../assets/images/productDetails/facebook.svg";
import linkedin from "../../../../../assets/images/productDetails/linkedin.svg";
import twitter from "../../../../../assets/images/productDetails/twitter.svg";

export function Details({
  name,
  description,
  imageLink,
  price,
  sku,
  category,
  otherImagesLink,
  largeDescription,
}: Product) {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(imageLink);
  const [images, setImages] = useState<string[]>([]);

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    const updateImages = () => {
      const newImages = otherImagesLink.split(",");
      setImages(newImages);
    };

    updateImages();
  }, [otherImagesLink]);

  return (
    <DetailsContainer className="container">
      <ProductContent>
        <ProductImages>
          <SideImages>
            <SecondaryImage
              src={imageLink}
              alt=""
              onClick={() => setCurrentImage(imageLink)}
            />

            {images.map((image, index) => (
              <SecondaryImage
                key={index}
                src={image}
                alt=""
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </SideImages>

          <MainImage src={currentImage} alt="" />
        </ProductImages>

        <ProductInfo>
          <div>
            <ProductName>{name}</ProductName>
            <ProductPrice>{`Rs. ${formatNumber(price)}`}</ProductPrice>
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
              <Value>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
              </Value>
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
          <p>{largeDescription}</p>
        </DescriptionContent>
      </DescriptionContainer>
    </DetailsContainer>
  );
}
