import React, { useContext } from 'react';

import Layout from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/css/App.css';
import { Report } from './Report';

function App(){
    // const { state, dispatch: ctxDispatch } = useContext(Report);
    // const { userInfo } = state;

    return (
        <div className='App'>
            <Layout/>
        </div>
    )
}

export default App;