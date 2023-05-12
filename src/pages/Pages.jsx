import Home from "./Home"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cuisine from "./Cuisine";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cusine/:type" element={<Cuisine/>}/>
      </Routes>
  )
}

export default Pages