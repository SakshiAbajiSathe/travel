import React from "react";
import { Leaf, Map, Send, Heart } from "lucide-react";
import imgv1 from "../assets/imgv1.jpg";
import logov4 from "../assets/logov4.png";
import logov1 from "../assets/logov1.png";
import logov2 from "../assets/logov2.png";
import logov3 from "../assets/logov3.png";

function TripCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-[#f8f9fc]">
      
      {/* Left Section */}
      <div className="max-w-lg">
        <p className="text-gray-400 font-medium">Easy and Fast</p>

        <h1 className="text-4xl lg:text-5xl font-bold text-[#1e1e4b] mt-3 leading-tight">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h1>

        {/* Step 1 */}
        <div className="flex gap-4 mt-10 group cursor-pointer">
          <div className="bg-yellow-400 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
            <img src={logov1} alt="icon" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 group-hover:text-yellow-500 transition">
              Choose Destination
            </h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mt-6 group cursor-pointer">
          <div className="bg-orange-500 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
            <img src={logov2} alt="icon" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 group-hover:text-orange-500 transition">
              Make Payment
            </h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mt-6 group cursor-pointer">
          <div className="bg-teal-700 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
            <img src={logov3} alt="icon" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 group-hover:text-teal-600 transition">
              Reach Airport on Selected Date
            </h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-16 lg:mt-0">

        {/* Main Card */}
        <div className="w-[360px] bg-white rounded-3xl p-4 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
          
          {/* Image Hover Zoom */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={imgv1}
              alt="greece"
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <h2 className="text-lg font-semibold mt-4">Trip To Greece</h2>

          <p className="text-gray-400 text-sm mt-1">
            14-29 June | by Robbin joseph
          </p>

          {/* Icons */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <div className="bg-gray-100 p-2 rounded-full hover:bg-green-100 hover:text-green-600 transition">
              <Leaf size={16} />
            </div>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 hover:text-blue-600 transition">
              <Map size={16} />
            </div>
            <div className="bg-gray-100 p-2 rounded-full hover:bg-purple-100 hover:text-purple-600 transition">
              <Send size={16} />
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500 text-sm">24 people going</p>
            <Heart className="text-blue-500 transition-transform duration-300 hover:scale-125 hover:text-red-500 cursor-pointer" size={18} />
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute right-[-40px] bottom-[60px] bg-white shadow-lg rounded-2xl p-3 w-[220px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          
          <div className="flex items-center gap-3">
            <img
              src={logov4}
              alt="rome"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs text-gray-400">Ongoing</p>
              <h4 className="text-sm font-semibold">Trip to Rome</h4>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            <span className="text-purple-500 font-semibold">40%</span> completed
          </p>

          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
            <div className="bg-purple-500 h-1.5 rounded-full w-[40%] transition-all duration-500 hover:w-[60%]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TripCard;