import { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if(context === undefined) {
    throw new Error('Favorites context must be within appContextProvider');
  }

  return context;
}

function FavoritesProvider({children}) {
  const [favorites, setFavorites] = useState([]);
  
  const notifyAdded = () => toast.success("Added to favorites!");

  const notifyRemoved = () => toast.success("Removed from favorites!");

  useEffect(() => {
    const data = localStorage.getItem('fav');
    if (data !== null) setFavorites(JSON.parse(data));
  }, []);

  const favoritesChecker = (dish) => {
    const boolean = favorites.some(favorite => favorite.id === dish.id);
    return boolean;
  }
  
  const addToFavorites = (dish) => {
    const oldFavorites = [...favorites];
    
    const newFavorites = oldFavorites.concat(dish)
    
    localStorage.setItem('fav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);  

    notifyAdded();
  }  

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter(dish => dish.id !== id);
    
    localStorage.setItem('fav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);

    notifyRemoved();
  }

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites, favoritesChecker}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };