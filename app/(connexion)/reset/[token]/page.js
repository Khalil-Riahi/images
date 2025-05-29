// // // // app/reset-password/[token]/page.jsx
// // // "use client";

// // // import { useState } from "react";
// // // import { useRouter, useParams } from "next/navigation";
// // // import { toast } from "react-toastify";

// // // export default function ResetPassword() {
// // //   const router = useRouter();
// // //   const { token } = useParams();

// // //   const [password, setPassword] = useState("");
// // //   const [passwordConfirm, setPasswordConfirm] = useState("");

// // //   const handleReset = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const res = await fetch(`http://localhost:8000/ELACO/resetpassword`, {
// // //         method: "PATCH",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ password, passwordConfirm }),
// // //       });

// // //       const data = await res.json();

// // //       if (!res.ok) throw new Error(data.message || "Reset failed");

// // //       toast.success("Password reset successful!");
// // //       router.push("/login");
// // //     } catch (err) {
// // //       toast.error(err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-8 max-w-md mx-auto">
// // //       <h2 className="text-2xl font-bold mb-4">Reset your password</h2>
// // //       <form onSubmit={handleReset}>
// // //         <input
// // //           type="password"
// // //           placeholder="New password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           required
// // //           className="w-full p-2 border rounded mb-4"
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Confirm new password"
// // //           value={passwordConfirm}
// // //           onChange={(e) => setPasswordConfirm(e.target.value)}
// // //           required
// // //           className="w-full p-2 border rounded mb-4"
// // //         />
// // //         <button type="submit" className="w-full bg-black text-white p-2 rounded">
// // //           Reset Password
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }
// // // "use client"
// // // import { useState } from 'react';
// // // import { useRouter } from 'next/navigation';

// // // export default function ResetPassword() {
// // //   const [password, setPassword] = useState('');
// // //   const [passwordConfirm, setPasswordConfirm] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [message, setMessage] = useState('');
// // //   const [error, setError] = useState('');
// // //   const router = useRouter();
// // //   const { token } = router.query;

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (password !== passwordConfirm) {
// // //       setError('Passwords do not match!');
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError('');
// // //     setMessage('');

// // //     try {
// // //       const res = await fetch(`localhost:8000/ELACO/resetpassword/${token}`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ password, passwordConfirm }),
// // //       });

// // //       const data = await res.json();

// // //       if (!res.ok) throw new Error(data.error || 'Failed to reset password');

// // //       setMessage('Password reset successful! Redirecting...');
// // //       setTimeout(() => router.push('/dashboard1/profile'), 2000);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Reset Password</h1>
// // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // //       {message && <p style={{ color: 'green' }}>{message}</p>}
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           placeholder="New Password"
// // //           required
// // //         />
// // //         <input
// // //           type="password"
// // //           value={passwordConfirm}
// // //           onChange={(e) => setPasswordConfirm(e.target.value)}
// // //           placeholder="Confirm Password"
// // //           required
// // //         />
// // //         <button type="submit" disabled={loading}>
// // //           {loading ? 'Resetting...' : 'Reset Password'}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';

// // export default function ResetPassword({ params }) {
// //   const [password, setPassword] = useState('');
// //   const [passwordConfirm, setPasswordConfirm] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState('');
// //   const [error, setError] = useState('');
// //   const router = useRouter();

// //   const token = params.reset; // ✅ This is how you access [reset]

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (password !== passwordConfirm) {
// //       setError('Passwords do not match!');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');
// //     setMessage('');

// //     try {
// //       const res = await fetch(`http://localhost:8000/ELACO/resetpassword/${token}`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ password, passwordConfirm }),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) throw new Error(data.error || 'Failed to reset password');

// //       setMessage('Password reset successful! Redirecting...');
// //       setTimeout(() => router.push('/dashboard1/profile'), 2000);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Reset Password</h1>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       {message && <p style={{ color: 'green' }}>{message}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="New Password"
// //           required
// //         />
// //         <input
// //           type="password"
// //           value={passwordConfirm}
// //           onChange={(e) => setPasswordConfirm(e.target.value)}
// //           placeholder="Confirm Password"
// //           required
// //         />
// //         <button type="submit" disabled={loading}>
// //           {loading ? 'Resetting...' : 'Reset Password'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ResetPasswordClient({ token }) {
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== passwordConfirm) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setMessage('');

//     try {
//       const res = await fetch(`http://localhost:8000/ELACO/resetpassword/${token}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ password, passwordConfirm }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || 'Failed to reset password');

//       setMessage('Password reset successful! Redirecting...');
//       setTimeout(() => router.push('/dashboard1/profile'), 2000);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="New Password"
//           required
//         />
//         <input
//           type="password"
//           value={passwordConfirm}
//           onChange={(e) => setPasswordConfirm(e.target.value)}
//           placeholder="Confirm Password"
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Resetting...' : 'Reset Password'}
//         </button>
//       </form>
//     </div>
//   );
// }
import ResetPasswordClient from './ResetPasswordClient';

export default function Page({ params }) {
  const { token } = params;

  return <ResetPasswordClient token={token} />;
}
