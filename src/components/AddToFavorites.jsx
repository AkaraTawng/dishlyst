//render in recipe pages
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function AddToFavorites(props) {

    const location = useLocation();
    const [active, setActive] = useState(false);
    const [favorites, setFavorites] = useState(['1', '2']);
    const handleActive = () => {
        setActive(!active);
    };

    useEffect(() => {
        if(active) {
            addToFavorites();}
        // } else if(!active) {
        //     removeFromFavorites();
        // }
    }, [active]);

    const addToFavorites = () => {
// console.log(location.pathname)
      if(favorites.includes(location.pathname)){
        console.log('already added')
      } else {
        let newFavorite = location.pathname;
         let updatedFavorites = [...favorites, newFavorite];
        setFavorites(updatedFavorites)
       
        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(updatedFavorites)
      }
       
    };


    const removeFromFavorites = () => {
        // const filteredFavorites = favorites.filter(favorite => favorite !== location.pathname);
        // setFavorites([...filteredFavorites])
        // localStorage.removeItem('favorites', favorites);
        
    };

  return (
    <AddToFavBtn className={active ? 'active' : null} onClick={handleActive}>
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