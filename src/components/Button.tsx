import { Link } from "react-router-dom";
import { IButtonProps } from "../interfaces/interfaces";
import { useContext, useState } from "react";
import { mainContext } from "../context/MainProvider";



const Button = ({name, link, backGroundColor, style}: IButtonProps) => {

    const {activeGenre} = useContext(mainContext) as any
    console.log("button", activeGenre);

     

    return ( 
        <Link className={`${activeGenre && "bg-main-red"} ${backGroundColor} ${style} rounded-lg flex items-center justify-center bg-light-grey px-3`} to={link}>{name}</Link>
    );
}

export default Button;