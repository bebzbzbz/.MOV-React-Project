import { useEffect, useState } from "react";
import axios from "axios";
import { IMovieDetails } from "../interfaces/interfaces";

interface MovieItemProps {
    movieID: number
}

const MovieItem = ({movieID}:MovieItemProps) => {
    const [movieItem, setMovieItem] = useState<IMovieDetails>();

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

    return ( 
        <>
            {movieItem &&
                (<div className="grid grid-cols-2">
                    <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title} />
                    <article>
                        <h3>{movieItem.title}</h3>
                        <div>
                            <div>
                                <img src="/images/star.svg" alt="" />
                                <p>{movieItem.popularity}</p>
                            </div>
                            <p>
                                ● {movieItem.release_date.slice(0, 4)} ● {movieItem.genres[0]?.name} ● {movieItem.runtime}
                            </p>
                        </div>
                    </article>
                </div>)
            }
        </>
    );
}

export default MovieItem;