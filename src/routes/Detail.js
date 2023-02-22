import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

// get과 비슷한 성질??
function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie,setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
         ).json();
        //  console.log(json);
         setMovies(json.data.movie);
         setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[])
    return (
        <div>
            {loading ? (<h1>MOVIE INFO LOADING</h1>) : (
               <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image}/>
                    <p>{movie.description_full}</p>
                    <button type="button">
                        <Link to={`/`}>홈으로</Link>
                    </button>
               </div>
            )}
            
        </div>
        
    );
}
export default Detail;