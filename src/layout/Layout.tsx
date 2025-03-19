import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";


const Layout = () => {

    const location = useLocation()
    const hideNav = location.pathname === "/"

    return ( 
        <>
        <Outlet/>
        {!hideNav && <Nav/>}
        </>
    );
}

export default Layout;