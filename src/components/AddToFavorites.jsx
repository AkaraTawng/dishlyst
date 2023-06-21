import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useFavoritesContext } from './FavoritesProvider';


function AddToFavorites({details}) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesContext();

    const favoritesChecker = (dish) => {
      const boolean = favorites.some(favorite => favorite.id === dish.id);
      return boolean;
    }

  return (
    <div>
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