import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Image from '../../assets/images/download.png'
import './home.scss'

const Home=()=>{
    return(
        <div className="outerMostCOntainer">
            <Container>
                <Row>
                    <Col sm={8}>LIVE MONITORING</Col>
                    <Col sm={4}>15 April 2021 21:15:45</Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <div className="liveWindow">
                            <img className="liveContent" src={Image} alt="sample" />
                        </div>
                    </Col>
                    <Col sm={6}>
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