import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import { ISingleMovie } from "../interfaces/interfaces";

const Home = () => {

    //useState aus Mainprovider für slider
    const {movieDataList, setMovieDataList} = useContext(mainContext) as any

    //fetch für slider
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            include_adult: 'false',
            include_video: 'true',
            language: 'en-US', 
            page: '1',
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
    }, [])

    return ( 
        <section className="p-5 pb-25">
        <h1 className="text-4xl font-bold pb-10">Welcome!</h1>
        <SearchBar position="top-31"/>
        
            <article className="flex flex-row justify-between items-center pb-5">
                <p className="font-bold text-xl">Trending Movies</p>
                <Link to={"/movies"} className="text-main-red">See all</Link>
            </article>
            {/* Slider mit trending/popular movies aus daisyUI */}
            <article className="w-full flex justify-center pb-3">
            <div className="carousel rounded-box w-full rounded-lg">
              {/* film wird nur im slider angezeigt, wenn data auch ein poster hat mit ternary operator */}
                {movieDataList && movieDataList.map((movie: ISingleMovie)=> (
                    movie.poster_path ? (
                        <div key={crypto.randomUUID()} className="carousel-item w-full overflow-hidden relative h-64 md:h-120 lg:h-144">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="w-full rounded-lg object-cover object-top h-full"
                            alt="Movie Poster"
                          />
                          <article className="absolute text-white w-full p-5 bottom-0">
                            <div className="flex gap-3 items-center">
                              <h3 className="md:text-4xl">
                                {movie.title.split(' ').slice(0, 4).join(' ')}<br />
                                {movie.title.split(' ').slice(4).join(' ')}
                              </h3>
                            </div>
                            <div className="flex gap-5 justify-end">
                              <img className="w-5 md:w-10" src="/images/star.svg" alt="star" />
                              <p className="md:text-4xl">{movie.vote_average}/10</p>
                            </div>
                          </article>
                        </div>
                      ) : null
                ))}
</div>
            </article>
            <div className="flex justify-end gap-1 pr-1">
                <img className="w-5 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
                <img className="w-5 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
                <img className="w-5 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
            </div>
        </section>
    );
}

export default Home;