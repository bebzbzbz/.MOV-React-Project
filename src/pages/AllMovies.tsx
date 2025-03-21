import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import { IFetchAllMoviesAndGenreContext, ISingleMovie } from "../interfaces/interfaces";
import MovieItem from "../components/MovieItem";
import PagesNav from "../components/PagesNav";

const AllMovies = () => {

    //useState aus MainProvider
    const {movieDataList, setMovieDataList, page} = useContext(mainContext) as IFetchAllMoviesAndGenreContext

    //Fetch Block für Popular movies
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            include_adult: 'false',
            include_video: 'true',
            language: 'en-US', 
            page: page,
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
                    setMovieDataList(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [page])


    //Über Daten fetchen und MovieItem.tsx returnen mit entsprechenden Props, um in MovieItem mit ID zu fetchen
    return ( 
        <section className="p-5 pb-25">
            <SearchBar/>
                <section className="lg:grid grid-cols-2 gap-20">
                {movieDataList ? movieDataList.map((movie: ISingleMovie) => { 
                    return <MovieItem movieID={movie.id} key={crypto.randomUUID()}/>}) : 
                    <p>Loading movies...</p>}
                </section>
            <PagesNav/>
        </section>
    );
}

export default AllMovies;