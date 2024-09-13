import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const DropDawnItem = ({items}) => {
  return (
    <NavDropdown title={menuItems[0].title}>
      <NavDropdown.Item onClick={() => navigate(`${menuItems[0].contents[0].path}`)}>
        {menuItems[0].contents[0].content}
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default DropDawnItem
