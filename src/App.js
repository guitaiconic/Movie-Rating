import NavBar from "./component/Structural Component/NavBar";
import Main from "./component/Structural Component/Main";

import { useEffect, useState } from "react";
import SearchBar from "./component/Presentation /SearchBar";
import NumResult from "./component/Presentation /NumResult";
import Box from "./component/State/Box";
import ListOfMovies from "./component/State/ListOfMovies";
import WatchSummary from "./component/Presentation /WatchSummary";
import WatchList from "./component/Presentation /WatchList";
import Loader from "./component/Presentation /Loader";
import ErrorMessage from "./component/Presentation /ErrorMessage";
import MovieDetails from "./component/Presentation /MovieDetails";
import useMovies from "./useMovies";
import useLocalStorageState from "./useLocalStorageState";

const KEY = "dc85bd43";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  //Creating custom Hook
  const { movies, isLoading, error } = useMovies(query);
  //Creating custom LocalStorage Hook
  const [watched, setWatched] = useLocalStorageState([], "watched");

  //const [watched, setWatched] = useState([]);
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched");
  //   return JSON.parse(storedValue);
  // });
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatch(movie) {
    setWatched((watched) => [...watched, movie]);

    //localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : {isLoading ? <Loader /> : <ListOfMovies movies={movies} />}} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <ListOfMovies movies={movies} onSelectedMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatch}
              watched={watched}
            />
          ) : (
            <>
              <WatchSummary watched={watched} />
              <WatchList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
