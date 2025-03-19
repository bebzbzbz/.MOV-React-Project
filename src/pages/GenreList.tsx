import { useParams } from "react-router-dom";

const GenreList = () => {

    const {genreID} = useParams()
    return ( 
        <>
        <h1>Hallo</h1>
        </>
     );
}
 
export default GenreList;