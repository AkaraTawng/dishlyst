//render in recipe pages
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { styled } from "styled-components"
import { useState } from 'react';

function AddToFavorites() {

    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    };

  return (
    <AddToFavBtn className={active ? 'active' : null} onClick={handleActive}>
        {!active ? 'Add to favorites' : 'Remove from'}
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