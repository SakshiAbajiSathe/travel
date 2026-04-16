import Image from "../assets/Image.png";

function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16">
      
      
      <div className="flex-1 text-center lg:text-left">
        
        <p className="text-red-500 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          Travel, enjoy and live a new and full life
        </h1>

        <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Prestigious on he unaffected not found pain is. Article concern own my wish or dart.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Find out more
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-200 transition">
            ▶ Play Demo
          </button>

        </div>
      </div>

      
      <div className="flex-1 mb-8 lg:mb-0">
        <img
          src={Image}
          alt="Hero"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto object-contain"
        />
      </div>

    </section>
  );
}

export default Hero;