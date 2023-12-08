import { useState } from "react";
import {
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="absolute h-screen">
      <div
        className={`w-20 fixed top-0 ${
          open ? "lg:right-0" : "sm:left-0"
        } z-9 transition-all duration-100 ease-in-out`}
      >
        <div className="p-4 cursor-pointer" onClick={handleClick}>
          {open ? (
            <RiDeleteBin5Fill className="ml-3 text-xl" />
          ) : (
            <GiHamburger className="ml-3 text-xl" />
          )}
        </div>
        <ul
          className={`top-20 mt-20 cursor-pointer ${
            open ? "flex-col" : "md:flex-row"
          } ${open ? "" : "hidden"}`}
        >
          <li className="p-4 hover:bg-gray-600">
            <FiHome className="ml-3 text-xl" />
            <span>Home</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <FaRegFaceGrin className="ml-3 text-xl" />
            <span>About</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineContactPage className="ml-3 text-xl" />
            <span>Skills</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineHomeRepairService className="ml-3 text-xl" />
            <span>Work</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineMailOutline className="ml-3 text-xl" />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
