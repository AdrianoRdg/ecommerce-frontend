import {
  HoverActions,
  HoverButton,
  HoverContent,
  HoverIconContent,
  ProductCardHover,
} from "./styles";

import { NavLink } from "react-router-dom";
import compare from "../../../../assets/images/productCard/compare.svg";
import like from "../../../../assets/images/productCard/like.svg";
import share from "../../../../assets/images/productCard/share.svg";

interface CardHoverProps {
  id: number;
}

export function CardHover({ id }: CardHoverProps) {
  return (
    <ProductCardHover>
      <HoverContent>
        <NavLink to={`/product/${id}`}>
          <HoverButton>See Details</HoverButton>
        </NavLink>

        <HoverActions>
          <HoverIconContent>
            <img src={share} alt="" />
            <span>Share</span>
          </HoverIconContent>

          <HoverIconContent>
            <img src={compare} alt="" />
            <span>Compare</span>
          </HoverIconContent>

          <HoverIconContent>
            <img src={like} alt="" />
            <span>Like</span>
          </HoverIconContent>
        </HoverActions>
      </HoverContent>
    </ProductCardHover>
  );
}
