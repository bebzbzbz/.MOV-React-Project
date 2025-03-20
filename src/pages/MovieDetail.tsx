import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieDetails } from "../interfaces/interfaces";

const MovieDetail = () => {
    const {movieParam} = useParams();

    const [movieItem, setMovieItem] = useState<IMovieDetails>();

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieParam}`,
        params: {language: 'en-US'},
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
                    console.log(response.data)
                    setMovieItem(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    console.log(movieItem)

    return ( 
        <>
            {movieItem && <section className="p-5">
            <img className="h-55" src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt="" />
            <section>
            <article className="flex flex-col items-center pb-5">
                <p className="text-sm pb-1">Movie Details</p>
                <h1 className="text-2xl pb-1">{movieItem.title}</h1>
                <ul className="flex gap-3 ">
                    <li>⭐️ rating </li>
                    <li>● date</li>
                    <li>● genre</li>
                    <li>● duration</li>
                </ul>
            </article>
            <article className="pb-5">
                <h2 className="pb-3 text-lg">Overview</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci neque dig</p>
            </article>
            <article className="flex flex-col gap-3 pb-3">
                <div className="flex flex-row justify-between">
                    <h3>Genres</h3>
                    <p>Map aus Genres</p>
                </div>
                <div className="flex flex-row justify-between">
                    <h3>Languages</h3>
                    <p>Map aus Languages</p>
                </div>
            </article>
            <div className="flex justify-center items-center">
                <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg"><img className="pr-5" src="/images/Polygon 4.png" alt="Play-Button" />Watch Trailer</button>
            </div>
            </section>
        </section>}
        </>
        
    );
}

export default MovieDetail;