import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";


function Recipe() {

  let params = useParams();
  
  const fetchDetails = async () => {
  
  const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
  }
  
  return (
    <div>Recipe</div>
  )
}

export default Recipe;

