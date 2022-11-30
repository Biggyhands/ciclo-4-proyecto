import React, { useEffect, useState } from 'react'
import Content from './Content'
import SideBar from './SideBar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './css/Home.css'

export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getUsers = () =>{
            fetch('http://localhost:55000/api/users')
            .then(res => res.json())
            //.then(res => console.log(res.results))
            .then(res => setUsers(res))
        }
        getUsers()     
    }, [])

    return (
            <Content>
                <SideBar/>  
                <div className="Home-container">
                    <legend className='Home-legend h4 pb-2 mb-4 border-bottom border-success'>INICIO</legend>
                    {/* <div className="Home-body"></div> */}
                    <div className="Home-separate">
                        <Row>
                            {users.map((user, index)=>(
                                <Col key={index} sm={3} className="mb-5">
                                    <Card style={{ width: '261px' }}>
                                        <img className="card-img" src={user.image} height="261px" ></img>
                                        <Card.Body>
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Text>Apodo: {user.nickname}</Card.Text>
                                            <Card.Text>{user.position}</Card.Text>
                                            <Card.Text># de soluciones: 2456</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Content>
    )
}


