import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-gray-900 px-5 py-3 text-white">
      <div>
        <h2 className="text-xl font-bold">Gallery</h2>
      </div>
      <div>
        <p>Signin</p>
      </div>
    </nav>
  );
};

export default Navbar;
