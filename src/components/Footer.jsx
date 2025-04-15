import React from "react";
import blacklogo from "../assets/blacklogo.png";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const links = [
  { title: "Home", to: "#" },
  { title: "Contact us", to: "#" },
  { title: "Gallery", to: "#gallery" },
  { title: "Service", to: "#" },
  { title: "How It Works", to: "#" },
  { title: "Privacy", to: "#" },
  { title: "Terms & Service", to: "#" },
];

const Footer = () => {
   const [isMenuOPen, setIsMenuOpen] = useState(false);
  return (
    <div className="layout mt-10">
      <div className="flex gap-[125px] lg:gap-[325px] items-center  w-[1239.69px] h-[28.57px]  ">
        <div className="w-[85.69px]">
          <img src={blacklogo} alt="trex logo" />
        </div>
        <div className=" h-[27px] w-[803px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-[34px] ">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.a} className="underline text-[20px]">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
      <p className="lg:mt-5 mt-[250px]">
        This website is owned and operated by Masref Ltd., incorporated in the
        United Kingdom The information provided is not legally binding and does
        not constitute an offering, endorsement, recommendation or solicitation
        to enter into any type of financial transaction in this or in any other
        jurisdiction in which such solicitation or offer would be unlawful under
        the laws of such jurisdiction.
      </p>
    </div>
  );
};

export default Footer;
