import { createContext, useState } from "react";
import { IGenre, ISingleMovie } from "../interfaces/interfaces";

export const mainContext = createContext({})

const MainProvider = ({children}: {children: React.ReactNode}) => {

const [movieDataList, setMovieDataList] = useState<ISingleMovie[]>([])
const [movieGenreList, setMovieGenreList] = useState<IGenre[]>([])
const [page, setPage] = useState<number>(1)
const [genreValue, setGenreValue] = useState<number>()

    return ( 
        <mainContext.Provider value={{movieDataList, setMovieDataList, movieGenreList, setMovieGenreList, page, setPage, genreValue, setGenreValue}}>
            {children}
        </mainContext.Provider>
    );
}

export default MainProvider;