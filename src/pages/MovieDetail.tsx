const MovieDetail = () => {
    return ( 
        <section>
            <article className="flex flex-col items-center">
                <h2>Movie Details</h2>
                <h1>Movie Name</h1>
                <ul className="flex gap-3 ">
                    <li>⭐️ rating </li>
                    <li>date</li>
                    <li>genre</li>
                    <li>duration</li>
                </ul>
            </article>
            <article>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci neque dignissimos placeat id sit aperiam illo numquam dicta iste eaque! Vitae rerum nobis qui odio repudiandae debitis nostrum, corrupti error!</p>
            </article>
            <article>
                <div className="flex flex-row justify-between">
                    <p>Genres</p>
                    <p>Map aus Genres</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Languages</p>
                    <p>Map aus Languages</p>
                </div>
            </article>
            <div>
                <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg"><img className="pr-5" src="/images/Polygon 4.png" alt="Play-Button" />Watch Trailer</button>
            </div>
        </section>
     );
}
 
export default MovieDetail;