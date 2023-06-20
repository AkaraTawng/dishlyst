//render in recipe pages
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useFavoritesContext } from './FavoritesProvider';




function AddToFavorites({details}) {
// console.log(details.title, 'details ATF')
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();

  // {details && console.log(details, 'fav')}

    const favoritesChecker = (dish) => {
      const boolean = favorites.some(favorite => favorite.id === dish.id);
      // const boolean = favorites.some(favorite => console.log(favorite.id, 'fav id'));
      return boolean;
    }

  return (
    <div>
      {/* check if details has items and check if item already exists in favorites */}
      {favoritesChecker(details) ? 
          <FavToggleBtn className='active' onClick={() => removeFromFavorites(details.id)}>
          Remove from favorites
          <div>
            <BsFillSuitHeartFill/>
          </div>
      </FavToggleBtn> : 
      <FavToggleBtn onClick={() => addToFavorites(details)}>
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
  align-items: center;
  justify-content: space-around;
  /* padding: .7rem 1rem; */
  padding: .7rem 1.6rem;
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