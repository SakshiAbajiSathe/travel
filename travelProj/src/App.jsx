// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Testimonials from "./components/Testimonials";
// import Subscribe from "./components/Subscribe";
// import Destinations from "./components/Destination";
// import Services from "./components/Services";
// import TripCard from "./components/TripCard";
// import Footer from "./components/Footer";




// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services/>
//       <Destinations/>
//       <TripCard/>
      
//       <Testimonials/>
//       <Subscribe/>
//       <Footer/>
//       </>
//     );
//   }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import TripCard from "./components/TripCard";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <TripCard />
      <Testimonials />
      <Subscribe />
      {/* <About /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/tripcard" element={<TripCard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;