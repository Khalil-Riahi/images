// // import Image from "next/image";

// // export default function ThreeSectionShowcase() {
// //   return (
// //     <div className="w-full flex flex-col md:flex-row h-100">
// //       {/* Left column (2 stacked images) */}
// //       <div className="w-full md:w-1/3 flex flex-col">
// //         {/* Top Image: Private Office */}
// //         <div className="relative h-1/2">
// //           <Image
// //             src="/images/private-office.jpg"
// //             alt="Private Office"
// //             fill
// //             className="object-cover"
// //           />
// //           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
// //             <h2 className="text-lg md:text-xl font-semibold text-green-400">Private Office</h2>
// //             <button className="mt-1 text-sm bg-white text-black px-3 py-1 rounded font-medium">Book a Tour</button>
// //           </div>
// //         </div>

// //         {/* Bottom Image: Conference Room */}
// //         <div className="relative h-1/2">
// //           <Image
// //             src="/images/conference-room.jpg"
// //             alt="Conference Room"
// //             fill
// //             className="object-cover"
// //           />
// //           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
// //             <h2 className="text-lg md:text-xl font-semibold text-green-400">Conference Room</h2>
// //             <button className="mt-1 text-sm bg-white text-black px-3 py-1 rounded font-medium">Learn More</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right: Main Coworking Space */}
// //       <div className="relative w-full md:w-2/3 h-[50vh] md:h-full">
// //         <Image
// //           src="/images/main-coworking.jpg"
// //           alt="Coworking Space"
// //           fill
// //           className="object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-10 md:p-16 text-white">
// //           <h1 className="text-2xl md:text-5xl font-bold leading-snug max-w-lg">
// //             A Hospitality Inspired <br /> Co-Working Space.
// //           </h1>
// //           <button className="mt-6 px-6 py-2 bg-lime-400 text-black font-bold rounded">
// //             Schedule a Visit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import Image from "next/image";

// export default function ThreeSectionShowcase() {
//   return (
//     <div className="w-full flex flex-col md:flex-row ">
//       {/* Left column */}
//       <div className="w-full md:w-1/3 flex flex-col">
//         {/* Top image */}
//         <div className="relative aspect-[4/3] sm:aspect-[5/4] md:h-1/2">
//           <Image
//             src="/private2.jpg"
//             alt="Private Office"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
//             <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-400">
//               Private Office
//             </h2>
//             <button className="mt-2 text-xs sm:text-sm px-4 py-1 bg-white text-black rounded font-medium">
//               Book a Tour
//             </button>
//           </div>
//         </div>

//         {/* Bottom image */}
//         <div className="relative aspect-[4/3] sm:aspect-[5/4] md:h-1/2">
//           <Image
//             src="/meet2.jpg"
//             alt="Conference Room"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
//             <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-400">
//               Conference Room
//             </h2>
//             <button className="mt-2 text-xs sm:text-sm px-4 py-1 bg-white text-black rounded font-medium">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right main coworking image */}
//       <div className="relative w-full md:w-2/3 aspect-[3/2] md:aspect-auto md:h-auto">
//   <Image
//     src="/openspace.jpg"
//     alt="Coworking Space"
//     fill
//     className="object-cover"
//     sizes="(max-width: 768px) 100vw, 66vw"
//   />
// <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 py-10 text-white">
// <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-snug max-w-lg">
//       A Hospitality Inspired <br /> Co-Working Space.
//     </h1>
//     <button className="mt-6 px-6 py-2 text-sm sm:text-base bg-lime-400 text-black font-bold rounded">
//       Schedule a Visit
//     </button>
//   </div>
// </div>
// </div>
//   );
// }
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext"     

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function ThreeSectionShowcase() {
  const router = useRouter();
  const { idUser, loading: userLoading } = useUser();


  const handleMemberAccessMeetingroom = () => {
    const isConnected = Boolean(idUser);
    const target = "/dashboard1/reserveMeetingroom";
  
    if (isConnected) {
      router.push(target);
    } else {
      router.push(`/login?redirect=${encodeURIComponent(target)}`);
    }
  };
  const handleMemberAccessprivateoffice = () => {
    const isConnected = Boolean(idUser);
    const target = "/dashboard1/reservePrivatedesk";
  
    if (isConnected) {
      router.push(target);
    } else {
      router.push(`/login?redirect=${encodeURIComponent(target)}`);
    }
  };
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left column */}
      <div className="w-full md:w-1/3 flex flex-col">
        {/* Top image - Private Office */}
        <div className="relative aspect-[4/3] sm:aspect-[5/4] md:h-1/2">
          <Image
            src="/private2.jpg"
            alt="Private Office"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
            <h2
              className={`${pacifico.className} text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent`}
            >
              Private Office
            </h2>
            <button className="mt-2 text-md sm:text-sm px-4 py-1 bg-white text-black rounded font-medium" onClick={handleMemberAccessprivateoffice}>
            Book Now
            </button>
          </div>
        </div>

        {/* Bottom image - Conference Room */}
        <div className="relative aspect-[4/3] sm:aspect-[5/4] md:h-1/2">
          <Image
            src="/meet2.jpg"
            alt="Conference Room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
            <h2               className={`${pacifico.className} text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent`}
            >
              Conference Room
            </h2>
            <button className="mt-2 text-md sm:text-sm px-4 py-1 bg-white text-black rounded font-medium" onClick={handleMemberAccessMeetingroom}>
              Book Now 
            </button>
          </div>
        </div>
      </div>

      {/* Right main coworking image */}
      <div className="relative w-full md:w-2/3 aspect-[3/2] md:aspect-auto md:h-auto">
        <Image
          src="/openspace.jpg"
          alt="Coworking Space"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 py-10 text-white">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-snug max-w-lg">
            A Hospitality Inspired <br /> Co-Working Space.
          </h1>
          <button className="mt-6 px-10 py-2 text-sm sm:text-base bg-[#07ebbd] text-white font-bold rounded"   onClick={() => router.push('/WorkZone')} >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
