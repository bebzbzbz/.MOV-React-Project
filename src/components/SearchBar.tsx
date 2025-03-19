import { useContext } from "react";
import Button from "./Button";
import { mainContext } from "../context/MainProvider";
import { IGenre } from "../interfaces/interfaces";

interface ISearchProps {
    position: string
}

const SearchBar = ({position}: ISearchProps) => {

const {movieGenreList} = useContext(mainContext) as any

console.log(movieGenreList);
    return ( 
        <section className="flex flex-col gap-5 pb-20">
            <div className="">
                <input type="text" className="bg-light-grey w-full rounded-lg px-5 py-3" placeholder="Search Movie..."/>
                    <img
                    src="../../public/images/Vector.png"
                    alt="Icon"
                    className={`absolute right-10 ${position} transform -translate-y-1/2`}
                />
            </div>
            <div className="flex flex-row justify-between gap-2 overflow-x-auto">
                {movieGenreList && movieGenreList.map((genre: IGenre)=> {
                return <Button  key={crypto.randomUUID()} name={genre.name} link={`/${genre.id}`}/>
            })}


            </div>
        </section>
     );
}

export default SearchBar;