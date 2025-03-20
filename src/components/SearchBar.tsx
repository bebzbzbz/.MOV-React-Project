import { useContext, useEffect } from "react";
import Button from "./Button";
import { mainContext } from "../context/MainProvider";
import { IGenre } from "../interfaces/interfaces";
import axios from "axios";

interface ISearchProps {
    position: string
}

const SearchBar = ({position}: ISearchProps) => {

    const {movieGenreList, setMovieGenreList} = useContext(mainContext) as any

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

    return ( 
        <section className="flex flex-col gap-5 pb-20">
            <div className="">
                <input type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..."/>
                    <img
                    src="../../public/images/Vector.png"
                    alt="Icon"
                    className={`absolute right-10 ${position} transform -translate-y-1/2`}
                />
            </div>
            <div className="flex flex-row justify-between gap-2 overflow-x-auto">
                <Button name="All movies" link="/movies"/>
                {movieGenreList && movieGenreList.map((genre: IGenre)=> {
                return <Button  key={crypto.randomUUID()} name={genre.name} link={`/movies/${genre.id}`}/>
            })}


            </div>
        </section>
     );
}

export default SearchBar;