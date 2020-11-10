import React from 'react';

const MainIcon = props => {
    return <img style={{
        width: "50px",
        height: "50px",
        background: "transparent"
    }} src={`/${props.path}`} alt={props.name} />;
}
 
export default MainIcon;