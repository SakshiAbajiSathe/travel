import React from "react";

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
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000"
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
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-4 text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#1E1D4C]">
                  {item.title}
                </h3>
                <span className="text-gray-500 text-sm">
                  {item.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                ✈ {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}