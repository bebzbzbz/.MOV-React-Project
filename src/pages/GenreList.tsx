import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../context/MainProvider";
import { ISingleMovie } from "../interfaces/interfaces";
import SearchBar from "../components/SearchBar";
import MovieItem from "../components/MovieItem";

const GenreList = () => {

    //useParams() mit genreID füllen, um path /idgenre und so auf einzelnes Genre aus fetch zuzugreifen und darüber den Fetch für alle Filme des jeweilige Genre zu machen
    const {genreID} = useParams()

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
          // hier wird genreID als Parameter für fetch weiter gegeben, was gleichzeitig für den Pfad benutzt wird
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

    //hier wird über die Daten aus Genre Fetch gemappt, um auf die einzelnen Movies zugreifen zu können, um diese dann mit einem weiteren Fetch, über deren ID zu rendern
    return ( 
        <section className="p-5 pb-25">
        <SearchBar position="top-11"/>
        {movieDataListFromGenres && movieDataListFromGenres.map((movie: ISingleMovie) => { return <MovieItem movieID={movie.id} key={crypto.randomUUID()}/>})}
        </section>
     );
}
 
export default GenreList;