import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/MainProvider";

const AllMovies = () => {

    const {movieDataList, setMovieDataList} = useContext(mainContext) as any

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: '1'},
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
                    console.log(response.data.results);
                    setMovieDataList(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])



    
    return ( 
        <section className="p-5">
        <SearchBar position="top-11"/>
        </section>
    );
}

export default AllMovies;