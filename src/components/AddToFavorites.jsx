//render in recipe pages
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function AddToFavorites({details}) {
    // const location = useLocation();
    const [active, setActive] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const {title, id, image} = details;
    console.log(details)
    const handleActive = () => {
        setActive(!active);
    };

    // useEffect(() => {
        
    // }, [active]);

    const handleFavorites = () => {
      handleActive();
      addToFavorites();
  };

    const addToFavorites = () => {
      handleActive();
        setFavorites([...favorites, {title, id, image}]);
        console.log(favorites)
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
   
    // const removeFromFavorites = () => {
    //   handleActive();
    //   let filteredFavorites = favorites.filter(favorite => favorite.id !== id);
    //   setFavorites(filteredFavorites)
    //   console.log(favorites)
    // };

 

  return (
    <AddToFavBtn className={active ? 'active' : null} onClick={handleFavorites}>
        {!active ? 'Add to favorites' : 'Remove from favorites'}
        <div>
        <BsFillSuitHeartFill/>
        </div>
    </AddToFavBtn>
  )

};


const AddToFavBtn = styled.button`
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