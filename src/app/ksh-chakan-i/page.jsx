import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import MapSection from "./componentsf/MapSection";
import MapCard from "./componentsf/MapCard";
// import ParkInfra from "./componentsf/ParkInfra";
// import MapSection from "./componentsf/MapSection";
export const metadata = {
  title:
    "KSH Chakan I Premium Industrial Park in Pune with Custom Logistics and Warehouse Solutions",
  description:
    "KSH Chakan provides a premium industrial park in Pune with customizable infrastructure, scalable solutions, and seamless connectivity for businesses.",
};
const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        <ParkOverview />
        <ParkInfo />
        <MapSection />
        <CharSlide />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
