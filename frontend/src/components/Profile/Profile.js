import React from "react";
import { MDBInput } from "mdbreact";
import { MDBCol } from "mdbreact";
import './Profile.scss'
import { Container,Row,Col,Button,Form,Toast} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import Image from '../../assets/images/criminaltest.jpg'
import { MDBBadge, MDBContainer } from "mdbreact";
import axios from 'axios';
import { useEffect, useState } from 'react'
import {Credentials} from '../../credentials';



const Profile = () => {
    const[record,setRecord]=useState('');
    const[data,setData]=useState([])
    const [showA, setShowA] = useState(false);
  
  const toggleShowA = () => setShowA(!showA);


   const onGet=()=>{
    //console.log("https://4d55a4f4d964.ngrok.io/getSuspectinfo/?sid="+record);
    axios.get(`${Credentials.ENDPOINT}/getSuspectinfo/?sid=${record}`)
    .then(function (response) {
      console.log(response.data);
      setData(response.data);
      setShowA(true);
    })
    .catch(function (error) {
      console.log(error);
    });


   }

   const handleChange=(evt)=>{
        setRecord(evt.target.value);

   }
    // const onhandleclick=(evt)=>{
    //     setRecord(evt.target.value)
    //     axios.post(`http://4d55a4f4d964.ngrok.io/liveRecognition`,request)
    //     .then((res)=>{
    //       console.log(res)
    //       console.log(res.data)
    //       //  console.log(res[0]["lastpic"])
    //        this.setData(res.data)
    //       // console.log(this.state.data[0]["details"])
    //     })
  
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components        
        
    // console.log(url);
    // console.log(location);
  

    return (
        <div >
            <Container >
                 <Row className="title"  >
                  <Col md={{ span: 5, offset: 4 }} >
                    <h2 >Criminal Profile</h2>
                  </Col>
                </Row> 
            <Row className="search" style={{padding:"2vh"}}>
                    <Col md={{ span: 5, offset: 0 }}>
                        <div className="searchWindow">
                    <input className="form-control" type="text" onChange={handleChange}  placeholder="Search" aria-label="Search" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="searchbtnWindow">
                     <Button variant="dark" onClick={onGet}  className="btn1">Search</Button>
                        </div>
                    </Col>
                </Row>
            <Row className="pic">
                <Col sm={6}>
                <div className="formWindow" style={{marginTop:"10vh"}}>
                        {/* <form className="form"> */}

                        <Form>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                                Criminal Name
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="Criminal Name" value={data.name} readOnly />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                                Criminal Id
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="Criminal Id" value={data.sid} readOnly/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                                Time
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="Time" value={data.lst} readOnly />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                               Location
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="Location" value={data.location} readOnly />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                               DOB
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="Date of birth" value={data.date_of_birth} readOnly />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm={2}>
                               Cases
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="No of Cases" value={data.cases} readOnly />
                                </Col>
                        </Form.Group>
                        </Form>
                        </div>
                    </Col>
               
                        {/* <p>
                            <label id="cname" >Criminal Name:</label>
                            <input type="text"value={data.name}></input>
                        </p>
                        <p>
                            <label id="cid">Criminal Id: </label>
                            <input type="text"value={data.sid}></input>
                        </p>
                        <p>
                            <label id="timestamp" >Time:</label>
                            <input type="text"value={data.lst}></input>
                        </p>
                        <p>
                            <label id="location" >Location:</label>
                            <input type="text"value={data.location}></input>
                        </p> */}
                        {/* <p>
                            <label id="cases"></label>
                        </p> */}
                        {/* <p><label>{props.location.aboutProps.name}</label></p> */}
                       
                        
                    {/* <div className="lblWindow">
                    <label className="lblthreat">{data.threat}</label> */}
        
                <Col sm={6}>
                <div className="criminalContent" style={{marginTop:"10vh"}}>
                    <img className="proContent" src={data.image||"https://via.placeholder.com/300"} width="300" height="300" style={{objectFit:"fill",marginLeft:"10vh",border:"solid 2px"}} alt="sample" /> 
                </div>    
                </Col>
            </Row>
            <Row className="criminalContentlandscape" style={{marginTop:"10vh"}}>
                <Col sm={12}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}> 
                            <Toast show={showA} onClose={toggleShowA}>
                                <Toast.Header>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    />
                                    <strong className="me-auto">Criminal Detected</strong>
                                </Toast.Header>
                                <Toast.Body>Criminal Was Last Detected at :{data.location}</Toast.Body>
                            </Toast>
                        </Col>  
                    </Row>
                    <div className="criminalContentlandscapeimg">
                    <img className="proContent" src={data.lastpic||"http://via.placeholder.com/1000x500"} width="1000" height="500" style={{objectFit:"contain"}} alt="sample" />
                    </div>

                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    </div>
 );
}
  
  export default Profile;


