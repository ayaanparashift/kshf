import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
import CharAcc from "../ksh-chakan-i/componentsf/CharAcc";
import MapSection from "./componentsf/MapSection";
import PDTab from "../Components/PDTab";

export const metadata = {
  title:
    "KSH Chakan IV Industrial Parks Solutions in Pune offering Plug and Play Industrial Park and Grade A Infrastructure Facilities",
  description:
    "KSH Chakan IV offers Grade A industrial parks in Chakan with modern infrastructure, built-to-suit warehouses, and strategic connectivity near Pune.",
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
  );
};

export default page;
