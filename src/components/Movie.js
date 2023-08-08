import Proptypes from "prop-types"

function Movie({coverImage, title, summary, genres}){
    return (<div>
    <img src={coverImage} alt={title} />
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
        ))}
    </ul>
  </div>)
}

Movie.propTypes = {
  coverImage: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;