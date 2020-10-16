
import React, { useEffect, useState, useCallback } from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap'
import NavbarTop from './Nav';
import CardLayoutContainer from './CardLayout-Container'
import List from'./List';
import CONSTANTS from '../constants';
import icon from '../icon/mainlogo.png';



function MainContainer () {

    const [StudentMeta, ChangeStudentMeta] = useState([]);
    const [StudentList, ChangeStudentList] = useState([]);
    const [sortType, ChangesortType] = useState('desc'); 

    useEffect(() => {
        Promise.all([fetch(CONSTANTS.ENDPOINT.DASHBORDINFO), fetch(CONSTANTS.ENDPOINT.STUDENTLIST)])
            .then(([res1, res2]) => { 
                return Promise.all([res1.json(), res2.json()]) 
        })
        .then(([res1, res2]) => {
            ChangeStudentMeta(res1)
            ChangeStudentList(res2);
        });  
    }, [ChangesortType]);


    const SortStudent = useCallback(
        eventKey => {
            if(eventKey === 'asc'){
                ChangeStudentList(StudentList.sort(function(a, b){return a.marks - b.marks}));
                ChangesortType('asc');
            } else{
                ChangeStudentList(StudentList.sort(function(a, b){return b.marks - a.marks}));
                ChangesortType('desc');
            }
        },
        [StudentList]
    );


    return (
            <Container fluid="lg" className="main-container">
                <Row >
                    <Col lg={1} className="left-nav-bar">
                        <Row className="left-nav-logo-container">
                            <Card.Img className="main-logo"  src={ icon } alt="avatar" />
                        </Row>
                        <Row></Row>
                    </Col>
                    <Col lg={11}>
                        
                        <Container fluid="md">
                            <Row className="nav-containt">
                                <NavbarTop/>
                            </Row>
                            <Row>
                                <div className="main-header">
                                    <h3>Dashboard</h3>
                                    <div className="main-sub-header">Mobile UX/UI Design course</div>
                                </div>
                            </Row>
                            <Row>
                                <CardLayoutContainer data={ StudentMeta }/>
                            </Row>
                            <Row>
                                <List data={ StudentList } selectedOrderType = { sortType } changeOrder={ SortStudent }/>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
    );


}


export default MainContainer;
