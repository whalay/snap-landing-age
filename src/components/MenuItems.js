import React, { useState } from 'react'

import Dropdown from './Dropdown'



const MenuItems = ({ menu, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const arrowUp = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4" /></svg>
  const arrowDown = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>
  return (
    <li className="relative flex gap-3 justify-center items-center text-md">
      {menu.submenu ? (
        <>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {menu.title}{' '}

          </button>
          {dropdown ? <span> {arrowUp}</span> : <span> {arrowDown}</span>}

          <Dropdown
            submenus={menu.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <span className='flex gap-3 justify-center items-center'><span>{menu.icon}</span><a href={menu.url}>
          {menu.title}
        </a></span>

      )}

    </li>

  )
}

export default MenuItems