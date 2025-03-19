import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect } from "react";
import axios from "axios";
import { mainContext } from "../context/MainProvider";

const Home = () => {

    const {setMovieGenreList} = useContext(mainContext) as any

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
        <section className="p-5">
        <h1 className="text-4xl font-bold pb-10">Welcome!</h1>
        <SearchBar position="top-31"/>
        <article>
            <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-xl">Trending Movies</p>
                <Link to={"/movies"} className="text-main-red">See all</Link>
            </div>
        </article>
        </section>
    );
}

export default Home;