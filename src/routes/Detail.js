import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        // console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);

    return (
      <div>
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <Link to={`/`}>back list</Link>
            <hr/>
            <h1>{movie.title}</h1>
            <h3>
              평점 : {movie.rating}, 좋아요 : {movie.like_count}
              , 언어 : {movie.language}, 재생시간 : {movie.runtime}
            </h3>
            장르 :
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <img src={movie.large_cover_image} alt={movie.title} />
            <hr />
            {movie.description_full}
          </div>
        )}
      </div>
    );
}

export default Detail;
