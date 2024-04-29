import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import account from "../../../assets/images/header/account.svg";
import heart from "../../../assets/images/header/heart.svg";
import search from "../../../assets/images/header/search.svg";
import shoppingCart from "../../../assets/images/header/shopping-cart.svg";
import logo from "../../../assets/images/logo.svg";
import { HeaderMobile } from "./HeaderMobile";
import {
  HeaderBrand,
  HeaderContainer,
  HeaderContent,
  HeaderControl,
  HeaderMenu,
  Navbar,
} from "./styles";

import menu from "../../../assets/images/header/menu.svg";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <HeaderBrand>
          <img src={logo} alt="" />
          <h1>Furniro</h1>
        </HeaderBrand>

        <Navbar $isMobile={isMobile}>
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

        {isMobile && (
          <HeaderMenu
            src={menu}
            alt="menu icon"
            onClick={() => setIsOpened(true)}
          />
        )}

        <HeaderMobile isMobile={isMobile} />
      </HeaderContent>
    </HeaderContainer>
  );
}
