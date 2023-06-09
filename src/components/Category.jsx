import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiIndianPalace } from 'react-icons/gi';
import { MdTempleBuddhist } from 'react-icons/md';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../breakpoints';


function Category() {
  return (
    <List>   
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
      
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink> 
        
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>

        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>

        <SLink to={'/cuisine/Korean'}>
            <MdTempleBuddhist/>
            <h4>Korean</h4>
        </SLink>

        <SLink to={'/cuisine/Indian'}>
            <GiIndianPalace/>
            <h4>Indian</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    width: 98%;
    width: 80%;
    width: 17rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 3rem 0 -2rem 0;
    margin: 3rem auto -2rem auto;

    @media ${devices.mobileM} {
       width: 20rem;
    }
   
    @media ${devices.tablet} {
       width: 50rem;
    }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: .3rem 0rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: clamp(5rem, 4.4rem + 3vw, 8rem);
    height: clamp(5rem, 4.4rem + 3vw, 8rem);
    transform: scale(0.8);
    cursor: pointer;

    h4 {
        color: white;
        font-size: .8rem;
    }

    svg {
        color: white;
        font-size: clamp(1.5rem, 1.36rem + 0.7vw, 2.2rem);
        margin-bottom: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);
    }

    &.active {
        background: linear-gradient(to right,  #a1ffce, #faffd1); 
         svg, h4 {
            color: rgb(56, 56, 56);
        }
    }
`;




export default Category