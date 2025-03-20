import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (  
        <div onClick={()=> navigate(-1)} className="bg-white absolute top-5 left-5 cursor-pointer h-10 w-10 flex rounded-full p-1.5">
        <img src="/images/arrowBack.svg" alt="Back Arrow" />
        </div>
    );
}

export default BackButton;