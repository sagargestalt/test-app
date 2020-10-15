import React from "react";
import ListItems from './ListIteam'
import {Card, Col, Row, ListGroup, DropdownButton, Dropdown} from 'react-bootstrap'


function List(props){

    const studList = props.data.map(data=>{
        return <ListItems key={ data.id } data={ data }/>
    });

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Row>
                    <Col lg={8}>
                        <p className="card-title">Students by average marks</p>
                    </Col>
                    <Col lg={4}>
                        <DropdownButton  title="Sort"  id="dropdown-menu-align-right" className="dropdown-decorate">
                            <Dropdown.Item eventKey="asc" active = { props.selectedOrderType === 'asc' ? true : false } id="order-key"  onSelect={ props.changeOrder }>Ascending</Dropdown.Item>
                            <Dropdown.Item eventKey="desc" active = { props.selectedOrderType === 'desc' ? true : false } onSelect={ props.changeOrder }>Descending</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <ListGroup variant="flush">
                    { studList }
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default List;
