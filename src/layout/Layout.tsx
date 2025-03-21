import { Outlet, useLocation, useParams } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
    const {movieParam} = useParams()

    //NavBar wird nicht angezeigt auf Intro und Trailer Page
    const location = useLocation()
    const introPage = location.pathname === "/"
    const trailerPage = location.pathname === `/${movieParam}/trailer`

    return ( 
        <>
        <Outlet/>
        {!introPage && !trailerPage && <Nav/>}
        </>
    );
}

export default Layout;