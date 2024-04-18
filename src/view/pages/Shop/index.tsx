import { ProductCard } from "../../components/Cards/ProductCard";
import { Header } from "../../components/Header";
import { Filter } from "./sections/Filter";
import { ShopHero } from "./sections/ShopHero";
import { CardsContainer, CardsSection } from "./styles";

export function Shop() {
  return (
    <>
      <Header />
      <ShopHero />
      <Filter />

      <CardsSection className="container">
        <CardsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </CardsContainer>
      </CardsSection>
    </>
  );
}
