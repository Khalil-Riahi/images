// 'use client';

// import { useEffect, useRef } from 'react';
// import { usePathname } from 'next/navigation';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// const LoadingProgress = () => {
//   const pathname = usePathname();
//   const previousPath = useRef(pathname);

//   useEffect(() => {
//     if (previousPath.current !== pathname) {
//       NProgress.start();
//       previousPath.current = pathname;

//       setTimeout(() => {
//         NProgress.done();
//       }, 500); // adjust as needed
//     }
//   }, [pathname]);

//   return null;
// };

// export default LoadingProgress;
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingProgress() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate loading time

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}
// export default LoadingProgress;
