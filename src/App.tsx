import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleResume from "./pages/SimpleResume";
import "./SimpleResume.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SimpleResume />} />
      </Routes>
    </Router>
  );
}

export default App;