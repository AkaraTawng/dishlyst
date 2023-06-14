import { createContext, useContext, useState } from "react";

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


  const addToFavorites = (dish) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(dish)

    setFavorites(newFavorites);
  }

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter(dish => dish.id !== id);

    setFavorites(newFavorites);
  }


  // const addToFavorites = () => {
  //   // handleActive();
  //     setFavorites([...favorites, {title, id, image}]);
  //     // console.log(favorites)
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  // };

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
        {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };