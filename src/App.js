import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        
        <Logo to={'/'}></Logo>
      </Nav>
      <img src="./img/logo1.png"/>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
height: 8rem;
width: 8rem;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
