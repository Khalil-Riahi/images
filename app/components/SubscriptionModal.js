// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import { createPortal } from 'react-dom';
// // // // // import { format } from "date-fns";
// // // // // import { CalendarIcon } from "lucide-react";

// // // // // import { Calendar } from "./ui/calendar";
// // // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // // import { Button } from "./ui/button";
// // // // // import { cn } from "@/lib/utils";
// // // // // import { useRouter } from 'next/navigation';
// // // // // // import { start } from 'repl';

// // // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // // //   const [price, setPrice] = useState(0);
// // // // //   const [numPersons, setNumPersons] = useState(1);

// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     if (selectedDate) {
// // // // //       setPrice(sub.price * numPersons);
// // // // //     } else {
// // // // //       setPrice(0);
// // // // //     }
// // // // //   }, [sub.price, selectedDate , numPersons]);

// // // // //   async function clickToPay() {
// // // // //     const obj = {
// // // // //       subId: sub._id,
// // // // //       amount: sub.price * 1000,
// // // // //       description: `${sub.subscriptionType} subscription`,
// // // // //       start_date: selectedDate
// // // // //     //   numPersons,
// // // // //     };
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // // //         method: "POST",
// // // // //         body: JSON.stringify(obj),
// // // // //         credentials: "include",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //       });
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Error in paying");
// // // // //       }
// // // // //       const resData = await response.json();
// // // // //       window.location.href = resData.result.payUrl;
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   }

// // // // //   if (!isOpen1) return null;

// // // // //   return createPortal(
// // // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // // //         <button
// // // // //           onClick={onClose}
// // // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // // //         >
// // // // //           &times;
// // // // //         </button>

// // // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // // //           {/* Left Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <div className="flex flex-col items-center">
// // // // //               <img
// // // // //                 src="/openspace1.jpg"
// // // // //                 alt="Pack Full Time"
// // // // //                 className="w-full h-[300px] rounded-xl"
// // // // //               />
// // // // //               <h2 className="text-xl font-semibold mt-4">
// // // // //                 {sub.roomType} / {sub.subscriptionType}
// // // // //               </h2>
// // // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // // //               <div className="text-sm text-gray-700 mt-4">
// // // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // // //                   {sub.description.map((des, index) => (
// // // // //                     <li key={index}>{des}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // // //             <div className="space-y-4">
// // // // //               {/* Date Picker */}
// // // // //               <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Start Date:
// // // // //                 </label>
// // // // //                 <Popover modal={false}>
// // // // //                   <PopoverTrigger asChild>
// // // // //                     <Button
// // // // //                       variant="outline"
// // // // //                       className={cn(
// // // // //                         "w-full justify-start text-left font-normal",
// // // // //                         !selectedDate && "text-muted-foreground"
// // // // //                       )}
// // // // //                     >
// // // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // // //                     </Button>
// // // // //                   </PopoverTrigger>
// // // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // // //                     <Calendar
// // // // //                       mode="single"
// // // // //                       selected={selectedDate}
// // // // //                       onSelect={setSelectedDate}
// // // // //                       initialFocus
// // // // //                     />
// // // // //                   </PopoverContent>
// // // // //                 </Popover>
// // // // //               </div>

// // // // //               {/* Number of Persons */}
// // // // //               {sub.roomType !== "openspace" ? <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Number of Persons
// // // // //                 </label>
                
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min="1"
// // // // //                   value={numPersons}
// // // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // // //                   placeholder="Enter number of persons"
// // // // //                 />
// // // // //               </div>: null}

// // // // //               {/* Pricing */}
// // // // //               <div>
// // // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // // //                 <button
// // // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // // //                   onClick={() => {
// // // // //                     const id = localStorage.getItem('userId');
// // // // //                     if (id) {
// // // // //                       clickToPay();
// // // // //                     } else {
// // // // //                       router.push('/login');
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   Pay
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>,
// // // // //     document.getElementById('modal')
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { CalendarIcon } from "lucide-react";

// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // // import { start } from 'repl';

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);

// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     if (selectedDate) {
// // // //       setPrice(sub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [sub.price, selectedDate , numPersons]);

// // // //   async function clickToPay() {
// // // //     const obj = {
// // // //       subId: sub._id,
// // // //       amount: sub.price * 1000,
// // // //       description: `${sub.subscriptionType} subscription`,
// // // //       start_date: selectedDate
// // // //     //   numPersons,
// // // //     };
// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Error in paying");
// // // //       }
// // // //       const resData = await response.json();
// // // //       window.location.href = resData.result.payUrl;
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   }

// // // //   if (!isOpen1) return null;

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // //         >
// // // //           &times;
// // // //         </button>

// // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // //           {/* Left Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <div className="flex flex-col items-center">
// // // //               <img
// // // //                 src="/openspace1.jpg"
// // // //                 alt="Pack Full Time"
// // // //                 className="w-full h-[300px] rounded-xl"
// // // //               />
// // // //               <h2 className="text-xl font-semibold mt-4">
// // // //                 {sub.roomType} / {sub.subscriptionType}
// // // //               </h2>
// // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // //               <div className="text-sm text-gray-700 mt-4">
// // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // //                   {sub.description.map((des, index) => (
// // // //                     <li key={index}>{des}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // //             <div className="space-y-4">
// // // //               {/* Date Picker */}
// // // //               <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Start Date:
// // // //                 </label>
// // // //                 <Popover modal={false}>
// // // //                   <PopoverTrigger asChild>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       className={cn(
// // // //                         "w-full justify-start text-left font-normal",
// // // //                         !selectedDate && "text-muted-foreground"
// // // //                       )}
// // // //                     >
// // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // //                     </Button>
// // // //                   </PopoverTrigger>
// // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // //                     <Calendar
// // // //                       mode="single"
// // // //                       selected={selectedDate}
// // // //                       onSelect={setSelectedDate}
// // // //                       initialFocus
// // // //                     />
// // // //                   </PopoverContent>
// // // //                 </Popover>
// // // //               </div>

// // // //               {/* Number of Persons */}
// // // //               {sub.roomType !== "openspace" ? <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Number of Persons
// // // //                 </label>
                
// // // //                 <input
// // // //                   type="number"
// // // //                   min="1"
// // // //                   value={numPersons}
// // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // //                   placeholder="Enter number of persons"
// // // //                 />
// // // //               </div>: null}

// // // //               {/* Pricing */}
// // // //               <div>
// // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // //                 <button
// // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // //                   onClick={() => {
// // // //                     const id = localStorage.getItem('userId');
// // // //                     if (id) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Pay
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }

// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import { createPortal } from 'react-dom';
// // // // // import { format } from "date-fns";
// // // // // import { CalendarIcon } from "lucide-react";

// // // // // import { Calendar } from "./ui/calendar";
// // // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // // import { Button } from "./ui/button";
// // // // // import { cn } from "@/lib/utils";
// // // // // import { useRouter } from 'next/navigation';
// // // // // // import { start } from 'repl';

// // // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // // //   const [price, setPrice] = useState(0);
// // // // //   const [numPersons, setNumPersons] = useState(1);

// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     if (selectedDate) {
// // // // //       setPrice(sub.price * numPersons);
// // // // //     } else {
// // // // //       setPrice(0);
// // // // //     }
// // // // //   }, [sub.price, selectedDate , numPersons]);

// // // // //   async function clickToPay() {
// // // // //     const obj = {
// // // // //       subId: sub._id,
// // // // //       amount: sub.price * 1000,
// // // // //       description: `${sub.subscriptionType} subscription`,
// // // // //       start_date: selectedDate
// // // // //     //   numPersons,
// // // // //     };
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // // //         method: "POST",
// // // // //         body: JSON.stringify(obj),
// // // // //         credentials: "include",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //       });
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Error in paying");
// // // // //       }
// // // // //       const resData = await response.json();
// // // // //       window.location.href = resData.result.payUrl;
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   }

// // // // //   if (!isOpen1) return null;

// // // // //   return createPortal(
// // // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // // //         <button
// // // // //           onClick={onClose}
// // // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // // //         >
// // // // //           &times;
// // // // //         </button>

// // // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // // //           {/* Left Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <div className="flex flex-col items-center">
// // // // //               <img
// // // // //                 src="/openspace1.jpg"
// // // // //                 alt="Pack Full Time"
// // // // //                 className="w-full h-[300px] rounded-xl"
// // // // //               />
// // // // //               <h2 className="text-xl font-semibold mt-4">
// // // // //                 {sub.roomType} / {sub.subscriptionType}
// // // // //               </h2>
// // // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // // //               <div className="text-sm text-gray-700 mt-4">
// // // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // // //                   {sub.description.map((des, index) => (
// // // // //                     <li key={index}>{des}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // // //             <div className="space-y-4">
// // // // //               {/* Date Picker */}
// // // // //               <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Start Date:
// // // // //                 </label>
// // // // //                 <Popover modal={false}>
// // // // //                   <PopoverTrigger asChild>
// // // // //                     <Button
// // // // //                       variant="outline"
// // // // //                       className={cn(
// // // // //                         "w-full justify-start text-left font-normal",
// // // // //                         !selectedDate && "text-muted-foreground"
// // // // //                       )}
// // // // //                     >
// // // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // // //                     </Button>
// // // // //                   </PopoverTrigger>
// // // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // // //                     <Calendar
// // // // //                       mode="single"
// // // // //                       selected={selectedDate}
// // // // //                       onSelect={setSelectedDate}
// // // // //                       initialFocus
// // // // //                     />
// // // // //                   </PopoverContent>
// // // // //                 </Popover>
// // // // //               </div>

