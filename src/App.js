import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import NavbarTop from './components/Nav';
import NavbarLeft from './components/Left-Nav';
import Header from './components/Header';
import MainContainer from './components/Container'

class App extends Component{
  
  render(){
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
                    <MainContainer/>
                </Container>
              </Col>
            </Row>
         </Container> 
    );
  }
}

export default App;
