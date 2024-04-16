import account from '../../../assets/images/header/account.svg';
import heart from '../../../assets/images/header/heart.svg';
import search from '../../../assets/images/header/search.svg';
import shoppingCart from '../../../assets/images/header/shopping-cart.svg';
import logo from '../../../assets/images/logo.svg';
import {
  HeaderBrand,
  HeaderContainer,
  HeaderContent,
  HeaderControl,
  Navbar,
} from './styles';

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
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Navbar>

        <HeaderControl>
          <img src={account} alt="" />
          <img src={heart} alt="" />
          <img src={search} alt="" />
          <img src={shoppingCart} alt="" />
        </HeaderControl>
      </HeaderContent>
    </HeaderContainer>
  );
}
