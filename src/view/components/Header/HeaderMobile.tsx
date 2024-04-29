import { HeaderMobileContainer } from "./styles";

export function HeaderMobile({ isMobile = false }) {
  return (
    <HeaderMobileContainer $isMobile={isMobile}>
      <h1>Content</h1>
    </HeaderMobileContainer>
  );
}
