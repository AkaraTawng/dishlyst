import { useState, useContext } from "react";
import { styled } from "styled-components";
import { FavoritesContext } from "../components/FavoritesProvider";
import { useFavoritesContext } from '../components/FavoritesProvider';


function Favorites() {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();


  console.log(favorites)
  return (
    <FavPageContainer>
      <ul>
        {favorites.map(favorite => <li>{favorite}</li>)}
      </ul>
    </FavPageContainer>
  )
}

const FavPageContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
`;

export default Favorites;