import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import SearchMovies from "./pages/SearchMovies";



function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <SearchMovies />
    </div>
  );
}

export default App;
