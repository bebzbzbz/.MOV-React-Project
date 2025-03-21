import axios from "axios";
import { useEffect, useState } from "react";
import { ITrailer } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const Trailer = () => {
    //weitere Verwendung der MovieId mit Params
    const {movieParam} = useParams()
    const [trailer, setTrailer] = useState<ITrailer>();

    //fetch über die Id zu den Videos pro Movie
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieParam}/videos`,
        params: {language: 'en-US'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWIwODQ2MTQwZDgwZjlmZjczYmQyYjc4ZGZjNWQzYSIsIm5iZiI6MTc0MjM3NTg0Mi4yMDQsInN1YiI6IjY3ZGE4YmEyMTc0MWVkMWYwMWExZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihQAnLonY4TU4czAzLNOzASC_X972m1NJE-E2faZrQo'
        }
    };
    

    //hier wird schon so weit herein navigiert, dass nur der tariler gefeched wird 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options)

                if(response) {
                    const trailer = response.data.results.find((result: ITrailer) => result.type === "Trailer")
                    setTrailer(trailer)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []) 

    return ( 
        // url zur src zusammenfügen aus dem trailer key aus dem fetch und "typischer" youtube api 
        //s. Api Doku
        <div className="w-screen h-screen">
            <BackButton/>
            <iframe style={{width: '100%', height: '100%', 
            border: 'none', padding: 0, margin: 0}} width="100vh" height="100vw" src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?autoplay=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}

export default Trailer;