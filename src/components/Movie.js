import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({title, summary,genres,coverImg,id}){
    return (
        <div>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
          <ul>
            {genres.map((g,index)=>(<li key={index}>{g}</li>))}
          </ul>
          <img src={coverImg} alt={title}/>
        </div>
    );

}

Movie.propTypes = {
   id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;