import { Link } from "react-router-dom";
import { IButtonProps } from "../interfaces/interfaces";




const Button = ({name, link, backGroundColor, style}: IButtonProps) => {


     

    return ( 
        <Link className={`${backGroundColor} ${style} rounded-lg flex items-center justify-center bg-light-grey px-3`} to={link}>{name}</Link>
    );
}

export default Button;