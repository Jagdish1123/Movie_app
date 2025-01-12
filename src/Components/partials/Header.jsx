
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${data?.imageUrl || `https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.profile_path || data?.poster_path}`})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-[50vh] w-full flex flex-col items-start justify-end p-[5%]"
    >
      <h1 className="w-[70%] font-black text-white text-5xl">
        {data?.original_title || data?.name || data?.title || data?.original_name}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-5">
        {data?.overview?.slice(0, 200)}
        <Link to={`/details/${data?.id}`} className="text-blue-400">..more</Link>
      </p>
      <p className="text-white mt-3 flex items-center gap-4">
        <span>
          <i className="text-yellow-500 ri-megaphone-fill"></i> {data?.release_date || "N/A"}
        </span>
        <span>
          <i className="text-yellow-500 ri-album-fill"></i> {data?.media_type.toUpperCase() || "Unknown"}
        </span>
      </p>

      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}

        className='mt-5 p-5 bg-[#6556CD] rounded text-white font-semibold'>
        WATCH Traliers
      </Link>

    </div>
  );
}

// Prop validation
Header.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    backdrop_path: PropTypes.string,
    profile_path: PropTypes.string,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    release_date: PropTypes.string,
    media_type: PropTypes.string,
  }).isRequired,
};

export default Header;
