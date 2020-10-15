import React, { Component } from "react";
import { Container,Row,Col, Card } from 'react-bootstrap'
import NavbarTop from './Nav';
import CardLayout from './Card';
import List from'./List';
import CONSTANTS from '../constants';
import icon from '../icon/mainlogo.png';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          StudentMeta: [],
          StudentList:[],
          sortType:'desc'
        };
    }

    componentDidMount(){
        Promise.all([fetch(CONSTANTS.ENDPOINT.DASHBORDINFO), fetch(CONSTANTS.ENDPOINT.STUDENTLIST)])
        .then(([res1, res2]) => { 
           return Promise.all([res1.json(), res2.json()]) 
        })
        .then(([res1, res2]) => {
          // set state in here
          this.setState({
            sortType:'desc',
            isLoaded: true,
            StudentMeta:res1,
            StudentList:res2
          })
        });  
    }

    render(){
        const studentMetaInfoCards = this.state.StudentMeta.map(data => <CardLayout key={data.id} title={data.title} metainfo={data.line1} metainfo1={data.line2}/>);

        return (
            <Container fluid="lg" className="main-container">
                <Row >
                    <Col lg={1} className="left-nav-bar">
                        <Row className="left-nav-logo-container">
                            <Card.Img className="main-logo"  src={ icon } alt="avatar" />
                        </Row>
                        <Row>

                        </Row>
                        
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
                                { studentMetaInfoCards }
                            </Row>
                            <Row>
                                <List data={ this.state.StudentList } selectedOrderType = { this.state.sortType } changeOrder={ this.sortOrder.bind(this) }/>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );

    }

    sortOrder(eventKey){
        const order = this.state.StudentList;
        if(eventKey === 'asc'){
            this.setState({
                ...this.state,
                sortType:'asc',
                StudentList:order.sort(function(a, b){return a.marks - b.marks})
            })
        } else{
            this.setState({
                ...this.state,
                sortType:'desc',
                StudentList:order.sort(function(a, b){return b.marks - a.marks})
            })
        }
    };

   

}

export default MainContainer;
