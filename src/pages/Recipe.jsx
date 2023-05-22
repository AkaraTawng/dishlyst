import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";


function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    
  }
  
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  console.log(details)
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
      {/* <div> */}
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        
      {/* </div> */}

      <Info>
        <ButtonContainer>
          <Button
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => setActiveTab('instructions')}>Instructions
            
          </Button>
          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => setActiveTab('ingredients')}>Ingredients
          </Button>
          <Button 
            className={activeTab === 'summary' ? 'active' : ''}
            onClick={() => setActiveTab('summary')}>Nutrition Info
          </Button>
        </ButtonContainer>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>
            })}
          </ul>
        )}
         {activeTab === 'summary' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
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
    }
    ul {
      margin-top: 2rem;
    }

    img {
      height: 17rem;
      width: 17rem;
      border-radius: 2rem;
      margin-bottom: 2.5rem;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 11rem;
  height: 11rem;
`;

export default Recipe;

