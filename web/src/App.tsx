import { Heading } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./routes/LoginPage";

function App() {
  return (
    <>
      <Heading></Heading>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
