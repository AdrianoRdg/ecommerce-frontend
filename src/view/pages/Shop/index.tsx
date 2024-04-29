import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollUtils";
import { Benefits } from "../../components/Benefits";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { ProductsGrid } from "../../components/ProductsGrid";
import { Filter } from "./sections/Filter";
import { ShopHero } from "./sections/ShopHero";
import { PaginationButton, PaginationContainer, ShopContainer } from "./styles";

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
  const param = useParams();

  function handleNextPage() {
    setFilters((old) => {
      if (old.page === responseMeta.totalPages) return old;
      scrollToTop(300);
      return { ...old, page: old.page + 1 };
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (param.category) {
          const response = await axios.get(
            `http://localhost:3001/product/category/${param.category}?page=${
              filters.page
            }&pageSize=${filters.show}&orderBy=${
              filters.shortBy === "Default" ? "" : filters.shortBy
            }`
          );

          const { data, meta } = response.data;
          console.log(meta);
          setResponseMeta(meta);
          setCards(data);
          setLoading(false);
          return;
        }

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
  }, [filters.page, filters.show, filters.shortBy, param.category]);
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
        {loading ? <Loading /> : <ProductsGrid products={cards} />}

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
