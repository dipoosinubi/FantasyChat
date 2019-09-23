import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import './Nav.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({ 
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  className="navBody" color="#05386B" light expand="md">
          <NavbarBrand  color="#EDF5E1" href="/">Home </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navBody" href="https://fantasy.espn.com/football/team?leagueId=94244128&teamId=10&seasonId=2019" target="_blank">ESPN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://fantasy.nfl.com/myleagues?leagueId=6899275" target="_blank" color="#05386B">NFL</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}