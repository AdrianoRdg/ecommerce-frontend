import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../../interfaces/Product";
import { Benefits } from "../../components/Benefits";
import { ProductCard } from "../../components/Cards/ProductCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Filter } from "./sections/Filter";
import { ShopHero } from "./sections/ShopHero";
import {
  CardsContainer,
  CardsSection,
  PaginationButton,
  PaginationContainer,
  ShopContainer,
} from "./styles";

export function Shop() {
  const [cards, setCards] = useState([]);
  const [responseMeta, setResponseMeta] = useState({
    page: 0,
    pageSize: 0,
    totalPages: 0,
    totalCount: 0,
  });
  const [filters, setFilters] = useState({
    page: 1,
    show: 16,
    shortBy: "default",
  });
  const [loading, setLoading] = useState(true);

  function scrollToTop() {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleNextPage() {
    setFilters((old) => {
      if (old.page === responseMeta.totalPages) return old;
      scrollToTop();
      return { ...old, page: old.page + 1 };
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3001/product?page=${filters.page}&pageSize=${
            filters.show
          }&orderBy=${filters.shortBy === "Default" ? "" : filters.shortBy}`
        );

        const { data, meta } = response.data;

        setResponseMeta(meta);
        setCards(data);
        setLoading(false);
      } catch (error) {
        console.error("Request Error:", error);
      }
    }

    fetchData();
  }, [filters.page, filters.show, filters.shortBy]);
  return (
    <>
      <Header />
      <ShopHero />
      <Filter
        filters={filters}
        setFilters={setFilters}
        metaData={responseMeta}
      />

      <ShopContainer className="container">
        <CardsSection>
          <CardsContainer>
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
          </CardsContainer>
        </CardsSection>

        <PaginationContainer>
          {Array.from({ length: responseMeta.totalPages }, (_, index) => (
            <PaginationButton
              key={index}
              $curr={index + 1 === filters.page}
              onClick={() => {
                setFilters((old) => ({ ...old, page: index + 1 }));
                scrollToTop();
              }}
            >
              {`${index + 1}`}
            </PaginationButton>
          ))}
          <PaginationButton onClick={handleNextPage}>Next</PaginationButton>
        </PaginationContainer>
      </ShopContainer>

      <Benefits />
      <Footer />
    </>
  );
}
