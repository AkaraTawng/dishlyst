import { styled } from "styled-components";
import { NavLink, useLocation} from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { useFavoritesContext } from '../components/FavoritesProvider';


function FavoriteBtn() {
  
  const { favorites } = useFavoritesContext();
  
  let location = useLocation();
  let pathname = location.pathname;

  return (
    <FavLinkContainer>
      {pathname !== '/favorites/' ?  
        <FavLink to={'/favorites/'}>
           {favorites.length > 0 && <FavoritesCount>
        {favorites.length}
      </FavoritesCount>}
          <BsFillSuitHeartFill/>
        </FavLink> 
        : pathname === '/favorites/' ?   
        <FavCloseLink to={-1}>
          <VscChromeClose/>
        </FavCloseLink> : null }
    </FavLinkContainer>
  )
};

const FavLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-radius: 15px;
`;

const FavoritesCount = styled.div`
  position: absolute;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 10px;
  bottom: -9px;
  left : -5px;
  font-weight: 700;
  z-index: 5;
`;

const FavLink = styled(NavLink)`
background: linear-gradient(35deg, #494949, #313131);
border-radius: 15px;
color: white;
position: relative;
padding: 0.8rem 1rem;
font-size: 1.2rem;
margin: 10px 10px 0 0;
z-index: 2;
&:active {
    color: red;
}
`;
const FavCloseLink = styled(FavLink)``;

export default FavoriteBtn;