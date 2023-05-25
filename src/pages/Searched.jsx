import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../breakpoints";




function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  
  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
};

useEffect(() => {
  getSearched(params.search);
}, [params.search]);

  return (
    <Wrapper>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <Gradient/>
            </Link>
          </Card>
        )
      })}
      </Wrapper>
  )
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Card = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    width: 45%;
  }

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 90%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
   &:active
    {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1));
   }
`;


export default Searched;