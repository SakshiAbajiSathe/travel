import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Destinations from "./components/Destination";
import Services from "./components/Services";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Destinations/>
      
      <Testimonials/>
      <Subscribe/>
      </>
    );
  }

export default App;