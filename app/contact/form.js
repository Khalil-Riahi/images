// // // // // // // // components/ContactForm.tsx
// // // // // // // import React from 'react';






// // // // // // // export default function ContactForm() {
// // // // // // //   return (
// // // // // // //     <div className="flex flex-col lg:flex-row gap-10 p-10">
// // // // // // //       <div className="flex-[2] gap-2">
// // // // // // //         <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
// // // // // // //         <form className="flex flex-col gap-4 ">
// // // // // // //           <div className="flex flex-col lg:flex-row gap-4 text-gray-900">
// // // // // // //             <input type="text" placeholder="Nom & Prénom" className="border p-3 w-full" />
// // // // // // //             <input type="email" placeholder="E-mail" className="border p-3 w-full" />
// // // // // // //           </div>
// // // // // // //           <input type="text" placeholder="Sujet" className="border p-3 w-full text-gray-900" />
// // // // // // //           <textarea placeholder="Message" rows={6} className="border p-3 w-full text-gray-900"></textarea>
// // // // // // //           <button type="submit" className="mt-4 w-40 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition px-6 py-3 uppercase tracking-widest">
// // // // // // //           Send
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       </div>

// // // // // // //       </div>
// // // // // // //   );
// // // // // // // }

// // // // // // 'use client';

// // // // // // import React, { useState } from 'react';
// // // // // // import { toast } from 'react-toastify';
// // // // // // import 'react-toastify/dist/ReactToastify.css';

