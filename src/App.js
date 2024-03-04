import "./App.css";
import Counts from "./Components/Counts/Counts.js";
import HeroSection from "./Components/Hero-Section/HeroSection.js";
import NavHead from "./Components/Navbar/NavHead.js";
import WhyUs from "./Components/WhyUs/WhyUs.js";

function App() {
  return (
    <div className="app">
      <NavHead />
      <HeroSection />
      <Counts />
      <WhyUs />
    </div>
  );
}

export default App;
