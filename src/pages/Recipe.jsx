import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import AddToFavorites from "../components/AddToFavorites";
import FacebookShareBtn from "../components/FacebookShareBtn";
import LineShareBtn from "../components/LineShareBtn";
import TwitterShareBtn from "../components/TwitterShareBtn";
import PinterestShareBtn from "../components/PinterestShareBtn";
import LinkedInShareBtn from "../components/LinkedInShareBtn";
import WhatsAppShareBtn from "../components/WhatsAppShareBtn";
import { BsShare } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { devices } from "../breakpoints";

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('summary');
  const [borderRadius, setBorderRadius] = useState(15);
  const shareUrl = 'https://dishlyst.netlify.app/';

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  }
  
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  
  useEffect(() => {
      {window.screen.width < 760 ? setBorderRadius(15) : setBorderRadius(0)}
  }, []);

  // console.log(details)

  return (
    <DetailWrapper>
        <h2>{details.title}</h2>
        
        <ButtonImageContainer>
          <ShareContainerOuter>
          <img src={details.image} alt={details.title} />
          
            <ShareButtonsContainer>
              <ShareIconContainer>
                <BsShareFill/>
              </ShareIconContainer>
              <PinterestShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
              <TwitterShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
              <FacebookShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
              <LineShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
              <LinkedInShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
              <WhatsAppShareBtn borderRadius={borderRadius} shareUrl={shareUrl}/>
            </ShareButtonsContainer>
          </ShareContainerOuter>

          <ButtonContainer>
           
           <AddToFavorites details={details}/>
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

const ShareContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: orange; */
  @media ${devices.tablet} {
    flex-direction: row-reverse;
  }
` ;

const ShareIconContainer = styled.div`
display: none;

@media ${devices.tablet}{
  display: block;
  background: linear-gradient(35deg, #494949, #313131);
  padding: 1rem .7rem 1rem 1rem;
  border-radius: 10px 0 0 10px;
  margin-bottom: .5rem;
}

  /* z-index: -1; */
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
 

  /* flex-direction: column; */
  /* margin-top: 2rem; */
  /* margin-right: -.5rem; */
  /* background-color: lightgray; */
  margin-bottom: 2.5rem;
  /* align-items: flex-end; */

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  /* margin-right: -.5rem; */
  /* background-color: lightgray; */
    align-items: flex-end;
    justify-content: flex-start;
  }
  

  &:nth-child(2){
    font-size: 1.3rem;
    color: white;
  }
`;


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
      margin-bottom: 1rem;
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
  font-weight: 600;
  margin-bottom: .5rem;
  cursor: pointer;
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
  
  @media ${devices.tablet} {
    margin-left: 3rem;
    height: 11rem;
  }
`;

const ButtonImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: green; */
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }


`;

export default Recipe;

