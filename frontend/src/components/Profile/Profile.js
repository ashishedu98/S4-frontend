import React from "react";
import { MDBInput } from "mdbreact";
import { MDBCol } from "mdbreact";
import './Profile.scss'
import { Container,Row,Col,Button} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import Image from '../../assets/images/criminaltest.jpg'
import { MDBBadge, MDBContainer } from "mdbreact";


const Profile = (props) => {
    console.log(props.location.aboutProps)
    return (
        <div className="window">
            <Container >
            <Row className="search">
                    <Col sm={8}>
                        <div className="searchWindow">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="searchbtnWindow">
                     <Button variant="dark"  className="btn1">Search</Button>
                        </div>
                    </Col>
                </Row>
            <Row className="pic">
                <Col sm={8}>
                    <div className="lblWindow">
                    <label className="lblthreat">Threat Level</label>
                </div>
                </Col>
                <Col sm={4}>
                <div className="criminalContent">
                    <img className="proContent" src={Image} alt="sample" /> 
                </div>    
                </Col>
            </Row>
            
            <div className="formWindow">
                <form className="form">
                <p>
                    <label id="cname">Criminal Name</label>
                </p>
                <p>
                    <label id="cid"> Criminal Id</label>
                </p>
                <p>
                    <label id="address"> Address</label>
                </p>
                <p>
                    <label id="timestamp">Timestamp</label>
                </p>
                <p>
                    <label id="location">Lastseen Location</label>
                </p>
                <p>
                    <label id="cases">Cases</label>
                </p>
                {/* <p><label>{props.location.aboutProps.name}</label></p> */}
                </form>
                </div>
            </Container>
      </div>
    );
  }
  
  export default Profile;


