import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from "reactstrap";
import "./Navbar.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav_main">
      <Navbar light expand="md" className="navbar_route">
        <NavbarBrand href="/">
          <h1 className="logo">My Library</h1>
          {/* <img src={props.image} alt="logo" className="logo-img"></img> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="link" navbar>
            <NavItem>
             
              <NavLink href="/components/">Home</NavLink>
              
             
            </NavItem>
            <NavItem>
            
              <NavLink href="https://github.com/reactstrap/reactstrap">
                AboutUs
              </NavLink>
              
              
            </NavItem>
            <NavItem>
            
              <NavLink href="./login">Login</NavLink>
              
              
            </NavItem>
            
            <NavItem>
            
            <NavLink href="./register">Register</NavLink>
            
             
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
