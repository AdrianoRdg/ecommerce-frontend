import axios from "axios";
import { useEffect, useState } from "react";
import { Benefits } from "../../components/Benefits";
import { ProductCard } from "../../components/Cards/ProductCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "./sections/Filter";
import { ShopHero } from "./sections/ShopHero";
import { CardsContainer, CardsSection } from "./styles";

interface Product {
  id: number;
  imageLink: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
}

export function Shop() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(cards);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/product");
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <ShopHero />
      <Filter />

      <CardsSection className="container">
        <CardsContainer>
          {!loading &&
            cards.map((card: Product) => (
              <ProductCard
                key={card.id}
                image={card.imageLink}
                name={card.name}
                description={card.description}
                price={card.price}
                discountPrice={card.discountPrice}
                discountPercent={card.discountPercent}
                isNew={card.isNew}
              />
            ))}
        </CardsContainer>
      </CardsSection>

      <Benefits />
      <Footer />
    </>
  );
}
