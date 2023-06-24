import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../breakpoints";
import { Wrapper, WrapperSecondary, Card, Gradient} from "../SharedStyles.js";
import FavoritesToggleBtn from "../components/FavoritesToggleBtn";
import { useFavoritesContext } from '../components/FavoritesProvider';




function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  const { favoritesChecker, removeFromFavorites, addToFavorites } = useFavoritesContext();
  
  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
};

useEffect(() => {
  getSearched(params.search);
}, [params.search]);

  return (
    <WrapperSecondary>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            {favoritesChecker(item) ? 
            <FavoritesToggleBtn classes='active' onClick={() => removeFromFavorites(item.id)}></FavoritesToggleBtn> : 
            <FavoritesToggleBtn onClick={() => addToFavorites(item)}></FavoritesToggleBtn>}
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <Gradient/>
            </Link>
          </Card>
        )
      })}
      </WrapperSecondary>
  )
};


export default Searched;