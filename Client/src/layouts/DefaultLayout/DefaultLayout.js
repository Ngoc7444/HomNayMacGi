import "./DefaultLayout.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../../pages/Client/Products/Products";
import WeatherForecast from "../components/WeatherForecast/WeatherForecast";
function DefaultLayout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <WeatherForecast />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
