import { NavLink } from "react-router-dom";
import { StyledButton } from "./styles";

export function ShowMoreButton({ canNavigate = true }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
