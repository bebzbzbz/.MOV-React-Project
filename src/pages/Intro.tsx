import Button from "../components/Button";
import SplashScreen from "../components/SplashScreen";

const Intro = () => {
    return ( 
        <>
            <section className="flex flex-col md:flex-row md:items-center h-screen justify-between">
                <div className="relative  overflow-hidden h-[60vh] md:h-screen w-full bg-[url('../../public/images/IntroApp.png')] bg-cover bg-center">
                <div className="absolute z-10 -rotate-5 left-6 top-28 md:top-43 md:left-8 lg:left-50">
                <img className="w-2/3 md:w-5/6  rounded-xl" src="/images/Sariri.png" alt="Screenshot einer Seite" />
                </div>
                <div className="absolute z-20 rotate-4 -right-25 md:right-10 top-25 lg:right-50">
                <img className="w-2/3 md:w-full rounded-xl" src="/images/Cat.png" alt="Screenshot einer Seite" />
                </div>
                </div>
                <article className="flex flex-col items-center justify-between text-center pt-8 pb-12 px-7 h-70">
                    <h2 className="text-2xl/9 pb-5">Enjoy Your Movie, <br/> Watch Everywhere</h2>
                    <p className="pb-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <Button name="Get Started" link="/home" backGroundColor="bg-main" style="py-3 px-8 text-white"/>
                </article>
            </section>
            <SplashScreen/>

        </>
    );
}

export default Intro;