import { NavLink } from "react-router-dom";
import { StyledButton } from "./styles";

export function ShowMoreButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <NavLink to="/shop" onClick={scrollToTop}>
      <StyledButton>Show More</StyledButton>
    </NavLink>
  );
}
