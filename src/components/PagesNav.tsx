import { useContext } from "react";
import { mainContext } from "../context/MainProvider";

const PagesNav = () => {

    const {page, setPage} = useContext(mainContext) as any

    return ( 
        <div className="flex justify-center gap-6">
            <p onClick={() => setPage(page + 1)}>
                More
            </p>
            <p onClick={() => setPage(page - 1)}>
                Less
            </p>
        </div>
    );
}

export default PagesNav;