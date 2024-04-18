import { NavLink } from "react-router-dom";
import account from "../../../assets/images/header/account.svg";
import heart from "../../../assets/images/header/heart.svg";
import search from "../../../assets/images/header/search.svg";
import shoppingCart from "../../../assets/images/header/shopping-cart.svg";
import logo from "../../../assets/images/logo.svg";
import {
  HeaderBrand,
  HeaderContainer,
  HeaderContent,
  HeaderControl,
  Navbar,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <HeaderBrand>
          <img src={logo} alt="" />
          <h1>Furniro</h1>
        </HeaderBrand>

        <Navbar>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Navbar>

        <HeaderControl>
          <img src={account} alt="account icon" />
          <img src={heart} alt="favorite icon" />
          <img src={search} alt="search icon" />
          <img src={shoppingCart} alt="cart icon" />
        </HeaderControl>
      </HeaderContent>
    </HeaderContainer>
  );
}
