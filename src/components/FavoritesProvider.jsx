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

  const check = localStorage.getItem('favorites');

  const addToFavorites = (dish) => {
    const oldFavorites = [...favorites];
    
    const newFavorites = oldFavorites.concat(dish)
    
 
    setFavorites(newFavorites);  
    
  }  
  // if(check){
  //   setFavorites(JSON.parse(check))
  // } else {
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  // }
  // useEffect(() => {
    
  //   }, [])

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter(dish => dish.id !== id);

    setFavorites(newFavorites);
  }

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };