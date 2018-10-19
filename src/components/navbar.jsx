import React, { Component } from "react";

/// stateless functional component

const Navbar = ({ totalCounters }) => {
  console.log("Navbar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-info m-2">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default Navbar;
