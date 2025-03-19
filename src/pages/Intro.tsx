import Button from "../components/Button";
import SplashScreen from "../components/SplashScreen";

const Intro = () => {
    return ( 
        <>
            {/* <SplashScreen/> */}
            <section className="flex flex-col md:flex-row md:items-center h-screen justify-between">
                <img src="/images/Intro_Pic.png" alt="" className="h-[60vh] md:h-screen w-full object-cover"/>
                <article className="flex flex-col items-center justify-between text-center pt-8 pb-12 px-7 h-70">
                    <h2 className="text-2xl/9">Enjoy Your Movie, <br/> Watch Everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <Button name="Get Started" link="/home" backGroundColor="bg-red-500" size="text-lg"/>
                </article>
            </section>
        </>
    );
}

export default Intro;