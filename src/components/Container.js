
import React, { useEffect, useState, useCallback } from 'react';
import { Row } from 'react-bootstrap'
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
        
            <React.Fragment>
                <Row>
                    <CardLayoutContainer data={ StudentMeta }/>
                </Row>
                <Row>
                    <List data={ StudentList } selectedOrderType = { sortType } changeOrder={ SortStudent }/>
                </Row>
            </React.Fragment>
                               
    );

}


export default MainContainer;
