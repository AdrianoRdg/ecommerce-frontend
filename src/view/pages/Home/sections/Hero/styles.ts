import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  height: 494.73px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 4rem;
  background-color: #fff3e3;
  width: 643px;
  height: 320px;
  border-radius: 10px 0px 0px 0px;

  p {
    padding: 2rem 2rem 0 2rem;
  }
`;
