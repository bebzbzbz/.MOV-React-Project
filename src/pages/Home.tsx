import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return ( 
        <section className="p-5 pb-25">
        <h1 className="text-4xl font-bold pb-10">Welcome!</h1>
        <SearchBar position="top-31"/>
        <article>
            <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-xl">Trending Movies</p>
                <Link to={"/movies"} className="text-main-red">See all</Link>
            </div>
        </article>
        </section>
    );
}

export default Home;