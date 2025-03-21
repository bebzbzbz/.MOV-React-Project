import { createContext, useState } from "react";
import { IGenre, ISingleMovie } from "../interfaces/interfaces";

export const mainContext = createContext({})

const MainProvider = ({children}: {children: React.ReactNode}) => {

const [movieDataList, setMovieDataList] = useState<ISingleMovie[]>([])
const [movieGenreList, setMovieGenreList] = useState<IGenre[]>([])

    return ( 
        <mainContext.Provider value={{movieDataList, setMovieDataList, movieGenreList, setMovieGenreList}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;