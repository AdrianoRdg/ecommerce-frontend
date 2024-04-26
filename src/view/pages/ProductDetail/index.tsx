import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Breadcrumb } from "./sections/Breadcrumb";
import { Details } from "./sections/Details";
import { RelatedProducts } from "./sections/RelatedProducts";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/product/${id}`);
      const data = await response.json();
      console.log(data);

      setProduct(data);
    }

    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <Breadcrumb productName={product ? product.name : ""} />
      {product && <Details {...product} />}
      <RelatedProducts />
      <Footer />
    </>
  );
}
