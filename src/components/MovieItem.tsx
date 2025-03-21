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
                    console.log(response.data)
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
            {movieItem &&
                (<Link to={`/${movieID}`} className="flex gap-10 pb-5 items-center">
                    <div className="flex-1">
                        <img className="rounded-lg" src={movieItem.poster_path ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` : `/images/cameraIcon.svg`} alt={movieItem.title} />
                    </div>
                    <article className="flex-5">
                        <div className="flex justify-between pb-2">
                        <h3>{movieItem.title.split(' ').slice(0, 4).join(' ')}<br />
                        {movieItem.title.split(' ').slice(4).join(' ')}</h3>
                        <img src="/images/saveIcon.svg" alt="SaveIcon" />
                        </div>
                        <div className="flex gap-1 flex-wrap">
                            <div className="flex gap-1">
                                <img className="w-5" src="/images/star.svg" alt="star" />
                                <h2>{movieItem.vote_average}</h2>
                            </div>
                            <p> ● {movieItem.release_date.slice(0, 4)} ● {movieItem.genres[0]?.name} ● {movieItem.runtime > 0 ? `${movieItem.runtime} mins` : "keine Angabe"}
                            </p>
                        </div>
                    </article>
                </Link>)
            }
        </>
    );
}

export default MovieItem;