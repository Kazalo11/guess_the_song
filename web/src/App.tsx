import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import { ArtistProvider } from "./context/ArtistProvider";
import { ArtistOption } from "./mapping/ArtistsToArtistOption";
import GamePage from "./routes/GamePage";
import LoginPage from "./routes/LoginPage";
import MainPage from "./routes/MainPage";

function App() {
  const [artist, setArtist] = useState<ArtistOption | null>(null);
  return (
    <ArtistProvider value={{ artist, setArtist }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/play" element={<GamePage />} />
        </Routes>
      </Router>
    </ArtistProvider>
  );
}

export default App;
