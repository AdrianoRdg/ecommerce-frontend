import {
  FilterContent,
  FilterInputs,
  FilterLabel,
  FilterOptions,
  FilterSection,
  Filters,
  ShortBySelect,
  ShowSelect,
} from "./styles";

import { ChangeEvent, useState } from "react";
import dots from "../../../../../assets/images/filter/dots.svg";
import filter from "../../../../../assets/images/filter/filter.svg";
import squares from "../../../../../assets/images/filter/squares.svg";
import { Pipe } from "../../../../components/Lines/Pipe";
import { FiltersMenu } from "./FiltersMenu";

interface FilterProps {
  filters: {
    page: number;
    show: number;
    shortBy: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      page: number;
      show: number;
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
  const [selectedValue, setSelectedValue] = useState({
    shortBy: "default",
    show: 16,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedValue({ ...selectedValue, [name]: value });

    setFilters({ ...filters, [name]: value });
  };

  return (
    <FilterSection className="container">
      <FilterContent>
        <FilterOptions>
          <Filters onClick={() => setIsOpen(!isOpen)}>
            <img src={filter} alt="filter icon" />
            <p>Filter</p>
          </Filters>

          <img src={dots} alt="dots icon" />
          <img src={squares} alt="squares icon" />

          <Pipe />

          <p>{`Showing ${metaData.page}-${metaData.pageSize} of ${metaData.totalCount} results`}</p>
        </FilterOptions>

        <FilterInputs>
          <FilterLabel htmlFor="show">
            Show
            <ShowSelect
              name="show"
              id="show"
              value={selectedValue.show}
              onChange={handleSelectChange}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </ShowSelect>
          </FilterLabel>

          <FilterLabel htmlFor="shortBy">
            Short by
            <ShortBySelect
              name="shortBy"
              id="shortBy"
              value={selectedValue.shortBy}
              onChange={handleSelectChange}
            >
              <option value="default">Default</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </ShortBySelect>
          </FilterLabel>
        </FilterInputs>
      </FilterContent>

      <FiltersMenu isOpen={isOpen} />
    </FilterSection>
  );
}
