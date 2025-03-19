import Button from "./Button";


//! style evtl entfernen,da teil des input values?!
const SearchBar = () => {
    return ( 
        <section className="flex flex-col gap-5 pb-20">
            <div className="">
                <input type="text" className="bg-amber-200 w-full rounded-lg px-5 py-3" placeholder="Search Movie..."  style={{
                        backgroundImage: `url('../../public/images/Vector.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 18px center',
                        backgroundSize: '20px 20px',
                    }}/>
            </div>
            <div className="flex flex-row justify-around gap-2">
        <Button name={"Action"} link={""} backGroundColor={"bg-red-300"} size={"w-1/3 h-10"}/>
        <Button name={"Comedy"} link={""} backGroundColor={"bg-red-400"} size={"w-1/3 h-10"}/>
        <Button name={"Horror"} link={""} backGroundColor={"bg-red-500"} size={"w-1/3 h-10"}/>
            </div>
        </section>
     );
}
 
export default SearchBar;