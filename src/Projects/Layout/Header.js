import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Rotated",
      path: "/rotated",
    },
    {
      title: "Glowing",
      path: "/glowing",
    },
    {
      title: "Marketing",
      path: "/marketing",
    },
    {
      title: "Bubbles",
      path: "/bubbles",
    },
    {
      title: "Parallax",
      path: "/parallax",
    },
    {
      title: "Starbucks",
      path: "/starbacks",
    },
    {
      title: "Cars Platform",
      path: "/cars",
    },
  ];
  return (
    <>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li>
              <Link to={`${item.path}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Header;
