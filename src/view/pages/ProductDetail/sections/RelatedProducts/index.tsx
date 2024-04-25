import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import { ShowMoreButton } from "../../../../components/Buttons/ShowMore";
import { ProductCard } from "../../../../components/Cards/ProductCard";
import { RelatedProductsContainer, RelatedProductsContent } from "./styles";

export function RelatedProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3001/product?page=1&pageSize=4`
        );

        const { data } = response.data;

        setProducts(data);
      } catch (error) {
        console.error("Request Error:", error);
      }
    }

    fetchData();
  });

  return (
    <RelatedProductsContainer className="container">
      <h2>Related Products</h2>

      <RelatedProductsContent>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </RelatedProductsContent>

      <ShowMoreButton />
    </RelatedProductsContainer>
  );
}
