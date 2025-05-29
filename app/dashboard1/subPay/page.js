// // // 'use client'; 

// // // import { useSearchParams } from "next/navigation";
// // // import { useEffect, useState } from "react";
// // // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// // // export default function PaymentVerify() {
// // //   const [isWorked, setIsWorked] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [idUser, setidUser] = useState(null);
// // //   const [subId, setSubId] = useState(null);
// // //   // const [start_date , setStartDate] = useState(null)
// // //   // const [end_date , setEndDate] = useState(null)


// // //   const searchParams = useSearchParams();
// // //   const status = searchParams.get("status");
// // //   const paymentId = searchParams.get("payment_ref");
// // //   const start_date = searchParams.get("start_date")
// // //   const end_date = searchParams.get("end_date")


  

// // //   // Get idUser and subId on client side
// // //   useEffect(() => {
// // //     const storedidUser = localStorage.getItem('idUser');
// // //     const storedSubId = searchParams.get("subId");

// // //     setidUser(storedidUser);
// // //     setSubId(storedSubId);

// // //     console.log('Received parameters:', {
// // //       status,
// // //       paymentId,
// // //       idUser: storedidUser,
// // //       subId: storedSubId,
// // //       start_date: start_date,
// // //       end_date: end_date
// // //     });
// // //   }, [searchParams, status, paymentId , start_date , end_date]);

// // //   // Verify payment once data is loaded
// // //   useEffect(() => {
// // //     if (!idUser || !subId) return;

// // //     console.log('Verification useEffect triggered');

// // //     if (status === "failed") {
// // //       console.log('Immediate failure detected');
// // //       setIsWorked(false);
// // //       setError("Payment failed. Please try again.");
// // //       return;
// // //     }

// // //     if (status !== "success" || !paymentId) {
// // //       console.log('Missing required parameters:', {
// // //         hasStatus: !!status,
// // //         hasPaymentId: !!paymentId,
// // //         hasidUser: !!idUser,
// // //         hasSubId: !!subId,
// // //       });
// // //       return;
// // //     }

// // //     async function verifyAndAddUserSubscription() {
// // //       console.log('Starting verification...');
// // //       try {
// // //         const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${idUser}&subId=${subId}&start_date=${start_date}&end_date=${end_date}`;
// // //         console.log('Making request to:', url);

// // //         const response = await fetch(url, {
// // //           method: "GET",
// // //           credentials: "include",
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           }
// // //         });

// // //         console.log('Response status:', response.status);

// // //         if (!response.ok) {
// // //           const errorText = await response.text();
// // //           throw new Error(errorText || "Payment verification failed");
// // //         }

// // //         const resData = await response.json();
// // //         console.log('Verification response:', resData);

// // //         if (resData.status !== "success") {
// // //           throw new Error(resData.message || "Payment was not successful");
// // //         }

// // //         setIsWorked(true);
// // //       } catch (error) {
// // //         console.error("Full error details:", error);
// // //         setError(error.message);
// // //         setIsWorked(false);
// // //       }
// // //     }

// // //     verifyAndAddUserSubscription();
// // //   }, [status, paymentId, idUser, subId]);

// // //   return (
// // //     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
// // //       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
// // //         {/* Loading */}
// // //         {isWorked === null && status === "success" && (
// // //           <div className="space-y-4">
// // //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
// // //             <p className="text-gray-600 text-lg">Verifying your payment...</p>
// // //           </div>
// // //         )}

// // //         {/* Success */}
// // //         {isWorked === true && (
// // //           <div className="space-y-4">
// // //             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
// // //             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
// // //             <button
// // //               onClick={() => window.location.href = "/homepage"}
// // //               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
// // //             >
// // //               Go to Dashboard
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Failure */}
// // //         {isWorked === false && (
// // //           <div className="space-y-4">
// // //             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
// // //             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
// // //             <p className="text-gray-600">{error || "Something went wrong. Please try again."}</p>
// // //             <button
// // //               onClick={() => window.location.href = "/homepage"}
// // //               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
// // //             >
// // //               Try Again
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { useSearchParams } from 'next/navigation';
// // import { useEffect, useState } from 'react';
// // import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// // export default function PaymentVerify() {
// //   const searchParams = useSearchParams();

// //   const [isWorked, setIsWorked] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [idUser, setidUser] = useState(null);
// //   const [subId, setSubId] = useState(null);
// //   const [startDate, setStartDate] = useState(null);
// //   const [endDate, setEndDate] = useState(null);

