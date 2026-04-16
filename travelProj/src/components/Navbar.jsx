import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-5">
      
      
      <h1 className="text-2xl sm:text-3xl font-bold">
        Jad<span className="text-yellow-500">oo</span>
      </h1>

      
      <nav className="hidden md:flex gap-8 lg:gap-12 font-bold">
        <a href="#" className="hover:text-yellow-500 transition">Destinations</a>
        <a href="#" className="hover:text-yellow-500 transition">Hotels</a>
        <a href="#" className="hover:text-yellow-500 transition">Flights</a>
        <a href="#" className="hover:text-yellow-500 transition">Bookings</a>
      </nav>

      
      <div className="flex items-center gap-3 sm:gap-4">
        
        
        <div className="hidden md:flex gap-4">
          <button className="font-bold hover:text-yellow-500">Login</button>
          <button className="border px-4 py-1 rounded font-bold hover:bg-yellow-500 hover:text-white transition">
            Sign up
          </button>
        </div>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          
          <a href="#" className="hover:text-yellow-500">Destinations</a>
          <a href="#" className="hover:text-yellow-500">Hotels</a>
          <a href="#" className="hover:text-yellow-500">Flights</a>
          <a href="#" className="hover:text-yellow-500">Bookings</a>

          <button className="font-bold hover:text-yellow-500">Login</button>
          <button className="border px-4 py-1 rounded font-bold hover:bg-yellow-500 hover:text-white transition">
            Sign up
          </button>
        </div>
      )}

    </header>
  );
}

export default Navbar;