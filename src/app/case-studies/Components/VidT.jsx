// "use client";
// import React, { useRef, useState } from "react";
// const VidT = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   // const [activeSlide, setActiveSlide] = useState(slides[0]);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleThumbnailClick = (slide) => {
//     // Pause current video and reset playback
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//     setIsPlaying(false);
//     setActiveSlide(slide);
//   };
//   return (
//     <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
//       <div className="fix12 ">
//         <div className="w-full flex flex-col">
//           {/*  */}
//           <div className="overflow-x-hidden h-fit w-full">
//             <div
//               // initial={{ opacity: 0 }}
//               // whileInView={{ opacity: 1 }}
//               // viewport={{ once: true, amount: 0.1 }}
//               // transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//               className="overflow-x-hidden h-fit md:whitespace-nowrap"
//             >
//               <h2
//                 className={`leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px]  fpt-500 text-[#fff] linehead-text`}
//               >
//                 What our clients say!
//               </h2>
//             </div>
//           </div>
//           {/*  */}
//           <div className="flex min-1366:h-[600px] lg:h-[550px]">
//             <video
//               src="/homepage/homef.webm"
//               className="min-w-full object-cover "
//             ></video>
//             <button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VidT;

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const VidT = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
//       <div className="fix12 ">
//         <div className="w-full flex flex-col">
//           {/* heading */}
//           <div className="overflow-x-hidden h-fit w-full">
//             <div className="overflow-x-hidden h-fit md:whitespace-nowrap">
//               <h2 className="leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px] fpt-500 text-[#fff] linehead-text">
//                 What our clients say!
//               </h2>
//             </div>
//           </div>
//           {/* video */}
//           <div className="flex min-1366:h-[600px] lg:h-[550px] relative">
//             <video
//               ref={videoRef}
//               src="/homepage/homef.webm"
//               className="min-w-full object-cover"
//             ></video>
//             <motion.button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 1 }} // always visible, adjust if you want fade on hover
//               transition={{ duration: 0.5 }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VidT;

// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const VidT = () => {
//   const videoRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const videoContainerRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showControls, setShowControls] = useState(true);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying((prev) => !prev);
//       // show controls briefly on manual toggle
//       setShowControls(true);
//       resetInactivityTimer();
//     }
//   };

//   const resetInactivityTimer = () => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setShowControls(false);
//     }, 2000); // 5 seconds of inactivity
//   };

//   const handleMouseMove = () => {
//     setShowControls(true);
//     resetInactivityTimer();
//   };

//   useEffect(() => {
//     const container = videoContainerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//     }

//     resetInactivityTimer();

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove);
//       }
//       clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   return (
//     <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
//       <div className="fix12 ">
//         <div className="w-full flex flex-col">
//           {/* Heading */}
//           <div className="overflow-x-hidden h-fit w-full">
//             <div className="overflow-x-hidden h-fit md:whitespace-nowrap">
//               <h2 className="leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px] fpt-500 text-[#fff] linehead-text">
//                 What our clients say!
//               </h2>
//             </div>
//           </div>
//           {/* Video */}
//           <div
//             ref={videoContainerRef}
//             className="flex min-1366:h-[600px] lg:h-[550px] relative"
//           >
//             <video
//               ref={videoRef}
//               src="/homepage/homef.webm"
//               className="min-w-full object-cover"
//               playsInline
//             ></video>

//             <motion.button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: showControls ? 1 : 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VidT;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const VidT = () => {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      const nextState = !isPlaying;
      setIsPlaying(nextState);
      setShowControls(true);

      // only reset timer if video is going to play
      if (nextState) resetInactivityTimer();
    }
  };

  const resetInactivityTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      // Hide only if video is playing
      if (isPlaying) setShowControls(false);
    }, 2000); // 2 seconds of inactivity
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (isPlaying) resetInactivityTimer(); // only reset timer if video is playing
  };

  useEffect(() => {
    const container = videoContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    if (isPlaying) resetInactivityTimer();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      clearTimeout(timeoutRef.current);
    };
  }, [isPlaying]); // restart timer logic if playback state changes

  return (
    <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
      <div className="fix12 ">
        <div className="w-full flex flex-col">
          {/* Heading */}
          <div className="overflow-x-hidden h-fit w-full">
            <div className="overflow-x-hidden h-fit md:whitespace-nowrap">
              <h2 className="leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px] fpt-500 text-[#fff] linehead-text">
                What our clients say!
              </h2>
            </div>
          </div>
          {/* Video */}
          <div
            ref={videoContainerRef}
            className="flex min-1366:h-[600px] lg:h-[550px] relative"
          >
            <video
              ref={videoRef}
              controls
              src="/homepage/homef.webm"
              className="min-w-full object-cover"
              playsInline
            ></video>

            <motion.button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
                alt="Play/Pause"
                className="w-12 h-12"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidT;
