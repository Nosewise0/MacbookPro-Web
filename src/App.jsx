import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Features from "./components/Features";
import Performance from "./components/Perfomance";
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
