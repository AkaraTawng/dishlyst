import { useState, useContext } from "react";
import { styled } from "styled-components";
import { useFavoritesContext } from '../components/FavoritesProvider';
import { Link } from "react-router-dom"; 
import { VscChromeClose } from 'react-icons/vsc';
import { devices } from "../breakpoints";



function Favorites() {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();

  return (
    <FavPageContainer>
        {favorites.length > 0 ? 
        favorites.map(favorite => {
        return (
          <Card key={favorite.id}>
            <FavImgContainer>
              <RemoveBtn onClick={() => removeFromFavorites(favorite.id)}><VscChromeClose/></RemoveBtn>
              <img src={favorite.image} alt={favorite.title}/>
            </FavImgContainer>
            <FavLink to={'/recipe/' + favorite.id}>{favorite.title}</FavLink>
          </Card>
        )
        }) : 
        <Card>
          <NoFavoritesMessage>You don't have any favorite recipes!</NoFavoritesMessage>
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
  margin-top: 10rem;
  width: 100%;

  img {
    height: 10rem;
    width: 12rem;

    @media ${devices.tablet} {
      height: 17rem;
      width: 19rem;
    }

    border-radius: 15px;
    align-self: center;
  }
`;

const FavLink = styled(Link)`
  font-weight: 600;
  font-size: .7rem;
  text-align: center;
  padding-top: .5rem;

  @media ${devices.tablet} {
    font-size: 1rem;
  }
`;

const NoFavoritesMessage = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const FavImgContainer = styled.div`
  align-self: center;
  position: relative;
`;

const RemoveBtn = styled.button`
    position: absolute;
    top: -15px;
    right: -8px;
    color: red;
    background-color: transparent;
    border: none;
    
    @media ${devices.tablet} {
      font-size: 1.2rem;
      top: -23px;
      right: -10px;
    }
    cursor: pointer;
    &:hover {
      color: darkred;
    }
`;

export default Favorites;