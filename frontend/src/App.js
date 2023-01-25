import { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    setSavedMovies(movies);
  }, [])


  const handleAddToList = (movie) => {
    const savedMovies =  JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovies = [movie, ...savedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    setSavedMovies(newSavedMovies);
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchMovies handleAddToList={handleAddToList} />} />
        <Route path="/saved-movies" element={<SavedMovies data={savedMovies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
