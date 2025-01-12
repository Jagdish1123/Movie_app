import axios from "../utils/Axios.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearch = async () => {
    try {
      if (query.trim() === "") {
        setSearches([]);
        return;
      }

      const response = await axios.get(`search/multi?query=${query}`);
      const data = response.data;

      if (data && data.results) {
        setSearches(data.results);
      } else {
        setSearches([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearches([]);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      GetSearch();
    }
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] flex justify-start items-center relative ml-[10%]">
      <i className="bg-zinc-400 text-3xl ri-search-line"></i>
      <input
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="bg-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      {query.length > 0 && searches.length > 0 && (
        <div className="absolute w-[80%] z-[100] max-h-[50vh] top-[90%] bg-zinc-200 overflow-auto rounded">
          {searches.map((s, idx) => (
            <Link
              key={idx}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 w-[100%] flex border-b-2 justify-start items-center border-zinc-100"
              // to={`/details/${s.id}`}
              to={`/${s.media_type}/details/${s.id}`}

            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5"
                src={`https://image.tmdb.org/t/p/original/${
                  s.backdrop_path || s.profile_path || s.poster_path
                }`}
                alt={
                  s.original_title ||
                  s.name ||
                  s.title ||
                  s.original_name ||
                  "No title"
                }
              />
              <span>
                {s.original_title ||
                  s.name ||
                  s.title ||
                  s.original_name ||
                  "No title available"}
              </span>
            </Link>
          ))}
        </div>
      )}

      {query.length > 0 && searches.length === 0 && (
        <div className="absolute w-[80%] max-h-[50vh] top-[90%] bg-zinc-200 overflow-auto rounded">
          <p className="text-zinc-500 p-4">No results found</p>
        </div>
      )}
    </div>
  );
}

export default Topnav;