// // // // // // export default function ContactForm() {
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const sendContactForm = async (formData) => {
// // // // // //     const data = {
// // // // // //       name: formData.get('name'),
// // // // // //       email: formData.get('email'),
// // // // // //       Sujet: formData.get('subject'),
// // // // // //       Message: formData.get('message'),
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify(data),
// // // // // //       });

// // // // // //       const result = await response.json();

// // // // // //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// // // // // //       return result;
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       throw err;
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     const formData = new FormData(e.target);

// // // // // //     try {
// // // // // //       const res = await sendContactForm(formData);
// // // // // //       toast.success('Message sent successfully!');
// // // // // //       e.target.reset(); // Clear the form
// // // // // //     } catch (err) {
// // // // // //       toast.error(err.message || 'Error sending message');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex flex-col lg:flex-row gap-10 p-10 ">
// // // // // //       <div className="flex-[2] gap-2 w-full text-gray-900 bg-yellow-300">
// // // // // //         <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

// // // // // //         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
// // // // // //           <div className="flex flex-col lg:flex-row gap-4">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="name"
// // // // // //               placeholder="Nom & Prénom"
// // // // // //               className="border p-3 w-full placeholder-gray-500"
// // // // // //               required
// // // // // //             />
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               name="email"
// // // // // //               placeholder="E-mail"
// // // // // //               className="border p-3 w-full placeholder-gray-500"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="subject"
// // // // // //             placeholder="Sujet"
// // // // // //             className="border p-3 w-full placeholder-gray-500"
// // // // // //             required
// // // // // //           />

// // // // // //           <textarea
// // // // // //             name="message"
// // // // // //             placeholder="Message"
// // // // // //             rows={6}
// // // // // //             className="border p-3 w-full placeholder-gray-500"
// // // // // //             required
// // // // // //           ></textarea>

// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             disabled={loading}
// // // // // //             className="mt-4 w-40 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 transition px-6 py-3 uppercase tracking-widest"
// // // // // //           >
// // // // // //             {loading ? 'Sending...' : 'Send'}
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // 'use client';

// // // // // import React, { useState } from 'react';
// // // // // import { toast } from 'react-toastify';
// // // // // import 'react-toastify/dist/ReactToastify.css';

// // // // // export default function ContactForm() {
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const sendContactForm = async (formData) => {
// // // // //     const data = {
// // // // //       email: formData.get('email'),
// // // // //       Sujet: formData.get('subject'),
// // // // //       Message: formData.get('message'),
// // // // //       name:formData.get('name'),
// // // // //       phoneNumber:formData.get('phoneNumber')

// // // // //     };

// // // // //     try {
// // // // //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(data),
// // // // //       });

// // // // //       const result = await response.json();
// // // // //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// // // // //       return result;
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       throw err;
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     const formData = new FormData(e.target);

// // // // //     try {
// // // // //       await sendContactForm(formData);
// // // // //       toast.success('Message sent successfully!',{ autoClose: 60000 });
// // // // //       e.target.reset();
// // // // //     } catch (err) {
// // // // //       toast.error(err.message || 'Error sending message',{ autoClose: 60000 });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-900">
// // // // //       <label className="block font-semibold mb-1 text-blue-900">Name</label>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="name"
// // // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // // //           required
// // // // //         />
// // // // //       <div>
// // // // //         <label className="block font-semibold mb-1 text-blue-900">Your Email Address</label>
// // // // //         <input
// // // // //           type="email"
// // // // //           name="email"
// // // // //           placeholder="you@example.com"
// // // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // // //           required
// // // // //         />
// // // // //       </div>
// // // // //       <div>
// // // // //         <label className="block font-semibold mb-1 text-blue-900">Phone Number</label>
// // // // //         <input
// // // // //           type="tel"
// // // // //           name="phoneNumber"
// // // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // // //           required
// // // // //         />
// // // // //       </div>


// // // // //       <div>
// // // // //         <label className="block font-semibold mb-1 text-blue-900">Subject</label>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="subject"
// // // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // // //           required
// // // // //         />
// // // // //       </div>
     

// // // // //       <div>
// // // // //         <label className="block font-semibold mb-1 text-blue-900">How can we help?</label>
// // // // //         <textarea
// // // // //           name="message"
// // // // //           rows={5}
// // // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // // //           required
// // // // //         ></textarea>
// // // // //       </div>

// // // // //       <button
// // // // //         type="submit"
// // // // //         disabled={loading}
// // // // //         className="bg-blue-950 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition w-full"
// // // // //       >
// // // // //         {loading ? 'Sending...' : 'SEND'}
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // }
// // // // 'use client';

// // // // import React, { useState } from 'react';
// // // // import { toast, ToastContainer } from 'react-toastify';
// // // // import 'react-toastify/dist/ReactToastify.css';

// // // // export default function ContactForm() {
// // // //   const [loading, setLoading] = useState(false);

// // // //   const sendContactForm = async (formData) => {
// // // //     const data = {
// // // //       email: formData.get('email'),
// // // //       Sujet: formData.get('subject'),
// // // //       Message: formData.get('message'),
// // // //       name: formData.get('name'),
// // // //       phoneNumber: formData.get('phoneNumber'),
// // // //     };

// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(data),
// // // //       });

// // // //       const result = await response.json();
// // // //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// // // //       return result;
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       throw err;
// // // //     }
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     const formData = new FormData(e.target);

// // // //     try {
// // // //       await sendContactForm(formData);
// // // //       toast.success('Message sent successfully!', { autoClose: 2000 });
// // // //       e.target.reset();
// // // //     } catch (err) {
// // // //       toast.error(err.message || 'Error sending message', { autoClose: 2000 });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-900">
// // // //         <label className="block font-semibold mb-1 text-blue-900">Name</label>
// // // //         <input
// // // //           type="text"
// // // //           name="name"
// // // //           className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // //           required
// // // //         />

// // // //         <div>
// // // //           <label className="block font-semibold mb-1 text-blue-900">Your Email Address</label>
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="you@example.com"
// // // //             className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block font-semibold mb-1 text-blue-900">Phone Number</label>
// // // //           <input
// // // //             type="tel"
// // // //             name="phoneNumber"
// // // //             className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block font-semibold mb-1 text-blue-900">Subject</label>
// // // //           <input
// // // //             type="text"
// // // //             name="subject"
// // // //             className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div>
// // // //           <label className="block font-semibold mb-1 text-blue-900">How can we help?</label>
// // // //           <textarea
// // // //             name="message"
// // // //             rows={5}
// // // //             className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
// // // //             required
// // // //           ></textarea>
// // // //         </div>

// // // //         <button
// // // //           type="submit"
// // // //           disabled={loading}
// // // //           className="bg-blue-950 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition w-full"
// // // //         >
// // // //           {loading ? 'Sending...' : 'SEND'}
// // // //         </button>
// // // //       </form>

// // // //       {/* Toast container to display notifications */}
// // // //       <ToastContainer position="top-right" />
// // // //     </>
// // // //   );
// // // // }
// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import { motion } from 'framer-motion';

// // // export default function ContactForm() {
// // //   const [loading, setLoading] = useState(false);

// // //   const sendContactForm = async (formData) => {
// // //     const data = {
// // //       email: formData.get('email'),
// // //       Sujet: formData.get('subject'),
// // //       Message: formData.get('message'),
// // //       name: formData.get('name'),
// // //       phoneNumber: formData.get('phoneNumber'),
// // //     };

// // //     try {
// // //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(data),
// // //       });

// // //       const result = await response.json();
// // //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// // //       return result;
// // //     } catch (err) {
// // //       console.error(err);
// // //       throw err;
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     const formData = new FormData(e.target);

// // //     try {
// // //       await sendContactForm(formData);
// // //       toast.success('Message sent successfully!', { autoClose: 2000 });
// // //       e.target.reset();
// // //     } catch (err) {
// // //       toast.error(err.message || 'Error sending message', { autoClose: 2000 });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <motion.form
// // //         onSubmit={handleSubmit}
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="bg-white p-10 shadow-lg rounded-3xl w-full space-y-6"
// // //       >
// // //         <h3 className="text-sm text-center tracking-widest text-cyan-600 uppercase">Be in Touch</h3>
// // //         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Ask a Question</h2>
// // //         <p className="text-center text-gray-600 max-w-xl mx-auto">
// // //           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
// // //         </p>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Name"
// // //             required
// // //             className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
// // //           />
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             placeholder="E-mail"
// // //             required
// // //             className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
// // //           />
// // //         </div>

// // //         <input
// // //           type="tel"
// // //           name="phoneNumber"
// // //           placeholder="Phone Number"
// // //           required
// // //           className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
// // //         />

// // //         <input
// // //           type="text"
// // //           name="subject"
// // //           placeholder="Subject"
// // //           required
// // //           className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
// // //         />

// // //         <textarea
// // //           name="message"
// // //           placeholder="Message"
// // //           rows={5}
// // //           required
// // //           className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
// // //         />

// // //         <div className="flex items-center gap-2">
// // //           <input type="checkbox" required className="accent-cyan-500" />
// // //           <label className="text-gray-500 text-sm">I agree that my submitted data is being collected and stored.</label>
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="bg-gray-900 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-md transition-all w-full"
// // //         >
// // //           {loading ? 'Sending...' : 'SEND YOUR MESSAGE'}
// // //         </button>
// // //       </motion.form>

// // //       <ToastContainer position="top-right" />
// // //     </>
// // //   );
// // // }
// // 'use client';

// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function ContactForm() {
// //   const [loading, setLoading] = useState(false);

// //   const sendContactForm = async (formData) => {
// //     const data = {
// //       email: formData.get('email'),
// //       Sujet: formData.get('subject'),
// //       Message: formData.get('message'),
// //       name: formData.get('name'),
// //       phoneNumber: formData.get('phoneNumber'),
// //     };

// //     try {
// //       const response = await fetch('http://localhost:8000/ELACO/contact', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(data),
// //       });

// //       const result = await response.json();
// //       if (!response.ok) throw new Error(result.message || 'Submission failed');
// //       return result;
// //     } catch (err) {
// //       console.error(err);
// //       throw err;
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     const formData = new FormData(e.target);

// //     try {
// //       await sendContactForm(formData);
// //       toast.success('Message sent successfully!', { autoClose: 2000 });
// //       e.target.reset();
// //     } catch (err) {
// //       toast.error(err.message || 'Error sending message', { autoClose: 2000 });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <motion.form
// //         onSubmit={handleSubmit}
// //         className="space-y-6"
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.4, ease: 'easeOut' }}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="E-mail"
// //             className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
// //             required
// //           />
// //         </div>
// //         <input
// //           type="tel"
// //           name="phoneNumber"
// //           placeholder="Phone Number"
// //           className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="subject"
// //           placeholder="Subject"
// //           className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
// //           required
// //         />
// //         <textarea
// //           name="message"
// //           placeholder="Message"
// //           rows={5}
// //           className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
// //           required
// //         />
// //         <div className="flex items-center space-x-2">
// //           <input type="checkbox" required />
// //           <span className="text-sm text-gray-700">I agree that my submitted data is being collected and stored.</span>
// //         </div>
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="bg-gray-700 text-white text-sm px-6 py-3 rounded-md uppercase tracking-widest hover:bg-black transition-all duration-300"
// //         >
// //           {loading ? 'Sending...' : 'Send Your Message'}
// //         </button>
// //       </motion.form>
// //       <ToastContainer position="top-right" />
// //     </>
// //   );
// // }
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);

