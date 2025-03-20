import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMovieDetails } from "../interfaces/interfaces";
import BackButton from "../components/BackButton";

const MovieDetail = () => {
    const {movieParam} = useParams();

    let [showOverview, setShowOverview] = useState<boolean>(false)
    const toggleOverview = () => {
        setShowOverview(!showOverview);
    }

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
                    setMovieItem(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return ( 
        <>
            {movieItem && <>
            <BackButton/>
            <div className="absolute h-120 -z-10">
                <div className="relative">
                    <img className="h-120 w-screen object-cover" src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : `/images/cameraIcon.svg`} alt={movieItem.title} />
                    <div className="bg-linear-to-t from-white from-10% to-transparent to-50% absolute top-0 h-120 w-screen"></div>
                </div>
            </div>
            <section className="pt-100 px-5 pb-25">
                <article className="flex flex-col items-center mb-5">
                    <p className="text-sm mb-1">Movie Details</p>
                    <h1 className="text-2xl mb-1 text-center">{movieItem.title}</h1>
                    <ul className="flex flex-wrap justify-center gap-2 ">
                        <li>⭐️ {movieItem.vote_average}</li>
                        <li>● {movieItem.release_date}</li>
                        <li>● {movieItem.genres[0]?.name}</li>
                        <li>● {movieItem.runtime} min</li>
                    </ul>
                </article>
                <article className="mb-5">
                    <h2 className="mb-3 text-lg">Overview</h2>
                    <p>{movieItem.overview.length > 110 && !showOverview ?
                    movieItem.overview.slice(0,110) + "..."
                    : movieItem.overview}
                    {movieItem.overview.length > 110 && <a onClick={toggleOverview} className="text-main-red">{showOverview ? " See less..." : " See more..."}</a>
                }
                    </p>
                </article>
                <article className="flex flex-col gap-3 mb-5">
                    <div className="flex flex-row gap-5 justify-between">
                        <h3>Genres</h3>
                        <ul className="flex flex-wrap justify-end gap-2">{movieItem.genres && movieItem.genres.map((genre) => (<li key={crypto.randomUUID()}>{genre.name}</li>))}</ul>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h3>Languages</h3>
                        <ul className="flex gap-2">{movieItem.spoken_languages.map((language) => (<li key={crypto.randomUUID()}>{language.english_name}</li>))}</ul>
                    </div>
                </article>
                <div className="flex justify-center">
                    <Link to={`/${movieParam}/trailer`}>
                        <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg "><img className="mr-5" src="/images/playIcon.svg" alt="Play-Button" />Watch Trailer</button>
                    </Link>
                </div>
            </section>
            </>
            }
        </>
    );
}

export default MovieDetail;