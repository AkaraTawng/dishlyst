import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../breakpoints";

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('summary');
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    
  }
  
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  // console.log(details)

  return (
    // <DetailWrapper>
    //   <div>
    //     <h2>{details.title}</h2>
    //     <img src={details.image} alt="" />
    //   </div>

    //   <Info>
    //     <Button
    //       className={activeTab === 'instructions' ? 'active' : ''}
    //       onClick={() => setActiveTab('instructions')}>Instructions
    //     </Button>
    //     <Button 
    //       className={activeTab === 'ingredients' ? 'active' : ''}
    //       onClick={() => setActiveTab('ingredients')}>Ingredients
    //     </Button>
    //     {activeTab === 'instructions' && (
    //       <div>
    //         <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
    //         <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
    //       </div>
    //     )}
    //     {activeTab === 'ingredients' && (
    //       <ul>
    //         {details.extendedIngredients.map((ingredient) => {
    //           <li key={ingredient.id}>{ingredient.original}</li>
    //         })}
    //       </ul>
    //     )}
    //   </Info>
    // </DetailWrapper>
    // <DetailWrapper>
    <DetailWrapper>
        <h2>{details.title}</h2>
        
        <ButtonImageContainer>
          
          <img src={details.image} alt="" />

          <ButtonContainer>
            <Button 
              className={activeTab === 'summary' ? 'active' : ''}
              onClick={() => setActiveTab('summary')}>Nutrition Info
            </Button>
            <Button 
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={() => setActiveTab('ingredients')}>Ingredients
            </Button>
            <Button
              className={activeTab === 'instructions' ? 'active' : ''}
              onClick={() => setActiveTab('instructions')}>Instructions
            </Button>
          </ButtonContainer>
        
        </ButtonImageContainer>


      <Info>
        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients &&
            details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}> {ingredient.original}</li>
            ))}
          </ul>
        )}
         {activeTab === 'summary' && (
          <div>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
          </div>
        )}
      </Info>
    </DetailWrapper>
  )
}




const DetailWrapper = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .active {
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
    }
    h2 {
      margin-bottom: 2rem;
      text-align: center;
    }
    li {
      margin-bottom: 2rem;
      &::marker {
        font-weight: 700;
        }
    }
    ul {
      margin-top: 2rem;
    }

    p {
      margin-top: 2rem;
      line-height: 1.8rem;
      @media ${devices.laptop} {
        padding: 0 12%;
      }
      @media ${devices.desktopL} {
        padding: 0 20%;
      }
    }

    img {
      height: clamp(17rem, 15.4rem + 8vw, 25rem);
      width: clamp(17rem, 15.8rem + 6vw, 23rem);
      border-radius: 2rem;
      margin-bottom: 2.5rem;
      object-fit: cover;
      @media ${devices.tablet} {
        width: 25rem;
        height: 23rem;
      }
    }
`;

const Button = styled.button`
  padding: .7rem 1rem;
  border-radius: .6rem;
  color: white;
  background-color: white;
  background: linear-gradient(35deg, #494949, #313131);
  /* border: 2px solid black; */
  /* margin-right: 2rem; */
  font-weight: 600;
  /* margin-bottom: 1rem; */
  &.active {
  background: linear-gradient(to right,  #a1ffce, #faffd1); 
  color: rgb(56, 56, 56);
  border: none;
}

`;

const Info = styled.div`
    /* margin-left: 10rem; */
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 11rem;
  height: 11rem;
  @media ${devices.tablet} {
    margin-left: 5rem;
  }
`;

const ButtonImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }


`;

export default Recipe;