//   const sendContactForm = async (formData) => {
//     const data = {
//       email: formData.get('email'),
//       Sujet: formData.get('subject'),
//       Message: formData.get('message'),
//       name: formData.get('name'),
//       phoneNumber: formData.get('phoneNumber'),
//     };

//     try {
//       const response = await fetch('http://localhost:8000/ELACO/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message || 'Submission failed');
//       return result;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData(e.target);

//     try {
//       await sendContactForm(formData);
//       toast.success('Message sent successfully!', { autoClose: 2000 });
//       e.target.reset();
//     } catch (err) {
//       toast.error(err.message || 'Error sending message', { autoClose: 2000 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <motion.form
//         onSubmit={handleSubmit}
//         className="space-y-6"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4, ease: 'easeOut' }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="First Name"
//             className="border border-gray-300 rounded-lg p-3 w-full"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             className="border border-gray-300 rounded-lg p-3 w-full"
//             required
//           />
//         </div>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="border border-gray-300 rounded-lg p-3 w-full"
//           required
//         />
//         <input
//           type="tel"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           className="border border-gray-300 rounded-lg p-3 w-full"
//           required
//         />
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject"
//           className="border border-gray-300 rounded-lg p-3 w-full"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows={6}
//           className="border border-gray-300 rounded-lg p-3 w-full"
//           required
//         />
//         <div className="flex items-center space-x-2">
//           <input type="checkbox" required />
//           <span className="text-sm text-gray-700">
//             I agree that my submitted data is being collected and stored.
//           </span>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-[#5B2EFF] hover:bg-[#4727cc] text-white font-bold py-3 px-6 rounded-xl transition duration-200"
//         >
//           {loading ? 'Sending...' : 'Send Message'}
//         </button>
//       </motion.form>
//       <ToastContainer position="top-right" />
//     </>
//   );
// }
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const sendContactForm = async (formData) => {
    const data = {
      email: formData.get('email'),
      Sujet: formData.get('subject'),
      Message: formData.get('message'),
      name: formData.get('name'),
      phoneNumber: formData.get('phoneNumber'),
    };

    try {
      const response = await fetch('http://localhost:8000/ELACO/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Submission failed');
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      await sendContactForm(formData);
      toast.success('Message sent successfully!', { autoClose: 2000 });
      e.target.reset();
    } catch (err) {
      toast.error(err.message || 'Error sending message', { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center my-12">
        <p className="text-sm text-[#07ebbd] font-semibold">BE IN TOUCH</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Ask a Question</h2>
        <div className="flex justify-center my-2 space-x-1">
          <span className="w-1.5 h-1.5 bg-[#07ebbd] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[#07ebbd]  rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[#07ebbd] rounded-full"></span>
        </div>
        <div className="text-gray-500 max-w-2xl mx-auto">
        <strong>Questions, bug reports, feedback, feature requests — we're here for it all.</strong>
  
      </div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-gray-100 p-4 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="bg-gray-100 p-4 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className="bg-gray-100 p-4 w-full"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="phone Number"
            className="bg-gray-100 p-4 w-full"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="bg-gray-100 p-4 w-full"
          required
        />
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <input type="checkbox" className="mt-1" required />
          <label>I agree that my submitted data is being collected and stored.</label>
        </div>
        <div className="text-center text-[#07ebbd]">
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-400 hover:bg-gray-500 text-white tracking-widest font-semibold py-3 px-8"
          >
            {loading ? 'SENDING...' : 'SEND YOUR MESSAGE'}
          </button>
        </div>
      </motion.form>

      <ToastContainer position="top-right" />
    </>
  );
}
