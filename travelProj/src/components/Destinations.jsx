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
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pg4tuVXKbsrKcp9ear-OzA.jpeg"
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-white text-center">
      
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20">
        
        
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">
          Top Selling
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E1D4C] mt-2 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Top Destinations
        </h2>

        
        <div className="
          grid 
          grid-cols-1 
          xs:grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-3 
          2xl:grid-cols-3
          gap-4 sm:gap-5 md:gap-6 lg:gap-8
        ">
          
          {destinations.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl shadow-md overflow-hidden 
                transform hover:scale-105 hover:-translate-y-2 
                hover:shadow-2xl transition duration-300
              "
            >
              
             
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full 
                    h-40 sm:h-44 md:h-52 lg:h-56 xl:h-60 
                    object-cover 
                    transition duration-300 hover:scale-110
                  "
                />
              </div>

              
              <div className="p-3 sm:p-4 md:p-5 text-left">
                
                <div className="flex justify-between items-center gap-2">
                  
                  <h3 className="
                    font-semibold text-[#1E1D4C]
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                  ">
                    {item.title}
                  </h3>

                  <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2">
                  ✈ {item.duration}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}