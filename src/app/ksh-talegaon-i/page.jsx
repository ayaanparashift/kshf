import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
// import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
export const metadata = {
  title:
    "KSH Talegaon Premium Industrial and Logistics Park in Pune with Build-to-Suit Infrastructure",
  description:
    "KSH Talegaon is a premium industrial and logistics park in Pune, Maharashtra, offering scalable infrastructure, advanced connectivity, and customized Warehouse solutions",
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
        {/* <ParkInfra /> */}
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
