import userImg from "../assets/user.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">

      <div className="flex flex-col md:flex-row gap-10 items-center">

        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-2">TESTIMONIALS</p>

          <h2 className="text-4xl font-bold leading-snug mb-6">
            What People Say <br /> About Us.
          </h2>

          <div className="flex gap-2 mt-6">
            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">

          {/* <div className="absolute top-10 right-6 bg-white shadow-md rounded-xl w-72 h-40 opacity-40"></div> */}

          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 relative z-10">

            <img
              src={userImg}
              alt="user"
              className="w-12 h-12 rounded-full absolute -top-6 left-6 border-4 border-white"
            />

            <p className="text-gray-500 text-sm mt-6">
              “On the Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next. Of believed or diverted no.”
            </p>

            <h4 className="mt-4 font-semibold">Mike taylor</h4>
            <p className="text-sm text-gray-400">Lahore, Pakistan</p>
          </div>

        </div>

      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-16 opacity-70">

        <img src={logo1} className="h-30" />
        <img src={logo2} className="h-30" />
        <img src={logo3} className="h-25" />
        <img src={logo4} className="h-6" />
        <img src={logo5} className="h-6" />

      </div>

    </section>
  );
}

export default Testimonials;
