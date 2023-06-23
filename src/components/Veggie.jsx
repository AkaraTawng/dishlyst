import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { devices } from "../breakpoints";
import { Wrapper, Card, Gradient, MobileContainer } from "../SharedStyles.js";
import { useMediaQuery } from 'react-responsive';
import ShowNew from "./ShowNew";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { useFavoritesContext } from '../components/FavoritesProvider';





function Veggie() {

  const [veggie, setVeggie] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();
  
  useEffect(() => {
          getVeggie();
      }, []);

  const getVeggie = async () => {
  
    const check = localStorage.getItem('veggie');


    if(check){
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}${window.innerWidth < 760 ? '&number=8' : '&number=9' }&tags=vegetarian`);
   
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes)
    };
  };

  return (
      <div>
         <ShowNew/>
          <Wrapper>

            <h3>Vegetarian Picks</h3>

            <MobileContainer>
            {veggie.map((recipe) => {
                return(
                    <Card key={recipe.id}>
                      <AddBtn onClick={() => addToFavorites(recipe)}><BsFillSuitHeartFill/></AddBtn>
                      <Link to={'/recipe/' + recipe.id}>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </Card>
                );
              })}
            </MobileContainer>

            {/* <Splide options={{
              perPage: 3, 
              arrows: false, 
              pagination: false, 
              drag: 'free', 
              gap: '5rem'
            }}>
              {veggie.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={'/recipe/' + recipe.id}>
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
  );
}

const AddBtn = styled.button`
  color: white;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  background-color: transparent;
  /* padding: 1rem; */
  border: none;
  top: 1rem;
  right: 1.5rem;

  &:hover {
    color: red;
  }
`;

export default Veggie;