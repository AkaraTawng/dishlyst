import { styled } from "styled-components";

function Favorites() {
  return (
    <FavPageContainer>Favorites</FavPageContainer>
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