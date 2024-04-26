import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  background-color: #faf3ea;
  height: 6.25rem;
  display: flex;
  align-items: center;

  nav {
    padding-left: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #9f9f9f;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;
