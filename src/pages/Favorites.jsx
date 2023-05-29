import { useState } from "react";
import { styled } from "styled-components";


function Favorites() {

  const [favList, setFavList] = useState(localStorage.getItem('favorites'));
  return (
    <FavPageContainer>
      {favList}
      {/* <ul>
      {favList.map(listItem => {
        <li>{listItem}</li>
      })}
      </ul> */}
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