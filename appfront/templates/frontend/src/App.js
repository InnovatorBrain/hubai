import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AuthService from "./services/auth.service";

// Components
import Slides from "./components/Slides/Slides";
import Prices from "./components/Prices/Prices";
import Login from "./components/Login";
import SideBarCon from "./container/SideBarCon/SideBarCon";
import Register from "./components/Register";
import Footer from "./components/Footer/Footer";
import FeatureSec from "./components/FeatureSec/FeatureSec"
import Marq from "./components/Marquee/Marq"


import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";


// import AuthVerify
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand" id="nav_link_logo">
            {/* Logo will be place on here */}
            AiModels
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/playground"} className="nav-link">
                Playground
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/prices"} className="nav-link">
                Pricing
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (

            <div className="navbar-nav ml-auto">

              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link" id="nav_link_Getstarted">
                  Get Started
                </Link>
              </li>

            </div>
          )}
        </nav>


        <Routes>
          {/* <Route exact path={""} element={<><Home /><Slides /></>} /> */}
          <Route exact path={""} element={<><Slides /> <FeatureSec /> <Prices />  <Marq /><Footer /></>} />
          <Route exact path={"/home"} element={<><Slides /> <FeatureSec /> <Prices /> <Marq /><Footer /></>} />
          <Route path="prices" element={<><Prices /> <Footer /> </>} />
          <Route path="playground" element={<><SideBarCon /></>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>


        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </>
  );
};

export default App;
