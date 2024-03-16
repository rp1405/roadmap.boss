import React from "react";
import ButtonFooter from "./ButtonFooter";
import logo from "../Images/logo.jpg";
import { Mail } from "lucide-react";
import { Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import footerImg from "../Images/footerImg.png";

const Footer = () => {
  const buttonLabels = [
    "Roadmaps",
    "Best Practices",
    "Guides",
    "Videos",
    "FAQs",
    "YouTube",
  ];

  return (
    <div className="bg-gradient-to-b from-headerBgBottom to-headerBgTop px-[3%] py-10 sm:px-[18%] w-[100vw]">
      <div className="mb-10 sm:flex sm:justify-around sm:px-[15%]">
        {buttonLabels.map((val) => {
          return <ButtonFooter label={val} key={val} />;
        })}
      </div>

      <div className="sm:flex sm:justify-between sm:gap-20 ">
        <div className="pb-8 sm:w-[50%]">
          <div className="flex py-4  items-center">
            <img src={logo} className="w-[6%] rounded-md mr-3" />
            <p className="text-white text-lg">
              <span className="font-bold">roadmap.college</span> by{" "}
              <span className="bg-blue-500 p-2 rounded-md ml-1">
                Abhishek Kumar
              </span>
            </p>
          </div>

          <p className="text-slate-500 text-2xl sm:text-xl my-4">
            Community created roadmaps, articles, resources and journeys to help
            you choose your path and grow in your career.
          </p>

          <div className="flex text-slate-500 text-xl space-x-2 items-center">
            <p>&copy; roadmap.college </p>
            <p>•</p>
            <p>Terms</p>
            <p>•</p>
            <p>Privacy</p>
            <p>•</p>
            <Mail />
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="sm:text-right  sm:w-[50%] ">
          <img src={footerImg} className="pb-4 sm:ml-auto" />
          <p className="text-slate-500 text-2xl sm:text-xl my-4">
            The leading DevOps resource for Kubernetes, cloud-native computing,
            and the latest in at-scale development, deployment, and management.
          </p>

          <div className="flex text-slate-500 text-xl space-x-2 items-center sm:justify-end">
            <p>DevOps </p>
            <p>•</p>
            <p>Kubernetes</p>
            <p>•</p>
            <p>Cloud-Native</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
