import React from "react";
import "../input.css";
import "../output.css";
const Footer = () => {
  const companyLinks = ["About Us", "Careers", "Investors", "Press"];
  const helpLinks = ["Help Center", "FAQs", "Support", "Account & Billing"];
  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Preferences",
    "Accessibility",
  ];

  return (
    <>
      <footer className="h-fit w-full bg-baseblack text-basewhite font-poppins flex flex-col justify-center items-center px-5  pt-12 pb-8 gap-12 sm:px-10 sm:pt-14 sm:pb-9 sm:gap-14 md:px-15 md:pt-16 md:pb-9 md:gap-16 lg:px-20">
        <div
          id="footer-content"
          className="w-full h-fit grid gap-12 grid-cols-2 lg:flex justify-between items-start sm:grid-cols-3 lg:gap-0"
        >
          <div
            id="footer-details"
            className="h-full lg:w-100 col-span-2 sm:col-span-3 flex flex-col gap-4 sm:gap-6 items-start"
          >
            <div id="footer-logo" className="text-xl md:text-2xl font-bold">
              <span>Stream</span>
              <span className="text-primary-normal">Flix</span>
            </div>
            <div className="text-sm text-neutralcolor-200 w-full h-fit">
              StreamFlix is your go-to platform for a world of entertainment,
              offering a vast library of films, TV shows, and exclusive content.
            </div>
          </div>
          <div className="footer-link h-fit sm:w-[200px] flex flex-col gap-6 items-start ">
            <h1 className="text-lg md:text-xl font-semibold">Company</h1>
            <div className="link-map text-neutralcolor-200 text-xs sm:text-sm flex flex-col gap-4">
              {companyLinks.map((link) => (
                <a key={link} className="">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-link h-fit sm:w-[200px] flex flex-col gap-6 items-start ">
            <h1 className="text-lg md:text-xl font-semibold">Help & Support</h1>
            <div className="link-map text-neutralcolor-200 text-xs sm:text-sm flex flex-col gap-4">
              {helpLinks.map((link) => (
                <a key={link} className="">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-link h-fit sm:w-[200px] flex flex-col gap-6 items-start ">
            <h1 className="text-lg md:text-xl font-semibold">Legal</h1>
            <div className="link-map text-neutralcolor-200 text-xs sm:text-sm flex flex-col gap-4">
              {legalLinks.map((link) => (
                <a key={link} className="">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          id="copyright-content"
          className="w-full h-fit text-center text-sm sm:text-base "
        >
          Copyright &copy;{new Date().getFullYear()}{" "}
          <a
            href="https://github.com/saad-shaikh-256"
            target="_blank"
            className=""
            rel="noopener noreferrer"
          >
            Saad Shaikh
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
