import SplashScreen from "../components/SplashScreen";

const Intro = () => {
    return ( 
        <>
            {/* <SplashScreen/> */}
            <img src="/images/Intro_Pic.png" alt="" className="h-100 w-100 object-cover"/>
            <article className="text-center py-10 px-7">
                <h2 className="text-3xl/11 mb-2">Enjoy Your Movie, <br/> Watch Everywhere</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </article>
        </>
    );
}

export default Intro;