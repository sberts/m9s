// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<div className="bg-gray-800">

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#" className="text-white text-xl font-bold">Megalopolis City</a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
	

            <NavLink to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
            <NavLink to="/latest" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Latest</NavLink>
            <NavLink to="/popular" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Popular</NavLink>
            <NavLink to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</NavLink>


          </div>
        </div>
      </div>
    </div>

					</div>
		</>
	);
};

export default Navbar;
