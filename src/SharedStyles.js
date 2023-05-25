import { styled } from "styled-components";
import { devices } from "./breakpoints";

const Wrapper = styled.div`
margin: 4rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;

const Card = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    width: 45%;
  }

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
  &:active
    {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1));
   }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export { Wrapper, Card, Gradient, MobileContainer};


