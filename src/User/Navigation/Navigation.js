import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import './Navigation.css';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="user-nav">
      <Navbar  light expand="md">
        <h2>Hello Mosajjid</h2>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className ="heading-link">
          <Nav  navbar className="collapse-navbar">
            <NavItem>
              <NavLink  href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">New Arrival</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img className="user-profile"></img>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
              <NavLink className="header-link" href="/user/profile">Profile</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                  Setting
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    <NavLink className="header-link" href="/">Logout</NavLink>
                  </NavItem>
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;