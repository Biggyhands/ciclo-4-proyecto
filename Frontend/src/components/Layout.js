import React from 'react';

import './css/Layout.css';

import HeadBar from './HeadBar'
import LoginPage from '../pages/LoginPage';
import SideBar from './SideBar';
import Content from './Content';
import CopyRight from './CopyRight';

function Layout(){
    return (
        <div className='Layout'>
            <HeadBar></HeadBar>
            <Content>
                
                <SideBar/>
                <LoginPage></LoginPage>
            </Content>
            <CopyRight></CopyRight>
        </div>
    )
}

export default Layout;