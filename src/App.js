import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      <NavBar />
      <Home />
      <Portfolio />
      <Experience />
      <Contact />


      <SocialLinks />
    </div>
  );
}

export default App;
