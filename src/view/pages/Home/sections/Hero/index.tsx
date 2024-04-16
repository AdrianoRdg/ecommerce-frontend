import heroBackground from '../../../../../assets/images/header/hero-background.svg';
import { HeroContainer, HeroContent } from './styles';

export function Hero() {
  return (
    <HeroContainer className="container">
      <img src={heroBackground} alt="" />
      <HeroContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </HeroContent>
    </HeroContainer>
  );
}
