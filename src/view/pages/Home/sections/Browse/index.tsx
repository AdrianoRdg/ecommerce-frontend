import { BrowseCard } from '../../../../components/Cards/BrowseCard';
import { BrowseCards, BrowseContainer } from './styles';

export function Browse() {
  return (
    <BrowseContainer className="container">
      <h2>Browse The Range</h2>

      <BrowseCards>
        <BrowseCard />
        <BrowseCard />
        <BrowseCard />
      </BrowseCards>
    </BrowseContainer>
  );
}
