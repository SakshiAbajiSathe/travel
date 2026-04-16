import React from "react";
import { Plane, Settings, Mic, CloudSun } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <CloudSun className="text-blue-500" />,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
      icon: <Plane className="text-blue-500" />,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      icon: <Mic className="text-gray-600" />,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening."
    },
    {
      icon: <Settings className="text-gray-600" />,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white text-center">
      
      
      <p className="text-xs sm:text-sm text-gray-400 tracking-widest">
        CATEGORY
      </p>

      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1D4C] mt-2 mb-8 md:mb-12">
        We Offer Best Services
      </h2>

      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-4 
        gap-6 
        px-4 sm:px-6 md:px-10 lg:px-20
      ">
        
        {services.map((item, index) => (
          <div
            key={index}
            className="
              p-5 sm:p-6 
              rounded-2xl 
              bg-white 
              shadow-md
              cursor-pointer 
              transform hover:scale-105 hover:-translate-y-2
              hover:shadow-2xl 
              transition duration-300
            "
          >
            
    
            <div className="flex justify-center mb-4 text-3xl sm:text-4xl md:text-5xl">
              {item.icon}
            </div>

            
            <h3 className="
              font-semibold 
              text-lg sm:text-xl md:text-2xl 
              text-[#1E1D4C]
            ">
              {item.title}
            </h3>

           
            <p className="
              text-gray-500 
              text-sm sm:text-base 
              mt-2 px-2
            ">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}