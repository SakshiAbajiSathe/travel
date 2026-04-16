import email from "../assets/email.png";
import share from "../assets/share.png";

function Subscribe() {
  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16">
      
      
      <div className="max-w-4xl mx-auto bg-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 relative hover:scale-105 transition duration-300">
        
        
        <img
          src={share}
          alt="share"
          className="absolute top-4 right-4 h-8 w-8 sm:h-10 sm:w-10"
        />

        
        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mt-4">
          Subscribe to get information, latest news and
        </h1>

        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold">
          other interesting offers about Jadoo
        </h2>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          
          
          <div className="flex items-center bg-white px-4 py-2 rounded-lg w-full sm:w-80">
            <img src={email} alt="email" className="h-5 w-5 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none w-full text-sm sm:text-base"
            />
          </div>

          
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
}

export default Subscribe;