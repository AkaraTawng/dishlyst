import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Favorites() {
  return (
    <FavLinkContainer>
        <FavLink>
        <BsFillSuitHeartFill/>
        </FavLink>
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
&:active {
    color: red;
}
`;

export default Favorites;