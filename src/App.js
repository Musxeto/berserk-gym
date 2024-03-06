import "./App.css";
import Counts from "./Components/Counts/Counts.js";
import Gallery from "./Components/Gallery/Gallery.js";
import HeroSection from "./Components/Hero-Section/HeroSection.js";
import NavHead from "./Components/Navbar/NavHead.js";
import Pricing from "./Components/Pricing/Pricing.js";
import Services from "./Components/Services/Services.js";
import Testimonials from "./Components/Testimonials/Testimonials.js";
import WhyUs from "./Components/WhyUs/WhyUs.js";

function App() {
  return (
    <div className="app">
      <NavHead />
      <HeroSection id="heroSection" />
      <Counts id="countsSection" />
      <WhyUs id="whyUsSection" />
      <Services id="servicesSection" />
      <Gallery id="gallerySection" />
      <Pricing id="pricingSection" />
      <Testimonials id="testimonialsSection" />
    </div>
  );
}

export default App;
