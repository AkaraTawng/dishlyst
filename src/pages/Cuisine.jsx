import { motion } from "framer-motion";
import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrapper, WrapperSecondary,Card, Gradient} from "../SharedStyles.js";
import FavoritesToggleBtn from "../components/FavoritesToggleBtn.jsx";
import { useFavoritesContext } from '../components/FavoritesProvider';
function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const { favoritesChecker, removeFromFavorites, addToFavorites } = useFavoritesContext();

  
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    
    useEffect(() => {
      getCuisine(params.type);
    }, [params.type]);
    
  return (
    // <Grid
    //   animate={{opacity:1}}
    //   initial={{opacity:0}}
    //   exit={{opacity:0}}
    //   transition={{duration:0.5}}
    // >
    <WrapperSecondary>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            {favoritesChecker(item) ? 
            <FavoritesToggleBtn classes='active' onClick={() => removeFromFavorites(item.id)}></FavoritesToggleBtn> : 
            <FavoritesToggleBtn onClick={() => addToFavorites(item)}></FavoritesToggleBtn>}
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <Gradient/>
            </Link>
          </Card>
        )
      })}
    {/* </Grid> */}
    </WrapperSecondary>
  )
}

// const Grid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
//   grid-gap: 3rem;
// `;

// const Wrapper = styled.div`
//   margin: 4rem 0rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Card = styled.div`
//   height: 15rem;
//   width: 15rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;
//   margin-bottom: 2rem;
    /* img {
    border-radius: 2rem; */
    /* position: absolute; */
    /* left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    a {
      text-decoration: none;
    } */

    /* h4 { */
      /* text-align: center;
      padding: 1rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
      bottom: 0%;
      color: white;
      width: 90%; */
      /* position: absolute;
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
    } */
// `;

// const Gradient = styled.div`
//   z-index: 1;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0,1));
//    &:active
//     {
//     background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1));
//    }
// `;

export default Cuisine;