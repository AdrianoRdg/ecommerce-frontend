import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../../../utils/scrollUtils";
import { StyledButton } from "./styles";

export function ShowMoreButton({ canNavigate = true }) {
  function handleClick(e: React.MouseEvent) {
    if (!canNavigate) {
      e.preventDefault();
      return;
    }

    scrollToTop();
  }

  return (
    <NavLink to="/shop" onClick={handleClick}>
      <StyledButton>Show More</StyledButton>
    </NavLink>
  );
}
