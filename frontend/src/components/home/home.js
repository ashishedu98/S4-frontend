import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Image from '../../assets/images/download.png'
import './home.scss'

const Home=()=>{
    return(
        <div>
            <Container className="homeContainer">
                <Row className="liveWindowTitle">
                    <Col sm={10}>
                        <Row>
                        <Col sm={6} >LIVE MONITORING</Col>
                        <Col sm={6} className="liveTime">15 April 2021 21:15:45</Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="liveWindowRow">
                    <Col sm={10}>
                        <div className="liveWindow">
                            <img className="liveContent" src={Image} alt="sample" />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
export default Home