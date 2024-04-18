import {
  FilterContent,
  FilterInputs,
  FilterLabel,
  FilterOptions,
  FilterSection,
  Filters,
  Pipe,
  ShortByInput,
  ShowInput,
} from "./styles";

import dots from "../../../../../assets/images/filter/dots.svg";
import filter from "../../../../../assets/images/filter/filter.svg";
import pipe from "../../../../../assets/images/filter/pipe.svg";
import squares from "../../../../../assets/images/filter/squares.svg";

export function Filter() {
  return (
    <FilterSection className="container">
      <FilterContent>
        <FilterOptions>
          <Filters>
            <img src={filter} alt="filter icon" />
            <p>Filter</p>
          </Filters>

          <img src={dots} alt="dots icon" />
          <img src={squares} alt="squares icon" />

          <Pipe>
            <img src={pipe} alt="pipe icon" />
          </Pipe>

          <p>Showing 1-16 of 32 results</p>
        </FilterOptions>

        <FilterInputs>
          <FilterLabel htmlFor="show">
            Show
            <ShowInput id="show" type="text" placeholder="16" />
          </FilterLabel>

          <FilterLabel htmlFor="shortBy">
            Short by
            <ShortByInput id="shortBy" type="text" placeholder="Default" />
          </FilterLabel>
        </FilterInputs>
      </FilterContent>
    </FilterSection>
  );
}
