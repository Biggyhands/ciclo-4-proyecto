import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import './css/Layout.css';

import HeadBar from './HeadBar'
import SideBar from './SideBar';
import Content from './Content';
import CopyRight from './CopyRight';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ReportBox from './ReportBox';
import ReportPage from '../pages/ReportPage';

function Layout(){
    return (
        <BrowserRouter>
            <div className='Layout'>
                <HeadBar></HeadBar>
                <Content>
                    <Routes>
                        <Route path="/home" element={ <SideBar/> }/>
                        <Route path="/login" element={ <LoginPage/> } />
                        <Route path="/register" element={ <RegisterPage/> } />
                        <Route path="/report" element={ <ReportPage/> } />
                    </Routes>
                </Content>
                <CopyRight></CopyRight>
            </div>
        </BrowserRouter>
    )
}

export default Layout;