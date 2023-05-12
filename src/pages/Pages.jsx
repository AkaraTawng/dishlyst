import Home from "./Home"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cuisine from "./Cuisine";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cusine" element={<Cuisine/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default Pages