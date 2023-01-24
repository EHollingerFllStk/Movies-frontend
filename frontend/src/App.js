import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";



function App() {

  const handleAddToList = (movie) => {
    const SavedMovies =  JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovies = [movie, ...SavedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchMovies handleAddToList={handleAddToList} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
