import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const navLinks = [
  { href: "#Projects", label: "Projects" },
  { href: "#About", label: "About" },
  { href: "#Contact", label: "Contact" },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center z-1200">
      <div className="w-[50vw] px-6 py-3 ">
        {/* Desktop Nav */}
        <div className="flex items-center justify-center gap-4 ">
          {/* Logo */}
          <div className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-gray-100/30 backdrop-blur-md border border-black/20">
            <a key="Home" href="#Home">
              <HomeFilledIcon />
            </a>
          </div>

          {/* Links  */}
          {/* I'll remove the contact section now ! , "Contact" */}
          <div className="gap-12 bg-gray-100/30 h-[50px]  flex flex-2 items-center justify-center pr-6 pl-6 ml-2 mr-2 backdrop-blur-md rounded-3xl border border-black/20">
            {/* <span className="bg-white rounded-3xl p-[5px] pr-[5px] pl-[5px] " >Mohammed</span> */}
            <ul className="hidden md:flex gap-10 text-black font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className=" bg-gradient-to-b from-white from-40% to-sky-500 bg-clip-text text-transparent font-bold relative cursor-pointer group"
                >
                  {link.label}
                  {/* Hover underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </ul>
          </div>

          <div>
            <button className=" bg-gray-100/30 backdrop-blur-md w-[50px] h-[50px] border border-black/20 rounded-full ">
              <DarkModeIcon />
            </button>
          </div>

          {/* //////////////////////////////////////////////////:::: 
          // 
          
          this section here I'll modified from scratch and adding a better one than this 

          ////////////////::
          
          
          
          */}

          {/* Mobile Menu Button */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden p-1 text-white mt-0.5 bg-black rounded-lg focus:outline-none"
          >
            <MenuIcon className="mb-0.5" />
            <span className="">Menu</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ${
            openMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-black text-center">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="py-2 border-b text-black border-white/10 cursor-pointer rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 
        
        to this point 
        
        
        
        
        
        
        
        
        
        
        
        /////////////////////////////////// */}
      </div>
    </nav>
  );
}
