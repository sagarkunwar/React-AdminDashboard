import "./home.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget.jsx";
import Feature from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="mybalance" />
        </div>
        <div className="charts">
          <Feature />
          <Chart aspect={2 / 1} title="heloo" />
        </div>
        <div className="listContainer">
          <div className="listTitle">List title</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
