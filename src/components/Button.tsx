import { Link } from "react-router-dom";
import { IButtonProps, ISetGenreContext, ISetPageContext } from "../interfaces/interfaces";
import { useContext } from "react";
import { mainContext } from "../context/MainProvider";


const Button = ({name, link, backGroundColor, style, genreId}: IButtonProps) => {
    const {setPage} = useContext(mainContext) as ISetPageContext
    const {setGenreValue} = useContext(mainContext) as ISetGenreContext

    return ( 
        <Link className={`${backGroundColor} ${style} rounded-full bg-light-grey py-2 px-4 text-nowrap`} to={link} onClick={() => {setPage(1); setGenreValue(genreId)}}>{name}</Link>
);
}

export default Button;