import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        
        <Logo to={'/'}><img src="./img/logo2.png" alt="dishlyst logo"/></Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
/* height: 3rem;
width: 3rem; */
img {
  height: 11rem;
  width: 15rem;
}
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
