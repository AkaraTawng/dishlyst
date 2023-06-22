import { createContext, useContext, useState, useEffect } from "react";

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

  useEffect(() => {
    const data = localStorage.getItem('fav');
    if (data !== null) setFavorites(JSON.parse(data));
  }, []);
  
  const addToFavorites = (dish) => {
    const oldFavorites = [...favorites];
    
    const newFavorites = oldFavorites.concat(dish)
    
    localStorage.setItem('fav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);  
  }  

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter(dish => dish.id !== id);
    
    localStorage.setItem('fav', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };