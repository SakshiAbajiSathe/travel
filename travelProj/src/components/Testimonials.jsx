import userImg from "../assets/user.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

function Testimonials() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16 bg-gray-50">
      
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        
        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-400 text-xs sm:text-sm mb-2">
            TESTIMONIALS
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            What People Say <br /> About Us.
          </h2>

          <div className="flex justify-center lg:justify-start gap-2 mt-6">
            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-sm relative">
            
            <img
              src={userImg}
              alt="user"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full absolute -top-5 left-5 border-4 border-white"
            />

            <p className="text-gray-500 text-sm sm:text-base mt-6">
              “On the Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next. Of believed or diverted no.”
            </p>

            <h4 className="mt-4 font-semibold text-sm sm:text-base">
              Mike Taylor
            </h4>

            <p className="text-xs sm:text-sm text-gray-400">
              Lahore, Pakistan
            </p>
          </div>
        </div>

      </div>

      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-12 md:mt-16 opacity-70">
        
        <img src={logo1} alt="logo1" className="h-6 sm:h-8 md:h-10" />
        <img src={logo2} alt="logo2" className="h-6 sm:h-8 md:h-10" />
        <img src={logo3} alt="logo3" className="h-6 sm:h-8 md:h-10" />
        <img src={logo4} alt="logo4" className="h-5 sm:h-6 md:h-8" />
        <img src={logo5} alt="logo5" className="h-5 sm:h-6 md:h-8" />

      </div>

    </section>
  );
}

export default Testimonials;