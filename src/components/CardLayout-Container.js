import React from "react";
import CardLayout from './Card';


function CardLayoutContainer(props){

    const studentMetaInfoCards = props.data.length > 0 ? props.data.map(data => <CardLayout key={data.id} title={data.title} metainfo={data.line1} metainfo1={data.line2}/>) : null;

    return (
        <React.Fragment>
            { studentMetaInfoCards }
        </React.Fragment>
    );
}

export default CardLayoutContainer;
