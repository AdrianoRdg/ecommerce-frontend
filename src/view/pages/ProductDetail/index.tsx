import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Breadcrumb } from "./sections/Breadcrumb";
import { Details } from "./sections/Details";
import { RelatedProducts } from "./sections/RelatedProducts";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(`http://localhost:3001/product/${id}`);
        const { data } = response;

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Request Error:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <Breadcrumb productName={product ? product.name : ""} />
      {loading ? (
        <Loading />
      ) : (
        product && (
          <>
            <Details {...product} />
            <RelatedProducts {...product.category} />
          </>
        )
      )}

      <Footer />
    </>
  );
}
