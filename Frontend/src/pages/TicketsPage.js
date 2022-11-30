import React, { useEffect, useState } from 'react'
import Content from '../components/Content'
import SideBar from '../components/SideBar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'

export default function TicketsPage() {

    const [tickets, setTickets] = useState([])

    useEffect(()=>{
        const getTickets = () =>{
            fetch('http://localhost:55000/api/tickets')
            .then(res => res.json())
            //.then(res => console.log(res.results))
            .then(res => setTickets(res))
        }
        getTickets()     
    }, [])

    return (
        <Content>
                <SideBar/>  
                <div className="Home-container">
                    <legend className='Home-legend h4 pb-2 mb-4 border-bottom border-success'>TICKETS</legend>
                    {/* <div className="Home-body"></div> */}
                    <div className="Home-separate">
                        <Row>
                            {tickets.map((ticket, index)=>(
                                <Col key={index} sm={3} className="mb-5">
                                    <Card style={{ width: '261px' }}>
                                        <Card.Body>
                                            <Card.Title>{ticket.issue}</Card.Title>
                                            <Card.Text>{ticket.description}</Card.Text>
                                            <Card.Text>{ticket.name}</Card.Text>
                                            <Button>En proceso...</Button>
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
