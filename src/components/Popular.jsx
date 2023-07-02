import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient, MobileContainer, SplideCard } from "../SharedStyles.js";
import FavoritesToggleBtn from "./FavoritesToggleBtn";
import { useFavoritesContext } from '../components/FavoritesProvider';


function Popular() {

    const [popular, setPopular] = useState([]);
    
    const { favoritesChecker, removeFromFavorites, addToFavorites } = useFavoritesContext();
    
    useEffect(() => {
            getPopular();
        }, []);

        
        
    const getPopular = async () => {
    
      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}${window.innerWidth < 760 ? '&number=8' : '&number=9'}`);

        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes)
      };
    };

  return(
      <div>
          <Wrapper>
            <h3>Popular Picks</h3>

            {/* { window.location.innerWidth < 1280 && <MobileContainer>
            {popular.map((recipe) => {
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
            </MobileContainer> } */}

           <Splide options={{
              perPage: 4, 
              arrows: false, 
              pagination: false, 
              drag: 'free', 
              gap: '5rem'
            }}>
              {popular.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                    <SplideCard>
                      <Link to={'/recipe' + recipe.id}>
                        <p>{recipe.title}</p>
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
  )
}



export default Popular;