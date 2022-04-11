import React from "react";

import "../sidebar/sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Tokari Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <li>
            <AccountCircleIcon className="icons" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icons" />
            <span>Products</span>
          </li>
          <li>
            <LocalShippingIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <AnalyticsIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icons" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <HealthAndSafetyIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <BookIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <PersonIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="buttom">color option</div>
    </div>
  );
}

export default Sidebar;
