import "./App.css";
import HeroSection from "./Components/Hero-Section/HeroSection.js";
import NavHead from "./Components/Navbar/NavHead.js";

function App() {
  return (
    <div className="app">
      <NavHead />
      <HeroSection />
    </div>
  );
}

export default App;
