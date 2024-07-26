import  { Toaster } from 'react-hot-toast';
import "./globals.css";

import {
  ClerkProvider,

} from "@clerk/nextjs";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ClerkProvider>
          <Toaster/>
         {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
