import React from "react";

/* 
To enable login feature uncomment all comments below

import AuthenticationButton from './authentication-button';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './user-Profile';*/

const Navigation = () => {
  /*const { isAuthenticated } = useAuth0() */
  
    return (

      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <br/>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              CapsLock Technologies
            </a>{" "}
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="page-scroll">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>

            {/*
              {isAuthenticated?
              <li>
                  <a href="#protectedRoute" className="page-scroll">
                  Protected
                </a>
              </li>: ""}
              <li>{isAuthenticated? <Profile />: ""}</li>
              <li hidden={true}>
                <AuthenticationButton />
              </li>
              */}

            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navigation;
