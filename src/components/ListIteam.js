import React from "react";
import { ListGroup, Row, Col } from 'react-bootstrap'
import ProfileImage from './ProfileImage'



function ListItems(props){

    return (
            <ListGroup.Item key={ props.data.id } className="list-group-items" >
                <Row>
                    <Col lg={2} className="profile-Image-Container">
                        <ProfileImage src=""/>
                    </Col>
                    <Col lg={6} className="name-container">
                            { props.data.name }
                    </Col>
                    <Col lg={4} className="marks-container">
                        { props.data.marks }
                    </Col>
                </Row>
            </ListGroup.Item>
       
    );
}

export default ListItems;
