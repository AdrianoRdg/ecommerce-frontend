import {
  BrandInfo,
  Copyright,
  FooterContainer,
  FooterContent,
  FooterInfo,
  FooterNav,
  FooterNavContent,
  FooterNewsletter,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer className="container">
      <FooterContent>
        <FooterInfo>
          <BrandInfo>
            <h2>Furniro.</h2>
            <p>
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </BrandInfo>

          <FooterNav>
            <FooterNavContent>
              <h3>Links</h3>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </FooterNavContent>

            <FooterNavContent>
              <h3>Help</h3>
              <ul>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </FooterNavContent>
          </FooterNav>

          <FooterNewsletter>
            <h3>newsletter</h3>
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </FooterNewsletter>
        </FooterInfo>

        <Copyright>
          <p>2023 furino. All rights reverved</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
