import "./App.css";
import Counts from "./Components/Counts/Counts.js";
import Gallery from "./Components/Gallery/Gallery.js";
import HeroSection from "./Components/Hero-Section/HeroSection.js";
import NavHead from "./Components/Navbar/NavHead.js";
import Services from "./Components/Services/Services.js";
import WhyUs from "./Components/WhyUs/WhyUs.js";

function App() {
  return (
    <div className="app">
      <NavHead />
      <HeroSection />
      <Counts />
      <WhyUs />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;
