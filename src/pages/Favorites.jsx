import { useState, useContext } from "react";
import { styled } from "styled-components";
import { FavoritesContext } from "../components/FavoritesProvider";


function Favorites() {

  const [favList, setFavList] = useState(localStorage.getItem('favorites'));

  const favorites = useContext(FavoritesContext);
  console.log(favorites)
  return (
    <FavPageContainer>
     
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

export default Favorites;