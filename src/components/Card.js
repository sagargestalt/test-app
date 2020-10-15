import React from "react";
import {Row, Card, Col} from 'react-bootstrap';
import ProfileImage from './ProfileImage';


function CardLayout(props){

    return (

            <Card className="card-list" style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <div className="profile-image">
                              <ProfileImage src="" altText="Profile-Image"/>
                            </div>
                        </Col>
                        <Col lg={8} className="text-left-align">
                            <Card.Title ><span className="info-metainfo">{props.metainfo}</span><span className="card-text">{ props.metainfo1 ? props.metainfo1 : null }</span></Card.Title>
                                <Card.Text className="card-text">
                                    <span className="info-title">
                                        {props.title}
                                    </span>
                                </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}

export default CardLayout;
