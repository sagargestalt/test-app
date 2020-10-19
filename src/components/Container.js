
import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import NavbarTop from './Nav';
import NavbarLeft from './Left-Nav'
import Header from './Header';
import CardLayoutContainer from './CardLayout-Container'
import List from'./List';
import CONSTANTS from '../constants';



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
                        <NavbarLeft/>
                    </Col>
                    <Col lg={11}>
                        <Container fluid="md">
                            <Row className="nav-containt">
                                <NavbarTop/>
                            </Row>
                            <Row>
                                <Header maintitle="Dashboard" subtitile="Mobile UX/UI Design course"/>
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
