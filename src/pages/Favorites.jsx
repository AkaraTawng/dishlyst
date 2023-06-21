import { useState, useContext } from "react";
import { styled } from "styled-components";
import { useFavoritesContext } from '../components/FavoritesProvider';
import { Link } from "react-router-dom"; 


function Favorites() {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();

  return (
    <FavPageContainer>
        {favorites.length > 0 ? 
        favorites.map(favorite => {
        return (
          <Card>
            <img src={favorite.image} alt={favorite.title}/>
            <FavLink to={'/recipe/' + favorite.id}>{favorite.title}</FavLink>
          </Card>
        )
        }) : 
        <Card>
          <NoFavoritesMessage>You don't have any favorite recipes yet!</NoFavoritesMessage>
        </Card>
        }
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
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;

  img {
    height: 10rem;
    width: 12rem;
    border-radius: 15px;
    align-self: center;
  }
`;

const FavLink = styled(Link)`
  font-weight: 600;
  font-size: .7rem;
  text-align: center;
  padding-top: .5rem;
`;

const NoFavoritesMessage = styled.h1`
  text-align: center;
`;

export default Favorites;