// // // // //               {/* Number of Persons */}
// // // // //               {sub.roomType !== "openspace" ? <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Number of Persons
// // // // //                 </label>
                
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min="1"
// // // // //                   value={numPersons}
// // // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // // //                   placeholder="Enter number of persons"
// // // // //                 />
// // // // //               </div>: null}

// // // // //               {/* Pricing */}
// // // // //               <div>
// // // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // // //                 <button
// // // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // // //                   onClick={() => {
// // // // //                     const id = localStorage.getItem('userId');
// // // // //                     if (id) {
// // // // //                       clickToPay();
// // // // //                     } else {
// // // // //                       router.push('/login');
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   Pay
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>,
// // // // //     document.getElementById('modal')
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { CalendarIcon } from "lucide-react";

// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // // import { start } from 'repl';

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);

// // // //   const router = useRouter();

// // // //   let image

// // // //   if(sub.subscriptionType === "daily" && sub.roomType === "openspace"){
// // // //     image = "/openSpaceDaily.png"
// // // //   }else if(sub.subscriptionType === "weekly" && sub.roomType === "openspace"){
// // // //     image = "/openSpaceWeekly.png"
// // // //   }else if(sub.subscriptionType === "monthly" && sub.roomType === "openspace"){
// // // //     image = "/openSpaceMonthly.png"
// // // //   }

// // // //   useEffect(() => {
// // // //     if (selectedDate) {
// // // //       setPrice(sub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [sub.price, selectedDate , numPersons]);

// // // //   async function clickToPay() {
// // // //     const obj = {
// // // //       subId: sub._id,
// // // //       amount: sub.price * 1000,
// // // //       description: `${sub.subscriptionType} subscription`,
// // // //       start_date: selectedDate
// // // //     //   numPersons,
// // // //     };
// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Error in paying");
// // // //       }
// // // //       const resData = await response.json();
// // // //       window.location.href = resData.result.payUrl;
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   }

// // // //   if (!isOpen1) return null;

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // //         >
// // // //           &times;
// // // //         </button>

// // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // //           {/* Left Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <div className="flex flex-col items-center">
// // // //               <img
// // // //                 src={image}
// // // //                 alt="Pack Full Time"
// // // //                 className="w-full h-[300px] rounded-xl"
// // // //               />
// // // //               <h2 className="text-xl font-semibold mt-4">
// // // //                 {sub.roomType} / {sub.subscriptionType}
// // // //               </h2>
// // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // //               <div className="text-sm text-gray-700 mt-4">
// // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // //                   {sub.description.map((des, index) => (
// // // //                     <li key={index}>{des}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // //             <div className="space-y-4">
// // // //               {/* Date Picker */}
// // // //               <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Start Date:
// // // //                 </label>
// // // //                 <Popover modal={false}>
// // // //                   <PopoverTrigger asChild>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       className={cn(
// // // //                         "w-full justify-start text-left font-normal",
// // // //                         !selectedDate && "text-muted-foreground"
// // // //                       )}
// // // //                     >
// // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // //                     </Button>
// // // //                   </PopoverTrigger>
// // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // //                     <Calendar
// // // //                       mode="single"
// // // //                       selected={selectedDate}
// // // //                       onSelect={setSelectedDate}
// // // //                       initialFocus
// // // //                     />
// // // //                   </PopoverContent>
// // // //                 </Popover>
// // // //               </div>

// // // //               {/* Number of Persons */}
// // // //               {sub.roomType !== "openspace" ? <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Number of Persons
// // // //                 </label>
                
// // // //                 <input
// // // //                   type="number"
// // // //                   min="1"
// // // //                   value={numPersons}
// // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // //                   placeholder="Enter number of persons"
// // // //                 />
// // // //               </div>: null}

// // // //               {/* Pricing */}
// // // //               <div>
// // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // //                 <button
// // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // //                   onClick={() => {
// // // //                     const id = localStorage.getItem('userId');
// // // //                     if (id) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Pay
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }


// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import { createPortal } from 'react-dom';
// // // // // import { format } from "date-fns";
// // // // // import { CalendarIcon } from "lucide-react";

// // // // // import { Calendar } from "./ui/calendar";
// // // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // // import { Button } from "./ui/button";
// // // // // import { cn } from "@/lib/utils";
// // // // // import { useRouter } from 'next/navigation';
// // // // // // import { start } from 'repl';

// // // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // // //   const [price, setPrice] = useState(0);
// // // // //   const [numPersons, setNumPersons] = useState(1);

// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     if (selectedDate) {
// // // // //       setPrice(sub.price * numPersons);
// // // // //     } else {
// // // // //       setPrice(0);
// // // // //     }
// // // // //   }, [sub.price, selectedDate , numPersons]);

// // // // //   async function clickToPay() {
// // // // //     const obj = {
// // // // //       subId: sub._id,
// // // // //       amount: sub.price * 1000,
// // // // //       description: `${sub.subscriptionType} subscription`,
// // // // //       start_date: selectedDate
// // // // //     //   numPersons,
// // // // //     };
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // // //         method: "POST",
// // // // //         body: JSON.stringify(obj),
// // // // //         credentials: "include",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //       });
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Error in paying");
// // // // //       }
// // // // //       const resData = await response.json();
// // // // //       window.location.href = resData.result.payUrl;
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   }

// // // // //   if (!isOpen1) return null;

// // // // //   return createPortal(
// // // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // // //         <button
// // // // //           onClick={onClose}
// // // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // // //         >
// // // // //           &times;
// // // // //         </button>

// // // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // // //           {/* Left Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <div className="flex flex-col items-center">
// // // // //               <img
// // // // //                 src="/openspace1.jpg"
// // // // //                 alt="Pack Full Time"
// // // // //                 className="w-full h-[300px] rounded-xl"
// // // // //               />
// // // // //               <h2 className="text-xl font-semibold mt-4">
// // // // //                 {sub.roomType} / {sub.subscriptionType}
// // // // //               </h2>
// // // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // // //               <div className="text-sm text-gray-700 mt-4">
// // // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // // //                   {sub.description.map((des, index) => (
// // // // //                     <li key={index}>{des}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Side */}
// // // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // // //             <div className="space-y-4">
// // // // //               {/* Date Picker */}
// // // // //               <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Start Date:
// // // // //                 </label>
// // // // //                 <Popover modal={false}>
// // // // //                   <PopoverTrigger asChild>
// // // // //                     <Button
// // // // //                       variant="outline"
// // // // //                       className={cn(
// // // // //                         "w-full justify-start text-left font-normal",
// // // // //                         !selectedDate && "text-muted-foreground"
// // // // //                       )}
// // // // //                     >
// // // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // // //                     </Button>
// // // // //                   </PopoverTrigger>
// // // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // // //                     <Calendar
// // // // //                       mode="single"
// // // // //                       selected={selectedDate}
// // // // //                       onSelect={setSelectedDate}
// // // // //                       initialFocus
// // // // //                     />
// // // // //                   </PopoverContent>
// // // // //                 </Popover>
// // // // //               </div>

// // // // //               {/* Number of Persons */}
// // // // //               {sub.roomType !== "openspace" ? <div>
// // // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // // //                   Number of Persons
// // // // //                 </label>
                
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min="1"
// // // // //                   value={numPersons}
// // // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // // //                   placeholder="Enter number of persons"
// // // // //                 />
// // // // //               </div>: null}

// // // // //               {/* Pricing */}
// // // // //               <div>
// // // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // // //                 <button
// // // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // // //                   onClick={() => {
// // // // //                     const id = localStorage.getItem('userId');
// // // // //                     if (id) {
// // // // //                       clickToPay();
// // // // //                     } else {
// // // // //                       router.push('/login');
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   Pay
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>,
// // // // //     document.getElementById('modal')
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { CalendarIcon } from "lucide-react";

// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // // import { start } from 'repl';

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);

// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     if (selectedDate) {
// // // //       setPrice(sub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [sub.price, selectedDate , numPersons]);

// // // //   async function clickToPay() {
// // // //     const obj = {
// // // //       subId: sub._id,
// // // //       amount: sub.price * 1000,
// // // //       description: `${sub.subscriptionType} subscription`,
// // // //       start_date: selectedDate
// // // //     //   numPersons,
// // // //     };
// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Error in paying");
// // // //       }
// // // //       const resData = await response.json();
// // // //       window.location.href = resData.result.payUrl;
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   }

// // // //   let image

// // // //   if(sub.subscriptionType === 'daily' && sub.roomType){
// // // //     image = '/openspacedaily.png'
// // // //   }

// // // //   if (!isOpen1) return null;

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // //         >
// // // //           &times;
// // // //         </button>

// // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // //           {/* Left Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <div className="flex flex-col items-center">
// // // //               {/* <img
// // // //                 src={image}
// // // //                 alt="Pack Full Time"
// // // //                 className="w-full h-[300px] rounded-xl"
// // // //               /> */}
// // // //               <img
// // // //   src={image}
// // // //   alt="Pack Full Time"
// // // //   className="w-full max-w-[400px] h-auto rounded-xl object-contain"
// // // // />
// // // //               <h2 className="text-xl font-semibold mt-4">
// // // //                 {sub.roomType} / {sub.subscriptionType}
// // // //               </h2>
// // // //               <p className="text-gray-600 text-sm mt-2">Crédits de réservation</p>

