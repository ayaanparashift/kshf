import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav/Nav";
import GlobalEnquire from "./Components/GlobalEnquire";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bodylayout`}
      >
        <GlobalEnquire>
          <Navbar />
          {/* <div className="h-[100px] max-w-screen relative z-[100000000000000000000000]" /> */}
          <Toaster position="top-center" reverseOrder={false} />
          {children}

          <Footer />
        </GlobalEnquire>
      </body>
    </html>
  );
}
