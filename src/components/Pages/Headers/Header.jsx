import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cloud from "@mui/icons-material/Cloud";
import { Menu } from "./Menu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const topMenu = [
    {
      title: "Tuyển dụng",
      link: "/tuyen-dung",
      icon: <Cloud fontSize="small" />,
    },
    {
      title: "Tài nguyên số",
      link: "/tai-nguyen-so",
      icon: <Cloud fontSize="small" />,
    },
    { title: "Email", link: "/email", icon: <Cloud fontSize="small" /> },
    {
      title: "Lịch công tác",
      link: "/lich-cong-tac",
      icon: <Cloud fontSize="small" />,
    },
    { title: "Liên hệ", link: "/lien-he", icon: <Cloud fontSize="small" /> },
  ];

  return (
    <>
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-2 md:px-8 h-[70px] md:h-[100px] lg:h-[120px]">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 md:h-14 lg:h-20 w-auto object-contain"
        />

        {/* Menu desktop */}
        <div className="hidden xl:block">
          <ul className="flex items-center space-x-3 md:space-x-8">
            {topMenu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `text-white text-sm md:text-base font-medium transition-colors duration-200 hover:text-yellow-300 ${
                      isActive ? "border-b-2 border-yellow-300" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon menu mobile/tablet */}
        <button
          className="block xl:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>

        {/* Dropdown menu kiểu Material UI khi bấm icon */}
        {open && (
          <div className="absolute top-[70px] right-4 z-50 xl:hidden">
            <Paper sx={{ width: 240, maxWidth: "100%" }}>
              <MenuList>
                {topMenu.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => setOpen(false)}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      color: "#397ac3",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "lightgray", // nền xám khi hover
                      },
                      "&.active": {
                        fontWeight: "bold",
                        backgroundColor: "lightgray", // nền xám khi active
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </div>
        )}
      </div>
    </>
  );
};
