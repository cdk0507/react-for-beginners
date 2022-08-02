import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Detail</h1>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default Detail;
