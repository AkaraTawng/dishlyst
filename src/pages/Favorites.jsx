import { useState, useContext } from "react";
import { styled } from "styled-components";
import { useFavoritesContext } from '../components/FavoritesProvider';
import { Link } from "react-router-dom"; 


function Favorites() {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();


  // console.log(favorites)
  return (
    <FavPageContainer>
        {favorites.map(favorite => {
        return <Card>
              <img src={favorite.image} alt={favorite.title} />
              <FavLink to={'/recipe/' + favorite.id}>{favorite.title}</FavLink>
        
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

const FavLink = styled(Link)`
  
`

export default Favorites;