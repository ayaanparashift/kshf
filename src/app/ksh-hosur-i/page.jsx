import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
// import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import CharSlide from "./componentsf/CharSlide";
import ParkInfra from "./componentsf/ParkInfra";
import CharAcc from "./componentsf/CharAcc";
import PDTab from "../Components/PDTab";
// import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
export const metadata = {
  title: "KSH INFRA: Industrial & Warehouse Park in Hosur",
  description:
    "Discover KSH Hosur Warehouse Park, the first of KSH INFRA's industrial parks attracting global investors. Setting the benchmark for green industrial infrastructure.",
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
          para="Hosur has become a top choice for manufacturing and industry,
              sitting right next to Bangalore with excellent transportation
              links. Major companies like Tata, Titan, Ashok Leyland, TVS
              Motors, and Schaeffler already call it home, creating a strong and
              diverse industrial community. With a well-developed industrial
              base, skilled workforce, and growing support from Bangalore’s
              progressive industrial policies, Hosur is poised for accelerated
              expansion. Its connectivity to Bangalore and access to southern
              ports make it an ideal location for your industrial operations."
          title="About Hosur, Bangalore"
        />
        {/* <PDTab /> */}
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
