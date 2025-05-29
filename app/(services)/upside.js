
// // import Navbar from "./../components/navbar";


// // export default function upside({ name }) {
// //   return (
// //     <section className="relative h-[70vh] flex items-center">
// //         <div className="absolute inset-0 z-0">

// //           <Image
// //             src="/open.jpg"
// //             alt="Coworking Space Hero Background"
// //             layout="fill"
// //             objectFit="cover"
// //             priority
// //           />
// //           <div className="absolute inset-0 bg-black/60" />
// //         </div>
// //         <div className="relative z-10 px-6 md:px-20 w-full">
// //           <div className="max-w-4xl mx-auto">
// //             <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-2">{{namee}}</h1>
// //             <p className="text-lime-400 uppercase text-sm tracking-wider">
// //               Home / <span className="text-white">Open space</span>
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //   );
// // }
// import Navbar from "./../components/navbar";
// import Image from "next/image";

// export default function Upside({ name }) {
//   return (
//     <section className="relative h-[70vh] flex items-center">
//       {/* Background image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/open.jpg"
//           alt="Coworking Space Hero Background"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Navbar and content overlayed on image */}
//       <div className="relative z-10 w-full">
//         <Navbar />

//         <div className="px-6 md:px-20 mt-10 w-full">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-2">
//               {name}
//             </h1>
//             <p className="text-lime-400 uppercase text-sm tracking-wider">
//               Home / <span className="text-white">{name}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
