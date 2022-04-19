import React from "react";
import "../widget/widget.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaidIcon from "@mui/icons-material/Paid";

function Widget({ type }) {
  const amount = 100;
  const diff = 20;
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all uers",
        icon: <AccountBoxIcon className="icon" />,
      };

      break;
    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all earning",
        icon: <ShoppingCartIcon className="icon" />,
      };

      break;

    case "earning":
      data = {
        title: "Earning",
        isMoney: true,
        link: "View net earning",
        icon: <PaidIcon className="icon" />,
      };

      break;

    case "mybalance":
      data = {
        title: "Mybalance",
        isMoney: false,
        link: "See details",
        icon: <AccountBalanceWalletIcon className="icon" />,
      };

      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowDownIcon /> +{diff} %
        </div>
        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
}

export default Widget;
