import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../context/MainProvider";
import { ISingleMovie } from "../interfaces/interfaces";
import SearchBar from "../components/SearchBar";
import MovieItem from "../components/MovieItem";

const GenreList = () => {

    const {genreID} = useParams()
    console.log("genre list", genreID)

    const {movieDataListFromGenres, setMovieDataListFromGenres} = useContext(mainContext) as any

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'true',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          with_genres: genreID
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
                    setMovieDataListFromGenres(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [genreID])

    console.log(movieDataListFromGenres);

    return ( 
        <section className="p-5">
        <SearchBar position="top-11"/>
        {movieDataListFromGenres && movieDataListFromGenres.map((movie: ISingleMovie) => { return <MovieItem movieID={movie.id} key={crypto.randomUUID()}/>})}
        </section>
     );
}
 
export default GenreList;