// //   const status = searchParams.get('status');
// //   const paymentId = searchParams.get('payment_ref');

// //   // Initialize all values from query/localStorage
// //   useEffect(() => {
// //     const storedidUser = localStorage.getItem('idUser');
// //     const querySubId = searchParams.get('subId');
// //     const queryStartDate = searchParams.get('start_date');
// //     const queryEndDate = searchParams.get('end_date');

// //     setidUser(storedidUser);
// //     setSubId(querySubId);
// //     setStartDate(queryStartDate);
// //     setEndDate(queryEndDate);

// //     console.log('Received params:', {
// //       status,
// //       paymentId,
// //       storedidUser,
// //       querySubId,
// //       queryStartDate,
// //       queryEndDate,
// //     });
// //   }, [searchParams]);

// //   // Verify payment once everything is available
// //   useEffect(() => {
// //     if (!idUser || !subId || !startDate || !endDate) return;

// //     if (status === 'failed') {
// //       setIsWorked(false);
// //       setError('Payment failed. Please try again.');
// //       return;
// //     }

// //     if (status !== 'success' || !paymentId) return;

// //     async function verifyPayment() {
// //       try {
// //         const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${idUser}&subId=${subId}&start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}`;

// //         console.log('Sending request to:', url);

// //         const response = await fetch(url, {
// //           method: 'GET',
// //           credentials: 'include',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         });

// //         if (!response.ok) {
// //           const errorText = await response.text();
// //           throw new Error(errorText || 'Payment verification failed');
// //         }

// //         const resData = await response.json();
// //         console.log('Verification result:', resData);

// //         if (resData.status !== 'success') {
// //           throw new Error(resData.message || 'Unexpected error');
// //         }

// //         setIsWorked(true);
// //       } catch (err) {
// //         console.error('Verification error:', err);
// //         setIsWorked(false);
// //         setError(err.message);
// //       }
// //     }

// //     verifyPayment();
// //   }, [idUser, subId, status, paymentId, startDate, endDate]);

// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
// //       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
// //         {isWorked === null && status === 'success' && (
// //           <div className="space-y-4">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
// //             <p className="text-gray-600 text-lg">Verifying your payment...</p>
// //           </div>
// //         )}

// //         {isWorked === true && (
// //           <div className="space-y-4">
// //             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
// //             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
// //             <button
// //               onClick={() => window.location.href = '/homepage'}
// //               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
// //             >
// //               Go to Dashboard
// //             </button>
// //           </div>
// //         )}

// //         {isWorked === false && (
// //           <div className="space-y-4">
// //             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
// //             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
// //             <p className="text-gray-600">{error || 'Something went wrong. Please try again.'}</p>
// //             <button
// //               onClick={() => window.location.href = '/homepage'}
// //               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
// //             >
// //               Try Again
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// 'use client'; 

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { useUser } from "@/app/context/UserContext"     // Adjust path based on your structure

// export default function PaymentVerify() {
//   const [isWorked, setIsWorked] = useState(null);
//   const [error, setError] = useState(null);
//   // const [idUser, setidUser] = useState(null);
//   const [subId, setSubId] = useState(null);
//   const [start_date , setStartDate] = useState(null)
//   const [end_date , setEndDate] = useState(null)

//   const { idUser, loading: userLoading } = useUser();

//   const searchParams = useSearchParams();
//   const status = searchParams.get("status");
//   const paymentId = searchParams.get("payment_ref");
//   const start_date1 = searchParams.get("start_date")
//   const end_date1 = searchParams.get("end_date")


  

//   // Get idUser and subId on client side
//   useEffect(() => {
//     const storedSubId = searchParams.get("subId");
//     const start_date1 = searchParams.get("start_date")
//     const end_date1 = searchParams.get("end_date")
  
     


//     setSubId(storedSubId);
//     setStartDate(start_date1)
//     setEndDate(end_date1)
//      console.log(
//       'end'+end_date
//      )
//      console.log("start"+
//       start_date
//      )

//     console.log('Received parameters:', {
//       status,
//       paymentId,
//       idUser: idUser,
//       subId: storedSubId,
//       start_date: start_date1,
//       end_date: end_date1
//     });
//   }, [searchParams, status, paymentId , start_date , end_date]);

