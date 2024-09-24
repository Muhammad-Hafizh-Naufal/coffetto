import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Menu/Section";
import About from "./components/Menu/About";
import Steps from "./components/Menu/Steps";
import Testimonial from "./components/Menu/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Section />
        <About />
        <Steps />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
