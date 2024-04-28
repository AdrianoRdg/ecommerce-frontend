import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import { ShowMoreButton } from "../../../../components/Buttons/ShowMore";
import { ProductCard } from "../../../../components/Cards/ProductCard";
import { ProductsContainer, ProductsContent } from "./styles";

export function Products() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/product?page=1&pageSize=8"
        );

        const { data } = response.data;

        setCards(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ProductsContainer className="container">
      <h1>Our Products</h1>

      <ProductsContent>
        {!loading &&
          cards.map((card: Product) => (
            <ProductCard
              key={card.id}
              id={card.id}
              imageLink={card.imageLink}
              name={card.name}
              description={card.description}
              price={card.price}
              discountPrice={card.discountPrice}
              discountPercent={card.discountPercent}
              isNew={card.isNew}
            />
          ))}
      </ProductsContent>

      <ShowMoreButton />
    </ProductsContainer>
  );
}
