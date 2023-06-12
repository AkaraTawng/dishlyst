import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";
import FavoriteBtn from "./components/FavoriteBtn";
import { FavoritesProvider } from "./components/FavoritesProviderjsx";



function App() {
  return ( <FavoritesProvider>
    <div className="App">
      <BrowserRouter>
      <FavoriteBtn/>
      <Nav>
        <Logo to={'/'}><img src="../img/logo1.png" alt="dishlyst logo"/></Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
    </FavoritesProvider>);
}

const Logo = styled(Link)`
/* height: 3rem;
width: 3rem; */
img {
  height: 4rem;
  width: 13rem;
}
`;

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
