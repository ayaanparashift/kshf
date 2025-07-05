import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "./componentsf/ParkInfra";
import CharAcc from "../ksh-chakan-i/componentsf/CharAcc";
import PDTab from "../Components/PDTab";

export const metadata = {
  title:
    "KSH Chakan III Industrial Park and Warehouse in Pune Seamlessly Connected to Chakan Industrial Area",
  description:
    "KSH Chakan III provides industrial park and warehouse in Pune with custom solutions, modern infrastructure, and strategic connectivity to industrial area in Chakan.",
};
const tabsData = [
  {
    title: "KSH Parks",
    image: "/ParkPage/cpov.png",
  },
  {
    title: "Notable Industries",
    image: "/Slideimgs/ssf1.png",
  },
  {
    title: "Connectivity",
    image: "/Slideimgs/Culture.png",
  },
];
const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        {/* <ParkOverview /> */}

        <PDTab
          tdata={tabsData}
          para="The industrial park boasts IGBC pre-certified Platinum status,
            highlighting KSH Infra’s dedication to green industrial development.
            With exceptional planning and top-notch amenities, this fully
            customisable, move-in ready industrial facility guarantees
            uncompromised productivity, efficiency, and safety for your
            workforce."
          title="About Chakan, Pune"
        />
        <ParkInfo />
        <MapSection />
        {/* <CharSlide /> */}
        <CharAcc />
        <ParkInfra />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
