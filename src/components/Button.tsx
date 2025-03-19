import { Link } from "react-router-dom";
import { IButtonProps } from "../interfaces/interfaces";


const Button = ({name, link, backGroundColor, size,}: IButtonProps) => {
    return ( 
        <Link className={`${backGroundColor} ${size} rounded-lg flex items-center justify-center text-white`} to={link}>{name}</Link>
    );
}

export default Button;