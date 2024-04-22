import { Benefits } from "../../components/Benefits";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Browse } from "./sections/Browse";
import { Hero } from "./sections/Hero";
import { Products } from "./sections/Products";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Products />
      <Benefits />
      <Footer />
    </>
  );
}
