import axios from "axios";
import { useEffect, useState } from "react";
import { BrowseCard } from "../../../../components/Cards/BrowseCard";
import { BrowseCards, BrowseContainer } from "./styles";

interface Card {
  id: number;
  name: string;
  imageLink: string;
}

export function Browse() {
  const [loading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/category");
        setCards(response.data);
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
      }
    }

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <BrowseContainer className="container">
      <h2>Browse The Range</h2>

      <BrowseCards>
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card: Card) => (
            <BrowseCard
              key={card.id}
              name={card.name}
              imageLink={card.imageLink}
            />
          ))
        )}
      </BrowseCards>
    </BrowseContainer>
  );
}
