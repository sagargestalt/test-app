import React from "react";
import CardLayout from './Card';


function CardLayoutContainer(props){

    const studentMetaInfoCards = props.data.map(data => <CardLayout key={data.id} title={data.title} metainfo={data.line1} metainfo1={data.line2}/>);

    return (
        <React.Fragment>
            { studentMetaInfoCards }
        </React.Fragment>
    );
}

export default CardLayoutContainer;