// // // //               <div className="text-sm text-gray-700 mt-4">
// // // //                 <p>We offer you a comfortable and well-equipped workspace:</p>
// // // //                 <ul className="list-disc pl-6 mt-2 space-y-1">
// // // //                   {sub.description.map((des, index) => (
// // // //                     <li key={index}>{des}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // //             <div className="space-y-4">
// // // //               {/* Date Picker */}
// // // //               <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Start Date:
// // // //                 </label>
// // // //                 <Popover modal={false}>
// // // //                   <PopoverTrigger asChild>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       className={cn(
// // // //                         "w-full justify-start text-left font-normal",
// // // //                         !selectedDate && "text-muted-foreground"
// // // //                       )}
// // // //                     >
// // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // //                     </Button>
// // // //                   </PopoverTrigger>
// // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // //                     <Calendar
// // // //                       mode="single"
// // // //                       selected={selectedDate}
// // // //                       onSelect={setSelectedDate}
// // // //                       initialFocus
// // // //                     />
// // // //                   </PopoverContent>
// // // //                 </Popover>
// // // //               </div>

// // // //               {/* Number of Persons */}
// // // //               {sub.roomType !== "openspace" ? <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Number of Persons
// // // //                 </label>
                
// // // //                 <input
// // // //                   type="number"
// // // //                   min="1"
// // // //                   value={numPersons}
// // // //                   onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // //                   className="w-full mt-1 p-2 border rounded-md"
// // // //                   placeholder="Enter number of persons"
// // // //                 />
// // // //               </div>: null}

// // // //               {/* Pricing */}
// // // //               <div>
// // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // //                 <button
// // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // //                   onClick={() => {
// // // //                     const id = localStorage.getItem('userId');
// // // //                     if (id) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Pay
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }


// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { CalendarIcon } from "lucide-react";

// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // import { useUser } from "@/app/context/UserContext"     // Adjust path based on your structure

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);
// // // //   const [desolage , setDesolage] = useState(null)
// // // //   const { idUser, loading: userLoading } = useUser();

// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     if (selectedDate) {
// // // //       setPrice(sub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [sub.price, selectedDate, numPersons]);

// // // //   async function clickToPay() {
// // // //     const obj = {
// // // //       subId: sub._id,
// // // //       amount: sub.price * 1000,
// // // //       description: `${sub.subscriptionType} subscription`,
// // // //       start_date: selectedDate
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });
// // // //       if (!response.ok) {
// // // //         throw new Error("Error in paying: " + response.statusText);
// // // //       }

// // // //       const resData = await response.json();
// // // //       console.log(response.status)

// // // //       console.log('url: '+resData?.result?.payUrl)

// // // //       if(response.status === 210){
// // // //         console.log(resData.message)
// // // //         setDesolage(resData.message)
        
// // // //       }else if(response.status === 200){
// // // //         console.log('hi i am here')
// // // //         window.location.href = resData.result.payUrl;
// // // //       }
// // // //       console.log(resData)
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   }
// // // //   console.log(sub?.table_id?.Name )
// // // //   // console.log(sub.subscriptionType)

// // // //   let image;
// // // //   if (sub.subscriptionType === 'daily' && sub?.table_id?.Name === 'Open space') {
// // // //     image = '/openspacedaily.png';
// // // //   }else if(sub.subscriptionType === 'weekly' && sub?.table_id?.Name === 'Open space'){
// // // //     image = '/openspaceweekly.png'
// // // //   }else if(sub.subscriptionType === 'monthly (5h)' && sub?.table_id?.Name === 'Open space'){
// // // //     image='/openspacemonthly5h.png'
// // // //   }else if(sub.subscriptionType === 'monthly' && sub?.table_id?.Name === 'Open space'){
// // // //     image='/openspacemonthly.png'
// // // //   }else if(sub.subscriptionType === '1/2 day' && sub?.table_id?.Name === 'Meeting Room 1'){
// // // //     image='/meetingroom1halfday.png'
// // // //   }else if(sub.subscriptionType === 'day' && sub?.table_id?.Name === 'Meeting Room 1'){
// // // //     image='/meetingroom1daily.png'
// // // //   }else if(sub.subscriptionType === 'day' && sub?.table_id?.Name === 'Meeting Room 2'){
// // // //     image='/meetingroom1day.png'
// // // //   }else if(sub.subscriptionType === 'weekly' && sub?.table_id?.Name === 'private office premium plus'){
// // // //     image='/officeroomweekly.png'
// // // //   }else if(sub.subscriptionType === 'monthly' && sub?.table_id?.Name === 'private office'){
// // // //     image='/officeroommonthly.png'
// // // //   }

// // // //   if (!isOpen1) return null;

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // //         >
// // // //           &times;
// // // //         </button>

// // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // //           {/* Left Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-2">
// // // //             <div className="flex flex-col items-center">
// // // //               <img
// // // //                 src={image}
// // // //                 alt="Pack Full Time"
// // // //                 className="w-full max-w-[400px] h-auto rounded-xl object-contain"
// // // //               />
// // // //               <h2 className="text-xl font-semibold mt-4">
// // // //                 {sub?.table_id?.Name ? sub.table_id.Name : 'openspace'} / {sub.subscriptionType}
// // // //               </h2>

              
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Side */}
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // //             <div className="space-y-4">
// // // //               {/* Date Picker */}
// // // //               <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                   Start Date:
// // // //                 </label>
// // // //                 <Popover modal={false}>
// // // //                   <PopoverTrigger asChild>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       className={cn(
// // // //                         "w-full justify-start text-left font-normal",
// // // //                         !selectedDate && "text-muted-foreground"
// // // //                       )}
// // // //                     >
// // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // //                     </Button>
// // // //                   </PopoverTrigger>
// // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // //                     <Calendar
// // // //                       mode="single"
// // // //                       selected={selectedDate}
// // // //                       onSelect={setSelectedDate}
// // // //                       initialFocus
// // // //                     />
// // // //                   </PopoverContent>
// // // //                 </Popover>
// // // //               </div>

// // // //               {/* Number of Persons */}
// // // //               {sub.roomType !== "openspace" && (
// // // //                 <div>
// // // //                   <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                     Number of Persons
// // // //                   </label>
// // // //                   <input
// // // //                     type="number"
// // // //                     min="1"
// // // //                     value={numPersons}
// // // //                     onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // //                     className="w-full mt-1 p-2 border rounded-md"
// // // //                     placeholder="Enter number of persons"
// // // //                   />
// // // //                 </div>
// // // //               )}

// // // //               {/* Pricing */}
// // // //               <div>
// // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>


// // // //                 <button
// // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // //                   onClick={() => {
// // // //                     if (idUser) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Pay
// // // //                 </button>

// // // //                 {/* <p className=''>{desolage}</p> */}
// // // //                 <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
// // // //                     <span className="font-medium">{desolage}</span> 
// // // //                 </div>

// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }
// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { CalendarIcon } from "lucide-react";
// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // import { useUser } from "@/app/context/UserContext";

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [localSub, setLocalSub] = useState(null); // Local copy
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);
// // // //   const [desolage, setDesolage] = useState(null);
// // // //   const { idUser } = useUser();
// // // //   const router = useRouter();

// // // //   // Clone sub when modal opens
// // // //   useEffect(() => {
// // // //     if (isOpen1 && sub) {
// // // //       setLocalSub({ ...sub }); // Shallow clone to detach reference
// // // //     }
// // // //   }, [isOpen1, sub]);

// // // //   useEffect(() => {
// // // //     if (selectedDate && localSub) {
// // // //       setPrice(localSub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [localSub, selectedDate, numPersons]);

// // // //   async function clickToPay() {
// // // //     const obj = {
// // // //       subId: localSub._id,
// // // //       amount: localSub.price * 1000,
// // // //       description: `${localSub.subscriptionType} subscription`,
// // // //       start_date: selectedDate
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });

// // // //       const resData = await response.json();

// // // //       if (response.status === 210) {
// // // //         setDesolage(resData.message);
// // // //       } else if (response.status === 200) {
// // // //         window.location.href = resData.result.payUrl;
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   }

// // // //   if (!isOpen1 || !localSub) return null;

// // // //   let image;
// // // //   const { subscriptionType, table_id, roomType } = localSub;
// // // //   console.log(subscriptionType)
// // // //   console.log(table_id?.Name)

// // // //   if (subscriptionType === 'daily' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacedaily.png';
// // // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'Open space') {
// // // //     image = '/openspaceweekly.png';
// // // //   } else if (subscriptionType === 'monthly (5h)' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacemonthly5h.png';
// // // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacemonthly.png';
// // // //   } else if (subscriptionType === '1/2 day' && table_id?.Name === 'Meeting Room 1') {
// // // //     image = '/meetingroom1halfday.png';
// // // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 1') {
// // // //     image = '/meetingroom1daily.png';
// // // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 2') {
// // // //     image = '/meetingroom1day.png';
// // // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'private office premium plus') {
// // // //     image = '/officeroomweekly.png';
// // // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'private office') {
// // // //     image = '/officeroommonthly.png';
// // // //   }

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-center items-center px-4">
// // // //       <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
// // // //         >
// // // //           &times;
// // // //         </button>

// // // //         <div className="flex flex-col lg:flex-row gap-6 mt-6">
// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-2">
// // // //             <div className="flex flex-col items-center">
// // // //               <img
// // // //                 src={image}
// // // //                 alt="Subscription"
// // // //                 className="w-full max-w-[400px] h-auto rounded-xl object-contain"
// // // //               />
// // // //               <h2 className="text-xl font-semibold mt-4">
// // // //                 {table_id?.Name ?? 'openspace'} / {subscriptionType}
// // // //               </h2>
// // // //             </div>
// // // //           </div>

// // // //           <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
// // // //             <h3 className="text-lg font-semibold mb-4">Subscriptions</h3>

