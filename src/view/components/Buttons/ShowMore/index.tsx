import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../../../utils/scrollUtils";
import { StyledButton } from "./styles";

interface ShowMoreButtonProps {
  canNavigate?: boolean;
  route?: string;
}

export function ShowMoreButton({
  canNavigate = true,
  route,
}: ShowMoreButtonProps) {
  function handleClick(e: React.MouseEvent) {
    if (!canNavigate) {
      e.preventDefault();
      return;
    }

    scrollToTop();
  }

  return (
    <NavLink to={route ? route : "/shop"} onClick={handleClick}>
      <StyledButton>Show More</StyledButton>
    </NavLink>
  );
}
