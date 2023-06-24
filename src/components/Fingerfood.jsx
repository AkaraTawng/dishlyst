import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient, MobileContainer } from "../SharedStyles.js";
import FavoritesToggleBtn from "./FavoritesToggleBtn";
import { useFavoritesContext } from '../components/FavoritesProvider';

function Fingerfood() {

    const [fingerfood, setFingerfood] = useState([]);

    const { favoritesChecker, removeFromFavorites, addToFavorites } = useFavoritesContext();

    useEffect(() => {
        getFingerfood();
    }, []);

    const getFingerfood = async () => {
    
        const check = localStorage.getItem('fingerfood');
  
        if(check){
          setFingerfood(JSON.parse(check));
        } else {
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}${window.innerWidth < 760 ? '&number=8' : '&number=9'}&tags=fingerfood`);
  
          const data = await api.json();
          
          localStorage.setItem('fingerfood', JSON.stringify(data.recipes));
          setFingerfood(data.recipes)
        };
      };

      return (
        <div>
            <Wrapper>
  
              <h3>Fingerfood</h3>
  
              <MobileContainer>
              {fingerfood.map((recipe) => {
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


export default Fingerfood;