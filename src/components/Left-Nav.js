import React from "react";
import {Row, Card} from 'react-bootstrap'
import icon from '../icon/mainlogo.png';


function LeftNav(props){

    return (
        <React.Fragment>
            <Row className="left-nav-logo-container">
                <Card.Img className="main-logo"  src={ icon } alt="avatar" />
            </Row>
            <Row></Row>
        </React.Fragment>
        
    );
}

export default LeftNav;
