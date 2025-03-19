import Button from "./Button";


//! style evtl entfernen,da teil des input values?!
const SearchBar = () => {
    return ( 
        <section className="flex flex-col gap-5 pb-20">
            <div className="">
                <input type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..."  style={{
                        backgroundImage: `url('../../public/images/Vector.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 18px center',
                        backgroundSize: '20px 20px',
                    }}/>
            </div>
            <div className="flex flex-row justify-around gap-2">
            <Button name={"All"} link={""} backGroundColor={"bg-main-red"} size={"flex-1 h-10"}/>
        <Button name={"Action"} link={""} backGroundColor={"bg-main-red"} size={"flex-1 h-10"}/>
        <Button name={"Comedy"} link={""} backGroundColor={"bg-main-red"} size={"flex-1 h-10"}/>
        <Button name={"Horror"} link={""} backGroundColor={"bg-main-red"} size={"flex-1 h-10"}/>
            </div>
        </section>
     );
}
 
export default SearchBar;