// import React from "react";
// import { motion } from "framer-motion";

// const VidLand = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden ">
//       <video
//         className="w-screen h-screen object-cover sm:flex hidden"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.mp4"
//       ></video>
//       <video
//         className="w-screen h-screen object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemobf.mp4"
//       ></video>
//     </div>
//   );
// };

// export default VidLand;
"use client";
import React from "react";
import { motion } from "framer-motion";

// const VidLand = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden relative">
//       {/* Desktop Video */}
//       <video
//         className="w-screen h-screen object-cover sm:flex hidden"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.webm"
//       ></video>

//       {/* Mobile Video */}
//       <video
//         className="w-screen h-screen object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemob.webm"
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10"></div>
//     </div>
//   );
// };
const fadeIn2 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};
const VidLand = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative relative">
      {/* Desktop Video */}
      <video
        className="w-screen h-screen object-cover sm:flex hidden"
        autoPlay
        muted
        playsInline
        loop
        src="/homepage/homef.webm"
      ></video>

      {/* Mobile Video */}
      <video
        className="w-screen h-screen object-cover sm:hidden flex"
        autoPlay
        muted
        playsInline
        loop
        src="/homepage/homemob.webm"
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      <div className="absolute top-1/2 left-[max(5%,calc((100vw-1250px)/2))] z-[100] -translate-y-1/2">
        <motion.h1
          className="fpt-600 min-1366:text-[65px] xl:text-[52px] lg:text-[40px] md:text-[30px] text-[24px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 min-1600:text-[70px]"
          variants={fadeIn2}
        >
          Delivering
          <br /> Grade A Industrial <br /> & Logistics Parks
        </motion.h1>
      </div>
    </div>
  );
};

export default VidLand;
