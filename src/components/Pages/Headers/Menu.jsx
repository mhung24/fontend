import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { menuItems } from "../../../Data/data.js";

export const Menu = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 100);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className={`hidden lg:block w-full bg-white shadow-md z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0" : "sticky top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-gray-700">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-blue-600 font-semibold"
                    : "flex items-center hover:text-blue-600 transition-colors"
                }
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown className="ml-1 w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
                )}
              </NavLink>

              {item.submenu && (
                <ul
                  className="
                            absolute left-0 top-full
                            w-56 bg-white border border-gray-200 rounded-lg shadow-md
                            hidden group-hover:block
                            pt-2 z-50
                            before:content-['']            
                            before:absolute
                            before:top-[-15px]                  
                            before:left-0                 
                            before:w-[100px]                
                            before:h-[30px]                
                            mt-[10px]            
                    "
                >
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.link}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600"
                            : "block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-l-4 hover:border-blue-600 transition-colors"
                        }
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
