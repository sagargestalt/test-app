import React from "react";


function Header(props){

    return (
        <div className="main-header">
            <h3 id="main-title">{ props.maintitle }</h3>
            <div id="sub-title" className="main-sub-header">{ props.subtitile }</div>
        </div>
    );
}

export default Header;
