import React from "react";

const Footer = () => {
  const commonClasses = "hover:scale-105 hover:underline cursor-pointer";
  const menuItems = ["Goout", "Center", "Dress", "Careers"];

  return (
    <div className="bg-blue-500 px-5">
      <div className="max-w-[1240px] py-[40px] md:flex items-center justify-between  text-center mx-2">
        <div className="left w-[400px] mb-3">
          <h1 className="text-4xl font-bold">AMORA Tech.</h1>
          <p className="text-md">
            Lorem ipsum dolor sit Quidem in quam doloribus soluta a, perferendis
            hic impedit dolores deleniti
          </p>
        </div>
        <div className="right flex gap-5 ">
          <div>
            <span className="">Solutions</span>
            <li className="text-wrap text-white" style={{ listStyleType: "none" }} >
              {menuItems.map((item) => (
                <ul key={item} className="hover:scale-105 hover:underline cursor-pointer" >
                  {item}
                </ul>
              ))}
            </li>
          </div>

          <div>
            <span>Support</span>
            <li
              className="text-wrap text-white "
              style={{ listStyleType: "none" }}
            >
              <ul className={commonClasses}>Analytic</ul>
              <ul className={commonClasses}>Marketing</ul>
              <ul className={commonClasses}>Commercial</ul>
              <ul className={commonClasses}>Insight</ul>
            </li>
          </div>

          <div>
            <span>Company</span>
            <li
              className="text-wrap text-white "
              style={{ listStyleType: "none" }}
            >
              <ul className="hover:scale-105 hover:underline cursor-pointer">
                About
              </ul>
              <ul className="hover:scale-105 hover:underline cursor-pointer">
                Vlog
              </ul>
              <ul className="hover:scale-105 hover:underline cursor-pointer">
                Press
              </ul>
              <ul className="hover:scale-105 hover:underline cursor-pointer">
                Jobs
              </ul>
              <ul className="hover:scale-105 hover:underline cursor-pointer">
                Careers
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
