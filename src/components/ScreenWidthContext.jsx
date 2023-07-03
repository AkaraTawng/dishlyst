import { createContext, useContext, useState, useEffect } from "react";


const ScreenWidthContext = createContext(null);

export const useScreenWidthContext = () => {
  const context = useContext(ScreenWidthContext);

  return context;
}

const ScreenWidthProvider = ({children}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setScreenWidth(window.innerWidth)
        console.log(screenWidth, 'width')
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []) 

    console.log(screenWidth, 'width')


    return (
        <ScreenWidthContext.Provider value={{screenWidth, handleWindowResize}}>
            {children}
        </ScreenWidthContext.Provider>
    )

}

export default ScreenWidthProvider;