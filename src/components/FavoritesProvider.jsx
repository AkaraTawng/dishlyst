import { createContext } from "react"

const FavoritesContext = createContext();

function FavoritesProvider(props) {
    const favorites = [];
  return (
    <FavoritesContext.Provider value={favorites}>
        {props.children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider };