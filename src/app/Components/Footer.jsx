import Link from "next/link";
import Newsletter from "../Components/Newsletter";

const Footer = () => {
  return (
    <footer className="footerMain bg-[#141D28] max-w-full">
      <div className="fix12 mx-auto">
        {/* Footer Top */}
        <Newsletter />

        {/* Footer Middle */}
        <div className="text-white flex-col gap-[40px] md:flex-row flex pt-[35px] w-full justify-between md:pt-[60px] pb-[41px] border-b-[rgba(215,215,215,0.34)] border-b">
          <div className="h-full w-full object-cover max-w-[180px]">
            <img src="/footerIcon.svg" alt="" />
          </div>
          <div>
            <h2 className="pb-5 text-lg fsans-600">Quick links</h2>
            <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
              <Link href="/">Home</Link>
              <Link href="/about-ksh">About Us</Link>
              <Link href="/our-team">Our Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div>
            <h2 className="pb-5 text-lg fsans-600">Our Parks</h2>
            <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
              <Link href="/ksh-chakan-iv">Chakan IV</Link>
              <Link href="/ksh-chakan-iii">Chakan III</Link>
              <Link href="/ksh-chakan-ii">Chakan II</Link>
              <Link href="/ksh-chakan-i">Chakan I</Link>
              <Link href="/ksh-talegaon-i">Talegaon I</Link>
              <Link href="/ksh-hosur-i">Hosur I</Link>
            </div>
          </div>
          <div>
            <h2 className="pb-5 text-lg fsans-600">Others</h2>
            <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
              <Link href="/investors">Investor</Link>
              <Link href="/capabilities">Capabilities</Link>
              <Link href="/sustainability">Sustainability</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-white flex md:flex-row flex-col lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
          <div className="pt-5 md:pt-0 flex gap-3">
            <div
              className="iconBox h-11 w-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            >
              <img src="/socials/map.svg" alt="" />
            </div>
            <div className="text-[#9acbf880] text-sm font-semibold leading-6 max-w-full ">
              <p>
                KSH INFRA, <br /> Head Office: Pune
              </p>
              <p>
                Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
                of India Society, <br /> Near Marathwada College, Shivajinagar,
                <br />
                Pune, Maharashtra - 411 004 (India)
              </p>
            </div>
          </div>
          <div className="pt-5 md:pt-0 flex gap-3">
            <div
              className="iconBox h-11 w-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            >
              <img src="/socials/map.svg" alt="" />
            </div>
            <div className="text-[#9acbf880] text-sm font-semibold leading-6 max-w-full ">
              <p>
                KSH INFRA, <br />
                Mumbai
              </p>
              <p>
                Birla Centurion, Wing - B, PS/03/052,
                <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br /> Century
                Mills, Worli, Mumbai, <br />
                Maharashtra - 400030 (India)
              </p>
            </div>
          </div>
          <div className="pt-5 md:pt-0 flex flex-col gap-5">
            <a
              href="mailto:leasing@kshinfra.com"
              className="flex items-center gap-3 text-[#9acbf880] hover:text-[#9acbf8]"
            >
              <div
                className="iconBox h-11 w-11 rounded-full flex items-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <img src="/socials/footerEmail.svg" alt="" />
              </div>
              <p className="text-sm font-semibold leading-6">
                leasing@kshinfra.com
              </p>
            </a>
            {/* <a
              href="tel:1800-212-2030"
              className="flex items-center gap-3 md:gap-[28px]"
            >
              <div
                className="iconBox h-11 w-11 rounded-full flex items-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <img src="/socials/Phone.svg" alt="" />
              </div>
              <p className="text-[#9acbf880] text-sm font-semibold leading-6">
                1800-212-2030 (Toll-Free)
              </p>
            </a> */}
          </div>
        </div>

        {/* Footer End */}
        <div className="pt-[84px] pb-[23px] flex flex-col md:flex-row gap-2 text-center items-center justify-center sm:justify-between text-[#6c8dab80] text-sm font-semibold leading-6">
          <p>© 2025. KSH INFRA. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
