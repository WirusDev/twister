import React, { useState, useRef, useEffect } from "react";
import ModalDialogScrollable from "./AddPlayers";
import Info from "./Info";
import { Squash as Hamburger } from "hamburger-react";
function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // close the menu when the user clicks outside of it
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='AppMenu fixed top-10 right-10 ' ref={menuRef}>
        <div className='bg-main-grey mb-1 rounded-md '>
          <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        </div>
        {isOpen && (
          <div className='bg-main-grey p-1.5 rounded-md absolute right-0.5 w-[150px]'>
            <ul>
              <li className='py-1 w-full'>
                <ModalDialogScrollable />{" "}
              </li>

              <li className='py-1'>
                <Info />
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
