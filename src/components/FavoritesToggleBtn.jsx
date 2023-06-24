import React from 'react'
import { styled } from 'styled-components';
import { BsFillSuitHeartFill } from 'react-icons/bs';

function FavoritesToggleBtn({classes, onClick}) {
  return (
    <FavToggleBtn className={classes} onClick={onClick}>
        <BsFillSuitHeartFill/>
    </FavToggleBtn>
  )
}



const FavToggleBtn = styled.button`
  color: white;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  background-color: transparent;
  border: none;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.4rem;

  &.active {
    color: red;
  }
`;

export default FavoritesToggleBtn
