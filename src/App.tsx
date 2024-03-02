import React from "react";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css"; // Import app.css styles
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Leadership from "./pages/Leadership";

function App() {
  return (
    <>
      <NavBar/>
      <Landing/>
      <About/>
      <Experience/>
      <Leadership/>
      <Projects/>
      <Footer/>
    </>
    /*<BrowserRouter basename="/personal-website">
      <Routes> 
         <Route path="/" element={<About/>} />  
         <Route path="/Experience" element={<Experience/>} />
         <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;