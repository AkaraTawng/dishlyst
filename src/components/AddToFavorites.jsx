//render in recipe pages
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useFavoritesContext } from './FavoritesProvider';




function AddToFavorites({details}) {

  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();

  {details && console.log(favorites)}

    const favoritesChecker = (id) => {
      const boolean = favorites.some(dish => dish === id);
      return boolean;
    }

  return (
    <div>
      { details && favoritesChecker(details.id) ? 
          <FavToggleBtn className='active' onClick={() => removeFromFavorites(details.id)}>
          Remove from favorites
          <div>
          <BsFillSuitHeartFill/>
          </div>
      </FavToggleBtn> : 
      <FavToggleBtn onClick={() => addToFavorites(details.id)}>
            Add to favorites
            <div>
            <BsFillSuitHeartFill/>
            </div>
        </FavToggleBtn>
    }
     
    </div>
  
  )

};


const FavToggleBtn = styled.button`
display: flex;
justify-content: space-around;
align-items: center;
  padding: .7rem 1rem;
  border-radius: .6rem;
  color: white;
  background-color: white;
  background: linear-gradient(35deg, #494949, #313131);
  font-weight: 600;
  margin-bottom: .5rem;
  cursor: pointer;
  &.active div {
    color: red;
  }
 
`;



export default AddToFavorites