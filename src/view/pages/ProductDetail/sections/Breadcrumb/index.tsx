import { NavLink } from "react-router-dom";
import { Pipe } from "../../../../components/Lines/Pipe";
import { BreadcrumbContainer } from "./styles";

export function Breadcrumb({ productName }: { productName: string }) {
  return (
    <BreadcrumbContainer className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>

        <Pipe />

        <span>{productName}</span>
      </nav>
    </BreadcrumbContainer>
  );
}
