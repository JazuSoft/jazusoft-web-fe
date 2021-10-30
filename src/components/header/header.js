import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import "./header.scss"

const Header = ({ siteTitle }) => (
  
  <Navbar className="custom-nav" sticky="top" expand="lg" >
    <Container>
    <Navbar.Brand><Link to="/">{siteTitle}</Link></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Item as="div"><Link to="/blog">Blog</Link></Nav.Item>
      <Nav.Item as="div"><Link to="/about-me">About me</Link></Nav.Item>
      <Button variant="outline-primary" >Hire me</Button>
    </Nav>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
