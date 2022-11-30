import React from 'react';
import Content from '../components/Content';
import ReportBox from '../components/ReportBox';
import SideBar from '../components/SideBar';


function ReportPage(){
    return (
        <Content>
                <SideBar/>  
                <div className="Home-container">
                    <legend className='Home-legend h4 pb-2 mb-4 border-bottom border-success'>REPORTAR TICKET</legend>
                    {/* <div className="Home-body"></div> */}
                    <div className="Home-separate">
                        <ReportBox></ReportBox>
                    </div>
                </div>
            </Content>
    )
}

export default ReportPage;