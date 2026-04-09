import React from "react";
import { Plane, Settings, Mic, CloudSun } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <CloudSun size={40} className="text-blue-500" />,
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
      icon: <Plane size={40} className="text-blue-500" />,
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      icon: <Mic size={40} className="text-gray-600" />,
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening."
    },
    {
      icon: <Settings size={40} className="text-gray-600" />,
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers"
    }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <p className="text-sm text-gray-400 tracking-widest">CATEGORY</p>
      
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E1D4C] mt-2 mb-12">
        We Offer Best Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg text-[#1E1D4C]">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}