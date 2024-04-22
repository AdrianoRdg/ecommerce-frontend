import { ShopHeroContainer, ShopHeroContent, ShopHeroInfo } from "./styles";

export function ShopHero() {
  return (
    <ShopHeroContainer className="container">
      <ShopHeroContent>
        <ShopHeroInfo>
          <h1>Shop</h1>
          <h3>Home &gt; Shop</h3>
        </ShopHeroInfo>
      </ShopHeroContent>
    </ShopHeroContainer>
  );
}
