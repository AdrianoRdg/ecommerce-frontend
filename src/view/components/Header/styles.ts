import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.25rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

export const HeaderBrand = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-left: 2rem;
`;

export const Navbar = styled.nav<{ $isMobile: boolean }>`
  display: ${({ $isMobile }) => $isMobile && "none"};

  ul {
    list-style: none;
    display: flex;
    gap: 4rem;
  }

  li a {
    text-decoration: none;
    color: inherit;
  }

  li:hover {
    text-decoration: underline 2px;
    font-weight: 500;
  }
`;

export const HeaderControl = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 0.5rem;
  padding-right: 2rem;
`;

export const HeaderMenu = styled.img`
  width: 2.5rem;
`;

export const HeaderMobileContainer = styled.div<{ $isMobile: boolean }>`
  position: absolute;
  right: 0;
  /* background-color: red; */
  width: 25rem;
  /* display: ${({ $isMobile }) => ($isMobile ? "flex" : "none")}; */
  display: none;
`;
