import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
      </div>
    </div>
  );
}

export default Header;
