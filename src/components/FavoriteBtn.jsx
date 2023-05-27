import { styled } from "styled-components";
import { NavLink, useLocation } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

function FavoriteBtn() {

  let location = useLocation();
  
  return (
    <FavLinkContainer>
      {location.pathname === '/' ?  <FavLink to={'/favorites/'}>
          <BsFillSuitHeartFill/>
        </FavLink> :    <FavCloseLink to={'/'}>
          < VscChromeClose/>
        </FavCloseLink>}
    </FavLinkContainer>
  )
};

const FavLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-radius: 15px;
`;

const FavLink = styled(NavLink)`
background: linear-gradient(35deg, #494949, #313131);
border-radius: 15px;
color: white;
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