import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css"; // Import app.css styles
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Leadership from "./pages/Leadership";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Home page component with all sections
const HomePage = () => (
  <>
    <Landing/>
    <About/>
    <Experience/>
    <Leadership/>
    <Projects/>
    <Footer/>
    <ScrollToTop/>
  </>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;