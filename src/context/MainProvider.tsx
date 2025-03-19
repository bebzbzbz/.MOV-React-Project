import { createContext, useState } from "react";

export const mainContext = createContext({})

const MainProvider = ({children}: {children: React.ReactNode}) => {

const [movieDataList, setMovieDataList] = useState([])

    return ( 
        <mainContext.Provider value={{movieDataList, setMovieDataList}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;