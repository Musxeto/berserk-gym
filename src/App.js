import "./App.css";
import Counts from "./Components/Counts/Counts.js";
import HeroSection from "./Components/Hero-Section/HeroSection.js";
import NavHead from "./Components/Navbar/NavHead.js";

function App() {
  return (
    <div className="app">
      <NavHead />
      <HeroSection />
      <Counts />
    </div>
  );
}

export default App;
