import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../../../../../interfaces/Product";
import { ProductCard } from "../../../../components/Cards/ProductCard";
import { ProductsContainer, ProductsContent, ShowMoreButton } from "./styles";

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ProductsContainer className="container">
      <h1>Our Products</h1>

      <ProductsContent>
        {!loading &&
          cards.map((card: Product) => (
            <ProductCard
              key={card.id}
              id={card.id}
              image={card.imageLink}
              name={card.name}
              description={card.description}
              price={card.price}
              discountPrice={card.discountPrice}
              discountPercent={card.discountPercent}
              isNew={card.isNew}
            />
          ))}
      </ProductsContent>

      <NavLink to="/shop" onClick={scrollToTop}>
        <ShowMoreButton>Show More</ShowMoreButton>
      </NavLink>
    </ProductsContainer>
  );
}
