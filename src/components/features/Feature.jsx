import React from "react";
import "../features/feature.scss";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Feature() {
  const percentage = 66;

  return (
    <div className="feature">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="buttom">
        <div className="featureChart">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="saleTitle">Total sales made today</div>
        <div className="priceTitle">$420</div>
        <div className="descTitle">
          Previous transaction processing,Last payments may not be included
        </div>
        <div className="targets">
          <div className="item">
            <div className="top">Target</div>
            <div className="buttom">
              <div className="iconp">
                <KeyboardArrowUpIcon />
              </div>
              <div className="amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="top">Last Week</div>
            <div className="buttom">
              <div className="iconn">
                <KeyboardArrowDownIcon />
              </div>
              <div className="amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="top">Last Month</div>
            <div className="buttom">
              <div className="iconp">
                <KeyboardArrowUpIcon />
              </div>
              <div className="amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
