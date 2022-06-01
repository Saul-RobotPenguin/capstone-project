/* This example requires Tailwind CSS v2.0+ */
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div class="navbar bg-base-100">
            <div class="flex-1">
              <a class=" normal-case text-xl">LOGO HERE</a>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <NavLink to="/">
                  <a className="btn btn-ghost">Home</a>
                </NavLink>

                <NavLink to="/Profile">
                  <a className="btn btn-ghost">Profile</a>
                </NavLink>

                <NavLink to="/Feature">
                  <a className="btn btn-ghost">Features</a>
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
