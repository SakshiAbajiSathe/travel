import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import PlayStore from "../assets/PlayStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import whitebackground from "../assets/whitebackground.png";

function Footer() {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16 mt-10">
      
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
       
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Jadoo.
          </h1>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </div>

        
        <div>
          <h2 className="font-semibold mb-4 text-base sm:text-lg">Company</h2>
          <ul className="text-gray-500 space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-blue-500 transition">About</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Careers</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Mobile</li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-semibold mb-4 text-base sm:text-lg">Contact</h2>
          <ul className="text-gray-500 space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-blue-500 transition">Help/FAQ</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Press</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Affiliates</li>
          </ul>
        </div>

        
        <div>
          <h2 className="font-semibold mb-4 text-base sm:text-lg">More</h2>
          <ul className="text-gray-500 space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-blue-500 transition">Airline fees</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Airline</li>
            <li className="cursor-pointer hover:text-blue-500 transition">Low fare tips</li>
          </ul>
        </div>

        
        <div className="text-center sm:text-left">
          
          <div className="flex justify-center sm:justify-start gap-3 mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition">
              <img src={fb} alt="fb" />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition">
              <img src={insta} alt="insta" />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition">
              <img src={whitebackground} alt="icon" />
            </div>
          </div>

          <p className="text-gray-600 mb-3 text-sm sm:text-base">
            Discover our app
          </p>

          <div className="flex justify-center sm:justify-start gap-2">
            <img
              src={GooglePlay}
              alt="google play"
              className="h-8 sm:h-10 cursor-pointer hover:scale-105 transition"
            />
            <img
              src={PlayStore}
              alt="app store"
              className="h-8 sm:h-10 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

      </div>

      
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-10">
        All rights reserved @ jadoo.co
      </div>
    </div>
  );
}

export default Footer;