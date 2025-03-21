import { useContext, useEffect, useRef, useState} from "react";
import Button from "./Button";
import { mainContext } from "../context/MainProvider";
import { IGenre } from "../interfaces/interfaces";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

interface ISearchProps {
    position: string
}

const SearchBar = ({position}: ISearchProps) => {

    //für den button toggle
  const {genreParam} = useParams()

  //für den Button Toggle für "All Movies", weil dieser Button hard gecoded
  const location = useLocation()
  const moviePage = location.pathname === "/movies"

  //useState für Daten aus Fetch
    const {movieGenreList, setMovieGenreList, movieDataList, setMovieDataList} = useContext(mainContext) as any

    //fetch Block für die einzelnen Genres, über deren ID man dann wieder die Liste "aller" Filme zu entsprechenden Genres fetchen mit Hilfe von useParams()
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {language: 'en'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWIwODQ2MTQwZDgwZjlmZjczYmQyYjc4ZGZjNWQzYSIsIm5iZiI6MTc0MjM3NTg0Mi4yMDQsInN1YiI6IjY3ZGE4YmEyMTc0MWVkMWYwMWExZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihQAnLonY4TU4czAzLNOzASC_X972m1NJE-E2faZrQo'
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options)

                if(response) {
                    setMovieGenreList(response.data.genres)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])


        //Zugriff aufs InputFeld
        const movieByTitleSearch = useRef<HTMLInputElement>(null)
        const [inputValue, setInputValue] = useState<string | undefined>("")
    
        const handleInput = () => {
            setInputValue(movieByTitleSearch.current?.value)
        }


    //fetch für Input
    const optionsForInputFetch = {
        method: 'GET',
        // batman dann mit dynamic url ersetzen
        url: `https://api.themoviedb.org/3/search/movie?query=${inputValue}`,
        params: {include_adult: 'false', language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWIwODQ2MTQwZDgwZjlmZjczYmQyYjc4ZGZjNWQzYSIsIm5iZiI6MTc0MjM3NTg0Mi4yMDQsInN1YiI6IjY3ZGE4YmEyMTc0MWVkMWYwMWExZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihQAnLonY4TU4czAzLNOzASC_X972m1NJE-E2faZrQo'
        }
      };
      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(optionsForInputFetch)
                if(response) {
                    setMovieDataList(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
        //der Inhalt des Input-Felds als Dependency
    }, [inputValue])


console.log(movieDataList);



    return ( 
        <section className="flex flex-col gap-5 pb-10">
            <div className="">
                <input onChange={handleInput} type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..." ref={movieByTitleSearch}/>
                    <img
                    src="../../public/images/Vector.png"
                    alt="Icon"
                    className={`absolute right-10 ${position} transform -translate-y-1/2`}
                />
            </div>
            <div className="flex flex-row justify-between gap-2 overflow-x-auto">
                <Button name="All movies" link="/movies" backGroundColor={moviePage ? "toggle-genre" : ""}/>
                {movieGenreList && movieGenreList.map((genre: IGenre)=> {
                return <Button key={crypto.randomUUID()} name={genre.name} link={`/movies/${genre.id}`} backGroundColor={Number(genreParam) === genre?.id ? "toggle-genre" : ""}/>
            })}
            </div>
        </section>
    );
}

export default SearchBar;