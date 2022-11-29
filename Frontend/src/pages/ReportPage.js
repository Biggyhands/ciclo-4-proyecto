import React from 'react';
import Content from '../components/Content';
import ReportBox from '../components/ReportBox';
import SideBar from '../components/SideBar';


function ReportPage(){
    return (
        // <div className="ReportPage">
            <Content>
                <SideBar></SideBar>
                <ReportBox></ReportBox>
            </Content>            
        // </div> *
    )
}

export default ReportPage;