import React from "react";
import { Leaf, Map, Send, Heart } from "lucide-react";
import imgv1 from "../assets/imgv1.jpg";
import logov4 from "../assets/logov4.png";
import logov1 from "../assets/logov1.png";
import logov2 from "../assets/logov2.png";
import logov3 from "../assets/logov3.png";

function TripCard() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 bg-[#f8f9fc]">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

       
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p className="text-gray-400 font-medium text-sm sm:text-base">
            Easy and Fast
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e4b] mt-3 leading-tight">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>

         
          <div className="flex gap-4 mt-8 sm:mt-10 group cursor-pointer">
            <div className="bg-yellow-400 p-3 rounded-xl group-hover:scale-110 transition">
              <img src={logov1} alt="icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 group-hover:text-yellow-500">
                Choose Destination
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          
          <div className="flex gap-4 mt-6 group cursor-pointer">
            <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 transition">
              <img src={logov2} alt="icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 group-hover:text-orange-500">
                Make Payment
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          
          <div className="flex gap-4 mt-6 group cursor-pointer">
            <div className="bg-teal-700 p-3 rounded-xl group-hover:scale-110 transition">
              <img src={logov3} alt="icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 group-hover:text-teal-600">
                Reach Airport on Selected Date
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex-1 relative flex justify-center">

          
          <div className="w-full max-w-sm bg-white rounded-3xl p-4 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition">
            
            <div className="overflow-hidden rounded-2xl">
              <img
                src={imgv1}
                alt="greece"
                className="w-full h-44 sm:h-48 md:h-52 object-cover hover:scale-110 transition"
              />
            </div>

            <h2 className="text-base sm:text-lg font-semibold mt-4">
              Trip To Greece
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              14-29 June | by Robbin joseph
            </p>

            <div className="flex gap-3 mt-4 text-gray-400">
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

            <div className="flex justify-between items-center mt-5">
              <p className="text-gray-500 text-sm">24 people going</p>
              <Heart className="text-blue-500 hover:scale-125 hover:text-red-500 transition cursor-pointer" size={18} />
            </div>
          </div>

          
          <div className="hidden sm:block absolute right-0 sm:right-[-20px] bottom-10 bg-white shadow-lg rounded-2xl p-3 w-48 hover:scale-105 hover:shadow-2xl transition">
            
            <div className="flex items-center gap-3">
              <img
                src={logov4}
                alt="rome"
                className="w-8 h-8 rounded-full object-cover"
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
              <div className="bg-purple-500 h-1.5 rounded-full w-[40%]"></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TripCard;