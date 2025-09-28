import React, { useRef } from "react";

const navItems = ["home", "services", "about", "work", "contact"];

const Navbar = () => {
  const navRef = useRef(null);
  return (
    <nav
      ref={navRef}
      className="fixed z-50 flex flex-col justify-between bg-pearl text-black/80 m w-full h-full px-10 py-24 uppercase gap-y-10 md:w-1/2 md:left-1/2"
    >
      <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-7xl  ">
        {navItems.map((item,i)=>(
          <div key={i}>
            <a className="transition-all duration-300 cursor-pointer hover:text-black" >{item}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
