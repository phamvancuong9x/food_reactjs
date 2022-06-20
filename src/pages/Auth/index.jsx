import { useRef, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Login from "./components/Login";
import "./styles.scss";

function Auth() {
  const switchPageRef = useRef();
  switchPageRef.current = sessionStorage.getItem("switchPage") || "null";
  const [switchPage, setSwitchPage] = useState(switchPageRef.current);

  return (
    <>
      <Breadcrumbs title="TÀI KHOẢN" />
      <div className="main">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <Login />
            </div>
            <div className="col l-6 c-0">
              <div className="login-banner">
                <img
                  src="https://api.luxwebsite.net/cuong_image/food_image/login1.jpg"
                  alt=""
                  className="login-img"
                />
                <div className="login-banner__text">
                  <span>Đón mừng giáng sinh</span>
                  <span>Ding ngay quà khủng</span>
                </div>
                <div className="login-sale">
                  <span>-50%</span>
                </div>
                <span className="login-border1"></span>
                <span className="login-border2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
