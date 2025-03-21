import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMovieDetails } from "../interfaces/interfaces";
import BackButton from "../components/BackButton";

const MovieDetail = () => {
    //ID des einzelnen Films, um damit zu fetchen und für unsere url
    const {movieParam} = useParams();

    const [movieItem, setMovieItem] = useState<IMovieDetails>();

    //Fetch Block für einzelne Movies mit ID-->gibt Array aus Movies mit Typ MovieDetails, um Details zu rendern
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

    //toggle für See more / See less
    let [showOverview, setShowOverview] = useState<boolean>(false)
    const toggleOverview = () => {
        setShowOverview(!showOverview);
    }

    return ( 
        <section className="lg:grid lg:grid-cols-2">
            {movieItem && <>
            <BackButton/>
            <div className="absolute h-120 -z-10 lg:left-80 lg:top-15">
                <div className="relative">
                    <img className="h-120 w-screen object-cover lg:rounded-lg lg:w-85 lg:h-full" src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : `/images/cameraIcon.svg`} alt={movieItem.title} />
                    <div className="bg-linear-to-t lg:bg-gradient-to-l from-white from-10% to-transparent to-50% absolute top-0 h-120 w-screen lg:h-full lg:w-120"></div>
                </div>
            </div>
            <section className="pt-100 px-5 pb-25 lg:col-start-2 lg:pt-40 lg:pr-30">
                <article className="flex flex-col items-center mb-5 lg:items-start">
                    <p className="text-sm mb-1">Movie Details</p>
                    <h1 className="text-2xl mb-1 text-center">{movieItem.title}</h1>
                    <ul className="flex flex-wrap justify-center gap-2 ">
                        <li>⭐️ {movieItem.vote_average > 0 ? `${movieItem.vote_average.toFixed(1)}` : "No rating"}</li>
                        <li>● {movieItem.release_date}</li>
                        <li>● {movieItem.genres[0]?.name}</li>
                        <li>● {movieItem.runtime > 0 ? `${movieItem.runtime} mins` : "No runtime info"} </li>
                    </ul>
                </article>
                <article className="mb-5">
                    <h2 className="mb-3 text-lg">Overview</h2>
                                        {/* wenn die Beschreibung über 110 Zeichen enthält und showOverview false ist, wird es geschnitten und man sieht Show more, wenn die Beschreibung noch kürzer ist,wird auch kein Button angezeigt --- Klick auf Show more, toggelt auf true und zeigt dann den ganzen Text (kein slice) und zeigt die Option "show less", die dann wieder toggelt*/}
                    <p>{movieItem.overview.length > 110 && !showOverview ?
                    movieItem.overview.slice(0,110) + "..."
                    : movieItem.overview}
                    {movieItem.overview.length > 110 && <a onClick={toggleOverview} className="text-main-red cursor-pointer">{showOverview ? " See less..." : " See more..."}</a>
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
                <div className="flex justify-center lg:justify-start">
                    <Link to={`/${movieParam}/trailer`}>
                        <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg "><img className="mr-5" src="/images/playIcon.svg" alt="Play-Button" />Watch Trailer</button>
                    </Link>
                </div>
            </section>
            </>
            }
        </section>
    );
}

export default MovieDetail;