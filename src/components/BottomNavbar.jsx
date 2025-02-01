import React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const navItems = [
    { label: "INRISE", iconGray: "/assets/icons/inrise-gray-icon.svg", iconWhite: "/assets/icons/inrise-white-icon.svg", path: "/" },
    { label: "HUDUD", iconGray: "/assets/icons/hudud-gray-icon.svg", iconWhite: "/assets/icons/hudud-white-icon.svg", path: "/hudud" },
    { label: "Do'stlar", iconGray: "/assets/icons/dostalar-gray-icon.svg", iconWhite: "/assets/icons/dostalar-white-icon.svg", path: "/dostlar" },
    { label: "Vazifalar", iconGray: "/assets/icons/vazifalar-gray-icon.svg", iconWhite: "/assets/icons/vazifalar-white-icon.svg", path: "/Vazifalar" },
    { label: "IMKON 40ta", iconGray: "/assets/icons/imkon-gray-icon.svg", iconWhite: "/assets/icons/imkon-white-icon.svg", path: "/inbox" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around py-3 bg-[#272727]">

      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <NavLink
            key={index}
            to={item.path}
            className="flex flex-col items-center text-gray-600 text-sm"
          >
            <img
              src={isActive ? item.iconWhite : item.iconGray}
              alt={item.label}
              className="w-6 h-6 mb-1 transition-all duration-300"
            />
            <span className={isActive ? "text-white text-[10px]" : "text-gray-500 text-[10px]"}>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;
