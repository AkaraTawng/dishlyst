import { styled } from "styled-components";



function ShowNew() {

const handleDeleteLocal = () => {
  localStorage.removeItem('veggie');
  localStorage.removeItem('popular');
  localStorage.removeItem('gluten free');
  localStorage.removeItem('low carb');
  localStorage.removeItem('fingerfood');
  window.location.reload(true);
};

  return (
    <ShowNewButton onClick={handleDeleteLocal}>show new recipes</ShowNewButton>
  )
}

const ShowNewButton = styled.button`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 15px;
  margin: 6rem auto -1rem auto;
  cursor: pointer;
  text-transform: capitalize;
    &:active {
      background: linear-gradient(to right,  #a1ffce, #faffd1); 
      color: rgb(56, 56, 56);
    }
`;

export default ShowNew;

