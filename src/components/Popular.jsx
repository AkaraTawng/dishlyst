import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient, MobileContainer } from "../SharedStyles.js";


function Popular() {

    const [popular, setPopular] = useState([]);
  
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

            <MobileContainer>
            {popular.map((recipe) => {
                return(
                    <Card key={recipe.id}>
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



export default Popular;