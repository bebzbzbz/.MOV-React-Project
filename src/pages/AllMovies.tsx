import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import { ISingleMovie } from "../interfaces/interfaces";
import MovieItem from "../components/MovieItem";

const AllMovies = () => {

    const {movieDataList, setMovieDataList} = useContext(mainContext) as any

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            include_adult: 'false',
            include_video: 'true',
            language: 'en-US', 
            page: '1',
            sort_by: 'popularity.desc'
        },
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
                    // console.log(response.data.results);
                    setMovieDataList(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])


    return ( 
        <section className="p-5 pb-25">
            <SearchBar position="top-11"/>
                {movieDataList.map((movie: ISingleMovie) => { return <MovieItem movieID={movie.id} key={crypto.randomUUID()}/>})}
        </section>
    );
}

export default AllMovies;