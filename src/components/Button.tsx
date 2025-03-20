import { Link } from "react-router-dom";
import { IButtonProps } from "../interfaces/interfaces";

const Button = ({name, link, backGroundColor, style}: IButtonProps) => {


    return ( 
        <Link className={`${backGroundColor} ${style} rounded-full bg-light-grey py-2 px-4 text-nowrap`} to={link}>{name}</Link>
    );
}

export default Button;