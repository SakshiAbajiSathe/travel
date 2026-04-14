//     import Image from '../assets/Image.png';

// function Hero() {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 py-10">
      
//       <div className="flex-1 ml-10">
//         <p className="text-red-500  text-xl font-semibold b  tracking-wide ">
//           BEST DESTINATIONS AROUND THE WORLD
//         </p>
    
//         <h1
//   className="text-4xl md:text-6xl  font-bold mt-4 leading-tight"
  
// >
//           Travel, enjoy and live a new and full life
//         </h1>


//         <p className="text-gray-500 mt-4">
//          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Prestigious on he unaffected not found pain is. Article concern own my wish or dart.
//         </p>

//         <div className="flex gap-4 mt-6">
//           <button className="bg-yellow-500 text-white px-6 py-2 rounded">
//             Find out more
//           </button>
//           <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded">
//             ▶ Play Demo
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 mb-8 md:mb-0">
//         <img
//   src={Image}
//   alt="Image"
//   className="w-[800px] object-contain"
// />
//       </div>
//     </section>
//   );
// }

// export default Hero;

import Image from '../assets/Image.png';

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 py-10">
      
      <div className="flex-1 ml-10">
        <p className="text-red-500  text-xl font-semibold b  tracking-wide ">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
    
        <h1
  className="text-4xl md:text-6xl  font-bold mt-4 leading-tight"
  style={{ fontFamily: "" }}
>
          Travel, enjoy and live a new and full life
        </h1>


        <p className="text-gray-500 mt-4">
         Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Prestigious on he unaffected not found pain is. Article concern own my wish or dart.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Find out more
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 ">
            ▶ Play Demo
          </button>
        </div>
      </div>

      <div className="flex-1 mb-8 md:mb-0">
        <img
  src={Image}
  alt="Image"
  className="w-[800px] object-contain mx-auto "
/>
      </div>
    </section>
  );
}

export default Hero;

