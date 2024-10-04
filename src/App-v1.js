import NavBar from "./component/Structural Component/NavBar";
import Main from "./component/Structural Component/Main";
import tempMovieData from "../src/component/tempMovieData";
import { useState } from "react";
import SearchBar from "../src/component/State/SearchBar";
import NumResult from "./component/Presentation /NumResult";
import Box from "./component/State/Box";
import ListOfMovies from "./component/State/ListOfMovies";
import WatchSummary from "./component/Presentation /WatchSummary";
import WatchList from "./component/Presentation /WatchList";
import tempWatchedData from "./component/temWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <SearchBar />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <ListOfMovies movies={movies} />
        </Box>
        <Box>
          <>
            <WatchSummary watched={watched} />
            <WatchList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}
