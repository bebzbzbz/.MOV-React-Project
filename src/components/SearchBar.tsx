import { useContext, useEffect, useRef, useState} from "react";
import Button from "./Button";
import { mainContext } from "../context/MainProvider";
import { IGenre, ISearchBarFetchContext, ISetGenreContext} from "../interfaces/interfaces";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {

  //useState für Daten aus Fetch + page useState, um Suchergebnisse zu aktualisieren
    const {movieGenreList, setMovieGenreList, setMovieDataList, page, setPage} = useContext(mainContext) as ISearchBarFetchContext

    // genreValue wird unten durch button klick gesettet
    const {genreValue, setGenreValue} = useContext(mainContext) as ISetGenreContext

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
            setPage(1)
            setInputValue(movieByTitleSearch.current?.value)
        }

    //fetch für Input (query ist Endpunkt, um nach Filmtiteln zu suchen)
    const optionsForInputFetch = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${inputValue}`,
        params: {include_adult: 'false', language: 'en-US', page: page},
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
    }, [inputValue, page])

    const location = useLocation()
    const homePage = location.pathname === "/home"

    const navigate = useNavigate()

    return ( 
        <section className="flex flex-col gap-5 pb-10">
            <div className="relative">
                {/* nur auf home-seite inputfeld mit klickfunktion anzeigen
                genreValue wird auf 1 gesetzt, damit die popular movies gefetcht werden können (in allMovies wird 1 zu "" übersetzt) */}
                {homePage && <input type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..." onClick={() => {navigate("/movies"); setGenreValue(1)}}/>
                }

                {/* auf sonstigen seiten inputfeld mit suchfunktion */}
                {!homePage && <input onChange={handleInput} type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..." ref={movieByTitleSearch}/>
            }
                <img
                src="../../public/images/Vector.png"
                alt="Icon"
                className={`absolute right-3 top-3 transform`}
                />
            </div>
            <div className="flex flex-row justify-between gap-2 overflow-x-auto">
                <Button name="All movies" link="/movies" backGroundColor={genreValue === 1 && !inputValue ? "toggle-genre" : ""} genreId={1}/>

                {/* bei buttonklick wird der genrevalue auf die id des genres gesettet und in allMovies an den fetch übergeben */}
                {movieGenreList && movieGenreList.map((genre: IGenre)=> {
                return <Button key={crypto.randomUUID()} name={genre.name} link="/movies" genreId={genre.id} backGroundColor={genreValue === genre?.id  && !inputValue ? "toggle-genre" : ""}/>
            })}
            </div>
        </section>
    );
}

export default SearchBar;