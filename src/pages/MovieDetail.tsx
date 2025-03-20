const MovieDetail = () => {
    return ( 
        <section className="p-5">
            <img className="h-55" src="" alt="" />
            <section>
            <article className="flex flex-col items-center pb-5">
                <p className="text-sm pb-1">Movie Details</p>
                <h1 className="text-2xl pb-1">Movie Name</h1>
                <ul className="flex gap-3 ">
                    <li>⭐️ rating </li>
                    <li>● date</li>
                    <li>● genre</li>
                    <li>● duration</li>
                </ul>
            </article>
            <article className="pb-5">
                <h2 className="pb-3 text-lg">Overview</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci neque dig</p>
            </article>
            <article className="flex flex-col gap-3 pb-3">
                <div className="flex flex-row justify-between">
                    <h3>Genres</h3>
                    <p>Map aus Genres</p>
                </div>
                <div className="flex flex-row justify-between">
                    <h3>Languages</h3>
                    <p>Map aus Languages</p>
                </div>
            </article>
            <div className="flex justify-center items-center">
                <button className="bg-main-red flex justify-center items-center text-white py-3 px-5 rounded-lg"><img className="pr-5" src="/images/Polygon 4.png" alt="Play-Button" />Watch Trailer</button>
            </div>
            </section>
        </section>
     );
}
 
export default MovieDetail;