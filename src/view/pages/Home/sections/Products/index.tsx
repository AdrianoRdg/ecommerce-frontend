import axios from "axios";
import { useEffect, useState } from "react";
import { ShowMoreButton } from "../../../../components/Buttons/ShowMore";
import { Loading } from "../../../../components/Loading";
import { ProductsGrid } from "../../../../components/ProductsGrid";
import { ProductsContainer } from "./styles";

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

      {loading ? <Loading /> : <ProductsGrid products={cards} />}

      <ShowMoreButton />
    </ProductsContainer>
  );
}
