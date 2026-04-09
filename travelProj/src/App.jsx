import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Destinations from "./components/Destination";
import Services from "./components/Services";
import TripCard from "./components/TripCard";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Destinations/>
      <TripCard/>
      
      <Testimonials/>
      <Subscribe/>
      </>
    );
  }

export default App;