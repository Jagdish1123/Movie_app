import PropTypes from 'prop-types';

function HorizontalCards({ data }) {
  return (
    // <div className="w-full h-[40vh] p-5 ">
  

      <div className="w-full h-[40vh] flex overflow-y-hidden p-5 mb-5" >
        {data?.map((item, index) => (
          <div
            key={index}
            className="min-w-[15%] m-3 bg-zinc-900 mr-5 rounded-lg"
          >
            <img
              className="w-full h-[55%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`}
              alt={"No Title"}
            />
            <div className="text-white p-3 h-[45%]">
              <h1 className="font-semibold text-xl">
                {item?.original_title || item?.name || item?.title || item?.original_name}
              </h1>
              <p>
                {item?.overview?.slice(0, 200)}
                <span className="text-zinc-500">..more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    // </div>
  );
}

HorizontalCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      first_air_date: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number.isRequired,
      media_type: PropTypes.string,
      name: PropTypes.string,
      origin_country: PropTypes.arrayOf(PropTypes.string),
      original_language: PropTypes.string,
      original_name: PropTypes.string,
      overview: PropTypes.string,
      popularity: PropTypes.number,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    })
  ).isRequired,
};

export default HorizontalCards;