//   // Verify payment once data is loaded
//   useEffect(() => {
//     if (!idUser || !subId) return;

//     console.log('Verification useEffect triggered');

//     if (status === "failed") {
//       console.log('Immediate failure detected');
//       setIsWorked(false);
//       setError("Payment failed. Please try again.");
//       return;
//     }

//     if (status !== "success" || !paymentId) {
//       console.log('Missing required parameters:', {
//         hasStatus: !!status,
//         hasPaymentId: !!paymentId,
//         hasidUser: !!idUser,
//         hasSubId: !!subId,
//       });
//       return;
//     }

//     async function verifyAndAddUserSubscription() {
//       console.log('Starting verification...');
//       console.log('end date'+end_date)
//       try {
//         const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${idUser}&subId=${subId}&start_date=${start_date}&end_date=${end_date}`;
//         console.log('Making request to:', url);

//         const response = await fetch(url, {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         console.log('Response status:', response.status);

//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(errorText || "Payment verification failed");
//         }

//         const resData = await response.json();
//         console.log('Verification response:', resData);

//         if (resData.status !== "success") {
//           throw new Error(resData.message || "Payment was not successful");
//         }

//         setIsWorked(true);
//       } catch (error) {
//         console.error("Full error details:", error);
//         setError(error.message);
//         setIsWorked(false);
//       }
//     }

//     verifyAndAddUserSubscription();
//   }, [status, paymentId, idUser, subId]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
//         {/* Loading */}
//         {isWorked === null && status === "success" && (
//           <div className="space-y-4">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//             <p className="text-gray-600 text-lg">Verifying your payment...</p>
//           </div>
//         )}

//         {/* Success */}
//         {isWorked === true && (
//           <div className="space-y-4">
//             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
//             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
//             <button
//               onClick={() => window.location.href = "/homepage"}
//               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         )}

//         {/* Failure */}
//         {isWorked === false && (
//           <div className="space-y-4">
//             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
//             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
//             <p className="text-gray-600">{error || "Something went wrong. Please try again."}</p>
//             <button
//               onClick={() => window.location.href = "/homepage"}
//               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//             >
//               Try Again
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // 'use client';

// // import { useSearchParams } from 'next/navigation';
// // import { useEffect, useState } from 'react';
// // import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// // export default function PaymentVerify() {
// //   const searchParams = useSearchParams();

// //   const [isWorked, setIsWorked] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [idUser, setidUser] = useState(null);
// //   const [subId, setSubId] = useState(null);
// //   const [startDate, setStartDate] = useState(null);
// //   const [endDate, setEndDate] = useState(null);

// //   const status = searchParams.get('status');
// //   const paymentId = searchParams.get('payment_ref');
  

// //   // Initialize all values from query/localStorage
// //   useEffect(() => {
// //     const storedidUser = localStorage.getItem('idUser');
// //     const querySubId = searchParams.get('subId');
// //     const queryStartDate = searchParams.get('start_date');
// //     const queryEndDate = searchParams.get('end_date');
    

// //     setidUser(storedidUser);
// //     setSubId(querySubId);
// //     setStartDate(queryStartDate);
// //     setEndDate(queryEndDate);

// //     console.log('Received params:', {
// //       status,
// //       paymentId,
// //       storedidUser,
// //       querySubId,
// //       queryStartDate,
// //       queryEndDate,
// //       startDate,
// //       endDate
// //     });


// //   }, [searchParams]);

// //   // Verify payment once everything is available
// //   useEffect(() => {
// //     if (!idUser || !subId || !startDate || !endDate) return;

// //     console.log('start date' + startDate)
// //     console.log('end date' + endDate)

// //     if (status === 'failed') {
// //       setIsWorked(false);
// //       setError('Payment failed. Please try again.');
// //       return;
// //     }

// //     if (status !== 'success' || !paymentId) return;

// //     async function verifyPayment() {
// //       try {
// //         const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${idUser}&subId=${subId}&start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}`;

// //         console.log('Sending request to:', url);

// //         const response = await fetch(url, {
// //           method: 'GET',
// //           credentials: 'include',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //         });

// //         if (!response.ok) {
// //           const errorText = await response.text();
// //           throw new Error(errorText || 'Payment verification failed');
// //         }

// //         const resData = await response.json();
// //         console.log('Verification result:', resData);

// //         if (resData.status !== 'success') {
// //           throw new Error(resData.message || 'Unexpected error');
// //         }

