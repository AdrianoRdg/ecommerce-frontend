import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../../../../../interfaces/Category";
import { ShowMoreButton } from "../../../../components/Buttons/ShowMore";
import { ProductsGrid } from "../../../../components/ProductsGrid";
import { RelatedProductsContainer } from "./styles";

export function RelatedProducts({ name, id }: Category) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (page === 2) setCanNavigate(true);

        const response = await axios.get(
          `http://localhost:3001/product/category-by-id/${id}?page=${page}&pageSize=4`
        );
        console.log(response);

        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.error("Request Error:", error);
      }
    }

    fetchData();
  }, [id, page]);

  return (
    <RelatedProductsContainer className="container">
      <h2>Related Products</h2>

      <ProductsGrid products={products} />

      <div onClick={() => setPage((oldPage) => oldPage + 1)}>
        <ShowMoreButton
          canNavigate={canNavigate}
          route={`/shop/${name.toLowerCase()}`}
        />
      </div>
    </RelatedProductsContainer>
  );
}
