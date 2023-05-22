import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { devices } from "../breakpoints";


function Popular() {

    const [popular, setPopular] = useState([]);
  
    useEffect(() => {
            getPopular();
        }, []);

        
        
    const getPopular = async () => {
    
      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check));
      } else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes)
      };
    };

  return(
      <div>
          <Wrapper>
            <h3>Popular Picks</h3>

            <MobileContainer>
            {popular.map((recipe) => {
                return(
                    <Card key={recipe.id}>
                      <Link to={'/recipe' + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </Card>
                );
              })}
            </MobileContainer>

            {/* <Splide options={{
              perPage: 4, 
              arrows: false, 
              pagination: false, 
              drag: 'free', 
              gap: '5rem'
            }}>
              {popular.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={'/recipe' + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </Card>
                  </SplideSlide>
                );
              })}
            </Splide> */}
          </Wrapper>
    </div>
  )
}

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

export default Popular;