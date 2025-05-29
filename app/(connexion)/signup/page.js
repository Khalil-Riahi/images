// "use client";

// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function SignUp() {
//   const router = useRouter();

//   // Error states
//   const [generalError, setGeneralError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   async function signUpFun(formData) {
//     // Reset errors at start
//     setGeneralError("");
//     setEmailError("");
//     setPasswordError("");
//     setConfirmPasswordError("");

//     try {
//       const user = {
//         firstName: formData.get("firstName"),
//         lastName: formData.get("lastName"),
//         email: formData.get("email"),
//         password: formData.get("password"),
//         passwordConfirm: formData.get("passwordConfirm"),
//         phone: formData.get("phone"),
//       };

//       console.log("Sending signup request:", user);

//       const response = await fetch("http://localhost:8000/ELACO/signup", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });

//       // 1) Check if response is JSON or not
//       let resData;
//       const contentType = response.headers.get("content-type");
//       if (contentType && contentType.includes("application/json")) {
//         // Attempt to parse JSON
//         resData = await response.json();
//       } else {
//         // Fallback if server returned HTML or something else
//         resData = {
//           message: "An unexpected error occurred. Please try again later.",
//         };
//       }

//       // 2) If the response is not OK, throw an error with the message
//       if (!response.ok) {
//         throw new Error(resData.message || "Signup failed! Please check your details.");
//       }

//       const currentUserId = resData.data.user._id;
//       console.log(resData.data.user._id)
//       localStorage.setItem("userId", currentUserId);
//       console.log("Saved userId:", currentUserId);

//       // 3) If successful
//       toast.success("Signup successful! Redirecting...", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       setTimeout(() => {
//         router.push("/homepage");
//       }, 2000);
      
//     } catch (err) {
//       console.error("Error:", err);

//       // Generic fallback
//       const errorMsg = err.message || "Signup failed. Please try again.";

//       // 4) Distribute errors based on message content (optional)
//       if (errorMsg.toLowerCase().includes("email")) {
//         setEmailError(errorMsg);
//         toast.error(errorMsg);
//       } else if (
//         errorMsg.toLowerCase().includes("password") &&
//         errorMsg.toLowerCase().includes("confirm")
//       ) {
//         setConfirmPasswordError(errorMsg);
//         toast.error(errorMsg);
//       } else if (errorMsg.toLowerCase().includes("password")) {
//         setPasswordError(errorMsg);
//         toast.error(errorMsg);
//       } else {
//         setGeneralError(errorMsg);
//         toast.error(errorMsg);
//       }
//     }
//   }

//   const handleGoogleAuth = () => {
//     window.location.href = "http://localhost:8000/auth/google";
//   };

//   return (
//     <>
//       <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
//         <div className="w-11/12 max-w-5xl bg-white shadow-lg rounded-xl flex overflow-hidden">
//           {/* Left Side: Image & Text */}
//           <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-teal-200 to-blue-600 p-8 text-white" >
//             <div className="flex flex-col justify-center items-center gap-28">
//               <div className="flex flex-row justify-start w-full">
//                 <h2 className="text-4xl font-bold mb-4 text-white text-border-white  text-left"   >
//                   Start Your <br /> Journey With Us.
//                 </h2>
//               </div>
//               <img src="/people-working-drinking-coffee-coworking-area_82574-10622-removebg-preview.png" alt="Sign Up Illustration" className="w-10/8" />
//             </div>
//           </div>

//           {/* Right Side: Sign Up Form */}
//           <div className="w-full md:w-1/2 p-8">
//             <h2 className="text-2xl font-bold mb-6  text-yellow-300">Sign Up</h2>

//             {generalError && <p className="text-red-500 mb-4">{generalError}</p>}

//             <form
//               className="space-y-4"
//               onSubmit={async (e) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.target);
//                 await signUpFun(formData);
//               }}
//             >
//               {/* First & Last Name */}
//               <div className="flex gap-4">
//                 <div className="w-1/2">
//                   <label className="block text-gray-600 text-sm mb-1">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     required
//                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block text-gray-600 text-sm mb-1">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     required
//                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-600 text-sm mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className={`w-full border ${
//                     emailError ? "border-red-500" : "border-gray-300"
//                   } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 />
//                 {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-gray-600 text-sm mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   required
//                   className={`w-full border ${
//                     passwordError ? "border-red-500" : "border-gray-300"
//                   } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 />
//                 {passwordError && (
//                   <p className="text-red-500 text-sm mt-1">{passwordError}</p>
//                 )}
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="passwordConfirm"
//                   required
//                   className={`w-full border ${
//                     confirmPasswordError ? "border-red-500" : "border-gray-300"
//                   } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
//                 />
//                 {confirmPasswordError && (
//                   <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
//                 )}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-2">
//                 <button
//                   type="submit"
//                   className="w-1/2 h-13 bg-green-600  rounded-md text-white font-semibold hover:bg-green-700 transition"
//                 >
//                   Create account
//                 </button>

