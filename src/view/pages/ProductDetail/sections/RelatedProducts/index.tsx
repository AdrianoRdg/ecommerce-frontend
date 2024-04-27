import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../../../interfaces/Product";
import { ShowMoreButton } from "../../../../components/Buttons/ShowMore";
import { ProductCard } from "../../../../components/Cards/ProductCard";
import { RelatedProductsContainer, RelatedProductsContent } from "./styles";

interface RelatedProductsProps {
  categoryId: number;
}

export function RelatedProducts({ categoryId }: RelatedProductsProps) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (page === 2) setCanNavigate(true);

        const response = await axios.get(
          `http://localhost:3001/product/category/${categoryId}?page=${page}&pageSize=4`
        );

        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.error("Request Error:", error);
      }
    }

    fetchData();
  }, [categoryId, page]);

  return (
    <RelatedProductsContainer className="container">
      <h2>Related Products</h2>

      <RelatedProductsContent>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </RelatedProductsContent>

      <div onClick={() => setPage((oldPage) => oldPage + 1)}>
        <ShowMoreButton canNavigate={canNavigate} />
      </div>
    </RelatedProductsContainer>
  );
}
