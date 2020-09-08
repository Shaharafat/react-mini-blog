import React from "react";

import Navbar from "../components/Navbar.jsx";


const Home = ({ hamburgerStatus, hamburgerToggle }) => {
  return (
    <div className="container bg-light">
      <Navbar
        hamburgerStatus={hamburgerStatus}
        hamburgerToggle={hamburgerToggle}
      />
    </div>
  );
};


export default Home;
