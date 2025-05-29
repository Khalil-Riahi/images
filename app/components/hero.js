// import { Button } from "./../components/ui/button";
// import Image from "next/image";
// import Container from "./Container";
// import heroImg1 from "../../public/oo.png"; // Ensure this path is correct
// import { Link } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative w-full h-[600px]">
//       <div className="absolute left-12 top-[42%] translate-y-[-40%] z-10  space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900 max-w-3xl">
//         Elevate Your Workday
//         </h1>
//         <p className="text-lg text-gray-600 max-w-xl">
//           Step into a dynamic coworking environment built for thinkers, doers, and innovators. 
//           Flexible spaces. Inspiring design. A community that fuels your ambition.
//         </p>
//         <div className="flex gap-4">
//           <a href='\booking'>
//           <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold">
//             Reserve
//           </Button>
//           </a>
//           <a href="#subscriptions">
//           <Button
//             variant="outline"
//             className="border-blue-500 text-blue-600 font-semibold"
//                 >
//                   Explore subscription 

//                 </Button>
//           </a>
//               </div>
//             </div>
    
//             {/* Right Image - pushed further right */}
//             <div className="absolute bottom-0 right-[-100px] md:right-[-50px] lg:right-[-80px] z-0 lg:translate-y-40 translate-y-12 md:translate-y-20">
//               <Image
//                 src="/elacoo.png"
//                 alt="Coworking Space"
//                 width={900}
//                 height={500}
//                 className="object-contain"
//               />
//             </div>
//           </section>
//   );
// }
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@/app/context/UserContext"     // Adjust path based on your structure
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import {
  BriefcaseIcon,
  UsersIcon,
  LockClosedIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const { idUser, loading: userLoading } = useUser();
    const router = useRouter();
  
  const handleMemberAccess = () => {
    const isConnected = Boolean(idUser);
    const target = "/dashboard1/reserveMeetingroom";
  
    if (isConnected) {
      router.push(target);
    } else {
      router.push(`/login?redirect=${encodeURIComponent(target)}`);
    }
  };
  return (
    <section className="relative w-full bg-white">
      {/* Hero Image and Overlay */}
      <div className="relative h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/coo.jpg"
          alt="Coworking background"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-bl-[80px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="container relative z-20 px-4 md:px-8 mx-auto mb-20">
          <div className="max-w-2xl">
            <Typography
              variant="h1"
              className="text-5xl lg:text-6xl font-bold text-blue-gray-900 mb-6 leading-tight"
            >
              Your Perfect Workspace Awaits <span className="text-[#07ebbd]">.</span>
            </Typography>
            <Typography className="text-lg text-blue-gray-700 mb-8">
              Premium coworking environments crafted for professionals, entrepreneurs, and teams. Adapt your workspace to fit your needs  <span className="text-[#07ebbd]">.</span>
            </Typography>
            <div className="flex gap-4 flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="lg"
          className="bg-gray-900 text-white px-6 py-3 shadow-md rounded-xl hover:shadow-lg transition" 
        onClick={handleMemberAccess}

        >

          Book Now
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Button
          size="lg"
          variant="outlined"
          color="gray"
          className="border-gray-700 px-6 py-3 rounded-xl"
        >
          View Options
        </Button>
      </motion.div>
    </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="relative z-30 -mt-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { title: "Coworking Zone", icon: <BriefcaseIcon className="h-10 w-10 mx-auto text-gray-700" /> },
              { title: "Meetings Zone", icon: <UsersIcon className="h-10 w-10 mx-auto text-gray-700" /> },
              { title: "Private Offices", icon: <LockClosedIcon className="h-10 w-10 mx-auto text-gray-700" /> },
              { title: "Domiciliation", icon: <HomeIcon className="h-10 w-10 mx-auto text-gray-700" /> },
            ].map(({ title, icon }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl shadow-md p-6 hover:-translate-y-1 transition-transform"
              >
                {icon}
                <h5 className="mt-4 text-lg font-semibold text-gray-800">{title}</h5>
              </div>
            ))}
          </div> */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
  {[
    { title: "Coworking Zone", icon: <BriefcaseIcon className="h-10 w-10 mx-auto text-gray-700" />, href: "/Openspace" },
    { title: "Meetings Zone", icon: <UsersIcon className="h-10 w-10 mx-auto text-gray-700" />, href: "/meetingroom" },
    { title: "Private Offices", icon: <LockClosedIcon className="h-10 w-10 mx-auto text-gray-700" />, href: "/officeroom" },
    { title: "Domiciliation", icon: <HomeIcon className="h-10 w-10 mx-auto text-gray-700" />, href: "/domiciliation" },
  ].map(({ title, icon, href }) => (
    <Link href={href} key={title} className="block">
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:-translate-y-1 transition-transform cursor-pointer">
        {icon}
        <h5 className=" text-lg font-semibold text-gray-800">{title}</h5>
      </div>
    </Link>
  ))}
</div>

          {/* Scroll Indicator */}
          
        </div>
      </div>
    </section>
  );
}
