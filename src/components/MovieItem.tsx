import { useEffect, useState } from "react";
import axios from "axios";
import { IMovieDetails, MovieItemProps } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

const MovieItem = ({movieID}:MovieItemProps) => {

    //useState für den einzelnen Film
    const [movieItem, setMovieItem] = useState<IMovieDetails>();

    //fetch Block für einzelnen Movie mit entsprechender ID
    //movieID kommt aus dem mappen durch den Fetch in AllMovies.tsx (und GenreList)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieID}`,
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

    //einzelne Daten aus obigem Fetch rendern
    return ( 
        <>
            {movieItem?.popularity &&
                (<Link to={`/${movieID}`} className="flex gap-6 lg:gap-10 pb-5 items-center">
                    <div className="flex-2 lg:flex-2">
                        <img className="rounded-lg" src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : `/images/cameraIcon.svg`} alt={movieItem.title} />
                    </div>
                    <article className="flex-4 lg:flex-3">
                        <div className="flex justify-between lg:justify-normal lg:gap-3 pb-2">
                        <h3 className="lg:text-2xl">{movieItem.title.split(' ').slice(0, 4).join(' ')}<br />
                        {movieItem.title.split(' ').slice(4).join(' ')}</h3>
                        <img  src="/images/saveIcon.svg" alt="SaveIcon" />
                        </div>
                        <ul className="flex gap-x-3 flex-wrap lg:text-lg">
                            <li className="flex gap-1">
                                <img className="w-5 lg:w-7 self-start" src="/images/star.svg" alt="star" />
                                <h3>{movieItem.vote_average > 0 ? `${movieItem.vote_average}` : "No rating"}</h3>
                            </li>
                            <li>● {movieItem.release_date.slice(0, 4)}</li>
                            <li>● {movieItem.genres[0]?.name}</li>
                            <li>● {movieItem.runtime > 0 ? `${movieItem.runtime} mins` : "No runtime info"}</li>
                        </ul>
                    </article>
                </Link>)
            }
        </>
    );
}

export default MovieItem;