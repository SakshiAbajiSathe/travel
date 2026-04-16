import React from "react";
import { useNavigate } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    {
      title: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000"
    },
    {
      title: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1000"
    },
    {
      title: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image:
       "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pg4tuVXKbsrKcp9ear-OzA.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <p className="text-sm text-gray-400">Top Selling</p>

      <h2 className="text-3xl md:text-4xl font-bold text-[#1E1D4C] mt-2 mb-12">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {destinations.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/details")}
            className="bg-white rounded-2xl shadow-lg overflow-hidden
                      cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden 
                      transform hover:scale-105 hover:-translate-y-2 
                      hover:shadow-2xl 
                      transition duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover 
              transition duration-300 
             hover:scale-110"
            />

            <div className="p-4 text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#1E1D4C] text-3xl">
                  {item.title}
                </h3>
                <span className="text-gray-500 text-sm">
                  {item.price}
                </span>
              </div>

              <p className="text-gray-500 text-lg mt-2">
                ✈ {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}