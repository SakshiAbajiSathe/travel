import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import PlayStore from "../assets/PlayStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import whitebackground from "../assets/whitebackground.png";

function Footer() {
  return (
    <div className="bg-gray-100 px-10 py-16 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

    
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Jadoo.</h1>
          <p className="text-gray-500 mt-4 text-sm">
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </div>

        
        <div>
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li className="hover:text-blue-500 transition-colors duration-300">About</li>
            <li className="hover:text-blue-500  transition-colors duration-300">Careers</li>
            <li className="hover:text-blue-500  transition-colors duration-300">Mobile</li>
          </ul>
        </div>

    
        <div>
          <h2 className="font-semibold mb-4">Contact</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li className="hover:text-blue-500  transition-colors duration-300">Help/FAQ</li>
            <li className="hover:text-blue-500  transition-colors duration-300">Press</li>
            <li className="hover:text-blue-500  transition-colors duration-300"li>Affiliates</li>
          </ul>
        </div>

    
        <div>
          <h2 className="font-semibold mb-4">More</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li className="hover:text-blue-500 transition-colors duration-300">Airlinefees</li>
            <li className="hover:text-blue-500  transition-colors duration-300">Airline</li>
            <li className="hover:text-blue-500  transition-colors duration-300">Low fare tips</li>
          </ul>
        </div>

       
        <div>
          <div className="flex gap-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center hover:scale-120 transition-transform duration-300">
              <img src={fb}/>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r rounded-full hover:scale-120 transition-transform duration-300">
              <img src={insta} />
            </div>
            <div className="w-8 h-8 hover:scale-120 transition-transform duration-300">
                <img src={whitebackground}/>
            </div>
          </div>

          <p className="text-gray-600 mb-3">Discover our app</p>

          <div className="flex gap-2">
            <img
              src={GooglePlay}
              alt="google play"
              className="h-8 hover:scale-105 transition-transform duration-300"
            />
            <img
              src={PlayStore}
              alt="app store"
              className="h-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>

     
      <div className="text-center text-gray-500 text-sm mt-15">
        All rights reserved@jadoo.co
      </div>
    </div>
  );
}

export default Footer;