import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1100) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo">
        <img src={assets.logo} className="icon-logo" alt="Risk Hawk" />
      </div>
      <ul className="menu">
        <li>
          <img src={assets.sidebarIcon1} alt="sidebarIcon1" />
          Internal Audit
        </li>
        <li>
          <img src={assets.sidebarIcon2} alt="sidebarIcon2" />
          UAT Testing
        </li>
        <li>
          <img src={assets.sidebarIcon3} alt="sidebarIcon3" />
          Intract
        </li>
        <li>
          <img src={assets.sidebarIcon4} alt="sidebarIcon4" />
          Queue
        </li>
        <li>
          <img src={assets.sidebarIcon6} alt="sidebarIcon5" />
          Workflow
        </li>
        <li>
          <img src={assets.sidebarIcon7} alt="sidebarIcon5" />
          Admin
        </li>
        <li>
          <img src={assets.sidebarIcon8} alt="sidebarIcon5" />
          Asset
        </li>
        <li>
          <img src={assets.sidebarIcon9} alt="sidebarIcon5" />
          Parent
        </li>
        <li>
          <img src={assets.sidebarIcon10} alt="sidebarIcon5" />
          Option One
        </li>
        <li>
          <img src={assets.sidebarIcon11} alt="sidebarIcon10" />
          Option Two
        </li>
        <li>
          <img src={assets.sidebarIcon12} alt="sidebarIcon12" />
          All Accessories
        </li>
        <li>
          <img src={assets.sidebarIcon1} alt="sidebarIcon5" />
          Internal Audit
        </li>
        <li>
          <img src={assets.sidebarIcon13} alt="sidebarIcon5" />
          Decorating
        </li>

        <li>
          <img src={assets.sidebarIcon14} alt="sidebarIcon5" />
          Presenting
        </li>
      </ul>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? ">" : "<"}
      </div>
    </div>
  );
};

export default Sidebar;
