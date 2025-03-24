import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import { IFetchAllMoviesAndGenreContext, ISingleMovie } from "../interfaces/interfaces";

const Home = () => {

    //useState aus Mainprovider für slider
    const {movieDataList, setMovieDataList} = useContext(mainContext) as IFetchAllMoviesAndGenreContext
    const {setPage, setGenreValue, setSearchBoolean} = useContext(mainContext) as any
    
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
        setGenreValue(1);
        setPage(1)
        setSearchBoolean(false)
    }, [])

    return ( 
        <section className="p-5 pb-25">
        <h1 className="text-4xl font-bold pb-8">Welcome!</h1>
        <SearchBar/>
            <article className="flex flex-row justify-between items-center pb-5">
                <p className="font-bold text-xl">Trending Movies</p>
                <Link to={"/movies"} className="text-main">See all</Link>
            </article>
            {/* Slider mit trending/popular movies aus daisyUI */}
            <article className="w-full flex justify-center pb-3">
            <div className="carousel rounded-box w-full rounded-lg">
              {/* film wird nur im slider angezeigt, wenn data auch ein poster hat mit ternary operator */}
                {movieDataList ? movieDataList.map((movie: ISingleMovie)=> (
                    movie.poster_path ? (
                        <div key={crypto.randomUUID()} className="carousel-item w-full overflow-hidden relative h-64 md:h-120 lg:h-144">
                          <Link to={`/${movie.id}`} className="w-full rounded-lg">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              className="w-full object-cover object-center h-full"
                              alt="Movie Poster"
                            />
                            <article className="absolute text-white w-full p-5 bottom-0 z-10">
                              <div className="flex gap-3 items-center justify-end">
                                <h3 className="md:text-4xl text-right">
                                  {movie.title}
                                </h3>
                              </div>
                              <div className="flex gap-3 justify-end">
                                {movie.vote_average > 0 && <p className="md:text-4xl">{movie.vote_average.toFixed(1)}/10</p>
                              }
                                <img className="w-5 md:w-10" src="/images/star.svg" alt="star" />
                              </div>
                            </article>
                            <div className="bg-linear-to-t from-black from-20% to-transparent to-50% absolute top-0 h-full w-full opacity-70"></div>
                          </Link>
                        </div>                        
                    ) : "null"
                )): <p>Loading...</p>}
            </div>
            </article>
            <div className="flex justify-center">
                <img className="bounceyArrow w-4 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
                <img className="bounceyArrow w-4 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
                <img className="bounceyArrow w-4 lg:w-8" src="/images/chevron-right.png" alt="Arrow to right" />
            </div>
        </section>
    );
}

export default Home;