// // // //             <div className="space-y-4">
// // // //               <div>
// // // //                 <label className="text-sm font-medium text-gray-700 block mb-1">Start Date:</label>
// // // //                 <Popover modal={false}>
// // // //                   <PopoverTrigger asChild>
// // // //                     <Button
// // // //                       variant="outline"
// // // //                       className={cn(
// // // //                         "w-full justify-start text-left font-normal",
// // // //                         !selectedDate && "text-muted-foreground"
// // // //                       )}
// // // //                     >
// // // //                       <CalendarIcon className="mr-2 h-4 w-4" />
// // // //                       {selectedDate ? format(selectedDate, "PPP") : <span>Choose Date</span>}
// // // //                     </Button>
// // // //                   </PopoverTrigger>
// // // //                   <PopoverContent className="w-auto p-0 z-[9999]" align="start" portal={false}>
// // // //                     <Calendar
// // // //                       mode="single"
// // // //                       selected={selectedDate}
// // // //                       onSelect={setSelectedDate}
// // // //                       initialFocus
// // // //                     />
// // // //                   </PopoverContent>
// // // //                 </Popover>
// // // //               </div>

// // // //               {roomType !== "openspace" && (
// // // //                 <div>
// // // //                   <label className="text-sm font-medium text-gray-700 block mb-1">
// // // //                     Number of Persons
// // // //                   </label>
// // // //                   <input
// // // //                     type="number"
// // // //                     min="1"
// // // //                     value={numPersons}
// // // //                     onChange={(e) => setNumPersons(parseInt(e.target.value))}
// // // //                     className="w-full mt-1 p-2 border rounded-md"
// // // //                     placeholder="Enter number of persons"
// // // //                   />
// // // //                 </div>
// // // //               )}

// // // //               <div>
// // // //                 <h4 className="font-semibold text-gray-800">Prix</h4>
// // // //                 <p className="text-sm">Prix par mois d'abonnement</p>
// // // //                 <p className="text-xl font-bold">{price} DT/Mois</p>

// // // //                 <button
// // // //                   className="mt-4 w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
// // // //                   onClick={() => {
// // // //                     if (idUser) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Pay
// // // //                 </button>

// // // //                 {desolage && (
// // // //                   <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
// // // //                     <span className="font-medium">{desolage}</span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }
// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { createPortal } from 'react-dom';
// // // // import { format } from "date-fns";
// // // // import { 
// // // //   CalendarIcon, 
// // // //   X, 
// // // //   Users, 
// // // //   Calendar as CalendarIcon2, 
// // // //   CreditCard,
// // // //   Loader2
// // // // } from "lucide-react";
// // // // import { Calendar } from "./ui/calendar";
// // // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // // import { Button } from "./ui/button";
// // // // import { cn } from "@/lib/utils";
// // // // import { useRouter } from 'next/navigation';
// // // // import { useUser } from "@/app/context/UserContext";
// // // // import { motion } from 'framer-motion';

// // // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // // //   const [localSub, setLocalSub] = useState(null);
// // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // //   const [price, setPrice] = useState(0);
// // // //   const [numPersons, setNumPersons] = useState(1);
// // // //   const [desolage, setDesolage] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const { idUser } = useUser();
// // // //   const router = useRouter();

// // // //   useEffect(() => {
// // // //     if (isOpen1 && sub) {
// // // //       setLocalSub({ ...sub });
// // // //       // Reset state when modal opens
// // // //       setSelectedDate(null);
// // // //       setNumPersons(1);
// // // //       setDesolage(null);
// // // //     }
// // // //   }, [isOpen1, sub]);

// // // //   useEffect(() => {
// // // //     if (selectedDate && localSub) {
// // // //       setPrice(localSub.price * numPersons);
// // // //     } else {
// // // //       setPrice(0);
// // // //     }
// // // //   }, [localSub, selectedDate, numPersons]);

// // // //   // Add body scroll lock when modal is open
// // // //   useEffect(() => {
// // // //     if (isOpen1) {
// // // //       document.body.style.overflow = 'hidden';
// // // //     } else {
// // // //       document.body.style.overflow = 'auto';
// // // //     }
// // // //     return () => {
// // // //       document.body.style.overflow = 'auto';
// // // //     };
// // // //   }, [isOpen1]);

// // // //   async function clickToPay() {
// // // //     if (!selectedDate) {
// // // //       setDesolage("Please select a start date");
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);
// // // //     setDesolage(null);
    
// // // //     const obj = {
// // // //       subId: localSub._id,
// // // //       amount: localSub.price * numPersons * 1000,
// // // //       description: `${localSub.subscriptionType} subscription for ${localSub.table_id?.Name || 'workspace'}`,
// // // //       start_date: selectedDate
// // // //     };

// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // //         method: "POST",
// // // //         body: JSON.stringify(obj),
// // // //         credentials: "include",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });

// // // //       const resData = await response.json();

// // // //       if (response.status === 210) {
// // // //         setDesolage(resData.message);
// // // //       } else if (response.status === 200) {
// // // //         window.location.href = resData.result.payUrl;
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setDesolage("An error occurred. Please try again.");
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   }

// // // //   if (!isOpen1 || !localSub) return null;

// // // //   let image;
// // // //   const { subscriptionType, table_id, roomType } = localSub;
  
// // // //   if (subscriptionType === 'daily' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacedaily.png';
// // // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'Open space') {
// // // //     image = '/openspaceweekly.png';
// // // //   } else if (subscriptionType === 'monthly (5h)' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacemonthly5h.png';
// // // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'Open space') {
// // // //     image = '/openspacemonthly.png';
// // // //   } else if (subscriptionType === '1/2 day' && table_id?.Name === 'Meeting Room 1') {
// // // //     image = '/meetingroom1halfday.png';
// // // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 1') {
// // // //     image = '/meetingroom1daily.png';
// // // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 2') {
// // // //     image = '/meetingroom1day.png';
// // // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'private office premium plus') {
// // // //     image = '/officeroomweekly.png';
// // // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'private office') {
// // // //     image = '/officeroommonthly.png';
// // // //   }

// // // //   return createPortal(
// // // //     <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 backdrop-blur-sm bg-black/60 transition-all duration-300">
// // // //       <motion.div 
// // // //         initial={{ opacity: 0, scale: 0.95 }}
// // // //         animate={{ opacity: 1, scale: 1 }}
// // // //         exit={{ opacity: 0, scale: 0.95 }}
// // // //         transition={{ duration: 0.2 }}
// // // //         className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
// // // //       >
// // // //         <div className="relative">
// // // //           {/* Header with gradient background */}
// // // //           <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
// // // //             <h2 className="text-2xl font-bold">{table_id?.Name || 'Open Space'}</h2>
// // // //             <p className="text-blue-100">{subscriptionType} Subscription</p>
            
// // // //             <button
// // // //               onClick={onClose}
// // // //               className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
// // // //               aria-label="Close modal"
// // // //             >
// // // //               <X size={20} />
// // // //             </button>
// // // //           </div>

// // // //           <div className="flex flex-col lg:flex-row">
// // // //             {/* Left side - Image and details */}
// // // //             <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-50">
// // // //               <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6 w-full max-w-md aspect-video relative">
// // // //                 <img
// // // //                   src={image || '/placeholder-workspace.jpg'}
// // // //                   alt={`${table_id?.Name || 'Workspace'} - ${subscriptionType}`}
// // // //                   className="w-full h-full object-cover"
// // // //                 />
// // // //               </div>

// // // //               <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-100 shadow-sm">
// // // //                 <h3 className="font-medium text-gray-700 mb-4">Subscription Details</h3>
                
// // // //                 <div className="space-y-3 text-sm">
// // // //                   <div className="flex items-center gap-2">
// // // //                     <div className="bg-blue-100 p-2 rounded-full">
// // // //                       <Users size={16} className="text-blue-600" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="text-gray-500">Space Type</p>
// // // //                       <p className="font-medium">{table_id?.Name || 'Open Space'}</p>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="flex items-center gap-2">
// // // //                     <div className="bg-blue-100 p-2 rounded-full">
// // // //                       <CalendarIcon2 size={16} className="text-blue-600" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="text-gray-500">Subscription Type</p>
// // // //                       <p className="font-medium">{subscriptionType}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Right side - Form */}
// // // //             <div className="w-full lg:w-1/2 p-8">
// // // //               <h3 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Subscription</h3>

// // // //               <div className="space-y-6">
// // // //                 <div>
// // // //                   <label className="text-sm font-medium text-gray-700 block mb-2">
// // // //                     Start Date <span className="text-red-500">*</span>
// // // //                   </label>
// // // //                   <Popover modal={false}>
// // // //                     <PopoverTrigger asChild>
// // // //                       <Button
// // // //                         variant="outline"
// // // //                         className={cn(
// // // //                           "w-full justify-start text-left font-normal border-2 rounded-xl p-4 h-auto",
// // // //                           !selectedDate && "text-gray-400",
// // // //                           selectedDate && "border-blue-500 text-blue-700"
// // // //                         )}
// // // //                       >
// // // //                         <CalendarIcon className="mr-2 h-5 w-5" />
// // // //                         {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
// // // //                       </Button>
// // // //                     </PopoverTrigger>
// // // //                     <PopoverContent className="w-auto p-0 z-[9999]" align="start">
// // // //                       <Calendar
// // // //                         mode="single"
// // // //                         selected={selectedDate}
// // // //                         onSelect={setSelectedDate}
// // // //                         initialFocus
// // // //                         disabled={(date) => date < new Date()}
// // // //                         className="rounded-lg border-0"
// // // //                       />
// // // //                     </PopoverContent>
// // // //                   </Popover>
// // // //                 </div>