//                 {/* Google Authentication Button */}
//                 <button
//                   type="button"
//                   onClick={handleGoogleAuth}
//                   className="flex items-center justify-center border border-gray-300 py-2 px-4  h-13 rounded-md font-semibold hover:bg-gray-100 transition"
//                 >
//                   <img src="/google.jpeg" className="w-6 h-6" alt="Google" />
//                   <p className="ml-2">Sign up with Google</p>
//                 </button>
//               </div>
//             </form>

//             {/* Login Link */}
//             <p className="text-center text-gray-600 mt-4">
//               Already have an account?{" "}
//               <Link href="/login" className="text-blue-600 font-semibold">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const router = useRouter();

  // Error states
  const [generalError, setGeneralError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{8,15}$/;
    return phoneRegex.test(phone);
  };

  async function signUpFun(formData) {
    setGeneralError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setPhoneError("");

    const user = {
      firstName: formData.get("firstName")?.trim(),
      lastName: formData.get("lastName")?.trim(),
      email: formData.get("email")?.trim(),
      password: formData.get("password"),
      passwordConfirm: formData.get("passwordConfirm"),
      phone: formData.get("phone")?.trim(),
    };

    // Validation
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !user.passwordConfirm ||
      !user.phone
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (user.password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    if (user.passwordConfirm !== user.password) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    if (!validatePhone(user.phone)) {
      setPhoneError("Phone number must be numeric and at least 8 digits.");
      return;
    }

    // Check that form has at least 8 characters total
    const totalChars =
      user.firstName.length +
      user.lastName.length +
      user.email.length +
      user.password.length +
      user.passwordConfirm.length +
      user.phone.length;

    if (totalChars < 8) {
      setGeneralError("Form must have at least 8 characters total.");
      toast.error("Form must have at least 8 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/ELACO/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      let resData;
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        resData = await response.json();
      } else {
        resData = { message: "Unexpected server response." };
      }

      if (!response.ok) {
        throw new Error(resData.message || "Signup failed! Please check your details.");
      }

      // const currentUserId = resData.data.user._id;
      // localStorage.setItem("userId", currentUserId);

      toast.success("Signup successful! Redirecting...", { autoClose: 2000 });

      setTimeout(() => {
        router.push("/homepage");
      }, 2000);
    } catch (err) {
      const errorMsg = err.message || "Signup failed. Please try again.";

      if (errorMsg.toLowerCase().includes("email")) setEmailError(errorMsg);
      else if (errorMsg.toLowerCase().includes("confirm")) setConfirmPasswordError(errorMsg);
      else if (errorMsg.toLowerCase().includes("password")) setPasswordError(errorMsg);
      else setGeneralError(errorMsg);

      toast.error(errorMsg);
    }
  }

  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* LEFT SIDE - FORM */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
        <Link href="/Home" className="text-gray-500 mb-6 hover:text-black transition inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Create Your Account</h1>
        <p className="text-gray-600 mb-8">
          Join Elaco — where ambition meets community.
        </p>

        {generalError && <p className="text-red-500 mb-4">{generalError}</p>}

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            await signUpFun(formData);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full" 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full" 
              required 
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className={`px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full mt-4 ${emailError ? 'border-red-500' : ''}`}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className={`px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full mt-4 ${phoneError ? 'border-red-500' : ''}`}
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={8}
            className={`px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full mt-4 ${passwordError ? 'border-red-500' : ''}`}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            required
            className={`px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07ebbd] focus:border-transparent w-full mt-4 ${confirmPasswordError ? 'border-red-500' : ''}`}
          />
          {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}

          <button
            type="submit"
            className="bg-gray-900 hover:bg-black text-white py-3 rounded-lg w-full mt-6 font-medium transition"
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleGoogleAuth}
            className="flex items-center justify-center gap-2 border border-gray-300 py-3 mt-4 rounded-lg font-medium hover:bg-gray-50 transition w-full"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already a member?{" "}
          <Link href="/signin" className="text-[#07ebbd] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* RIGHT SIDE - INFO */}
      <div className="hidden md:flex md:w-1/2 bg-gray-900 text-white">
        <div className="flex flex-col justify-between w-full p-16">
          {/* Top logo */}
          <div>
            <h3 className="text-xl font-bold text-[#07ebbd]">ELACO</h3>
          </div>
          
          {/* Center content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Work space for <span className="text-[#07ebbd]">creators</span>
            </h2>
            
            <p className="text-gray-300 mb-12">
              A flexible environment designed for productivity,
              collaboration and growth.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#07ebbd] mr-3"></div>
                <span>24/7 Access</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#07ebbd] mr-3"></div>
                <span>High-Speed Internet</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#07ebbd] mr-3"></div>
                <span>Community Events</span>
              </li>
            </ul>
          </div>
          
          {/* Footer */}
          <div>
            <p className="text-sm text-gray-500">© 2025 ELACO</p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}