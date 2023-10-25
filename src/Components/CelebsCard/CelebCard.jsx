import "./CelebCard.css";

const CelebsPage = ({ data }) => {
  console.log(data);
  return (
    <div className="celeb-card">
      <img
        src={
          data?.known_for[0]?.poster_path
            ? `https://image.tmdb.org/t/p/w300${data?.known_for[0]?.poster_path}`
            : "/noImage.png"
        }
        alt={data?.known_for[0]?.title}
      />
      <div>
        <h2 className="celeb-name">{data?.name || data?.original_name}</h2>
        <h4 className="movie-title">{data?.known_for[0]?.title}</h4>
        <p className="per_overview ">{data?.known_for[0]?.overview}</p>
        <p>Release Date: {data?.known_for[0]?.release_date}</p>
      </div>
    </div>
  );
};

export default CelebsPage;