// // // //                 {roomType !== "openspace" && (
// // // //                   <div>
// // // //                     <label className="text-sm font-medium text-gray-700 block mb-2">
// // // //                       Number of Persons
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <input
// // // //                         type="number"
// // // //                         min="1"
// // // //                         value={numPersons}
// // // //                         onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
// // // //                         className="w-full p-4 border-2 rounded-xl focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all"
// // // //                         placeholder="Enter number of persons"
// // // //                       />
// // // //                       <div className="absolute inset-y-0 right-0 flex">
// // // //                         <button 
// // // //                           className="px-4 text-gray-500 hover:text-gray-700"
// // // //                           onClick={() => setNumPersons(prev => Math.max(1, prev - 1))}
// // // //                         >
// // // //                           -
// // // //                         </button>
// // // //                         <button 
// // // //                           className="px-4 text-gray-500 hover:text-gray-700"
// // // //                           onClick={() => setNumPersons(prev => prev + 1)}
// // // //                         >
// // // //                           +
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Price summary card */}
// // // //                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
// // // //                   <div className="flex justify-between items-center mb-4">
// // // //                     <h4 className="font-semibold text-gray-800">Summary</h4>
// // // //                     <div className="bg-black-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
// // // //                       {subscriptionType}
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="space-y-2 text-sm mb-4">
// // // //                     <div className="flex justify-between">
// // // //                       <span className="text-gray-600">Base price</span>
// // // //                       <span>{localSub?.price || 0} DT</span>
// // // //                     </div>
// // // //                     {numPersons > 1 && (
// // // //                       <div className="flex justify-between">
// // // //                         <span className="text-gray-600">Persons</span>
// // // //                         <span>× {numPersons}</span>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
                  
// // // //                   <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
// // // //                     <div>
// // // //                       <p className="text-sm text-gray-500">Total amount</p>
// // // //                       <p className="text-2xl font-bold text-black-700">{price} DT</p>
// // // //                     </div>
// // // //                     <div className="text-xs text-gray-500">per month</div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {desolage && (
// // // //                   <div className="p-4 text-sm rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800" role="alert">
// // // //                     <span className="font-medium">{desolage}</span>
// // // //                   </div>
// // // //                 )}

