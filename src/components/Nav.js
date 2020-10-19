import React from "react";
import {Row, Navbar, NavDropdown} from 'react-bootstrap'
import ProfileImage from './ProfileImage'


function NavbarTop(props){

    return (
        <div>
            <Row>
                <Navbar variant="pills">
                    <Navbar.Brand >
                        <div className="nav-div">
                            <span className="navbar-username">Coddy Simmons</span>
                        </div>
                        <div className="nav-div">
                            <span className="navbar-username-meta">Lecturer</span>
                        </div>  
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <ProfileImage src="" altText="Profile-Image"/>
                    </Navbar.Brand>
                    <NavDropdown id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar>
            </Row>
            
        </div>
        
    );
}

export default NavbarTop;
