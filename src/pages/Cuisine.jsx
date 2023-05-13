import { motion } from "framer-motion";
import { styled } from "styled-components";
import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    
    useEffect(() => {
      getCuisine(params.type);
      console.log(params.type)
    }, [params.type]);
    
  return (
    <div>

    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export default Cuisine;