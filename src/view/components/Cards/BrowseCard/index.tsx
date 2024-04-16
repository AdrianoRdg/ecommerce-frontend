import { CardContainer } from "./styles";

interface BrowseCardProps {
  name: string;
  imageLink: string;
}

export function BrowseCard({ name, imageLink }: BrowseCardProps) {
  return (
    <CardContainer>
      <img src={imageLink} alt={`${name} card`} draggable="false" />
      <h3>{name}</h3>
    </CardContainer>
  );
}
