import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-grid-system";
import Logo from "../images/Capstone Logo.png";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [tokens, setTokens] = useState("1dfdwsf");
  let token = localStorage.getItem("token");
  let username = localStorage.getItem("username");

  useEffect(() => {
    setName(username);
    setTokens(token);
    if (tokens) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [name]);

  function logout() {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  const renderButton = () => {
    if (loggedIn) {
      return (
        <>
          <div class="flex-5">
            <p className="pl-4 pr-4"> Welcome {name}! </p> 
          </div>
          <NavLink to="/">
            <button
              className="btn btn-outline btn-warning"
              onClick={() => logout()}>
              Logout
            </button>
          </NavLink>
        </>
      );
    } else {
      return (
        <div class="flex-5">
          <NavLink to="/register">
            <button className="btn btn-outline btn-info">Register</button>
          </NavLink>
          <NavLink to="/login">
            <button className="btn btn-outline btn-warning">Login</button>
          </NavLink>
        </div>
      );
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <div class="navbar bg-base-100">
            <div class="flex-1">
              <div class="w-10 rounded-full">
              <img src={Logo} />
              </div>
              <a class=" normal-case text-xl">Hypersource</a>
            </div>
            {renderButton()}
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <NavLink to="/">
                  <a className="btn btn-ghost">Home</a>
                </NavLink>

                <NavLink to="/Feature">
                  <a className="btn btn-ghost">Post A Job</a>
                </NavLink>
                <NavLink to="/JobLinks">
                  <a className="btn btn-ghost">Job Search</a>
                </NavLink>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
