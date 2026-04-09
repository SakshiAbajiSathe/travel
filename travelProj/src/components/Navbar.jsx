function Navbar() {
  return (
    <header className="flex justify-between items-center  md:pr-16 px-6 md:px-16 py-5">
      <h1 className="text-3xl mr-12 font-bold">
        Jad<span className="text-yellow-500">oo</span>
      </h1>

      <nav className="hidden b md:flex gap-18 p-5   ">
        <a   href="Destinations.jsx">Destinations</a>
        <a href="Hotels.jsx">Hotels</a>
        <a href="Flights.jsx">Flights</a>
        <a href="Bookings.jsx">Bookings</a>
      </nav>

      <div className="flex gap-4">
        <button className="hidden md:block">Login</button>
        <button className="border px-4 py-1 rounded">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;