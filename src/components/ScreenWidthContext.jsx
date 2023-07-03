import { createContext, useContext, useState, useEffect } from "react";


const ScreenWidthContext = createContext(null);

export const useScreenWidthContext = () => {
  const context = useContext(ScreenWidthContext);
  if(context === undefined) {
    throw new Error('ScreenWidthContext must be within ScreenWidthContextProvider')
  }
  return context;
}

const ScreenWidthProvider = ({children}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  
      const handleWindowResize = () => {
        setScreenWidth(window.innerWidth)

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }

    return (
        <ScreenWidthContext.Provider value={{screenWidth, handleWindowResize}}>
            {children}
        </ScreenWidthContext.Provider>
    )

}

export default ScreenWidthProvider;