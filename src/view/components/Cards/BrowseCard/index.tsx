import { NavLink } from "react-router-dom";
import { CardContainer, ImageContainer } from "./styles";

interface BrowseCardProps {
  name: string;
  imageLink: string;
}

export function BrowseCard({ name, imageLink }: BrowseCardProps) {
  return (
    <CardContainer>
      <NavLink to={`/shop/${name.toLowerCase()}`}>
        <ImageContainer>
          <img src={imageLink} alt={`${name} card`} draggable="false" />
        </ImageContainer>
        <h3>{name}</h3>
      </NavLink>
    </CardContainer>
  );
}
