import { useState } from "react";
import { FilterMenu, FilterMenuContent } from "./styles";

export function FiltersMenu({ isOpen = false }) {
  const [checkedItems, setCheckedItems] = useState({
    minimalist: false,
    cute: false,
    sofa: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <FilterMenu $isOpen={isOpen}>
      <FilterMenuContent>
        <label>
          <input
            type="checkbox"
            name="minimalist"
            checked={checkedItems.minimalist}
            onChange={handleCheckboxChange}
          />
          Minimalist
        </label>

        <label>
          <input
            type="checkbox"
            name="cute"
            checked={checkedItems.cute}
            onChange={handleCheckboxChange}
          />
          Cute
        </label>

        <label>
          <input
            type="checkbox"
            name="sofa"
            checked={checkedItems.sofa}
            onChange={handleCheckboxChange}
          />
          Sofa
        </label>
      </FilterMenuContent>
    </FilterMenu>
  );
}
