import { Header } from '../../components/Header';
import { Browse } from './sections/Browse';
import { Hero } from './sections/Hero';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
    </>
  );
}
