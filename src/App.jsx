import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import Trending from "./Components/Trending.jsx";
import Popular from "./Components/Popular.jsx";
import Movie from "./Components/Movie.jsx";
import People from "./Components/People.jsx";
import Shows from "./Components/Shows.jsx";
import Moviedetails from "./Components/Moviedetails.jsx";
import Trailer from "./Components/partials/Trailer.jsx";
import TvDetails from "./Components/TvDetails.jsx";
import PersonDetails from "./Components/PersonDetails.jsx";
import NotFound from "./Components/NotFound.jsx";


function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route
            path="/movie/details/:id/trailer"
            element={<Trailer />}
          />
        </Route>

        <Route path="/tv" element={<Shows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route
            path="/tv/details/:id/trailer"
            element={<Trailer />}
          />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