// // // //                 <Button
// // // //                   className={`w-full py-6 text-lg font-medium rounded-xl ${
// // // //                     !selectedDate 
// // // //                       ? 'bg-gray-300 cursor-not-allowed' 
// // // //                       : 'bg-Black-700 hover:bg-[#07ebbd]'
// // // //                   }`}
// // // //                   disabled={!selectedDate || isLoading}
// // // //                   onClick={() => {
// // // //                     if (idUser) {
// // // //                       clickToPay();
// // // //                     } else {
// // // //                       router.push('/login');
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   {isLoading ? (
// // // //                     <>
// // // //                       <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
// // // //                     </>
// // // //                   ) : (
// // // //                     <>
// // // //                       <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
// // // //                     </>
// // // //                   )}
// // // //                 </Button>
                
// // // //                 {!idUser && (
// // // //                   <p className="text-sm text-center text-gray-500 mt-2">
// // // //                     You need to be logged in to complete this subscription
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>,
// // // //     document.getElementById('modal')
// // // //   );
// // // // }

// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import { createPortal } from 'react-dom';
// // // import { format } from "date-fns";
// // // import { 
// // //   CalendarIcon, 
// // //   X, 
// // //   Users, 
// // //   Calendar as CalendarIcon2, 
// // //   CreditCard,
// // //   Loader2
// // // } from "lucide-react";
// // // import { Calendar } from "./ui/calendar";
// // // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // // import { Button } from "./ui/button";
// // // import { cn } from "@/lib/utils";
// // // import { useRouter } from 'next/navigation';
// // // import { useUser } from "@/app/context/UserContext";
// // // import { motion } from 'framer-motion';

// // // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// // //   const [localSub, setLocalSub] = useState(null);
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [price, setPrice] = useState(0);
// // //   const [numPersons, setNumPersons] = useState(1);
// // //   const [desolage, setDesolage] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const { idUser } = useUser();
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     if (isOpen1 && sub) {
// // //       setLocalSub({ ...sub });
// // //       // Reset state when modal opens
// // //       setSelectedDate(null);
// // //       setNumPersons(1);
// // //       setDesolage(null);
// // //     }
// // //   }, [isOpen1, sub]);

// // //   useEffect(() => {
// // //     if (selectedDate && localSub) {
// // //       setPrice(localSub.price * numPersons);
// // //     } else {
// // //       setPrice(0);
// // //     }
// // //   }, [localSub, selectedDate, numPersons]);

// // //   // Add body scroll lock when modal is open
// // //   useEffect(() => {
// // //     if (isOpen1) {
// // //       document.body.style.overflow = 'hidden';
// // //     } else {
// // //       document.body.style.overflow = 'auto';
// // //     }
// // //     return () => {
// // //       document.body.style.overflow = 'auto';
// // //     };
// // //   }, [isOpen1]);

// // //   async function clickToPay() {
// // //     if (!selectedDate) {
// // //       setDesolage("Please select a start date");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setDesolage(null);
    
// // //     const obj = {
// // //       subId: localSub._id,
// // //       amount: localSub.price * numPersons * 1000,
// // //       description: `${localSub.subscriptionType} subscription for ${localSub.table_id?.Name || 'workspace'}`,
// // //       start_date: selectedDate
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // //         method: "POST",
// // //         body: JSON.stringify(obj),
// // //         credentials: "include",
// // //         headers: { "Content-Type": "application/json" },
// // //       });

// // //       const resData = await response.json();

// // //       if (response.status === 210) {
// // //         setDesolage(resData.message);
// // //       } else if (response.status === 200) {
// // //         window.location.href = resData.result.payUrl;
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       setDesolage("An error occurred. Please try again.");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   }

// // //   if (!isOpen1 || !localSub) return null;

// // //   let image;
// // //   const { subscriptionType, table_id, roomType } = localSub;
  
// // //   if (subscriptionType === 'daily' && table_id?.Name === 'Open space') {
// // //     image = '/openspacedaily.png';
// // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'Open space') {
// // //     image = '/openspaceweekly.png';
// // //   } else if (subscriptionType === 'monthly (5h)' && table_id?.Name === 'Open space') {
// // //     image = '/openspacemonthly5h.png';
// // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'Open space') {
// // //     image = '/openspacemonthly.png';
// // //   } else if (subscriptionType === '1/2 day' && table_id?.Name === 'Meeting Room 1') {
// // //     image = '/meetingroom1halfday.png';
// // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 1') {
// // //     image = '/meetingroom1daily.png';
// // //   } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 2') {
// // //     image = '/meetingroom1day.png';
// // //   } else if (subscriptionType === 'weekly' && table_id?.Name === 'private office premium plus') {
// // //     image = '/officeroomweekly.png';
// // //   } else if (subscriptionType === 'monthly' && table_id?.Name === 'private office') {
// // //     image = '/officeroommonthly.png';
// // //   }

// // //   return createPortal(
// // //     <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 backdrop-blur-sm bg-black/60 transition-all duration-300">
// // //       <motion.div 
// // //         initial={{ opacity: 0, scale: 0.95 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         exit={{ opacity: 0, scale: 0.95 }}
// // //         transition={{ duration: 0.2 }}
// // //         className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
// // //       >
// // //         <div className="relative">
// // //           {/* Header with gradient background */}
// // //           <div className="bg-gradient-to-r from-[#07ebbd] to-[#07cba3] p-6 text-white">
// // //             <h2 className="text-2xl font-bold">{table_id?.Name || 'Open Space'}</h2>
// // //             <p className="text-white/80">{subscriptionType} Subscription</p>
            
// // //             <button
// // //               onClick={onClose}
// // //               className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
// // //               aria-label="Close modal"
// // //             >
// // //               <X size={20} />
// // //             </button>
// // //           </div>

// // //           <div className="flex flex-col lg:flex-row">
// // //             {/* Left side - Image and details */}
// // //             <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-50">
// // //               <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6 w-full max-w-md aspect-video relative">
// // //                 <img
// // //                   src={image || '/placeholder-workspace.jpg'}
// // //                   alt={`${table_id?.Name || 'Workspace'} - ${subscriptionType}`}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>

// // //               <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-100 shadow-sm">
// // //                 <h3 className="font-medium text-gray-700 mb-4">Subscription Details</h3>
                
// // //                 <div className="space-y-3 text-sm">
// // //                   <div className="flex items-center gap-2">
// // //                                           <div className="bg-[#07ebbd]/10 p-2 rounded-full">
// // //                       <Users size={16} className="text-[#07ebbd]" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-gray-500">Space Type</p>
// // //                       <p className="font-medium">{table_id?.Name || 'Open Space'}</p>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="flex items-center gap-2">
// // //                                           <div className="bg-[#07ebbd]/10 p-2 rounded-full">
// // //                       <CalendarIcon2 size={16} className="text-[#07ebbd]" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-gray-500">Subscription Type</p>
// // //                       <p className="font-medium">{subscriptionType}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Right side - Form */}
// // //             <div className="w-full lg:w-1/2 p-8">
// // //               <h3 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Subscription</h3>

// // //               <div className="space-y-6">
// // //                 <div>
// // //                   <label className="text-sm font-medium text-gray-700 block mb-2">
// // //                     Start Date <span className="text-red-500">*</span>
// // //                   </label>
// // //                   <Popover modal={false}>
// // //                     <PopoverTrigger asChild>
// // //                       <Button
// // //                         variant="outline"
// // //                         className={cn(
// // //                           "w-full justify-start text-left font-normal border-2 rounded-xl p-4 h-auto",
// // //                           !selectedDate && "text-gray-400",
// // //                           selectedDate && "border-[#07ebbd] text-[#07ebbd]"
// // //                         )}
// // //                       >
// // //                         <CalendarIcon className="mr-2 h-5 w-5" />
// // //                         {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
// // //                       </Button>
// // //                     </PopoverTrigger>
// // //                     <PopoverContent className="w-auto p-0 z-[9999]" align="start">
// // //                       <Calendar
// // //                         mode="single"
// // //                         selected={selectedDate}
// // //                         onSelect={setSelectedDate}
// // //                         initialFocus
// // //                         disabled={(date) => date < new Date()}
// // //                         className="rounded-lg border-0"
// // //                       />
// // //                     </PopoverContent>
// // //                   </Popover>
// // //                 </div>

// // //                 {roomType !== "openspace" && (
// // //                   <div>
// // //                     <label className="text-sm font-medium text-gray-700 block mb-2">
// // //                       Number of Persons
// // //                     </label>
// // //                     <div className="relative">
// // //                       <input
// // //                         type="number"
// // //                         min="1"
// // //                         value={numPersons}
// // //                         onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
// // //                         className="w-full p-4 border-2 rounded-xl focus:border-[#07ebbd] focus:ring focus:ring-[#07ebbd]/20 focus:ring-opacity-50 outline-none transition-all"
// // //                         placeholder="Enter number of persons"
// // //                       />
// // //                       <div className="absolute inset-y-0 right-0 flex">
// // //                         <button 
// // //                           className="px-4 text-gray-500 hover:text-gray-700"
// // //                           onClick={() => setNumPersons(prev => Math.max(1, prev - 1))}
// // //                         >
// // //                           -
// // //                         </button>
// // //                         <button 
// // //                           className="px-4 text-gray-500 hover:text-gray-700"
// // //                           onClick={() => setNumPersons(prev => prev + 1)}
// // //                         >
// // //                           +
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* Price summary card */}
// // //                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
// // //                   <div className="flex justify-between items-center mb-4">
// // //                     <h4 className="font-semibold text-gray-800">Summary</h4>
// // //                     <div className="bg-[#07ebbd]/10 text-[#07ebbd] text-xs font-medium px-2.5 py-0.5 rounded-full">
// // //                       {subscriptionType}
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="space-y-2 text-sm mb-4">
// // //                     <div className="flex justify-between">
// // //                       <span className="text-gray-600">Base price</span>
// // //                       <span>{localSub?.price || 0} DT</span>
// // //                     </div>
// // //                     {numPersons > 1 && (
// // //                       <div className="flex justify-between">
// // //                         <span className="text-gray-600">Persons</span>
// // //                         <span>× {numPersons}</span>
// // //                       </div>
// // //                     )}
// // //                   </div>
                  
// // //                   <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
// // //                     <div>
// // //                       <p className="text-sm text-gray-500">Total amount</p>
// // //                       <p className="text-2xl font-bold text-[#07ebbd]">{price} DT</p>
// // //                     </div>
// // //                     <div className="text-xs text-gray-500">per month</div>
// // //                   </div>
// // //                 </div>

// // //                 {desolage && (
// // //                   <div className="p-4 text-sm rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800" role="alert">
// // //                     <span className="font-medium">{desolage}</span>
// // //                   </div>
// // //                 )}

// // //                 <Button
// // //                   className={`w-full py-6 text-lg font-medium rounded-xl ${
// // //                     !selectedDate 
// // //                       ? 'bg-gray-300 cursor-not-allowed' 
// // //                       : 'bg-[#07ebbd] hover:bg-[#06d9ae] text-white'
// // //                   }`}
// // //                   disabled={!selectedDate || isLoading}
// // //                   onClick={() => {
// // //                     if (idUser) {
// // //                       clickToPay();
// // //                     } else {
// // //                       router.push('/login');
// // //                     }
// // //                   }}
// // //                 >
// // //                   {isLoading ? (
// // //                     <>
// // //                       <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
// // //                     </>
// // //                   )}
// // //                 </Button>
                
// // //                 {!idUser && (
// // //                   <p className="text-sm text-center text-gray-500 mt-2">
// // //                     You need to be logged in to complete this subscription
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </div>,
// // //     document.getElementById('modal')
// // //   );
// // // }
// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { createPortal } from 'react-dom';
// // import { format } from "date-fns";
// // import { 
// //   CalendarIcon, 
// //   X, 
// //   Users, 
// //   Calendar as CalendarIcon2, 
// //   CreditCard,
// //   Loader2
// // } from "lucide-react";
// // import { Calendar } from "./ui/calendar";
// // import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// // import { Button } from "./ui/button";
// // import { cn } from "@/lib/utils";
// // import { useRouter } from 'next/navigation';
// // import { useUser } from "@/app/context/UserContext";
// // import { motion } from 'framer-motion';

// // export default function SubscriptionModal({ isOpen1, onClose, sub }) {
// //   const [localSub, setLocalSub] = useState(null);
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [price, setPrice] = useState(0);
// //   const [numPersons, setNumPersons] = useState(1);
// //   const [desolage, setDesolage] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const { idUser } = useUser();
// //   const router = useRouter();

// //   useEffect(() => {
// //     if (isOpen1 && sub) {
// //       setLocalSub({ ...sub });
// //       // Reset state when modal opens
// //       setSelectedDate(null);
// //       setNumPersons(1);
// //       setDesolage(null);
// //     }
// //   }, [isOpen1, sub]);

// //   useEffect(() => {
// //     if (selectedDate && localSub) {
// //       setPrice(localSub.price * numPersons);
// //     } else {
// //       setPrice(0);
// //     }
// //   }, [localSub, selectedDate, numPersons]);

// //   // Add body scroll lock when modal is open
// //   useEffect(() => {
// //     if (isOpen1) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'auto';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'auto';
// //     };
// //   }, [isOpen1]);

// //   async function clickToPay() {
// //     if (!selectedDate) {
// //       setDesolage("Please select a start date");
// //       return;
// //     }

// //     setIsLoading(true);
// //     setDesolage(null);
    
// //     const obj = {
// //       subId: localSub._id,
// //       amount: localSub.price * numPersons * 1000,
// //       description: `${localSub.subscriptionType} subscription for ${localSub.table_id?.Name || 'workspace'}`,
// //       start_date: selectedDate
// //     };

// //     try {
// //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// //         method: "POST",
// //         body: JSON.stringify(obj),
// //         credentials: "include",
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       const resData = await response.json();

// //       if (response.status === 210) {
// //         setDesolage(resData.message);
// //       } else if (response.status === 200) {
// //         window.location.href = resData.result.payUrl;
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setDesolage("An error occurred. Please try again.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }

// //   if (!isOpen1 || !localSub) return null;

// //   let image = "/meetingroom1daily.png";
// //   const { subscriptionType, table_id, roomType } = localSub;
  
// //   // if (subscriptionType === 'daily' && table_id?.Name === 'Open space') {
// //   //   image = '/openspacedaily.png';
// //   // } else if (subscriptionType === 'weekly' && table_id?.Name === 'Open space') {
// //   //   image = '/openspaceweekly.png';
// //   // } else if (subscriptionType === 'monthly (5h)' && table_id?.Name === 'Open space') {
// //   //   image = '/openspacemonthly5h.png';
// //   // } else if (subscriptionType === 'monthly' && table_id?.Name === 'Open space') {
// //   //   image = '/openspacemonthly.png';
// //   // } else if (subscriptionType === '1/2 day' && table_id?.Name === 'Meeting Room 1') {
// //   //   image = '/meetingroom1halfday.png';
// //   // } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 1') {
// //   //   image = '/meetingroom1daily.png';
// //   // } else if (subscriptionType === 'day' && table_id?.Name === 'Meeting Room 2') {
// //   //   image = '/meetingroom1day.png';
// //   // } else if (subscriptionType === 'weekly' && table_id?.Name === 'private office premium plus') {
// //   //   image = '/officeroomweekly.png';
// //   // } else if (subscriptionType === 'monthly' && table_id?.Name === 'private office') {
// //   //   image = '/officeroommonthly.png';
// //   // }

// //   return createPortal(
// //     <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 backdrop-blur-sm bg-black/75 transition-all duration-300">
// //       <motion.div 
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         exit={{ opacity: 0, scale: 0.95 }}
// //         transition={{ duration: 0.2 }}
// //         className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
// //       >
// //         <div className="relative">
// //           {/* Header with black background */}
// //           <div className="bg-black p-6 text-white">
// //             <h2 className="text-2xl font-bold">{table_id?.Name || 'Open Space'}</h2>
// //             <p className="text-gray-300">{subscriptionType} Subscription</p>
            
// //             <button
// //               onClick={onClose}
// //               className="absolute top-4 right-4 text-white bg-white/10 hover:bg-[#07ebbd]/80 rounded-full p-2 transition-all duration-200"
// //               aria-label="Close modal"
// //             >
// //               <X size={20} />
// //             </button>
// //           </div>

// //           <div className="flex flex-col lg:flex-row">
// //             {/* Left side - Image and details */}
// //             <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-50">
// //               <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6 w-full max-w-md aspect-video relative">
// //                 <img
// //                   src={image}
// //                   alt={`${table_id?.Name || 'Workspace'} - ${subscriptionType}`}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>

// //               <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-100 shadow-sm">
// //                 <h3 className="font-medium text-gray-700 mb-4">Subscription Details</h3>
                
// //                 <div className="space-y-3 text-sm">
// //                   <div className="flex items-center gap-2">
// //                                           <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
// //                       <Users size={16} className="text-black hover:text-[#07ebbd]" />
// //                     </div>
// //                     <div>
// //                       <p className="text-gray-500">Space Type</p>
// //                       <p className="font-medium">{table_id?.Name || 'Open Space'}</p>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center gap-2">
// //                                           <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
// //                       <CalendarIcon2 size={16} className="text-black hover:text-[#07ebbd]" />
// //                     </div>
// //                     <div>
// //                       <p className="text-gray-500">Subscription Type</p>
// //                       <p className="font-medium">{subscriptionType}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right side - Form */}
// //             <div className="w-full lg:w-1/2 p-8">
// //               <h3 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Subscription</h3>

// //               <div className="space-y-6">
// //                 <div>
// //                   <label className="text-sm font-medium text-gray-700 block mb-2">
// //                     Start Date <span className="text-red-500">*</span>
// //                   </label>
// //                   <Popover modal={false}>
// //                     <PopoverTrigger asChild>
// //                       <Button
// //                         variant="outline"
// //                         className={cn(
// //                           "w-full justify-start text-left font-normal border-2 rounded-xl p-4 h-auto",
// //                           !selectedDate && "text-gray-400",
// //                           selectedDate && "border-black text-black hover:border-[#07ebbd]"
// //                         )}
// //                       >
// //                         <CalendarIcon className="mr-2 h-5 w-5" />
// //                         {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
// //                       </Button>
// //                     </PopoverTrigger>
// //                     <PopoverContent className="w-auto p-0 z-[9999]" align="start">
// //                       <Calendar
// //                         mode="single"
// //                         selected={selectedDate}
// //                         onSelect={setSelectedDate}
// //                         initialFocus
// //                         disabled={(date) => date < new Date()}
// //                         className="rounded-lg border-0"
// //                       />
// //                     </PopoverContent>
// //                   </Popover>
// //                 </div>

// //                 {roomType !== "openspace" && (
// //                   <div>
// //                     <label className="text-sm font-medium text-gray-700 block mb-2">
// //                       Number of Persons
// //                     </label>
// //                     <div className="relative">
// //                       <input
// //                         type="number"
// //                         min="1"
// //                         value={numPersons}
// //                         onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
// //                         className="w-full p-4 border-2 rounded-xl focus:border-black hover:border-[#07ebbd] focus:ring focus:ring-black/20 focus:ring-opacity-50 outline-none transition-all"
// //                         placeholder="Enter number of persons"
// //                       />
// //                       <div className="absolute inset-y-0 right-0 flex">
// //                         <button 
// //                           className="px-4 text-gray-500 hover:text-gray-700"
// //                           onClick={() => setNumPersons(prev => Math.max(1, prev - 1))}
// //                         >
// //                           -
// //                         </button>
// //                         <button 
// //                           className="px-4 text-gray-500 hover:text-gray-700"
// //                           onClick={() => setNumPersons(prev => prev + 1)}
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Price summary card */}
// //                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
// //                   <div className="flex justify-between items-center mb-4">
// //                     <h4 className="font-semibold text-gray-800">Summary</h4>
// //                       <div className="bg-black/10 text-black text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-[#07ebbd]/10 hover:text-[#07ebbd] transition-colors duration-200">
// //                       {subscriptionType}
// //                     </div>
// //                   </div>
                  
// //                   <div className="space-y-2 text-sm mb-4">
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-600">Base price</span>
// //                       <span>{localSub?.price || 0} DT</span>
// //                     </div>
// //                     {numPersons > 1 && (
// //                       <div className="flex justify-between">
// //                         <span className="text-gray-600">Persons</span>
// //                         <span>× {numPersons}</span>
// //                       </div>
// //                     )}
// //                   </div>
                  
// //                   <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
// //                     <div>
// //                       <p className="text-sm text-gray-500">Total amount</p>
// //                       <p className="text-2xl font-bold text-black">{price} DT</p>
// //                     </div>
// //                     <div className="text-xs text-gray-500">per month</div>
// //                   </div>
// //                 </div>

// //                 {desolage && (
// //                   <div className="p-4 text-sm rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800" role="alert">
// //                     <span className="font-medium">{desolage}</span>
// //                   </div>
// //                 )}

// //                 <Button
// //                   className={`w-full py-6 text-lg font-medium rounded-xl transition-colors duration-200 ${
// //                     !selectedDate 
// //                       ? 'bg-gray-300 cursor-not-allowed' 
// //                       : 'bg-black hover:bg-[#07ebbd] text-white'
// //                   }`}
// //                   disabled={!selectedDate || isLoading}
// //                   onClick={() => {
// //                     if (idUser) {
// //                       clickToPay();
// //                     } else {
// //                       router.push('/login');
// //                     }
// //                   }}
// //                 >
// //                   {isLoading ? (
// //                     <>
// //                       <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
// //                     </>
// //                   )}
// //                 </Button>
                
// //                 {!idUser && (
// //                   <p className="text-sm text-center text-gray-500 mt-2">
// //                     You need to be logged in to complete this subscription
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>,
// //     document.getElementById('modal')
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { format } from "date-fns";
// import { 
//   CalendarIcon, 
//   X, 
//   Users, 
//   Calendar as CalendarIcon2, 
//   CreditCard,
//   Loader2
// } from "lucide-react";
// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { useRouter } from 'next/navigation';
// import { useUser } from "@/app/context/UserContext";
// import { motion } from 'framer-motion';

// export default function SubscriptionModal({ isOpen1, onClose, sub }) {
//   const [localSub, setLocalSub] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [numPersons, setNumPersons] = useState(1);
//   const [desolage, setDesolage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const { idUser } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (isOpen1 && sub) {
//       setLocalSub({ ...sub });
//       // Reset state when modal opens
//       setSelectedDate(null);
//       setNumPersons(1);
//       setDesolage(null);
//     }
//   }, [isOpen1, sub]);

//   useEffect(() => {
//     if (selectedDate && localSub) {
//       setPrice(localSub.price * numPersons);
//     } else {
//       setPrice(0);
//     }
//   }, [localSub, selectedDate, numPersons]);

//   // Add body scroll lock when modal is open
//   useEffect(() => {
//     if (isOpen1) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen1]);

//   async function clickToPay() {
//     if (!selectedDate) {
//       setDesolage("Please select a start date");
//       return;
//     }

//     setIsLoading(true);
//     setDesolage(null);
    
//     const obj = {
//       subId: localSub._id,
//       amount: localSub.price * numPersons * 1000,
//       description: `${localSub.subscriptionType} subscription for ${localSub.table_id?.Name || 'workspace'}`,
//       start_date: selectedDate
//     };

//     try {
//       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//       });

//       const resData = await response.json();

//       if (response.status === 210) {
//         setDesolage(resData.message);
//       } else if (response.status === 200) {
//         window.location.href = resData.result.payUrl;
//       }
//     } catch (err) {
//       console.error(err);
//       setDesolage("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   if (!isOpen1 || !localSub) return null;

//   let image = "/meetingroom1daily.png";
//   const { subscriptionType, table_id, roomType } = localSub;
  
//   return createPortal(
//     <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 backdrop-blur-sm bg-black/75 transition-all duration-300">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.2 }}
//         className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
//       >
//         <div className="relative">
//           {/* Header with black background */}
//           <div className="bg-black p-6 text-white">
//             <h2 className="text-2xl font-bold">{table_id?.Name || 'Open Space'}</h2>
//             <p className="text-gray-300">{subscriptionType} Subscription</p>
            
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 text-white bg-white/10 hover:bg-[#07ebbd]/80 rounded-full p-2 transition-all duration-200"
//               aria-label="Close modal"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           <div className="flex flex-col lg:flex-row">
//             {/* Left side - Image and details */}
//             <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-50">
//               <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6 w-full max-w-md h-140 relative">
//                 <img
//                   src={image}
//                   alt={`${table_id?.Name || 'Workspace'} - ${subscriptionType}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-100 shadow-sm">
//                 <h3 className="font-medium text-gray-700 mb-4">Subscription Details</h3>
                
//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center gap-2">
//                     <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
//                       <Users size={16} className="text-black hover:text-[#07ebbd]" />
//                     </div>
//                     <div>
//                       <p className="text-gray-500">Space Type</p>
//                       <p className="font-medium">{table_id?.Name || 'Open Space'}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
//                       <CalendarIcon2 size={16} className="text-black hover:text-[#07ebbd]" />
//                     </div>
//                     <div>
//                       <p className="text-gray-500">Subscription Type</p>
//                       <p className="font-medium">{subscriptionType}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Form */}
//             <div className="w-full lg:w-1/2 p-8">
//               <h3 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Subscription</h3>

//               <div className="space-y-6">
//                 <div>
//                   <label className="text-sm font-medium text-gray-700 block mb-2">
//                     Start Date <span className="text-red-500">*</span>
//                   </label>
//                   <Popover modal={false}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className={cn(
//                           "w-full justify-start text-left font-normal border-2 rounded-xl p-4 h-auto",
//                           !selectedDate && "text-gray-400",
//                           selectedDate && "border-black text-black hover:border-[#07ebbd]"
//                         )}
//                       >
//                         <CalendarIcon className="mr-2 h-5 w-5" />
//                         {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0 z-[9999]" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={selectedDate}
//                         onSelect={setSelectedDate}
//                         initialFocus
//                         disabled={(date) => date < new Date()}
//                         className="rounded-lg border-0"
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {roomType !== "openspace" && (
//                   <div>
//                     <label className="text-sm font-medium text-gray-700 block mb-2">
//                       Number of Persons
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="number"
//                         min="1"
//                         value={numPersons}
//                         onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
//                         className="w-full p-4 border-2 rounded-xl focus:border-black hover:border-[#07ebbd] focus:ring focus:ring-black/20 focus:ring-opacity-50 outline-none transition-all"
//                         placeholder="Enter number of persons"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex">
//                         <button 
//                           className="px-4 text-gray-500 hover:text-gray-700"
//                           onClick={() => setNumPersons(prev => Math.max(1, prev - 1))}
//                         >
//                           -
//                         </button>
//                         <button 
//                           className="px-4 text-gray-500 hover:text-gray-700"
//                           onClick={() => setNumPersons(prev => prev + 1)}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Price summary card */}
//                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
//                   <div className="flex justify-between items-center mb-4">
//                     <h4 className="font-semibold text-gray-800">Summary</h4>
//                     <div className="bg-black/10 text-black text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-[#07ebbd]/10 hover:text-[#07ebbd] transition-colors duration-200">
//                       {subscriptionType}
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2 text-sm mb-4">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Base price</span>
//                       <span>{localSub?.price || 0} DT</span>
//                     </div>
//                     {numPersons > 1 && (
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Persons</span>
//                         <span>× {numPersons}</span>
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
//                     <div>
//                       <p className="text-sm text-gray-500">Total amount</p>
//                       <p className="text-2xl font-bold text-black">{price} DT</p>
//                     </div>
//                     <div className="text-xs text-gray-500">per month</div>
//                   </div>
//                 </div>

//                 {desolage && (
//                   <div className="p-4 text-sm rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800" role="alert">
//                     <span className="font-medium">{desolage}</span>
//                   </div>
//                 )}

//                 <Button
//                   className={`w-full py-6 text-lg font-medium rounded-xl transition-colors duration-200 ${
//                     !selectedDate 
//                       ? 'bg-gray-300 cursor-not-allowed' 
//                       : 'bg-black hover:bg-[#07ebbd] text-white'
//                   }`}
//                   disabled={!selectedDate || isLoading}
//                   onClick={() => {
//                     if (idUser) {
//                       clickToPay();
//                     } else {
//                       router.push('/login');
//                     }
//                   }}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
//                     </>
//                   ) : (
//                     <>
//                       <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
//                     </>
//                   )}
//                 </Button>
                
//                 {!idUser && (
//                   <p className="text-sm text-center text-gray-500 mt-2">
//                     You need to be logged in to complete this subscription
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>,
//     document.getElementById('modal')
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { format } from "date-fns";
import { 
  CalendarIcon, 
  X, 
  Users, 
  Calendar as CalendarIcon2, 
  CreditCard,
  Loader2
} from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import { useUser } from "@/app/context/UserContext";
import { motion } from 'framer-motion';

export default function SubscriptionModal({ isOpen1, onClose, sub }) {
  const [localSub, setLocalSub] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState(0);
  const [numPersons, setNumPersons] = useState(1);
  const [desolage, setDesolage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { idUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isOpen1 && sub) {
      setLocalSub({ ...sub });
      setSelectedDate(null);
      setNumPersons(1);
      setDesolage(null);
    }
  }, [isOpen1, sub]);

  useEffect(() => {
    if (selectedDate && localSub) {
      setPrice(localSub.price * numPersons);
    } else {
      setPrice(0);
    }
  }, [localSub, selectedDate, numPersons]);

  useEffect(() => {
    if (isOpen1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen1]);

  async function clickToPay() {
    if (!selectedDate) {
      setDesolage("Please select a start date");
      return;
    }

    setIsLoading(true);
    setDesolage(null);
    
    const obj = {
      subId: localSub._id,
      amount: localSub.price * numPersons * 1000,
      description: `${localSub.subscriptionType} subscription for ${localSub.table_id?.Name || 'workspace'}`,
      start_date: selectedDate
    };

    try {
      const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const resData = await response.json();

      if (response.status === 210) {
        setDesolage(resData.message);
      } else if (response.status === 200) {
        window.location.href = resData.result.payUrl;
      }
    } catch (err) {
      console.error(err);
      setDesolage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (!isOpen1 || !localSub) return null;

  // let image = "/meetingroom1daily.png";
  // const { subscriptionType, table_id, roomType } = localSub;

    let image;
  const { subscriptionType, table_id, roomType } = localSub;
  // console.log(subscriptionType)
  // console.log(table_id)
  // console.log(roomType)

  console.log(sub?.subscriptionType)
  console.log(sub?.table_id?.Name)

  
  if (sub?.subscriptionType === 'dailly' && !sub?.table_id) {
    image = '/openSpaceDaily.png';
  } else if (subscriptionType === 'weekly' && !sub.table_id) {
    image = '/openSpaceWeekly.png';
  } else if (subscriptionType === 'monthly (5h)' && !sub.table_id) {
    image = '/openSpace5h.png';
  } else if (subscriptionType === 'monthly' && !sub.table_id) {
    image = '/openSpaceMonthly.png';
  } else if (sub?.subscriptionType === '1/2 day' && sub?.table_id?.Name === 'Meeting Room 1') {
    image = '/meetingroom1halfday.png';
  } else if (sub?.subscriptionType === 'daily' && sub?.table_id?.Name === 'Meeting Room 1') {
    image = '/meetingroom1day.png';
  }else if (sub?.subscriptionType === '1/2 day' && sub?.table_id?.Name === 'Meeting Room 2') {
    image = '/meetingRoom2HalfDay.png';
  } else if (sub?.subscriptionType === 'daily' && sub?.table_id?.Name === 'Meeting Room 2') {
    image = '/meetingRoom2Daily.png';
  } else if (sub?.subscriptionType === 'daily' && sub?.table_id?.Name === 'private office') {
    image = '/officeRoom1Daily.png';
  } else if (sub?.subscriptionType === 'weekly' && sub?.table_id?.Name === 'private office') {
    image = '/officeRoom1weekly.png';
  }
   else if (sub?.subscriptionType === 'daily' && sub?.table_id?.Name === 'private office premium plus') {
    image = '/officeRoom2daily.png';
  }else if (sub?.subscriptionType === 'weekly' && sub?.table_id?.Name === 'private office premium plus') {
    image = '/officeRoom2weekly.png';
  }else if (sub?.subscriptionType === 'monthly' && sub?.table_id?.Name === 'private office premium plus') {
    image = '/officeRoom2Monthly.png';
  }
  
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 backdrop-blur-sm bg-black/75 transition-all duration-300 overflow-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <div className="relative">
          {/* Header */}
          <div className="bg-black p-6 text-white">
            <h2 className="text-2xl font-bold">{table_id?.Name || 'Open Space'}</h2>
            <p className="text-gray-300">{subscriptionType} Subscription</p>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-[#07ebbd]/80 rounded-full p-2 transition-all duration-200"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left: image + details */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-50">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6 w-full max-w-md h-[80] relative">
                <img
                  src={image}
                  alt={`${table_id?.Name || 'Workspace'} - ${subscriptionType}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white rounded-xl p-6 w-full max-w-md border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-700 mb-4">Subscription Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
                      <Users size={16} className="text-black hover:text-[#07ebbd]" />
                    </div>
                    <div>
                      <p className="text-gray-500">Space Type</p>
                      <p className="font-medium">{table_id?.Name || 'Open Space'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-black/10 p-2 rounded-full hover:bg-[#07ebbd]/10 transition-colors duration-200">
                      <CalendarIcon2 size={16} className="text-black hover:text-[#07ebbd]" />
                    </div>
                    <div>
                      <p className="text-gray-500">Subscription Type</p>
                      <p className="font-medium">{subscriptionType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="w-full lg:w-1/2 p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Subscription</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <Popover modal={false}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-2 rounded-xl p-4 h-auto",
                          !selectedDate ? "text-gray-400" : "border-black text-black hover:border-[#07ebbd]"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-5 w-5" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-[9999]" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                        className="rounded-lg border-0"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {roomType !== "openspace" && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Number of Persons
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        value={numPersons}
                        onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full p-4 border-2 rounded-xl focus:border-black hover:border-[#07ebbd] focus:ring focus:ring-black/20 focus:ring-opacity-50 outline-none transition-all"
                        placeholder="Enter number of persons"
                      />
                      <div className="absolute inset-y-0 right-0 flex">
                        <button 
                          className="px-4 text-gray-500 hover:text-gray-700"
                          onClick={() => setNumPersons(prev => Math.max(1, prev - 1))}
                        >
                          -
                        </button>
                        <button 
                          className="px-4 text-gray-500 hover:text-gray-700"
                          onClick={() => setNumPersons(prev => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary card */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">Summary</h4>
                    <div className="bg-black/10 text-black text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-[#07ebbd]/10 hover:text-[#07ebbd] transition-colors duration-200">
                      {subscriptionType}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base price</span>
                      <span>{localSub?.price || 0} DT</span>
                    </div>
                    {numPersons > 1 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Persons</span>
                        <span>× {numPersons}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Total amount</p>
                      <p className="text-2xl font-bold text-black">{price} DT</p>
                    </div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>
                </div>

                {desolage && (
                  <div className="p-4 text-sm rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800" role="alert">
                    <span className="font-medium">{desolage}</span>
                  </div>
                )}

                <Button
                  className={`w-full py-6 text-lg font-medium rounded-xl transition-colors duration-200 ${
                    !selectedDate 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-black hover:bg-[#07ebbd] text-white'
                  }`}
                  disabled={!selectedDate || isLoading}
                  onClick={() => {
                    if (idUser) {
                      clickToPay();
                    } else {
                      router.push('/login');
                    }
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
                    </>
                  )}
                </Button>
                
                {!idUser && (
                  <p className="text-sm text-center text-gray-500 mt-2">
                    You need to be logged in to complete this subscription
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById('modal')
  );
}
