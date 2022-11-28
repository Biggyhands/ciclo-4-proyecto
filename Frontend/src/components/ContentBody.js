import React from 'react';

import './css/Content.css';
import SideBar from './SideBar';

function ContentBody(props){
    return (
        <div className="ContentBody">
            {props.children}
        </div>
    )
}

export default ContentBody;