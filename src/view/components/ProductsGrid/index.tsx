import { Product } from "../../../interfaces/Product";
import { ProductCard } from "../Cards/ProductCard";
import { ProductsContent, ProductsGridContainer } from "./styles";

interface ProductCardProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductCardProps) {
  return (
    <ProductsGridContainer className="container">
      <ProductsContent>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </ProductsContent>
    </ProductsGridContainer>
  );
}