// //         setIsWorked(true);
// //       } catch (err) {
// //         console.error('Verification error:', err);
// //         setIsWorked(false);
// //         setError(err.message);
// //       }
// //     }

// //     verifyPayment();
// //   }, [idUser, subId, status, paymentId, startDate, endDate]);

// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
// //       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
// //         {isWorked === null && status === 'success' && (
// //           <div className="space-y-4">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
// //             <p className="text-gray-600 text-lg">Verifying your payment...</p>
// //           </div>
// //         )}

// //         {isWorked === true && (
// //           <div className="space-y-4">
// //             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
// //             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
// //             <button
// //               onClick={() => window.location.href = '/homepage'}
// //               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
// //             >
// //               Go to Dashboard
// //             </button>
// //           </div>
// //         )}

// //         {isWorked === false && (
// //           <div className="space-y-4">
// //             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
// //             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
// //             <p className="text-gray-600">{error || 'Something went wrong. Please try again.'}</p>
// //             <button
// //               onClick={() => window.location.href = '/homepage'}
// //               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
// //             >
// //               Try Again
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


'use client'; 

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useUser } from "@/app/context/UserContext"     // Adjust path based on your structure
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function PaymentVerify() {
  const [isWorked, setIsWorked] = useState(null);
  const [error, setError] = useState(null);
  const [subId, setSubId] = useState(null);
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const { width, height } = useWindowSize();

  const { idUser, loading: userLoading } = useUser();

  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const paymentId = searchParams.get("payment_ref");
  const start_date1 = searchParams.get("start_date");
  const end_date1 = searchParams.get("end_date");

  // Get subId and dates from search params
  useEffect(() => {
    const storedSubId = searchParams.get("subId");
    const start_date1 = searchParams.get("start_date");
    const end_date1 = searchParams.get("end_date");

    setSubId(storedSubId);
    setStartDate(start_date1);
    setEndDate(end_date1);
    
    console.log('end' + end_date);
    console.log("start" + start_date);

    console.log('Received parameters:', {
      status,
      paymentId,
      idUser: idUser,
      subId: storedSubId,
      start_date: start_date1,
      end_date: end_date1
    });
  }, [searchParams, status, paymentId, start_date, end_date]);

  // Verify payment once data is loaded
  useEffect(() => {
    if (!idUser || !subId) return;

    console.log('Verification useEffect triggered');

    if (status === "failed") {
      console.log('Immediate failure detected');
      setIsWorked(false);
      setError("Payment failed. Please try again.");
      return;
    }

    if (status !== "success" || !paymentId) {
      console.log('Missing required parameters:', {
        hasStatus: !!status,
        hasPaymentId: !!paymentId,
        hasidUser: !!idUser,
        hasSubId: !!subId,
      });
      return;
    }

    async function verifyAndAddUserSubscription() {
      console.log('Starting verification...');
      console.log('end date' + end_date);
      console.log('kr kr kr hhhhhh ')
      try {
        const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${idUser}&subId=${subId}&start_date=${start_date}&end_date=${end_date}`;
        console.log('Making request to:', url);

        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || "Payment verification failed");
        }

        const resData = await response.json();
        console.log('Verification response:', resData);

        if (resData.status !== "success") {
          throw new Error(resData.message || "Payment was not successful");
        }

        setIsWorked(true);
      } catch (error) {
        console.error("Full error details:", error);
        setError(error.message);
        setIsWorked(false);
      }
    }

    verifyAndAddUserSubscription();
  }, [status, paymentId, idUser, subId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      {isWorked === true && <Confetti width={width} height={height} numberOfPieces={200} />}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden">
        {/* Loading */}
        {isWorked === null && status === "success" && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg font-medium">Verifying your payment...</p>
          </div>
        )}

        {/* Success */}
        {isWorked === true && (
          <div className="space-y-4 animate-fadeIn">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
            <h2 className="text-2xl font-extrabold text-green-600">Subscription Confirmed!</h2>
            <p className="text-gray-700 font-medium">
              🎉 Your payment was successful and your subscription is now active!
            </p>
            <button
              onClick={() => window.location.href = "/homepage"}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {/* Failure */}
        {isWorked === false && (
          <div className="space-y-4 animate-fadeIn">
            <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-700">{error || "Something went wrong. Please try again."}</p>
            <button
              onClick={() => window.location.href = "/homepage"}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}