import React from 'react'

import MenuItems from './MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "" : "";
  return (
    <ul className={`${dropdownClass}${dropdown ? "absolute w-28 py-4 pr-4 top-9 -left-15 text-sm flex flex-col justify-center items-center  shadow-2xl bg-white " : "hidden"}`}>
      {submenus.map((submenu, index) => (
        <MenuItems menu={submenu} key={index} />

        // <li key={index} className="relative block text-md">
        //   <span><img src={submenu.icon} /></span>
        //   <a href={submenu.url}>{submenu.title}</a>
       
        // </li>
      ))}
    </ul>
  );
}

export default Dropdown