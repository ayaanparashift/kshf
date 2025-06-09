"use client";
import React from "react";
import { motion } from "framer-motion";

const SideBars = ({ todos, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="lg:w-fit flex flex-col gap-[10px] min-1366:gap-[20px] w-full sm:min-w-[305px] lg:mt-[300px]">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => (
          <motion.p
            key={item.id}
            onClick={() => setActiveSidebar(item.id)}
            className="cursor-pointer border-b min-1366:pb-[20px] min-1366:pr-[25px] pr-[10px] pb-[10px] md:max-w-[400px] min-1366:max-w-[305px] transition-colors duration-300 fsans-600"
            style={{
              color:
                activeSidebar === item.id ? "#ffffff" : "rgba(255,255,255,0.4)",
              borderBottomColor:
                activeSidebar === item.id
                  ? "#D7D7D7"
                  : "rgba(215,215,215,0.34)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.7, 0, 0.4, 1],
            }}
          >
            {item.title}
          </motion.p>
        ))
      ) : (
        <p className="cursor-pointer text-white border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300 fsans-600">
          No Data Available
        </p>
      )}
    </div>
  );
};

export default SideBars;
