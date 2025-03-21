import { useContext } from "react";
import { mainContext } from "../context/MainProvider";

const PagesNav = () => {

    const {page, setPage} = useContext(mainContext) as any

    return ( 
        <div className="flex justify-center gap-6 lg:pt-5">
            <img src="/images/arrowBack.svg" className={page === 1 ? "opacity-0" : ""} alt="back" onClick={() => {if(page > 1) {setPage(page - 1)}}}/>
            <p className="lg:text-3xl">{page}</p>
            <img src="/images/arrowBack.svg" alt="next" className="-scale-x-100" onClick={() => setPage(page + 1)}/>
        </div>
    );
}

export default PagesNav;