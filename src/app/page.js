import AboutF from "./Components/AboutF";
import CapabilitiesF from "./Components/CapabilityF";
import NewUSP from "./Components/USPF/NewUSP";
import PFetch from "./Components/CNPOF/PFetch";
import TrustedPartners from "./Components/TrustedPartners";
import EsgF from "./Components/EsgF";
import SlideSectionF from "./Components/SlideSectionF";
import BentoSlider from "./Components/BentoSlider";
import LandingSwiper from "./Components/LandingSwiper";
// import NavMain from "./Components/Nav/NavMain";
// import Navlist from "./Components/Navlist";
export const metadata = {
  title: "KSH INFRA Leading Industrial Park and Warehouse Developers in India",
  desc: "KSH INFRA, a leading industrial infrastructure company, provides sustainable industrial parks solutions in India as trusted industrial park developers.",
};

export default function Home() {
  return (
    <>
      <LandingSwiper />
      <AboutF />
      <CapabilitiesF />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <EsgF />
      <SlideSectionF />
      <BentoSlider />
      {/* <NavMain /> */}
      {/* <Navlist /> */}
    </>
  );
}
