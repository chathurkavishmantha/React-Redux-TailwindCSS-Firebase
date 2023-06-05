import React from "react";
// import menu from "../../img/menu-svgrepo-com.svg";
import MenuIcon from "@mui/icons-material/Menu";
import cart from "../../img/cart-1-svgrepo-com.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <header className="fixed px-2 z-[100] py-5 w-full left-0 top-0 p-6 flex items-center justify-between bg-[#c1c5ff] drop-shadow-header-shadow">
      {/* left side */}
      <div className=" flex items-center justify-center ">
        <IconButton sx={{color:"#2c19fb"}}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <span className="text-[1.2rem] font-bold text-[#231dd4] md:ml-5">
          Cylon
        </span>
        <div className="overflow-hidden border border-[#231dd4] bg-white outline-none rounded-[2rem] items-center p-1 md:ml-5">
          <input
            className="ml-1 outline-none p-1 font-semibold text-sm w-[200px] bg-white"
            type="search"
            placeholder="Search here"
          />
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        </div>
      </div>

      {/* right side */}
      <div>
        <IconButton sx={{color:"#2c19fb"}}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton >
      </div>
    </header>
  );
};

export default Header;
