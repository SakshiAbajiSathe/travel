import email from "../assets/email.png";
import share from "../assets/share.png";
function Subscribe(){
    return(
        <div className="h-80 w-300 bg-gray-300 rounded-2xl mt-20 ml-20 rounded-left-top-corner-3xl">
            <img src={share} className="ml-290 h-15 w-15"/>
            <h1 className="text-center text-2xl mt-5">
                Subscribe to get information, latest news and
                  </h1>
                <h2 className="text-center text-2xl">
                    other interesting offers about Jadoo
                    </h2> 
         <div className="flex items-center justify-center gap-4 p-10">
      

      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-80">
        <img src={email} alt="email" className="h-5 w-5 mr-2" />
        <input
          type="email"
          placeholder="Your email"
          className="bg-transparent outline-none w-full"
        />
      </div>

      <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
        Subscribe
      </button>

    </div>
            
        </div>
    )
}
export default Subscribe;