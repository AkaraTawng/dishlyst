import { useState, useContext } from "react";
import { styled } from "styled-components";
import { useFavoritesContext } from '../components/FavoritesProvider';


function Favorites() {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();


  // console.log(favorites)
  return (
    <FavPageContainer>
        {favorites.map(favorite => {
        return <Card>
          <img src={favorite.image} alt={favorite.title} />
        
            </Card>
        
         
        })}

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

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default Favorites;