import { Toaster } from "react-hot-toast";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { ReduxProvider } from "./_store/ReduxProvider";

export const metadata = {
  title: "interviewShooter",
  description: "developed by kirtikumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider >
      <body >
        <ClerkProvider>
          <Toaster />
          {children}
        </ClerkProvider>
      </body>
      </ReduxProvider>
    </html>
  );
}
