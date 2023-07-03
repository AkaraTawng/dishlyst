import { styled } from "styled-components";
import { devices } from "./breakpoints";

const Wrapper = styled.div`
margin: 4rem 0rem;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
align-items: center;
`;

const WrapperSecondary = styled(Wrapper)`
    @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  
`;

const Card = styled.div`
  height: 15rem;
  width: 15rem;
  width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    width: 45%;
    width: 50rem;
  }

  @media ${devices.laptop} {
    width: 23rem;
    width: 30%; 
    height: 20rem;
  }


  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 90%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SplideCard = styled(Card)`
  width: 25rem;
  margin: 0 0 0 1rem;
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
  width: 100%;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export { Wrapper, WrapperSecondary, Card, Gradient, MobileContainer, SplideCard};


