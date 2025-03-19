import { Link } from "react-router-dom";

interface IButtonProps {
    name: string,
    // onClickFunction: () => void
    link: string,
    backGroundColor: string,
    size: string
}

const Button = ({name, link, backGroundColor, size,}: IButtonProps) => {
    return ( 
        <Link className={`${backGroundColor} ${size} rounded-lg flex items-center justify-center text-white`} to={link}>{name}</Link>
    );
}

export default Button;