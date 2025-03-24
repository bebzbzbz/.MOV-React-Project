import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const homeActive = location.pathname === "/home"

    return ( 
        <nav className="flex justify-between items-center px-12 py-8 fixed bottom-0 left-0
        right-0 bg-white text-medium-grey z-20">
            <Link to="/home" className={`flex gap-3 text-sm items-center ${homeActive && "text-main"}`}>
                <img src="/images/homeIcon.svg" alt="Home Icon" className={`${!homeActive && "grayscale"} ${!homeActive && "opacity-50"}`}/>
                Home
            </Link>
            <Link to="/home">
                <img src="/images/saveIcon.svg" alt="Save Icon" />
            </Link>
            <Link to="/home">
                <img src="/images/storageIcon.svg" alt="Storage Icon" />
            </Link>
            <Link to="/home">
                <img src="/images/profileIcon.svg" alt="Profile Icon" />
            </Link>
        </nav>
    );
}

export default Nav;