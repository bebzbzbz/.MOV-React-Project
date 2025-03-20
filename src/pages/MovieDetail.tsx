import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieDetails } from "../interfaces/interfaces";
import MovieItem from "../components/MovieItem";

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
            {movieItem && <>
                <div className="absolute h-120 -z-10">
                    <div className="relative">
                        <img className="h-120 w-screen object-cover" src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt="" />
                        <div className="bg-linear-to-t from-white from-10% to-transparent to-50% absolute top-0 h-120 w-screen"></div>
                    </div>
                </div>
            <section className="pt-100 p-5">
                <article className="flex flex-col items-center pb-5">
                    <p className="text-sm pb-1">Movie Details</p>
                    <h1 className="text-2xl pb-1 text-center">{movieItem.title}</h1>
                    <ul className="flex gap-3 ">
                        <li>⭐️ {movieItem.vote_average}</li>
                        <li>● {movieItem.release_date}</li>
                        <li>● {movieItem.genres[0]?.name}</li>
                        <li>● {movieItem.runtime} min</li>
                    </ul>
                </article>
                <article className="pb-5">
                    <h2 className="pb-3 text-lg">Overview</h2>
                    <p>{movieItem.overview}</p>
                </article>
                <article className="flex flex-col gap-3 pb-3">
                    <div className="flex flex-row gap-5 justify-between">
                        <h3>Genres</h3>
                        <ul className="flex flex-wrap justify-end gap-2">{movieItem.genres && movieItem.genres.map((genre) => (<li>{genre.name}</li>))}</ul>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h3>Languages</h3>
                        <ul className="flex gap-2">{movieItem.spoken_languages.map((language) => (<li>{language.english_name}</li>))}</ul>
                    </div>
                </article>
                <div className="flex justify-center items-center">
                    <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg "><img className="pr-5" src="/images/Polygon 4.png" alt="Play-Button" />Watch Trailer</button>
                </div>
            </section>
        </>
        }
        </>
        
    );
}

export default MovieDetail;