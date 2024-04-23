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

interface FilterProps {
  filters: {
    page: number;
    pageSize: number;
    shortBy: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      page: number;
      pageSize: number;
      shortBy: string;
    }>
  >;
  metaData: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
  };
}

export function Filter({ metaData, filters, setFilters }: FilterProps) {
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
          <p>{`Showing ${metaData.page}-${metaData.pageSize} of ${metaData.totalCount} results`}</p>
        </FilterOptions>

        <FilterInputs>
          <FilterLabel htmlFor="show">
            Show
            <ShowInput
              id="show"
              type="text"
              value={filters.pageSize.toString()}
              onChange={(e) =>
                setFilters({ ...filters, pageSize: Number(e.target.value) })
              }
              placeholder={filters.pageSize.toString()}
            />
          </FilterLabel>

          <FilterLabel htmlFor="shortBy">
            Short by
            <ShortByInput
              id="shortBy"
              type="text"
              placeholder={filters.shortBy}
            />
          </FilterLabel>
        </FilterInputs>
      </FilterContent>
    </FilterSection>
  );
}
