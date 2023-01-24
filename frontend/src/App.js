import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";



function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchMovies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
