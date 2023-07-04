import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient, MobileContainer, SplideCard } from "../SharedStyles.js";
import FavoritesToggleBtn from "./FavoritesToggleBtn";
import { useFavoritesContext } from '../components/FavoritesProvider';
import { useScreenWidthContext } from "./ScreenWidthContext.jsx";


function Popular() {
    const [popular, setPopular] = useState([]);
    const {screenWidth, handleWindowResize} = useScreenWidthContext();

    // console.log(screenWidth > 1000, 'width context')
       
    const { favoritesChecker, removeFromFavorites, addToFavorites } = useFavoritesContext();
    
    useEffect(() => {
            getPopular();
            handleWindowResize();
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
{screenWidth < 1280 &&
            <MobileContainer>
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
            </MobileContainer> }

           {screenWidth >= 1280 && <Splide options={{
              perPage: 4, 
              arrows: false, 
              pagination: false, 
              drag: 'free', 
              gap: '-3rem'
            }}>
              {popular.map((recipe) => {
                return(
                  <SplideSlide key={recipe.id}>
                    <SplideCard>
                      <Link to={'/recipe' + recipe.id}>
                        <h4>{recipe.title}</h4>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Link>
                    </SplideCard>
                  </SplideSlide>
                );
              })}
            </Splide> }
          </Wrapper>
    </div>
  )
}


export default Popular;