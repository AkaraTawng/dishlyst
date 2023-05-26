import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { devices } from "../breakpoints";
import { Wrapper, Card, Gradient, MobileContainer } from "../SharedStyles.js";
import { useMediaQuery } from 'react-responsive';




function Veggie() {

//rea
 

  // if(window.innerWidth === 760) {
  //    console.log('tablet')
  // }

  const [veggie, setVeggie] = useState([]);

  
  
  useEffect(() => {
          getVeggie();
      }, []);

  const getVeggie = async () => {
  
    const check = localStorage.getItem('veggie');


    if(check){
      setVeggie(JSON.parse(check));
    } else{
      
      // if(screen.innerWidth < 1280){
      //   //show 8 items
      // } else if(screen.innerWidth >= 1280) {
      //   //show 9 items
      // }
     
      // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`);
      
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}${window.innerWidth < 760 ? '&number=8' : '&number=9' }&tags=vegetarian`);
   
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes)
    };
  };

  return (
      <div>
          <Wrapper>
            <h3>Vegetarian Picks</h3>

            <MobileContainer>
            {veggie.map((recipe) => {
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


export default Veggie;