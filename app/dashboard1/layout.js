// import { Outfit } from 'next/font/google';
// // import './globals.css';

// import { SidebarProvider } from '@/app/context/SidebarContext';
// import { ThemeProvider } from '@/app/context/ThemeContext';

// const outfit = Outfit({
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${outfit.className} dark:bg-gray-900`}>
//         <ThemeProvider>
//           <SidebarProvider>{children}</SidebarProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
// app/dashboard1/layout.js

// import the font and any providers you need
import { Outfit } from 'next/font/google';
import { SidebarProvider } from '@/app/context/SidebarContext';
import { ThemeProvider } from '@/app/context/ThemeContext';

const outfit = Outfit({
  subsets: ['latin'],
});

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className={`${outfit.className} dark:bg-gray-900`}>
          {children}
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
