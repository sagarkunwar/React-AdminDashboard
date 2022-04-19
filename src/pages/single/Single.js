import React from "react";
import ".././single/single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="lefttoptitle">
              <p>Information</p>
              <div className="editButton">Edit</div>
            </div>
            <div className="leftbuttominfo">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </div>
              <div className="info">
                <div className="name">Aaku Nepal</div>
                <div className="detailinfo">
                  <span className="infokey">Email: </span>
                  <span className="infodetails">Aaku@gmail.com</span>
                </div>
                <div className="detailinfo">
                  <span className="infokey">Phone: </span>
                  <span className="infodetails">+9861444386</span>
                </div>
                <div className="detailinfo">
                  <span className="infokey">Adderss: </span>
                  <span className="infodetails">Ravibhawan,Kathmandu</span>
                </div>
                <div className="detailinfo">
                  <span className="infokey">Country: </span>
                  <span className="infodetails">Nepal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title=" Last 6 months Spendings" />
          </div>
        </div>
        <div className="buttom">
          <div className="title">Last Transaciton</div>
          <div className="table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
