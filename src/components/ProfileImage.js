import React from "react";
import icon from '../icon/profile.png'


function ProfileImage(props){

    return (
        <img src={ props.src ? props.src : icon } alt={ props.altText } height="20"/>
    );
}

export default ProfileImage;
