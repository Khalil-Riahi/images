// // // "use client"
// // // import Navbar from "../components/navbar";
// // // import Hero from "../components/hero";
// // // import Subscriptions from "../components/benefits";
// // // import Services from "../components/services";
// // // import Footer from "../components/footer";

// // // export default function Home() {
// // //   return (
   
// // // <>
// // // <main
// // //       className="min-h-screen bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden  h-[600px] mb-20"
// // //       style={{
// // //         backgroundImage:
// // //           "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
// // //       }}
// // //     >
// // //        <Navbar />
    
// // //     <Hero />
     
// // //     </main>
     
// // //      <Subscriptions />
// // //      <Services />
 
// // //      </>
    
// // //   );
// // // }
// "use client";

// import Navbar from "../components/navbar";
// import Hero from "../components/hero";
// import Subscriptions from "../components/benefits";
// import Services from "../components/services";
// import Footer from "../components/footer";

// export default function Home() {
//   return (
//     <>
//       <main
//         className="min-h-screen bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden h-[600px] mb-20"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
//         }}
//       >
//         <Navbar />
//         <Hero />
//       </main>

//       <Subscriptions />
//       <Services />

//       {/* Floating Purchase Points Button */}
//      <a href="/points">
//      <button
//         className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg z-50"
//       >
//         Purchase Points
//       </button>
//      </a>
//     </>
//   );
// }

// "use client";

// import Navbar from "../components/navbar";
// import Hero from "../components/hero";
// import Subscriptions from "../components/benefits";
// import Services from "../components/services";
// import Footer from "../components/footer";
// import Courses from "../components/courses-categories"
// export default function Home() {
 
  
//   useEffect(() => {
//     async function fetchingSubscriptions() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/subcription/gg/openspace");
//         if (!response.ok) {
//           throw new Error("Error in fetching subscriptions");
//         }
//         const data = await response.json();
//         console.log(data?.subscriptions?.table_id?.descriptpion)
//         // if(roomType === "openspace"){
//           setDescriptions(
//             [
//               "7/7 Access",
//               "Wi-Fi",
//               "Kitchen Access",
//               "Coffee (extra)"
//             ]
//           )
//         // }
//         setFetchedData(data.subscriptions);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchingSubscriptions();
//   }, []);
//   return (
//     <div className="bg-white">
    
//         <Navbar />
//         <Hero />
//         <Courses/>
   
//       <Subscriptions subs={} descriptions={}/>
//       {/* <Services /> */}

//       {/* Floating Purchase Points Button */}
//      <a href="/points">
//      <button
//         className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg z-50"
//       >
//         Purchase Points
//       </button>
//      </a>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "../components/navbar";
// import Hero from "../components/hero";
// import Subscriptions from "../components/benefits";
// // import Services from "../components/services";
// import Footer from "../components/footer";
// import Courses from "../components/courses-categories";
// import Options from "../components/options"
// export default function Home() {
//   const [fetchedData, setFetchedData] = useState(null);
//   const [descriptions, setDescriptions] = useState([]);

//   useEffect(() => {
//     async function fetchingSubscriptions() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/subcription/gg/openspace");
//         if (!response.ok) {
//           throw new Error("Error in fetching subscriptions");
//         }
//         const data = await response.json();
//         console.log(data?.subscriptions?.table_id?.descriptpion);

//         setDescriptions([
//           "7/7 Access",
//           "Wi-Fi",
//           "Kitchen Access",
//           "Coffee (extra)",
//         ]);

//         setFetchedData(data.subscriptions);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     fetchingSubscriptions();
//   }, []);

//   return (
//     <>
//       <div className="bg-white">
//       <Navbar />
//       <Hero />
//       <Subscriptions subs={fetchedData} descriptions={descriptions} />
//       <Options/>
//       <Courses />
//       </div>
//       <Footer/>
     
//       {/* <Services /> */}

//       {/* Floating Purchase Points Button */}
//       <a href="/points">
//         <button
//           className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg z-50"
//         >
//           Purchase Points
//         </button>
//       </a>
//     </>
  
   
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"; // We'll use this icon
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Subscriptions from "../components/benefits";
// import Services from "../components/services";
import Footer from "../components/footer";
import Courses from "../components/courses-categories";
import Options from "../components/options"
import Amenities from"../components/amenities"

export default function Home() {
  const [fetchedData, setFetchedData] = useState(null);
  const [descriptions, setDescriptions] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    async function fetchingSubscriptions() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/subcription/gg/openspace");
        if (!response.ok) throw new Error("Error in fetching subscriptions");

        const data = await response.json();
        console.log(data?.subscriptions?.table_id?.descriptpion);

        setDescriptions(["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"]);
        setFetchedData(data.subscriptions);
      } catch (err) {
        console.error(err);
      }
    }

    fetchingSubscriptions();
  }, []);

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Subscriptions subs={fetchedData} descriptions={descriptions} />
        <Options />
        <Courses />
        <Amenities/>
        <Footer/>
      </div>

      {/* Floating Purchase Points Button */}
      {/* <a href="/points">
        <button className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg z-50">
          Purchase Points
        </button>
      </a> */}

      {/* Scroll To Top Button */}
      {/* {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-12 h-12 bg-[#07ebbd] hover:bg-black text-white flex items-center justify-center rounded shadow-lg z-50"
        >
          <FaChevronUp />
        </button>
      )} */}
    </>
  );
}
