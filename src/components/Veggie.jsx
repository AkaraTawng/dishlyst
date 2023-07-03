import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { devices } from "../breakpoints";
import { Wrapper, Card, Gradient, MobileContainer, SplideCard } from "../SharedStyles.js";
import ShowNew from "./ShowNew";
import { useFavoritesContext } from '../components/FavoritesProvider';

import FavoritesToggleBtn from "./FavoritesToggleBtn";





function Veggie() {

  const [veggie, setVeggie] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites, favoritesChecker } = useFavoritesContext();
  
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

            {/* <MobileContainer>
            {veggie.map((recipe) => {
                return(
                    <Card key={recipe.id}>
                      {favoritesChecker(recipe) ? 
                      <FavoritesToggleBtn classes='active' onClick={() => removeFromFavorites(recipe.id)}></FavoritesToggleBtn> : 
                      <FavoritesToggleBtn onClick={() => addToFavorites(recipe)}></FavoritesToggleBtn>}
                      <Link to={'/recipe/' + recipe.id}>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </Card>
                );
              })}
            </MobileContainer> */}

            <Splide options={{
              perPage: 4, 
              arrows: false, 
              pagination: false, 
              drag: 'free', 
              gap: '-3rem'
            }}>
              {veggie.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                    <SplideCard>
                      <Link to={'/recipe/' + recipe.id}>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </SplideCard>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Wrapper>
    </div>
  );
}

export default Veggie;